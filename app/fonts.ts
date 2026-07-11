import { Lilita_One, DM_Sans } from "next/font/google";

export const lilitaOne = Lilita_One({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lilita-one",
});

export const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
});
