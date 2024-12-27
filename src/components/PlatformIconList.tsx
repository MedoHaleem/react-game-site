import React from 'react';
import {Platform} from "../hooks/useGames";
import {HStack, Icon} from "@chakra-ui/react";
import {
    BsGlobe,
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
    MdPhoneIphone,
    SiNintendo
} from "react-icons/all";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"}>{platform.name}</Icon>)}
        </HStack>
    );
};

export default PlatformIconList;