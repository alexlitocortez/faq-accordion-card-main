
let buttons = document.getElementsByClassName('button');
let arrows = document.getElementsByClassName('arrow');

for (let i = 0; i < buttons.length; i++) {
    button[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if(content.style.display === "block"){
            buttons[i].style.fontWeight = "500";
            content.style.display = "none";
            arrows[i].firstChild.style.transform = "scaleY(1)";
        } else {
            buttons[i].style.fontWeight = "700";
            content.style.display = "block";
            arrows[i].firstChild.style.transform = "scaleY(-1)";
        }
    })
}


