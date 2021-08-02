import React from 'react';
import Text from '../../foundation/Text';
import Box from '../Box';

const Cover = () => (
  <>
    <Box height="100vh" display={{ lg: 'flex' }}>
      <Box
        width={{ xs: '214.97px', md: '50%', lg: '30%' }}
        height={{ xs: '322.31px', md: '50%' }}
        minHeight={{ md: '520px', lg: '720px' }}
        minWidth={{ md: '330px', lg: '479.81px' }}
        transform="rotate(-8deg)"
        background="url('/images/planta2.svg') no-repeat"
        backgroundSize="cover"
      />
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Text
          tag="h1"
          variant={{ xs: 'titleSM', md: 'title' }}
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
        width={{ xs: '214.97px', md: '50%', lg: '30%' }}
        height={{ xs: '322.31px', md: '50%' }}
        minHeight={{ md: '520px', lg: '720px' }}
        minWidth={{ md: '330px', lg: '479.81px' }}
        background="url('/images/planta.svg') no-repeat"
        backgroundSize="cover"
        margin="auto 0 0 auto"
        position={{ lg: 'unset', xs: 'absolute', xl: 'absolute' }}
        bottom="0"
        right="0"
      />
    </Box>
  </>
);

export default Cover;
