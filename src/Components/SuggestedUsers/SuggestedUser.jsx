import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const SuggestedUser = (props) => {
    const [isFollwed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar src={props.avatar} name={props.name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
            <Box fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            {props.name}
            <Box fontSize={11} color={"gray.500"}>
            {props.followers} followers
            </Box>
            </Box>
        </VStack>
      </Flex>
      <Button 
      fontSize={13}
      bg={"transparent"}
      p={0}
      h={"max-content"}
      fontWeight={"medium"}
      color={"blue.400"}
      _hover={{color: "white"}}
      onClick={()=> setIsFollowed(!isFollwed)}
      >
        {isFollwed ? "Unfollow" : "Follow"} 
      </Button>
    </Flex>
  )
}

export default SuggestedUser
