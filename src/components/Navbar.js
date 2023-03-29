import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <Box>
            <Box maxW='1192px' h='58px' mx='auto' alignItems='center' display='flex'>
                <Link to='/'>
                    <Box>
                        <Image src='./images/logo.png' alt='Logo' w='217px' mx='8px' />
                    </Box>
                </Link>
                <Box ml='25px' flexDirection='row' alignItems='flex-start' gap='30px' display={{ base: 'none', lg: 'flex' }}>
                    <Text as={Link} to='/' color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none'>
                        Pricing
                    </Text>
                    <Box display='flex' flexDirection='row' alignItems='center' gap='8px'>
                        <Text as={Link} to='/' color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none'>
                            Explore Tools
                        </Text>
                        <Image src='./images/arrowdown.png' alt='Arrow Down' w='9.5px' h='5.5px' />
                    </Box>
                    <Box display='flex' flexDirection='row' alignItems='center' gap='8px'>
                        <Text as={Link} to='/' color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none'>
                            Resources
                        </Text>
                        <Image src='./images/arrowdown.png' alt='Arrow Down' w='9.5px' h='5.5px' />
                    </Box>
                    <Text as={Link} to='/' color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none'>
                        FAQs
                    </Text>
                    <Text as={Link} to='/' color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none'>
                        Blogs
                    </Text>
                </Box>
                <Box ml='auto' mr='8px' display='flex' flexDirection='row' alignItems='center' gap='30px'>
                    <Flex gap='22px' alignItems='center' display={{ base: 'none', lg: 'flex' }}>
                        <Flex gap='5px' alignItems='center'>
                            <Image src='./images/discord 1.png' alt='Discord' w='16px' h='16px' />
                            <Text as={Link} to='/' color='#5865F2' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none'>
                                Join Discord
                            </Text>
                        </Flex>
                        <Image src='./images/menuline.png' alt='Line' w='2px' h='31.5px' />
                        <Text as={Link} to='/' color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none'>
                            Log in
                        </Text>
                    </Flex>
                    <Flex bg='#077BFF' borderRadius='5px' w='127px' h='39px' color='#fff' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' alignItems='center' justifyContent='center' as={Link} to='/start'>
                        Get Started
                    </Flex>
                </Box>
            </Box>
            <Box maxW='1192px' mx='auto' h='0px' border='.5px solid #D9D8D6' />
        </Box>
    )
}

export default Navbar