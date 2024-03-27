import { test, expect, chromium } from '@playwright/test';


import HomePage from './POM/HomePage';
import LoginPage from './POM/LoginPage';
import SignupFormPage from './POM/SignupFormPage';
import AccountCreatedPage from './POM/AccountCreatedPage';
import DeleteAccountPage from './POM/DeleteAccountPage';
import ContactUsPage from './POM/ContactUsPage';


let homePage
let paginaLogin
let signupFormPage
let accountCreatedPage
let deleteAccountPage
let contactUsPage

let contextoNavegador
let browser
let paginaNavegador

test.beforeAll(async () => {
    browser = await chromium.launch()
    contextoNavegador = await browser.newContext()
    paginaNavegador = await contextoNavegador.newPage()
    await test.setTimeout(6000)

    homePage = new HomePage(paginaNavegador)
    paginaLogin = new LoginPage(paginaNavegador);
    signupFormPage = new SignupFormPage(paginaNavegador)
    accountCreatedPage = new AccountCreatedPage(paginaNavegador)
    deleteAccountPage = new DeleteAccountPage(paginaNavegador)
    contactUsPage = new  ContactUsPage(paginaNavegador)
})

test.describe('Contact Us', async () => {
    test('Test Case 6: Contact Us Form', async () => {

        await test.step("1. Navigate to url 'http://automationexercise.com'", async () => {
            await homePage.navigateHomePage()
        }
        )

        await test.step("2. Verify that home page is visible successfully", async () => {
            await homePage.homePageIsVisible()
        }
        )

        await test.step("3. Click on 'Contact Us' button", async () => {
            await paginaLogin.clickContactUsButton()
        }
        )

        await test.step("4. Verify 'GET IN TOUCH' is visible", async () => {
            await contactUsPage.touchLabelIsVisible()
        }

        )
        
        await test.step("5. Enter name, email, subject and message", async () => {
            await contactUsPage.fillInformationForm()
        }

        )

        await test.step("6. Upload file", async () => {
            await contactUsPage.uploadFile()
        }
        )

        await test.step("7. Click 'Submit' button", async () => {
            await contactUsPage.clickButtonSubmit()
        }
        )
        
        await test.step("8. Click OK button", async () => {
        })

        await test.step("9.  Verify success message 'Success! Your details have been submitted successfully.' is visible", async () => {
        await contactUsPage.messageSuccesYourDetailsIsVisible()
        })

        await test.step("10. Click 'Home' button and verify that landed to home page successfully", async () => {
            await contactUsPage.clickHomeButton()
            await homePage.homePageIsVisible()
            })
        








    })




})


test.afterAll(async () => {
    await paginaNavegador.close();
    await contextoNavegador.close();
    await browser.close();

})
