Feature: Total cost
Scenario: Showing products prices and total price on carts page 
    Given I add a product to cart
    When I am on cart page
    Then I am shown the specific product(s) price(s) and the Total cost on the cart page
