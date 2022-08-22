import React from 'react';
import {
    Box,
    Text,
    VStack,
    HStack,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
} from '@chakra-ui/react'

import { Label } from './Label'

export const PlayerCard = (props) => {
    return (
        <Box bg='white' h='auto' w='240px' p={3} borderRadius={8} border={props.border} boxShadow='md'>
            <VStack w='full'>

                <HStack justifyContent='left' w='full'>
                    <Box bg='gray.200' borderRadius={8} h='120px' w='120px'>
                        <Image src={props.src} alt={props.src} objectFit='cover' h='120px' w='full' borderRadius={8} />
                    </Box>

                    <VStack alignItems='left'>
                        <Text align='left'>{props.firstName}</Text>
                        <Text align='left'>{props.lastName}</Text>
                        <Text align='left' width='full' fontSize='sm'>Hcp: {props.handicap}</Text>
                        {/* <Label labelName={props.team}/> */}
                    </VStack>
                </HStack>
                <Accordion allowToggle w='full'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Player bio
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel fontSize='sm'>
                            {props.playerBio}
                        </AccordionPanel>
                    </AccordionItem>
                    {/* <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    View stats
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel fontSize='sm'>
                            Stats go here
                        </AccordionPanel>
                    </AccordionItem> */}
                </Accordion>

                <Button w='full'>View stats</Button>
            </VStack>

        </Box>
    )
}