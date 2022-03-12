async function search() {
  var a1 = JSON.parse(localStorage.getItem("find"));

  let response = await fetch(`https://demoasass.herokuapp.com/${a1}`);
  let data = await response.json();
  console.log(data);

  for (let title of data.articles) {
    let x1 = title.title;

    let y1 = title.urlToImage;

    var pic = document.createElement("img");
    pic.style = "width:400px;height:200px; border: black;";
    pic.src = y1;

    var name = document.createElement("h2");
    name.style =
      "height:50px;text-align:center;margin-top:90px;margin-left:50px";
    name.innerHTML = x1;

    var combo = document.createElement("div");
    combo.style = "display:flex;margin-top:15px";
    combo.append(pic, name);

    var poster = document.getElementById("newspage");
    poster.append(combo);
  }
}
search();
