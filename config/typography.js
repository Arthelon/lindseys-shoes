import Typography from "typography";

const typography = new Typography({
    title: "Lindsey's Shoes",
    baseFontSize: "18px",
    baseLineHeight: 1.45,
    headerFontFamily: [
        "Raleway",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
    ],
    bodyFontFamily: [
        "Cabin",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
    ],
    googleFonts: [
        {
            name: "Cabin",
            styles: ["400"]
        },
        {
            name: "Raleway",
            styles: ["400"]
        }
    ],
    scaleRatio: 3.998,
    headerWeight: 700,
    overrideStyles: () => ({
        img: {
            marginBottom: 0
        }
    })
});

export default typography;
