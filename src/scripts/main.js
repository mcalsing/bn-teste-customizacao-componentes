const averageRatingStars = document.querySelectorAll(".detail-notaMedia");
//const averageRatingStars = document.querySelectorAll(".beon-showcase__item-details");

averageRatingStars.forEach(el => {
  const rating = parseFloat(el.textContent.trim());

  el.textContent = '';

  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars-container';

  if (!isNaN(rating)) {
    // Estrelas cheias
    for (let i = 0; i < Math.floor(rating); i++) {
      const starImage = document.createElement('span');
      starImage.textContent = '★';
      //starImage.textContent = '⭐';
      starImage.style.color = '#FFD700';
      starImage.classList.add('rating-star');
      starImage.style.fontSize = '22px';
      
      starsContainer.appendChild(starImage);
    }
       
  } else {
    // Caso não tenha nennhuma avaliação, 5 estrelas cinzas
    for (let i = 0; i < 5; i++) {
      const starImage = document.createElement('span');
      starImage.textContent = '★';
      starImage.style.color = '#CCCCCC';
      starImage.classList.add('rating-star');
      starImage.style.fontSize = '22px';
      
      starsContainer.appendChild(starImage);
    }
  }
  
  el.parentNode.insertBefore(starsContainer, el);
});