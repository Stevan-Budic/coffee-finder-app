
<section id="feature">
  <div class="container">
    <div class="row">

      <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
          <div class="wow fadeInUp section-title" data-wow-delay="0.6s">
            <h2>Searching for best coffee shop?</h2>
            <h4>Based on your location, we find the nearest coffee shops</h4>
          </div>
      </div>

      <div class="clearfix"></div>

      <div class="help-flex">
      	  <div class="wow fadeInUp" data-wow-delay="0.3s">
	        <div class="feature-thumb">
            <img src="<?php echo URL; ?>public/img/info-1.jpg " alt="" class="img-responsive">
	          <h3>SEARCH</h3>
	          <p>Whether you are traveling in a new city, or in your own backyard, we'll help you find the best coffee shops.</p>
	        </div>
	      </div>

	      <div class="wow fadeInUp" data-wow-delay="0.6s">
	        <div class="feature-thumb">
            <img src="<?php echo URL; ?>public/img/info-2.jpg " alt="" class="img-responsive">
	          <h3>KEEP TRACK</h3>
	          <p>Never forget that awesome place you went.</p>
	        </div>
	      </div>

	      <div class="wow fadeInUp" data-wow-delay="0.9s">
	        <div class="feature-thumb">
             <img src="<?php echo URL; ?>public/img/info-3.jpg " alt="" class="img-responsive">
	           <h3>READ TIPS</h3>
	           <p>Find tips, so you never miss out on the best places.</p>
	        </div>
	      </div>
      </div>
    </div>
  </div>
</section>



<section class="map-section">
 <div class="container">
  <div class="row">
        <form action="#" method="GET" id="searchform">
          <p>In order for us to give you location of coffe shops,<br> please provide us your location, by pressing button</p>
          <input type="submit" name="submit" id="submit" value="Submit your location">
        </form> 
        
        <div id="content">
          <div id="venuewrapper">
            <div id="venues"></div>
          </div>
          <div id="mapcontainer">
            <div class="map" id="map"></div>
          </div>
        </div>
  </div>
</div>


</section>



<section id="contact">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">

      <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
            <div class="wow fadeInUp section-title" data-wow-delay="0.3s">
                <h2>Sign up for newsletter</h2>
            </div>
        <div class="contact-form wow fadeInUp" data-wow-delay="0.7s">
          <form id="contact-form" method="post" action="#">
            <input name="name" type="text" class="form-control" placeholder="Name" required>
            <input name="email" type="email" class="form-control" placeholder="Email" required>
            <textarea name="message" class="form-control" placeholder="Message" rows="5" required></textarea>
            <input type="submit" class="form-control submit" value="SEND">
          </form>
        </div>
      </div>
      
    </div>
  </div>
</section>

