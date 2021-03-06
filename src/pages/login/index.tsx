import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

import { Card } from '../../components/Card';
import { LoginForm } from '../../components/LoginForm';
import { Logo } from '../../components/Logo';

const Login = () => (
  <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box maxW="md" mx="auto">
      <Logo mx="auto" h="8" mb={{ base: '10', md: '20' }} />
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Acesse com a sua conta
      </Heading>
      <Card mt="8">
        <LoginForm />
      </Card>
    </Box>
  </Box>
);

export default Login;
