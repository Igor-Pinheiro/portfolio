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
        document.getElementById('about_title').textContent = translations[language].about_title;
        document.getElementById('about_title_2').textContent = translations[language].about_title_2;
        document.getElementById('about_text').textContent = translations[language].about_text;
        document.getElementById('about_text_2').textContent = translations[language].about_text_2;
        document.getElementById('about_text_3').textContent = translations[language].about_text_3;
        document.getElementById('skills_title').textContent = translations[language].skills_title;
        document.getElementById('skills_api').textContent = translations[language].skills_api;
        document.getElementById('skills_soap').textContent = translations[language].skills_soap;
        document.getElementById('skills_algorithms').textContent = translations[language].skills_algorithms;
    } else {
        console.error('Idioma não encontrado:', language);
    }
}

// Chama a função para carregar as traduções ao carregar a página
window.onload = loadTranslations;