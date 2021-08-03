import React from 'react';
import Text from '../../foundation/Text';
import Box from '../Box';

const Cover = () => (
  <Box display={{ lg: 'flex' }} flexGrow="5">
    <Box
      width={{ xs: '214.97px', md: '38%', lg: '30%' }}
      height={{ xs: '322.31px', md: '38%' }}
      minHeight={{ lg: '520px', xl: '505px' }}
      minWidth={{ lg: '330px', xl: '340.81px' }}
      transform="rotate(-8deg)"
      background="url('/images/planta2.svg') no-repeat"
      backgroundSize="cover"
    />
    <Box
      display="flex"
      height={{ md: '62%', lg: 'auto' }}
      flexDirection="column"
      width="100%"
      justifyContent={{ xs: 'center', md: 'flex-end' }}
    >
      <Box
        alignSelf="baseline"
        flexGrow={{ xs: '5', lg: '0' }}
        padding={{ xs: '0 0 25px 0', md: '0' }}
      >
        <Text
          tag="h1"
          variant={{ xs: 'titleSM', lg: 'title' }}
          textAlign="center"
          margin="0"
        >
          MAYRA ZANCHETT MANCHEIN
        </Text>
        <Text tag="h3" variant="subTitle" textAlign="center" margin="0">
          Portifólio
        </Text>
      </Box>

      <Box
        width={{ xs: '214.97px', md: '38%', lg: '30%' }}
        height={{ xs: '100%', md: '50%' }}
        minHeight={{ xs: '259px', md: '389px' }}
        minWidth={{ md: '300px', lg: '341.81px' }}
        background="url('/images/planta.svg') no-repeat"
        backgroundSize="cover"
        alignSelf="flex-end"
      />
    </Box>
  </Box>
);

export default Cover;
