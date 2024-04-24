const sideOptions = document.querySelectorAll(".side-option");

sideOptions.forEach( function(option) {
    option.addEventListener("click", function() {
        sideOptions.forEach( function(opt) {
            opt.classList.remove("active");
        });
        this.classList.add("active");
    });
});