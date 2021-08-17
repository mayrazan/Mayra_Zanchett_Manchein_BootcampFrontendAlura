/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import TextField from '../../forms/TextField';
import Box from '../../layout/Box';
import ButtonLink from '../../commons/ButtonLink';
import loadingAnimation from '../animations/loading.json';
import successAnimation from '../animations/success.json';
import errorAnimation from '../animations/error.json';
import sendMessage from '../../../services/message';
import FormAnimation from '../FormAnimation';
import Text from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

function FormContent({ isOpen }) {
  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  };

  const isFormInvalid =
    userInfo.name.length === 0 ||
    userInfo.email.length === 0 ||
    userInfo.message.length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsFormSubmited(true);
    setSubmissionStatus(formStates.LOADING);

    const userDTO = {
      name: userInfo.name,
      email: userInfo.email,
      message: userInfo.message,
    };

    sendMessage(userDTO)
      .then((response) => {
        setSubmissionStatus(formStates.DONE);
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  useEffect(() => {
    if (!isOpen) {
      setSubmissionStatus(formStates.DEFAULT);
      setUserInfo({ name: '', email: '', message: '' });
    }
  }, [isOpen]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Nome"
        name="name"
        value={userInfo.name}
        onChange={handleChange}
        type="text"
      />

      <TextField
        placeholder="Email"
        name="email"
        value={userInfo.email}
        onChange={handleChange}
        type="email"
      />

      <TextField
        placeholder="Mensagem"
        name="message"
        value={userInfo.message}
        onChange={handleChange}
        type="text"
        as="textarea"
        rows="6"
      />

      <ButtonLink
        as="button"
        type="submit"
        disabled={isFormInvalid}
        text="Enviar"
        direction="right"
      />

      {isFormSubmited && submissionStatus === formStates.LOADING && (
        <FormAnimation animation={loadingAnimation} />
      )}

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <FormAnimation animation={successAnimation} />
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <FormAnimation animation={errorAnimation} />
      )}
    </form>
  );
}

FormContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const CloseButton = styled.div`
  background: url('/icons/close-icon.png') no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
  background-color: white;
  cursor: pointer;
  ${breakpointsMedia({
    xs: css`
      align-self: flex-end;
    `,
    md: css`
      align-self: baseline;
    `,
  })}
`;

export default function Form({ props }) {
  const handleClose = () => {
    if (props.isOpen) {
      props.onClose();
    }
  };

  return (
    <Box
      boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
      display="flex"
      flexDirection="column"
      justifyContent={{ xs: 'space-evenly', md: 'space-between' }}
      flex={1}
      padding={{
        xs: '16px',
        md: '85px',
      }}
      backgroundColor="white"
      {...props}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
        gap={{ xs: '20px', md: '0' }}
        {...props}
      >
        <Text
          variant={{ xs: 'formTitle', md: 'titleProjectSection' }}
          tag="h6"
          margin="0"
          flexGrow="5"
          textAlign="center"
        >
          ENVIE SUA MENSAGEM
        </Text>
        <CloseButton onClick={handleClose} />
      </Box>
      <FormContent isOpen={props.isOpen} />
    </Box>
  );
}

Form.propTypes = {
  props: PropTypes.shape({
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
  }).isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Form.defaultProps = {
  isOpen: false,
  onClose: () => {},
};
