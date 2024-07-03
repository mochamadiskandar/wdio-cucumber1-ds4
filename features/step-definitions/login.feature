# Feature file adalah entry point dimana sebuah TC dibaca

Feature: Login

    @TC1
    Scenario: Valid login with click login button
        Given user already on login page
        When user login using "standard_user" as valid username and "secret_sauce" as valid password
        Then user is successfully Log in and redirect to the Inventory Page


    @TC1 @skip
    Scenario Outline: Valid login with click login button
        Given user already on login page
        When user login using <username> as valid username and <password> as valid password
        Then user is successfully Log in and redirect to the Inventory Page

        Examples:
            | username          |   password        |
            | standard_user     |   secret_sauce    |