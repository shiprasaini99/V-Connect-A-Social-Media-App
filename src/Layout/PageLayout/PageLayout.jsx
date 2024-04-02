import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

function PageLayout({children}) {

    const {pathname} = useLocation()
  return (
    <Flex>
    {/* Left sidebar */}
    {pathname !== '/auth' ? (<Box w={{base:"70px", md:"240px"}}>
        <Sidebar/>
    </Box>) :null}
    
    {/* Content on the right side of the Sidebar */}

    <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 70px)"}}>
        {children}
    </Box>
    </Flex>
  )
}

export default PageLayout
