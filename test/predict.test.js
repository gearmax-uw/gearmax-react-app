import Predict from '../src/pages/Predict';
import { render,screen,act,fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
// import Block from '../src/components/Header';

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
     render(<Predict />); 
     expect(screen.getByTestId('predict_text')).toHaveTextContent('price');
     expect(screen.getByTestId('predict_text')).toHaveTextContent('Make');
     expect(screen.getByTestId('predict_text')).toHaveTextContent('Year');
     expect(screen.getByTestId('predict_text')).toHaveTextContent('Body Type');
     expect(screen.getByTestId('predict_text')).toHaveTextContent('Mileage');
  });
   });


   describe('Form Submit', () => {
    test('it renders', () => {
        render(<Predict />); 

        jest.spyOn(console, 'log');

        const buttonElement = screen.getByTestId("predict_button");
        act(() => {
          /* fire events that update state */
          fireEvent.click(buttonElement);
        });
        
        expect(console.log);

    });
   });
