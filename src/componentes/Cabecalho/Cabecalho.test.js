import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Render logged user name', () => {
    render(<Cabecalho />)
    const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
    expect(nomeUsuario).toBeInTheDocument();
});