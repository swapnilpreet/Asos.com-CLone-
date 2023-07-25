import React, { useEffect } from "react";
import { Button,SimpleGrid } from "@chakra-ui/react";

const ProductSubCategory = ({ data, setfilters, filters }) => {
  const handleCategory = (value) => {
    setfilters({
      ...filters,
      subcategory: value,
    });
  };
  useEffect(() => {}, [filters]);

  return (
    <SimpleGrid
      columns={[3, 5, 6, 10]}
      p={[5, 5, 5, 5]}
      spacing={[5, 5, 5, 5]}
       
    >
      {data.subCategory.map((item, index) => (
        <>
          <Button
            key={index}
            borderRadius={"25px"}
            fontSize={"xs"}
            onClick={() => handleCategory(item.value)}
          >
            {item.name}
          </Button>
        </>
      ))}
    </SimpleGrid>
  );
};

export default ProductSubCategory;
