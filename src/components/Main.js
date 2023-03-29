import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function Main() {

    const [features, setFeatures] = useState([
        { id: 1, description: 'Lorem Ipsum Dolor Sit Amet Top', image: './images/icon/1.png', backgroundColor: '#EEFEFD', borderColor: '#D4EAE8' },
        { id: 2, description: 'Lorem Ipsum Dolor Sit Amet Top', image: './images/icon/2.png', backgroundColor: '#EEFEF0', borderColor: '#CEE5DF' },
        { id: 3, description: 'Lorem Ipsum Dolor Sit Amet Top', image: './images/icon/3.png', backgroundColor: '#EFFAF6', borderColor: '#CEDAC2' },
        { id: 4, description: 'Lorem Ipsum Dolor Sit Amet Top', image: './images/icon/4.png', backgroundColor: '#F0F7FF', borderColor: '#C7DEE6' },
    ])

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
            <Box bg='#077BFF' borderRadius='10px' w='222px' h='47px' color='#fff' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' mt='26px' mx='auto' display='flex' flexDirection='row' justifyContent='center' alignItems='center' gap='5px' position='relative' zIndex={2}>
                <Text as='span' color='#fff' fontSize='18px' fontWeight='600' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' textAlign='center'>
                    Get Started
                </Text>
                <Image src='./images/arrowleft.png' w='13px' h='9.5px' />
            </Box>
            <Box bg='#0566D4' roundedBottom='10px' w='222px' h='14px' mt='-9px' mx='auto' />
            <Box mt='22px' w='222px' h='90px' borderRadius='10px' bg='#00B67A1A' mx='auto' p='4'>
                <Image src='./images/homestar.png' w='151px' h='28.31px' mx='auto' />
                <Flex mt='6px' alignItems='center' gap='4px'>
                    <Text fontWeight='600' lineHeight='19px' letterSpacing='-0.02em' fontSize='16px'>
                        Rated 4.5 on
                    </Text>
                    <Image src='./images/startext.png' w='97px' h='23.81px' />
                </Flex>
            </Box>
            <Box maxW='588px' mx='auto' mt='54px' h='0px' border='.5px solid #D9D8D6' />
            <Grid templateColumns='repeat(4, 1fr)' gap='16.16px' mt='35px' maxW='1192px' mx={{ base: 'auto', md: 'auto', lg: 'auto' }} px={{ base: '16px', md: '16px', lg: '0' }}>
                {features.map((feature) => (
                    <GridItem key={feature.id} display='flex' alignItems='center' gap='16px' bg={feature.backgroundColor} borderRadius='5px'  border={`1px solid ${feature.borderColor}`} p='24.16px' colSpan={{ base: 2, md: 2, lg: 1 }}>
                        <Image src={feature.image} w='40px' h='40px' ml='10px' />
                        <Text color='#111822' fontSize='18px' fontWeight='400' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' opacity={0.8} >
                            {feature.description.slice(0, 12)} &nbsp; &nbsp; &nbsp; {feature.description.slice(12, 100)}
                        </Text>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default Main