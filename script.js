class BurgerMenu {
    constructor() {
        this.burger = document.getElementById('burger');
        this.nav = document.getElementById('nav-adaptiv');
        this.navClose = document.getElementById('navClose');
        this.body = document.body;
        
        this.init();
    }
    
    init() {
        
        this.burger.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        
        document.querySelectorAll('.nav-adaptiv ul li a').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
        
        
        document.addEventListener('click', (e) => {
            if (this.nav.classList.contains('active') && 
                !this.nav.contains(e.target) && 
                !this.burger.contains(e.target)) {
                this.closeMenu();
            }
        });
        
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.nav.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        if (this.nav.classList.contains('active')) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.nav.classList.add('active');
        this.burger.classList.add('active');
        this.disableScroll();
    }
    
    closeMenu() {
        this.nav.classList.remove('active');
        this.burger.classList.remove('active');
        this.enableScroll();
    }
    
    disableScroll() {
        
        this.scrollPosition = window.pageYOffset;
        
        
        this.body.style.overflow = 'hidden';
        this.body.style.position = 'fixed';
        this.body.style.top = `-${this.scrollPosition}px`;
        this.body.style.width = '100%';
    }
    
    enableScroll() {
        
        this.body.style.overflow = '';
        this.body.style.position = '';
        this.body.style.top = '';
        this.body.style.width = '';
        
        
        window.scrollTo(0, this.scrollPosition);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new BurgerMenu();
});