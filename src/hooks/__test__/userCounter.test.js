import React from 'react';
import { render, screen } from '@testing-library/react';
import useDataFetching from '../userCounter';


function TestComponent() {
  const { data, loading } = useDataFetching('https://randomuser.me/api/?results=5');
console.log("data",data)
  if (loading) {
    return <div data-testid="loading">Loading...</div>;
  }

  return <div data-testid="data">{data}</div>;
}

test('useDataFetching hook', async () => {
  // Mock the fetch function for the test
  global.fetch = jest.fn().mockResolvedValue({ json: async () => ['Test Data'] });

  render(<TestComponent />);

  // Verify that the loading indicator is displayed initially
  const loadingElement = screen.getByTestId('loading');
  expect(loadingElement).toBeInTheDocument();

  // Wait for the data to load
  const dataElement = await screen.findByTestId('data');
  expect(dataElement).toBeInTheDocument();
  expect(dataElement).toHaveTextContent('Test Data');
});
