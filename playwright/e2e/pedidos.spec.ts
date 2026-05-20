import { test, expect } from '@playwright/test'

test('o usuário deve poder consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Checkpoint 1: Verificar se a página principal está carregada
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()

  // Checkpoint 2: Verificar se a página de consulta de pedidos está carregada
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  await page.getByTestId('search-order-id').fill('VLO-QMMFZB')

  await page.getByTestId('search-order-button').click()
 
  // Checkpoint 3: Verificar se o pedido foi encontrado

// Não precisaria verificar se o elemento está visível, pois o comando abaixo já verifica se o elemento está presente
  await expect(page.getByTestId('order-result-id')).toBeVisible()
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-QMMFZB')

  await expect(page.getByTestId('order-result-status')).toBeVisible()
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

})