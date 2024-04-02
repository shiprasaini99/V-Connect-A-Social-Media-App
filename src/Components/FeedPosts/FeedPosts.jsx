import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 2000 );
  },[])
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,idx)=>(
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={"10"}/> 
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height='10px' w={"200px"}/>
              <Skeleton height='10px' w={"200px"}/>
            </VStack>
          </Flex>
       <Skeleton w={"full"}>
          <Box h={"500px"}>Contents Wrapped</Box>

       </Skeleton>
        </VStack>
      ))}
     {!isLoading && (

      <>
       <FeedPost 
     img='/img1.png' 
     avatar='/img1.png' 
     username="asaprogrammer_"/>
      <FeedPost 
     img='/img2.png' 
     avatar='/img2.png' 
     username="josh"/>
      <FeedPost 
     img='/img3.png' 
     avatar='/img3.png' 
     username="janedos"/>
      <FeedPost 
     img='/img4.png' 
     avatar='/img4.png' 
     username="john"/>
      </>
     )}
    </Container>
  )
}

export default FeedPosts
