-- Initial Schema for LoRA Character Marketplace

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'USER',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    base_model VARCHAR(50) NOT NULL, -- e.g., 'SDXL', 'SD 1.5', 'Flux'
    price_cents INTEGER NOT NULL,
    image_url VARCHAR(255),
    safetensors_s3_key VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    stripe_session_id VARCHAR(255) UNIQUE,
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, PAID, FAILED
    amount_cents INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE downloads (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45)
);

CREATE TABLE training_jobs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    name VARCHAR(100) NOT NULL,
    base_model VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, PROCESSING, COMPLETED, FAILED
    dataset_s3_prefix VARCHAR(255) NOT NULL,
    result_s3_key VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sample Data (Mock)
INSERT INTO users (username, email, password_hash, role) VALUES 
('admin', 'admin@example.com', '$2a$10$xyz...', 'ADMIN'),
('testuser', 'user@example.com', '$2a$10$xyz...', 'USER');

INSERT INTO products (name, description, base_model, price_cents, image_url, safetensors_s3_key) VALUES 
('Emma from Ireland', 'Highly consistent portrait LoRA for an Irish aesthetic.', 'SDXL', 999, '/images/emma/sample1.jpg', 'private/loras/1/emma.safetensors'),
('Cyberpunk Knight', 'Stylized armor and neon lighting LoRA.', 'Flux', 1499, '/images/knight/sample1.jpg', 'private/loras/2/knight.safetensors');
