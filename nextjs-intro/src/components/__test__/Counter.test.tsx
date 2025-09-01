import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter'; // Import the Counter component

describe('Counter', () => {
    it('should start with a count of 0', () => {
        // Arrange
        render(<Counter />)

        // Act
        const countText = screen.getByText(/You clicked 0 times/i)
        
        // Assert
        expect(countText).toBeInTheDocument()
    })

    it('should increment the count when the button is clicked', async () => {
        // Arrange
        render(<Counter />)
        const button = screen.getByRole('button', { name: /Click me/i })

        // Act
        await userEvent.click(button)

        //Assert
        const countText = screen.getByText(/You clicked 1 times/i)
        expect(countText).toBeInTheDocument()
    })
})