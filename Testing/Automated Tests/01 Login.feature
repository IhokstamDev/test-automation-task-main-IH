Feature: Login is possible

    Scenario Outline: Login to Supermetrics Kitty Manager

        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the Website
        Examples:
            | username | password  |
            | admin    | adminpass |