console.log("Welcome");
//****************************************** */
const videos = [
  {
    id: "7yLxxyzGiko",
    title: "Kittens walk with a tiny chicken",
    thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
  },
  {
    id: "rS6cvjFXg9s",
    title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
    thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
  },
  {
    id: "BFNekjEgvuk",
    title: "Kitten sleeps sweetly with the Chicken 🐥",
    thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
  },
  {
    id: "te1fHMaw4UY",
    title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
    thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
  },
  {
    id: "MFyUZqSknvw",
    title: "Kittens meets and walk with a cute white bunny",
    thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
  },
  {
    id: "hlajmIPiphk",
    title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
    thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
  },
  {
    id: "Cz47GimSxIc",
    title: "Funny Kitten wags its tail like a Puppy",
    thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
  },
  {
    id: "RmpuhbdnAfQ",
    title: "Kitty Coco and her Sleepy younger brother 🥰",
    thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
  },
];
const img = function (src) {
  image = document.createElement("img");
  image.classList.add("style");
  image.setAttribute("src", src);
  return image;
};

//****************************************************** */
const header5 = function (text) {
  head = document.createElement("h5");
  head.classList.add("style_h5");
  textNode = document.createTextNode(text);
  head.append(textNode);
  return head;
};

//*************************************************** */
const devVideos = function (videoobj, index) {
  p = document.createElement("div");
  p.classList.add("style_div");
  p.setAttribute("id", videoobj.id);
  p.setAttribute("title", videoobj.title);
  p.setAttribute("thumbnail", videoobj.thumbnail);
  p.append(img(videoobj.thumbnail));
  p.append(header5(videoobj.title));
  return p;
};

//****************************************************** */
const r = document.querySelector(".show");
const div = document.createElement("div");
div.classList.add("div");
r.parentNode.insertBefore(div, r);

videos.forEach(function (element, index) {
  div.append(devVideos(element, index));
});

//************************************* */
const div_title = document.querySelector(".div_title");
const select = document.querySelectorAll(".style_div");
select.forEach(function (element, index) {
  element.addEventListener("click", function () {
    const id = select[index].id;
    console.log(id);
    console.log(element.id);
    console.log(element);
    if (element.id === id) {
      const iframe = document.querySelector(".iframe");
      const img = document.querySelector(".style");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + id);
      // element.style.visibility = 'hidden';
      div_title.innerText = element.title;
    }
  });
});
