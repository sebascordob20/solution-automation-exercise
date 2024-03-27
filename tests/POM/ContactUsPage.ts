import { Locator, Page, expect } from '@playwright/test'

export default class ContactUsPage{
    pagina: Page
    private getInTouchLabel: Locator
    private webElementsFormContactUs: Locator[]
    private submitBtn: Locator
    private messageSuccesYourDetails:Locator
    private homeBtn: Locator

    constructor(page: Page) {
        this.pagina = page
        this.getInTouchLabel = this.pagina.locator("#contact-page > div.row > div.col-sm-8 > div > h2")
        this.submitBtn = this.pagina.getByRole('button', { name: 'Submit' })
        this.messageSuccesYourDetails = this.pagina.locator('.status')
        this.homeBtn = this.pagina.locator('#form-section > a')
    
    }


    public async fillInformationForm(){
        this.webElementsFormContactUs = await this.pagina.locator(".form-control").all();
        await this.webElementsFormContactUs[0].fill('userrandom')
        await this.webElementsFormContactUs[1].fill('ibarguensino@gmail.com')
        await this.webElementsFormContactUs[2].fill('subjec0')
        await this.webElementsFormContactUs[3].fill('Here I will write a message about Automation Exercise page.')

    }

    public async uploadFile(){
     await this.webElementsFormContactUs[4].setInputFiles('C:\Users:\archive.txt')

    }

    public async touchLabelIsVisible(){
        await this.getInTouchLabel.isVisible()
    }


    public async clickButtonSubmit(){
        this.pagina.on('dialog', async (d) =>{
            expect(d.type()).toContain('confirm');
            await d.accept();
        })
        
        await this.submitBtn.click()
    }

    public async messageSuccesYourDetailsIsVisible(){
        await this.messageSuccesYourDetails.isVisible()
    }

    public async clickHomeButton(){
        await this.homeBtn.click()
    }


}