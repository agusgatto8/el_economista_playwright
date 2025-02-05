import { test, expect } from '@playwright/test';

test('verify elements from the home page', async ({ page }) => {
  await page.goto('https://www.eleconomista.es/');

});
