// const accesskey = "";

// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const showMoreBtn = document.getElementById("show-more-btn");

// let keyword = "";
// let page = '';

// async function searchImage(){
//     keyword = searchBox.value;
//     const url = 'http://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12';

//     const response = await fetch(url);
//     const data = await response.JSON()

//   const results = data.results;
//   results.map((result) =>{
//     const image =document.createElement("img");
//     image.src = result.urls.small;
//     const imageLink = document.createElement("a");
//     imageLink.href = result.links.html;
//     imageLink.target = '_blank';

//     imageLink.appendChild(image);
//     searchResult.appendChild(imageLink);
//   })
//   showMoreBtn.style.display ="block";
// }

// searchForm.addEventListener("submit",(e) =>{
//     e.preventDefault();
//     page = 1;
//     searchImage();
// });

// showMoreBtn.addEventListener("click"() =>{
//     page ++;
//     searchImage();
//  });
const accesskey = ""; // Make sure to fill this in with your actual access key

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `http://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const results = data.results;
    results.forEach((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";

      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    });

    showMoreBtn.style.display = "block";
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchResult.innerHTML = "";
});

showMoreBtn.addEventListener("click", () => {
  searchImage();
});
