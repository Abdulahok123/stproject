Feature: Specific Sizes
Scenario: Specific Sizes on Products Page
	Given I am at products page
	When I select a specific size
	Then It shall show me products of that size only
