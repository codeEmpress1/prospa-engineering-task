import theme from 'styled-theming'

export const fontSixe = theme.variants('font-size', {
    // xsmall: 'font-size:0.5em',
    header: 'font-size:80px',
    // medium: 'font-size:80px',
    cardHeader: 'font-size:65px',
    date: '',
    link: 'font-size:1.5em',
    money: 'font-size:2.5em',
})

export const fontWeight = theme.variants('mode',
'font-weight', {
    lighter: 'font-weight:100',
    light: 'font-weight:400', 
    bold: 'font-weight:500', 
    bolder: 'font-weight:700',
})

export const fontFamily = theme.variants('mode',
'font-family', {
    primary: 'Akronim',
    secondary: 'Akrcifico',
})