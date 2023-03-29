import { Box } from '@chakra-ui/react'
import React from 'react'
import Checker from '../components/Checker'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Start() {
    return (
        <Box>
            <Navbar />
            <Checker />
            <Footer />
        </Box>
    )
}

export default Start