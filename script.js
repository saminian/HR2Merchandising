document.getElementsByClassName("sidebar")[0].style.width = "350px";

    function onDropdown() {
        var dropdown = document.getElementById("dropdown");
        if (dropdown.style.maxHeight === "0px" || dropdown.style.maxHeight === "") {
            dropdown.style.maxHeight = "300px";
        } else {
            dropdown.style.maxHeight = "0px";
        }
    }

    function onToggle() {
        var sidebar = document.getElementsByClassName("sidebar")[0];
        if (sidebar.style.width === "0px" || sidebar.style.width === "") {
            sidebar.style.width = "350px";
        } else {
            sidebar.style.width = "0";
        }
    }