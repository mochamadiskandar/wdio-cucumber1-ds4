# Feature file adalah entry point dimana sebuah TC dibaca
@login
Feature: Login

  Background:
    Given user already on login page

  @TC1 @positive
  Scenario Outline: TC-1 Successful login using valid username
    When user login using "<username>" as username and "<password>" as password
    Then user is successfully logged in and redirected to the inventory page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |
      # | error_user    | secret_sauce |
      # | visual_user   | secret_sauce |

  @TC2 @negative @lockout
  Scenario Outline: TC-2 Login using lock out username
    When user login using "<lockUsername>" as username and "<lockPassword>" as password
    Then error popup displays "Epic sadface: this user has been locked out."

    Examples:
      | lockUsername    | lockPassword |
      | locked_out_user | secret_sauce |

  @TC3 @negative @random
  Scenario Outline: TC-3 Login using random username
    When user login using "<randomUsername>" as username and "<randomPassword>" as password
    Then error popup displays "Epic sadface: Username and password do not match any user in this service"

    Examples:
      | randomUsername | randomPassword |
      |           1234 | abcd           |
      | loremIpsum     | dolorSitAmet   |
