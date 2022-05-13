// var data = [{
//     start: 0,
//     duration: 15,
//     title: "Exercise"
// }, {
//     start: 25,
//     duration: 30,
//     title: "Travel to work"
// }, {
//     start: 30,
//     duration: 30,
//     title: "Plan day"
// }, {
//     start: 60,
//     duration: 15,
//     title: "Review yesterday's commits"
// }, {
//     start: 100,
//     duration: 15,
//     title: "Code review"
// }, {
//     start: 180,
//     duration: 90,
//     title: "Have lunch with John"
// }, {
//     start: 360,
//     duration: 30,
//     title: "Skype call"
// }, {
//     start: 370,
//     duration: 45,
//     title: "Follow up with designer"
// }, {
//     start: 400,
//     duration: 30,
//     title: "Push up branch"
// }];
// var timeStart = 8 * 60;
// var timeHeight = 18 * 60;
// var hh = Math.floor(timeStart / 60);
// var mm = (timeStart % 60);
// var tt = 60 * 8;
// for (var i = 0; tt <= 18 * 60; i++) {
//     var x = 30; //minutes interval
//     var times = []; // time array
//     var tt = 60 * 8; // start time
//     var ap = ['AM', 'PM']; // AM-PM

//     var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
//     var mm = (tt % 60); // getting minutes of the hour in 0-55 format
//     times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
//     tt = tt + x;

// }
// console.log(times[i]);



getTimeArray = () => {
    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 60 * 8; // start time
    var ap = ['AM', 'PM']; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt <= 18 * 60; i++) {
        var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
        var mm = (tt % 60); // getting minutes of the hour in 0-55 format
        times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;

    }
    return times;
}

var timeArray = getTimeArray();
for (i = 0; i < timeArray.length; i++) {


    var div = document.createElement("div");
    document.getElementById("time").appendChild(div);


    // div.style.float = "left";
    div.style.marginLeft = "95px";
    if (i % 2 === 0) {
        div.innerHTML = `${timeArray[i]}`;
        div.style.fontSize = "10px";
        div.style.opacity = 0.5;
    } else {
        div.innerHTML = `${timeArray[i]}`;
        div.style.fontSize = "8px";
        div.style.opacity = 0.5;
    }
    div.style.height = "30px";
}


// getTimeArray = () => {
//     var x = 30; //minutes interval
//     var times = []; // time array
//     var tt = 60 * 8; // start time
//     var ap = ['AM', 'PM']; // AM-PM

//     //loop to increment the time and push results in array
//     for (var i = 0; tt <= 18 * 60; i++) {
//         var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
//         var mm = (tt % 60); // getting minutes of the hour in 0-55 format
//         times[i] = ("" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
//         tt = tt + x;

//     }
//     return times;
// }













// var timeStart = 8 * 60;
// var mm = (timeStart % 60);
// var hh = Math.floor(timeStart / 60);
// let startTime = [];
// let endTime = [];

// for (let i = 0; i < data.length; i++) {
//     startTime[i] = (timeStart + data[i].start);
//     endTime[i] = (timeStart + data[i].duration);


//     if (startTime[i - 1] < startTime[i] && endTime[i - 1] > startTime[i]) {
//         var div2 = document.createElement("div");
//         div.style.width = "1000px";
//         div.style.height = `${endTime[i]- startTime[i]}` + "px";
//         div.style.background = "#699ecc";
//         div2.style.color = "black";
//         // div2.style.marginLeft = "95px";
//         // div2.style.marginTop = `${data[2].duration-data[0].duration}` + "px";
//         div2.innerHTML = `${data[i].title}`;
//         // div2.style.float = "left";
//         div2.style.fontSize = "8px";
//         div2.style.opacity = "0.5";
//         document.getElementById("main").appendChild(div2);

//     } else if (startTime[i - 1] < startTime[i] && endTime[i - 1] > startTime[i] && startTime[i] < startTime[i + 1] && startTime[i] > endTime[i + 1]) {
//         var div2 = document.createElement("div");
//         div.style.width = "1000px";
//         div.style.height = `${endTime[i]- startTime[i]}` + "px";
//         div.style.background = "#699ecc";
//         div2.style.color = "black";
//         // div2.style.marginLeft = "95px";
//         // div2.style.marginTop = `${data[2].duration-data[0].duration}` + "px";
//         div2.innerHTML = `${data[i].title}`;
//         // div2.style.float = "left";
//         div2.style.fontSize = "8px";
//         div2.style.opacity = "0.5";
//         document.getElementById("main").appendChild(div2);
//     } else {
//         var div2 = document.createElement("div");
//         div.style.width = "500px";
//         div.style.height = `${endTime[i]- startTime[i]}` + "px";
//         div.style.background = "#699ecc";
//         div2.style.color = "black";
//         // div2.style.marginLeft = "95px";
//         // div2.style.marginTop = `${data[2].duration-data[0].duration}` + "px";
//         div2.innerHTML = `${data[i].title}`;
//         // div2.style.float = "left";
//         div2.style.fontSize = "8px";
//         div2.style.opacity = "0.5";
//         document.getElementById("main").appendChild(div2);
//     }
// }

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

for (let i = 0; i < data.length; i++) {
    if ((i - 1) >= 0 && data[i].start < (data[i - 1].start + data[i - 1].duration)) {
        let height = (data[i].duration) + "px";
        let marginTop1 = (data[i].start) + "px";
        var div2 = document.createElement("div");
        div2.style.width = "500px";
        div2.style.height = `${height}`;
        div2.style.background = "#e1ecf4";
        div2.style.color = "black";
        // div2.style.marginLeft = "95px";

        div2.innerHTML = `${data[i].title}`;
        div2.style.float = "left";
        div2.style.fontSize = "8px";
        div2.style.opacity = "0.5";
        div2.style.borderLeft = "2px solid #699ecc";
        div2.style.position = "absolute";
        div2.style.top = `${marginTop1}`;
        div2.style.left = "500px";

        document.getElementById("main").appendChild(div2);
    } else {
        let height = (data[i].duration) + "px";
        let marginTop1 = (data[i].start) + "px";
        var div2 = document.createElement("div");
        div2.style.width = "1000px";
        div2.style.height = `${height}`;
        div2.style.background = "#e1ecf4";
        div2.style.color = "black";
        // div2.style.marginLeft = "95px";

        div2.innerHTML = `${data[i].title}`;
        div2.style.float = "left";
        div2.style.fontSize = "8px";
        div2.style.opacity = "0.5";
        div2.style.borderLeft = "2px solid #699ecc";
        document.getElementById("main").appendChild(div2);
        div2.style.position = "absolute";
        div2.style.top = `${marginTop1}`;



    }


}
// } else if ((i - 1) >= 0 && data[i].start < (data[i - 1].start + data[i - 1].duration && data[i].start) && data[i].start < (data[i + 1].start + data[i + 1].duration)) {
//     let height = (data[i].duration) + "px";
//     let marginTop1 = (data[i].start) + "px";
//     var div2 = document.createElement("div");
//     div2.style.width = "500px";
//     div2.style.height = `${height}`;
//     div2.style.background = "#e1ecf4";
//     div2.style.color = "black";
//     // div2.style.marginLeft = "95px";

//     div2.innerHTML = `${data[i].title}`;
//     div2.style.float = "left";
//     div2.style.fontSize = "8px";
//     div2.style.opacity = "0.5";
//     div2.style.borderLeft = "2px solid #699ecc";
//     // div2.style.position = "absolute";
//     div2.style.top = `${marginTop1}`;

//     document.getElementById("main").appendChild(div2);
// } else {
//     let height = (data[i].duration) + "px";
//     let marginTop1 = (data[i].start) + "px";
//     var div2 = document.createElement("div");
//     div2.style.width = "1000px";
//     div2.style.height = `${height}`;
//     div2.style.background = "#e1ecf4";
//     div2.style.color = "black";
//     // div2.style.marginLeft = "95px";

//     div2.innerHTML = `${data[i].title}`;
//     div2.style.float = "left";
//     div2.style.fontSize = "8px";
//     div2.style.opacity = "0.5";
//     div2.style.borderLeft = "2px solid #699ecc";
//     document.getElementById("main").appendChild(div2);
//     // div2.style.position = "absolute";
//     div2.style.top = `${marginTop1}`;

// }