import {Page, Locator} from '@playwright/test';
import { FunctionsPage } from './functionsPage';
import { HomeLocatorsPage } from '../locators/homeLocatorsPage';
import { MarketQuotationsLocatorsPage } from '../locators/marketQuotationsLocatorsPage';
import { WorldIndexLocatorsPage } from '../locators/worldIndexLocatorsPage';

export class MethodsDataVerifyPage extends FunctionsPage {

    private readonly titleHomePage: Locator;
    private readonly subscribeButton: Locator;
    private readonly navBar: Locator;
    private readonly marketsButton: Locator;
    private readonly titleMarkets: Locator;
    private readonly rowToOptions: Locator;
    private readonly indexButton: Locator;
    private readonly titleIndex: Locator;
    private readonly subtitleIndex: Locator;
    private readonly tableIndex: Locator;
    private variable1: string;
    private variable2: string; 
    private variable3: string;

    constructor(page: Page) {
        super(page);
        this.titleHomePage = page.locator(HomeLocatorsPage.titleHomePage);
        this.subscribeButton = page.locator(HomeLocatorsPage.subscribeButton);
        this.navBar = page.locator(HomeLocatorsPage.navBar);
        this.marketsButton = page.locator(HomeLocatorsPage.marketsButton);
        this.titleMarkets = page.locator(MarketQuotationsLocatorsPage.titleMarkets);
        this.rowToOptions = page.locator(MarketQuotationsLocatorsPage.rowToOptions);
        this.indexButton = page.locator(MarketQuotationsLocatorsPage.indexButton);
        this.titleIndex = page.locator(WorldIndexLocatorsPage.titleIndex);
        this.subtitleIndex = page.locator(WorldIndexLocatorsPage.subtitleIndex);
        this.tableIndex = page.locator(WorldIndexLocatorsPage.tableIndex);
        this.variable1 = '';
        this.variable2 = '';
        this.variable3 = '';
    }

    async veryfyElementsHomePage() {
        await this.expectElementVisible(HomeLocatorsPage.aceptCookiesButton);
        await this.checkTextElement(HomeLocatorsPage.aceptCookiesButton, 'Aceptar');
        await this.clickOn(HomeLocatorsPage.aceptCookiesButton);
        await this.expectElementVisible(HomeLocatorsPage.titleHomePage);
        await this.checkValue(HomeLocatorsPage.titleHomePage, 'elEconomista.es');
        await this.expectElementVisible(HomeLocatorsPage.subscribeButton);
        await this.checkTextElement(HomeLocatorsPage.subscribeButton, 'SUSCRÍBETE');
        await this.expectElementVisible(HomeLocatorsPage.navBar);
        await this.expectElementVisible(HomeLocatorsPage.marketsButton);
        await this.elementIsClickeable(HomeLocatorsPage.marketsButton);
        await this.clickOn(HomeLocatorsPage.marketsButton);
    }

    async verifyElementsMarket() {
        await this.expectElementVisible(MarketQuotationsLocatorsPage.titleMarkets);
        await this.checkTextElement(MarketQuotationsLocatorsPage.titleMarkets, 'Mercados');
        await this.expectElementVisible(MarketQuotationsLocatorsPage.rowToOptions);
        await this.elementIsClickeable(MarketQuotationsLocatorsPage.rowToOptions);
        await this.expectElementVisible(MarketQuotationsLocatorsPage.indexButton);
        await this.elementIsClickeable(MarketQuotationsLocatorsPage.indexButton);
        await this.clickOn(MarketQuotationsLocatorsPage.indexButton);
    }

    async saveValues() {
        
    }
}