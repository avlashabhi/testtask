var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
}];
let sendJsonFormat = JSON.stringify(data);
console.log(sendJsonFormat);
// let values = data.filter(function (value, index, array) {
//     console.log(array[0].duration);
//     if (array[0].start === 0) {
//         var div = document.createElement("div");
//         div.style.width = "15px";
//         div.style.height = "15px";
//         div.style.background = "#699ecc";
//         div.style.color = "#e1ecf4";
//         div.style.marginLeft = "95px";
//         div.style.marginRight = "95px";
//         div.innerHTML = "8:00";

//         document.getElementById("main").appendChild(div);
//         return;
//     }
//     return;
// });
if (data[0].start === 0) {
    var hr = document.createElement("hr");
    document.getElementById("main").appendChild(hr);
    hr.style.marginLeft = "85px";
    hr.style.marginRight = "95px";
    hr.style.opacity = "0.3";
    var div = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div.style.color = "black";
    div.style.marginLeft = "92px";
    // div.style.marginRight = "95px";
    div.innerHTML = "<b>8:00</b>";
    div.style.float = "left";
    div.style.fontSize = "10px";
    div.style.opacity = "0.5";
    document.getElementById("main").appendChild(div);


    var div1 = document.createElement("div");
    div1.style.width = "1000px";
    div1.style.height = `${data[0].duration}` + "px";
    div1.style.background = "#e1ecf4";
    div1.style.color = "black";
    // div1.style.marginLeft = "95px";
    div1.style.marginRight = "95px";

    div1.innerHTML = `${data[0].title}`;
    div1.style.float = "left";
    div1.style.fontSize = "8px";
    div1.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div1);

    var divf = document.createElement("div");
    document.getElementById("main").appendChild(divf);
    divf.style.clear = "both";

}
if (data[1].start === 25) {

    var div2 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div2.style.color = "black";
    div2.style.marginLeft = "95px";
    div2.style.marginTop = `${data[2].duration-data[0].duration}` + "px";
    div2.innerHTML = "<b>8:30</b>";
    div2.style.float = "left";
    div2.style.fontSize = "8px";
    div2.style.opacity = "0.5";
    document.getElementById("main").appendChild(div2);

    var div3 = document.createElement("div");
    div3.style.width = "500px";
    div3.style.height = `${data[1].duration}` + "px";
    div3.style.background = "#e1ecf4";
    div3.style.color = "black";
    div3.style.marginTop = `${data[2].duration-data[0].duration}` + "px";
    // div3.style.marginRight = "95px";
    div3.innerHTML = `${data[2].title}`;
    div3.style.float = "left";
    div3.style.fontSize = "8px";
    div3.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div3);

    var div4 = document.createElement("div");
    div4.style.width = "500px";
    div4.style.height = `${data[2].duration}` + "px";
    div4.style.marginTop = `${data[1].start-data[0].duration}` + "px";
    div4.style.background = "#e1ecf4";
    div4.style.color = "black";
    // div4.style.marginLeft = "95px";
    // div4.style.marginRight = "95px";
    div4.innerHTML = `${data[1].title}`;
    div4.style.float = "left";
    div4.style.fontSize = "8px";
    div4.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div4);


    var divf = document.createElement("div");
    document.getElementById("main").appendChild(divf);
    divf.style.clear = "both";

    var hr2 = document.createElement("hr");
    document.getElementById("main").appendChild(hr2);
    hr2.style.marginLeft = "95px";
    hr2.style.marginRight = "95px";
    hr2.style.opacity = "0.3";
}
if (data[3].start === 60) {
    var div5 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div5.style.color = "black";
    div5.style.marginLeft = "90px";
    // div.style.marginRight = "95px";
    div5.innerHTML = "<b>9:00</b>";
    div5.style.float = "left";
    div5.style.fontSize = "10px";
    div5.style.opacity = "0.5";
    document.getElementById("main").appendChild(div5);


    var div1 = document.createElement("div");
    div1.style.width = "1000px";
    div1.style.height = `${data[0].duration}` + "px";
    div1.style.background = "#e1ecf4";
    div1.style.color = "black";
    // div1.style.marginLeft = "95px";
    div1.style.marginRight = "95px";

    div1.innerHTML = `${data[3].title}`;
    div1.style.float = "left";
    div1.style.fontSize = "8px";
    div1.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div1);

    var divf = document.createElement("div");
    document.getElementById("main").appendChild(divf);
    divf.style.clear = "both";
}
if (data[4].start === 100) {
    var div6 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div6.style.color = "black";
    div6.style.marginLeft = "90px";
    div6.style.marginTop = `${data[4].duration}` + "px";
    div6.innerHTML = "<b>9:30</b>";
    div6.style.float = "left";
    div6.style.fontSize = "8px";
    div6.style.opacity = "0.5";
    document.getElementById("main").appendChild(div6);


    var div7 = document.createElement("div");
    div7.style.width = "1000px";
    div7.style.height = `${data[4].duration}` + "px";
    div7.style.background = "#e1ecf4";
    div7.style.color = "black";
    div7.style.marginLeft = "3px";
    div7.style.marginRight = "95px";
    div7.style.marginTop = `${data[4].duration}` + "px";
    div7.innerHTML = `${data[4].title}`;
    div7.style.float = "left";
    div7.style.fontSize = "8px";
    div7.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div7);

    var divf = document.createElement("div");
    document.getElementById("main").appendChild(divf);
    divf.style.clear = "both";


    var div6 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div6.style.color = "black";
    div6.style.marginLeft = "85px";
    div6.style.marginTop = `${data[4].duration}` + "px";
    div6.innerHTML = "<b>10:00</b>";
    // div6.style.float = "left";
    div6.style.fontSize = "10px";
    div6.style.opacity = "0.5";
    document.getElementById("main").appendChild(div6);

    var div8 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div8.style.color = "black";
    div8.style.marginLeft = "90px";
    div8.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    div8.innerHTML = "<b>10:30</b>";
    // div6.style.float = "left";
    div8.style.fontSize = "8px";
    div8.style.opacity = "0.5";
    document.getElementById("main").appendChild(div8);
}
if (data[5].start === 180) {
    var hr3 = document.createElement("hr");
    document.getElementById("main").appendChild(hr3);
    hr3.style.marginLeft = "85px";
    hr3.style.marginRight = "95px";
    hr3.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    hr3.style.opacity = "0.3";

    var div9 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div9.style.color = "black";
    div9.style.marginLeft = "85px";
    // div9.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    div9.innerHTML = "<b>11:00</b>";
    div9.style.float = "left";
    div9.style.fontSize = "10px";
    div9.style.opacity = "0.5";
    document.getElementById("main").appendChild(div9);

    var div9 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div9.style.color = "black";
    div9.style.marginLeft = "75px";
    div9.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    div9.innerHTML = "<b>11:30</b>";
    div9.style.position = "absolute";
    div9.style.left = "10px";
    div9.style.fontSize = "10px";
    div9.style.opacity = "0.5";
    document.getElementById("main").appendChild(div9);

    var div10 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div10.style.color = "black";
    div10.style.marginLeft = "75px";
    div10.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    div10.innerHTML = "<b>11:30</b>";
    div10.style.position = "absolute";
    div10.style.left = "10px";
    div10.style.fontSize = "8px";
    div10.style.opacity = "0.1";
    document.getElementById("main").appendChild(div10);

    var div11 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div11.style.color = "black";
    div11.style.marginLeft = "75px";
    div11.style.marginTop = `${data[1].duration+data[2].duration}` + "px";
    div11.innerHTML = "<b>12:00</b>";
    div11.style.position = "absolute";
    div11.style.left = "10px";
    div11.style.fontSize = "10px";
    div11.style.opacity = "0.5";
    document.getElementById("main").appendChild(div11);

    var div12 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div12.style.color = "black";
    div12.style.marginLeft = "75px";
    div12.style.marginTop = `${data[5].duration}` + "px";
    div12.innerHTML = "<b>12:30</b>";
    div12.style.position = "absolute";
    div12.style.left = "10px";
    div12.style.fontSize = "10px";
    div12.style.opacity = "0.5";
    document.getElementById("main").appendChild(div12);

    var div1 = document.createElement("div");
    div1.style.width = "1000px";
    div1.style.height = `${data[5].duration}` + "px";
    div1.style.background = "#e1ecf4";
    div1.style.color = "black";
    // div1.style.marginLeft = "95px";
    div1.style.marginRight = "95px";

    div1.innerHTML = `${data[5].title}`;
    div1.style.float = "left";
    div1.style.fontSize = "8px";
    div1.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div1);

    var divf = document.createElement("div");
    document.getElementById("main").appendChild(divf);
    divf.style.clear = "both";


    var hr3 = document.createElement("hr");
    document.getElementById("main").appendChild(hr3);
    hr3.style.marginLeft = "85px";
    hr3.style.marginRight = "95px";
    hr3.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    hr3.style.opacity = "0.3";

    var div9 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div9.style.color = "black";
    div9.style.marginLeft = "85px";
    // div9.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    div9.innerHTML = "<b>1:00</b>";
    div9.style.float = "left";
    div9.style.fontSize = "10px";
    div9.style.opacity = "0.5";
    document.getElementById("main").appendChild(div9);

    var divf = document.createElement("div");
    document.getElementById("main").appendChild(divf);
    divf.style.clear = "both";

    var div9 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div9.style.color = "black";
    div9.style.marginLeft = "85px";
    div9.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    div9.innerHTML = "<b>1:30</b>";
    // div9.style.float = "left";
    div9.style.fontSize = "8px";
    div9.style.opacity = "0.5";
    document.getElementById("main").appendChild(div9);

    var hr3 = document.createElement("hr");
    document.getElementById("main").appendChild(hr3);
    hr3.style.marginLeft = "85px";
    hr3.style.marginRight = "95px";
    hr3.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    hr3.style.opacity = "0.3";




}
if (data[6].start === 360) {
    var div9 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div9.style.color = "black";
    div9.style.marginLeft = "85px";
    // div9.style.marginTop = `${data[4].duration+data[3].duration}` + "px";
    div9.innerHTML = "<b>2:00</b>";
    div9.style.float = "left";
    div9.style.fontSize = "10px";
    div9.style.opacity = "0.5";
    document.getElementById("main").appendChild(div9);

    var div11 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div11.style.color = "black";
    div11.style.marginLeft = "75px";
    div11.style.marginTop = `${data[6].duration}` + "px";
    div11.innerHTML = "<b>2:30</b>";
    div11.style.position = "absolute";
    div11.style.left = "10px";
    div11.style.fontSize = "10px";
    div11.style.opacity = "0.5";
    document.getElementById("main").appendChild(div11);




    var div12 = document.createElement("div");
    // div.style.width = "15px";
    // div.style.height = "15px";
    // div.style.background = "#699ecc";
    div12.style.color = "black";
    div12.style.marginLeft = "75px";
    div12.style.marginTop = `${data[7].duration+data[8].duration}` + "px";
    div12.innerHTML = "<b>3:00</b>";
    div12.style.position = "absolute";
    div12.style.left = "10px";
    div12.style.fontSize = "10px";
    div12.style.opacity = "0.5";
    document.getElementById("main").appendChild(div12);

    var div13 = document.createElement("div");
    div13.style.width = "500px";
    div13.style.height = `${data[7].duration}` + "px";
    div13.style.background = "#e1ecf4";
    div13.style.color = "black";
    div13.style.marginTop = `${data[7].duration-data[6].duration}` + "px";
    // div3.style.marginRight = "95px";
    div13.innerHTML = `${data[7].title}`;
    div13.style.float = "left";
    div13.style.fontSize = "8px";
    div13.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div13);

    var div4 = document.createElement("div");
    div4.style.width = "500px";
    div4.style.height = `${data[6].duration}` + "px";
    // div4.style.marginTop = `${data[1].start-data[0].duration}` + "px";
    div4.style.background = "#e1ecf4";
    div4.style.color = "black";
    // div4.style.marginLeft = "95px";
    // div4.style.marginRight = "95px";
    div4.innerHTML = `${data[6].title}`;
    div4.style.float = "left";
    div4.style.fontSize = "8px";
    div4.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div4);

    var div4 = document.createElement("div");
    div4.style.width = "500px";
    div4.style.height = `${data[8].duration}` + "px";
    div4.style.marginTop = `${data[7].duration-data[6].duration}` + "px";
    div4.style.background = "#e1ecf4";
    div4.style.color = "black";
    // div4.style.marginLeft = "95px";
    // div4.style.marginRight = "95px";
    div4.innerHTML = `${data[8].title}`;
    div4.style.float = "left";
    div4.style.fontSize = "8px";
    div4.style.borderLeft = "2px solid #699ecc";
    document.getElementById("main").appendChild(div4);




    var divf = document.createElement("div");
    document.getElementById("main").appendChild(divf);
    divf.style.clear = "both";

    var hr = document.createElement("hr");
    document.getElementById("main").appendChild(hr);
    // hr.style.marginTop = `${data[8].duration-data[7].duration}` + "px";
    hr.style.marginLeft = "85px";
    hr.style.marginRight = "95px";
    hr.style.opacity = "0.3";
}