import { Link, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

export const NavLinks = (props) => {
    const title= props.title;
    const href= props.href;
  return (
    <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {title}
  </Link>
  )
}
