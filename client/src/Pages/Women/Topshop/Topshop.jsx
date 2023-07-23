import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Collapse,
  Heading,
  SimpleGrid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList  from "../../ProductList";
import { GetAllWomensProducts } from "../../../ApiCall/products";
import { SetWomenProduct } from "../../../Redux/WomesProductSlice";
import SortSection from "../../../components/PagesComponents/SortSection";
import { SetLoader } from "../../../Redux/LoaderSlice";
import Info from "../../../components/PagesComponents/Info";
import infoItem from './contain.json'


const stylesData=[
  {
    name:"Styles",
    value:" ",
  },
  {
    name:"Regular",
    value:"Regular",
  },
  {
    name:"Cropped",
    value:"Cropped",
  },{
    name:"Bodycon",
    value:"Bodycon",
  },
  {
    name:"Split",
    value:"Split",
  },{
    name:"Denim",
    value:"Denim",
  },{
    name:"Falt",
    value:"Falt",
  }
]

export const Topshop = () => {
  const toast = useToast();
  const [filters, setfilters] = useState({
    // category:'Accessories',
    gender:"Female",
    brand:'',
    topshop:true,
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
      <Box w="85%" m="auto" mt={3} mb={3} fontSize={'xs'}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#@">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#@">Women</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#@">Topshop</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />

       <Info data={infoItem}/>

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
