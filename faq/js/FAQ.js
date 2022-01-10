var faqBox = document.querySelectorAll('.faq__box');
var faqBoxContainer = document.querySelectorAll('.faq__box__bottom');
var faqImg = document.querySelectorAll(".faq__box > img");


for (let i = 0; faqBox.length; i++) {
    faqBox[i].addEventListener("click", function(event) {
        if (faqBox[i].nextElementSibling.style.display != "flex") {
            for (let j = 0; j < faqBoxContainer.length; j++) {
                faqBoxContainer[j].style.display = "none";
                faqImg[j].src = "./images/plus.png";
            }
            faqBox[i].nextElementSibling.style.display = "flex";
            faqImg[i].src = "./images/minus.png";
        } else {
            faqBox[i].nextElementSibling.style.display = "none";
            faqImg[i].src = "./images/plus.png";
        }
    })
}