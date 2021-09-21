import React from 'react';
import { render, screen } from '../../TestProvider/testUtils';
import Text from '.';

describe('<Text />', () => {
  test('renderiza componente com props', () => {
    render(
      <Text
        tag="a"
        variant={{ md: 'menuText' }}
        color="contrastText"
        href="/aboutme"
        bold
        textAlign="center"
      >
        Sobre Mim
      </Text>,
    );
    const text = screen.getByRole('link', {
      name: /sobre mim/i,
    });
    expect(text).toMatchSnapshot();
  });

  test('renderiza componente', () => {
    render(<Text>Sobre Mim</Text>);

    const text = screen.getByText(/sobre mim/i);
    expect(text).toMatchSnapshot();
  });
});
