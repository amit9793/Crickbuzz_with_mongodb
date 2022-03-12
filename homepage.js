async function topsearch() {
  let response = await fetch("https://demoasass.herokuapp.com/wbb1");

  let data = await response.json();
  console.log(data);

  for (let title of data.articles) {
    let x1 = title.title;
    let y1 = title.urlToImage;
    let des = title.description;
    let date = title.publishedAt;
    let details = title.content;
    console.log("data", x1);

    var place = document.getElementById("newspage");
    let poster = document.createElement("div");

    poster.onclick = () => transfer_data(x1, y1, des, data, details);

    poster.style = "border-style:solid;margin-top:10px;border-radius: 10px;";

    let p1 = document.createElement("h1");
    p1.style = "margin-top:-3px";
    let p2 = document.createElement("h2");
    p2.style = "margin-top:-12px";
    let p3 = document.createElement("h1");
    p3.style = "margin-top:-12px";

    p2.innerHTML = des;
    p3.innerHTML = date;
    p1.innerHTML = x1;
    let image = document.createElement("img");
    image.src = y1;
    poster.append(image, p1, des, date);
    //  console.log(poster)
    place.append(poster);
  }
}
topsearch();

function transfer_data(x1, y1, des, data, details) {
  localStorage.setItem("detail", JSON.stringify(details));
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("des", JSON.stringify(des));
  localStorage.setItem("y1", JSON.stringify(y1));
  localStorage.setItem("x1", JSON.stringify(x1));
  window.location.href = "newsdata.html";
}

async function heading() {
  let response = await fetch(`https://demoasass.herokuapp.com/worldtest`);
  let data = await response.json();

  for (let title of data.articles) {
    let x1 = title.title;

    var div = document.createElement("div");
    var p = document.createElement("h2");
    p.style = "font-weight: 10px;font-size:18px";

    p.innerHTML = x1;
    div.append(p);

    var poster = document.getElementById("headline");
    poster.append(div);
  }
}
heading();

async function top_new() {
  let response = await fetch(`https://demoasass.herokuapp.com/t20`);
  let data = await response.json();
  console.log(data);

  for (let title of data.articles) {
    let x1 = title.title;
    let y1 = title.urlToImage;

    var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerHTML = x1;
    var i = document.createElement("img");
    i.src = y1;
    div.append(i, p);

    var poster = document.getElementById("image_title");
    poster.append(div);
  }
}
top_new();

function searchdata() {
  var test = document.getElementById("search").value;
  localStorage.setItem("find", JSON.stringify(test));
  window.location.href = "search.html";
}

function test1() {
  localStorage.setItem("find", JSON.stringify("t20"));
  window.location.href = "search.html";
}
function test2() {
  localStorage.setItem("find", JSON.stringify("wbb1"));
  window.location.href = "search.html";
}
function test3() {
  localStorage.setItem("find", JSON.stringify("sma"));
  window.location.href = "search.html";
}
function test4() {
  localStorage.setItem("find", JSON.stringify("marsh"));
  window.location.href = "search.html";
}
function test5() {
  localStorage.setItem("find", JSON.stringify("women"));
  window.location.href = "search.html";
}
function test6() {
  localStorage.setItem("find", JSON.stringify("worldtest"));
  window.location.href = "search.html";
}

//   <button onclick="schedule()">Schedule</button>
//                         <button onclick="table()">Point Table</button>
//                         <button onclick="video()">Video</button>

function schedule() {
  window.location.href = "search.html";
}

function table() {
  window.location.href = "search.html";
}

function video() {
  window.location.href = "search.html";
}
