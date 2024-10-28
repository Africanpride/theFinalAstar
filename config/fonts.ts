import {
  Bebas_Neue,
  Source_Sans_3,
  Playfair_Display,
  Poppins,
} from "next/font/google";

type Props = {
  subset: string | string[];
  weight: string | string[];
  style: string | string[];
  display: string | string[];
};

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  adjustFontFallback: false,
});
const playfair = Playfair_Display({ subsets: ["latin"] });
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  display: "swap",
  adjustFontFallback: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "900"],
  style: ["normal"],
  display: "swap",
  adjustFontFallback: false,
});

const sourceCodePro700 = Source_Sans_3({ subsets: ["latin"], weight: "700" });

export { poppins, playfair_display, bebas, sourceCodePro700 };
