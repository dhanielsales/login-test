import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';

import { signIn } from '../services/login';
import { PasswordField } from './PasswordField';

export const LoginForm = (props: HTMLChakraProps<'form'>) => {
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const { token, user } = await signIn({ email, password });
  };

  return (
    <chakra.form onSubmit={handleOnSubmit} {...props}>
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" autoComplete="email" required />
        </FormControl>
        <PasswordField />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Acessar
        </Button>
      </Stack>
    </chakra.form>
  );
};
