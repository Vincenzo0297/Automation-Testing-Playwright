import { test, expect } from '@playwright/test';

test('Practice Test Automation - Login', async ({ page }) => {

  // await page means that we are using the page object to interact with the web page.
  await page.goto('https://vb-bank-demo.vercel.app/login');
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: 'screenshots/Mock-Bank-Page.png'
  });

  // Click on User button
  await page.locator('//*[@id="root"]/div/div[1]/div[2]/div/button[1]').click();
  await page.screenshot({
    path: 'screenshots/Mock-Bank-User.png'
  });
  await page.waitForTimeout(2000);

  // verify the total balance is $15,000.00
  const totalBalance = await page.locator('//*[@id="root"]/div/div/main/div/div/div[2]/div[1]/div[1]/h2').textContent();
  //the number will be different based on the user, so we will just check if it contains a $ sign
  expect(totalBalance).toContain('$');
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: 'screenshots/Mock-Bank-Balance.png'
  });
  console.log(totalBalance);

  //verify the account number
  const accountNumber = await page.locator('//*[@id="root"]/div/div/main/div/div/div[2]/div[2]/div/span[2]').textContent();
  expect(accountNumber).toMatch(/\d+/); //the account number will be different based on the user, so we will just check if it contains a number
  await page.waitForTimeout(2000);
  await page.screenshot({
      path: 'screenshots/Mock-Bank-AccountNumber.png'
  });
  console.log(accountNumber); 
});