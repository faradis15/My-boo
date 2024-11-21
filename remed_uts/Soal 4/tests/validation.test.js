// tests/validation.test.js
const { test, expect } = require('@playwright/test');

test.describe('Form Validation Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Listen to console events and log them in the test output
    page.on('console', msg => {
      if (msg.type() === 'log') {
        console.log(`PAGE LOG: ${msg.text()}`);
      }
    });
    // Load the HTML file in the browser
    await page.goto('file:///' + __dirname + '/../index.html');
  });

  test('should show error when name is empty', async ({ page }) => {
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'This is a valid message with more than 20 characters.');
    await page.click('button[type="submit"]');
    const errorText = await page.locator('#nameError').innerText();
    expect(errorText).toContain('Nama tidak boleh kosong');
  });

  test('should show error for invalid email format', async ({ page }) => {
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'invalid-email');
    await page.fill('#message', 'This is a valid message with more than 20 characters.');

    // Verify that the 'name' field is correctly filled
    const nameValue = await page.locator('#name').inputValue();
    console.log(`Test Fill: Name Value - "${nameValue}"`);
    expect(nameValue).toBe('John Doe');

    await page.click('button[type="submit"]');
    await expect(page.locator('#emailError')).toHaveText('Email harus valid');
  });

  test('should show error for message less than 20 characters', async ({ page }) => {
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.fill('#message', 'Short message');
    await page.click('button[type="submit"]');
    const errorText = await page.locator('#messageError').innerText();
    expect(errorText).toContain('Pesan minimal 20 karakter');
  });

  test('should submit form successfully when all fields are valid', async ({ page }) => {
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.fill('#message', 'This is a valid message with more than 20 characters.');
    await page.click('button[type="submit"]');
    const errorText = await page.locator('#error').innerText();
    expect(errorText).toBe('');
  });
});