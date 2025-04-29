document.addEventListener('DOMContentLoaded', function() {
    // Menú responsive (mantenemos esto igual)
    const toggler = document.getElementById('navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
    
    toggler.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navbarNav.classList.remove('active');
            }
        });
    });
    
    // Slider mejorado con control de velocidad
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;
    const slideCount = slides.length;
    let slideInterval;
    
    // Configuración de velocidad (en milisegundos)
    const slideDelay = 8000; // 8 segundos (puedes ajustar este valor)
    const transitionSpeed = 600; // Velocidad de transición en ms
    
    // Aplicamos la velocidad de transición al CSS dinámicamente
    slider.style.transition = `transform ${transitionSpeed}ms ease-in-out`;
    
    // Función para mover el slider
    function goToSlide(index) {
        currentIndex = (index + slideCount) % slideCount; // Asegura índice válido
        const translateX = -currentIndex * 100;
        slider.style.transform = `translateX(${translateX}%)`;
        
        // Actualizar dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Función para avanzar al siguiente slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Iniciar el slider automático
    function startSlider() {
        slideInterval = setInterval(nextSlide, slideDelay);
    }
    
    // Reiniciar el temporizador
    function resetTimer() {
        clearInterval(slideInterval);
        startSlider();
    }
    
    // Eventos para los dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            goToSlide(slideIndex);
            resetTimer();
        });
    });
    
    // Iniciar slider
    goToSlide(0); // Mostrar primer slide inmediatamente
    startSlider();
    
    // Pausar slider al interactuar
    const sliderWrapper = document.querySelector('.slider-wrapper');
    
    sliderWrapper.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderWrapper.addEventListener('mouseleave', () => {
        resetTimer();
    });
    
    // Pausar slider al tocar en móvil
    sliderWrapper.addEventListener('touchstart', () => {
        clearInterval(slideInterval);
    });
    
    sliderWrapper.addEventListener('touchend', () => {
        resetTimer();
    });
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    console.log('Formulario enviado:', formData);
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    
    // Resetear formulario
    this.reset();
});

// Resto del código para el menú mobile (se mantiene igual)