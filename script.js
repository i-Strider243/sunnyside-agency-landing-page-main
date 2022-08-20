const screenMenu = document.getElementById("screen-click");

screenMenu.addEventListener("mousedown", function() {
    window.document.body.classList.toggle("lock-scroll");
})

