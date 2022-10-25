import { useToast } from '@chakra-ui/react'

export const ShowAlert = () => {
  const toast= useToast();
  const getToast= (props)=>{
    const title= props.title;
    const description= props.description;
    const status= props.status;
    toast({
      title: title,
      description: description,
      status: status,
      duration: 5000,
      isClosable: true
    })
  }
  return {getToast}
  
}
