import React from 'react';
import { render, screen, fireEvent } from '../../TestProvider/testUtils';
import ButtonLink from '.';

describe('<ButtonLink />', () => {
  test('renders component as button', () => {
    const onClickMock = jest.fn();
    render(
      <ButtonLink
        as="button"
        onClick={onClickMock}
        direction="right"
        text="+"
        font
        aria-label="Entre em contato"
      />,
    );
    const text = screen.getByRole('button', {
      name: /entre em contato/i,
    });
    fireEvent.click(text);
    expect(text).toMatchSnapshot();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('renders component as link', () => {
    render(
      <ButtonLink
        href="www.github.com"
        target="_blank"
        direction="right"
        text="Confira"
        rel="noreferrer"
        aria-label="Confira"
      />,
    );

    const text = screen.getByText(/confira/i);
    expect(text).toMatchSnapshot();
  });

  test('verify if disabled', () => {
    const onClick = jest.fn();

    render(
      <ButtonLink
        as="button"
        type="submit"
        disabled
        text="Enviar"
        direction="right"
        aria-label="Enviar"
        onClick={onClick}
      />,
    );
    const text = screen.getByRole('button', {
      name: /enviar/i,
    });

    expect(text).toMatchSnapshot();
    expect(text).toBeDisabled();
    fireEvent.click(text);
    expect(onClick).not.toHaveBeenCalled();
    expect(text).toBeDisabled();
  });
});
