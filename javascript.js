// Função para exibir a seção selecionada e esconder as outras
function showSection(sectionId) {
    // Primeiro, escondemos todas as seções
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Agora, mostramos a seção que foi selecionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Exibindo a primeira seção (Michael Jordan) ao carregar a página
window.onload = function() {
    showSection('jordan');
};
