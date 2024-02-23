## 
  .about-us-home h1 {
    font-size: 4.5em;
    padding-top: 5px;
    padding-left: 70px; 
    color: #333 ;
    text-decoration: solid #333;
}

.about-us-home p {
    padding-top:100px ;
    padding-left: 70px;
    font-size: 1.2rem;
    padding-bottom: 5px;
    color:#333;

}
@keyframes slideIn {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .about-us-home h1,
  .about-us-home p {
    animation: slideIn 1s ease-in-out;
    animation-play-state: running;
  }
  
  /* Stop the animation after it runs once */
  .about-us-home h1[data-animation-state="completed"],
  .about-us-home p[data-animation-state="completed"] {
    animation-play-state: paused;
  }
  
.about-us-home hr {
    padding-top: 2px;
    /* padding-bottom: 1px; */
    padding-left: 12px;
    margin-left: 1.5rem;
    margin-right: 1050px;
    color: #9c6644 ;
    border: none;
    border-top: 5px solid #9c6644;
}

.about-us-section {
    background-color: #d4a37388;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end; /* Align items to the right */
    margin-bottom: 40px;
}
  
.about-us-box {
    padding-top: 5%;
    flex: 2;
    max-width: 25%; /* Adjust this value as needed */
    box-sizing: border-box;
    margin-bottom: 20px;
    text-align: right; /* Align text to the right */
    padding-right: 20px; /* Add some padding to the right */
}

.about-us-box img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; 
}

.about-us-box h3 {
    text-align: center;
    font-size: 1.5rem;
    color: #333;
}

.about-us-box p {
    text-align: center;
    font-size: 1rem;
    color: #5e3023;
}

.about-us-box h3,
.about-us-box p {
    margin: 20px; /* Remove default margins to ensure alignment */
}
  .about-us-box h3,
  .about-us-box p {
    text-align: left ;
    padding: 20px;
  }
  








----------------------------------------------
.about-us-container{
    background-color: #d4a373;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .about-us-home {
    font-size: 2.5em;
    padding-top: 5px;
    padding-left: 70px; 
    color: #333;
    animation: slideIn 1s ease-in-out;
    animation-play-state: running;
}

.about-us-home p {
    padding-top: 100px;
    padding-left: 70px;
    font-size: 1.2rem;
    padding-bottom: 5px;
    color: #333;
    animation: slideIn 1s ease-in-out;
    animation-play-state: running;
}

.about-us-home hr {
    padding-top: 2px;
    padding-left: 12px;
    margin-left: 1.5rem;
    margin-right: 1050px;
    color: #9c6644;
    border: none;
    border-top: 5px solid #9c6644;
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.about-us-section {
    background-color: #d4a37388;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-bottom: 40px;
}

.about-us-box {
    margin-top: 1rem;
    padding-top: 2%;
    flex: 2;
    max-width: 30%;
    box-sizing: border-box;
    margin-bottom: 20px;
    text-align: right;
    padding-right: 20px;
    animation: slideIn 1s ease-in-out;
    animation-play-state: running;
}

.about-us-box img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; 
}

.about-us-box h3,
.about-us-box p {
    margin: 20px;
    text-align: left;
}

/* Stop the animation after it runs once */
.about-us-home[data-animation-state="completed"],
.about-us-box[data-animation-state="completed"] {
    animation-play-state: paused;
}

  /* Alternate the arrangement of image and text in each box 
  .about-us-box:nth-child(even) img {
    order: 2; /* Image on the right for even boxes 
  }
  
  .about-us-box:nth-child(odd) h3,
  .about-us-box:nth-child(odd) p {
    order: 2; /* Text on the right for odd boxes 
  }
  


  -----------------------------------------
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #d4a37388;
    margin-top: 40px;
    padding: 20px;
}
.container .content{
    position: relative;
    width: 350px;
    padding: 40px;
    background-color: #ffe8d6;
    box-shadow: 0 5px 15px rgba(0,0 ,0 , .1 );
    border-radius: 4px;
    margin: 20px;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
}
.container .content .icon{
position: relative;
width: 80px;
height: 80px;
color: #fff;
background:#000;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
border-radius: 50%;
font-size: 40px;
font-weight: 700;
transition: 1s;

}
.container .content:nth-child(1) .icon{
box-shadow: 0 0 0 0 #fcd2a8;
background: #9c6644;
}
.container .content:nth-child(1):hover .icon{
    box-shadow: 0 0 0 400 #fcd2a8;

}
.container .content:nth-child(2) .icon{
    box-shadow: 0 0 0 0 #fcd2a8;
    background: #9c6644;
    }
.container .content:nth-child(2):hover .icon{
    box-shadow: 0 0 0 400 #7e5135;

}
.container .content:nth-child(3) .icon{
    box-shadow: 0 0 0 0 #fcd2a8;
    background: #9c6644;
    }
.container .content:nth-child(3):hover .icon{
    box-shadow: 0 0 0 400 #9c6644;

}
.container .content {
    position: relative;
    z-index: 1;
    transition: 0.5s;

}
.container .content::before{
    content: '';
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255,255,255,.2);
    z-index: 2;
    pointer-events: none;
}
.container .content:hover{
    color:#fcd2a8;
}
.container .content .h3{
    font-size: 20px;
    margin: 10px 0;
    padding: 0;

}
.container .content p{
    margin: 0;
    padding: 0;
}
a{
    display: inline-block;
    padding: 10px 20px;
    background: #fcd2a8;
    border-radius: 4px;
    text-decoration: none;
    color: #000;
    font-weight: 500;
    margin-top: 20px;
    box-shadow:  0 2px 5px rgba(0,0,0,.2);
}

----------------------------------------
<footer>
        <div class="about-us">
            <h3>About Us</h3>
            <p>Your About Us text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis..</p>
        </div>

    
        <div class="contact-info">
            <h3>Contact Information</h3>
            <!-- <p>123 Main Street, Cityville</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (555) 123-4567</p> -->
        </div>

        <!-- <div class="quick-links">
            <h3>Quick-links</h3>
            <nav>
                <div class="quick-links">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </div>
            </nav>   
      </div> -->
    </footer>

    <div class="copyright">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </div>

footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.about-us {
    max-width: 400px;
}

.quick-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.quick-links a {
    color: #fff;
    text-decoration: none;
    margin-right: 15px;
    display: block;
}

 .contact-info {
    max-width: 400px;
}
/*
.contact-info {
    flex: 1; /* Take up equal width 
    max-width: 400px;
    text-align: center;
} */

.contact-info h3{
    text-align: center;
}

.copyright {
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 10px;
}





















<!-- footer section -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Your About Us text goes here. Provide a brief description of your company or organization.</p>
            </div>

            <div class="contact-form">
                <h3>Contact Us</h3>
                <form>
                    <input type="text" placeholder="Your Name">
                    <input type="email" placeholder="Your Email">
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>

            <div class="social-links">
                <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>

            <div class="address">
                <h3>Visit Us</h3>
                <p>123 Main Street, Cityville</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1 (555) 123-4567</p>
            </div>
        </div>

        <div class="copyright">
            <p>&copy; 2024 Architecture Firm</p>
            <p>Powered by Architecture Firm</p>
        </div>
    </footer>





    footer {
    background-color: #333;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap; /* Allow items to wrap to the next line if there's not enough space */
}

.footer-section {
    flex: 1; /* Take up equal width */
    max-width: 400px;
    text-align: left;
    margin-bottom: 20px;
}

.footer-section h3 {
    color: #fff;
    margin-bottom: 10px;
}

.footer-section p {
    margin: 0;
    color: #ccc;
}

.contact-form {
    flex: 1; /* Take up equal width */
    max-width: 400px;
    text-align: left;
    margin-bottom: 20px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

.contact-form button {
    background-color: #fff;
    color: #333;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

.social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1; /* Take up equal width */
    max-width: 400px;
}

.social-links a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-size: 20px;
}

.copyright {
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 100%; /* Take up full width */
    box-sizing: border-box; /* Include padding and border in the width calculation */
}















--- whole css --------------------------------------------------------------------------
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    
    
}

header {
    background-color: #9c6644c7;
    color: #ffe8d6;
    padding: 6px;
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact-info {
    display: flex;
    align-items: center;
}

.phone-number {
    margin-left: 850px;
    margin-right: 15px; 
    color: #5e3023;
     font-size: 20px; 
     text-decoration: none;
    
}

.phone-number-color{
    color: #603307; 
    text-decoration: none;
}
.social-icons {
    display: flex;
    align-items: center;
}

.social-icons a {
    margin-right: 10px;
    color: #9c6644;
    text-decoration: none;
    font-size: 1.2em;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; 
    height: 40px;
    border-radius: 50%; 
    background-color: #333; 
}

.social-icons a:hover {
    color: #fcd2a8; 
}

/* Font Awesome icon styles */
.fa {
    
    padding: 0; 
    font-size: 20px; 
    width: 100%; 
    height: 100%; 
}

nav {
     background-color: #d4a37388;  
    padding: 10px;
    display: block;
    text-align: right;
    justify-content: space-between;
    align-items: center;
    /* margin-left: 600px; */
    
}

nav a {
    margin: 0px 20px;
    text-decoration: none;
    color: #333;
}
.home-page {
    height: 500px;
    padding-top: 1%;
margin: auto;
    /* width: 1300px; */
    /* border: 2px solid black ; */
    background-image: url('../images/homepageextra.jpg')  ; 
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat

 /* padding: 12px; */
}

.home-page h1 {
    font-size: 4.5em;
    padding-top: 5px;
    padding-left: 70px; 
    color: #333 ;
    text-decoration: solid #333;
}
.home-page p{
    /* padding : top left right bottom */
    padding-top:100px ;
    padding-left: 70px;
    font-size: 1.2rem;
    padding-bottom: 5px;
    color:#333;

}
.home-page h1,
.home-page p,
.home-page .contact-button {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Animation on hover for home page */
body:hover .home-page h1,
body:hover .home-page p,
body:hover .home-page .contact-button {
  opacity: 1;
  transform: translateY(0);
}
.home-page hr{
    padding-top: 2px;
    /* padding-bottom: 1px; */
    padding-left: 12px;
    margin-left: 1.5rem;
    margin-right: 1050px;
    color: #9c6644 ;
    border: none;
    border-top: 5px solid #9c6644;
    

    
}
.contact-button {
    border:2px solid#fcd2a8;
    color: #333 ;
    font-size: 1.2rem;
    padding: 10px 20px;
    margin-left: 5.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease; 
    text-decoration: none;
    border-radius: 5px;
    margin-top: 2.5px;
    display: inline-block; 
    text-decoration: solid #333
    
}
.contact-button:hover {
    background-color: #d4a37388;
  }

  /* ----------------------------------------------------about us home---------------------------------------------------------- */
  @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.about-us-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.about-us-home,
.about-us-section,
.about-us-box {
    animation: fadeIn 1s ease-in-out;
    animation-play-state: running;
}

/* Stop the animation after it runs once */
.about-us-home[data-animation-state="completed"],
.about-us-section[data-animation-state="completed"],
.about-us-box[data-animation-state="completed"] {
    animation-play-state: paused;
}

.about-us-home {
    text-align: center;
}

.about-us-home p {
    font-size: 1.2rem;
    color: #333;
    margin-top: 20px;
}

.about-us-home hr {
    border: none;
    height: 5px;
    background-color: #9c6644;
    margin: 20px auto;
    width: 50%;
}

.about-us-home h1 {
    font-size: 3em;
    color: #333;
    margin-bottom: 20px;
}

.about-us-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #d4a37388;
    margin-top: 40px;
    padding: 20px;
}

.about-us-box {
    flex: 0 0 45%;
    box-sizing: border-box;
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;
}

.about-us-box img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
}

.about-us-box h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
}

.about-us-box p {
    font-size: 1rem;
    color: #5e3023;
    margin-bottom: 20px;
}

.About-button {
    align-items: center;
    display: inline-block;
    border:2px solid#fcd2a8;
    font-size: 1.2rem;
    padding: 10px 20px;
    margin-left: 1.5rem;
    color: #fcd2a8;
    cursor: pointer;
    text-decoration: solid #333;
    border-radius: 5px;
    margin-top: 2.5px;
    background-color: #333;
    transition: background-color 0.3s ease;

}

.About-button:hover {
    background-color: #7e5135;
}

.about-us-box .About-button{
    order: -1; /* Move the button to the left */
    margin-left: 230px; /* Add some margin for separation */

}

/* ------------------------------------------------------------------------------------------------------------------------ */

.service-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    align-items: center;
}
.services {
    text-align: center;
}

.services p {
    font-size: 1.2rem;
    color: #333;
    margin-top: 20px;
}

.services hr {
    border: none;
    height: 5px;
    background-color: #9c6644;
    margin: 20px auto;
    width: 50%;
}

.services h1 {
    font-size: 3em;
    color: #333;
    margin-bottom: 20px;
}


.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #d4a37388;
    margin-top: 40px;
    padding: 20px;
}

.container .content {
    width: 350px;
    padding: 40px;
    background-color: #ffe8d6;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin: 20px;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
    transition: 0.5s;
}

/* .container .content .icon {
    position: relative;
    width: 80px;
    height: 80px;
    color: #fff;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    font-size: 40px;
    font-weight: 700;
    transition: 1s;
} */

.container .content:nth-child(1) .icon {
    box-shadow: 0 0 0 0 #fcd2a8;
    background: #9c6644;
}

.container .content:nth-child(1):hover .icon {
    box-shadow: 0 0 0 400 #fcd2a8;
}

.container .content:nth-child(2) .icon {
    box-shadow: 0 0 0 0 #fcd2a8;
    background: #9c6644;
}

.container .content:nth-child(2):hover .icon {
    box-shadow: 0 0 0 400 #7e5135;
}

.container .content:nth-child(3) .icon {
    box-shadow: 0 0 0 0 #fcd2a8;
    background: #9c6644;
}

.container .content:nth-child(3):hover .icon {
    box-shadow: 0 0 0 400 #9c6644;
}

.container .content:hover {
    color: #fcd2a8;
}

.container .content .h3 {
    font-size: 20px;
    margin: 10px 0;
    padding: 0;
}

.container .content p {
    margin: 0;
    padding: 0;
}

.content a {
    display: inline-block;
    padding: 10px 20px;
    background: #fcd2a8;
    border-radius: 4px;
    text-decoration: none;
    color: #000;
    font-weight: 500;
    margin-top: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
/* ----------------------------------------------------------------- */
footer {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: auto;
    padding: 50px;
    background: #333; /* Change the background color as needed */
    color: #fff; /* Change the text color as needed */
}

footer .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
}

footer .sec {
    margin-bottom: 20px;
}

footer .sec h2 {
    position: relative;
    color: #fff; /* Change the heading color as needed */
    font-weight: 600;
    margin-bottom: 15px;
}

footer .sec p {
    color: #ddd; /* Change the paragraph text color as needed */
}

footer .sci {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 30px);
    gap: 10px;
}

footer .sci li a {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #fff; /* Change the social icon background color as needed */
    display: grid;
    align-content: center;
    justify-content: center;
    text-decoration: none;
}

footer .sci li a i {
    color: #333; /* Change the social icon color as needed */
    font-size: 20px;
}

footer .quicklinkes ul {
    padding: 0;
}

footer .quicklinkes ul li {
    list-style: none;
}

footer .quicklinkes ul li a {
    color: #ddd; /* Change the quick links text color as needed */
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;
}

footer .contact ul {
    padding: 0;
}

footer .contact ul li {
    list-style: none;
}

footer .contact ul li span {
    color: #ddd; /* Change the contact info color as needed */
    font-size: 18px;
}

footer .contact ul li a {
    color: #ddd; /* Change the contact info color as needed */
    text-decoration: none;
}

.copyrightText {
    width: 100%;
    background: #333; /* Change the background color as needed */
    padding: 20px;
    text-align: center;
    color: #ddd; /* Change the text color as needed */
    border: 1px solid rgba(255, 255, 255, 0.15);
}



-------------------------------------------------------------
 padding-right: 200px;
    margin-right: 50px;
    background: #333; /* Change the background color as needed */
    padding: 20px;
    text-align: center;
   background-size: cover;
    color: #ddd; /* Change the text color as needed */
    border: 1px solid rgba(255, 255, 255, 0.15);
