/**
 * Vastu Compliance Checker Script
 * This script calculates and visualizes the Vastu compliance of a property
 * based on user selections.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the Vastu compliance checker
  initVastuComplianceChecker();
});

function initVastuComplianceChecker() {
  // Get DOM elements
  const calculateButton = document.getElementById('calculate-vastu');
  const resetButton = document.getElementById('reset-vastu');
  const resultsContainer = document.getElementById('vastu-results');
  const scoreFill = document.querySelector('.score-fill');
  const scoreValue = document.getElementById('compliance-score');
  const complianceRating = document.getElementById('compliance-rating');
  const vastuDetails = document.getElementById('vastu-details');
  const recommendationsContent = document.querySelector('.recommendation-content');
  const floorPlan = document.getElementById('floor-plan');
  
  // Get all select inputs
  const formSelects = document.querySelectorAll('.vastu-select');
  
  // Vastu compliance rules
  const vastuRules = {
    'main-door': {
      'north': { score: 90, status: 'positive', message: 'North-facing main door allows good energy flow' },
      'northeast': { score: 100, status: 'positive', message: 'Northeast-facing main door is highly auspicious' },
      'east': { score: 95, status: 'positive', message: 'East-facing main door brings prosperity' },
      'southeast': { score: 60, status: 'negative', message: 'Southeast-facing main door may lead to conflicts' },
      'south': { score: 50, status: 'negative', message: 'South-facing main door may bring financial stress' },
      'southwest': { score: 40, status: 'negative', message: 'Southwest-facing main door is not recommended' },
      'west': { score: 70, status: 'neutral', message: 'West-facing main door is acceptable' },
      'northwest': { score: 80, status: 'positive', message: 'Northwest-facing main door is good for career growth' }
    },
    'kitchen': {
      'north': { score: 60, status: 'negative', message: 'North-facing kitchen may cause health issues' },
      'northeast': { score: 40, status: 'negative', message: 'Northeast-facing kitchen is not recommended' },
      'east': { score: 80, status: 'positive', message: 'East-facing kitchen is good for health' },
      'southeast': { score: 100, status: 'positive', message: 'Southeast-facing kitchen is ideal as per Vastu' },
      'south': { score: 50, status: 'negative', message: 'South-facing kitchen may lead to arguments' },
      'southwest': { score: 60, status: 'negative', message: 'Southwest-facing kitchen is not recommended' },
      'west': { score: 70, status: 'neutral', message: 'West-facing kitchen is acceptable' },
      'northwest': { score: 90, status: 'positive', message: 'Northwest-facing kitchen brings prosperity' }
    },
    'master-bedroom': {
      'north': { score: 70, status: 'neutral', message: 'North-facing master bedroom is acceptable' },
      'northeast': { score: 50, status: 'negative', message: 'Northeast-facing master bedroom may disturb sleep' },
      'east': { score: 80, status: 'positive', message: 'East-facing master bedroom promotes good health' },
      'southeast': { score: 60, status: 'negative', message: 'Southeast-facing master bedroom may cause stress' },
      'south': { score: 75, status: 'neutral', message: 'South-facing master bedroom is acceptable' },
      'southwest': { score: 100, status: 'positive', message: 'Southwest-facing master bedroom is ideal for stability' },
      'west': { score: 90, status: 'positive', message: 'West-facing master bedroom promotes good rest' },
      'northwest': { score: 65, status: 'neutral', message: 'Northwest-facing master bedroom is acceptable' }
    },
    'bathroom': {
      'north': { score: 50, status: 'negative', message: 'North-facing bathroom may cause financial loss' },
      'northeast': { score: 30, status: 'negative', message: 'Northeast-facing bathroom is highly inauspicious' },
      'east': { score: 60, status: 'negative', message: 'East-facing bathroom is not recommended' },
      'southeast': { score: 80, status: 'positive', message: 'Southeast-facing bathroom is acceptable' },
      'south': { score: 75, status: 'neutral', message: 'South-facing bathroom is acceptable' },
      'southwest': { score: 70, status: 'neutral', message: 'Southwest-facing bathroom is acceptable' },
      'west': { score: 90, status: 'positive', message: 'West-facing bathroom is good according to Vastu' },
      'northwest': { score: 100, status: 'positive', message: 'Northwest-facing bathroom is ideal according to Vastu' }
    },
    'living-room': {
      'north': { score: 90, status: 'positive', message: 'North-facing living room brings prosperity' },
      'northeast': { score: 95, status: 'positive', message: 'Northeast-facing living room promotes harmony' },
      'east': { score: 100, status: 'positive', message: 'East-facing living room is ideal for family health' },
      'southeast': { score: 60, status: 'negative', message: 'Southeast-facing living room may create conflicts' },
      'south': { score: 70, status: 'neutral', message: 'South-facing living room is acceptable' },
      'southwest': { score: 50, status: 'negative', message: 'Southwest-facing living room may cause lethargy' },
      'west': { score: 75, status: 'neutral', message: 'West-facing living room is acceptable' },
      'northwest': { score: 80, status: 'positive', message: 'Northwest-facing living room is good for social activities' }
    },
    'pooja-room': {
      'north': { score: 80, status: 'positive', message: 'North-facing prayer room promotes peace' },
      'northeast': { score: 100, status: 'positive', message: 'Northeast-facing prayer room is highly auspicious' },
      'east': { score: 95, status: 'positive', message: 'East-facing prayer room brings positive energy' },
      'southeast': { score: 50, status: 'negative', message: 'Southeast-facing prayer room is not recommended' },
      'south': { score: 40, status: 'negative', message: 'South-facing prayer room may block spiritual growth' },
      'southwest': { score: 30, status: 'negative', message: 'Southwest-facing prayer room is inauspicious' },
      'west': { score: 60, status: 'negative', message: 'West-facing prayer room is not recommended' },
      'northwest': { score: 70, status: 'neutral', message: 'Northwest-facing prayer room is acceptable' }
    },
    'staircase': {
      'north': { score: 60, status: 'negative', message: 'North-facing staircase may cause instability' },
      'northeast': { score: 40, status: 'negative', message: 'Northeast-facing staircase is not recommended' },
      'east': { score: 70, status: 'neutral', message: 'East-facing staircase is acceptable' },
      'southeast': { score: 75, status: 'neutral', message: 'Southeast-facing staircase is acceptable' },
      'south': { score: 90, status: 'positive', message: 'South-facing staircase is good according to Vastu' },
      'southwest': { score: 95, status: 'positive', message: 'Southwest-facing staircase provides stability' },
      'west': { score: 100, status: 'positive', message: 'West-facing staircase is ideal according to Vastu' },
      'northwest': { score: 80, status: 'positive', message: 'Northwest-facing staircase is acceptable' }
    },
    'plot-shape': {
      'square': { score: 100, status: 'positive', message: 'Square plot is ideal according to Vastu' },
      'rectangle': { score: 90, status: 'positive', message: 'Rectangular plot is good according to Vastu' },
      'irregular': { score: 60, status: 'negative', message: 'Irregular shaped plot may cause imbalance' },
      'circular': { score: 70, status: 'neutral', message: 'Circular plot is acceptable but not ideal' },
      'l-shaped': { score: 50, status: 'negative', message: 'L-shaped plot may cause financial constraints' },
      't-shaped': { score: 40, status: 'negative', message: 'T-shaped plot is not recommended' }
    }
  };
  
  // Event listeners
  calculateButton.addEventListener('click', calculateVastuCompliance);
  resetButton.addEventListener('click', resetForm);
  
  /**
   * Calculate Vastu compliance based on user selections
   */
  function calculateVastuCompliance() {
    // Check if at least 3 options are selected
    let selectedCount = 0;
    let selectedValues = {};
    
    formSelects.forEach(select => {
      if (select.value) {
        selectedCount++;
        selectedValues[select.id] = select.value;
      }
    });
    
    if (selectedCount < 3) {
      alert('Please select at least 3 options to calculate Vastu compliance');
      return;
    }
    
    // Calculate compliance score
    let totalScore = 0;
    let maxPossibleScore = 0;
    let vastuItems = [];
    
    for (const [key, value] of Object.entries(selectedValues)) {
      if (vastuRules[key] && vastuRules[key][value]) {
        const rule = vastuRules[key][value];
        totalScore += rule.score;
        maxPossibleScore += 100;
        
        vastuItems.push({
          id: key,
          direction: value,
          score: rule.score,
          status: rule.status,
          message: rule.message
        });
      }
    }
    
    // Calculate percentage
    const compliancePercentage = Math.round((totalScore / maxPossibleScore) * 100);
    
    // Update score visualization
    updateScoreVisualization(compliancePercentage);
    
    // Update compliance details
    updateComplianceDetails(vastuItems);
    
    // Update recommendations
    updateRecommendations(vastuItems, compliancePercentage);
    
    // Show results
    resultsContainer.classList.add('active');
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
  }
  
  /**
   * Update the score visualization with the compliance percentage
   */
  function updateScoreVisualization(percentage) {
    // Update score text
    scoreValue.textContent = `${percentage}%`;
    
    // Update circular progress
    scoreFill.setAttribute('stroke-dasharray', `${percentage}, 100`);
    
    // Change color based on score
    let color = '#F44336'; // Red for low score
    
    if (percentage >= 80) {
      color = '#4CAF50'; // Green for high score
    } else if (percentage >= 60) {
      color = '#FFC107'; // Yellow for medium score
    } else if (percentage >= 40) {
      color = '#FF9800'; // Orange for low-medium score
    }
    
    scoreFill.setAttribute('stroke', color);
    
    // Update rating badge
    let ratingText = '';
    let ratingClass = '';
    
    if (percentage >= 80) {
      ratingText = 'Excellent Vastu Compliance';
      ratingClass = 'bg-success';
    } else if (percentage >= 60) {
      ratingText = 'Good Vastu Compliance';
      ratingClass = 'bg-primary';
    } else if (percentage >= 40) {
      ratingText = 'Average Vastu Compliance';
      ratingClass = 'bg-warning';
    } else {
      ratingText = 'Poor Vastu Compliance';
      ratingClass = 'bg-danger';
    }
    
    complianceRating.innerHTML = `<span class="badge ${ratingClass}">${ratingText}</span>`;
  }
  
  /**
   * Update the compliance details with positive and negative aspects
   */
  function updateComplianceDetails(items) {
    vastuDetails.innerHTML = '';
    
    // Sort items by status (positive first, then neutral, then negative)
    items.sort((a, b) => {
      const statusOrder = { 'positive': 0, 'neutral': 1, 'negative': 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
    
    items.forEach(item => {
      const formattedId = formatId(item.id);
      const formattedDirection = formatDirection(item.direction);
      
      const itemElement = document.createElement('div');
      itemElement.className = `vastu-item ${item.status}`;
      
      const icon = item.status === 'positive' ? 'check-circle' : 
                  (item.status === 'negative' ? 'times-circle' : 'info-circle');
      
      itemElement.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span><strong>${formattedId}:</strong> ${item.message} (${formattedDirection})</span>
      `;
      
      vastuDetails.appendChild(itemElement);
    });
  }
  
  /**
   * Update recommendations based on compliance score and details
   */
  function updateRecommendations(items, overallScore) {
    recommendationsContent.innerHTML = '';
    
    if (overallScore >= 80) {
      recommendationsContent.innerHTML = `
        <p>Congratulations! Your property has excellent Vastu compliance. Here are some minor adjustments that could further enhance the positive energy:</p>
      `;
    } else if (overallScore >= 60) {
      recommendationsContent.innerHTML = `
        <p>Your property has good Vastu compliance. Consider these adjustments to improve the energy flow:</p>
      `;
    } else if (overallScore >= 40) {
      recommendationsContent.innerHTML = `
        <p>Your property has average Vastu compliance. We recommend the following changes to improve the energy balance:</p>
      `;
    } else {
      recommendationsContent.innerHTML = `
        <p>Your property needs significant Vastu corrections. Consider these essential changes to improve harmony and positive energy:</p>
      `;
    }
    
    // Add specific recommendations based on negative aspects
    const negativeItems = items.filter(item => item.status === 'negative');
    
    if (negativeItems.length > 0) {
      const recommendationsList = document.createElement('ul');
      recommendationsList.style.marginTop = '8px';
      
      negativeItems.forEach(item => {
        const recommendation = document.createElement('li');
        
        switch(item.id) {
          case 'main-door':
            recommendation.textContent = `Consider reorienting the main door to face North, East, or Northeast for better energy flow.`;
            break;
          case 'kitchen':
            recommendation.textContent = `The kitchen would be more auspicious in the Southeast or Northwest direction.`;
            break;
          case 'master-bedroom':
            recommendation.textContent = `For better sleep quality, try to relocate the master bedroom to the Southwest or West direction.`;
            break;
          case 'bathroom':
            recommendation.textContent = `Bathrooms are best placed in the Northwest or West direction according to Vastu principles.`;
            break;
          case 'living-room':
            recommendation.textContent = `The living room would benefit from being relocated to the North, Northeast, or East direction.`;
            break;
          case 'pooja-room':
            recommendation.textContent = `For spiritual benefits, relocate the prayer room to the Northeast or East direction.`;
            break;
          case 'staircase':
            recommendation.textContent = `Consider relocating the staircase to the South, Southwest, or West direction.`;
            break;
          case 'plot-shape':
            recommendation.textContent = `While plot shape cannot be easily changed, you can use Vastu remedies like plants or mirrors to balance the energy.`;
            break;
          default:
            recommendation.textContent = `Consider adjusting the ${formatId(item.id)} for better Vastu compliance.`;
        }
        
        recommendationsList.appendChild(recommendation);
      });
      
      recommendationsContent.appendChild(recommendationsList);
    } else {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'All selected elements are well-placed according to Vastu principles. Maintain the current layout for continued positive energy.';
      paragraph.style.marginTop = '8px';
      recommendationsContent.appendChild(paragraph);
    }
  }
  
  /**
   * Reset the form and results
   */
  function resetForm() {
    // Reset all selections
    formSelects.forEach(select => {
      select.selectedIndex = 0;
    });
    
    // Reset score
    scoreValue.textContent = '0%';
    scoreFill.setAttribute('stroke-dasharray', '0, 100');
    complianceRating.innerHTML = '<span class="badge bg-warning">Not Evaluated</span>';
    
    // Clear details and recommendations
    vastuDetails.innerHTML = '';
    recommendationsContent.innerHTML = '';
    
    // Hide results
    resultsContainer.classList.remove('active');
  }
  
  /**
   * Format an ID string for display
   */
  function formatId(id) {
    return id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  /**
   * Format a direction string for display
   */
  function formatDirection(direction) {
    return direction
      .split(/(?=[A-Z])|-/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  }
}