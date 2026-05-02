package com.loramarketplace.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.ZonedDateTime;

@Data
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(name = "base_model", nullable = false)
    private String baseModel;

    @Column(name = "price_cents", nullable = false)
    private Integer priceCents;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "safetensors_s3_key", nullable = false)
    private String safetensorsS3Key;

    @Column(name = "created_at", insertable = false, updatable = false)
    private ZonedDateTime createdAt;
}
