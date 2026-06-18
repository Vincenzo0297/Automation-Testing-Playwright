import { test } from '@playwright/test';
import { LoginAccount } from '../Pages/LoginAccount';

test.beforeEach('Login to Mock Bank', async ({ page }) => {
  await page.goto('https://vb-bank-demo.vercel.app/login');
});

test('Login User Account', async ({ page }) => {
  const loginAccount = new LoginAccount(page);
  await loginAccount.goTo();
  await loginAccount.verifyBalance();
  await loginAccount.verifyNumber();
  await loginAccount.verifyDeposits();
  await loginAccount.verifyTransferOut();
  await loginAccount.verifyTransactions();
});