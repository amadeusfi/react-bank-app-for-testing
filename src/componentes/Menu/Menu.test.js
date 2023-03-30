import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Should render a link to the initial page', () => {
    render(<Menu />)
    const linkPaginaInicial = screen.getByText('Inicial');
    expect(linkPaginaInicial).toBeInTheDocument();
});

test('Should render a link list', () => {
    render(<Menu />)
    const linksList = screen.getAllByRole('link');
    expect(linksList).toHaveLength(4);
});

test('Should not render extrato link', () => {
    render(<Menu />)
    const extratoLink = screen.queryByText('link');
    expect(extratoLink).not.toBeInTheDocument();
});

test('Should render a link list with the link class', () => {
    render(<Menu />)
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();
})