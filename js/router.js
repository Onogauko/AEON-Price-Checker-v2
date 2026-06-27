import { renderHome } from "./pages/home.js";
import { renderSettings } from "./pages/settings.js";
import { renderDownload } from "./pages/download.js";

export function navigate(page) {

    const app = document.getElementById("app");

    switch (page) {

        case "settings":
            app.innerHTML = renderSettings();
            break;

        case "download":
            app.innerHTML = renderDownload();
            break;

        default:
            app.innerHTML = renderHome();
            break;
    }

}
