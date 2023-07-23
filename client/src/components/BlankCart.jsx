import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";

const BlankCart = () => {


  const [CheckUserLogin,setCheckUserLogin]=useState(false);

  useEffect(()=>{
     const gettoken = localStorage.getItem('token');
     if(gettoken) {
      setCheckUserLogin(true);
     }else{
      setCheckUserLogin(false);
     }
  },[])


  
  return (
    <Center>
      <VStack mt={40} mb={40}  textAlign={'center'}>
        <IoBagOutline size={30} />
        <Text>Your bag is empty</Text>
        <Box>
          {CheckUserLogin !== 'true' ?  (
             <Link style={{ color: "blue", textDecoration: "underline" }} to="/">
             Go There and buy Something
           </Link>
          ):(
            <Box>
            <Text>Sign in to see your bag and get shopping</Text>
            <Button bg={'green'} color={'white'} mt={5} w={'full'} borderRadius={'none'}>SIGN IN</Button>
           </Box>
          )}
        </Box>
      </VStack>
    </Center>
  );
};

export default BlankCart;
