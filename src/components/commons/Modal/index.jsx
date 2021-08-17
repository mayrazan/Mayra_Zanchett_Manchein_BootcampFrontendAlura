import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;
  box-shadow: 0px 1px 25px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0px 0px;
  min-height: 600px;
  ${breakpointsMedia({
    md: css`
      width: 60%;
      min-width: 700px;
    `,
  })}

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function Modal({ isOpen, onClose, children }) {
  const handleClick = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"');
    if (!isSafeArea) {
      onClose();
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} onClick={handleClick}>
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            y: 0,
          },
          closed: {
            y: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        style={{ display: 'flex', flex: 1 }}
      >
        {children({
          'data-modal-safe-area': 'true',
          isOpen,
          onClose,
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
