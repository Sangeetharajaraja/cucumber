
Feature:functions of calculator
 This file describes the functionality of calculator
  Scenario:   addition of two numbers
    Given I enter 25 in the calculator
    And I enter add
    And I enter 30 in the calculator
    And I enter equal
    Then display 55
  
   Scenario: subtract of two numbers
   Given I enter 50 in the calculator
   And I enter subtract
   And I enter 10 in the calculator
   And I enter equal
   Then display 40