import { render, screen } from '@testing-library/react';
import Extrato from './index';

describe('Should render an trasactions list', () => {
    test(' in the document', () => {
        const transacoes = [
            {
                transacoes: 'Deposit',
                valor: 100,
            }
        ]

        render(<Extrato transacoes={transacoes} />);
        const list = screen.getByRole('listitem');
        expect(list).toBeInTheDocument();
    });
})