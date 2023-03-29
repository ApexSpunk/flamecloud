import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Testimonials() {
    return (
        <Box mt='180px'>
            <Text color='#111822' fontSize='36px' fontWeight='600' lineHeight='43px' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center'>
                Customers <Text as='span' color='#16D113'>Love</Text> our Proxies
            </Text>
            <Text mt='10px' color='#111822' fontSize='18px' fontWeight='500' lineHeight='22px' maxW='465px' mx='auto' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center' opacity='0.5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
            </Text>
            <Grid templateColumns='repeat(3, 1fr)' gap='17px' mt='34px' maxW='1192px' mx='auto'>
                <Box w='386px' h='248px' bg='rgba(30, 30, 30, 0.01)' border='1px solid rgba(22, 209, 19, 0.5)' borderRadius='5px' py='29px' px='25px'>
                    <Box display='flex' flexDirection='column' alignItems='flex-start' gap='8px'>
                        <Box>
                            <Image src='./images/starts.png' w='119px' h='23.8px' />
                            <Text mt='19.1px' color='#111822' fontSize='18px' fontWeight='400' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                “Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”
                            </Text>
                            <Flex mt='3' gap='10px' alignItems='center'>
                                <Image src='./images/usericon.png' w='48px' h='48px' />
                                <Box>
                                    <Text color='#111822' fontSize='18px' fontWeight='500' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                        ECHO DZNS
                                    </Text>
                                    <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                                        Web Designer, CreativeProxies
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                {
                    new Array(2).fill(0).map((_, index) => <Box key={index} w='386px' h='248px' bg='rgba(30, 30, 30, 0.01)' border='1px solid rgba(22, 209, 19, 0.5)' borderRadius='5px' py='29px' px='25px'>
                        <Box display='flex' flexDirection='column' alignItems='flex-start' gap='8px'>
                            <Box>
                                <Image src='./images/starts.png' w='119px' h='23.8px' />
                                <Text mt='19.1px' color='#111822' fontSize='18px' fontWeight='400' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    “Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor et tellus.”
                                </Text>
                                <Flex mt='3' gap='10px' alignItems='center'>
                                    <Image src='./images/usericon.png' w='48px' h='48px' />
                                    <Box>
                                        <Text color='#111822' fontSize='18px' fontWeight='500' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                            John Doe
                                        </Text>
                                        <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                                            Random Text, ABC
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                    )
                }
            </Grid>
        </Box>
    )
}

export default Testimonials