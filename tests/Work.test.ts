import { expect, test } from '@playwright/test';

test.describe('Work Experience section', () => {
	test('renders work history from profile data', async ({ page }) => {
		await page.goto('/');

		await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
		await expect(page.getByText('Web Developer')).toBeVisible();
		await expect(page.getByRole('link', { name: 'My Company' })).toBeVisible();
		await expect(page.getByText('2019-2020')).toBeVisible();
		await expect(
			page.getByText('Developed and maintained web applications using React and Node.js.')
		).toBeVisible();
	});
});
