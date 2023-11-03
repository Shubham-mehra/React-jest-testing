// MyComponent.test.js
import React from 'react';
import { render, fireEvent } from '../CustomRenderFunction';

import MyComponent from '../CustomRenderFunctionComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    const { getByText } = render(<MyComponent />);
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('should handle button click', () => {
    const { getByText } = render(<MyComponent />);
    const button = getByText('Click Me');
    fireEvent.click(button);
  });
});
