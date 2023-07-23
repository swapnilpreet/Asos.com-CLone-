import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { FcGoogle } from "react-icons/fc";
  import { DiApple } from "react-icons/di";
  import { IoLogoFacebook } from "react-icons/io";
import { LoginUser } from "../../ApiCall/users";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
 
const Login = () => {
  const toast = useToast();
  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCustomerLogin({
      ...customerLogin,
      [event.target.name]: event.target.value,
    });
  };

 

  const loginUserHandle = async () => {
    try {
      const response = await LoginUser(customerLogin);
      if (response.success) {
        localStorage.setItem("token", response.data);
        toast({
          title: response.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        navigate("/");
      }
      else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        title: 'Error Occured during login',
        description: error.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  };


  // useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //     navigate("/")
  //   }
  // },[]);

    return (
        <Box style={{ fontFamily: "sans-serif" }}>
          <FormControl w={["95%", "75%", "65%"]} margin={"auto"}>
            <FormLabel
              color={"gray"}
              fontSize={"14px"}
              fontWeight={600}
              mt={"30px"}
            >
              Email address :
            </FormLabel>
            <Input
              size="lg"
              type='text'
              name="email"
              value={customerLogin.email}
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
                type='text'
                name="password"
                value={customerLogin.password}
                onChange={handleChange}
              />
              {/* <InputRightElement width="4.5rem">
                {password ? (
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                ) : null}
              </InputRightElement> */}
            </InputGroup>
          </FormControl>
          <Box w={"65%"} margin={"auto"} mt={"20px"}>
            <Button
              w={"100%"}
              bg={"#2d2d2d"}
              color={"white"}
              onClick={loginUserHandle}
            >Login
            </Button>
          </Box>
          <Text textAlign={"center"} mt={"15px"}>
            Forgot password?
          </Text>
          <Text textAlign={"center"} fontSize={"18px"} mt={"40px"} fontWeight={600}>
            OR SIGN IN WITH...
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
              p={1}
              justifyContent="space-Evenly"
              border={"1px solid gray"}
              w={["36%", "31%", "31%", "31%"]}
            >
              <IoLogoFacebook color="#3b5998" size={"25px"} />
              <Text fontWeight={600}>Facebook</Text>
            </Flex>
          </Flex>
          <Text textAlign={"center"} mt={"18px"}>
            Where has Twitter Gone?
          </Text>
        </Box>
      );
}

export default Login