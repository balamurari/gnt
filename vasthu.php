<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vastu Compliance Checker</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="css\features\vasthu.css">
</head>
<body>
  <div class="container">
    <!-- Vastu Compliance Section -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">
          <i class="fas fa-compass"></i> Vastu Compliance Indicator
        </h2>
        <p>Check your property's Vastu compliance with our interactive tool</p>
      </div>
      
      <div class="vastu-wrapper">
        <!-- Property Details Card -->
        <div class="property-card">
          <div class="property-card-img">
            <img src="assets/images/property-6.webp" alt="Vastu Compliant Villa">
            <span class="property-card-badge sale">For Sale</span>
            <button class="property-card-favorite">
              <i class="far fa-heart"></i>
            </button>
            <div class="property-card-media">
              <i class="fas fa-camera"></i> 12
            </div>
          </div>
          <div class="property-card-body">
            <div class="property-card-price">
              <h4>₹95 Lac</h4>
              <span class="badge bg-primary">Premium</span>
            </div>
            <h5 class="property-card-title">Vastu Compliant Villa in Amaravathi Road</h5>
            <div class="property-card-location">
              <i class="fas fa-map-marker-alt"></i>
              <span>Amaravathi Road, Guntur</span>
            </div>
            <div class="property-card-features">
              <span class="property-card-feature">
                <i class="fas fa-ruler-combined"></i> 2200 sq.ft
              </span>
              <span class="property-card-feature">
                <i class="fas fa-bed"></i> 4
              </span>
              <span class="property-card-feature">
                <i class="fas fa-bath"></i> 3
              </span>
            </div>
          </div>
        </div>
        
        <!-- Vastu Selection Form -->
        <div class="vastu-form-container">
          <div class="vastu-form">
            <h3>Select Property Features</h3>
            
            <div class="form-group">
              <label for="main-door">Main Door Facing</label>
              <select id="main-door" class="vastu-select">
                <option value="">Select Direction</option>
                <option value="north">North</option>
                <option value="northeast">North-East (Highly Auspicious)</option>
                <option value="east">East (Auspicious)</option>
                <option value="southeast">South-East</option>
                <option value="south">South</option>
                <option value="southwest">South-West</option>
                <option value="west">West</option>
                <option value="northwest">North-West</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="kitchen">Kitchen Location</label>
              <select id="kitchen" class="vastu-select">
                <option value="">Select Direction</option>
                <option value="north">North</option>
                <option value="northeast">North-East</option>
                <option value="east">East</option>
                <option value="southeast">South-East (Ideal)</option>
                <option value="south">South</option>
                <option value="southwest">South-West</option>
                <option value="west">West</option>
                <option value="northwest">North-West (Good)</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="master-bedroom">Master Bedroom Location</label>
              <select id="master-bedroom" class="vastu-select">
                <option value="">Select Direction</option>
                <option value="north">North</option>
                <option value="northeast">North-East</option>
                <option value="east">East</option>
                <option value="southeast">South-East</option>
                <option value="south">South</option>
                <option value="southwest">South-West (Ideal)</option>
                <option value="west">West (Good)</option>
                <option value="northwest">North-West</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="bathroom">Bathroom Location</label>
              <select id="bathroom" class="vastu-select">
                <option value="">Select Direction</option>
                <option value="north">North</option>
                <option value="northeast">North-East</option>
                <option value="east">East</option>
                <option value="southeast">South-East</option>
                <option value="south">South</option>
                <option value="southwest">South-West</option>
                <option value="west">West (Good)</option>
                <option value="northwest">North-West (Ideal)</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="living-room">Living Room Location</label>
              <select id="living-room" class="vastu-select">
                <option value="">Select Direction</option>
                <option value="north">North (Good)</option>
                <option value="northeast">North-East (Good)</option>
                <option value="east">East (Ideal)</option>
                <option value="southeast">South-East</option>
                <option value="south">South</option>
                <option value="southwest">South-West</option>
                <option value="west">West</option>
                <option value="northwest">North-West</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="pooja-room">Pooja Room Location</label>
              <select id="pooja-room" class="vastu-select">
                <option value="">Select Direction</option>
                <option value="north">North</option>
                <option value="northeast">North-East (Ideal)</option>
                <option value="east">East (Good)</option>
                <option value="southeast">South-East</option>
                <option value="south">South</option>
                <option value="southwest">South-West</option>
                <option value="west">West</option>
                <option value="northwest">North-West</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="staircase">Staircase Location</label>
              <select id="staircase" class="vastu-select">
                <option value="">Select Direction</option>
                <option value="north">North</option>
                <option value="northeast">North-East</option>
                <option value="east">East</option>
                <option value="southeast">South-East</option>
                <option value="south">South (Good)</option>
                <option value="southwest">South-West (Good)</option>
                <option value="west">West (Ideal)</option>
                <option value="northwest">North-West</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="plot-shape">Plot Shape</label>
              <select id="plot-shape" class="vastu-select">
                <option value="">Select Shape</option>
                <option value="square">Square (Ideal)</option>
                <option value="rectangle">Rectangle (Good)</option>
                <option value="irregular">Irregular Shape</option>
                <option value="circular">Circular</option>
                <option value="l-shaped">L-Shaped</option>
                <option value="t-shaped">T-Shaped</option>
              </select>
            </div>
            
            <div class="form-action">
              <button id="calculate-vastu" class="btn-primary">Calculate Vastu Compliance</button>
              <button id="reset-vastu" class="btn-secondary">Reset</button>
            </div>
          </div>
        </div>
        
        <!-- Vastu Results -->
        <div class="vastu-results-container" id="vastu-results">
          <div class="vastu-indicator">
            <h4>Vastu Compliance Score</h4>
            
            <div class="vastu-score">
              <div class="score-circle" data-score="0">
                <svg viewBox="0 0 36 36">
                  <path class="score-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#eee" stroke-width="3" />
                  <path class="score-fill"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#4CAF50" stroke-width="3" stroke-dasharray="0, 100" />
                </svg>
                <span class="score-value" id="compliance-score">0%</span>
              </div>
            </div>
            
            <div class="compliance-rating" id="compliance-rating">
              <span class="badge bg-warning">Not Evaluated</span>
            </div>
            
            <div class="vastu-details" id="vastu-details">
              <!-- Vastu details will be populated by JavaScript -->
            </div>
            
            <div class="vastu-recommendations" id="vastu-recommendations">
              <h4>Recommendations</h4>
              <div class="recommendation-content">
                <!-- Recommendations will be populated by JavaScript -->
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Vastu Tips Section -->
      <div class="vastu-tips">
        <h3>Vastu Shastra Tips</h3>
        <div class="tips-container">
          <div class="tip-card">
            <div class="tip-icon">
              <i class="fas fa-door-open"></i>
            </div>
            <h4>Main Entrance</h4>
            <p>North, East, and North-East facing doors are considered auspicious as they allow positive energy into the house.</p>
          </div>
          
          <div class="tip-card">
            <div class="tip-icon">
              <i class="fas fa-utensils"></i>
            </div>
            <h4>Kitchen</h4>
            <p>Southeast corner is the ideal location for the kitchen as it aligns with the fire element, which is associated with this direction.</p>
          </div>
          
          <div class="tip-card">
            <div class="tip-icon">
              <i class="fas fa-bed"></i>
            </div>
            <h4>Bedroom</h4>
            <p>The master bedroom is best placed in the Southwest corner as it provides stability and helps in sound sleep.</p>
          </div>
          
          <div class="tip-card">
            <div class="tip-icon">
              <i class="fas fa-om"></i>
            </div>
            <h4>Prayer Room</h4>
            <p>Northeast corner is considered ideal for prayer rooms as it is associated with positive energy and spiritual growth.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <script src="js\features\vasthu.js"></script>
</body>
</html>