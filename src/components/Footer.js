import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    return (
        <Box mt='120px' mb='48px'>
            <Box maxW='1192px' mx='auto' h='0px' border='.5px solid #D9D8D6' />
            <Flex mt='34px' maxW='1192px' mx='auto' justifyContent='space-between' alignItems='center' >
                <Box w='221px' h='133px'>
                    <Image src='./images/logo.png' alt='Logo' w='217px' />
                    <Text mx='auto' w='212px' mt='7px' color='#111822' fontSize='14px' fontWeight='400' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.5}>
                        Copyright © 2023 Creative Proxies. All rights reserved.
                    </Text>
                    <Box mt='15px' display='flex' p='10px' flexDirection='row' alignItems='center' gap='5px' bg='rgba(88, 101, 242, 0.1)' border='1px solid #5865F2' borderRadius='10px' justifyContent='center'>
                        <Image src='./images/discord 1.png' alt='Discord' w='16px' h='16px' mt='-1px' />
                        <Text as='a' href='https://discord.gg/creativeproxies' target='_blank' color='#5865F2' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none'>
                            Join Our Discord
                        </Text>
                    </Box>
                </Box>
                <Flex flexDirection='row' alignItems='flex-start' gap='100px' mr='96px'>
                    <Box>
                        <Text color='#111822' fontSize='14px' fontWeight='600' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.25}>
                            Explore
                        </Text>
                        <Text mt='10px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            Proxy Location Checker
                        </Text>
                        <Text mt='13px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            IPv6 Comptability
                        </Text>
                        <Text mt='13px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            Blogs
                        </Text>
                    </Box>
                    <Box>
                        <Text color='#111822' fontSize='14px' fontWeight='600' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.25}>
                            Resources
                        </Text>
                        <Text mt='10px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            FAQs
                        </Text>
                        <Text mt='13px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            Branding
                        </Text>
                        <Text mt='13px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            Network Information
                        </Text>
                        <Text mt='13px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            Imprint
                        </Text>
                    </Box>
                    <Box>
                        <Text color='#111822' fontSize='14px' fontWeight='600' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.25}>
                            Support
                        </Text>
                        <Text mt='10px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            Status
                        </Text>
                        <Text mt='13px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            Terms of Service
                        </Text>
                        <Text mt='13px' color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity={0.75}>
                            Privacy Policy
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer