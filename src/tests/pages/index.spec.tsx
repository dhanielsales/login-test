import { render } from '@testing-library/react';

import App from '~/pages/index';

test("should be show 'Home' text in document", () => {
  const { getByText } = render(<App />);
  expect(getByText('Home')).toBeInTheDocument();
});
