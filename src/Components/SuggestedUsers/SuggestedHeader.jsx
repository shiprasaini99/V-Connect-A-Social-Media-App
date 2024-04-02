import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
const SuggestedHeader = () => {
  return (
   <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
         <Flex alignItems={"center"} gap={2}>
            <Avatar name='Shipra Saini' src='/profilepic.jpg' alt="User profile pic" size={"lg"} />
            <Text fontSize={12} fontWeight={"bold"}>
               saini__shipra_____
            </Text>
        </Flex>

        <Link 
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{textDoration:"none"}}
        cursor={"pointer"}
        >
        Log out
        </Link>
   </Flex>
  )
}

export default SuggestedHeader
