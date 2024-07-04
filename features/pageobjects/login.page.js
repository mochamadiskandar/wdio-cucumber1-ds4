import { $ } from '@wdio/globals'
import Page from './page.js'

/*
class LoginPage inheritance dari class Page
 */
class LoginPage extends Page {
    open(path) {
        return super.open('')
    }
    get inputUsername() {
        return $("//input[@id='user-name']")
    }

    get inputPassword() {
        return $("//input[@name='password']")
    }

    get loginButton() {
        return $("//input[@class='submit-button btn_action']")
    }

    get errorPopupModal() {
        return $("//h3[@data-test='error']")
    }

    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)

        const loginButtonValue = await this.loginButton.getValue()
        console.log(
            '🚀 ~ LoginPage ~ login ~ loginButtonValue:',
            loginButtonValue,
        )
        await this.loginButton.click()
    }

    async validateErrorPopUpMessage(expectedMessage) {
        await this.errorPopupModal.waitForDisplayed({ timeout: 2000 })
        const popupModalText = await this.errorPopupModal.getText()
        console.log('🚀 ~ this popupModalText:', popupModalText)
        await expect(popupModalText[0]).toBe(expectedMessage)
    }
}

export default new LoginPage()
