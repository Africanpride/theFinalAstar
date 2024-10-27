import {
    Fira_Code as FontMono,
    IBM_Plex_Sans_Condensed,
    Bebas_Neue,
    Inter_Tight,
    Source_Sans_3,
    Playfair_Display
} from "next/font/google";

type Props = {
    subset: string | string[];
    weight: string | string[];
    style: string | string[];
    display: string | string[];
};

// const superbold = localFont({ src: '../localfonts/bold.ttf' }) define your
// variable fonts const courier = Courier_Prime({   weight: ["400","700"],
// subsets: ["latin"],   style: ["italic","normal"],   display: "swap",
// adjustFontFallback: false, }); const notosans = Noto_Sans({   weight:
// ["100","200","300","400","500","700","900",],   subsets: ["latin"],   style:
// ["italic","normal"],   display: "swap",   adjustFontFallback: false, });
// const montserrat = Montserrat({   weight:
// ["100","200","300","400","500","700","900",],   subsets: ["latin"],   style:
// ["italic","normal"], });
const bebas = Bebas_Neue({weight: ["400"], subsets: ["latin"], style: ["normal"], display: "swap", adjustFontFallback: false});
const playfair = Playfair_Display({subsets: ["latin"]});
const playfair_display = Playfair_Display({subsets: ["latin"], weight: ["500"], style: ["italic"], display: "swap", adjustFontFallback: false});
const ibm_plex_sans_condense = IBM_Plex_Sans_Condensed({
    weight: [
        "400", "700"
    ],
    subsets: ["latin"],
    style: "normal",
    display: "swap",
    adjustFontFallback: false
});
// const poppins = Poppins({   subsets: ["latin"],   weight: ["400", "900"],
// style: ["normal"],   display: "swap",   adjustFontFallback: false, });
const inter_tight = Inter_Tight({subsets: ["latin"], display: "swap", adjustFontFallback: false});
// define 2 weights of a non-variable font const sourceCodePro400 =
// Source_Sans_3({ subsets: ["latin"], weight: "400" });
const sourceCodePro700 = Source_Sans_3({subsets: ["latin"], weight: "700"});
// define a custom local font where GreatVibes-Regular.ttf is stored in the
// styles folder
export {
    inter_tight,
    // poppins, sourceCodePro400, sourceCodePro700,
    ibm_plex_sans_condense,
    playfair_display,
    bebas,
    // montserrat, courier
};