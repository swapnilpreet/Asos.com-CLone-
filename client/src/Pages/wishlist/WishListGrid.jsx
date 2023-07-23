import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  SimpleGrid,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { AiOutlineHeart } from 'react-icons/ai'
import { IoBagOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
// import { Addtocart } from '../Redux/App/action'
// import { deleteWishListdata, getWishListdata } from '../Redux/wishlist/action'
import { useToast } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { AddProductTocart, GetAllCartProducts } from "../../ApiCall/cartApi";
import { AddtoCart } from "../../Redux/Cartslice";
import { AddProductToWishlist, GetAllWishlistProducts } from "../../ApiCall/wishlistApi";
import { SetLoader } from "../../Redux/LoaderSlice";
import BlankWishList from "../../components/BlankWishList";
// import { AddtoCart } from "../../Redux/Cartslice";
export const WishListGrid = () => {
  // console.log("data: " , data)
  const dispatch = useDispatch();
  const toast = useToast();
  const [wishlist, setwishlist] = useState([])

  const fetchPorducts=async()=>{
    try {
        const response = await GetAllWishlistProducts();
        if(response.success){
        setwishlist(response.data.wishlist)
        }
    } catch (error) {
     console.log(error.message);
    }
}

  const handlegetAllcart = async () => {
    try {
      const response = await GetAllCartProducts();
      if (response) {
        console.log("res", response.cart.items);
        dispatch(AddtoCart(response.cart.items));
      }
    } catch (error) {
     console.log(error.message);
    }
  };

  const HandleAddtoBag = async (id) => {
    try {
      const response = await AddProductTocart({ productId: id });
      if (response) {
        handlegetAllcart();
      } else {
        throw new Error("sonmething went wrong in cart");
      }
    } catch (error) {
      console.log(error.message);

    }
  };


  const handleRemovewishlist = async (prodId) => {
    try {
      const response = await AddProductToWishlist(prodId);
      if (response) {
        fetchPorducts()
      } else {
        throw new Error("error occurred wishlistGrid handleRemovewishlist");
      }
    } catch (error) {
      console.log(error.message);

    }
  };

 

useEffect(() => {
  fetchPorducts()
  handlegetAllcart()
},[dispatch])

  return (
    <>
       <>
        {" "}
        {wishlist.length === 0 ? (
          <Box bg={'gray.100'}>
            <BlankWishList/>
          </Box>
        ) : (
          <SimpleGrid
            columns={[2, 2, 3, 4]}
            w={["90%","90%","90%","75%"]}
            m={"auto"}
            spacing={3}
            p={0}
          >
        {wishlist?.map((item) => (
        <Box mt={5} mb={5} key={item._id}
        h={['400px','400px','500px','550px']}
        >
          <Tag
            mt={[40, 5, 5, 5]}
            position="absolute"
            bg={'white'}
          >
            <AiFillHeart
              size={33}
              cursor={"pointer"}
              onClick={() => handleRemovewishlist({ prodId: item._id })}
            />
          </Tag>

          <Box h={['200px','200px','300px','350px']}>
          <Image w="100%" h={'full'} src={item.images[0]} alt="productimg"/>
          </Box>

          <Box h={"50px"} overflow={"hidden"}>
            <Text mt={2}>{item.name}</Text>
          </Box>

          <Flex alignItems={"center"}>
            <s>
              <Text fontSize={"12px"}>&pound;{item.price + 5}</Text>
            </s>
            <Text ml={2} fontWeight={"bold"} color={"#d01345"}>
              &pound; {item.price}.00
            </Text>
          </Flex>

          <Box color={'grey'}>{item.color}</Box>

          <Flex mt={1} justifyContent={"right"}>
            <Select
              _hover={{ color: "#0770cf" }}
              borderLeft="none"
              borderRight="none"
              borderRadius="0px"
            >
              <option value="">Size</option>
              <option value="UK 4">UK 4</option>
              <option value="UK 5">UK 5</option>
              <option value="UK 6">UK 6</option>
              <option value="UK 8">UK 8</option>
              <option value="UK 9">UK 9</option>
            </Select>
          </Flex>

          <Button
            onClick={() => {
               HandleAddtoBag(item._id)
               handleRemovewishlist({ prodId: item._id })
              }}
            color={"white"}
            bgColor={"green"}
            borderRadius={'none'}
            mt={2}
            w={"full"}
          >
            MOVE TO BUG
          </Button>
        </Box>
      ))}
          </SimpleGrid>
        )}
      </>
     
    </>
  );
};
