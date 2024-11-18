import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  const path = require('path');
  const filePath = `file://${path.resolve('html/dummy-order.html')}`;
  await page.goto(filePath);
})

test ('Check Place your order button is enable with correct data and pop up message is visible', async ({ page }) => {
const orderButton = page.getByTestId("submit-order")
const usernameInput = page.getByTestId("username")
const emailInput = page.getByTestId("email")
const okPopUp = page.locator("#popup-message")

  await expect(orderButton).toBeDisabled()
  await usernameInput.fill("testUser")
  await emailInput.fill("testUser@gmail.com")
  await expect(orderButton).toBeEnabled()

  await orderButton.click()
  await  expect(okPopUp).toBeVisible()

})

test('When correct data is removed the button is disabled', async ({ page }) => {
  const orderButton = page.getByTestId("submit-order")
  const usernameInput = page.getByTestId("username")
  const emailInput = page.getByTestId("email")
  const okPopUp = page.locator("#popup-message")


  await usernameInput.fill("testUser")
  await emailInput.fill("testUser@gmail.com")
  await expect(orderButton).toBeEnabled()

  await usernameInput.fill("")
  await emailInput.fill("")
  await expect(orderButton).toBeDisabled()

})

