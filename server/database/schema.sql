CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255) NOT NULL,
    rating FLOAT DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    available BOOLEAN DEFAULT TRUE,
    imageUrl VARCHAR(255),
    categories VARCHAR(255),
    size VARCHAR(50),
    colour VARCHAR(50)
);


CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    role VARCHAR(255) DEFAULT 'user'
);


CREATE TABLE Wishlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT,
    postId INT,
    FOREIGN KEY (UserId) REFERENCES Users(id),
    FOREIGN KEY (postId) REFERENCES Products(id)
);


CREATE TABLE Coupon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE Cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT,
    postId INT,
    total DECIMAL(10, 2) DEFAULT 0,
    quantity INT DEFAULT 0,
    FOREIGN KEY (UserId) REFERENCES Users(id),
    FOREIGN KEY (postId) REFERENCES Products(id)
);
