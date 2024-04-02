import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../Components/FeedPosts/FeedPosts'

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
    <Box flex={2} py={10} border={"1px solid pink"}>
      <FeedPosts/>
    </Box> 
    <Box flex={3} mr={20} display={{base:"none" , lg:"block"}} maxW={"300px"} border={"1px solid red"}> 
      Suggested
    </Box>
      </Flex>
      
    </Container>
  )
}

export default HomePage
