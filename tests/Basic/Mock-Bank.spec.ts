import { test, expect } from '@playwright/test';

//toHaveURL() only checks where you currently are.
//page.goto() is what actually takes you to a URL.
//beforeEach() is a hook that runs before each test in the file. In this case, we are using it to log in to the Mock Bank application before each test.
//afterEach() is a hook that runs after each test in the file. In this case, we are using it to log out of the Mock Bank application after each test.
//toHaveURL() is a Playwright assertion that checks if the current URL matches the expected URL. In this case, we are checking if the user is redirected to the dashboard page after logging in.

test.beforeEach('Login to Mock Bank', async ({ page }) => {

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
});

test('Verify the User details on Mock Bank', async ({ page }) => {
  await expect(page).toHaveURL('https://vb-bank-demo.vercel.app/dashboard'); // toHaveURL is a Playwright assertion that checks if the current URL matches the expected URL. In this case, we are checking if the user is redirected to the dashboard page after logging in.
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

  // verify the Total Deposits
  const totalDeposits = await page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[1]/p[1]').textContent();
  expect(totalDeposits).toContain('$');
  await page.waitForTimeout(2000);
    await page.screenshot({
      path: 'screenshots/Mock-Bank-Deposits.png'
  });
  console.log(totalDeposits); 

  // verify the Total Transfers Out
  const totalTransfersOut = await page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[2]/p[1]').textContent();
  expect(totalTransfersOut).toContain('$');
  await page.waitForTimeout(2000);
    await page.screenshot({
      path: 'screenshots/Mock-Bank-TransfersOut.png'
  });
  console.log(totalTransfersOut);

  // verify the Total Transactions
  const totalTransactions = await page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[3]/p[1]').textContent();
  expect(totalTransactions).toMatch(/\d+/); //the total transactions will be different based on the user, so we will just check if it contains a number
  await page.waitForTimeout(2000);
    await page.screenshot({
      path: 'screenshots/Mock-Bank-Transactions.png'
  });
  console.log(totalTransactions);
});

test.afterEach('Verify the User details on Mock Bank', async ({ page }) => {
  await expect(page).toHaveURL('https://vb-bank-demo.vercel.app/dashboard');
  await page.locator('//*[@id="root"]/div/aside/div[2]/button/span').click();
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: 'screenshots/Mock-Bank-Logout.png'
  });
});
