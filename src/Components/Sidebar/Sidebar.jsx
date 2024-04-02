import React from 'react'
import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink} from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import SidebarItems from './SidebarItems';

const Sidebar = () => {
   


  return (
    <Box
    height={"100vh"}
	borderRight={"1px solid"}
	borderColor={"whiteAlpha.300"}
	py={8}
	position={"sticky"}
	top={0}
	left={0}
	px={{ base: 2, md: 4 }} >
        <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
            <Link to={"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor="pointer">
                <InstagramLogo />
            </Link>
            <Link to={"/"} as={RouterLink} pl={2} display={{base:"block", md:"none"}}  _hover={
                {bg:"whiteAlpha.200"}
            } 
            w={10}
            cursor="pointer">
                <InstagramMobileLogo />
            </Link>
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
            <SidebarItems/>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Sidebar
