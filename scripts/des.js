let data=JSON.parse(localStorage.getItem("Book"))||[];

let price=document.querySelector(".prc");
price.innerHTML=`Rs-${data.price}`;
document.getElementById("productimage").src=data.image;
document.querySelector("#pad").innerHTML=data.title;
document.querySelector("#para").innerHTML=data.des;
document.querySelector("#transfer").href=data.link
document.querySelector("#amzon").href=data.link
