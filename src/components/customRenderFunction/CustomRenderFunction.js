// customRender.js
import React from 'react';
import { render } from '@testing-library/react';

const customRender = (ui, options = {}) => {
  const wrapper = options.wrapper || (({ children }) => <>{children}</>); // You can set a custom wrapper if needed.

  return render(ui, { wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
