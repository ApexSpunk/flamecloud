import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Main() {
    return (
        <Box>
            <Text color='#111822' fontSize='16px' fontWeight='600' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' opacity={0.5} textAlign='center' mt='95px'>
                WELCOME TO CREATIVE PROXIES
            </Text>
            <Text color='#111822' fontSize='56px' maxW='824px' mx='auto' fontWeight='600' lineHeight='67px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' textAlign='center' mt='3px'>
                We are the <Text as='span' color='#077BFF'>Fastest</Text> and the <Text as='span' color='#16D113'>Most Reliable</Text> Proxy Service since 2020
            </Text>
            <Text color='#111822' maxW='509px' mt='17px' mx='auto' fontSize='22px' fontWeight='500' lineHeight='26.4px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' opacity={0.5} textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
            </Text>
            <Box bg='#077BFF' borderRadius='10px' w='222px' h='47px' color='#fff' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' mt='30px' mx='auto' display='flex' flexDirection='row' justifyContent='center' alignItems='center' gap='5px'>
                <Text as='span' color='#fff' fontSize='18px' fontWeight='600' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' textAlign='center'>
                    Get Started
                </Text>
                <Image src='./images/arrowleft.png' w='13px' h='9.5px' />
            </Box>
        </Box>
    )
}

export default Main