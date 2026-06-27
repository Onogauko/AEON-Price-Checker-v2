import { navigate } from "../router.js";

export function renderDownload() {

    setTimeout(() => {

        document
        .getElementById("btnBack")
        ?.addEventListener("click", () => {

            navigate("home");

        });

    },0);

    return `

    <div class="min-h-screen bg-gray-100">

        <div class="bg-red-700 text-white p-5 shadow">

            <button id="btnBack">

                ← Back

            </button>

            <h1 class="text-2xl font-bold mt-3">

                Download Database

            </h1>

        </div>

        <div class="p-5">

            <button
                id="btnDownload"
                class="bg-red-700 text-white rounded-lg p-4 w-full">

                Download Product Database

            </button>

            <div class="mt-6">

                <progress
                    id="progressBar"
                    value="0"
                    max="100"
                    class="w-full">

                </progress>

                <p
                    id="progressText"
                    class="mt-3">

                    Ready

                </p>

            </div>

        </div>

    </div>

    `;

}
