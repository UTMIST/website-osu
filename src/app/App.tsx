import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Fonts from '../fonts'
import theme from '../config/theme';
import '../style/override.css';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import MainPage from "../pages/MainPage";
import TeamPage from "../pages/TeamPage";
import DesignPage from "../pages/DesignPage";
import DemoPage from "../pages/DemoPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/team" element={<TeamPage/>}/>
                    <Route path="/design" element={<DesignPage/>}/>
                    <Route path="/demo" element={<DemoPage/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
};

export default App;
