Feature: Awesomeness of cat name not James

    Scenario: Check Awesomeness value of cat

        Given User is at the login page
        When User logs in
        And User clicks on login button
        And User renames 1st cat to bob
        Then Awesomeness value is sum of ASCII value of the characters