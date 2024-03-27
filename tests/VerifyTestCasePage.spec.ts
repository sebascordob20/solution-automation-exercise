import { test, expect, chromium } from '@playwright/test';

import HomePage from './POM/HomePage';
import LoginPage from './POM/LoginPage'

let homePage
let paginaLogin

let contextoNavegador
let browser
let paginaNavegador

test.beforeAll(async () => {
    browser = await chromium.launch()
    contextoNavegador = await browser.newContext()
    paginaNavegador = await contextoNavegador.newPage()
    await test.setTimeout(6000)

     homePage = new HomePage(paginaNavegador)
  paginaLogin = new LoginPage(paginaNavegador)
})

test.describe('Test Case Page', async () => {
    test('Test Case 7: Verify Test Case Page', async () => {
        await test.step("1. Navigate to url 'http://automationexercise.com'", async () => {
            await homePage.navigateHomePage()
          }
          )
      
          await test.step("2. Verify that home page is visible successfully", async () => {
            await homePage.homePageIsVisible()
          }
          )
          await test.step("3. Click on 'Test Cases' button", async () => {
            await homePage.clickTestCasePageButton()
          }
          )

          await test.step("4. Verify user is navigated to test cases page successfully", async () => {
            await homePage.testCasePageIsVisible()
          }
          )


    });
})