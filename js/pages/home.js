export function renderHome() {

    return `

    <div class="min-h-screen bg-gray-100">

        <div class="bg-red-700 text-white p-5 shadow-lg">

            <h1 class="text-2xl font-bold">
                AEON Price Checker
            </h1>

            <p class="text-sm opacity-80">
                Version 2.0
            </p>

        </div>

        <div class="p-5 grid gap-4">

            <button id="btnSearch"
                class="bg-white rounded-xl shadow p-5 text-left">

                <span class="material-icons text-4xl text-red-700">
                    search
                </span>

                <h2 class="font-bold text-lg mt-2">
                    Search Product
                </h2>

                <p class="text-gray-500">
                    Search by SKU, Barcode or Description
                </p>

            </button>

            <button id="btnScanner"
                class="bg-white rounded-xl shadow p-5 text-left">

                <span class="material-icons text-4xl text-red-700">
                    qr_code_scanner
                </span>

                <h2 class="font-bold text-lg mt-2">
                    Scan Barcode
                </h2>

            </button>

            <button id="btnDownload"
                class="bg-white rounded-xl shadow p-5 text-left">

                <span class="material-icons text-4xl text-red-700">
                    download
                </span>

                <h2 class="font-bold text-lg mt-2">
                    Update Database
                </h2>

            </button>

            <button id="btnSettings"
                class="bg-white rounded-xl shadow p-5 text-left">

                <span class="material-icons text-4xl text-red-700">
                    settings
                </span>

                <h2 class="font-bold text-lg mt-2">
                    Settings
                </h2>

            </button>

        </div>

    </div>

    `;

}
