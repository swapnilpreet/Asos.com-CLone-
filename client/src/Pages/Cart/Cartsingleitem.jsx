import React, { useEffect }  from 'react'
import { Box, Text, Image, Flex, Button, Select } from '@chakra-ui/react';
import {RxCross2} from 'react-icons/rx'
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { AddProductTocart, GetAllCartProducts, RemoveProductFromCart } from '../../ApiCall/cartApi';
import { AddProductToWishlist } from '../../ApiCall/wishlistApi';
import { AddtoCart } from '../../Redux/Cartslice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cartsingleitem = ({ el }) => {

  const dispatch = useDispatch();

  const HandleRemoveFromCart=async(id)=>{
     try {
     const response = await RemoveProductFromCart(id);
     if(response){
      handlegetAllcart()
     }else{
     throw new Error("error occurred in cartsingleItem HandleRemoveFromCart");
     }
    } catch (error) {
      console.log(error);
    }
  }

  const handlewishlist =async(prodId)=>{
    try {
     const response = await AddProductToWishlist(prodId);
     if(response){
      handlegetAllcart()
     }else{
     throw new Error("error occurred in cartsingleItem handlewishlist");
     }
    } catch (error) {
      console.log(error);
    }
  }

  const handlegetAllcart = async () => {
    try {
      const response = await GetAllCartProducts();
      if (response) {
        dispatch(AddtoCart(response.cart.items));
      }
    } catch (error) {
     console.log(error.message);
    }
  };

  const HandleAddtoBag = async (id,qut) => {
    const number = Number(qut)
    try {
      const response = await AddProductTocart({ productId: id, quantity: number });
      if (response) {
        handlegetAllcart();
      } else {
        throw new Error("sonmething went wrong in cart");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
    handlegetAllcart();
  },[]);


  return (
     <Flex mb={3} shadow={'md'}>
           <Box w={'30%'} h={"200px"}>
            <Link to={`/product/${el.product._id}`}>
            <Image borderRadius={'2xl'} p={2} w={'full'} h={'full'} src={el.product.images[0]}></Image>
            </Link>
           </Box>

           <Box  w={'75%'} pl={2}>
            <Flex p={2} justifyContent={'space-between'}>
                  <Box>
                       <Text>&pound;{el.product.price}</Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <RxCross2 size={23} onClick={()=>HandleRemoveFromCart(el.product._id)}/>
                  </Box>
            </Flex>
            
            <Box h={'40px'} overflow={'hidden'} >
                <Text>{el.product.name}</Text>
            </Box>

             <Flex justifyContent={'space-between'}  alignItems={'center'} fontSize={'sm'} w={["80%","80%","80%","40%"]}  gap={2} mt={2}>

              <Box w={"50%"} borderRight={'1px solid gray'}>
               <Text >{el.product.color}</Text>
              </Box>

              <Box w={"50%"} borderRight={'1px solid gray'}>
               <Text>{el.product.size}</Text>
              </Box>
             </Flex>
              
              <Flex justifyContent={'space-between'} alignItems={'center'} fontSize={'sm'} w={["80%","80%","80%","40%"]} mt={3} mb={2} gap={2}>
                  <Box w={'50%'}>
                  <Select
                  onChange={(e)=>HandleAddtoBag(el.product._id,e.target.value )}
                    _hover={{ color: "#0770cf" }}
                    h={7}>
                    <option value="">Qty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Select>
                  </Box>
                  <Box w={'50%'} p={1} borderRight={'1px solid gray'}>
                    <Text>Qty : {el.quantity}</Text>
                  </Box>
              </Flex>
             <Button leftIcon={<BsBookmarkHeartFill/>} colorScheme='Black' border={'1px solid gray'} variant='outline' onClick={()=>{
             handlewishlist({prodId:el.product._id})
             HandleRemoveFromCart(el.product._id)
            }}>
              save for letter
            </Button>
           </Box>
     </Flex>
  )
}

export default Cartsingleitem