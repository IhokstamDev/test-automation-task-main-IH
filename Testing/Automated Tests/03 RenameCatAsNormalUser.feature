Feature: Rename Cat as Normal User

    Scenario Outline: Rename Cat as Normal User

        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User renames cat as normal user
        Then User is able to view the renamed cat
        Examples:
            | username | password  |
            | user     | helloworld |
