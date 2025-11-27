const card = document.querySelector(".tilt-card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 12; 
  const rotateY = ((x - centerX) / centerX) * 12;

  card.style.transform = `
    perspective(800px)
    rotateX(${-rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)
  `;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = `
    perspective(800px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;
});
