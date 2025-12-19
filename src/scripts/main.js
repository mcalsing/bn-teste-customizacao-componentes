// Inserção de entrelas com base na nota media do produto

const averageRatingStars = document.querySelectorAll(".detail-notaMedia");

averageRatingStars.forEach(el => {
  const rating = parseFloat(el.textContent.trim());

  //console.log(rating)
  // Retira a nota do html
  el.textContent = '';

  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars-container';
  
  // Ao colocar o cursor em cima das estrelas, mostra a nota media
  starsContainer.title = !isNaN(rating)
  ? `${rating.toFixed(1)}`
  : 'Sem avaliação';

  if (!isNaN(rating)) {
    // Estrelas cheias
    for (let i = 0; i < Math.floor(rating); i++) {
      const starImage = document.createElement('img');
      starImage.src = '/src/assets/star-color2.png';
      starImage.alt = 'rating star';
      starImage.style.width = '15px';

      starsContainer.appendChild(starImage);
    }

    // Estrelas pela metade
    if (rating % 1 >= 0.5) {
      const starImage = document.createElement('img');
      starImage.src = '/src/assets/star-half4.png'; 
      starImage.alt = 'half star';
      starImage.style.width = '15px';
      
      starsContainer.appendChild(starImage);
    }
       
  } else {
    // Caso não tenha nennhuma avaliação, 5 estrelas cinzas
    for (let i = 0; i < 5; i++) {
      const starImage = document.createElement('img');
      starImage.src = '/src/assets/star2.png';
      starImage.alt = 'rating star';
      starImage.style.width = '15px';
      
      starsContainer.appendChild(starImage);
    }
  }
  
  // Insere o starsConteiner antes do .detail-notaMedia
  el.parentNode.insertBefore(starsContainer, el);
});


// ---------------------------- Wishlist ----------------------------------

// Adiciona a imagem do coração no botão já existente no html
const wishlist = document.querySelectorAll(".beon-showcase__wishlist-icon")

wishlist.forEach(el => {
  const hearthWishlist = document.createElement('img');
  hearthWishlist.src = '/src/assets/heart-gray2.png';
  hearthWishlist.style.width = '14px'
  hearthWishlist.alt = 'heart'
  hearthWishlist.className = 'beon-showcase__wishlist-image';

  // Evento para trocar por um coração colorido no hover
  hearthWishlist.addEventListener('mouseenter', () => {
    hearthWishlist.src = '/src/assets/heart-color.png';
    hearthWishlist.style.width = '15px'
    hearthWishlist.alt = 'heart'
    hearthWishlist.className = 'beon-showcase__wishlist-image';
  });
  
//home/mcalsing/Documents/bn-teste-customizacao-componentes/src/assets/heart _gray2.png

  hearthWishlist.addEventListener('mouseleave', () => {
    hearthWishlist.src = '/src/assets/heart-gray2.png';
    hearthWishlist.style.width = '14px'
    hearthWishlist.alt = 'heart'
    hearthWishlist.className = 'beon-showcase__wishlist-image';
  });

  el.appendChild(hearthWishlist);
})


// ----------------------- Angle slider ----------------------
const buttonPrev = document.querySelector('.tns-controls button:first-child')
const buttonNext = document.querySelector('.tns-controls button:last-child');

// Prev
const prevImage = document.createElement('img')
prevImage.src = '/src/assets/arrow-left.png';
prevImage.alt = 'prev button';
prevImage.style.width = '20px'
buttonPrev.innerHTML = '';

buttonPrev.appendChild(prevImage);

// Next
const nextImage = document.createElement('img');
nextImage.src = '/src/assets/arrow-right.png';
nextImage.alt = 'next button';
nextImage.style.width = '20px'
buttonNext.innerHTML = '';

buttonNext.appendChild(nextImage);


// -------------------- Badge -----------------------
const discount = document.querySelectorAll('.beon-showcase__item-discount');

discount.forEach(el => {
  const value = parseFloat(el.textContent.trim());

  if (!isNaN(value)) {
    el.innerHTML = `-${value}%`
  }
})