import { Locator, Page, expect } from '@playwright/test'

export default class AccountCreatedPage {
    private pagina: Page
    private textAccountCreated: Locator
    private btnContinue: Locator

    readonly btnDelete: Locator //=  await page.locator('.btn-primary') await btnDelete.click()

    constructor(page: Page) {
        this.pagina = page
        this.textAccountCreated = this.pagina.locator('#form > div > div > div > h2 > b')
        this.btnContinue = this.pagina.locator('#form > div > div > div > div > a')

    }


    public async accountCreateIsVisible() {
        await this.textAccountCreated.isVisible()
    }

    public async clicBtnContinue() {
        await this.btnContinue.click()
    }





}




