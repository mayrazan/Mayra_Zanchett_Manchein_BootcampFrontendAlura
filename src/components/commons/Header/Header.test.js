import React from 'react';
import { useRouter } from 'next/router';
import { render, screen } from '../../TestProvider/testUtils';
import Header from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('<Header />', () => {
  test('renders header', () => {
    useRouter.mockImplementation(() => ({ pathname: '/' }));

    render(<Header />);
    const textHeader = screen.getByText(/<home \/>/i);
    expect(textHeader).toBeInTheDocument();
    expect(textHeader).toHaveClass('active');
    expect(textHeader).toMatchSnapshot();
  });
});
