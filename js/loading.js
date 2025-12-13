window.addEventListener("load", () => {
    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.style.opacity = "0";
        loading.style.pointerEvents = "none";

        setTimeout(() => {
            loading.style.display = "none";
        }, 500);
    }, 1500); // 顯示 1.5 秒
});
