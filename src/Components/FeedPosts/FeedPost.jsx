import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'

const FeedPost = () => {
  return (
    <>
      <PostHeader/>
       <Box>
        <Image src='/img1.png' alt='User profile pic'/>
       </Box>
      <PostFooter/>
    </>
  )
}

export default FeedPost