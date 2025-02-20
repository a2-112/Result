// fetch('data.json')
// // fetch the JSON file
// .then(response => response.json())
// // convert the JSON file to a Javascript object
// .then(data => {
//       // this uses the var name data to fetch the data.json file into the html element
//     const resultsSummary = document.querySelectorAll('.summary > div');
//      // Select all predefined summary items
//     data.forEach((result, index) => {
//         if (resultsSummary[index]) {// Ensure it doesn't go out of bounds
//             const resultImage = resultsSummary[index].querySelector('img');
             
//         const resultName = resultsSummary[index].querySelector('h3');
       
//         const resultDescription = resultsSummary[index].querySelector('p');

//             resultImage.src = result.icon;
//             resultImage.alt = result.category;
//              resultName.textContent = `${result.category}`;
//                     resultDescription.textContent =  `Score: ${result.score}`;
//         }
       
//     });
// })
// .catch(error => {
//     console.error("Error fetching JSON", error);
// });
// // Error handling for JSON fetch

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
