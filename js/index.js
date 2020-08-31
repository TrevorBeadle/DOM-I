const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Create selectors to point your data into elements

// Nav element selectors
const nav = document.querySelector('nav');
const navItem1 = nav.querySelector('a:nth-of-type(1)');
const navItem2 = nav.querySelector('a:nth-of-type(2)');
const navItem3 = nav.querySelector('a:nth-of-type(3)');
const navItem4 = nav.querySelector('a:nth-of-type(4)');
const navItem5 = nav.querySelector('a:nth-of-type(5)');
const navItem6 = nav.querySelector('a:nth-of-type(6)');

// Nav updates
navItem1.textContent = siteContent['nav']['nav-item-1'];
navItem2.textContent = siteContent['nav']['nav-item-2'];
navItem3.textContent = siteContent['nav']['nav-item-3'];
navItem4.textContent = siteContent['nav']['nav-item-4'];
navItem5.textContent = siteContent['nav']['nav-item-5'];
navItem6.textContent = siteContent['nav']['nav-item-6'];

navItem1.style.color = 'green';
navItem2.style.color = 'green';
navItem3.style.color = 'green';
navItem4.style.color = 'green';
navItem5.style.color = 'green';
navItem6.style.color = 'green';




// cta element selectors
const cta = document.querySelector('.cta');
const ctaH1 = cta.querySelector('h1');
const ctaButton = cta.querySelector('button');
const ctaImg = cta.querySelector('img');

// cta element updates
ctaH1.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];


// main-content selectors
const mainContent = document.querySelector('.main-content');
const mainContentImg = mainContent.querySelector('img');
const topContent = mainContent.querySelector('.top-content');

// features section selectors
const features = topContent.querySelector('.text-content:nth-of-type(1)');
const featuresH4 = features.querySelector('h4');
const featuresP = features.querySelector('p');

//features section updates
featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresP.textContent = siteContent['main-content']['features-content'];
mainContentImg.src = siteContent['main-content']['middle-img-src'];


//about section selectors
const about = topContent.querySelector('.text-content:nth-of-type(2)');
const aboutH4 = about.querySelector('h4');
const aboutP = about.querySelector('p');

//about section updates
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutP.textContent = siteContent['main-content']['about-content'];


// bottom-content selectors
const bottomContent = mainContent.querySelector('.bottom-content');
const services = bottomContent.querySelector('.text-content:nth-of-type(1)');
const product = bottomContent.querySelector('.text-content:nth-of-type(2)');
const vision = bottomContent.querySelector('.text-content:nth-of-type(3)');

const servicesH4 = services.querySelector('h4');
const servicesP = services.querySelector('p');

const productH4 = product.querySelector('h4');
const productP = product.querySelector('p');

const visionH4 = vision.querySelector('h4');
const visionP = vision.querySelector('p');


// bottom-content updates
servicesH4.textContent = siteContent['main-content']['services-h4'];
servicesP.textContent = siteContent['main-content']['services-content'];

productH4.textContent = siteContent['main-content']['product-h4'];
productP.textContent = siteContent['main-content']['product-content'];

visionH4.textContent = siteContent['main-content']['vision-h4'];
visionP.textContent = siteContent['main-content']['vision-content'];


// contact section selectors
const contact = document.querySelector('.contact');
const contactHeading = contact.querySelector('h4');
const address = contact.querySelector('p:nth-of-type(1)');
const phone = contact.querySelector('p:nth-of-type(2)');
const email = contact.querySelector('p:nth-of-type(3)');


// contact section updates
contactHeading.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];


// footer section selectors
const footer = document.querySelector('footer');
const footerContent = footer.querySelector('p');

//footer section updates
footerContent.textContent = siteContent['footer']['copyright'];