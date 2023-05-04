import * as React from 'react';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import Page from "../components/Page";
import Design from "../sections/Design";

const Component = () => {
    return (
        <Page bgGradient={'linear-gradient(to bottom, rgba(169,208,113,1),rgba(136,173,215,0))'}>
            <Design/>
        </Page>
    );
}

export default Component;
