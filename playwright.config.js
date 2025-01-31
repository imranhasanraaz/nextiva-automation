import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 90000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 3,
  reporter: 'html',
  expect: {
    timeout: 20000,
  },
  use: {
    headless: true,
    viewport: { width: 1728, height: 1020 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    bypassCSP: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});