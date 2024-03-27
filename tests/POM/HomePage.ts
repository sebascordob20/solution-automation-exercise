import { Locator, Page, expect } from '@playwright/test'

export default class HomePage {
    pagina: Page
    private labelUsuarioLogueado: Locator
    private messageusuarioLogueado: Locator
    private btnLogout: Locator
    private btnDeletedAccount: Locator
    private btnTestCasePage: Locator
    private btnAllProducts: Locator


    constructor(page: Page) {
        this.pagina = page
        this.btnDeletedAccount = this.pagina.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a')
        this.btnLogout = this.pagina.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a')
        this.labelUsuarioLogueado = this.pagina.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a')
        this.messageusuarioLogueado = this.pagina.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a')
        this.btnDeletedAccount = this.pagina.locator("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a")
        this.btnTestCasePage = this.pagina.locator("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a")
        this.btnAllProducts = this.pagina.locator("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a")



    }

    public async navigateHomePage() {
        await this.pagina.goto('https://automationexercise.com/');

    }

    public async homePageIsVisible() {
        await expect(this.pagina).toHaveURL(/.*automationexercise/);
    }

    public async labelUsuarioLogueadoIsVisible() {
        this.labelUsuarioLogueado.isVisible()
    }

    public async messageUsuarioLogueadoIsVisible() {
        this.messageusuarioLogueado.isVisible()
    }

    public async deleteAccount() {
        await this.navigateHomePage()
        await this.btnDeletedAccount.click()
    }

    public async logoutAccount() {
        await this.btnLogout.click()
    }

    public async clickTestCasePageButton() {
        await this.btnTestCasePage.click()
    }

    public async clickProductsButton(){
        await this.btnAllProducts.click()
    }


    public async testCasePageIsVisible() {
        await expect(this.pagina).toHaveURL(/.*test_cases/);
    }





}