import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import ButtonLink from '../ButtonLink';
import SectionWrapper from '../SectionWrapper';
import SectionTitle from '../SectionTitle';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';

export default function ProjectCardInfo({ title, description, link }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      padding={{ xs: '24px 0 0', md: '0' }}
    >
      <SectionTitle text={title.toUpperCase()} />
      <SectionWrapper flexDirection={{ xs: 'column', md: 'row' }}>
        <Image
          src="https://source.unsplash.com/random"
          alt="imagem do projeto"
          width={400}
          height={400}
        />
        <Box
          width={{ md: '50%' }}
          display="flex"
          flexDirection="column"
          alignSelf={{ md: 'baseline' }}
          alignItems={{ md: 'baseline' }}
          gap="30px"
        >
          <Text tag="p" textAlign="justify" margin="0" maxWidth={{ md: '70%' }}>
            {description}
          </Text>

          <ButtonLink
            href={link}
            target="_blank"
            direction="right"
            text="Confira"
          />
        </Box>
      </SectionWrapper>
    </Box>
  );
}

ProjectCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
