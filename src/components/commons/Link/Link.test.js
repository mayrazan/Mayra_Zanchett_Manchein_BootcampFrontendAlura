import React from 'react';
import { render, screen } from '../../TestProvider/testUtils';
import Link from '.';

describe('<Link />', () => {
  test('renders link', () => {
    render(
      <Link href="/aboutme">
        Sobre mim
      </Link>,
    );
    const textLink = screen.getByText(/sobre mim/i);
    expect(textLink).toBeInTheDocument();
    expect(textLink).toMatchSnapshot();
  });
});
