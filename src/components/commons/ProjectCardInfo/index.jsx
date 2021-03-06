import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import ButtonLink from '../ButtonLink';
import SectionWrapper from '../SectionWrapper';
import SectionTitle from '../SectionTitle';
import Text from '../../foundation/Text';
import Box from '../../layout/Box';

export default function ProjectCardInfo({ title, description, link, image }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      padding={{ xs: '24px 0 0', md: '0' }}
    >
      <SectionTitle text={title} />
      <SectionWrapper flexDirection={{ xs: 'column', md: 'row' }}>
        <Image
          src={image.url}
          alt={image.alt}
          width={400}
          height={400}
          loading="lazy"
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
            rel="noreferrer"
            aria-label="Confira"
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
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
