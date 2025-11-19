// ============================================
// UNIVERSAL HAMBURGER MENU FUNCTIONALITY
// Works across all pages
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeHamburgerMenu();
    initializeDateTime();
});

// ============================================
// HAMBURGER MENU INITIALIZATION
// ============================================

function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Check if elements exist
    if (!hamburger || !mobileNav || !overlay) {
        console.warn('Hamburger menu elements not found');
        return;
    }
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when overlay is clicked
    overlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Close menu when any navigation link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Close menu when Escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Close menu if window is resized to desktop size
            if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
                closeMenu();
            }
        }, 250);
    });
}

// Toggle menu open/close
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('menu-open');
    } else {
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
    }
}

// Close menu
function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    if (hamburger && mobileNav && overlay) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
    }
}

// ============================================
// DATE & TIME FUNCTIONALITY
// ============================================

function initializeDateTime() {
    const timeElement = document.getElementById('currentTime');
    const dateElement = document.getElementById('currentDate');
    
    // Only run if elements exist on the page
    if (timeElement && dateElement) {
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }
}

function updateDateTime() {
    const now = new Date();
    
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const timeElement = document.getElementById('currentTime');
    const dateElement = document.getElementById('currentDate');
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-ZA', timeOptions);
    }
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-ZA', dateOptions);
    }
}

// For use in other scripts if needed
window.closeMenu = closeMenu;
window.toggleMenu = toggleMenu;
// Function toggleMenu() in your script block:
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    // Toggles the 'active' class which the CSS uses
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    

}
// ============================================
// UNIVERSAL HAMBURGER MENU FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeHamburgerMenu();
});

function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    if (!hamburger || !mobileNav || !overlay) {
        console.warn('Hamburger menu elements not found');
        return;
    }
    
    // Toggle menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close on overlay click
    overlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Close on link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close on window resize to desktop
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
                closeMenu();
            }
        }, 250);
    });
}

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    if (hamburger && mobileNav && overlay) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Make functions globally accessible
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
// ============================================
// UNIVERSAL HAMBURGER MENU - ALL PAGES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeHamburgerMenu();
});

function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Check if elements exist
    if (!hamburger) {
        console.warn('Hamburger button not found');
        return;
    }
    
    if (!mobileNav) {
        console.warn('Mobile nav not found');
        return;
    }
    
    if (!overlay) {
        console.warn('Overlay not found');
        return;
    }
    
    console.log('Hamburger menu initialized successfully');
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Hamburger clicked');
        toggleMenu();
    });
    
    // Close menu when overlay is clicked
    overlay.addEventListener('click', function() {
        console.log('Overlay clicked');
        closeMenu();
    });
    
    // Close menu when any navigation link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Nav link clicked');
            closeMenu();
        });
    });
    
    // Close menu when Escape key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            console.log('Escape key pressed');
            closeMenu();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
                closeMenu();
            }
        }, 250);
    });
}

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileNav.classList.contains('active')) {
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    } else {
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    
    if (hamburger && mobileNav && overlay) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
}

// Make functions globally accessible
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
  document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM loaded - initializing hamburger menu');
            
            // Get elements
            const hamburger = document.getElementById('hamburger');
            const mobileNav = document.getElementById('mobileNav');
            const overlay = document.getElementById('overlay');
            const mobileLinks = document.querySelectorAll('.mobile-nav a');
            const body = document.body;

            // Check if elements exist
            if (!hamburger || !mobileNav || !overlay) {
                console.error('Required elements not found!');
                return;
            }

            console.log('Elements found successfully');

            // Toggle menu function
            function toggleMenu() {
                console.log('Toggle menu clicked');
                hamburger.classList.toggle('active');
                mobileNav.classList.toggle('active');
                overlay.classList.toggle('active');
                body.classList.toggle('menu-open');
            }

            // Close menu function
            function closeMenu() {
                console.log('Closing menu');
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('menu-open');
            }

            // Hamburger click event
            hamburger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleMenu();
            });

            // Overlay click event
            overlay.addEventListener('click', function() {
                closeMenu();
            });

            // Mobile link click events
            mobileLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    closeMenu();
                });
            });

            // Close on ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeMenu();
                }
            });

            // Close on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    closeMenu();
                }
            });

            console.log('Hamburger menu initialized successfully');
        });
        // Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    
    // Check if elements exist
    if (!hamburger || !mobileNav || !overlay) {
        console.error('Hamburger menu elements not found!');
        return;
    }
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    function closeMenu() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
    }
    
    // Hamburger click event
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Overlay click event
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking on links (optional)
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});
// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Elements
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Search Elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    // Time Elements
    const currentTimeElement = document.getElementById('current-time');
    const currentDateElement = document.getElementById('current-date');
    const liveTimeElement = document.getElementById('live-time');
    const liveDateElement = document.getElementById('live-date');
    
    // ============================================
    // HAMBURGER MENU FUNCTIONS
    // ============================================
    
    function toggleMenu() {
        const isActive = hamburger.classList.contains('active');
        
        // Toggle classes
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Update aria-expanded for accessibility
        hamburger.setAttribute('aria-expanded', !isActive);
        
        console.log('Menu toggled. Active:', !isActive);
    }
    
    function closeMenu() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
    }
    
    // Hamburger click event
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Overlay click event
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking on mobile nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            
            // Close menu first
            closeMenu();
            
            // Then navigate after a short delay for smooth transition
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    // ============================================
    // REAL-TIME CLOCK FUNCTIONALITY
    // ============================================
    
    function updateTime() {
        const now = new Date();
        
        // Time formatting
        const timeOptions = { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: true 
        };
        
        // Date formatting
        const dateOptions = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        const currentTime = now.toLocaleTimeString('en-US', timeOptions);
        const currentDate = now.toLocaleDateString('en-US', dateOptions);
        
        // Update all time elements
        if (currentTimeElement) currentTimeElement.textContent = currentTime;
        if (currentDateElement) currentDateElement.textContent = currentDate;
        if (liveTimeElement) liveTimeElement.textContent = currentTime;
        if (liveDateElement) liveDateElement.textContent = currentDate;
    }
    
    // Initialize and update time every second
    updateTime();
    setInterval(updateTime, 1000);
    
    // ============================================
    // SEARCH FUNCTIONALITY
    // ============================================
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm) {
            // Simple search implementation - you can replace with your actual search logic
            console.log('Searching for:', searchTerm);
            
            // Highlight search term in page content (basic implementation)
            highlightSearchTerm(searchTerm);
            
            // Clear search input
            searchInput.value = '';
            
            // Show search results (you can implement this based on your needs)
            alert(`Searching for: ${searchTerm}`);
        } else {
            alert('Please enter a search term');
            searchInput.focus();
        }
    }
    
    // Search button click
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    // Search on Enter key
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Basic search highlight function
    function highlightSearchTerm(term) {
        // Remove previous highlights
        const previousHighlights = document.querySelectorAll('.highlight');
        previousHighlights.forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });
        
        // Skip if term is too short
        if (term.length < 2) return;
        
        // Highlight matching text in main content
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const nodes = [];
        let node;
        
        while (node = walker.nextNode()) {
            if (node.parentNode.nodeName !== 'SCRIPT' && 
                node.parentNode.nodeName !== 'STYLE' &&
                node.textContent.toLowerCase().includes(term.toLowerCase())) {
                nodes.push(node);
            }
        }
        
        nodes.forEach(node => {
            const span = document.createElement('span');
            span.className = 'highlight';
            span.style.backgroundColor = 'yellow';
            span.style.color = 'black';
            span.style.padding = '2px 4px';
            span.style.borderRadius = '3px';
            
            const text = node.textContent;
            const regex = new RegExp(term, 'gi');
            const newText = text.replace(regex, match => `<span class="highlight" style="background-color: yellow; color: black; padding: 2px 4px; border-radius: 3px;">${match}</span>`);
            
            if (node.parentNode) {
                node.parentNode.innerHTML = node.parentNode.innerHTML.replace(text, newText);
            }
        });
    }
    
    // ============================================
    // ADDITIONAL ENHANCEMENTS
    // ============================================
    
    // Smooth scrolling for anchor links
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
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Console log for debugging
    console.log('Website initialized successfully');
    console.log('Hamburger menu:', hamburger ? 'Found' : 'Not found');
    console.log('Mobile nav:', mobileNav ? 'Found' : 'Not found');
    console.log('Search functionality:', searchInput ? 'Ready' : 'Not found');
});

// ============================================
// ADDITIONAL GLOBAL FUNCTIONS
// ============================================

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}