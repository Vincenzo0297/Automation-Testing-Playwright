import { test, expect } from '@playwright/test';

test('Practice Test Automation - Login', async ({ page }) => {

  // await page means that we are using the page object to interact with the web page.
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Take screenshot
  await page.screenshot({
    path: 'screenshots/practice-test-login.png'
  });

  await page.locator("//*[@id='username']").fill('mynameis');
  await page.waitForTimeout(5000); 
  await page.screenshot({
    path: 'screenshots/practice-test-login-username.png'
  });
  
  await page.locator("//*[@id='password']").fill('Password123');
  await page.waitForTimeout(5000); 
  await page.screenshot({
    path: 'screenshots/practice-test-login-password.png'
  });

  
  await page.locator("//*[@id='submit']").click();
  await page.waitForTimeout(5000); // 5 seconds
  await page.screenshot({
    path: 'screenshots/practice-test-login.png'
  });
});