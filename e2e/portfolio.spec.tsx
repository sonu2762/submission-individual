import { test, expect } from '@playwright/test';

test.describe('test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:3000/', { waitUntil: 'domcontentloaded' });
  });

  // 添加一个新的测试用例来验证HTTP状态码
  test('root route status code', async ({ page }) => {
    const response = await page.goto('http://127.0.0.1:3000/');
    if (response !== null) {
      expect(response.status()).toBe(200);
    } else {
      throw new Error('No response received');
    }
  });
  
  // test home page button 
  test("home submit button", async ({ page }) => {
    const submit = await page.locator("button");
    await expect(submit).toHaveText("SUBMIT");
  });

      // test article page  status
  test('root article page status code', async ({ page }) => {
    const response = await page.goto('http://127.0.0.1:3000/article');
    if (response !== null) {
      expect(response.status()).toBe(200);
    } else {
      throw new Error('No response received');
    }
  });
  
    // test article page content
    test("article p", async ({ page }) => {
      const response = await page.goto('http://127.0.0.1:3000/article');
      await page.waitForLoadState('networkidle');
      const text = await page.$('#article_test_key');
      const textContent = await text.textContent(); 
      await expect(textContent ).toBe("Know More");
    });

      // test skills page  status
      test('root skills page status code', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/skills');
        if (response !== null) {
          expect(response.status()).toBe(200);
        } else {
          throw new Error('No response received');
        }
      });

      
      // test project page  status
      test('root project page status code', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/project');
        if (response !== null) {
          expect(response.status()).toBe(200);
        } else {
          throw new Error('No response received');
        }
      });      

      // test education page  status
      test('root education page status code', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/education');
        if (response !== null) {
          expect(response.status()).toBe(200);
        } else {
          throw new Error('No response received');
        }
      });      
      // test working-experience page  status
      test('root working-experience page status code', async ({ page }) => {
        const response = await page.goto('http://127.0.0.1:3000/working-experience');
        if (response !== null) {
          expect(response.status()).toBe(200);
        } else {
          throw new Error('No response received');
        }
      });

        // test contact page  status
        test('root contact page status code', async ({ page }) => {
          const response = await page.goto('http://127.0.0.1:3000/contact');
          if (response !== null) {
            expect(response.status()).toBe(200);
          } else {
            throw new Error('No response received');
          }
        });
});