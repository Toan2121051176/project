import {
  Box,
  HStack,
  Heading,
  Icon,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { FaBars, FaUserCircle } from "react-icons/ai";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white" boxShadow="sm">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        {/* Menu Icon for Sidebar */}
        <Icon
          as={FaBars}
          onClick={onOpen}
          fontSize="24px"
          cursor="pointer"
          _hover={{ color: "gray.600" }}
          display={{ base: "block", lg: "none" }}
        />

        {/* Title */}
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>

        {/* User Menu */}
        <Menu>
          <MenuButton _hover={{ opacity: 0.8 }}>
            <Icon as={FaUserCircle} fontSize="28px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
