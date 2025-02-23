import { screen, render } from '@testing-library/react';
import CoreConcept from './CoreConcept.tsx';

describe('CoreConcept Component', () => {
    const coreConcept = {
        title: 'test core concept',
        image: 'test-image-url',
        description: 'test description'
    }

    test('renders data correctly', () => {
        render(<CoreConcept {...coreConcept} />)
        const image = screen.getByRole('img', {
            name: new RegExp(coreConcept.title)
        })
        const title = screen.getByRole('heading', {
            name: coreConcept.title
        })
        const description = screen.getByText(coreConcept.description);
        expect(image).toHaveAttribute('src', coreConcept.image);
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    })
})