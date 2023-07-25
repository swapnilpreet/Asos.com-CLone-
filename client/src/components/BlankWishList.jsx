import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiHeart } from "react-icons/ti";

const BlankWishList = () => {
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
      <VStack mt={40} mb={40} w={["50%","50%","27%","17%"]} textAlign={'center'}>
        <TiHeart size={30}/>
        <Text>Your WishList is empty</Text>
        <Box>
          {CheckUserLogin !== 'true' ?  (
             <Link style={{ color: "blue", textDecoration: "underline" }} to="/">
             Go There and buy Something
           </Link>
          ):(
            <Box>
            <Text>Sign in to sync your Saved Items across all your devices.</Text>
            <Button bg={'black'} color={'white'} mt={5} w={'full'} borderRadius={'none'}>SIGN IN</Button>
           </Box>
          )}
        </Box>
      </VStack>
    </Center>
  );
};

export default BlankWishList;
