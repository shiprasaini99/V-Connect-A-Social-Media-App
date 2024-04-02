import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { InstagramLogo } from '../../assets/constants'
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
            <Link to={"/"} pl={2} display={{base:"none", md:"block"}} cursor="pointer">
                <InstagramLogo />
            </Link>
            <Link to={"/"} pl={2} display={{base:"block", md:"none"}}  _hover={
                {bg:"whiteAlpha.200"}
            } 
            w={10}
            cursor="pointer">
                <InstagramLogo />
            </Link>
        </Flex>
    </Box>
  )
}

export default Sidebar
