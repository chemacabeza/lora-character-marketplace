package com.loramarketplace.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.ZonedDateTime;

@Data
@Entity
@Table(name = "training_jobs")
public class TrainingJob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private String name;

    @Column(name = "base_model", nullable = false)
    private String baseModel;

    private String status;

    @Column(name = "dataset_s3_prefix", nullable = false)
    private String datasetS3Prefix;

    @Column(name = "result_s3_key")
    private String resultS3Key;

    @Column(name = "created_at", insertable = false, updatable = false)
    private ZonedDateTime createdAt;

    @Column(name = "updated_at", insertable = false, updatable = false)
    private ZonedDateTime updatedAt;
}
