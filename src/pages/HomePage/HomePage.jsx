import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../Components/FeedPosts/FeedPosts'
import SuggestedUsers from '../../Components/SuggestedUsers/SuggestedUsers'

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
    <Box flex={2} py={10} border={"1px solid pink"}>
      <FeedPosts/>
    </Box> 
    <Box flex={3} mr={20} display={{base:"none" , lg:"block"}} maxW={"300px"} border={"1px solid red"}> 
      <SuggestedUsers/>
    </Box>
      </Flex>
      
    </Container>
  )
}

export default HomePage
