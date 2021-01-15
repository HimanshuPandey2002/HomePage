var DateElement= document.getElementById("date");
var time = document.getElementById("time");
var image = document.querySelector('.back');
// document.cookie = "samesite=None"

function clock() {
  DateElement.textContent = new Date().toDateString();
  time.textContent = new Date().toLocaleTimeString();
}

setInterval(clock, 1000);

// window.addEventListener("load", () => {
// // document.cookie = "samesite=None";
//     var API_KEY = 'PSeInByabSQivO4hZ89CUh7u40AX5C3IAAkstRSU1Bg';
//     var link = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&page=1&orientation=landscape`;
//     var imageurl = '';
//     const getResponse = async () => {
//         const response = await fetch(link, {
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Credentials": true,
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET",
//             "Access-Control-Allow-Headers": "application/json",
//           },
//           mode: "cors",
//           cache: "no-cache",
//           //   credentials: "omit",
//         });
//         const data = await response.json();
//     }
//     getResponse();
//      imageurl = data.links.html;
//      image.src = imageurl;
//      console.log(`url("${imageurl}")`);
// })