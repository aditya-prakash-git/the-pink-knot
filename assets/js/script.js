'use strict';



/**
 * add event on element
 */

const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnelem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnelem(navbarLinks, "click", closeNavbar);



/**
 * header active on scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnelem(window, "scroll", activeHeader);



/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
}

addEventOnelem(tabCard, "click", navigateTab);


// Modal Content Data
const modalContent = {
  'Handmade Quality': {
    title: 'Handmade Quality',
    content: `
      <p class="modal-text">At The Pink Knots, every single bracelet is a labor of love. Anahita carefully selects each bead, thread, and charm to ensure the highest quality in every piece.</p>
      
      <ul class="modal-features">
        <li>Premium cotton threads and durable elastic cords</li>
        <li>High-quality beads that won't fade or chip</li>
        <li>Hand-tied knots for extra security and longevity</li>
        <li>Carefully inspected before packaging</li>
        <li>Water-resistant materials for everyday wear</li>
      </ul>
      
      <div class="modal-highlight">
        <h4>Quality Promise</h4>
        <p>If your bracelet breaks within 30 days of normal wear, we'll replace it for free! We stand behind our young artist's work.</p>
      </div>
      
      <p class="modal-text">Each bracelet takes 30-45 minutes to complete, with Anahita's full attention dedicated to making sure every detail is perfect. The result? A piece of jewelry that's not just beautiful, but built to last.</p>
    `
  },
  
  'Personal Touch': {
    title: 'Personal Touch',
    content: `
      <p class="modal-text">What makes The Pink Knots special isn't just the bracelets – it's the heart and soul that 10-year-old Anahita puts into every single piece.</p>
      
      <ul class="modal-features">
        <li>Each bracelet comes with a handwritten note from Anahita</li>
        <li>Personal story cards explaining the inspiration behind each design</li>
        <li>Custom color combinations based on your preferences</li>
        <li>Special packaging designed by Anahita herself</li>
        <li>Photo of Anahita crafting your specific bracelet (on request)</li>
      </ul>
      
      <div class="modal-highlight">
        <h4>Meet the Artist</h4>
        <p>Anahita started The Pink Knots when she was 9, inspired by friendship bracelets she made at summer camp. Now she's turning her passion into a business to save for her college fund!</p>
      </div>
      
      <p class="modal-text">When you wear a Pink Knots bracelet, you're not just wearing jewelry – you're carrying a piece of a young girl's dreams and creativity with you everywhere you go.</p>
    `
  },
  
  'Custom Designs': {
    title: 'Custom Designs',
    content: `
      <p class="modal-text">Every person is unique, and your bracelet should be too! Anahita loves creating one-of-a-kind pieces that reflect your personal style and personality.</p>
      
      <ul class="modal-features">
        <li>Choose from over 50 different colors and patterns</li>
        <li>Add personalized charms (initials, birthstones, symbols)</li>
        <li>Custom sizing for the perfect fit</li>
        <li>Special occasion designs (birthdays, graduations, holidays)</li>
        <li>Matching sets for best friends or family</li>
      </ul>
      
      <div class="modal-highlight">
        <h4>How It Works</h4>
        <p>Simply message us with your color preferences, wrist size, and any special requests. Anahita will create a design sketch and send it to you for approval before crafting!</p>
      </div>
      
      <p class="modal-text">Custom orders typically take 3-5 days to complete, and there's no extra charge for personalization – because making you happy makes Anahita happy!</p>
    `
  },
  
  'Affordable Luxury': {
    title: 'Affordable Luxury',
    content: `
      <p class="modal-text">Beautiful, high-quality jewelry doesn't have to cost a fortune. The Pink Knots proves that luxury is about craftsmanship and care, not price tags.</p>
      
      <ul class="modal-features">
        <li>Most bracelets priced between $8-15</li>
        <li>Custom designs starting at just $12</li>
        <li>Free shipping on orders over $25</li>
        <li>Bundle discounts for multiple bracelets</li>
        <li>Special pricing for bulk orders (parties, events)</li>
      </ul>
      
      <div class="modal-highlight">
        <h4>Value Beyond Price</h4>
        <p>When you buy from The Pink Knots, you're getting handmade quality at mass-market prices, plus the satisfaction of supporting a young entrepreneur's dreams.</p>
      </div>
      
      <p class="modal-text">Compare our prices to similar handmade bracelets at craft fairs or boutiques – you'll find that The Pink Knots offers exceptional value without compromising on quality or uniqueness.</p>
    `
  },
  
  'Supporting Dreams': {
    title: 'Supporting Dreams',
    content: `
      <p class="modal-text">When you purchase from The Pink Knots, you're doing more than buying jewelry – you're investing in a young girl's future and encouraging the next generation of entrepreneurs.</p>
      
      <ul class="modal-features">
        <li>100% of profits go to Anahita's college fund</li>
        <li>Teaching valuable business skills to a young entrepreneur</li>
        <li>Supporting creativity and artistic expression</li>
        <li>Encouraging female entrepreneurship from an early age</li>
        <li>Building confidence and independence in a young person</li>
      </ul>
      
      <div class="modal-highlight">
        <h4>Anahita's Goals</h4>
        <p>Anahita dreams of becoming a fashion designer and using her business skills to help other young girls start their own creative ventures. Your purchase helps make that dream possible!</p>
      </div>
      
      <p class="modal-text">Every bracelet sold brings Anahita one step closer to her goals. You're not just a customer – you're a mentor and supporter of young dreams taking flight.</p>
    `
  },
  
  'Perfect Gifts': {
    title: 'Perfect Gifts',
    content: `
      <p class="modal-text">Looking for a meaningful gift that shows you care? Pink Knots bracelets are perfect for any occasion and any age, with a special story that makes them unforgettable.</p>
      
      <ul class="modal-features">
        <li>Beautiful gift packaging included with every order</li>
        <li>Personalized gift messages available</li>
        <li>Perfect for birthdays, holidays, or "just because"</li>
        <li>Suitable for ages 5 to 95</li>
        <li>Friendship bracelet sets for best friends</li>
      </ul>
      
      <div class="modal-highlight">
        <h4>Gift With Purpose</h4>
        <p>Every gift comes with Anahita's story card, explaining how the recipient is helping support a young entrepreneur's dreams. It's a gift that keeps on giving!</p>
      </div>
      
      <p class="modal-text">Recipients love knowing they're wearing something made by a talented young artist, and gift-givers love supporting meaningful causes. It's a win-win that creates lasting memories.</p>
    `
  }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create modal HTML if it doesn't exist
  if (!document.querySelector('.modal-overlay')) {
    const modalHTML = `
      <div class="modal-overlay" id="benefitModal">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title" id="modalTitle"></h3>
            <button class="modal-close" id="modalClose">&times;</button>
          </div>
          <div class="modal-content" id="modalContent"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

const modal = document.getElementById('benefitModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    
    // Modal content for each benefit
    const contentData = {
        'Handmade Quality': {
            title: 'Handmade Quality',
            content: `
                <p class="modal-text">At The Pink Knots, every single bracelet is a labor of love. Anahita carefully selects each bead, thread, and charm to ensure the highest quality in every piece.</p>
                
                <ul class="modal-features">
                    <li>Premium cotton threads and durable elastic cords</li>
                    <li>High-quality beads that won't fade or chip</li>
                    <li>Hand-tied knots for extra security and longevity</li>
                    <li>Carefully inspected before packaging</li>
                    <li>Water-resistant materials for everyday wear</li>
                </ul>
                
                <div class="modal-highlight">
                    <h4>Quality Promise</h4>
                    <p>If your bracelet breaks within 30 days of normal wear, we'll replace it for free! We stand behind our young artist's work.</p>
                </div>
            `
        },
        'Personal Touch': {
            title: 'Personal Touch',
            content: `
                <p class="modal-text">What makes The Pink Knots special isn't just the bracelets – it's the heart and soul that 10-year-old Anahita puts into every single piece.</p>
                
                <ul class="modal-features">
                    <li>Each bracelet comes with a handwritten note from Anahita</li>
                    <li>Personal story cards explaining the inspiration behind each design</li>
                    <li>Custom color combinations based on your preferences</li>
                    <li>Special packaging designed by Anahita herself</li>
                </ul>
                
                <div class="modal-highlight">
                    <h4>Meet the Artist</h4>
                    <p>Anahita started The Pink Knots when she was 9, inspired by friendship bracelets she made at summer camp.</p>
                </div>
            `
        },
        'Custom Designs': {
            title: 'Custom Designs',
            content: `
                <p class="modal-text">Every person is unique, and your bracelet should be too! Anahita loves creating one-of-a-kind pieces that reflect your personal style.</p>
                
                <ul class="modal-features">
                    <li>Choose from over 50 different colors and patterns</li>
                    <li>Add personalized charms (initials, birthstones, symbols)</li>
                    <li>Custom sizing for the perfect fit</li>
                    <li>Special occasion designs (birthdays, graduations, holidays)</li>
                </ul>
                
                <div class="modal-highlight">
                    <h4>How It Works</h4>
                    <p>Simply message us with your preferences, and Anahita will create a design sketch for approval before crafting!</p>
                </div>
            `
        },
        'Affordable Luxury': {
            title: 'Affordable Luxury',
            content: `
                <p class="modal-text">Beautiful, high-quality jewelry doesn't have to cost a fortune. The Pink Knots proves that luxury is about craftsmanship and care, not price tags.</p>
                
                <ul class="modal-features">
                    <li>Most bracelets priced between $8-15</li>
                    <li>Custom designs starting at just $12</li>
                    <li>Free shipping on orders over $25</li>
                    <li>Bundle discounts for multiple bracelets</li>
                </ul>
                
                <div class="modal-highlight">
                    <h4>Value Beyond Price</h4>
                    <p>Handmade quality at mass-market prices, plus supporting a young entrepreneur's dreams.</p>
                </div>
            `
        },
        'Supporting Dreams': {
            title: 'Supporting Dreams',
            content: `
                <p class="modal-text">When you purchase from The Pink Knots, you're investing in a young girl's future and encouraging the next generation of entrepreneurs.</p>
                
                <ul class="modal-features">
                    <li>100% of profits go to Anahita's college fund</li>
                    <li>Teaching valuable business skills to a young entrepreneur</li>
                    <li>Supporting creativity and artistic expression</li>
                    <li>Encouraging female entrepreneurship from an early age</li>
                </ul>
                
                <div class="modal-highlight">
                    <h4>Anahita's Goals</h4>
                    <p>Anahita dreams of becoming a fashion designer and helping other young girls start their own creative ventures.</p>
                </div>
            `
        },
        'Perfect Gifts': {
            title: 'Perfect Gifts',
            content: `
                <p class="modal-text">Looking for a meaningful gift? Pink Knots bracelets are perfect for any occasion, with a special story that makes them unforgettable.</p>
                
                <ul class="modal-features">
                    <li>Beautiful gift packaging included with every order</li>
                    <li>Personalized gift messages available</li>
                    <li>Perfect for birthdays, holidays, or "just because"</li>
                    <li>Suitable for ages 5 to 95</li>
                </ul>
                
                <div class="modal-highlight">
                    <h4>Gift With Purpose</h4>
                    <p>Every gift comes with Anahita's story card, explaining how they're helping support a young entrepreneur's dreams.</p>
                </div>
            `
        }
    };
    
    // Function to open modal
    function openModal(contentKey) {
        const content = contentData[contentKey];
        if (content) {
            modalTitle.textContent = content.title;
            modalContent.innerHTML = content.content;
            modal.style.display = 'flex';
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        }
    }
    
    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    
    // Add click events to all "Read more" buttons
    const readMoreButtons = document.querySelectorAll('.btn-link');
    
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the card title
            const card = button.closest('.benefits-card');
            if (card) {
                const titleElement = card.querySelector('.card-title');
                if (titleElement) {
                    const cardTitle = titleElement.textContent.trim();
                    openModal(cardTitle);
                }
            }
        });
    });
    
    // Close modal when X is clicked
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // ======================
    // TRAILERS SLIDER FUNCTIONALITY (if trailers section exists)
    // ======================
    
    const trailersSlider = document.querySelector('[data-trailers-slider]');
    const trailersContainer = document.querySelector('[data-trailers-container]');
    const prevBtn = document.querySelector('[data-trailers-prev]');
    const nextBtn = document.querySelector('[data-trailers-next]');
    
    if (trailersSlider && trailersContainer && prevBtn && nextBtn) {
        let currentIndex = 0;
        const trailerItems = document.querySelectorAll('.trailer-item');
        const totalItems = trailerItems.length;
        
        // Video thumbnail click functionality
        document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const videoWrapper = this.parentElement;
                const videoId = videoWrapper.getAttribute('data-video-id');
                const iframe = videoWrapper.querySelector('.trailer-video');
                
                // Set the iframe source and show it
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                iframe.classList.remove('hidden');
                
                // Hide the thumbnail
                this.style.display = 'none';
            });
        });
        
        // Calculate item width including gap
        function getItemWidth() {
            const gap = 30;
            const itemWidth = trailerItems[0] ? trailerItems[0].offsetWidth : 0;
            return itemWidth + gap;
        }
        
        // Update slider position
        function updateSliderPosition() {
            const itemWidth = getItemWidth();
            const translateX = -currentIndex * itemWidth;
            trailersContainer.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentIndex >= totalItems - 1 ? '0.5' : '1';
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= totalItems - 1;
        }
        
        // Previous button functionality
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });
        
        // Next button functionality
        nextBtn.addEventListener('click', function() {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
                updateSliderPosition();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            updateSliderPosition();
        });
        
        // Initialize
        updateSliderPosition();
        
        // Add smooth transition to container
        trailersContainer.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Touch/swipe support for mobile
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        trailersContainer.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
            trailersContainer.style.transition = 'none';
        });
        
        trailersContainer.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            e.preventDefault();
            currentX = e.touches[0].clientX;
            const diffX = currentX - startX;
            const itemWidth = getItemWidth();
            const translateX = -currentIndex * itemWidth + diffX;
            trailersContainer.style.transform = `translateX(${translateX}px)`;
        });
        
        trailersContainer.addEventListener('touchend', function() {
            if (!isDragging) return;
            isDragging = false;
            
            const diffX = currentX - startX;
            const threshold = 50;
            
            trailersContainer.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            
            if (diffX > threshold && currentIndex > 0) {
                currentIndex--;
            } else if (diffX < -threshold && currentIndex < totalItems - 1) {
                currentIndex++;
            }
            
            updateSliderPosition();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            } else if (e.key === 'ArrowRight' && currentIndex < totalItems - 1) {
                currentIndex++;
                updateSliderPosition();
            }
        });
    }
    
    // ======================
    // NAVBAR FUNCTIONALITY (if needed)
    // ======================
    
    // Mobile menu toggle
    const navToggle = document.querySelector('[data-nav-toggle]');
    const navbar = document.querySelector('[data-navbar]');
    
    if (navToggle && navbar) {
        navToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('[data-nav-link]');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbar) {
                navbar.classList.remove('active');
            }
        });
    });
    
    // ======================
    // SMOOTH SCROLLING (if needed)
    // ======================
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ======================
    // ADDITIONAL UTILITIES
    // ======================
    
    // Add loading class to images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
    
    console.log('All scripts loaded successfully!');
});


// ========= Bracelet Gallery Lightbox =========
// ========= Bracelet Gallery Lightbox =========
// ========= Bracelet Gallery Lightbox (robust) =========
window.addEventListener('DOMContentLoaded', () => {
  // Ensure a single lightbox exists (create if missing)
  let lightbox = document.querySelector('.br-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'br-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
      <button class="br-lightbox-close" aria-label="Close image">&times;</button>
      <div class="br-lightbox-stage">
        <img src="" alt="" class="br-lightbox-img" />
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('.br-lightbox-img');
  const closeBtn = lightbox.querySelector('.br-lightbox-close');

  let lastFocusedEl = null;

  function openLightbox(src, alt) {
    if (!src) return;

    // Preload first to avoid blank flash
    const pre = new Image();
    pre.onload = () => {
      lastFocusedEl = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = alt || 'Bracelet image enlarged';
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('br-blur');
      closeBtn.focus();
      document.addEventListener('keydown', onKeydown);
    };
    pre.onerror = () => {
      console.warn('[br-lightbox] Failed to load image:', src);
      // Still open modal to indicate action happened
      lastFocusedEl = document.activeElement;
      lightboxImg.removeAttribute('src');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('br-blur');
      closeBtn.focus();
      document.addEventListener('keydown', onKeydown);
    };
    pre.src = src;
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('br-blur');
    lightboxImg.removeAttribute('src');
    document.removeEventListener('keydown', onKeydown);
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      lastFocusedEl.focus();
    }
  }

  function onKeydown(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); } // tiny focus trap
  }

  // Backdrop click to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  closeBtn.addEventListener('click', closeLightbox);

  // Event delegation for all current/future thumbs
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.br-gallery-thumb');
    if (!btn) return;

    const imgEl = btn.querySelector('img');
    const src =
      btn.getAttribute('data-br-img') ||
      (imgEl && (imgEl.currentSrc || imgEl.src));

    const alt = (imgEl && imgEl.alt) || 'Bracelet image';

    openLightbox(src, alt);
  });
});
