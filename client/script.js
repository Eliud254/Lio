const reviewContainer = document.querySelector('.review-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let scrollAmount = 0;
  let reviewIndex = 0;
  const reviews = document.querySelectorAll('.review');
  const maxIndex = Math.ceil(reviews.length / 4) - 1;

  nextBtn.addEventListener('click', () => {
    if (reviewIndex < maxIndex) {
      reviewIndex++;
      scrollAmount -= reviewContainer.offsetWidth;
      reviewContainer.style.transform = `translateX(${scrollAmount}px)`;
      prevBtn.disabled = false;
      if (reviewIndex === maxIndex) {
        nextBtn.disabled = true; 
      }
    }
  });

  prevBtn.addEventListener('click', () => {
    if (reviewIndex > 0) {
      reviewIndex--;
      scrollAmount += reviewContainer.offsetWidth;
      reviewContainer.style.transform = `translateX(${scrollAmount}px)`;
      nextBtn.disabled = false;
      if (reviewIndex === 0) {
        prevBtn.disabled = true;
      }
    }
  });