import { ColorModeProvider, CSSReset } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import GlobalStyles from '~/styles/global';
import theme from '~/styles/theme';

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ColorModeProvider
      options={{
        initialColorMode: 'light',
        useSystemColorMode: true,
      }}
      value="light"
    >
      <GlobalStyles />
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ChakraProvider>
);

export default ThemeContainer;
