import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from './Login'
import Register from './Register'

export const Home = () => {
  return (
    <Tabs variant='enclosed'>
  <TabList>
    <Tab>Log in</Tab>
    <Tab>Register</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login />
    </TabPanel>
    <TabPanel>
      <Register />
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}
