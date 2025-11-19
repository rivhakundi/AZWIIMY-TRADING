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
// Hamburger Menu Functionality - Works across all pages
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all necessary elements
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Check if elements exist before adding event listeners
    if (!hamburger || !mobileNav || !overlay) {
        console.warn('Hamburger menu elements not found');
        return;
    }
    
    // Function to open menu
    function openMenu() {
        hamburger.classList.add('active');
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('menu-open');
    }
    
    // Function to close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
    }
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (hamburger.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Close menu when overlay is clicked
    overlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Close menu when a link is clicked (important for navigation)
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Close menu when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Ensure menu is closed when window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && hamburger.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Reset menu state on page load (important for browser back button)
    window.addEventListener('pageshow', function(event) {
        // Close menu if page is loaded from cache (back button)
        if (event.persisted) {
            closeMenu();
        }
    });
    
});

