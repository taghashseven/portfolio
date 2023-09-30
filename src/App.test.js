import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/day/i);
  expect(linkElement).toBeInTheDocument();
});


describe('testing' , ()=>{
  test('test 1', ()=>{
    console.log('testing')
    expect(1).toBe(1)
  })
})