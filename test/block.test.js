import { render, fireEvent } from "@testing-library/react";
import Filter from '../src/components/Filter';



Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
describe('my function or component', () => {
    test('does the following', () => {
      
      const { getByTestId } = render(<Filter />); 

    });
   });