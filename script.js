// Aguarda o carregamento do DOM (boa prática)
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Atualizar ano automaticamente no footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Fechar menu mobile ao clicar em um link (Melhoria de UX para Bootstrap)
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    // Verifica se o menu existe antes de aplicar a lógica
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
        
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { 
                // Apenas fecha se o menu estiver aberto (classe 'show')
                if(menuToggle.classList.contains('show')) {
                    bsCollapse.toggle();
                }
            });
        });
    }
});