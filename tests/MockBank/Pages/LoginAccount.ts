import { Locator, Page, expect } from "@playwright/test";

export class LoginAccount {
  readonly ClickUserButton: Locator;
  readonly verifyAccountBalance: Locator;
  readonly verifyAccountNumber: Locator;
  readonly verfiyTotalDeposits: Locator;
  readonly verfiyTransferOut: Locator;
  readonly verifyTransaction: Locator;

  constructor(page: Page) {
    this.ClickUserButton = page.locator('//*[@id="root"]/div/div[1]/div[2]/div/button[1]');
    this.verifyAccountBalance = page.locator('//*[@id="root"]/div/div/main/div/div/div[2]/div[1]/div[1]/h2');
    this.verifyAccountNumber = page.locator('//*[@id="root"]/div/div/main/div/div/div[2]/div[2]/div/span[2]');
    this.verfiyTotalDeposits = page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[1]/p[1]');
    this.verfiyTransferOut = page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[2]/p[1]');
    this.verifyTransaction = page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[3]/p[1]');
}

 async goTo() {
    await this.ClickUserButton.click();
  }

  async verifyBalance() {
    await expect(this.verifyAccountBalance).toBeVisible();
    const accountbalance = await this.verifyAccountBalance.textContent();
    console.log("Account Balance:", accountbalance);
  }

  async verifyNumber() {
    await expect(this.verifyAccountNumber).toBeVisible();
    const accountNumber = await this.verifyAccountNumber.textContent();
    console.log("Account Number:", accountNumber);
  }

  async verifyDeposits() {
    await expect(this.verfiyTotalDeposits).toBeVisible();
    const accountDeposits = await this.verfiyTotalDeposits.textContent();
    console.log('Total Deposits: ' + accountDeposits);
  }

  async verifyTransferOut() {
    await expect(this.verfiyTransferOut).toBeVisible();
    const accountTransferOut = await this.verfiyTransferOut.textContent();
    console.log('Total Transfer Out: ' + accountTransferOut);
  }

  async verifyTransactions() {
    await expect(this.verifyTransaction).toBeVisible();
    const accountTransaction = await this.verifyTransaction.textContent();
    console.log('Total Transaction: ' + accountTransaction);
  }
}
