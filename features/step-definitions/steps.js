import { browser } from '@wdio/globals'
import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/login.page.js'
import ProductPage from '../pageobjects/product.page.js'

Given(`user already on login page`, async () => {
    await LoginPage.open()
})

When(
    /^user login using "([^"]*)" as username and "([^"]*)" as password$/,
    async (username, password) => {
        await LoginPage.login(username, password)
    },
)

Then(
    'user is successfully logged in and redirected to the inventory page',
    async () => {
        await ProductPage.validateOnPage()
    },
)

Then(
    `error popup displays "Epic sadface: this user has been locked out."`,
    async () => {
        const errorMessage =
            'Epic sadface: Sorry, this user has been locked out.'
        await LoginPage.validateErrorPopUpMessage(errorMessage)
    },
)

Then(
    `error popup displays "Epic sadface: Username and password do not match any user in this service"`,
    async () => {
        const errorMessage =
            'Epic sadface: Username and password do not match any user in this service'
        await LoginPage.validateErrorPopUpMessage(errorMessage)
    },
)

Then(`error popup displays "Kamu belum registrasi bro!"`, async () => {
    const errorMessage = 'Kamu belum registrasi bro!'
    await LoginPage.validateErrorPopUpMessage(errorMessage)
})
