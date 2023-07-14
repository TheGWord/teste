const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let itemWidth = 0;
let numItems = 0;
let containerWidth = 0;
let currentIndex = 0;
let itemsView = 4

const updateCarousel = () => {
  container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.target === carousel) {
      itemWidth = carousel.clientWidth / itemsView;
        console.log(carousel.clientWidth)
      containerWidth = itemWidth * numItems;
      updateCarousel();
    }
  }
});

resizeObserver.observe(carousel);

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < numItems - itemsView) {
    currentIndex++;
    updateCarousel();
  }
});

const initCarousel = () => {
  itemWidth = carousel.clientWidth / itemsView;
  numItems = container.children.length;
  containerWidth = itemWidth * numItems;

  resizeObserver.observe(carousel);
  updateCarousel();
};

initCarousel();
