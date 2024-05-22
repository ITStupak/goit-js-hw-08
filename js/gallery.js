const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
// знаходимо список, де будемо створювати галерею
const gallery = document.querySelector('.gallery');

// створюємо з масиву галерею та динамічно додаємо розмітку у html
function galleryTemplate(obj) {
    return `<li class="gallery-item">
        <a class="gallery-link" href="${obj.original}">
          <img
            class="gallery-image"
            src="${obj.preview}"
            data-source="${obj.original}"
            alt="${obj.description}"
          />
        </a>
    </li>`
};
function galleriesTemplate(arr) {
  return arr.map(galleryTemplate).join('\n');
}
const markup = galleriesTemplate(images);
gallery.innerHTML = markup;

// вішаємо слухача події click на батьківський елемент всієї галереї (ul) використовуючи спливання (делегування) та прибираємо дії браузера за замовчуванням
gallery.addEventListener('click', onClickImage);
function onClickImage(event) {
    event.preventDefault();
// перевіряємо настання події на цільовому елементі
    if (event.target.nodeName !== "IMG") {
        return;
    }
// використовуємо бібліотеку Lightbox
    const selectedImage = basicLightbox.create(`
    <img width="1112" height="640" src="${event.target.dataset.source}">`);
    selectedImage.show();

    gallery.addEventListener('keydown', (event) => {
        if (event.code !== "Escape") {
          return;
      }
      selectedImage.close();
    });
}

