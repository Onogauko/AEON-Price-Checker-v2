import { renderHome } from "./pages/home.js";
import { renderSettings } from "./pages/settings.js";

export function navigate(page) {

    const app = document.getElementById("app");

    switch (page) {

        case "settings":
            app.innerHTML = renderSettings();
            break;

        default:
            app.innerHTML = renderHome();
            break;
    }

}
