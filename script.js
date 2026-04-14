document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Navigation Toggle --- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    /* --- Sticky Navbar --- */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- Collections Filtering Logic --- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                productItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'flex'; // our items are flex columns
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    /* --- Contact Form Simulation --- */
    const contactForm = document.getElementById('contact-form-sim');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect name to personalize optional redirect
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            
            // Alert nicely
            alert(`Thank you, ${name}! For immediate and quick assistance, you will be redirected to our WhatsApp.`);
            
            // Prepare prefilled whatsapp redirect
            const waNumber = "917794931504";
            const text = encodeURIComponent(`Hi Naari_The_Studio, I am ${name}. ${message ? `My message: ${message}` : 'I would like to know more about your collections.'}`);
            window.location.href = `https://wa.me/${waNumber}?text=${text}`;
        });
    }
});
