import React from 'react';
import usePlatforms from "../hooks/usePlatforms";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}
const SortSelector = ({selectedSortOrder, onSelectSortOrder}:Props) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'}
    ]
    const currentSortOrder = sortOrders.find(o => o.value === selectedSortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(o => <MenuItem onClick={() => onSelectSortOrder(o.value)} key={o.value}
                                               value={o.value}>{o.label}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;