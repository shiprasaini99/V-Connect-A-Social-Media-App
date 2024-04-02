import { Flex, Box, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import { Link } from 'react-router-dom'

const SuggestedUsers = () => {
  return (
<VStack>
    <SuggestedHeader/>
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested For you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{color : "gray.400"}} cursor={"pointer"}>

        </Text>

    </Flex>

    <SuggestedUser name='Rhea' followers={1009} avatar='https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    <SuggestedUser name='Nick' followers={1009} avatar='https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    <SuggestedUser name='Eliot' followers={1009} avatar='https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    
    <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
      @ 2024 Built By {" "}
      <Link href='https://github.com/shiprasaini99' target='_blank' color='blue.500' fontSize={14}>
        Shipra Saini
      </Link>
    </Box>
</VStack>

   
  )
}

export default SuggestedUsers
