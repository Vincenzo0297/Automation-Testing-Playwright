import { test, expect } from '@playwright/test';
import { LoginAccount } from '../Pages/LoginAccount';
import { TransferDetails } from '../Pages/TransferDetails';

test.beforeEach('Login to Mock Bank', async ({ page }) => {
  const loginAccount = new LoginAccount(page);
  await page.goto('https://vb-bank-demo.vercel.app/login');
  await loginAccount.goTo();
});

test('Login User Account', async ({ page }) => {
  const loginAccount = new LoginAccount(page);
  await loginAccount.verifyBalance();
  await loginAccount.verifyNumber();
  await loginAccount.verifyDeposits();
  await loginAccount.verifyTransferOut();
  await loginAccount.verifyTransactions();
});

test('Navigate to Transfer', async ({ page }) => {
  const transferDetail = new TransferDetails(page);
  await transferDetail.clickTransferButton();
  await transferDetail.enterAccountNumber();
  await transferDetail.enterAmount();
  await transferDetail.enterDescription();
});