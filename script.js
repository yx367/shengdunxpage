// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');
    const fadeElements = document.querySelectorAll('.benefit-card, .tutorial-card, #mistakes-card, #plan-card');

    // 1. 导航栏滚动固定
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-fixed');
        } else {
            navbar.classList.remove('navbar-fixed');
        }

        // 2. 显示/隐藏回到顶部按钮
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
        }

        // 3. 滚动渐入动画
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('fade-in');
            }
        });
    });

    // 4. 回到顶部功能
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. 导航链接平滑跳转
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 初始化触发一次滚动检查（确保首屏元素显示动画）
    window.dispatchEvent(new Event('scroll'));
});