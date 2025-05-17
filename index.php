<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guntur Properties - Find Your Dream Home</title>
  
  <!-- Favicon -->
  <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  
  <!-- Main CSS -->
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
 
  <?php include 'navbar.php'; ?>

  <!-- Main Content -->
  <main>
    <div class="container">

      <!-- Hero Carousel -->
      <?php include 'carouselHomePage.php'; ?>
  
      
      <!-- Search Form -->
      <div class="search-form">
        <h3 class="search-form-title">Find Your Dream Property</h3>
        <form>
          <div class="search-form-row">
            <div class="form-group">
              <label class="form-label">Looking To</label>
              <div class="custom-select">
                <select>
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label">Property Type</label>
              <div class="custom-select">
                <select>
                  <option>Any</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Commercial</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label">Location</label>
              <div class="custom-select">
                <select>
                  <option>Any</option>
                  <option>Brodipet</option>
                  <option>Lakshmipuram</option>
                  <option>Arundelpet</option>
                  <option>amaravathi Road</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="search-form-row">
            <div class="form-group">
              <label class="form-label">Budget</label>
              <div class="custom-select">
                <select>
                  <option>Any</option>
                  <option>Under ₹25 Lac</option>
                  <option>₹25 Lac - ₹50 Lac</option>
                  <option>₹50 Lac - ₹1 Cr</option>
                  <option>₹1 Cr - ₹2 Cr</option>
                  <option>Above ₹2 Cr</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label">BHK</label>
              <div class="custom-select">
                <select>
                  <option>Any</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4+ BHK</option>
                </select>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label">Possession Status</label>
              <div class="custom-select">
                <select>
                  <option>Any</option>
                  <option>Ready to Move</option>
                  <option>Under Construction</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="search-form-submit">
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-search"></i> Search Properties
            </button>
          </div>
        </form>
      </div>
      
      <!-- Featured Properties Section -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-star"></i> Featured Properties
          </h2>
          <a href="#" class="section-link">
            View All <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div class="property-grid">
          <!-- Property Card 1 -->
          <div class="property-card">
            <div class="property-card-img">
              <img src="assets/images/property-1.webp" alt="Luxury Villa in Brodipet">
              <span class="property-card-badge sale">For Sale</span>
              <button class="property-card-favorite">
                <i class="far fa-heart"></i>
              </button>
              <div class="property-card-media">
                <i class="fas fa-camera"></i> 8
              </div>
            </div>
            <div class="property-card-body">
              <div class="property-card-price">
                <h4>₹85 Lac</h4>
                <span class="badge bg-light text-dark border">New</span>
              </div>
              <h5 class="property-card-title">Luxury Villa in Brodipet</h5>
              <div class="property-card-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>Brodipet, Guntur, Andhra Pradesh</span>
              </div>
              <div class="property-card-features">
                <span class="property-card-feature">
                  <i class="fas fa-ruler-combined"></i> 2400 sq.ft
                </span>
                <span class="property-card-feature">
                  <i class="fas fa-bed"></i> 3
                </span>
                <span class="property-card-feature">
                  <i class="fas fa-bath"></i> 3
                </span>
              </div>
            </div>
          </div>
          
          <!-- Property Card 2 -->
          <div class="property-card">
            <div class="property-card-img">
              <img src="assets/images/property-2.webp" alt="Premium Apartment">
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
                <h4>₹52 Lac</h4>
                <span class="badge bg-success text-white">Verified</span>
              </div>
              <h5 class="property-card-title">Premium 3BHK Apartment</h5>
              <div class="property-card-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>Lakshmipuram, Guntur</span>
              </div>
              <div class="property-card-features">
                <span class="property-card-feature">
                  <i class="fas fa-ruler-combined"></i> 1650 sq.ft
                </span>
                <span class="property-card-feature">
                  <i class="fas fa-bed"></i> 3
                </span>
                <span class="property-card-feature">
                  <i class="fas fa-bath"></i> 3
                </span>
              </div>
            </div>
          </div>
          
          <!-- Property Card 3 -->
          <div class="property-card">
            <div class="property-card-img">
              <img src="assets/images/property-3.webp" alt="Budget Friendly Flat">
              <span class="property-card-badge rent">For Rent</span>
              <button class="property-card-favorite">
                <i class="far fa-heart"></i>
              </button>
              <div class="property-card-media">
                <i class="fas fa-camera"></i> 6
              </div>
            </div>
            <div class="property-card-body">
              <div class="property-card-price">
                <h4>₹18K/mo</h4>
                <span class="badge bg-primary text-white">Hot Deal</span>
              </div>
              <h5 class="property-card-title">Budget Friendly 2BHK Flat</h5>
              <div class="property-card-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>Arundelpet, Guntur</span>
              </div>
              <div class="property-card-features">
                <span class="property-card-feature">
                  <i class="fas fa-ruler-combined"></i> 1100 sq.ft
                </span>
                <span class="property-card-feature">
                  <i class="fas fa-bed"></i> 2
                </span>
                <span class="property-card-feature">
                  <i class="fas fa-bath"></i> 2
                </span>
              </div>
            </div>
          </div>
          
          <!-- Property Card 4 -->
          <div class="property-card">
            <div class="property-card-img">
              <img src="assets/images/property-4.webp" alt="Commercial Space">
              <span class="property-card-badge sale">For Sale</span>
              <button class="property-card-favorite active">
                <i class="fas fa-heart"></i>
              </button>
              <div class="property-card-media">
                <i class="fas fa-camera"></i> 10
              </div>
            </div>
            <div class="property-card-body">
              <div class="property-card-price">
                <h4>₹1.2 Cr</h4>
                <span class="badge bg-warning text-dark">Premium</span>
              </div>
              <h5 class="property-card-title">Commercial Space in Prime Location</h5>
              <div class="property-card-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>Brodipet, Guntur</span>
              </div>
              <div class="property-card-features">
                <span class="property-card-feature">
                  <i class="fas fa-ruler-combined"></i> 3500 sq.ft
                </span>
                <span class="property-card-feature">
                  <i class="fas fa-door-open"></i> 5
                </span>
                <span class="property-card-feature">
                  <i class="fas fa-parking"></i> 8
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Similar Properties Demo 
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-copy"></i> Similar Properties Feature
          </h2>
          <p>Showing similar properties for a selected listing</p>
        </div>
        
        <div class="property-card">
          <div class="property-card-img">
            <img src="assets/images/property-5.webp" alt="Luxury Apartment">
            <span class="property-card-badge sale">For Sale</span>
            <button class="property-card-favorite">
              <i class="far fa-heart"></i>
            </button>
            <div class="property-card-media">
              <i class="fas fa-camera"></i> 14
            </div>
          </div>
          <div class="property-card-body">
            <div class="property-card-price">
              <h4>₹72 Lac</h4>
              <span class="badge bg-success text-white">Verified</span>
            </div>
            <h5 class="property-card-title">Luxury Apartment with City View</h5>
            <div class="property-card-location">
              <i class="fas fa-map-marker-alt"></i>
              <span>amaravathi Road, Guntur</span>
            </div>
            <div class="property-card-features">
              <span class="property-card-feature">
                <i class="fas fa-ruler-combined"></i> 1800 sq.ft
              </span>
              <span class="property-card-feature">
                <i class="fas fa-bed"></i> 3
              </span>
              <span class="property-card-feature">
                <i class="fas fa-bath"></i> 2
              </span>
            </div>
            
            <div class="similar-properties">
              <h5>Similar Properties You May Like</h5>
              <div class="similar-properties-slider">
                <div class="similar-property-card">
                  <div class="similar-property-img">
                    <img src="assets/images/similar-1.webp" alt="Similar Property 1">
                  </div>
                  <div class="similar-property-content">
                    <h6>Modern 3BHK Apartment</h6>
                    <p>₹68 Lac • amaravathi Road</p>
                  </div>
                </div>
                
                <div class="similar-property-card">
                  <div class="similar-property-img">
                    <img src="assets/images/similar-2.webp" alt="Similar Property 2">
                  </div>
                  <div class="similar-property-content">
                    <h6>Elegant Apartment</h6>
                    <p>₹75 Lac • Lakshmipuram</p>
                  </div>
                </div>
                
                <div class="similar-property-card">
                  <div class="similar-property-img">
                    <img src="assets/images/similar-3.webp" alt="Similar Property 3">
                  </div>
                  <div class="similar-property-content">
                    <h6>Stylish 3BHK Flat</h6>
                    <p>₹70 Lac • Brodipet</p>
                  </div>
                </div>
                
                <div class="similar-property-card">
                  <div class="similar-property-img">
                    <img src="assets/images/similar-4.webp" alt="Similar Property 4">
                  </div>
                  <div class="similar-property-content">
                    <h6>Premium Apartment</h6>
                    <p>₹82 Lac • amaravathi Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
-->
      <!-- Popular Localities Section -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-map-marked-alt"></i> Popular Localities
          </h2>
          <a href="#" class="section-link">
            View All <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div class="location-grid">
          <!-- Location Card 1 -->
          <div class="location-card">
            <div class="location-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h4>Brodipet</h4>
            <p>₹4.2K - 6.5K/sqft</p>
            <span class="location-properties">35+ Properties</span>
          </div>
          
          <!-- Location Card 2 -->
          <div class="location-card">
            <div class="location-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h4>Lakshmipuram</h4>
            <p>₹3.8K - 5.2K/sqft</p>
            <span class="location-properties">28+ Properties</span>
          </div>
          
          <!-- Location Card 3 -->
          <div class="location-card">
            <div class="location-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h4>Arundelpet</h4>
            <p>₹3.5K - 4.8K/sqft</p>
            <span class="location-properties">22+ Properties</span>
          </div>
          
          <!-- Location Card 4 -->
          <div class="location-card">
            <div class="location-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h4>amaravathi Road</h4>
            <p>₹3.9K - 5.5K/sqft</p>
            <span class="location-properties">27+ Properties</span>
          </div>
          
          <!-- Location Card 5 -->
          <div class="location-card">
            <div class="location-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h4>Chandramouli Nagar</h4>
            <p>₹3.2K - 4.5K/sqft</p>
            <span class="location-properties">18+ Properties</span>
          </div>
          
          <!-- Location Card 6 -->
          <div class="location-card">
            <div class="location-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h4>Gujjanagundla</h4>
            <p>₹2.8K - 3.9K/sqft</p>
            <span class="location-properties">15+ Properties</span>
          </div>
        </div>
      </section>
      
      <!-- Client Testimonials -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-comments"></i> Happy Clients
          </h2>
          <a href="#" class="section-link">
            View All <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div class="testimonial-grid">
          <!-- Testimonial 1 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/client-1.webp" alt="Rama Krishna">
              </div>
              <div class="testimonial-author">
                <h4>Rama Krishna</h4>
                <p>Bought 3BHK in Guntur</p>
              </div>
            </div>
            <div class="testimonial-content">
              <p>"I found my dream home within my budget. The process was smooth and transparent. Would highly recommend Guntur Properties to anyone looking for a hassle-free experience."</p>
            </div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/client-2.webp" alt="Lakshmi Prasad">
              </div>
              <div class="testimonial-author">
                <h4>Lakshmi Prasad</h4>
                <p>Sold property in Lakshmipuram</p>
              </div>
            </div>
            <div class="testimonial-content">
              <p>"Got the best price for my property. The team was professional and helped throughout the selling process. Their market knowledge is impressive and I would definitely use their services again."</p>
            </div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/client-3.webp" alt="Venkateswara Rao">
              </div>
              <div class="testimonial-author">
                <h4>Venkateswara Rao</h4>
                <p>Purchased Commercial Space</p>
              </div>
            </div>
            <div class="testimonial-content">
              <p>"The team at Guntur Properties understood my requirements perfectly and showed me properties that matched exactly what I was looking for. Their market knowledge and negotiation skills are exceptional."</p>
            </div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Stats Section -->
      <section class="section">
        <div class="section-header text-center">
          <h2 class="section-title mb-sm" style="justify-content: center;">
            <i class="fas fa-chart-bar"></i> Our Achievement in Numbers
          </h2>
          <p class="mb-lg">Our track record of success in the real estate market</p>
        </div>
        
        <div class="stats-container">
          <div class="stat-card">
            <div class="stat-value">1200+</div>
            <div class="stat-label">Properties Listed</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-value">850+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-value">450+</div>
            <div class="stat-label">Successful Deals</div>
          </div>
          
          <div class="stat-card">
            <div class="stat-value">15+</div>
            <div class="stat-label">Years Experience</div>
          </div>
        </div>
      </section>
    </div>
  </main>
  
<?php include 'footer.php'; ?>
  
  <!-- Main JavaScript -->
  <script src="js/components/dark-mode.js"></script>
  <script src="js/components/social-hub.js"></script>
  <script src="js/components/navbar.js"></script>
  <script src="js/components/affordability-calculator.js"></script>
  <script src="js/carousel.js"></script>
  <script src="js/navbar.js"></script>
  <script src="js/main.js"></script>
</body>

</html>