import Typography from "typography";

const typography = new Typography({
    title: "Lindsey's Shoes",
    baseFontSize: "18px",
    baseLineHeight: 1.45,
    headerFontFamily: [
        "Domine",
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
        "Roboto",
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
            name: "Domine",
            styles: ["400", "800"]
        },
        {
            name: "Roboto",
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
