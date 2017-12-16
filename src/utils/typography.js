import Typography from "typography";

const typography = new Typography({
    googleFonts: [
        {
            name: 'Open Sans',
            styles: ['100', '400']
        }
    ],
    headerFontFamily: ['Open Sans', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    headerWeight: '100',
    bodyWeight: '400'
});

export default typography;