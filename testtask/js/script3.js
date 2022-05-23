var data = [{
    start: 0,
    duration: 30,
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
        if (times[i] == "0:00") {
            times[i] = "12:00"
        } else if (times[i] == "0:30") {
            times[i] = "12:30";
        }
    }
    return times;
}

var timeArray = getTimeArray();
for (i = 0; i < timeArray.length; i++) {
    var div = document.createElement("div");
    document.getElementById("time").appendChild(div);
    div.style.marginLeft = "95px";
    if (i % 2 === 0) {
        div.innerHTML = `<b>${timeArray[i]}</b>`;
        div.style.fontSize = "10px";
        div.style.opacity = 0.4;

    } else {
        div.innerHTML = `<b>${timeArray[i]}</b>`;
        div.style.fontSize = "8px";
        div.style.opacity = 0.4;
    }
    div.style.height = "30px";
}
for (let i = 0; i < data.length + 2; i++) {
    var hr = document.createElement("hr");
    document.getElementById("main").appendChild(hr);
    hr.style.height = "58px";
    hr.style.marginLeft = "-48px";
    hr.style.marginRight = "65px";
    hr.style.opacity = "0.3";
    hr.style.borderLeft = "transparent";
}
var container = [];

for (let i = 0; i < data.length; i++) {
    if (i > 0)
        var sumValue = data[i].start - (data[i - 1].start + data[i - 1].duration);
    container.push(sumValue);
    console.log(container[i]);
    if (container[i] < 0) {
        if (container[i - 1] < 0) {
            div2.style.width = "498px";
            div2.style.left = "0px";
            if (container[i] < 0 && container[i - 1] < 0 && container[i + 1] < 0) {
                div2.style.width = "498px";
                div2.style.left = "0px";
            }
        } else {
            div2.style.width = "498px";
            div2.style.left = "500px";

        }
        let height = (data[i].duration) + "px";
        let marginTop1 = (data[i].start) + "px";
        var div2 = document.createElement("div");
        div2.style.width = "498px";
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
        // div2.style.left = "500px";
    }

}