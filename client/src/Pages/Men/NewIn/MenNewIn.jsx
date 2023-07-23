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
  SimpleGrid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList  from "../../ProductList";
import { GetAllMensProducts} from "../../../ApiCall/products";
import { SetWomenProduct } from "../../../Redux/WomesProductSlice";
import SortSection from "../../../components/PagesComponents/SortSection";
import { SetLoader } from "../../../Redux/LoaderSlice";
import pageInfo from './contain.json'
import Info from "../../../components/PagesComponents/Info";

const stylesData=[
  {
    name:"Styles",
    value:"",
  },
  {
    name:"Regular",
    value:"Regular",
  },
  {
    name:"split",
    value:"split",
  },
  {
    name:"Cropped",
    value:"Cropped",
  },
  {
    name:"Bodycon",
    value:"Bodycon",
  }
]


export const MenNewIn = () => {
  const toast = useToast();

  const [filters, setfilters] = useState({
    gender:"Male",
    category:'',
    brand:'',
    subcategory:"",
    sort:'',
    color:'',
    discount:'',
    priceRange:'',
    size:'',
    bodyfit:"",
    style:'',
  });

  const dispatch=useDispatch();
  const {product}  = useSelector((state) => state.womenProduct);
  

  const fetchPorducts=async()=>{
      try {
          dispatch(SetLoader(true))
          const response = await GetAllMensProducts(filters);
          if(response){
            dispatch(SetLoader(false))
            dispatch(SetWomenProduct(response.data))
          }else{
            throw new Error("error occurred while fetching mennewIn");
          }
      } catch (error) {
        dispatch(SetLoader(false))
        console.log(error)
      }
  }
  useEffect(()=>{
      fetchPorducts()
  },[filters])

 
  return (
    <Box mb={10}> 
      <Box w="85%" m="auto" mt={3} mb={3} fontSize={'xs'}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/men-home">Men</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontSize={'xs'}>
            <BreadcrumbLink href="#@">New In</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />
      <Info data={pageInfo}/>
      <hr />
      <Box  mb={2} bgColor="#EEEEEE" >
        <SortSection setfilters={setfilters} filters={filters} styles={stylesData}/>
      </Box>
      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
        <ProductList product={product} />
      </SimpleGrid>
    </Box>
  )
};
