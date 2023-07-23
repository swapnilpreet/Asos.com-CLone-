import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, SimpleGrid, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Info from '../../../components/PagesComponents/Info';
import SortSection from '../../../components/PagesComponents/SortSection';
import ProductList from '../../ProductList';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { SetLoader } from '../../../Redux/LoaderSlice';
import { SetWomenProduct } from '../../../Redux/WomesProductSlice';
import { GetAllMensProducts } from '../../../ApiCall/products';
import { useDispatch, useSelector } from 'react-redux';
import pageInfo from './contain.json'


const Summer = () => {
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
            throw new Error("Product not fiilters");
          }
      } catch (error) {
        dispatch(SetLoader(false))
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
          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem fontSize={'xs'}>
            <BreadcrumbLink href="/men-home">Men</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage fontSize={'xs'}>
            <BreadcrumbLink href="#@">Summer</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <hr />
      <Info data={pageInfo}/>
      <hr />
      <Box  mb={2} bgColor="#EEEEEE" >
        <SortSection setfilters={setfilters} filters={filters}/>
      </Box>
      <SimpleGrid columns={[2,2,3,4]} w="85%" m={"auto"} spacing={3} p={0}>
        <ProductList product={product} />
      </SimpleGrid>
    </Box>
  )
}

export default Summer