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




})

test.describe('Logout', async () => {
  test('Test Case 4: Logout User', async () => {

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


    await test.step("4. Verify 'Login to your account' is visible", async () => {
      await paginaLogin.loginToYourAccountMessageIsVisible()
    }
    )

    await test.step("5. Enter correct email address and password", async () => {
      await paginaLogin.enterCredentials('ibarguensino@gmail.com', 'contraseniarandomxajQWER')
    }
    )

    await test.step("6. Click 'login' button", async () => {
      await paginaLogin.clickButtonLogin()
    }
    )

    await test.step("7. Verify that 'Logged in as username' is visible", async () => {
      await homePage.messageUsuarioLogueadoIsVisible()
    }
    )

    await test.step("8. Click 'Logout' button", async () => {
      await homePage.logoutAccount()
    }
    )

    await test.step("9. Verify that user is navigated to login page", async () => {
      await homePage.homePageIsVisible()
    }
    )
  });
})



test.afterAll(async () => {
  await paginaNavegador.close();
  await contextoNavegador.close();
  await browser.close();

})
