import { calculaNovoSaldo } from './index'
describe('Quando eu realizo uma transacao ', () => {
    test('Que eh um deposito, o saldo deve aumentar', () => {
        const transacao = {
            transacao: 'Depósito',
            valor: 50
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100)

        expect(novoSaldo).toBe(150);
    })

    test('Que eh um Transferência, o saldo deve aumentar', () => {
        const transacao = {
            transacao: 'Transferência',
            valor: 50
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100)

        expect(novoSaldo).toBe(50);
    })

})

test('deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calculaRendimento = jest.fn(saldo => saldo + saldo * 0.005); // 0.5 %

    const saldo = 100;

    const novoSaldo = calculaRendimento(saldo);

    expect(novoSaldo).toBe(100.5);
    expect(calculaRendimento).toBeCalled();
    expect(calculaRendimento).toHaveBeenCalledWith(saldo);
})