import * as React from 'react';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import Page from "../components/Page";
import Team from "../sections/Team";

const Component = () => {
    return (
        <Page bgGradient={'linear-gradient(to bottom, rgba(103, 178, 221, 1), rgba(100, 188, 211, 0))'}>
            <Team/>
        </Page>
    );
}

export default Component;
