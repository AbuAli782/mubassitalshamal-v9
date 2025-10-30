// إصلاح أزرار واتساب في قسم المطورين - حل قوي
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 بدء إصلاح أزرار واتساب...');
    
    // الحصول على جميع أزرار واتساب
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn-dev');
    
    whatsappButtons.forEach((button, index) => {
        const href = button.getAttribute('href');
        console.log(`زر ${index + 1}: ${href}`);
        
        // إزالة جميع الأحداث السابقة
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // إضافة الأنماط
        newButton.style.cssText = `
            pointer-events: all !important;
            cursor: pointer !important;
            z-index: 9999 !important;
            position: relative !important;
            display: flex !important;
        `;
        
        // إضافة حدث النقر الجديد
        newButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            const url = this.getAttribute('href');
            console.log('🚀 فتح واتساب:', url);
            
            if (url) {
                // محاولة فتح الرابط بطرق متعددة
                try {
                    window.open(url, '_blank', 'noopener,noreferrer');
                } catch (err) {
                    console.error('خطأ في فتح الرابط:', err);
                    window.location.href = url;
                }
            }
            
            return false;
        }, true);
        
        // إضافة حدث عند الضغط بالماوس
        newButton.addEventListener('mousedown', function(e) {
            e.stopPropagation();
        }, true);
        
        // إضافة حدث عند رفع الماوس
        newButton.addEventListener('mouseup', function(e) {
            e.stopPropagation();
        }, true);
    });
    
    console.log('✅ WhatsApp buttons fixed:', whatsappButtons.length);
    
    // إزالة pointer-events من العناصر التي قد تتداخل
    const glowElements = document.querySelectorAll('.card-glow, .image-glow-ring');
    glowElements.forEach(el => {
        el.style.pointerEvents = 'none';
    });
    
    console.log('✅ تم تعطيل التداخلات من', glowElements.length, 'عنصر');
});
