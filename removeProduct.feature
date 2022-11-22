Feature: Deleting products on the cart page
Scenario: Deleting products on the cart page

Given I add a product to cart
Given I am on the cart page
When I press the remove option
Then My product is removed from the cart