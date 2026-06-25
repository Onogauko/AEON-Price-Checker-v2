const KEY = "aeon_price_checker";

export function saveSettings(data) {

    localStorage.setItem(KEY, JSON.stringify(data));

}

export function loadSettings() {

    const data = localStorage.getItem(KEY);

    if (!data) {

        return {
            ip: "",
            storeCode: "",
            storeName: ""
        };

    }

    return JSON.parse(data);

}
