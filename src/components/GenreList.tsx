import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres()

    if (error) return null;
    if (isLoading) return <Spinner/>

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre => <ListItem paddingY='5px' key={genre.id}><HStack>
                    <Image boxSize='32px' objectFit={'cover'} borderRadius={8}
                           src={getCroppedImageUrl(genre.image_background)}/>
                    <Button whiteSpace={'normal'} textAlign={'left'}
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link'
                            onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack></ListItem>)}
            </List>
        </>
    );
};

export default GenreList;