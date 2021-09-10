import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import TextField from '.';
import TestProvider from '../../TestProvider';

describe('<TextField />', () => {
  test('renderiza componente', () => {
    render(
      <TestProvider>
        <TextField
          placeholder="Nome"
          value="Mayra"
          onChange={() => {}}
          name="nome"
        />
      </TestProvider>,
    );
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TestProvider>
            <TextField
              placeholder="Nome"
              value="Mayra"
              onChange={onChangeMock}
              name="nome"
            />
          </TestProvider>,
        );

        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'mayra');
        expect(onChangeMock).toHaveBeenCalledTimes(5);
      });
    });
  });
});
