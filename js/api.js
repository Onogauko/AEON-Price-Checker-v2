import { loadSettings } from "./storage.js";

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

    console.log("DOWNLOAD :", url);

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error("Download gagal");

    }

    return await response.json();

}
