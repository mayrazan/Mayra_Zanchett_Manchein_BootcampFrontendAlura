import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../TestProvider/testUtils';
import TextField from '.';

describe('<TextField />', () => {
  test('renderiza componente', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Mayra"
        onChange={() => {}}
        name="nome"
      />,
    );
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value="Mayra"
            onChange={onChangeMock}
            name="nome"
          />,
        );

        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'mayra');
        expect(onChangeMock).toHaveBeenCalledTimes(5);
      });
    });
  });
});
