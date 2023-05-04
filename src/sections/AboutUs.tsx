import * as React from 'react';
import {Box, Container, Heading, Stack, Text} from '@chakra-ui/react'

const Component = () => (
    <Container id="about-us" maxW={'3xl'}>
        <Stack
            as={Box}
            spacing={{base: 8, md: 14}}
            pt={{base: 20, md: 28}}>
            <Heading className="heading">About Us</Heading>

            <Text>
                Osu! is a popular rhythm game based on clicking circles from community-designed beatmaps. In this project, we want to build a sequence-to-sequence model that can automatically generate a beatmap from any song's audio. 
            </Text>
            <Text>
                We will have access to a dataset of all ranked beatmaps from 2007-2020 to explore a variety of state-of-the-art sequence models like Transformers or Structured State Space models. At the end of the project, we hope to submit a fully AI-generated beatmap of a new song and have it reach the ranked status.
            </Text>
        </Stack>
    </Container>
);

export default Component;