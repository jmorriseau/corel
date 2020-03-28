import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: {
        main: '#D26363'
    },
    text: {
        primary: "#0E2A38",
        secondary: "#D26363"
    }
}

const theme = createMuiTheme({
    palette: palette,
    typography:{
        fontSize: 16,
        fontFamily: " 'Inter', Arial, sans-serif",
        h1: {
            fontSize: "3.5rem",
            fontWeight: "600",
            letterSpacing: "0.1px",
            marginBottom: "1.375rem",
            lineHeight: "1.25"
        },
        h2: {
            fontSize: "2.875rem",
            fontWeight: "400",
            marginBottom: "1.125rem",
            lineHeight: "1.375"
        },
        h3: {
            fontSize: "2.5rem",
            fontWeight: "300",
            marginBottom: "1rem",
            lineHeight: "1.375"
        },
        h4: {
            fontSize: "2rem",
            fontWeight: "400",
            marginBottom: "1rem",
            lineHeight: "1.25"
        },
        h5: {
            fontSize: "1.5rem",
            fontWeight: "600",
            letterSpacing: "0.3px",
            marginBottom: "0.875rem",
            lineHeight: "1.25"
        },
        h6: {
            fontSize: "1.125rem",
            fontWeight: "700",
            letterSpacing: "0.5px",
            marginBottom: "0.75rem",
            lineHeight: "1.5"
        },
        body1: {
            fontSize: "1rem",
            lineHeight: "1.5",
            marginBottom: "0.75rem",
            color: palette.text.primary
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            marginBottom: "0.75rem"
        },
        subtitle1: {
            fontSize: "1.125rem",
            fontWeight: "600",
            letterSpacing: "0.5px",
            marginBottom: "0.75rem"
        },
        subtitle2: {
            fontSize: "1rem",
            fontWeight: "700",
            letterSpacing: "0.5px",
            marginBottom: "0.75rem"
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                margin: "0.25rem 0.5rem"
            },
            
        },
        MuiCard: {
            root: {
                "&.pricing-card": {
                    width: "32%",
                    maxWidth: "300px"
                }
            }
        },
        MuiTypography: {
            root: {
                fontFamily: " 'Inter' "
            }
        }
    }
})

export { theme }