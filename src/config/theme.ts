import {extendTheme, StyleFunctionProps} from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        // just placeholders for the actual fonts we'll be using
        heading: `'Torus-Bold', sans-serif`,
        body: `'Torus', sans-serif`,
    },
    colors: {
        'button': 'rgb(82, 59, 166)',
        'button_hover': 'rgb(128, 99, 238)',
        'button_pressed': 'rgb(82, 59, 166)'
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
