import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Blog() {
    return (
        <Box mt='250px' w='1192px' mx='auto' h='859px' bg='linear-gradient(180deg, #F7FAFF 0%, rgba(255, 255, 255, 0) 100%)' border='1px solid rgba(30, 30, 30, 0.1)' borderRadius='5px' p='40px'>
            <Text color='#111822' mt='25px' fontSize='36px' fontWeight='600' lineHeight='43px' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center'>
                Read our <Text as='span' color='#077BFF'>Exclusive</Text> Blog
            </Text>
            <Text mt='10px' color='#111822' fontSize='18px' fontWeight='500' lineHeight='22px' maxW='465px' mx='auto' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center' opacity='0.5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
            </Text>
            <Flex w='137px' h='24px' mt='10px' mx='auto'>
                <Text fontSize='18px' fontWeight='500' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center' color='#077BFF' mx='auto' cursor='pointer'>
                    Read All Blogs
                </Text>
                <Image src='./images/blogarrow.png' alt='Arrow' w='24px' h='24px' />
            </Flex>
            <Grid mt='38px' gap='25px' templateColumns='repeat(3, 1fr)' w='100%'>
                {
                    [1, 2, 3, 4, 5, 6].map((item, index) => <Box key={index}>
                        <Box w='354px' h='221px' bg='rgba(7, 123, 255, 0.1)' border='1px solid rgba(7, 123, 255, 0.5)' borderRadius='5px' />
                        <Text mt='11px' fontSize='20px' fontWeight='500' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree' color='#111822'>
                            Blog Title appear Here
                        </Text>
                        <Text mt='1px' mb='13px' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' color='#111822' opacity='0.5'>
                            Category Name here
                        </Text>
                    </Box>
                    )
                }
            </Grid>
        </Box >
    )
}

export default Blog