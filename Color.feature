Feature: Color Selection
Scenario: Color Selection in Products Page
	Given  I am at products page
	When  I select a particular color
	Then  It shall show me the products of that color only
