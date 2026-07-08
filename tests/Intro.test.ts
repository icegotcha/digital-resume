import { expect, test } from '@playwright/test';

test.describe('Intro section', () => {
	test('renders profile intro data', async ({ page }) => {
		await page.goto('/');

		await expect(page.getByRole('heading', { name: 'John Doe' })).toBeVisible();
		await expect(page.getByText('(John)')).toBeVisible();
		await expect(page.getByRole('link', { name: '+66 123 4567' })).toBeVisible();
		await expect(page.getByText('john_doe@example.com')).toBeVisible();
		await expect(page.getByRole('link', { name: 'github.com/john_doe_gh' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'linkedin.com/in/john_doe_li' })).toBeVisible();
		await expect(page.getByRole('link', { name: 'example.com', exact: true })).toBeVisible();
	});
});
