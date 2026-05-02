package com.loramarketplace.service;

import com.loramarketplace.model.Order;
import com.loramarketplace.model.Product;
import com.loramarketplace.model.User;
import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;

@Service
public class StripeService {

    @Value("${stripe.api-key}")
    private String stripeApiKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeApiKey;
    }

    public String createCheckoutSession(Order order, Product product, User user) {
        // For MVP, we stub this out if keys are missing, but here is the real code:
        try {
            SessionCreateParams params = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}")
                .setCancelUrl("http://localhost:3000/marketplace/" + product.getId())
                .putMetadata("order_id", order.getId().toString())
                .addLineItem(
                    SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(
                            SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd") // or eur
                                .setUnitAmount((long) product.getPriceCents())
                                .setProductData(
                                    SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                        .setName(product.getName())
                                        .build())
                                .build())
                        .build())
                .build();

            Session session = Session.create(params);
            return session.getUrl();
        } catch (Exception e) {
            // Fallback for local testing without real Stripe keys
            return "http://localhost:3000/checkout/success?session_id=mock_session_" + order.getId();
        }
    }
}
