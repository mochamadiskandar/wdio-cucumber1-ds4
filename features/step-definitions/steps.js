import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../pageobjects/login.page.js'
import ProductPage from '../pageobjects/product.page.js'

Given(`user already on login page`, async () => {
    await LoginPage.open()
})

When(
    /^user login using "([^"]*)" as valid username and "([^"]*)" as valid password$/,
    async (username, password) => {
        await LoginPage.login(username, password)
    },
)

Then(
    `user is successfully Log in and redirect to the Inventory Page`,
    async () => {
        await ProductPage.validateOnPage()
    },
)
