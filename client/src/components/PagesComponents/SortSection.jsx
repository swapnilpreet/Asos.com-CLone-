import { Box, Select, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const SortSection = ({ setfilters, filters,data,styles}) => {


  const HandleSort = (e) => {
    setfilters({
      ...filters,
      sort: e.target.value,
    });
  };
 
  const Handlebrand = (e) => {
    setfilters({
      ...filters,
      brand: e.target.value,
    });
  };

  const Handlecolor = (e) => {
    console.log(e.target.value);
    setfilters({
      ...filters,
      color: e.target.value,
    });
  };

  
  const Handlediscount = (e) => {
    console.log(e.target.value);
    setfilters({
      ...filters,
      discount: e.target.value,
    });
  };


  const handleBodyFit = (e) => {
    console.log(e.target.value);
    setfilters({
      ...filters,
      bodyfit: e.target.value,
    });
  };


  const handleSize = (e) => {
    console.log(e.target.value);
    setfilters({
      ...filters,
      size: e.target.value,
    });
  };


  const handlepriceRange = (e) => {
    console.log(e.target.value);
    setfilters({
      ...filters,
      priceRange: e.target.value,
    });
  };


  const handlestyle = (e) => {
    console.log(e.target.value);
    setfilters({
      ...filters,
      style: e.target.value,
    });
  };


  return (
    <div>
      <Box p={2} bgColor="#EDF2F7">
        <SimpleGrid
          w={["95%", "90%", "90%", "85%"]}
          m="auto"
          p={2}
          columns={[2, 3, 4, 6]}
          spacing={[5]}
        >

          <Select
            onChange={(e) => HandleSort(e)}
            _hover={{ color: "#0770cf" }}
            borderTop={"1px solid black"}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
          >
            <option value="">Sort</option>
            <option value="asc">Price Low to high</option>
            <option value="desc">Price High to Low</option>
          </Select>

          <Select
            onChange={(e) => Handlediscount(e)}
            _hover={{ color: "#0770cf" }}
            borderTop={"1px solid black"}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
          >
            <option value="">Discount %</option>
            <option value="2">Up to 2%</option>
            <option value="5">Up to 5%</option>
            <option value="7">Up to 7%</option>
            <option value="9">Up to 9%</option>
            <option value="10">More then 9%</option>
          </Select>

          <Select
            onChange={(e) => handlestyle(e)}
            _hover={{ color: "#0770cf" }}
            borderTop={"1px solid black"}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
            >
            {styles?.map((item)=>(
              <>
                <option value={item.value}>{item.name}</option>
              </>
            ))}
          </Select>

          <Select
            onChange={(e) => Handlebrand(e)}
            _hover={{ color: "#0770cf" }}
            borderTop={"1px solid black"}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
          >
            <option value="">Brand</option>
            <option value="Asos">ASOS</option>
            <option value="Adidas">Adidas</option>
            <option value="Nike">Nike</option>
            <option value="Puma">puma</option>
            <option value="HIIT">HIIT</option>
          </Select>

          <Select
            onChange={(e) => Handlecolor(e)}
            _hover={{ color: "#0770cf" }}
            borderTop={"1px solid black"}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
          >
            <option value="">Color</option>
            <option value="Multi">Multi</option>
            <option value="Silver">Silver</option>
            <option value="Black">Black</option>
            <option value="Cream">Cream</option>
            <option value="white">White</option>
            <option value="Pick">Pick</option>
            <option value="Purple">Purple</option>
            <option value="Green">Green</option>
            {/* <option value="Pick">Pick</option> */}
          </Select>

         {data==='bodyfit' ? null :  <Select 
           key={data}
            onChange={(e) => handleBodyFit(e)}
            _hover={{ color: "#0770cf" }}
            borderTop={"1px solid black"}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
          >
            <option value="">Body Fit</option>
            <option value="fuller Bust">fuller Bust</option>
            <option value="Hourgglass">Hourgglass</option>
            <option value="Main collection">Main collection</option>
            <option value="Maternity">Maternity</option>
            <option value="Petite">Petite</option>
          </Select>}

          <Select
            onChange={(e) => handleSize(e)}
            _hover={{ color: "#0770cf" }}
            borderTop={"1px solid black"}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
          >
            <option value="">Size</option>
            <option value="UK 4">UK 4</option>
            <option value="UK 5">UK 5</option>
            <option value="UK 6">UK 6</option>
            <option value="UK 8">UK 8</option>
            <option value="UK 9">UK 9</option>
          </Select>

          <Select
            onChange={(e) => handlepriceRange(e)}
            _hover={{ color: "#0770cf" }}
            borderTop={"1px solid black"}
            borderLeft="none"
            borderRight="none"
            borderRadius="0px"
            borderBottom={"1px solid black"}
          >
            <option value="">Price Range</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </Select>

        </SimpleGrid>
      </Box>
    </div>
  );
};

export default SortSection;
