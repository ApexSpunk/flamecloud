import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
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
                <Box w='344px' h='447px' bg='rgba(30, 30, 30, 0.01)' border='1px solid rgba(30, 30, 30, 0.1)' borderRadius='5px' px='28px' py='26px'>
                    <Flex justifyContent='space-between'>
                        <Grid gap='8px'>
                            <Image src='./images/price1.png' alt='Feature' w='40px' h='40px' />
                            <Text color='#111822' fontSize='20px' fontWeight='600' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                IPv4 Proxies
                            </Text>
                            <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                                Static/Rotating
                            </Text>
                        </Grid>
                        <Box mt='10px' mr='2px'>
                            <Text color='#111822' fontSize='12px' fontWeight='600' lineHeight='14px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                FROM
                            </Text>
                            <Text color='#111822' fontSize='16px' fontWeight='500' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                <Text as='span' color='#077BFF' fontSize='20px' fontWeight='600' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>$4.75</Text>
                                <Text as='span' opacity={0.8}>/day</Text>
                            </Text>
                            <Text color='#111822' mt='4px' fontSize='12px' fontWeight='600' lineHeight='14px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                OR
                            </Text>
                            <Text color='#111822' fontSize='16px' fontWeight='500' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                <Text as='span' color='#077BFF' fontSize='20px' fontWeight='600' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>$116.75</Text>
                                <Text as='span' opacity={0.8}>/mo</Text>
                            </Text>
                        </Box>
                    </Flex>
                    <Box maxW='298px' mx='auto' mt='14px' h='0px' border='.5px solid #D9D8D6' />
                    <Box mt='14px'>
                        <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                            Plan Includes :
                        </Text>
                        <Box mt='10px'>
                            <Flex gap='6px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    100 Threads
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Dedicated IP Pool
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Residential Proxy
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Unlimited Bandwidth
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Worldwide Locations
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    40 GBps
                                </Text>
                            </Flex>
                        </Box>
                        <Box maxW='298px' mx='auto' mt='21px' h='0px' border='.5px solid #D9D8D6' />
                        <Box bg='#077BFF' borderRadius='10px' w='288px' h='47px' color='#fff' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' mt='16px' mx='auto' display='flex' flexDirection='row' justifyContent='center' alignItems='center' gap='5px' position='relative' zIndex={2}>
                            <Text as='span' color='#fff' fontSize='18px' fontWeight='600' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' textAlign='center'>
                                View Pricing
                            </Text>
                            <Image src='./images/arrowleft.png' w='13px' h='9.5px' />
                        </Box>
                        <Box bg='#0566D4' roundedBottom='10px' w='288px' h='14px' mt='-9px' mx='auto' />
                    </Box>
                </Box>
                <Box w='344px' h='495px' bg='rgba(22, 209, 19, 0.1)' border='1px solid #16D113' borderRadius='5px' px='25px' py='22.5px'>
                    <Flex justifyContent='space-between'>
                        <Grid gap='8px'>
                            <Image src='./images/price2.png' alt='Feature' w='40px' h='40px' />
                            <Text color='#111822' fontSize='20px' fontWeight='600' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                IPv6 Proxies
                            </Text>
                            <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                                Static/Rotating
                            </Text>
                        </Grid>
                        <Box mt='10px' mr='2px'>
                            <Text color='#111822' fontSize='12px' fontWeight='600' lineHeight='14px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                FROM
                            </Text>
                            <Text color='#111822' fontSize='16px' fontWeight='500' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                <Text as='span' color='#077BFF' fontSize='20px' fontWeight='600' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>$4.75</Text>
                                <Text as='span' opacity={0.8}>/day</Text>
                            </Text>
                            <Text color='#111822' mt='4px' fontSize='12px' fontWeight='600' lineHeight='14px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                OR
                            </Text>
                            <Text color='#111822' fontSize='16px' fontWeight='500' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>
                                <Text as='span' color='#077BFF' fontSize='20px' fontWeight='600' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>$116.75</Text>
                                <Text as='span' opacity={0.8}>/mo</Text>
                            </Text>
                        </Box>
                    </Flex>
                    <Box maxW='298px' mx='auto' mt='14px' h='0px' border='.5px solid #D9D8D6' />
                    <Box mt='14px'>
                        <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                            Plan Includes :
                        </Text>
                        <Box mt='10px'>
                            <Flex gap='6px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    100 Threads
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Dedicated IP Pool
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Residential Proxy
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Unlimited Bandwidth
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Worldwide Locations
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/greencheck.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Dedicated Subnets
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/greencheck.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    1 Octilion IPS
                                </Text>
                            </Flex>
                            <Flex gap='6px' mt='8px' alignItems='center'>
                                <Image src='./images/greencheck.png' alt='Feature' w='12.5px' />
                                <Text color='#111822' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                    Septiltion per Location
                                </Text>
                            </Flex>
                        </Box>
                        <Box maxW='298px' mx='auto' mt='21px' h='0px' border='.5px solid #D9D8D6' />
                        <Box bg='#2CE617' borderRadius='10px' w='288px' h='47px' color='#fff' fontSize='16px' fontWeight='500' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' mt='16px' mx='auto' display='flex' flexDirection='row' justifyContent='center' alignItems='center' gap='5px' position='relative' zIndex={2}>
                            <Text as='span' color='#fff' fontSize='18px' fontWeight='600' lineHeight='22px' letterSpacing='-0.02em' fontFamily='Figtree' textDecoration='none' textAlign='center'>
                                View Pricing
                            </Text>
                            <Image src='./images/arrowleft.png' w='13px' h='9.5px' />
                        </Box>
                        <Box bg='#0EB726' roundedBottom='10px' w='288px' h='14px' mt='-9px' mx='auto' />
                    </Box>
                </Box>
            </Flex>
            <Flex gap='34px' mt='21px' maxW='708px' h='142px' mx='auto' bg='rgba(30, 30, 30, 0.01)' border='1px solid rgba(30, 30, 30, 0.1)' borderRadius='5px' pl='28px' py='20px'>
                <Box w='161px' h='99px' >
                    <Image src='./images/crown.png' alt='Crown' w='40px' h='40px' />
                    <Text mt='8px' color='#111822' fontSize='20px' fontWeight='600' lineHeight='24px' letterSpacing='-0.02em' fontFamily='Figtree'>
                        Become a Reseller
                    </Text>
                    <Text mt='8px' color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                        200+ Happy Resellers
                    </Text>
                </Box>
                <Flex w='362px' h='102px' justifyContent='space-between'>
                    <Box>
                        <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.5'>
                            Plan Includes :
                        </Text>
                        <Flex gap='6px' mt='8px' alignItems='center'>
                            <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                            <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                Whitelabel IP Pool
                            </Text>
                        </Flex>
                        <Flex gap='6px' mt='8px' alignItems='center'>
                            <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                            <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                Whitelabel Subnets
                            </Text>
                        </Flex>
                        <Flex gap='6px' mt='8px' alignItems='center'>
                            <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                            <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                Residential Proxy
                            </Text>
                        </Flex>
                    </Box>
                    <Box mt='16px'>
                        <Flex gap='6px' mt='8px' alignItems='center'>
                            <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                            <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                            Custom Bandwidth
                            </Text>
                        </Flex>
                        <Flex gap='6px' mt='8px' alignItems='center'>
                            <Image src='./images/checkprice.png' alt='Feature' w='12.5px' />
                            <Text color='#111822' fontSize='16px' fontWeight='400' lineHeight='19px' letterSpacing='-0.02em' fontFamily='Figtree' opacity='0.8'>
                                Priority Support
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Pricing