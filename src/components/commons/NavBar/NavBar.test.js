import React from 'react';
import { useRouter } from 'next/router';
import { render, screen } from '../../TestProvider/testUtils';
import NavBar from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('<NavBar />', () => {
  test('renders navbar', () => {
    useRouter.mockImplementation(() => ({ pathname: '/aboutme' }));

    render(<NavBar />);
    const textNav = screen.getByRole('link', {
      name: /sobre mim/i,
    });
    expect(textNav).toBeInTheDocument();
  });
});
