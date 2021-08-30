/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import * as S from './style';

const arrowClasses = {
  down: 'fa fa-arrow-down',
  up: 'fa fa-arrow-up',
  right: 'fa fa-arrow-right',
  left: 'fa fa-arrow-left',
};

export default function ButtonLink({ text, direction, font, ...props }) {
  const hasHref = Boolean(props.href);
  const as = hasHref ? Link : 'button';
  return (
    <S.Container>
      <S.TextLink as={as} {...props}>
        <S.TextSpan font={font}>{text}</S.TextSpan>
        <S.BtnSpan>
          <S.IconArrow className={arrowClasses[direction]} />
        </S.BtnSpan>
      </S.TextLink>
    </S.Container>
  );
}

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  as: PropTypes.string,
  font: PropTypes.bool,
  href: PropTypes.string,
};

ButtonLink.defaultProps = {
  as: 'a',
  font: false,
  href: null,
};
