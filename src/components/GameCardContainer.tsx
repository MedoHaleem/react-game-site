import React, {ReactNode} from 'react';
import {Box} from "@chakra-ui/react";

interface Props {
    children: ReactNode;
}
const GameCardContainer = ({children}: Props) => {
    return (
        <Box borderRadius={10} overflow='hidden' width='250px'>
            {children}
        </Box>
    );
};

export default GameCardContainer;