import * as React from 'react';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import Page from "../components/Page";
import Demo from "../sections/Demo";

const Component = () => {
    return (
        <Page bgGradient={'linear-gradient(to bottom, rgba(252, 161, 75, 1),rgba(136,173,215,0))'}>
            <Demo/>
        </Page>
    );
}

export default Component;
