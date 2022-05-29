Feature: Rename Cat as Admin User

    Scenario Outline: Rename Cat as Admin User

        Given User is at the login page
        When User enters username as '<username>' and password
        And User clicks on login button
        And User renames cat
        Then User is able to view the renamed cat
        Examples:
            | username |
            | admin    |
