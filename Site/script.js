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



    // 4. Funcionalidade do Menu Mobile
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    // Seleciona os links dentro do menu mobile para fechar ao clicar
    // Atualizado para NÃO fechar o menu ao clicar no toggle de dark mode
    const mobileMenuLinks = mobileMenu.querySelectorAll('a:not(.dark-mode-toggle-mobile)'); // <-- ATUALIZADO AQUI

    if (menuButton && mobileMenu) {
        // Abre/Fecha o menu ao clicar no botão
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
        });

        // Fecha o menu mobile ao clicar em um link (IGNORA O TOGGLE)
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
            });
        });
    }


    // 5. NOVA FUNCIONALIDADE - MODO ESCURO
    const desktopToggle = document.getElementById('dark-mode-toggle');
    const mobileToggle = document.getElementById('mobile-dark-mode-toggle');
    const body = document.body;
    const mobileToggleText = mobileToggle ? mobileToggle.querySelector('.toggle-text') : null;

    // Função para atualizar a UI (classe no body e texto do botão mobile)
    function updateDarkModeUI(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            if (mobileToggleText) mobileToggleText.textContent = "Desativar Modo Escuro";
        } else {
            body.classList.remove('dark-mode');
            if (mobileToggleText) mobileToggleText.textContent = "Ativar Modo Escuro";
        }
        // A troca de ícones (sol/lua) é feita automaticamente pelo CSS
    }

    // Função principal que alterna o modo
    function toggleDarkMode() {
        const isCurrentlyDark = body.classList.contains('dark-mode');
        if (isCurrentlyDark) {
            // Se estava escuro, vai para claro
            localStorage.setItem('theme', 'light');
            updateDarkModeUI(false);
        } else {
            // Se estava claro, vai para escuro
            localStorage.setItem('theme', 'dark');
            updateDarkModeUI(true);
        }
    }

    // --- LÓGICA DE CARREGAMENTO INICIAL DO TEMA ---

    // 1. Verifica o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // 2. Verifica a preferência do sistema
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    let isDarkMode = false; // Começa como 'light' por padrão
    
    if (savedTheme === 'dark') {
        isDarkMode = true; // Tema salvo é dark
    } else if (savedTheme === 'light') {
        isDarkMode = false; // Tema salvo é light
    } else if (prefersDark) {
        // Se não tiver nada salvo, usa a preferência do sistema
        isDarkMode = true;
    }
    
    // 3. Aplica o tema na carga inicial da página
    updateDarkModeUI(isDarkMode);
    
    // 4. Adiciona os listeners de clique aos botões
    if (desktopToggle) {
        desktopToggle.addEventListener('click', toggleDarkMode);
    }
    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o link de navegar para #
            toggleDarkMode();
            // Não precisamos fechar o menu mobile aqui,
            // pois o usuário pode querer apenas trocar o tema.
        });
    }

}); // Fim do DOMContentLoaded