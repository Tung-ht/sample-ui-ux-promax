// Language translations
const translations = {
    en: {
        // Navigation
        'Trang chủ': 'Home',
        'Dịch vụ': 'Services',
        'Dự án': 'Portfolio',
        'Bảng giá': 'Pricing',
        'Liên hệ': 'Contact',
        
        // Hero Section
        'Giải Pháp Website Chuyên Nghiệp Cho Doanh Nghiệp': 'Professional Website Solutions for Your Business',
        'Chúng tôi tạo ra các website hiện đại, responsive giúp doanh nghiệp phát triển trực tuyến. Giao hàng nhanh, giá cả hợp lý, chất lượng xuất sắc.': 'We create modern, responsive websites that help your business grow online. Fast delivery, reasonable prices, and outstanding quality.',
        'Bắt đầu ngay': 'Get Started',
        'Xem dự án': 'View Portfolio',
        '200+ Dự án': '200+ Projects',
        '150+ Khách hàng': '150+ Happy Clients',
        'Đánh giá 5 sao': '5-Star Rating',
        'Thiết kế Responsive': 'Responsive Design',
        'Tải Nhanh': 'Fast Loading',
        'Bảo Mật': 'Secure',
        
        // Services
        'Dịch Vụ Của Chúng Tôi': 'Our Services',
        'Chúng tôi cung cấp giải pháp phát triển web toàn diện phù hợp với nhu cầu của bạn': 'We offer comprehensive web development solutions tailored to your needs',
        'Thiết Kế Web': 'Web Design',
        'Thiết kế UI/UX hiện đại, hấp dẫn thu hút khách hàng và nâng cao trải nghiệm người dùng': 'Modern, attractive UI/UX design that captivates your visitors and enhances user experience',
        'Phát Triển Web': 'Web Development',
        'Lập trình chuyên nghiệp với công nghệ mới nhất, tối ưu hiệu suất và SEO': 'Professional coding with latest technologies, optimized for performance and SEO',
        'Responsive Mobile': 'Mobile Responsive',
        'Hiển thị hoàn hảo trên mọi thiết bị - desktop, tablet và điện thoại': 'Perfect display on all devices - desktop, tablet, and mobile phones',
        'Website Thương Mại': 'E-Commerce',
        'Cửa hàng trực tuyến hoàn chỉnh với tích hợp thanh toán và quản lý kho': 'Complete online store with payment integration and inventory management',
        'Tối Ưu SEO': 'SEO Optimization',
        'Cải thiện thứ hạng tìm kiếm giúp khách hàng dễ dàng tìm thấy doanh nghiệp': 'Improve search rankings to help customers easily find your business',
        'Hỗ Trợ & Bảo Trì': 'Support & Maintenance',
        'Hỗ trợ kỹ thuật 24/7 và bảo trì định kỳ đảm bảo hoạt động ổn định': '24/7 technical support and regular maintenance to ensure smooth operation',
        
        // Portfolio
        'Dự Án Của Chúng Tôi': 'Our Portfolio',
        'Khám phá các dự án gần đây và thấy chất lượng công việc của chúng tôi': 'Explore our recent projects and see the quality of our work',
        'Xem Demo': 'View Live',
        'Bảng Điều Khiển Phân Tích SaaS': 'SaaS Analytics Dashboard',
        'Nền tảng phân tích hiện đại với trực quan hóa dữ liệu thời gian thực': 'Modern analytics platform with real-time data visualization',
        'Nền Tảng Giáo Dục': 'Educational Platform',
        'Nền tảng học trực tuyến tương tác cho giáo dục hiện đại': 'Interactive online learning platform for modern education',
        'Dịch Vụ Chăm Sóc Thú Cưng': 'Pet Grooming Service',
        'Website đẹp cho dịch vụ chăm sóc thú cưng với hệ thống đặt lịch': 'Beautiful website for pet grooming service with booking system',
        'Nền Tảng AI Chatbot': 'AI Chatbot Platform',
        'Giải pháp chatbot AI tiên tiến cho doanh nghiệp': 'Advanced AI-powered chatbot solution for businesses',
        'Thương Mại Điện Tử Cao Cấp': 'Luxury E-Commerce',
        'Cửa hàng trực tuyến sang trọng cho sản phẩm và thương hiệu cao cấp': 'Elegant online store for luxury products and brands',
        'Fintech & Tiền Mã Hóa': 'Fintech & Crypto',
        'Nền tảng an toàn cho giao dịch tiền mã hóa và tài chính': 'Secure platform for cryptocurrency trading and finance',
        
        // Pricing
        'Bảng Giá Dịch Vụ': 'Pricing Plans',
        'Chọn gói phù hợp với nhu cầu doanh nghiệp của bạn': 'Choose the perfect plan for your business needs',
        'Cơ Bản': 'Starter',
        'Hoàn hảo cho doanh nghiệp nhỏ': 'Perfect for small businesses',
        'Tối đa 5 trang': 'Up to 5 pages',
        'Thiết kế responsive': 'Responsive design',
        'SEO cơ bản': 'Basic SEO',
        'Form liên hệ': 'Contact form',
        'Hỗ trợ 1 tháng': '1 month support',
        'Tính năng thương mại': 'E-commerce features',
        'CMS tùy chỉnh': 'Custom CMS',
        'Bắt đầu': 'Get Started',
        'Chuyên Nghiệp': 'Professional',
        'Phổ biến nhất': 'Most Popular',
        'Tốt nhất cho doanh nghiệp phát triển': 'Best for growing businesses',
        'Tối đa 15 trang': 'Up to 15 pages',
        'Thiết kế cao cấp': 'Premium design',
        'SEO nâng cao': 'Advanced SEO',
        'Tính năng tương tác': 'Interactive features',
        'Hỗ trợ 3 tháng': '3 months support',
        'Thương mại cơ bản': 'Basic e-commerce',
        'Quản lý nội dung': 'Content management',
        'Doanh Nghiệp': 'Enterprise',
        'Cho dự án quy mô lớn': 'For large-scale projects',
        'Không giới hạn trang': 'Unlimited pages',
        'Thiết kế tùy chỉnh': 'Custom design',
        'SEO cao cấp': 'Premium SEO',
        'Tính năng nâng cao': 'Advanced features',
        'Hỗ trợ 12 tháng': '12 months support',
        'Thương mại đầy đủ': 'Full e-commerce',
        'CMS & API tùy chỉnh': 'Custom CMS & API',
        
        // Testimonials
        'Khách Hàng Nói Gì': 'What Our Clients Say',
        'Phản hồi thật từ khách hàng hài lòng': 'Real feedback from satisfied customers',
        'EZpage đã tạo ra một website xuất sắc vượt mong đợi. Đội ngũ chuyên nghiệp, giao hàng đúng hạn, hỗ trợ tuyệt vời!': 'EZpage delivered an exceptional website that exceeded our expectations. Professional team, timely delivery, and excellent support!',
        'Nguyễn Văn A': 'Nguyen Van A',
        'CEO, TechCorp Vietnam': 'CEO, TechCorp Vietnam',
        'Công việc tuyệt vời! Website thương mại của chúng tôi đẹp và hoạt động hoàn hảo. Doanh số tăng 150% chỉ sau 3 tháng!': 'Amazing work! Our e-commerce site is beautiful and functions perfectly. Sales increased by 150% in just 3 months!',
        'Trần Thị B': 'Tran Thi B',
        'Founder, Fashion Store Online': 'Founder, Fashion Store Online',
        'Rất đáng giới thiệu! EZpage hiểu tầm nhìn của chúng tôi và tạo ra website thể hiện hoàn hảo thương hiệu. Giá trị tuyệt vời cho tiền bỏ ra.': 'Highly recommended! EZpage understood our vision and created a website that perfectly represents our brand. Excellent value for money.',
        'Lê Văn C': 'Le Van C',
        'Giám Đốc Marketing, EduTech Solutions': 'Marketing Director, EduTech Solutions',
        
        // Contact
        'Yêu Cầu Báo Giá': 'Request a Quote',
        'Hãy thảo luận về dự án của bạn và bắt đầu ngay hôm nay': "Let's discuss your project and get started today",
        'Email': 'Email Us',
        'Điện Thoại': 'Call Us',
        'Địa Chỉ': 'Visit Us',
        'Tp. Hồ Chí Minh, Việt Nam': 'Ho Chi Minh City, Vietnam',
        'Họ và Tên *': 'Full Name *',
        'Địa Chỉ Email *': 'Email Address *',
        'Loại Website *': 'Website Type *',
        'Chọn loại website': 'Select website type',
        'Website Doanh Nghiệp': 'Corporate Website',
        'Cửa Hàng Thương Mại': 'E-Commerce Store',
        'Portfolio/Cá Nhân': 'Portfolio/Personal',
        'Blog/Tin Tức': 'Blog/News',
        'Landing Page': 'Landing Page',
        'Giải Pháp Tùy Chỉnh': 'Custom Solution',
        'Yêu Cầu Chi Tiết *': 'Project Details *',
        'Gửi Yêu Cầu': 'Send Request',
        
        // Footer
        'Giải pháp phát triển web chuyên nghiệp cho sự thành công doanh nghiệp': 'Professional web development solutions for your business success',
        'Liên Kết': 'Quick Links',
        'Thiết kế Web': 'Web Design',
        'Thương mại điện tử': 'E-Commerce',
        'Dịch vụ SEO': 'SEO Services',
        'Đăng Ký': 'Newsletter',
        'Đăng ký để nhận tin tức mới nhất': 'Subscribe to get latest updates',
        'Bảo lưu mọi quyền.': 'All rights reserved.'
    }
};

// Current language state
let currentLanguage = 'vi';

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const langToggle = document.getElementById('langToggle');
const currentLangSpan = document.getElementById('currentLang');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const navbar = document.getElementById('navbar');

// Mobile Menu Toggle
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Language Switcher
langToggle?.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'vi' ? 'en' : 'vi';
    currentLangSpan.textContent = currentLanguage.toUpperCase();
    updateLanguage();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
});

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-vi]');
    
    elements.forEach(element => {
        const text = currentLanguage === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-vi');
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.tagName === 'OPTION') {
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });
    
    // Update form placeholders separately
    updateFormPlaceholders();
}

function updateFormPlaceholders() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    
    if (currentLanguage === 'en') {
        if (nameInput) nameInput.placeholder = 'John Doe';
        if (emailInput) emailInput.placeholder = 'email@example.com';
        if (messageTextarea) messageTextarea.placeholder = 'Tell us about your project...';
    } else {
        if (nameInput) nameInput.placeholder = 'Nguyễn Văn A';
        if (emailInput) emailInput.placeholder = 'email@example.com';
        if (messageTextarea) messageTextarea.placeholder = 'Mô tả chi tiết về dự án của bạn...';
    }
}

// Contact Form Submission
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.websiteType || !data.message) {
        showFormMessage('error', currentLanguage === 'en' 
            ? 'Please fill in all required fields.' 
            : 'Vui lòng điền đầy đủ các trường bắt buộc.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('error', currentLanguage === 'en' 
            ? 'Please enter a valid email address.' 
            : 'Vui lòng nhập địa chỉ email hợp lệ.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('span');
    const originalText = btnText.textContent;
    
    btnText.textContent = currentLanguage === 'en' ? 'Sending...' : 'Đang gửi...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showFormMessage('success', currentLanguage === 'en' 
            ? 'Thank you! Your request has been sent successfully. We will contact you soon.' 
            : 'Cảm ơn bạn! Yêu cầu của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ với bạn sớm.');
        
        contactForm.reset();
        btnText.textContent = originalText;
        submitBtn.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 1500);
});

function showFormMessage(type, message) {
    formMessage.className = `form-message ${type}`;
    formMessage.textContent = message;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .pricing-card, .testimonial-card'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Portfolio iframe interaction
document.querySelectorAll('.portfolio-preview iframe').forEach(iframe => {
    const parent = iframe.closest('.portfolio-item');
    
    parent?.addEventListener('mouseenter', () => {
        iframe.style.pointerEvents = 'none';
    });
    
    parent?.addEventListener('mouseleave', () => {
        iframe.style.pointerEvents = 'none';
    });
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    if (email) {
        alert(currentLanguage === 'en' 
            ? 'Thank you for subscribing to our newsletter!' 
            : 'Cảm ơn bạn đã đăng ký nhận bản tin!');
        newsletterForm.reset();
    }
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.classList.contains('loading') && this.tagName !== 'BUTTON') {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear && !footerYear.textContent.includes(currentYear)) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// Preload images and optimize performance
window.addEventListener('load', () => {
    // Remove any loading states
    document.body.classList.add('loaded');
    
    // Lazy load portfolio iframes
    const iframes = document.querySelectorAll('iframe[loading="lazy"]');
    const iframeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                if (!iframe.src) {
                    iframe.src = iframe.getAttribute('data-src');
                }
                iframeObserver.unobserve(iframe);
            }
        });
    });
    
    iframes.forEach(iframe => {
        iframeObserver.observe(iframe);
    });
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// Focus management for accessibility
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector('.nav-menu');

document.addEventListener('keydown', (e) => {
    if (!modal?.classList.contains('active')) return;
    
    const firstFocusable = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusable = focusableContent[focusableContent.length - 1];
    
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }
});

console.log('🚀 EZpage website loaded successfully!');
console.log('💻 Mobile-first, responsive, and optimized for performance.');
