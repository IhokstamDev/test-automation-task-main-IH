Feature: Rename Cat as Normal User

    Scenario: Rename Cat as Normal User

        Given User is at the login page
        When User enters username as normal user and password
        And User clicks on login button
        And User renames cat as normal user
        Then User is able to view the renamed cat
        
