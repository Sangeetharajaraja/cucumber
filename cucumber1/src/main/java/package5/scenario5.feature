Feature: functions of calculator
Scenario Outline: I am  tester
   Given I am a "<testertype>" tester
   And I go to it
   And I "<workout>" it
   
   Examples:
   |testertype | workout  |
   |good       | complete |
   |bad        | mess     |
   |avg        |satisfies |
   