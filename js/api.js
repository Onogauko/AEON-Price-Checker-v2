import { loadSettings } from "./services/storage.js";

/**
 * Test koneksi ke Store
 */
export async function testConnection(ip) {

    return new Promise((resolve) => {

        setTimeout(() => {

            if (ip === "10.123.80.3") {

                resolve({
                    success: true,
                    storeCode: "1008",
                    storeName: "AEON Citra Raya"
                });

            } else {

                resolve({
                    success: false
                });

            }

        }, 1000);

    });

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
