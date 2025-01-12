// Codegen - Record and Playback tool  - 99% reliable

// To open codegen tool - npx playwright codegen "https://demo.automationtesting.in/Windows.html"

import { test, expect } from '@playwright/test';

test('@smoke Codegen example 1', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await page1.getByRole('link', { name: 'About Selenium' }).click();
  await expect(page1.getByRole('heading', { name: 'About Selenium' })).toBeVisible();
  await expect(page1.getByRole('main')).toContainText('History of Selenium');
  await page.getByRole('link', { name: 'WebTable' }).click();
  await expect(page.getByText('DELETE')).toBeVisible();
});


test('@regression test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').fill('student');
  await expect(page.getByLabel('Username')).toHaveValue('student');
  await page.getByLabel('Password').fill('Password123');
  await expect(page.getByLabel('Password')).toHaveValue('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await page.getByRole('link', { name: 'Log out' }).click();
});



test.only('@smoke @regression test1', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.waitForTimeout(5000)




  const page1 = await page.context().newPage();
  await page1.goto('https://www.google.com/search?q=gmail&oq=gmail&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEzNzlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page1.getByRole('link', { name: 'Gmail - Google Google Mail' }).click();
  await page1.getByRole('link', { name: 'Sign into Gmail' }).click();
});

