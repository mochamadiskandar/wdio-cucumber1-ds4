# Feature file adalah entry point dimana sebuah TC dibaca
@login
Feature: Login

  @TC1
  Scenario: TC-1 Validate login with hardcode test data
    Given user already on login page
    When user login using "standard_user" as username and "secret_sauce" as password
    Then user is successfully Log in and redirect to the Inventory Page

  @TC2
  Scenario Outline: TC-2 Validate login with multiple test data
    Given user already on login page
    When user login using "<username>" as username and "<password>" as password
    Then user is successfully Log in and redirect to the Inventory Page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |
      | error_user    | secret_sauce |
      | visual_user   | secret_sauce |
      # | locked_out_user | secret_sauce |
