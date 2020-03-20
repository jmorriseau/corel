import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: '#D26363'
    },
    text: {
        primary: "#0E2A38"
    }
}

const theme = createMuiTheme({
    palette: palette,
    typography:{
        fontSize: 16,
        h1: {
            fontSize: "3.5rem",
            marginBottom: "1.75rem"
        },
        body1: {
            fontSize: "1rem",
            lineHeight: "1.5",
            marginBottom: "0.75rem",
            color: palette.text.primary
        }
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                margin: "0.25rem 0.5rem"
            },
            
        }
    }
})

export { theme }