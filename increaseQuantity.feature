Feature: Increase the amount of product on cart page

Scenario: Increase the amount of product on cart page
Given I am on the cart page and i have added a product to cart
Given I add a product to cart
When I increase the product quantity using plus button
Then My product quantity increases
