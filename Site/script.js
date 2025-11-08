// Espera o conteúdo da página carregar para executar os scripts
document.addEventListener('DOMContentLoaded', (event) => {
    
    // 1. Substitui os ícones do Feather
    try {
        feather.replace();
    } catch (e) {
        console.error("Erro ao carregar Feather Icons: ", e);
    }

    // 2. Active nav link highlighting
    const sections = document.querySelectorAll('section');
    // Seleciona links do menu desktop E mobile
    const navLinks = document.querySelectorAll('.nav-desktop a, .mobile-menu a'); 

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                
                // Offset de 150px para ativar o link um pouco antes
                if (pageYOffset >= (sectionTop - 150)) { 
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    // 3. Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            form.reset();
        });
    }

    // 4. Funcionalidade do Menu Mobile
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    // Seleciona os links dentro do menu mobile para fechar ao clicar
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    if (menuButton && mobileMenu) {
        // Abre/Fecha o menu ao clicar no botão
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
        });

        // Fecha o menu mobile ao clicar em um link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
            });
        });
    }
});