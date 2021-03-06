const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");

// const createImageItem = (image) => {
//   const imageItemRef = document.createElement("li");
//   const imageRef = document.createElement("img");

//   imageRef.src = image.url;
//   imageRef.alt = image.alt;

//   imageItemRef.append(imageRef);

//   return imageItemRef;
// };
// const makeImageTags = images.map((image) => createImageItem(image));
// console.log(createImageItem(images[1]));
// gallery.append(...makeImageTags);

// gallery.insertAdjacentHTML("afterbegin", "<li><img src= alt= ></li>");

const getImage = images.map(image => `<li><img src=${image.url} alt=${image.alt}></li>`);

gallery.insertAdjacentHTML('afterbegin', getImage.join(''))
