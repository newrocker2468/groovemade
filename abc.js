
    function next() {
        var btn =  document.getElementById("next");
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3 = document.getElementById("img3");
        var img4 = document.getElementById("img4");
        var img5 = document.getElementById("img5");
        var img6 = document.getElementById("img6");
        var img7 = document.getElementById("img7");
        var img8 = document.getElementById("img8");

        img1.className = "nodisp";
        img2.classList = "nodisp";
        img3.classList = "nodisp";
        img4.classList = "nodisp";

        img5.classList = "disp";
        img6.classList = "disp";
        img7.classList = "disp";
        img8.classList = "disp";
    }

    function prev() {
        var btn =  document.getElementById("next");
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3 = document.getElementById("img3");
        var img4 = document.getElementById("img4");
        var img5 = document.getElementById("img5");
        var img6 = document.getElementById("img6");
        var img7 = document.getElementById("img7");
        var img8 = document.getElementById("img8");

        img1.className = "disp";
        img2.classList = "disp";
        img3.classList = "disp";
        img4.classList = "disp";

        img5.classList = "nodisp";
        img6.classList = "nodisp";
        img7.classList = "nodisp";
        img8.classList = "nodisp";

        img1.animate({"left":"-1000px"}, "slow");
    }
    