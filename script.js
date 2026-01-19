const logo = document.getElementById("vm-logo");

logo.addEventListener("mouseover", () => {
    logo.style.transform = "rotate(360deg)";
    logo.style.transition = "0.8s";
});

logo.addEventListener("mouseout", () => {
    logo.style.transform = "rotate(0deg)";
});
