Feature:eating fruits
this explain about fruits
Scenario Outline: eating
Given There are "<start>" fruits
|type  | with  |
|apple |john   |
|mango |joseph |
When I eat "<eat>" fruits
Then I have "<left>" fruits

Examples:
|start | eat  |  left  |
|2     |5     | 6      |
|7     |8     | 8      |