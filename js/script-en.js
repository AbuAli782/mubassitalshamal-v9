// ==============================
// تهيئة AOS (Animate On Scroll)
// تهيئة مكتبة AOS للرسوم المتحركة
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// تأثير الكتابة المتحركة للعنوان الرئيسي - English Version
function typeWriter() {
    const titleElement = document.querySelector('.hero-title-enhanced');
    if (!titleElement) return;
    
    const fullText = 'We Supply Your Project with What It Needs… When You Need It';
    const parts = [
        { text: 'We Supply ', delay: 100 },
        { text: 'Your Project ', delay: 100 },
        { text: 'with What It Needs… ', delay: 100 },
        { text: 'When You ', delay: 100 },
        { text: 'Need It', delay: 100 }
    ];
    
    titleElement.innerHTML = '';
    let partIndex = 0;
    let charIndex = 0;
    let isInTag = false;
    let currentHTML = '';
    
    function typeNextChar() {
        if (partIndex >= parts.length) {
            // إعادة الكتابة بعد توقف
            setTimeout(() => {
                titleElement.innerHTML = '';
                partIndex = 0;
                charIndex = 0;
                currentHTML = '';
                typeNextChar();
            }, 3000);
            return;
        }
        
        const currentPart = parts[partIndex].text;
        
        if (charIndex < currentPart.length) {
            const char = currentPart[charIndex];
            
            // تتبع الوسوم HTML
            if (char === '<') isInTag = true;
            if (char === '>') isInTag = false;
            
            currentHTML += char;
            titleElement.innerHTML = currentHTML + '<span class="typing-cursor"></span>';
            charIndex++;
            
            // سرعة الكتابة
            const speed = isInTag ? 0 : parts[partIndex].delay;
            setTimeout(typeNextChar, speed);
        } else {
            partIndex++;
            charIndex = 0;
            setTimeout(typeNextChar, 200);
        }
    }
    
    // بدء الكتابة بعد ثانية واحدة
    setTimeout(typeNextChar, 1000);
}

// تشغيل تأثير الكتابة عند تحميل الصفحة
window.addEventListener('load', typeWriter);

// ==============================
// زر العودة للأعلى
// ==============================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==============================
// الشريط العلوي الديناميكي
// ==============================
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

// تأثير الشريط عند التمرير
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// القائمة المتحركة للجوال
mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// إغلاق القائمة عند النقر على رابط
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// تفعيل الرابط النشط حسب القسم المعروض
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==============================
// سلايدر المشاريع المحسّن
// ==============================
const projectSliderEnhanced = document.querySelector('.projects-slider-enhanced');

if (projectSliderEnhanced) {
    const slidesEnhanced = document.querySelectorAll('.project-slide-enhanced');
    const prevBtnEnhanced = document.querySelector('.prev-btn-enhanced');
    const nextBtnEnhanced = document.querySelector('.next-btn-enhanced');
    const indicators = document.querySelectorAll('.slider-indicator');
    let currentSlideEnhanced = 0;
    let autoPlayInterval;

    function showSlideEnhanced(index) {
        // إزالة active من جميع الشرائح
        slidesEnhanced.forEach((slide) => {
            slide.classList.remove('active');
        });

        // إزالة active من جميع المؤشرات
        indicators.forEach((indicator) => {
            indicator.classList.remove('active');
        });

        // حساب الشريحة الحالية
        currentSlideEnhanced = (index + slidesEnhanced.length) % slidesEnhanced.length;
        
        // إضافة active للشريحة والمؤشر الحالي
        slidesEnhanced[currentSlideEnhanced].classList.add('active');
        if (indicators[currentSlideEnhanced]) {
            indicators[currentSlideEnhanced].classList.add('active');
        }

        // إعادة تشغيل شريط التقدم
        const progressBar = slidesEnhanced[currentSlideEnhanced].querySelector('.project-progress-bar');
        if (progressBar) {
            progressBar.style.animation = 'none';
            setTimeout(() => {
                progressBar.style.animation = 'progressBar 5s linear';
            }, 10);
        }
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            showSlideEnhanced(currentSlideEnhanced + 1);
        }, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // أزرار التحكم
    if (prevBtnEnhanced) {
        prevBtnEnhanced.addEventListener('click', () => {
            stopAutoPlay();
            showSlideEnhanced(currentSlideEnhanced - 1);
            startAutoPlay();
        });
    }

    if (nextBtnEnhanced) {
        nextBtnEnhanced.addEventListener('click', () => {
            stopAutoPlay();
            showSlideEnhanced(currentSlideEnhanced + 1);
            startAutoPlay();
        });
    }

    // المؤشرات
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoPlay();
            showSlideEnhanced(index);
            startAutoPlay();
        });
    });

    // إيقاف التشغيل التلقائي عند التمرير
    projectSliderEnhanced.addEventListener('mouseenter', stopAutoPlay);
    projectSliderEnhanced.addEventListener('mouseleave', startAutoPlay);

    // بدء التشغيل التلقائي
    startAutoPlay();
    showSlideEnhanced(0);
}

// ==============================
// سلايدر المشاريع القديم (للتوافق)
// ==============================
const projectSlides = document.querySelectorAll('.project-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    projectSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    if (index >= projectSlides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = projectSlides.length - 1;
    } else {
        currentSlide = index;
    }
    
    if (projectSlides[currentSlide]) {
        projectSlides[currentSlide].classList.add('active');
    }
}

if (prevBtn && nextBtn && projectSlides.length > 0) {
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // تغيير تلقائي كل 5 ثواني
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// ==============================
// سلايدر آراء العملاء (تحريك تلقائي)
// ==============================
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0.7';
        card.style.transform = 'scale(0.95)';
    });
    
    if (testimonialCards[currentTestimonial]) {
        testimonialCards[currentTestimonial].style.opacity = '1';
        testimonialCards[currentTestimonial].style.transform = 'scale(1)';
    }
    
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

if (testimonialCards.length > 0) {
    rotateTestimonials();
    setInterval(rotateTestimonials, 4000);
}

// ==============================
// نموذج التواصل - English Version
// ==============================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // الحصول على البيانات
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // إنشاء رسالة واتساب
        const whatsappMessage = `
Hello, I am ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
        `;
        
        const whatsappUrl = `https://wa.me/966503729380?text=${encodeURIComponent(whatsappMessage)}`;
        
        // فتح واتساب
        window.open(whatsappUrl, '_blank');
        
        // إظهار رسالة نجاح
        alert('Thank you for contacting us! You will be redirected to WhatsApp to send your message.');
        
        // إعادة تعيين النموذج
        contactForm.reset();
    });
}

// ==============================
// تأثيرات إضافية للأزرار
// ==============================
const allButtons = document.querySelectorAll('.btn, .product-btn');

allButtons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ==============================
// عداد الإحصائيات المتحرك
// ==============================
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// تفعيل العداد عند الوصول للقسم
const aboutSection = document.querySelector('.about');
let counterStarted = false;

if (aboutSection) {
    window.addEventListener('scroll', () => {
        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > sectionTop + (sectionHeight / 2) && !counterStarted) {
            statNumbers.forEach(animateCounter);
            counterStarted = true;
        }
    });
}

// ==============================
// تأثير Parallax للخلفية
// ==============================
const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });
}

// ==============================
// تحسين التمرير السلس
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==============================
// مؤشر التحميل
// ==============================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // إخفاء مؤشر التحميل إذا كان موجوداً
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// ==============================
// تأثيرات الماوس على البطاقات
// ==============================
const cards = document.querySelectorAll('.product-card, .service-card, .testimonial-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==============================
// كشف نوع الجهاز
// ==============================
function detectDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.classList.add('mobile-device');
    } else {
        document.body.classList.add('desktop-device');
    }
}

detectDevice();

// ==============================
// معالجة الصور الكسولة (Lazy Loading)
// ==============================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==============================
// رسالة ترحيب في Console - English Version
// ==============================
console.log(`
%c Mubassit Al-Shamal - Saudi Building Materials Complex
%c Developed by a professional team
%c 📞 Contact: +966 50 372 9380
`,
'color: #2E4A62; font-size: 24px; font-weight: bold;',
'color: #F5A623; font-size: 16px;',
'color: #555555; font-size: 14px;'
);

// ==============================
// تحديث تلقائي للسنة في التذييل
// ==============================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

// ==============================
// إضافة تأثير للعناصر عند الظهور
// ==============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .service-card, .stat-item').forEach(el => {
    observer.observe(el);
});

// ==============================
// معالجة الأخطاء
// ==============================
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.message);
});

// ==============================
// تحسين الأداء - Debounce للتمرير
// ==============================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScroll = debounce(() => {
    // عمليات التمرير المحسنة
}, 100);

window.addEventListener('scroll', debouncedScroll);

console.log('✅ All scripts loaded successfully!');
