import { test, expect } from '@playwright/test'

/// AAA - Arrange, Act, Assert (Preparar, Agir, Verificar)

test('o usuário deve poder consultar um pedido aprovado', async ({ page }) => {
  
  // 1.Arrange - Preparar o cenário
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')
  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  // 2.Act - Agir
  await page.getByTestId('search-order-id').fill('VLO-QMMFZB')
  await page.getByTestId('search-order-button').click()
 
  // 3.Assert - Verificar o resultado
  await expect(page.getByTestId('order-result-id')).toBeVisible()
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-QMMFZB')

  await expect(page.getByTestId('order-result-status')).toBeVisible()
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

})