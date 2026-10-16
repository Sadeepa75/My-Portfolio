// Certificate data with 2 images per certificate
        const certificateData = {
            'web-dev': {
                title: 'Full Stack Web Development',
                description: 'Complete web development certification covering frontend and backend technologies',
                images: [
                    {
                        src: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                        desc: 'Frontend Development Certificate - HTML5, CSS3, JavaScript, React'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                        desc: 'Backend Development Certificate - Node.js, Express, MongoDB, REST APIs'
                    }
                ]
            },
            'react-dev': {
                title: 'Advanced React Development',
                description: 'Master React with hooks, context API, and advanced state management techniques',
                images: [
                    {
                        src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                        desc: 'React Fundamentals Certificate - Components, Props, State Management'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                        desc: 'Advanced React Certificate - Hooks, Context API, Performance Optimization'
                    }
                ]
            },
            'js-mastery': {
                title: 'JavaScript Mastery',
                description: 'Advanced JavaScript concepts and modern ES6+ features for professional development',
                images: [
                    {
                        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                        desc: 'JavaScript Basics Certificate - Variables, Functions, DOM Manipulation'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                        desc: 'Advanced JavaScript Certificate - ES6+, Async/Await, Design Patterns'
                    }
                ]
            }
        };

        // Show certificate modal
        function showCertificate(certId, title, description) {
            const modal = document.getElementById('certificateModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');
            
            const cert = certificateData[certId];
            
            if (cert) {
                modalTitle.textContent = title;
                
                let imagesHTML = '';
                cert.images.forEach((image, index) => {
                    imagesHTML += `
                        <div class="certificate-image">
                            <img src="${image.src}" alt="${title} Image ${index + 1}">
                            <p>${image.desc}</p>
                        </div>
                    `;
                });
                
                modalBody.innerHTML = imagesHTML;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        // Close certificate modal
        function closeCertificateModal() {
            const modal = document.getElementById('certificateModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('certificateModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeCertificateModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeCertificateModal();
            }
        });

        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            });
        });
        
        // Add shadow to navbar on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 10) {
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // Scroll animations
        function animateOnScroll() {
            const elements = document.querySelectorAll('.skill-category, .project-card, .certificate-card, .social-links a');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animate');
                }
            });
        }
        
        // Run animation check on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
        
        // Form submission
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });
        }