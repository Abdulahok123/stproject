Feature: Selection of product on product page
Scenario: Selection of product on product page 

Given I am on specific product page
When I select a specific product
And I go to the cart page
Then That specific product with are shown on the cart page