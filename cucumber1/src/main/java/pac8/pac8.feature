Feature: TestMe App
check the login functionality of TestMe App
Scenario Outline: login process
Given I enter the url "http://10.232.237.143:443/TestMeApp/login.htm"
And I Enter "<username>"
And I enter "<password>"
Then I click login


Examples: 

|username    |  password   |
|lalitha     | password123 |       
