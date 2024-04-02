import { Box, Button, Center, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const AuthForm = () => {
const [isLogin, setIsLogin] = useState(true)

  return (
   <> <Box border={"1px solid gray"} borderRadius={4} padding={5}>
   <VStack spacing={'4'}>
   <Image src='/logo.png' h={24} cursor={"pointer"} alt='V-Connect'/>
   <Input 
   placeholder='Email'
   fontSize={14}
   type='email'
   />
   <Input 
   placeholder='Password'
   fontSize={14}
   type='password'
   />
//if it is a login then dont show confirm password input
   {!isLogin ? (
     <Input 
     placeholder='Confirm Password'
     fontSize={14}
     type='password'
     />
   ) : null }
     
   <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14}>
     {isLogin ? "Log in" : "Sign up"}
   </Button>


//----------------OR----------------- Text
     <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
     <Box flex={2} h={"1px"} bg={"gray.400"}/>
     <Text mx={1} color={"white"} >OR</Text>
     <Box flex={2} h={"1px"} bg={"gray.400"}/>

     </Flex>

     <Flex align={"center"} justifyContent={"center"} cursor={'pointer'}>
       <Image src='/google.png' w={5} alt='Google Logo'/>
       <Text mx={2} color={"blue.500"} >Log in with Google</Text>
        </Flex>

   </VStack>
 </Box>
    <Box border={"1px solid gray"} borderRadius={4}  padding={5}>
      <Flex gap={2} alignItems={"center"} justifyContent={"center"}>
    <Box>
      {isLogin ? "Don't have an account" : "Already have an account"}
    </Box>
    <Box onClick={()=> setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
      {isLogin ? "Sign up" :"Log in"}
    </Box>

      </Flex>
    </Box>
   </>

  )
}

export default AuthForm
