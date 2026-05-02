package com.loramarketplace.controller;

import com.loramarketplace.model.Order;
import com.loramarketplace.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody Map<String, Long> payload) {
        Long productId = payload.get("productId");
        // Hardcoded userId 2 for MVP testing
        String checkoutUrl = orderService.createOrderAndGetCheckoutUrl(productId, 2L);
        return ResponseEntity.ok(Map.of("url", checkoutUrl));
    }

    @GetMapping("/user/{userId}")
    public List<Order> getUserOrders(@PathVariable Long userId) {
        return orderService.getUserOrders(userId);
    }
}
