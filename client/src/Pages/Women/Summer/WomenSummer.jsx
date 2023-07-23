import React, { useEffect, useState } from 'react'
import Info from '../../../components/PagesComponents/Info';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, SimpleGrid } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import SortSection from '../../../components/PagesComponents/SortSection';
import ProductSubCategory from "../../../components/PagesComponents/ProductSubCategory";
import { useDispatch, useSelector } from 'react-redux';
import { SetWomenProduct } from '../../../Redux/WomesProductSlice';
import { GetAllWomensProducts } from '../../../ApiCall/products';
import TagsData from './newInsubcategory.json';
// import Info from "../../../components/PagesComponents/Info";
import infoItem from './contain.json';
import ProductList from '../../ProductList';
import { SetLoader } from '../../../Redux/LoaderSlice';

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

const WomenSummer = () => {
  const [filters, setfilters] = useState({
    gender:"Female",
    category:'New In',
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
            throw new Error("error fetching products New In");
          }
      } catch (error) {
        dispatch(SetLoader(false))
        console.log(error);
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
          separator={<ChevronRightIcon color="gray.500"/>
        }
        >
          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/women-home">Women</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontSize={'xs'}>
            <BreadcrumbLink >Summer</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />

      <Info data={infoItem}/>

      <hr />
      <Box pl={['2%','5%','2%','30%']}>
       <ProductSubCategory data={TagsData} setfilters={setfilters} filters={filters}/>
      </Box>

      <Box  mb={2} bgColor="#EEEEEE">
        <SortSection setfilters={setfilters} filters={filters} styles={stylesData}/>
      </Box>

      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
        <ProductList product={product} />
      </SimpleGrid>
    </Box>
  )
}

export default WomenSummer