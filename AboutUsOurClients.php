<?php
// Include header and other required files
include_once('navbar.php');
?>

<link rel="stylesheet" href="css/AboutUs/ourClients.css">

<div class="our-clients-container">
    <div class="clients-header">
        <div class="icon-title">
            <div class="clients-icon">
                <i class="fas fa-users"></i>
            </div>
            <h1>Our Clients</h1>
        </div>
        <a href="#" class="view-all">View All <i class="fas fa-arrow-right"></i></a>
    </div>

    <!-- Introduction Section -->
    <div class="clients-intro">
        <p>Our clients are at the heart of everything we do. Over the years, we've built lasting relationships with families, investors, and businesses across Guntur, helping them achieve their real estate goals.</p>
    </div>

    <!-- Client Trust Metrics -->
    <div class="trust-metrics">
        <div class="metric-item">
            <div class="metric-number">1500+</div>
            <div class="metric-label">Satisfied Clients</div>
        </div>
        <div class="metric-item">
            <div class="metric-number">95%</div>
            <div class="metric-label">Client Retention</div>
        </div>
        <div class="metric-item">
            <div class="metric-number">4.8/5</div>
            <div class="metric-label">Customer Rating</div>
        </div>
        <div class="metric-item">
            <div class="metric-number">15+</div>
            <div class="metric-label">Years of Service</div>
        </div>
    </div>

    <!-- Client Testimonials -->
    <div class="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-quote">
                    <i class="fas fa-quote-left"></i>
                    <p>"Finding our family home in Brodipet was made simple with their expert guidance. The team understood our requirements perfectly and helped us navigate the entire process with ease."</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-image">
                        <img src="assets/images/clients/client1.jpg" alt="Ramesh Kumar">
                    </div>
                    <div class="author-info">
                        <h4>Ramesh Kumar</h4>
                        <p>Homeowner, Brodipet</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <div class="testimonial-quote">
                    <i class="fas fa-quote-left"></i>
                    <p>"As a first-time investor, I appreciated their transparent approach and market insights. Their team helped me acquire a commercial property in Lakshmipuram that has been an excellent investment."</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-image">
                        <img src="assets/images/clients/client2.jpg" alt="Priya Sharma">
                    </div>
                    <div class="author-info">
                        <h4>Priya Sharma</h4>
                        <p>Property Investor</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <div class="testimonial-quote">
                    <i class="fas fa-quote-left"></i>
                    <p>"Their property management services have been exceptional. I own multiple rental properties in Arundelpet, and they handle everything professionally, allowing me to enjoy passive income without any hassle."</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-image">
                        <img src="assets/images/clients/client3.jpg" alt="Venkat Reddy">
                    </div>
                    <div class="author-info">
                        <h4>Venkat Reddy</h4>
                        <p>Property Owner</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Client Types -->
    <div class="client-types">
        <h2>Who We Serve</h2>
        <div class="types-container">
            <div class="type-card">
                <div class="type-icon">
                    <i class="fas fa-home"></i>
                </div>
                <h3>Home Buyers</h3>
                <p>Families and individuals looking for their perfect home across Guntur's premium localities</p>
            </div>

            <div class="type-card">
                <div class="type-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <h3>Investors</h3>
                <p>Individual and institutional investors seeking profitable real estate opportunities</p>
            </div>

            <div class="type-card">
                <div class="type-icon">
                    <i class="fas fa-building"></i>
                </div>
                <h3>Businesses</h3>
                <p>Companies looking for commercial spaces to establish or expand their operations</p>
            </div>

            <div class="type-card">
                <div class="type-icon">
                    <i class="fas fa-key"></i>
                </div>
                <h3>Property Owners</h3>
                <p>Owners seeking professional property management and rental services</p>
            </div>
        </div>
    </div>

    <!-- Featured Client Logos -->
    <div class="client-logos">
        <h2>Trusted By</h2>
        <div class="logos-container">
            <div class="logo-item">
                <img src="assets/images/clients/logo1.png" alt="ABC Corporation">
            </div>
            <div class="logo-item">
                <img src="assets/images/clients/logo2.png" alt="XYZ Enterprises">
            </div>
            <div class="logo-item">
                <img src="assets/images/clients/logo3.png" alt="123 Developments">
            </div>
            <div class="logo-item">
                <img src="assets/images/clients/logo4.png" alt="Tech Solutions">
            </div>
            <div class="logo-item">
                <img src="assets/images/clients/logo5.png" alt="Global Investments">
            </div>
        </div>
    </div>

    <!-- Contact CTA -->
    <div class="client-cta">
        <h2>Join Our Growing Family of Satisfied Clients</h2>
        <p>Whether you're looking to buy, sell, or invest in properties across Guntur, our team is ready to help you achieve your real estate goals.</p>
        <a href="contact.php" class="cta-button">Contact Us Today</a>
    </div>
</div>
<script src='js\AboutUs\OurClients.js'></script>
<?php
// Include footer
include_once('footer.php');
?>