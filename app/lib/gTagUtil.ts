import { GA_MEATUER_ID } from "./Constant";

export const pageView = (url : string) => {
    window.gtag("config", GA_MEATUER_ID, {
        page_path: url,
    });
};