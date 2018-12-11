Feature:  validate user credentials
   sdffgdfgdfg
   fgdfgdfg

  Scenario: validate user able to login and gets error message while entering invalid username and password
    When I launch open cart application
    And I should see "OpenCart" title
    And I should click on login
    And I enter email
    And I enter password
    And I click on login confirm
    Then I verify error message
