import { Locator, Page, expect } from '@playwright/test'

export default class LoginPage {
    readonly pagina: Page
    private opcionSignupLogin: Locator
    private campoEmailLogin: Locator
    private campoPasswordLogin: Locator
    private btnLogin: Locator
    private emailOrPaswwordIncorrectMessage: Locator

    private loginToYourAccountMessage: Locator
    private newUserSignupMessage: Locator
    private campoNameSignup: Locator
    private campoEmailUserSignup: Locator
    private btnSignup: Locator
    private labelEmailAddressAlreadyExists: Locator
    private btnContactUs:Locator

    constructor(page: Page) {
        this.pagina = page
        this.opcionSignupLogin = this.pagina.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a')
        this.campoEmailLogin = this.pagina.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > input[type=email]:nth-child(2)')
        this.campoPasswordLogin = this.pagina.getByRole('textbox', { name: 'Password' })
        this.btnLogin = this.pagina.getByRole('button', { name: 'Login' })
        this.emailOrPaswwordIncorrectMessage = this.pagina.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p')

        this.loginToYourAccountMessage = this.pagina.locator('#form > div > div > div.col-sm-4.col-sm-offset-1 > div > h2')
        this.newUserSignupMessage = this.pagina.locator('#form > div > div > div:nth-child(3) > div > h2')
        this.campoNameSignup = this.pagina.getByRole('textbox', { name: 'Name' })
        this.campoEmailUserSignup = this.pagina.locator('#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)')
        this.btnSignup = this.pagina.locator('#form > div > div > div:nth-child(3) > div > form > button')
        this.labelEmailAddressAlreadyExists = this.pagina.locator('#form > div > div > div:nth-child(3) > div > form > p')
        this.btnContactUs = this.pagina.locator("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(8) > a")
    }

    public async clickOpcionSignupLogin() {
        await this.opcionSignupLogin.click();

    }
    public async signupMessageIsVisible() {
        await this.newUserSignupMessage.isVisible()
    }

    public async loginToYourAccountMessageIsVisible() {
        await this.loginToYourAccountMessage.isVisible()
    }



    public async newUserSignup(campoName, campoEmailUser) {
        await this.campoNameSignup.fill(campoName);
        await this.campoEmailUserSignup.fill(campoEmailUser);
    }

    public async enterCredentials(email, password) {
        await this.campoEmailLogin.fill(email)
        await this.campoPasswordLogin.fill(password)
    }

    public async clickButtonLogin() {
        await this.btnLogin.click();

    }

    public async clickButtonSignup() {
        await this.btnSignup.click();

    }

    public async clickContactUsButton(){
      await this.btnContactUs.click();  
    }

    public async emailOrPaswwordIncorrectMessageIsVisible() {
        await this.emailOrPaswwordIncorrectMessage.isVisible();
    }

    public async labelEmailAddressAlreadyExistsIsVisible() {
        await this.labelEmailAddressAlreadyExists.isVisible();
    }

}