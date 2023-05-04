import * as React from 'react';
import {Box, Button, Container, Heading, Stack} from '@chakra-ui/react'

const Component = () => (
    <Container id="demo" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            pt={{base: 20, md: 28}}>
            <Heading className="heading">Demo</Heading>

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
                    color={'whiteAlpha.900'}
                    onClick={() => alert("your aloe needs more water")}>
                    Run Demo
                </Button>
            </Stack>
        </Stack>
    </Container>
);

export default Component;