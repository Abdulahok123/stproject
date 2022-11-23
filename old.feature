Feature: Old/New Checkbox
Scenario: Old/New Checkbox Selection on Products Page
	Given I am at products page
	When I check old checkbox
	Then It shall show me old products only
