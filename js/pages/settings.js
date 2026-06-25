export function renderSettings() {

    return `

    <div class="min-h-screen bg-gray-100">

        <div class="bg-red-700 text-white p-5 shadow">

            <button id="btnBack"
                class="mb-4">

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
                placeholder="10.123.80.3">

            <button
                id="btnTest"

                class="mt-5 bg-red-700 text-white rounded-lg p-3 w-full">

                Test Connection

            </button>

            <button
                id="btnSave"

                class="mt-3 bg-black text-white rounded-lg p-3 w-full">

                Save

            </button>

        </div>

    </div>

    `;

}
