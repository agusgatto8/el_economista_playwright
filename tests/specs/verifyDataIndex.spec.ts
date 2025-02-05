import { test, expect } from '@playwright/test';
import { MethodsDataVerifyPage } from '../page objects/methods/methodsDataVerifyPage';

test('verify elements from the home page', async ({ page }) => {
  const methodsDataVerifyPage = new MethodsDataVerifyPage(page);
  await page.goto('https://www.eleconomista.es/');

  await methodsDataVerifyPage.veryfyElementsHomePage();
});
