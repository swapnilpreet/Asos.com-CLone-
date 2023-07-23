import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Collapse,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { loadProduct, loadProductWithQuery } from "../../Redux/App/action";
import ProductList  from "../../ProductList";
import { GetAllWomensProducts } from "../../../ApiCall/products";
import { SetWomenProduct } from "../../../Redux/WomesProductSlice";
import ProductSubCategory from "../../../components/PagesComponents/ProductSubCategory";
import SortSection from "../../../components/PagesComponents/SortSection";
import TagsData from './subcategory.json'
import Info from "../../../components/PagesComponents/Info";
import pageInfo from './contain.json'
import { SetLoader } from "../../../Redux/LoaderSlice";


const stylesData=[
  {
    name:"Style",
    value:""
  },{
    name:"Falt",
    value:"Falt"
  },{
    name:"Heeled",
    value:"Heeled"
  },{
    name:"Ankle Strap",
    value:"Ankle Strap"
  },{
    name:"platform",
    value:"platform"
  }
]


export const Shoes =()=>{

  const toast = useToast();

  const [filters, setfilters] = useState({
    gender:"Female",
    category:'Shoes',
    brand:'',
    subcategory:"",
    sort:'',
    color:'',
    discount:'',
    priceRange:'',
    Size:'',
    bodyfit:"",
    style:'',
  });
 
  const dispatch=useDispatch();
  const {product}  = useSelector((state) => state.womenProduct);

 
const fetchPorducts=async()=>{
    try {
       dispatch(SetLoader(true))
        const response = await GetAllWomensProducts(filters);
        if(response){
           dispatch(SetLoader(false))
           dispatch(SetWomenProduct(response.data))
        }else{
          throw new Error("Product not fiilters");
        }
    } catch (error) {
      dispatch(SetLoader(false))

      toast({
        title: "Error while fetching",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
}

 useEffect(() => {
    fetchPorducts()
 }, [filters])
 
 

  return (
    <Box mb={10}> 
      <Box w="85%" m="auto" mt={3} mb={3}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/women-home">Women</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontSize={'xs'}>
            <BreadcrumbLink href="#@">Shoes</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />
      <Info data={pageInfo}/>
      <hr />
      <Box pl={['2%','5%','2%','20%']}>
            <ProductSubCategory data={TagsData} setfilters={setfilters} filters={filters}/>
      </Box>

      <Box  mb={2} bgColor="#EEEEEE">
        <SortSection setfilters={setfilters} filters={filters}  styles={stylesData}/>
      </Box>

      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
        <ProductList product={product} />
      </SimpleGrid>
    </Box>
  )
};
