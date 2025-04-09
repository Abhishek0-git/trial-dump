const select = document.querySelector(".content select");
const btn = document.querySelector(".content button");
const content = document.querySelector(".content");

let url2 = "https://nekos.best/api/v2";
let url3 = "https://nekos.best/api/v2/endpoints"

const fun = async () => {
  
  let response = await fetch(url3);
  let data = await response.json();

  for(i in data){
    let val = `${i} (${data[i].format})`
    let option = document.createElement("option");
    if(i == "waifu"){
      option.selected = true;
    }
    option.text = val;
    option.value = i;
    select.appendChild(option);
  }
}
fun();

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  console.log(select.value);
  let newurl = `${url2}/${select.value}`;

  let response = await fetch(newurl);
  let data = await response.json();

  if(document.getElementById("image")){
    document.getElementById("image").remove();
    // document.getElementById("info").remove();
  }

  // let info = document.createElement("h1");

  // if (data.results[0].artist_name){
  //   info.innerText = `Artist : ${data.results[0].artist_name}
  //                     Artist_href : ${data.results[0].artist_href}
  //                     Source : ${data.results[0].source_url}
  //                     URL : ${data.results[0].url}`;
  // } else{
  //   info.innerText = `Anime_Name : ${data.results[0].anime_name}
  //                     URL : ${data.results[0].url}`;
  // }

  // info.id = "info";
  // content.appendChild(info);

  let img = document.createElement("img");
  img.src = data.results[0].url;
  img.id = "image";
  content.appendChild(img);
});
