import { test, expect, chromium } from '@playwright/test';


import HomePage from './POM/HomePage';
import LoginPage from './POM/LoginPage';
import ProductsPage from './POM/ProductsPage';
import ProductDetailsPage from './POM/ProductDetailsPage';

let homePage
let paginaLogin
let productsPage
let productDetailsPage

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
  productsPage = new ProductsPage(paginaNavegador)
  productDetailsPage = new ProductDetailsPage(paginaNavegador)

})

test.describe('Verify Products', async () => {
    test('Test Case 8: Verify All Products and product detail page', async () => {
        await test.step("1. Navigate to url 'http://automationexercise.com'", async () => {
            await homePage.navigateHomePage()
          }
          )
      
          await test.step("2. Verify that home page is visible successfully", async () => {
            await homePage.homePageIsVisible()
          }
          )
          await test.step("3. Click on 'Products' button", async () => {
            await homePage.clickProductsButton()
          }
          )

          await test.step("4. Verify user is navigated to ALL PRODUCTS page successfully", async () => {
            await productsPage.productsPageIsVisible()
          }
          )

          await test.step("5. The products list is visible", async () => {
            await productsPage.listProductsIsVisible()
          }
          )

          await test.step("6. Click on 'View Product' of first product", async () => {
            await productsPage.chooseTheFirstProduct()
          }
          )

          await test.step("7. User is landed to product detail page", async () => {
            await productDetailsPage.currentlyPageIsVisible()

          }
          )

          await test.step("8. Verify that detail detail is visible: product name, category, price, availability, condition, bra", async () => {
            await productDetailsPage.detailsProductIsVisible()
      
          }
          )



    });
})

test.afterAll(async () => {
    await paginaNavegador.close();
    await contextoNavegador.close();
    await browser.close();

})