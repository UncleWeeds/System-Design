#Basic Microservices for Online Shopping Platform (Work in Progress)

This repository contains a basic implementation of an online shopping platform using a microservices architecture. The system is designed to achieve scalability and efficiency by breaking down the functionalities into the following microservices:

User Service
The User Service manages user profiles, authentication, and authorization. It includes the following features:

User Registration: Allows new users to create an account by providing necessary information such as username, email, and password.

User Login: Handles user authentication and generates access tokens for secure communication with other services.

user Delete: You can delete your account.

user View: You can view your user account info.

Product Service
The Product Service manages the product catalog, including storing and retrieving product information. Key features include:

Product Creation: Allows authorized users (admins) to add new products to the catalog with details such as name, description, price, and availability.

Product Retrieval: Provides APIs to fetch product details based on product IDs, categories, or search queries.

Product Update and Deletion: Allows authorized users to update product information or remove products from the catalog.

Cart Service
The Cart Service manages operations related to the user's shopping cart. It provides the following functionalities:

Add to Cart: Enables users to add products to their shopping cart.

Remove from Cart: Allows users to remove products from the cart if they change their minds.


