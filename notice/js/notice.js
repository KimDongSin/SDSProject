var btn = document.querySelectorAll(".volunteer_arrow_wrapper > ul li span");

for (let i = 0; i < btn.length; i++) { // 버튼 전체 반복
    btn[i].addEventListener("click", function() { // 버튼 i번째 클릭 시
        if (btn[i].style.color == "" || "#8E8E8E") { // 만약 버튼 i번째 색깔이 공백이거나 #8E8E8E일 때
            for (let j = 0; j < btn.length; j++) { // 버튼 전체 반복
                btn[j].style.color = "#8E8E8E"; // 버튼 j번째 색깔 #8E8E8E로 변경
            }
            btn[i].style.color = "#0C1E46"; // 버튼 j번째 색깔 #0C1E46로 변경
        }
    })
}