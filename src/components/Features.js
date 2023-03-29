import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Features() {
    return (
        <Box w='full' h='703px' mt='138.36px' bg='#0566D4' py='115px'>
            <Box maxW='1192px' height='474px' mx='auto'>

                <Text color='#fff' fontSize='36px' fontWeight='600' lineHeight='43px' letterSpacing='-0.02em' fontFamily='Figtree' textAlign='center'>
                    Why we are the Best Proxy Providers
                </Text>
                <Text color='#fff' fontSize='18px' fontWeight='500' lineHeight='22px' maxW='465px' mx='auto' letterSpacing='-0.02em' fontFamily='Figtree' mt='10px' textAlign='center' opacity='0.5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
                </Text>
                <Grid templateColumns='repeat(4, 1fr)' columnGap='16.16px' rowGap='27px' mt='30px' maxW='1192px' mx='auto'>
                    {
                        new Array(8).fill(0).map((_, index) => <Box key={index} w='286px' h='160px' bg='rgba(255, 255, 255, 0.01)' border='1px solid rgba(255, 255, 255, 0.1)' borderRadius='5px' px='25px' py='22.5px'>
                            <Box display='flex' flexDirection='column' alignItems='flex-start' gap='8px'>
                                <Image src={`./features/${index + 1}.png`} alt='Feature' w='24px' h='24px' />
                                <Text color='#fff' fontSize='20px' fontWeight='600' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                    {`Feature No ${index + 1}`}
                                </Text>
                                <Text color='#fff' fontSize='14px' fontWeight='400' lineHeight='17px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non suscipit.
                                </Text>
                            </Box>
                        </Box>
                        )
                    }
                </Grid>
            </Box>

        </Box>
    )
}

export default Features