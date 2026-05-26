import { test, expect } from '@playwright/test'

/// AAA - Arrange, Act, Assert (Preparar, Agir, Verificar)

/// Definição: await - Aguarda a execução de uma Promise e retorna o resultado
/// Definição: async - Define uma função assíncrona, que retorna uma Promise
/// Definição: expect - Define uma expectativa para o resultado de uma Promise
/// Definição: Programação assíncrona - Executa tarefas de forma assíncrona, sem bloquear a execução do código
/// Definição: Promise - Objeto que representa o resultado de uma operação assíncrona (resolve ou reject)
/// Definição: page - Objeto que representa a página web, é o objeto que representa a página que estamos testando

test('o usuário deve poder consultar um pedido aprovado', async ({ page }) => {
  
  // 1.Arrange - Preparar o cenário
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  // 2.Act - Agir
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-QMMFZB')  
  await page.getByRole('button', { name: 'Buscar Pedido' }).click()
 
  // 3.Assert - Verificar o resultado
  await expect(page.getByRole('img', { name: 'Velô Sprint' })).toBeVisible({timeout: 10_000});
  await expect(page.getByTestId('order-result-VLO-QMMFZB')).toContainText('Kallynny Alcantara');
  await expect(page.getByTestId('order-result-VLO-QMMFZB')).toContainText('19/05/2026'); // Verificação extra: Para garantir que o pedido, de fato, foi encontrado e não um outro pedido do mesmo cliente

  ///await expect(page.getByTestId('order-result-status')).toBeVisible()
  ///await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

  ///await expect(page.getByTestId('order-result-id')).toBeVisible({timeout: 10_000}) /// TimeOut explicito - Espera até 10 segundos para o elemento ser visível
  ///await expect(page.getByTestId('order-result-id')).toContainText('VLO-QMMFZB')

})