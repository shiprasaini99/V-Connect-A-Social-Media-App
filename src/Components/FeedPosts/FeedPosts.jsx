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
     img='/saini__shipra_____.jpg' 
     avatar='/saini__shipra_____.jpg' 
     username="saini__shipra_____"
     caption="Sunrise ☀️ "/>
      <FeedPost 
     img='/tarangsaini_.jpg' 
     avatar='/tarangsaini_.jpg' 
     username="tarangsaini_"
     caption="WoW! Snow☃️"/>
      <FeedPost 
     img='/priyanshi_mandhoriya.jpg' 
     avatar='/priyanshi_mandhoriya.jpg' 
     username="priyanshi_mandhoriya"
     caption="Homecoming ✈️🏡"/>
      <FeedPost 
     img='/anshii_mandhoriya.jpg' 
     avatar='/anshii_mandhoriya.jpg' 
     username="anshii_mandhoriya"
     caption="Evening 🌃"/>
      </>
     )}
    </Container>
  )
}

export default FeedPosts
