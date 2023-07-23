import React, { useEffect, useState } from 'react'
import ProductImagesCarousel from './ProductImagesCarousel'
import { Box, Button, Flex, Progress, Text, useToast } from '@chakra-ui/react'
import {AiFillHeart, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { SetLoader } from '../../Redux/LoaderSlice'
import { GetProductById } from '../../ApiCall/products'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HiMinus, HiPlus } from 'react-icons/hi'
import {TbArrowAutofitContent, TbTruckDelivery} from 'react-icons/tb'
import { AddProductTocart, GetAllCartProducts } from '../../ApiCall/cartApi'
import { AddtoCart } from '../../Redux/Cartslice';
import SimilarProducts from './SimilarProducts';
import {IoDiamondOutline} from 'react-icons/io5';
import { AddProductToWishlist } from '../../ApiCall/wishlistApi';


const SingleProduct = () => {
  const toast = useToast()
  const { id } = useParams();
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);

  const [singleProduct, setSingleProduct] = useState([])

  const getSinglePRoducts = async () => {
    try {
     dispatch(SetLoader(true)) 
      const response = await GetProductById(id);
      if (response.success) {
        dispatch(SetLoader(false)) 
        // console.log("single",response.data);
        setSingleProduct(response.data);
      } else {
        throw new Error("products not found");
      }
    } catch (error) {
     dispatch(SetLoader(false)) 
     console.error(error.message);
    }
  };

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
        toast({
          title: 'product added to wishist',
          description: response.message,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } else {
        throw new Error("error occurred wishlistGrid handleRemovewishlist");
      }
    } catch (error) {
      toast({
        title: 'product',
        description:error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };
  

  useEffect(() => {
    getSinglePRoducts();
  }, [id]);


  return (
    <Box mt={10} >

      <Flex gap={10} w={["80%","80%","80%","50%"]} margin={'auto'} direction={{ base: 'column', md: 'row',sm: 'row' }}>
        <Box w={['100%','50%','50%','60%']}>
        <ProductImagesCarousel images={singleProduct.images}/>
        </Box>

        <Box w={['100%','50%','50%','50%']}>
          <Text >{singleProduct.name}</Text>
          <Text mt={3} fontSize={'xl'} color={'gray'}> &pound;{singleProduct.price}</Text>
          <Text mt={3}><span>COLOUR</span> { singleProduct.color}</Text>
          <Box mt={3}>Size  {singleProduct.size}</Box>


          <Flex alignItems={'center'} gap={5} mt={5}>
            <Box w={"80%"}>
              <Button color={'white'} borderRadius={'none'} w={"100%"} bg={'#018849'} onClick={()=>HandleAddtoBag(singleProduct._id)}>Add to Bag</Button>
            </Box>
            <Box cursor={'pointer'}>
              <AiFillHeart size={28}  onClick={() => handleRemovewishlist({ prodId: singleProduct._id })}/>
            </Box>
          </Flex>

           <Box mt={2} border={'1px solid gray'} p={5}>
              <Flex gap={5} textAlign={'center'}>
                <Box>
                   <TbTruckDelivery size={23}/>
                </Box>
                <Box>
                  <Text>Free Delivery.</Text>
                </Box>
              </Flex>
              <Text cursor={'pointer'} pl={20} fontSize={'sm'} decoration={'underline'}>View our Delivery & Return Policy</Text>
           </Box>

           <Box mt={10}>
            <Flex justifyContent={'space-between'} borderTop={'1px solid black'} w={"full"} alignItems={'center'}>
              <Box>
              <Text p={2}>Product Details</Text>
              </Box>
              <Box cursor={'pointer'}>
                {show === true ?  <HiMinus size={24} onClick={()=>setshow(false)}/> : <HiPlus size={24} onClick={()=>setshow(true)}/>}
              </Box>
            </Flex>
            {show && <Text w={"full"}  p={2}>{singleProduct.productDetails
}</Text>}
           </Box>

           <Box>
            <Flex justifyContent={'space-between'} borderTop={'1px solid black'} w={"full"} alignItems={'center'}>
              <Box>
              <Text p={2}>Brand</Text>
              </Box>
              <Box cursor={'pointer'}>
                {show1 === true ?  <HiMinus size={24} onClick={()=>setshow1(false)}/> : <HiPlus size={24} onClick={()=>setshow1(true)}/>}
              </Box>
            </Flex>
            {show1 && <Text w={"full"}  p={2}>{singleProduct.brand
}</Text>}
           </Box>

            <Box>
            <Flex justifyContent={'space-between'} borderTop={'1px solid black'} w={"full"} alignItems={'center'}>
              <Box>
              <Text p={2}>Size & Fit</Text>
              </Box>
              <Box cursor={'pointer'}>
                {show2 === true ?  <HiMinus size={24} onClick={()=>setshow2(false)}/> : <HiPlus size={24} onClick={()=>setshow2(true)}/>}
              </Box>
            </Flex>
            {show2 && <Text w={"full"}  p={2}>{singleProduct.size
}</Text>}
           </Box>

            <Box>
            <Flex justifyContent={'space-between'} borderTop={'1px solid black'} w={"full"} alignItems={'center'}>
              <Box>
              <Text p={2}>Look After Me</Text>
              </Box>
              <Box cursor={'pointer'}>
                {show3 === true ?  <HiMinus size={24} onClick={()=>setshow3(false)}/> : <HiPlus size={24} onClick={()=>setshow3(true)}/>}
              </Box>
            </Flex>
            {show3 && <Text w={"full"}  p={2}>{singleProduct.lookafterme
}</Text>}
           </Box>

           <Box>
            <Flex justifyContent={'space-between'} borderTop={'1px solid black'} w={"full"} borderBottom={'1px solid black'} alignItems={'center'}>
              <Box>
              <Text p={2}>About Me</Text>
              </Box>
              <Box cursor={'pointer'}>
                {show4 === true ?  <HiMinus size={24} onClick={()=>setshow4(false)}/> : <HiPlus size={24} onClick={()=>setshow4(true)}/>}
              </Box>
            </Flex>
            {show4 && <Text  borderBottom={'1px solid black'} w={"full"} p={2}>{singleProduct.aboutme
}</Text>}
           </Box>

        </Box>
        
      </Flex>
      
      {/* similar products */}
      <Box>
      <SimilarProducts 
       gender={singleProduct.gender}
       category={singleProduct.category}
       subcategory={singleProduct.subcategory}
       />
      </Box>

      {/* review */}
      <Box w={['80%','70%','80%','50%']} margin={'auto'} mt={10} mb={10}>
        <Text fontWeight={'bold'}>REVIEWS</Text>
        <Flex gap={10} direction={{ base: 'column', md: 'row',sm: 'row' }}>
          
          <Box w={['100%','50%','50%','50%']}>
            <Box>
                <Flex alignItems={'center'} gap={2}>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiOutlineStar/>
                     <Text>4.0 (4 Reviews)</Text>
                </Flex>
                <Text>75% of customers recommend this product</Text>
            </Box>
            {/* customer ratings */}
            <Box>
              <Text>CUSTOMER RATING</Text>
              <Flex gap={2}  mt={5}>
              <TbArrowAutofitContent/>
              <Text>Fit:</Text>
              </Flex>
              <Progress colorScheme='green' size='md' value={50}/>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box fontSize={'xs'}>Runs Small</Box>
                <Box fontSize={'xs'}>Runs Large</Box>
              </Flex>

              <Flex gap={2} mt={5}>
              <IoDiamondOutline/>
              <Text>QUALITY:</Text>
              </Flex>
              <Progress colorScheme='green' size='md' value={60}/>
              <Flex justifyContent={'space-between'} mt={2}>
                <Box fontSize={'xs'}>Poor</Box>
                <Box fontSize={'xs'}>Great</Box>
              </Flex>

            </Box>
          </Box>

          <Box  w={['100%','50%','50%','50%']}>
              <Text>MOST RECENT REVIEW</Text>
              <Flex alignItems={'center'} justifyContent={'space-between'} mt={2}>
                <Box>
                <Flex alignItems={'center'} gap={2}>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiOutlineStar/>
                </Flex>
                <Text fontSize={'xs'}>Verified Purchaser</Text>
                </Box>
                <Box>
                  <Text>17 days ago</Text>
                </Box>
              </Flex>
              <Box mt={5}>
                <Text fontWeight={'bold'} fontSize={'sm'}>COOL, BUT TOO SHORT</Text>
                <Text>I was looking for an inexpensive trendy item. I am size 6, 5'9", and had to return it, because it was just way too short to be worn comfortably. For a petit person though it might be a good find.</Text>
              </Box>
              <Button mt={5} borderRadius={'none'} w={'full'}>VIEW ALL REVIEWS</Button>
          </Box>

        </Flex>
      </Box>

    </Box>
  )
}

export default SingleProduct