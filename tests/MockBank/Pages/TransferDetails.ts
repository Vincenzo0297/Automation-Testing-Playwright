import { Locator, Page, expect } from "@playwright/test";

export class TransferDetails {
    readonly clickonTransferButton: Locator;
    readonly accountNumber: Locator;
    readonly amount: Locator;
    readonly description: Locator;

    constructor(page: Page) {
        this.clickonTransferButton = page.locator('//*[@id="root"]/div/aside/nav/a[2]')
        this.accountNumber = page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[1]/form/div[1]/input');
        this.amount = page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[1]/form/div[2]/input');
        this.description = page.locator('//*[@id="root"]/div/div/main/div/div/div[3]/div[1]/form/div[3]/textarea');
    }

    async clickTransferButton() {
        await this.clickonTransferButton.click({ timeout: 5000 });
    }

    async enterAccountNumber() {
        await this.accountNumber.fill('1234456789');
        const transferAccountNumber = await this.accountNumber.inputValue();
        console.log(transferAccountNumber);
    }

    async enterAmount() {
        await this.amount.fill('321');
        const enterAmount = await this.amount.inputValue();
        console.log(enterAmount);
    }

    async enterDescription() {
        await this.description.fill('my name is michael jackson');
        const enterDescription = await this.description.inputValue();
        console.log(enterDescription);
        
    }
}