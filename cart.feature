Feature: Cart Icon
Scenario: Using the cart icon on products page to redirect to cart’s page
	Given I am on products page 
	When I press the Cart Icon 
	Then I am redirected to the cart’s page
