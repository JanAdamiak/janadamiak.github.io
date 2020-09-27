document.addEventListener("DOMContentLoaded", function() {

    const thisYear = new Date().getFullYear()
    const copyrightDiv = document.querySelector("footer");

    copyrightDiv.innerHTML += `<p>Jan Adamiak &copy; 2019 - ${thisYear}</p>`;
})