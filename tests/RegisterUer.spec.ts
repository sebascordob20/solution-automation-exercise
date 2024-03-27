import { test, expect, chromium } from '@playwright/test';

import HomePage from './POM/HomePage';
import LoginPage from './POM/LoginPage';
import SignupFormPage from './POM/SignupFormPage';
import AccountCreatedPage from './POM/AccountCreatedPage';
import DeleteAccountPage from './POM/DeleteAccountPage';

let homePage
let paginaLogin
let signupFormPage
let accountCreatedPage
let deleteAccountPage

let contextoNavegador
let browser
let paginaNavegador

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
        ;
}
test.beforeAll(async () => {
    browser = await chromium.launch()
    contextoNavegador = await browser.newContext()
    paginaNavegador = await contextoNavegador.newPage()
    await test.setTimeout(8000)

    homePage = new HomePage(paginaNavegador)
    paginaLogin = new LoginPage(paginaNavegador);
    signupFormPage = new SignupFormPage(paginaNavegador)
    accountCreatedPage = new AccountCreatedPage(paginaNavegador)
    deleteAccountPage = new DeleteAccountPage(paginaNavegador)
})


test.describe('Registrar User', async () => {

    test('Test case 1: Register User succesfull', async () => {

        await test.step("1. Navigate to url 'http://automationexercise.com'", async () => {
            await homePage.navigateHomePage()
        }

        )

        await test.step("2. Verify that home page is visible successfully", async () => {
            await homePage.homePageIsVisible()
        }

        )

        await test.step("3. Click on 'Signup / Login' button", async () => {
            await paginaLogin.clickOpcionSignupLogin()
        }

        )

        await test.step("4. Verify 'New User Signup!' is visible", async () => {
            await paginaLogin.signupMessageIsVisible()
        }

        )

        await test.step("5. Enter name and email address", async () => {
            await paginaLogin.newUserSignup('usuarioDePrueba123', 'ibarguensino@gmail.com')
        }

        )

        await test.step("6. Click 'Signup' button", async () => {
            await paginaLogin.clickButtonSignup()
        }

        )


        await test.step("7. Verify that 'ENTER ACCOUNT INFORMATION' is visible", async () => {
            await signupFormPage.enterAccountInformationMessageIsVisible()

        }

        )
        await test.step("8. Fill details: Title, Name, Email, Password, Date of birth", async () => {
            await signupFormPage.fillDetailsInformation()

        }
        )

        await test.step("9. Select checkbox 'Sign up for our newsletter!'", async () => {
            await signupFormPage.selectCheckboxNewsletter()

        }
        )


        await test.step("10. Select checkbox 'Receive special offers from our partners!'", async () => {
            await signupFormPage.selectCheckboxPartners()

        }
        )
        await test.step("11. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async () => {
            await signupFormPage.fillDetailsInformation2()
        }
        )

        await test.step("12. Click 'Create Account button'", async () => {
            await signupFormPage.clickCreateAccountButton()
        }
        )

        await test.step("13. Verify that 'ACCOUNT CREATED!' is visible", async () => {
            await accountCreatedPage.accountCreateIsVisible()
        }
        )

        await test.step("14. Click 'Continue' button", async () => {
            await accountCreatedPage.clicBtnContinue()
        }
        )

        await test.step("15. Verify that 'Logged in as username' is visible", async () => {
            await homePage.labelUsuarioLogueadoIsVisible()
        }
        )

        /*
        await test.step("16. Delete Account", async () => {
            await homePage.deleteAccount()
        }
        )
        

        await test.step("17. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", async () => {
            await deleteAccountPage.labelAccountDeletedIsVisible()
        }
        )
        */
    })

})

test.afterAll(async () => {
    await paginaNavegador.close();
    await contextoNavegador.close();
    await browser.close();

})




