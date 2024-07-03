import { $, $$ } from '@wdio/globals'
import Page from './page.js'

class ProductsPage extends Page {
    open(path) {
        return super.open('inventory.html')
    }

    get titleProducts() {
        return $("//span[@class= 'title']")
    }

    get cartButton() {
        return $("//button[contains(text(), 'Add to cart')]")
    }

    async validateOnPage() {
        await this.titleProducts.waitForDisplayed({ timeout: 2000 })
        await expect(this.titleProducts).toBeDisplayed()
    }

    async AddProductToCart() {
        await this.validateOnPage()
        await this.cartButton.waitForClickable({ timeout: 2000 })
        await this.cartButton.click()

        const dataTestValue = await this.cartButton.getAttribute('data-test')
        console.log(`'🚀 ~ Clicked '${dataTestValue}' button.`)
    }
}

export default new ProductsPage()
