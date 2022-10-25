import { Button, Flex, Stack } from '@chakra-ui/react'


export default function LoginButtons() {

   
  return (
    <Flex>

    <Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={6}>

      <Button
          as={'a'}
          fontSize={'sm'}
          fontWeight={400}
          variant={'link'}
          href={process.env.REACT_APP_CLIENT_URL + '/login'}>
          Sign In
      </Button>

      <Button
          as={'a'}
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'pink.400'}
          href={process.env.REACT_APP_CLIENT_URL + '/sign-up'}
          _hover={{
            bg: 'pink.300',
          }}>
          Sign Up
      </Button>

    </Stack>

  </Flex>
  )
}
