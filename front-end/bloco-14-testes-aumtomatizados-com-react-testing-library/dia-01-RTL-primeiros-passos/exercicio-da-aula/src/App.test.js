import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Exercícios da aula 15/2', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('Verifica se a mensagem "Carregando..." aparece na tela ao renderizar o componente', async () => {
    const loadingMessage = screen.getByText(/Carregando.../i);
    expect(loadingMessage).toBeInTheDocument();

  });

  it('Verifica se o texto "Minecraft" é renderizado na tela após a saída do texto "Carregando..."', async () => {
    await waitForElementToBeRemoved(() =>
    screen.queryByText(/Carregando.../i),
    )
    const checkMinecraftText = screen.getByText(/Minecraft.../i);
    expect(checkMinecraftText).toBeInTheDocument();
  });
  it('Na Home do projeto, após o carregamento da lista de jogos, clique no link "Ver detalhes" do segundo jogo da lista. E verifique se a tela de detalhes exibe as informações Release Year e Sales, do jogo correspondente.', async () => {
    const detailsLink = await screen.findAllByText(/ver detalhes/i);
    userEvent.click(detailsLink[1]);
    await waitForElementToBeRemoved(() => screen.queryByText(/Carregando.../i),)
    const sales = screen.getByText(/sales/i);
    const releaseYear = screen.getByText(/Release Year/i);

    expect(sales).toBeInTheDocument();
    expect(releaseYear).toBeInTheDocument();
  });
})
