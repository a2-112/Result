
fetch('data.json')
  .then(response => response.json()) 
  .then(data => {
    const summaryItems = document.querySelectorAll('.summary > div');

    data.forEach((result, index) => {
      if (summaryItems[index]) {
        const img = summaryItems[index].querySelector('img');
        const title = summaryItems[index].querySelector('h3');
        const score = summaryItems[index].querySelector('p');

        img.src = result.icon; // Ensure image source is set
        img.alt = result.category;
        title.textContent = result.category;
        score.innerHTML = `${result.score}<span class = "overall">/100</span>`;
      }
    });
  })
  .catch(error => {
    console.error("Error fetching JSON", error);
  });
