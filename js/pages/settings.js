import { navigate } from "../router.js";
import { loadSettings, saveSettings } from "../services/storage.js";
import { testConnection } from "../services/api.js";

export function renderSettings() {

    setTimeout(() => {

        document.getElementById("btnBack")
            ?.addEventListener("click", () => {

                navigate("home");

            });

        document
            .getElementById("btnSave")
            .addEventListener("click", () => {

                const data = loadSettings();

                data.ip = document.getElementById("storeIP").value;

                saveSettings(data);

                alert("Settings berhasil disimpan");

            });

        document
            .getElementById("btnTest")
            .addEventListener("click", async () => {

                const ip = document.getElementById("storeIP").value;

                const status = document.getElementById("connectionStatus");

                status.innerHTML = "Testing...";

                const result = await testConnection(ip);

                if (result.success) {

                    status.innerHTML = "🟢 Connected";

                    const data = loadSettings();

                    data.ip = ip;
                    data.storeCode = result.storeCode;
                    data.storeName = result.storeName;

                    saveSettings(data);

                    document.getElementById("storeCode").value = result.storeCode;

                    document.getElementById("storeName").value = result.storeName;

                } else {

                    status.innerHTML = "🔴 Connection Failed";

                }

            });

    }, 0);

    return `

    <div class="min-h-screen bg-gray-100">

        <div class="bg-red-700 text-white p-5 shadow">

            <button id="btnBack" class="mb-4">

                ← Back

            </button>

            <h1 class="text-2xl font-bold">

                Settings

            </h1>

        </div>

        <div class="p-5">

            <label class="font-bold">

                Store IP Address

            </label>

            <input
                id="storeIP"
                class="w-full border rounded-lg p-3 mt-2"
                placeholder="10.123.80.3"
                value="${loadSettings().ip}">

            <button
                id="btnTest"
                class="mt-5 bg-red-700 text-white rounded-lg p-3 w-full">

                Test Connection

            </button>

            <p
                id="connectionStatus"
                class="mt-4 font-bold text-gray-600">

                Not Connected

            </p>

            <div class="mt-4">

                <label class="font-bold">

                    Store Code

                </label>

                <input
                    id="storeCode"
                    class="w-full border rounded-lg p-3 mt-2"
                    readonly
                    value="${loadSettings().storeCode || ''}">

            </div>

            <div class="mt-4">

                <label class="font-bold">

                    Store Name

                </label>

                <input
                    id="storeName"
                    class="w-full border rounded-lg p-3 mt-2"
                    readonly
                    value="${loadSettings().storeName || ''}">

            </div>

            <button
                id="btnSave"
                class="mt-3 bg-black text-white rounded-lg p-3 w-full">

                Save

            </button>

        </div>

    </div>

    `;
}
