// ==============================
// تأثيرات JavaScript متطورة للمنتجات
// ==============================

// تأثير تتبع الماوس ثلاثي الأبعاد متطور
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card-enhanced');
    
    productCards.forEach(card => {
        // تأثير تتبع الماوس 3D
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `
                translateY(-20px) 
                perspective(1000px)
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                scale(1.05)
            `;
            card.style.transition = 'none';
        });
        
        // إعادة التعيين السلسة عند مغادرة الماوس
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        });
        
        // تأثير النقر بالموجة المتطور
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'click-ripple';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
        
        // تأثير لمعان الجوانب
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
    
    // تأثير الجزيئات المتطاير (بدلاً من الشرارات المخفية)
    function createParticle(card) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        const x = Math.random() * 100;
        const y = 100 + Math.random() * 20;
        const duration = 2 + Math.random() * 2;
        const delay = Math.random() * 0.5;
        const size = 4 + Math.random() * 6;
        
        particle.style.left = x + '%';
        particle.style.bottom = '-20px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        
        card.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, (duration + delay) * 1000);
    }
    
    // إضافة جزيئات متطايرة عند التمرير
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createParticle(card), i * 200);
            }
        });
    });
    
    // تأثير الضوء اللامع المتتبع للماوس
    productCards.forEach(card => {
        const spotlight = document.createElement('div');
        spotlight.className = 'mouse-spotlight';
        card.appendChild(spotlight);
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            spotlight.style.left = x + 'px';
            spotlight.style.top = y + 'px';
            spotlight.style.opacity = '0.8';
        });
        
        card.addEventListener('mouseleave', () => {
            spotlight.style.opacity = '0';
        });
    });
    
    // تأثير الإطار المتوهج المتحرك
    productCards.forEach(card => {
        const glowBorder = document.createElement('div');
        glowBorder.className = 'glow-border';
        card.appendChild(glowBorder);
    });
    
    // تأثير الأرقام المتحركة المتطور
    const productNumbers = document.querySelectorAll('.product-number');
    
    productNumbers.forEach(number => {
        number.addEventListener('mouseenter', () => {
            number.style.animation = 'none';
            setTimeout(() => {
                number.style.animation = 'number-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            }, 10);
        });
    });
    
    // تأثير النبض المستمر للأرقام
    setInterval(() => {
        productNumbers.forEach((number, index) => {
            setTimeout(() => {
                number.style.animation = 'none';
                setTimeout(() => {
                    number.style.animation = 'number-pulse 0.5s ease';
                }, 10);
            }, index * 200);
        });
    }, 5000);
    
    // تأثير تموج الزر المحسن
    const productButtons = document.querySelectorAll('.product-btn-enhanced');
    
    productButtons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });
    });
    
    // تأثير متطور للشارات
    const badges = document.querySelectorAll('.product-badge');
    
    badges.forEach((badge, index) => {
        // نبض مستمر
        setInterval(() => {
            badge.style.animation = 'none';
            setTimeout(() => {
                badge.style.animation = 'badge-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            }, 10);
        }, 4000 + (index * 500));
        
        // تأثير التمرير
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.2) rotate(-5deg)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = '';
        });
    });
    
    // تأثير انتقال سلس ومتدرج عند الدخول للشاشة
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-visible');
                // تأثير متتالي للعناصر الداخلية
                const elements = entry.target.querySelectorAll('.product-image, .product-title-enhanced, .product-description-enhanced, .product-btn-enhanced');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    productCards.forEach((card, index) => {
        card.classList.add('card-hidden');
        card.style.animationDelay = (index * 0.1) + 's';
        observer.observe(card);
    });
    
    // تأثير حركة السحاب على الصور
    const images = document.querySelectorAll('.product-image');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) rotate(2deg)';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// CSS للتأثيرات الإضافية المتطورة
const style = document.createElement('style');
style.textContent = `
    .click-ripple {
        position: absolute;
        background: radial-gradient(circle, rgba(245, 166, 35, 0.6), rgba(255, 215, 0, 0.3), transparent);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-effect 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        pointer-events: none;
        z-index: 100;
    }
    
    @keyframes ripple-effect {
        to {
            transform: scale(3);
            opacity: 0;
        }
    }
    
    .floating-particle {
        position: absolute;
        background: radial-gradient(circle, #FFD700, #F5A623, transparent);
        border-radius: 50%;
        pointer-events: none;
        animation: particle-float 3s ease-out forwards;
        z-index: 50;
        box-shadow: 0 0 10px rgba(245, 166, 35, 0.6);
    }
    
    @keyframes particle-float {
        0% {
            transform: translateY(0) scale(0) rotate(0deg);
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        80% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-150px) scale(1) rotate(360deg);
            opacity: 0;
        }
    }
    
    .mouse-spotlight {
        position: absolute;
        width: 250px;
        height: 250px;
        background: radial-gradient(circle, rgba(245, 166, 35, 0.3), rgba(255, 215, 0, 0.15), transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
        opacity: 0;
        z-index: 1;
        filter: blur(20px);
    }
    
    .glow-border {
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        border-radius: 23px;
        background: linear-gradient(45deg, #F5A623, #FFD700, #F5A623, #FFD700);
        background-size: 300% 300%;
        opacity: 0;
        z-index: -1;
        filter: blur(15px);
        transition: opacity 0.5s ease;
        animation: glow-rotate 4s linear infinite;
        pointer-events: none;
    }
    
    @keyframes glow-rotate {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }
    
    .product-card-enhanced:hover .glow-border {
        opacity: 0.6;
    }
    
    @keyframes number-bounce {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.3) rotate(180deg); }
        100% { transform: scale(1) rotate(360deg); }
    }
    
    @keyframes number-pulse {
        0%, 100% { transform: scale(1); box-shadow: 0 8px 20px rgba(46, 74, 98, 0.4); }
        50% { transform: scale(1.15); box-shadow: 0 12px 30px rgba(245, 166, 35, 0.6); }
    }
    
    @keyframes badge-bounce {
        0% { transform: translateY(0) scale(1); }
        30% { transform: translateY(-10px) scale(1.15); }
        50% { transform: translateY(-5px) scale(1.1) rotate(-3deg); }
        70% { transform: translateY(-8px) scale(1.12) rotate(3deg); }
        100% { transform: translateY(0) scale(1); }
    }
    
    .card-hidden {
        opacity: 0;
        transform: translateY(80px) scale(0.85) rotateX(20deg);
        transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .card-visible {
        opacity: 1;
        transform: translateY(0) scale(1) rotateX(0deg);
    }
    
    /* تأثيرات إضافية للعناصر الداخلية */
    .product-image,
    .product-title-enhanced,
    .product-description-enhanced,
    .product-btn-enhanced {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .product-btn-enhanced {
        position: relative;
        overflow: hidden;
    }
    
    .product-btn-enhanced::after {
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
        border-radius: 50%;
        left: var(--mouse-x, 50%);
        top: var(--mouse-y, 50%);
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.5s ease;
        pointer-events: none;
    }
    
    .product-btn-enhanced:hover::after {
        transform: translate(-50%, -50%) scale(3);
    }
`;

document.head.appendChild(style);

console.log('✨ تأثيرات المنتجات الخرافية تم تحميلها بنجاح!');
