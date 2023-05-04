import * as React from 'react';
import {Box, Button, Center, Container, Heading, Image, Stack} from '@chakra-ui/react'
import headerLogo from '../img/logo.png';

const Component = () => (
    <Container maxW={'3xl'}>
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}
            style={{paddingTop: '150px', paddingBottom: '80px'}}>
            <Heading
                color={'white'}
                fontSize={{base: '8xl'}}
                style={{marginTop: '0px'}}>
                Osu! AI Mapper
            </Heading>

            <Center>
                <Image src={headerLogo} className="headerlogo"/>
            </Center>

            <Heading
                color={'white'}
                fontSize={{base: '2xl'}}
                style={{marginTop: '40px'}}>
                Creating Osu! Beatmaps using Seq2Seq models
            </Heading>
            <Stack
                style={{marginTop: "40px"}}
                direction={{base: 'column', sm: 'column', md: 'row'}}
                spacing={3}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}>
                <Button
                    colorScheme={'blue'}
                    bg={'button'}
                    rounded={'full'}
                    px={6}
                    _hover={{
                        bg: 'button_hover',
                    }}
                    _active={{
                        bg: 'button_pressed',
                    }}
                    onClick={() => alert("CS > EngSci")}>
                    Grow some Aloe
                </Button>
            </Stack>
        </Stack>
    </Container>
);

export default Component;
