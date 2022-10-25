import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,

    Button,
    Heading,
    useColorModeValue,

  } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoteContext } from '../components/Context/NotesProvider';
import { ShowAlert} from '../components/Alert/ShowAlert'; // Iportamos ShowAlert para utilizar su función getToast.


  export default function Login() {

  const [userProvided, setUserProvided]= useState('');
  const [passProvided, setPassProvided]= useState('');

  const {signin, obj, isAuthUser}=useContext(NoteContext);
  const navigate=useNavigate();

  const {getToast} = ShowAlert(); // Destructuramos la función ShowAlarm para poderla utilizar dentro del hook

   useEffect(() => {
  
    if(obj.message === 'User Loggued') {
      navigate('/dashboard');
      isAuthUser();
        getToast({title: `Welcome ${userProvided}`, description: 'Enjoy the app', status: 'success'}) 
      }
      else if(obj.message === 'UserId or Password Incorrect'){
        getToast({title: 'Enter User Id and Password', description: obj?.message, status: 'error'}) 
      }
    
   
   },[isAuthUser]);

 

    return (

        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
       
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                <br />
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                    <FormControl id="user"  >
                        <FormLabel>User Id</FormLabel>
                        <Input type="text" name='username' onChange={(e)=> setUserProvided(e.target.value)} />
                    </FormControl>

                    <FormControl id="password" >
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name='password' onChange={(e)=> setPassProvided(e.target.value)}/>
                    </FormControl>

                    <Stack spacing={10}>

                        <Button
                        onClick={()=> signin(userProvided, passProvided)}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Sign in
                        </Button>

                    </Stack>
        </Stack>
          </Box>
        </Stack>

    );
  }