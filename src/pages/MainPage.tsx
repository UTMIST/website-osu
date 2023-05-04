import * as React from 'react';
import Header from '../sections/Header';
import AboutUs from '../sections/AboutUs';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import Page from "../components/Page";

const Component = () => {
    return (
        <Page bgGradient={'linear-gradient(to bottom, rgb(255, 140, 192),rgba(239, 132, 181,0))'}>
            <Header/>
            <AboutUs/>
        </Page>
    );
}

export default Component;
