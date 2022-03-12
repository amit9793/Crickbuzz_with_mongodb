function append_data(){
    var des = localStorage.getItem("des");
    console.log(des)
    var data = JSON.parse(localStorage.getItem("data"));
    var x1 = JSON.parse(localStorage.getItem("x1"));
    var y1 = JSON.parse(localStorage.getItem("y1"));
    var detail = JSON.parse(localStorage.getItem("details"));
   //  console.log(y1)

    var poster = document.getElementById("newspage");
    var div = document.createElement("div");
    var ima = document.createElement("img");
    ima.src = y1;
    var title = document.createElement("p");
    title.style="font-weight: bold;text-align:center;font-size: 22px;"
    title.innerHTML = x1;
    var a1 = document.createElement("p");
    a1.style="text-align:center;font-size:20px"
    a1.innerHTML = des;
    var b1 = document.createElement("p");
    b1.innerHTML = detail;

    div.append(ima,title,a1,b1);
    poster.append(div);
   
}
append_data();