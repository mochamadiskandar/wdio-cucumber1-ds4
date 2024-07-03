import { browser } from '@wdio/globals'

/* 
Perlu export langsung dari sini
Ini jauh lebih fleksibel, dan penerapan OOP dapat bekerja
dalam hal ini berarti Inheritance pada page lainnya
 */
export default class Page {
    open(path) {
        const baseUrl = process.env.BASE_URL
        return browser.url(`${baseUrl}/${path}`)
    }
}
