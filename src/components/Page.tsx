import * as React from 'react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import ScrollToTop from "./ScrollToTop";
import { ReactComponent as TriangleBg } from '../img/triangle-bg.svg'
import { Box } from '@chakra-ui/react';

const Component = ({children}: { children: any }) => {
    return (
        <>
            <Navigation/>
            <ScrollToTop/>
                <Box
                    position={'relative'}
                    zIndex={-1}
                    opacity={0.5}
                    maxHeight={'50vh'}
                    overflow={'hidden'}
                >
                    <Box
                        transform="translateY(-220px)"
                        bg='linear-gradient(to bottom, rgba(169,208,113,1),rgba(136,173,215,0))'
                    >
                        <TriangleBg />
                    </Box>
                </Box>
                <Box
                    position={'absolute'}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={1}
                bg='linear-gradient(to bottom, rgba(12, 12, 12, 0), rgba(12, 12, 12, 0),rgba(12, 12, 12, 1), rgba(12, 12, 12, 1))'
                    >
                    {children}
                <Footer/>
                </Box>
        </>
    );
};

export default Component;
