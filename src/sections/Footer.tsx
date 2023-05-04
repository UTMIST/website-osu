import * as React from 'react';
import {Box, Center, Container, Flex, Image, Link, Text, VStack} from '@chakra-ui/react';
import logo from '../img/logo.png';

const Footer = () => {
    return (
        <Box
            bg={'#000'}
            mt={{base: 20, md: 28}}
        >
            <Container maxW={'3xl'} py={10}>
                <Flex direction={['column', 'row']}>
                    <Center>
                        <Link href="#">
                            <Image src={logo} className="headerlogo"/>
                        </Link>
                    </Center>
                    <Center
                        mt={{base: 8, md: 3}}
                        pl={{base: 5, sm: 10}}
                        pr={{base: 5, sm: 0}}
                        textAlign={{base: 'center', sm: 'left'}}
                    >
                        <VStack align={'left'}>
                            <Text>
                                Osu! AI Mapper<br/>
                                <Link
                                    href="https://utmist.gitlab.io"
                                    textDecor={'underline'}
                                    isExternal
                                    _hover={{color: 'blue.600'}}
                                    transition={'0.25s'}
                                >
                                    University of Toronto Machine Intelligence Student Team
                                </Link>
                            </Text>
                        </VStack>
                    </Center>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer;