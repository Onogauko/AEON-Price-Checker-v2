import { navigate } from "../router.js";

export function renderDownload() {

    setTimeout(() => {

        document
        .getElementById("btnBack")
        ?.addEventListener("click", () => {

            navigate("home");

        });

        document
        .getElementById("btnDownload")
        ?.addEventListener("click", startDownload);

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

async function startDownload() {

    const progressBar = document.getElementById("progressBar");

    const progressText = document.getElementById("progressText");

    for (let i = 0; i <= 100; i++) {

        progressBar.value = i;

        progressText.innerHTML = "Downloading... " + i + "%";

        await new Promise(resolve => setTimeout(resolve, 30));

    }

    progressText.innerHTML = "✅ Download Complete";

}
