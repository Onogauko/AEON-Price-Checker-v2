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

        },1000);

    });

}
