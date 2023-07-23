import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../ApiCall/users";
import { SetLoader } from "../../Redux/LoaderSlice";

const Register = () => {
  const toast = useToast();

  const [customerSignUp, setCustomerSignUp] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    dob: "",
    interest: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCustomerSignUp({
      ...customerSignUp,
      [event.target.name]: event.target.value,
    });
  };

  const registerUserHandle = async () => {
    try {
      const response = await RegisterUser(customerSignUp);
      if (response) {
        toast({
          title: "Account created.Please Login",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setCustomerSignUp({
          email: "",
          password: "",
          firstname: "",
          lastname: "",
          dob: "",
        });
      } else {
        throw new Error('error occurred in register user');
      }
    } catch (error) {
      toast({
        title: "Error occurred while registering",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box style={{ fontFamily: "sans-serif" }}>
      <Text textAlign={"center"} fontSize={"20px"} mt={"30px"} fontWeight={600}>
        SIGN UP WITH...
      </Text>
      <Flex
        justifyContent="space-between"
        w={"95%"}
        h={"60px"}
        margin={"auto"}
        mt={"40px"}
      >
        <Flex
          cursor={"pointer"}
          align="center"
          justifyContent="space-Evenly"
          border={"1px solid gray"}
          w={"31%"}
        >
          <FcGoogle size={"25px"} />
          <Text fontWeight={600}>Google</Text>
        </Flex>
        <Flex
          cursor={"pointer"}
          align="center"
          justifyContent="space-Evenly"
          border={"1px solid gray"}
          w={"31%"}
        >
          <DiApple size={"25px"} />
          <Text fontWeight={600}>Apple</Text>
        </Flex>
        <Flex
          cursor={"pointer"}
          align="center"
          justifyContent="space-Evenly"
          border={"1px solid gray"}
          w={"31%"}
        >
          <IoLogoFacebook color="#3b5998" size={"25px"} />
          <Text fontWeight={600}>Facebook</Text>
        </Flex>
      </Flex>
      <Text mt={"30px"} textAlign={"center"}>
        Signing up with social is super quick. No extra passwords to remember -
        no brain fail.
      </Text>
      <Text textAlign={"center"}>
        Don't worry, we'd never share any of your data or post anything on your
        behalf #notevil
      </Text>
      <Text
        textAlign={"center"}
        fontSize={"20px"}
        mt={"30px"}
        mb={"35px"}
        fontWeight={600}
      >
        OR SIGN UP WITH EMAIL
      </Text>

      <FormControl w={["95%", "75%", "65%"]} margin={"auto"}>
        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"30px"}
        >
          EMAIL ADDRESS :
        </FormLabel>
        <Input
          size="lg"
          type="email"
          name="email"
          value={customerSignUp.email}
          onChange={handleChange}
        />
        <FormHelperText>We'll send your order confirmation here</FormHelperText>

        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"25px"}
        >
          FIRST NAME :
        </FormLabel>
        <Input
          size="lg"
          type="text"
          name="firstname"
          value={customerSignUp.firstname}
          onChange={handleChange}
        />

        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"20px"}
        >
          LAST NAME :
        </FormLabel>
        <Input
          size="lg"
          type="text"
          name="lastname"
          value={customerSignUp.lastname}
          onChange={handleChange}
        />

        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"20px"}
        >
          Password :
        </FormLabel>
        <InputGroup>
          <Input
            size="lg"
            name="password"
            value={customerSignUp.password}
            onChange={handleChange}
          />
        </InputGroup>

        <FormHelperText>Password Must be 6 or more characters</FormHelperText>

        <FormLabel
          color={"gray"}
          fontSize={"14px"}
          fontWeight={600}
          mt={"26px"}
          mb={0}
        >
          DATE OF BIRTH :
        </FormLabel>
        <Input
          size="lg"
          type="date"
          name="dob"
          value={customerSignUp.dob}
          onChange={handleChange}
        />
        <FormHelperText>You need to be 16 or over to use ASOS</FormHelperText>
      </FormControl>
      <Box w={"65%"} margin={"auto"} mt={"50px"} mb={"20px"}>
        <Button
          w={"100%"}
          bg={"#2d2d2d"}
          color={"white"}
          onClick={registerUserHandle}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
