import { test, expect, chromium } from '@playwright/test';

import HomePage from './POM/HomePage';

let homePage

let contextoNavegador
let browser
let paginaNavegador


test.beforeAll(async () => {
    browser = await chromium.launch()
    contextoNavegador = await browser.newContext()
    paginaNavegador = await contextoNavegador.newPage()
    await test.setTimeout(8000)

    homePage = new HomePage(paginaNavegador)
})


test.describe('Registrar User', async () => {

    test('Test case 10: Verify Subscription in home page', async () => {

        await test.step("1. Navigate to url 'http://automationexercise.com'", async () => {
            await homePage.navigateHomePage()
        }

        )

        await test.step("2. Verify that home page is visible successfully", async () => {
            await homePage.homePageIsVisible()
        }
        )
        await test.step("3. Scroll down to footer", async () => {
            //await homePage.homePageIsVisible()
        }
        )

        await test.step("4. Verify text 'SUBSCRIPTION'", async () => {
            //await homePage.homePageIsVisible()
        }
        )

        await test.step("5. Enter email address in input and click arrow button", async () => {
            //await homePage.homePageIsVisible()
        }
        )

        await test.step("6. Verify success message 'You have been successfully subscribed!' is visible", async () => {
            //await homePage.homePageIsVisible()
        }
        )




    })

})