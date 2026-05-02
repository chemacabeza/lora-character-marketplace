package com.loramarketplace.service;

import com.loramarketplace.model.Order;
import com.loramarketplace.model.Product;
import com.loramarketplace.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final ProductService productService;
    private final StripeService stripeService;

    public String createOrderAndGetCheckoutUrl(Long productId, Long userId) {
        Product product = productService.getProductById(productId);
        
        Order order = new Order();
        // order.setUser(userService.findById(userId)); // Assuming user service exists
        order.setProduct(product);
        order.setAmountCents(product.getPriceCents());
        order.setStatus("PENDING");
        
        order = orderRepository.save(order);
        
        String checkoutUrl = stripeService.createCheckoutSession(order, product, null);
        
        // Save the mock session id if we fallback
        if(checkoutUrl.contains("mock_session_")) {
            order.setStripeSessionId("mock_session_" + order.getId());
            orderRepository.save(order);
        }
        
        return checkoutUrl;
    }

    public void fulfillOrder(String stripeSessionId) {
        Order order = orderRepository.findByStripeSessionId(stripeSessionId);
        if (order != null) {
            order.setStatus("PAID");
            orderRepository.save(order);
        }
    }

    public List<Order> getUserOrders(Long userId) {
        return orderRepository.findByUserId(userId);
    }
}
