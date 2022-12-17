import { useContext, useEffect, useState } from "react";
import { Box, SimpleGrid, Image, Heading, Text, Flex } from "@chakra-ui/react";
// "start": "react-scripts start",
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { useParams } from "react-router"
import { BsArrowRightCircle } from "react-icons/bs";
import { CityContext } from "../../Context/CityContext";

function Category() {
  const { city } = useContext(CityContext);
  const [catData, setCatData] = useState([]);
  const { param } = useParams();

  //    const electronics=[
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/appliances-bg/smartphones_new.jpg",
  //        "name":"Smartphones"
  //     },
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/appliances-bg/smart-devices-v1_new.jpg",
  //        "name":"Smart Devices"
  //     },
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/appliances-bg/laptops_new_2.jpg",
  //        "name":"Laptops"
  //     },
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/appliances-bg/tablets_new.jpg",
  //        "name":"Tablets"
  //     },
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/electronics-category-filter/gaming-consoles/gamingConsole.png",
  //        "name":"Gaming Console"
  //     }

  //   ]
  useEffect(() => {
    axios
      .get(`http://localhost:8080/category_${param}`)
      .then((res) => setCatData(res.data))
      .catch((e) => console.log(e));
  }, [param]);
  // useEffect(()=>{
  //    setCatData(`${para}`)
  // },[])

  return (
    <Box>
      {/* <Box h="60px" bg="silver"></Box> */}
      {/* <Navbar /> */}
      <Flex
        bg="#FAFAFA"
        border="1px solid #e6e6e6"
        justifyContent="space-between"
        h="55px"
        alignItems="center"
        pl="8%"
        pr="8%"
      >
        <Flex
          display={{ base: "none", md: "none", lg: "flex" }}
          fontSize="lg"
          color="#717171"
        >
          <Link to={`/${city}`}>Home {">"}</Link>
          <Link to="/">{param}</Link>
        </Flex>
        <Flex>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/product`}>Packages</Link>
          </Text>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/furniture`}>Furniture</Link>
          </Text>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/appliances`}>Appliances</Link>
          </Text>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/electronics`}>Electronics</Link>
          </Text>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/fitness`}>Fitness</Link>
          </Text>
        </Flex>
      </Flex>

      <Heading textAlign="center" mt="80px">
        Browse by {param} type
      </Heading>

      <SimpleGrid columns={[2, 2, 4]} gap={[10, 15, "3%"]} w="85%" m="auto">
        {catData.map((ele, index) => (
          <Box key={index} mt={["50px"]}>
            <Link to={`/${city}/${param}/${ele.name}`}>
              <Image src={ele.image} />
              <Box
                zIndex="1"
                position="relative"
                bg="#fff"
                border="1px solid #e6e6e6"
                w="70%"
                p="4%"
                fontSize="md"
                m="auto"
                mt="-25px"
                textAlign="center"
              >
                {ele.name}
              </Box>
            </Link>
          </Box>
        ))}
        <Box
          mt={["50px"]}
          textAlign="center"
          color="#1DBDC0"
          justifyItems="center"
          fontSize="xl"
        >
          View All in {param} <BsArrowRightCircle m="auto" w="20%" />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
export { Category };
