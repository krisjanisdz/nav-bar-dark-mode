const body = document.querySelector("body");
    sidebar = body.querySelector(".sidebar");
    toggle = body.querySelector(".toggle");
    searchBtn = body.querySelector(".search-box");
    modeSwitch = body.querySelector(".toggle-switch");
    modeText = body.querySelector(".mode-text");
    toggleElement = body.querySelector('.sidebar header .toggle');

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
        modeText.text = "Light Mode";
    });

    searchBtn.addEventListener("click", () =>{
        const isSidebarClosed = sidebar.classList.contains("close");

        sidebar.classList.remove("close");

        if (isSidebarClosed) {
        toggleElement.classList.toggle('rotated');
    }
    });

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });

    toggle.addEventListener("click", () =>{
        toggleElement.classList.toggle('rotated');
    });