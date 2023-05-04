import {extendTheme, StyleFunctionProps} from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        // just placeholders for the actual fonts we'll be using
        heading: `'Torus-Bold', sans-serif`,
        body: `'Torus', sans-serif`,
    },
    colors: {
        'button': '#4132F0',
        'button_hover': '#5132F0',
        'button_pressed': '#3132F0'
    },
    components: {},
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                color: '#FFFFFF',
                bg: 'rgb(12, 12, 12)',
            },
        }),
    }
});

export default theme;
