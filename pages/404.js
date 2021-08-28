import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Footer from '../src/components/commons/Footer';
import Header from '../src/components/commons/Header';
import Text from '../src/components/foundation/Text';
import notFound from '../src/components/animations/notFound.json';
import Box from '../src/components/layout/Box';

export default function Page404() {
  return (
    <>
      <Header />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        margin="auto"
        height={{ xs: 'calc(100vh - 78px + 194px)', md: 'auto' }}
      >
        <Lottie
          width="450px"
          height="450px"
          config={{
            animationData: notFound,
            loop: true,
            autoplay: true,
          }}
        />
        <Text
          tag="h4"
          textAlign="center"
          margin="0"
          variant={{ xs: 'titleProjectSection', md: 'titleProjectSection' }}
        >
          Página não encontrada
        </Text>
      </Box>
      <Footer />
    </>
  );
}
