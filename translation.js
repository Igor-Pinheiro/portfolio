// Variável para armazenar as traduções
let translations = {};

// Função para carregar as traduções
function loadTranslations() {
    fetch('translations.json')
        .then(response => response.json())
        .then(data => {
            translations = data; // Armazena as traduções na variável
            changeLanguage('pt'); // Define o idioma padrão como português
        })
        .catch(error => console.error('Erro ao carregar as traduções:', error));
}

// Função para trocar o idioma
function changeLanguage(language) {
    // Verifica se as traduções para o idioma selecionado existem
    if (translations[language]) {
        document.getElementById('greeting').textContent = translations[language].greeting;
        document.getElementById('description').textContent = translations[language].description;
    } else {
        console.error('Idioma não encontrado:', language);
    }
}

// Chama a função para carregar as traduções ao carregar a página
window.onload = loadTranslations;