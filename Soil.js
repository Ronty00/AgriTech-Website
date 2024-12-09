function analyzeSoil() {
  // Get the input values for soil moisture and pH
  const moistureInput = document.getElementById('moisture').value;
  const phInput = document.getElementById('ph').value;

  // Perform analysis based on soil moisture and pH levels
  let cropRecommendation = '';
  if (moistureInput < 30 && phInput >= 6 && phInput <= 7.5) {
    cropRecommendation = 'Tomatoes, peppers, and eggplant';
  } else if (moistureInput >= 30 && moistureInput <= 60 && phInput >= 6 && phInput <= 7.5) {
    cropRecommendation = 'Corn, carrots, and beans';
  } else if (moistureInput > 60 && phInput >= 6 && phInput <= 7.5) {
    cropRecommendation = 'Cabbage, broccoli, and cauliflower';
  } else {
    cropRecommendation = 'No suitable crops found for these soil conditions.';
  }

  // Display the crop recommendation
  const cropRecommendationElement = document.createElement('p');
  cropRecommendationElement.textContent = `Best crops to cultivate in this soil: ${cropRecommendation}`;
  
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = '';
  resultsElement.appendChild(cropRecommendationElement);
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', analyzeSoil);
