import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'

const FeedPost = (props) => {
  return (
    <>
      <PostHeader username={props.username}  avatar={props.avatar}/>
       <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={props.img} alt={props.username}/>
       </Box>
      <PostFooter username={props.username}/>
    </>
  )
}

export default FeedPost
