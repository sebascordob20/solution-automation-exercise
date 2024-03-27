import { Locator, Page, expect } from '@playwright/test'

export default class SignupFormPage {
    readonly pagina: Page

    private enterAccountInformationMessage: Locator
    private checkboxMr: Locator
    private campoName: Locator
    private campoPassword: Locator

    private dropdopwListDay: Locator
    private dropdopwListMonth: Locator
    private dropdopwListYear: Locator
    private newsletterCheckbox: Locator
    private optin: Locator

    private campoFirstName: Locator
    private campoLastName: Locator
    private campoCompany: Locator
    private campoAddress1: Locator
    private campoAddress2: Locator
    private country: Locator
    private state: Locator
    private city: Locator
    private zipCode: Locator
    private mobileNumber: Locator
    private btnEnviarForm: Locator

    constructor(page: Page) {
        this.pagina = page

        this.enterAccountInformationMessage = this.pagina.locator('#form > div > div > div > div > h2 > b')
        this.checkboxMr = this.pagina.locator('#id_gender1')
        this.campoName = this.pagina.locator('#name')
        this.campoPassword = this.pagina.locator('#password')

        this.dropdopwListDay = this.pagina.locator('#days')
        this.dropdopwListMonth = this.pagina.locator('#months')
        this.dropdopwListYear = this.pagina.locator('#years')
        this.newsletterCheckbox = this.pagina.locator('#newsletter')
        this.optin = this.pagina.locator('#optin')
        this.campoFirstName = this.pagina.locator('#first_name')

        this.campoLastName = this.pagina.locator('#last_name')
        this.campoCompany = this.pagina.locator('#company')
        this.campoAddress1 = this.pagina.locator('#address1')
        this.campoAddress2 = this.pagina.locator('#address2')
        this.country = this.pagina.locator('#country')

        this.state = this.pagina.locator('#state')
        this.city = this.pagina.locator('#city')
        this.zipCode = this.pagina.locator('#zipcode')
        this.mobileNumber = this.pagina.locator('#mobile_number')

        this.btnEnviarForm = this.pagina.locator('.btn').first()

    }

    public async enterAccountInformationMessageIsVisible() {
        await this.enterAccountInformationMessage.isVisible()
    }

    public async fillDetailsInformation() {
        await this.checkboxMr.check()
        await this.campoName.fill('sebastian futuro ethical hacker')
        await this.campoPassword.fill('contraseniarandomxajQWER')
        await this.dropdopwListDay.selectOption({ index: Math.floor(Math.random() * 30) })
        await this.dropdopwListMonth.selectOption({ index: Math.floor(Math.random() * 11) })
        await this.dropdopwListYear.selectOption({ index: Math.floor(Math.random() * 119) })

    }

    public async selectCheckboxNewsletter() {
        await this.newsletterCheckbox.check()

    }

    public async selectCheckboxPartners() {
        await this.optin.check()
        await this.pagina.mouse.move(0, 100);

    }

    public async fillDetailsInformation2() {
        await this.campoFirstName.fill('Esneyder');
        await this.campoLastName.fill('Perez')
        await this.campoCompany.fill('compania3')
        await this.campoAddress1.fill('direccion calle 110 #1-40')
        await this.campoAddress2.fill('direccion calle 110 tranversal 1-10')
        await this.country.selectOption({ index: Math.floor(Math.random() * 5) })
        await this.state.fill('Valle del Cauca')
        await this.city.fill('Cali')
        await this.zipCode.fill('1929384')
        await this.mobileNumber.fill('322455123')


    }

    public async clickCreateAccountButton() {
        await this.btnEnviarForm.click()
    }

}