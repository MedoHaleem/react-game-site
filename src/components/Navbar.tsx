import React from 'react';
import {HStack, Text} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
    return (
        <HStack  padding='10px'>
            <Text>NavBar</Text>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar;