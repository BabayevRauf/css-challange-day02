let cubes = document.getElementsByClassName("cube");
        Array.prototype.forEach.call(cubes, (elem) => {
            elem.addEventListener("click", (event) => {
                elem.classList.toggle("hover");
            });
        });