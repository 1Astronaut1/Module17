BRB = document.querySelector("button");
img = document.querySelector("#img");
IsClick = true;
i = 0;
BRB.style.height = BRB.clientWidth + "px";
BRB.onclick = function(event) {
    IsClick = !IsClick;
    i++;
    if (IsClick)
    {
        img.src = "arrow-down-left-circle.svg";
    }
    else
    {
        img.src = "arrow-down-left-circle-fill.svg";
    }
    if (i == 100)
    {
        alert("STOP IT!")
    }
};