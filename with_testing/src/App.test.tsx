import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.tsx';

// Mock EXAMPLES data
jest.mock('./data.ts', () => ({
  ...jest.requireActual('./data.ts'),
  EXAMPLES: {
    components: {
      title: 'components',
      description: 'component description',
      code: 'component code'
    },
    props: {
      title: 'props',
      description: 'props description',
      code: 'props code'
    },
    jsx: {
      title: 'jsx',
      description: 'jsx description',
      code: 'jsx code'
    },
    state: {
      title: 'state',
      description: 'state description',
      code: 'state code'
    },
  }
}))

beforeEach(() => {
  render(<App />);
})

describe('App component', () => {
  test('renders without crashing', () => {
    const core_concept_title = screen.getByRole('heading', {
      name: /core concept/i
    });

    const example_title = screen.getByRole('heading', {
      name: /examples/i
    })
    const tab_buttons = screen.getAllByTestId('tab-button');
    const core_concepts = screen.getAllByTestId('core-concept');
    const selectedTopic = screen.getByText('Please select a topic.');
    expect(core_concept_title).toBeInTheDocument();
    expect(example_title).toBeInTheDocument();
    expect(tab_buttons).toHaveLength(4);
    expect(core_concepts).toHaveLength(4);
    expect(selectedTopic).toBeInTheDocument();
  });

  test('renders content correctly when tab button is clicked', () => {
    const componentTabButton = screen.getByRole('button', {
      name: /components/i
    });
    const jsxTabButton = screen.getByRole('button', {
      name: /jsx/i
    });
    const propsTabButton = screen.getByRole('button', {
      name: /props/i
    });
    const stateTabButton = screen.getByRole('button', {
      name: /state/i
    });
    fireEvent.click(componentTabButton);
    let selectedTopicDescription = screen.getByTestId('selected-topic-description');
    expect(selectedTopicDescription).toHaveTextContent('component description');
    fireEvent.click(jsxTabButton);
    expect(selectedTopicDescription).toHaveTextContent('jsx description');
    fireEvent.click(propsTabButton);
    expect(selectedTopicDescription).toHaveTextContent('props description');
    fireEvent.click(stateTabButton);
    expect(selectedTopicDescription).toHaveTextContent('state description');
  })
})

