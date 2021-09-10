import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '.';
import TestProvider from '../../TestProvider';

describe('<Text />', () => {
  test('renderiza componente com props', () => {
    render(
      <TestProvider>
        <Text
          tag="a"
          variant={{ md: 'menuText' }}
          color="contrastText"
          href="/aboutme"
          bold
          textAlign="center"
        >
          Sobre Mim
        </Text>
      </TestProvider>,
    );
    const text = screen.getByRole('link', {
      name: /sobre mim/i,
    });
    expect(text).toMatchSnapshot();
  });

  test('renderiza componente', () => {
    render(
      <TestProvider>
        <Text>Sobre Mim</Text>
      </TestProvider>,
    );

    const text = screen.getByText(/sobre mim/i);
    expect(text).toMatchSnapshot();
  });
});
