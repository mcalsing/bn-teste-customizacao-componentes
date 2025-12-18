// Inserção de entrelas com base na nota media do produto

const averageRatingStars = document.querySelectorAll(".detail-notaMedia");

averageRatingStars.forEach(el => {
  const rating = parseFloat(el.textContent.trim());

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
      starImage.src = '/src/assets/color_star.png';
      starImage.alt = 'rating star';
      starImage.style.width = '15px';

      starsContainer.appendChild(starImage);
    }

    // Estrelas pela metade
    if (rating % 1 >= 0.5) {
      const starImage = document.createElement('img');
      starImage.src = '/src/assets/half_star2.png'; 
      starImage.alt = 'half star';
      starImage.style.width = '16px';
      
      starsContainer.appendChild(starImage);
    }
       
  } else {
    // Caso não tenha nennhuma avaliação, 5 estrelas cinzas
    for (let i = 0; i < 5; i++) {
      const starImage = document.createElement('img');
      starImage.src = '/src/assets/star.png';
      starImage.alt = 'rating star';
      starImage.style.width = '16px';
      
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
  hearthWishlist.src = '/src/assets/heart.png';
  hearthWishlist.style.width = '14px'
  hearthWishlist.className = 'beon-showcase__wishlist-image';

  // Evento para trocar por um coração colorido
  hearthWishlist.addEventListener('mouseenter', () => {
    hearthWishlist.src = '/src/assets/heart_color.png';
  });
  
  hearthWishlist.addEventListener('mouseleave', () => {
    hearthWishlist.src = '/src/assets/heart.png';
  });

  el.appendChild(hearthWishlist);
})

