import { Box, Button, FormLabel, Heading, Input, Stack, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowAlert } from '../components/Alert/ShowAlert';


export default function Register(){
    const [user, setUser]= useState();
    const [email, setEmail]=useState();
    const [pass, setPass]= useState();
    const [message, setMessage]= useState();
    const navigate=useNavigate();

    const register= async()=>{
        const link= process.env.REACT_APP_SERVER_URL + '/api/register';
        await fetch(link, { method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body:JSON.stringify({
                            username: user,
                            email: email,
                            password: pass,
                            logged: false
                        })
                        })
                        .then(res=> res.text())
                        .then(res=> setMessage(res))
                        console.log(message)
    }
    const {getToast}= ShowAlert();

useEffect(() => {
  if (message === "User Created"){
    getToast({title: 'User Created', description: 'Please Login', status: 'success'}) 
    navigate('./Login');
  }
  if(message === "User Already Exists"){
    console.log('User no creado intentalo más tarde')
    getToast({title: '"User Already Exists"', description: 'Choise another User ID', status: 'error'}) 
  }
}, [message]);
   

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Register a new account</Heading>
                <br />
          </Stack>
        <Box 
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={2}>
                <FormLabel >User ID</FormLabel>
                <Input placeholder='user' className='user' onChange={(e)=> setUser(e.target.value)}/>
                <FormLabel>Email</FormLabel>
                <Input placeholder='email' className='email' onChange={(e)=> setEmail(e.target.value)}/>
                <FormLabel>Password</FormLabel>
                <Input placeholder='password' className='password' onChange={(e)=> setPass(e.target.value)}/>
                <Button onClick={register}
                bg={'blue.400'}
                color={'white'}
                _hover={{bg: 'blue.500',}}>Register</Button>
            </Stack>
        </Box>

    
    </Stack>
  )
}

