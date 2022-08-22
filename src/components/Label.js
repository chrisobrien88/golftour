import React from 'react';

import {
    Box,
    Text,
    Button,
    VStack,
    HStack,
    ChakraProvider,
} from '@chakra-ui/react'

export const Label = (props) => {
    return (
        <ChakraProvider>
        <Box  px = '12px' py = '4px' bg='white' borderRadius='full'>
            <Text fontSize='sm'>{props.labelName}</Text>
        </Box>
        </ChakraProvider>
    )
}