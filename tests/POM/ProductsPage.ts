import { Locator, Page, expect } from '@playwright/test'

export default class ProductsPage{
private pagina: Page
private allProductsMessage: Locator
private searchProductField: Locator
private searcProductButton: Locator
private searchedProductsMessage: Locator
private listAllProducts: Locator[]


constructor(page: Page){
    this.pagina = page
    this.allProductsMessage = this.pagina.locator('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > h2')
    this.searchProductField = this.pagina.locator('#search_product')
    this.searcProductButton = this.pagina.locator('#submit_search')
    this.searchedProductsMessage = this.pagina.locator('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > h2')



}

public async productsPageIsVisible(){
await expect(this.pagina).toHaveURL(/.*products/);

}
public async listProductsIsVisible(){
await this.allProductsMessage.isVisible();

}

public async chooseTheFirstProduct(){
    this.listAllProducts = await this.pagina.locator('.nav-justified').all()
    console.log(this.listAllProducts.length)
    await this.listAllProducts[0].click()
}

public async searchProduct(nameProduct: string){
await this.searchProductField.fill(nameProduct)
await this.searcProductButton.click()
}

public async searchedProductsIsVisible(){
await  this.searchedProductsMessage.isVisible() 
}
}