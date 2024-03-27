import { Page, Locator , expect} from '@playwright/test';


export default class ProductsDetailsPage{
    private pagina: Page
    private productName: Locator
    private categoryProduct: Locator
    private priceProduct: Locator
    private aviabilityProduct: Locator
    private conditionsProduct: Locator
    private brandProduct: Locator

    constructor(page: Page) {
        this.pagina = page
        this.productName = this.pagina.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > h2')
        this.categoryProduct = this.pagina.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(3)')
        this.priceProduct = this.pagina.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > span > span')
        this.aviabilityProduct = this.pagina.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(6) > b')
        this.conditionsProduct = this.pagina.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(7) > b')
        this.brandProduct = this.pagina.locator('body > section > div > div > div.col-sm-9.padding-right > div.product-details > div.col-sm-7 > div > p:nth-child(8) > b')

    }

    public async currentlyPageIsVisible(){
        await expect(this.pagina).toHaveURL(/.*product_details/);
    
    }
    
    public async detailsProductIsVisible(){
        await this.productName.isVisible();
        await this.categoryProduct.isVisible();
        await this.priceProduct.isVisible();
        await this.aviabilityProduct.isVisible();
        await this.conditionsProduct.isVisible();
        await this.brandProduct.isVisible();
    }
    




}