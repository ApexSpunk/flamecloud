import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'

function Pricing() {
    return (
        <Box mt='177px'>
            <Text color='#111822' fontSize='36px' fontWeight='600' lineHeight='43px' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center'>
                You choose, we <Text as='span' color='#077BFF'>Deliver!</Text>
            </Text>
            <Text mt='10px' color='#111822' fontSize='18px' fontWeight='500' lineHeight='22px' maxW='465px' mx='auto' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center' opacity='0.5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
            </Text>
            <Flex columnGap='16.16px' rowGap='27px' mt='99px' maxW='1192px' mx='auto' justifyContent='center'>
                <Box w='344px' h='447px' bg='rgba(30, 30, 30, 0.01)' border='1px solid rgba(30, 30, 30, 0.1)' borderRadius='5px' px='25px' py='22.5px' />
                <Box w='344px' h='495px' bg='rgba(22, 209, 19, 0.1)' border='1px solid #16D113' borderRadius='5px' px='25px' py='22.5px' />
            </Flex>
            <Box mt='21px' maxW='708px' h='142px' mx='auto' bg='rgba(30, 30, 30, 0.01)' border='1px solid rgba(30, 30, 30, 0.1)' borderRadius='5px' pl='28px' py='20px'>

            </Box>
        </Box>
    )
}

export default Pricing