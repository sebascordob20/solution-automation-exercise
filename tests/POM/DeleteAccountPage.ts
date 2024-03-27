import { Locator, Page, expect } from '@playwright/test'

export default class DeleteAccountPage {
    pagina: Page
    private labelAccountDeleted: Locator
    private btnContinue: Locator

    constructor(page: Page) {
        this.pagina = page
        this.labelAccountDeleted = this.pagina.locator('#form > div > div > div > div > a')
        this.btnContinue = this.pagina.locator('#form > div > div > div > div > a')
    }


    public async clickButtonContinue() {
        
        await this.btnContinue.click()
    }

    public async labelAccountDeletedIsVisible() {
        await this.labelAccountDeleted.isVisible()
        await this.clickButtonContinue()
    }



}