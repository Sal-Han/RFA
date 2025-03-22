// معالجة نموذج التبرع
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('شكراً لتبرعك! سيتم تحويلك إلى صفحة الدفع...');
    // هنا يمكنك ربط بوابة دفع مثل PayPal أو Stripe
});

// تأثيرات إضافية (مثل زر العودة إلى الأعلى)
window.onscroll = function() {
    const btn = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});