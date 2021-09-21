import React from 'react';
import { render, screen } from '../../TestProvider/testUtils';
import Footer from '.';

describe('<Footer />', () => {
  test('renders footer', () => {
    render(<Footer />);
    const footerLinks = screen.getByRole('link', { name: /twitter/i });
    expect(footerLinks).toBeInTheDocument();
  });
});
