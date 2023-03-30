import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Should render an input field', () => {
    test(' in the document', () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText('Digite um valor')
        expect(campoTexto).toBeInTheDocument()
    });

    test(' with the number type', () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText('Digite um valor')
        expect(campoTexto).toHaveAttribute('type', 'number')
    });


    test(' that can be filled', () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText('Digite um valor')
        userEvent.type(campoTexto, '50');
        expect(campoTexto).toHaveValue(50)
    });

    test(' should call an onsubmit event when clicked on realizar transacao ', () => {
        const realizarTransacao = jest.fn();

        render(<Formulario realizarTransacao={realizarTransacao} />)
        const botao = screen.getByRole('button')

        userEvent.click(botao)
        expect(realizarTransacao).toHaveBeenCalledTimes(1);
    });

    test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
        render(<Formulario />); // renderiza o componente
        const select = screen.getByRole('combobox'); // faz a consulta do elemento select
        userEvent.selectOptions(select, ['Depósito']); // simula a ação de selecionar uma opção do select

        expect(screen.getByRole('option', { name: 'Selecione um tipo de transação' }).selected).toBe(false); // verifica se a opção de selecionar um tipo de transação não foi selecionada
        expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(true); // verifica se a opção de depósito foi selecionada
    });
})


