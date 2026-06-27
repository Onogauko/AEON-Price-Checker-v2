import { loadSettings } from "./services/storage.js";

/**
 * Test koneksi ke Store
 */
export async function testConnection(ip) {

    const url = `http://${ip}/aeon-panel/Api/store_detail`;

    console.log("TEST :", url);

    try {

        const response = await fetch(url);

        const text = await response.text();

        console.log(text);

        return {
            success: true,
            raw: text
        };

    } catch (e) {

        console.error(e);

        return {
            success: false
        };

    }

}

/**
 * Download table dari Store
 */
export async function downloadTable(tableName) {

    const settings = loadSettings();

    const url =
        `http://${settings.ip}/aeon-panel/Api/download?table_name=${tableName}`;

    console.log("REQUEST :", url);

    try {

        const response = await fetch(url);

        console.log("STATUS :", response.status);

        const text = await response.text();

        console.log("RESPONSE :", text);

        return text;

    } catch (err) {

        console.error("DOWNLOAD ERROR :", err);

        throw err;

    }

}
