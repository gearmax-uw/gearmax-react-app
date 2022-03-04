import { render,screen,act,fireEvent } from '@testing-library/react';
import Filter from '../src/components/Filter';
import "@testing-library/jest-dom/extend-expect";


// workaround
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

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: key => key }),
}));


// test cases
describe('Contains text', () => {
 test('it renders', () => {
    render(<Filter />); 
    expect(screen.getByTestId('text')).toHaveTextContent('Filter');
    expect(screen.getByTestId('text')).toHaveTextContent('Make');
    expect(screen.getByTestId('text')).toHaveTextContent('Year');
    expect(screen.getByTestId('text')).toHaveTextContent('Body Type');
    expect(screen.getByTestId('text')).toHaveTextContent('Price');
    expect(screen.getByTestId('text')).toHaveTextContent('Mileage');
 });
})

describe('Form Submit', () => {
    test('it renders', () => {
        render(<Filter />); 

        jest.spyOn(console, 'log');

        const buttonElement = screen.getByTestId("button");
   
        fireEvent.click(buttonElement)

        expect(console.log).toHaveBeenCalled();
        const message = console.log.mock.calls[0][0]; // get log message
        expect(message).toEqual(expect.stringContaining('fetch')); // assert on the message content

    });
   })