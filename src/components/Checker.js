import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Checker() {
    return (
        <Box>
            <Text textAlign='center' mt='95px' color='#111822' fontSize='16px' fontWeight='600' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                PROXY LOCATION CHECKER
            </Text>
            <Text color='#111822' mx='auto' fontSize='56px' maxW='616px' fontWeight='600' lineHeight='67.2px' letterSpacing='-0.02em' mt='3px' fontFamily='Figtree' textAlign='center'>
                Check Locations of all your Proxies <Text as='span' color='#077BFF'>Free</Text> of Cost
            </Text>
            <Text mx='auto' mt='17px' color='#111822' fontSize='22px' fontWeight='500' lineHeight='26px' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center' opacity='0.5' width='509px'>,
                To Check location, enter the address or proxies you want to check (1 IP Per line)
            </Text>
            <Box mt='42px' maxW='708px' mx='auto' h='169px' bg='rgba(217, 216, 214, 0.25)' border='1px solid rgba(0, 0, 0, 0.25)' borderRadius='5px' p='19px'>
                <Text color='#111822' fontSize='18px' fontWeight='500' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree' w='80px'>
                    8.8.8.8 1.1.1.1 192.168.1.1
                </Text>
            </Box>
            <Flex maxW='708px' mx='auto' justifyContent='space-between' alignItems='center'>
                <Flex mt='21px' w='223px' h='39px' bg='#077BFF' borderRadius='5px' cursor='pointer' alignItems='center' justifyContent='center'>
                    <Text color='#FFFFFF' fontSize='16px' fontWeight='600' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center'>
                        Check Location
                    </Text>
                </Flex>
                <Text maxW='212px' fontSize='14px' fontWeight='400' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' mt='10px' color='#111822' opacity='0.5'>
                    By using our tool, you agree our <Text as='span' textDecoration='underline'>Terms of Service</Text> and <Text as='span' textDecoration='underline'>Privacy Policy</Text>
                </Text>
            </Flex>
            <Box maxW='708px' mx='auto'>
                <Text mt='41px' fontSize='20px' fontWeight='500' lineHeight='24px' letterSpacing='-0.02em' color='#077BFF' fontFamily='Figtree'>
                    Your Results
                </Text>
            </Box>

            <Box mt='17px' maxW='708px' mx='auto' h='192px' bg='rgba(217, 216, 214, 0.05)' border='1px solid rgba(0, 0, 0, 0.25)' borderRadius='5px'>
                <Grid maxW='708px' mx='auto' h='41px' bg='rgba(0, 0, 0, 0.1)' roundedTop='5px' templateColumns='repeat(4, 1fr)' alignItems='center' justifyContent='space-between' borderBottom='1px solid rgba(0, 0, 0, 0.25)'>
                    <Text ml='20px' color='#111822' fontSize='14px' fontWeight='600' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        IP
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='600' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        PROXY
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='600' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        CITY
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='600' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        COUNTRY
                    </Text>
                </Grid>
                <Grid maxW='708px' mx='auto' h='50px' roundedTop='5px' templateColumns='repeat(4, 1fr)' alignItems='center' justifyContent='space-between' borderBottom='1px solid rgba(0, 0, 0, 0.25)'>
                    <Text ml='20px' color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        8.8.8.8
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        192.168.0.0
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        New York
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        US
                    </Text>
                </Grid>
                <Grid maxW='708px' mx='auto' h='50px' roundedTop='5px' templateColumns='repeat(4, 1fr)' alignItems='center' justifyContent='space-between' borderBottom='1px solid rgba(0, 0, 0, 0.25)'>
                    <Text ml='20px' color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        8.8.8.8
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        192.168.0.0
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        New York
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        US
                    </Text>
                </Grid>
                <Grid maxW='708px' mx='auto' h='50px' roundedTop='5px' templateColumns='repeat(4, 1fr)' alignItems='center' justifyContent='space-between'>
                    <Text ml='20px' color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        8.8.8.8
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        192.168.0.0
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        New York
                    </Text>
                    <Text color='#111822' fontSize='14px' fontWeight='500' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.6'>
                        US
                    </Text>
                </Grid>
                <Flex mt='39px' maxW='433.97px' mx='auto' justifyContent='space-between'>
                    <Text color='#111822' fontSize='18px' fontWeight='500' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree'>
                        Check out our IPv6 Compatibility Checker
                    </Text>
                        <Text as='span' color='#077BFF' fontSize='16px' fontWeight='600' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' textAlign='center'>
                            View Tool
                        </Text>
                        <Image src='./images/aarow.png' ml='-2' w='24px' h='24px' />

                </Flex>
            </Box>
        </Box>
    )
}

export default Checker