import { screen, render, fireEvent } from '@testing-library/react';
import TabButton from './TabButton.tsx';

const mockOnSelect = jest.fn();

describe('TabButton Component', () => {
    const tabButtonProps = {
        children: 'tab button',
        onSelect: mockOnSelect
    }
    test('onSelect is called when tab button is clicked', () => {
        render(<TabButton {...tabButtonProps} />)

        const button = screen.getByText('tab button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    })
})