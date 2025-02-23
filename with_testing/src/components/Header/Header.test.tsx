import { render, screen } from '@testing-library/react';
import Header from './Header.tsx';

describe('Header Component', () => {
    test('renders without crashing', () => {
        render(<Header />);
        const header = screen.getByRole('heading', {
            name: /react essentials/i
        })
        expect(header).toBeInTheDocument();
    });
})