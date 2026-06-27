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
