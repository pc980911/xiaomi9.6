// let boxSm = document.querySelectorAll(".nav .content-o .box-o-1 .biger .navSm");
// let widthSm = parseInt(getComputedStyle(boxSm[0], null).width);
// let dotSm = document.querySelectorAll(".box-o-1 #uu ul li");
// let leftBth = document.querySelector(".nav .content-o .box-o-1 .o-leftBth");
// let rightBth = document.querySelector(".nav .content-o .box-o-1 .o-rightBth");
// small(boxSm,widthSm,dotSm,leftBth,rightBth);
// console.log(boxSm,widthSm,dotSm,leftBth,rightBth);
function small(boxSm, widthSm, dotSm, leftBth, rightBth) {
    let nowS = 0;
    let nextS = 0;
    boxSm[0].style.left = "0";
    rightBth.onclick = function () {
        if (nextS === boxSm.length - 1) {
            return;
        }
        nextS++;
        boxSm[nextS].style.left = widthSm + "px";
        animate(boxSm[nowS], {left: -widthSm});
        animate(boxSm[nextS], {left: "0"});
        dotSm[nowS].classList.remove("uu-selected");
        dotSm[nextS].classList.add("uu-selected");
        nowS = nextS;
    }

    leftBth.onclick = function () {
        if (nextS === 0) {
            return;
        }
        nextS--;
        boxSm[nextS].style.left = -widthSm + "px";
        animate(boxSm[nowS], {left: widthSm});
        animate(boxSm[nextS], {left: "0"});
        dotSm[nowS].classList.remove("uu-selected");
        dotSm[nextS].classList.add("uu-selected");
        nowS = nextS;
    }
    //鼠标移入轮播点
    for (let i = 0; i < dotSm.length; i++) {
        dotSm[i].onmouseover = function () {
            for (let j = 0; j < dotSm.length; j++) {
                boxSm[j].style.left = widths + "px";
                dotSm[j].classList.remove("uu-selected");

            }
            boxSm[i].style.left = 0;
            dotSm[i].classList.add("uu-selected");
            nowS = i;
            nextS = i;
        }
    }
}



// 家电选项卡
// let boxer = document.querySelectorAll(".home .content .case .trd");
// let name = document.querySelectorAll(".home .head-h a");
// console.log(boxer, name);

// function onmouse(boxer,name) {
//     for (let i = 0; i < boxer.length; i++) {
//         name[i].onmouseenter = function () {
//             for (let j = 0; j < boxer.length; i++) {
//                 name[j].classList.remove("a_on");
//             }
//             name[i].classList.add("a_on");
//             boxer[i].style.display="block";
//         }
//     }
// }


// let btnR = document.querySelector(".dotR");
// let btnL = document.querySelector(".dotL");
// let box = document.querySelector(".box");
// let w = parseInt(getComputedStyle(box, null).width) / 3;
// console.log(btnR, btnL, box, w);
// let time = 0;
// btnL.onclick = function () {
//     time++;
//     console.log(time);
//     if (time === 3) {
//         time = 2;
//     }
//     box.style.transform = `translate(${-w * time}px)`;
// }
// btnR.onclick = function () {
//     time--;
//     console.log(time);
//     if (time === -1) {
//         time = 0;
//     }
//     box.style.transform = `translate(${-w * time}px)`;
// }