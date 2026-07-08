import { expect, test } from '@playwright/test';
test('home page renders resumette header', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Resumette' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'John Doe' })).toBeVisible();
});
