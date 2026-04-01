// --- LÓGICA DE FUNDO PROGRESSIVO (BLUR-UP) ---
// Substitua estas URLs pelas suas imagens
const lowResUrl  = "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/Esquadra-compactado.jpg"; 
const highResUrl = "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/Esquadra.jpg";

const bgLayer = document.getElementById('bg-layer');

// 1. Aplica a imagem de baixa resolução imediatamente
bgLayer.style.backgroundImage = `url('${lowResUrl}')`;

// 2. Cria um objeto de imagem invisível para baixar a imagem pesada em 2º plano
const imgLoader = new Image();
imgLoader.src = highResUrl;

// 3. Quando a imagem grande terminar de baixar de acordo com a internet do usuário...
imgLoader.onload = () => {
    bgLayer.style.backgroundImage = `url('${highResUrl}')`;
    bgLayer.classList.remove('bg-low-res');
    bgLayer.classList.add('bg-high-res');
};

// --- 1. SEUS DADOS CENTRALIZADOS AQUI ---
const bancoDeLinks = {
    "trabalho": [
        { nome: "Bussola",    url: "http://bussola.mb/search?site=default_collection&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend&proxycustom=%3CHOME/%3E",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/bussola_redimensionado.jpg"},        
        { nome: "Sigad",    url: "https://prod.sigad.mar.mil.br/apps/mensagemAdministrativa/pesquisar-mensagens",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/supp.png"},
        { nome: "Zimbra",    url: "https://webmail.marinha.mil.br" },
        { nome: "Sigdem",    url: "https://clti-com3dn2.com3dn.mb/cpftza/aplica/sigdem20/cpftza.nsf/BuscaPesquisa?Openform",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/SiGDEMLogo.png"},
        { nome: "CPCE",    url: "http://www.cpce.mb/drupal/?q=file/lista-de-email",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/Brasao-novo-cpce.jpeg"},
        
        { nome: "Keep",    url: "https://keep.google.com",
         icone: "https://cdn-icons-png.flaticon.com/128/2991/2991161.png"},
        { nome: "Gemini",    url: "https://gemini.google.com/app?hl=pt-BR" },
        { nome: "ChatGPT",    url: "https://chatgpt.com" },
        { nome: "Copilot",    url: "https://copilot.microsoft.com" },
        { nome: "NotebookLM",    url: "https://notebooklm.google.com",
         icone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAKlh4D6yGleH-NKMlxKzAF7rZytqvFuEGQ&s"},

        { nome: "Agenda",    url: "https://docs.google.com/spreadsheets/d/124CF80u4dKXCYqwe1O6yfrbQ1Zi_xcntwnbzIbWOHlI/edit?pli=1&gid=1314647815#gid=1314647815",
         icone: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"},
        { nome: "Numerador",    url: "https://docs.google.com/spreadsheets/d/1ssF94spF_l9CE07gC23-MZ0SltHDhBWaJZGpHF0QyaU/edit?gid=421412529#gid=421412529",
         icone: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"},
        { nome: "PINP",    url: "https://docs.google.com/spreadsheets/d/16Vlf7_coBag6gkTlBMCQTMaa22h1_Jka-KnutLrBrjc/edit?usp=sharing",
         icone: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"},
        { nome: "EVT Náutico",    url: "https://docs.google.com/spreadsheets/d/17TG_Ta82CykZIHVzaZe_WhUX9lz7rCWijyEA_r8vuZ0/edit?gid=0#gid=0",
         icone: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"},
        { nome: "Ofícios",    url: "https://docs.google.com/spreadsheets/d/1tj0QfwoLQ42KimKdIWtTFyBvtyTL2uBcCVNOyQZVUIQ/edit?usp=sharing",
         icone: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"},
        { nome: "AFTA",    url: "https://docs.google.com/spreadsheets/d/1GnDE3mbJ7o_p_UZNMhqmFJuHYgdk_1AC71n2nUbIdbg/edit?gid=0#gid=0", 
         icone: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"},
        { nome: "Earth",    url: "https://earth.google.com/web" },
        { nome: "Pelando",    url: "https://www.pelando.com.br/busca/tablet" },

        { nome: "Calendário",    url: "https://calendar.google.com/calendar/u/0/r?pli=1",
         icone: "https://cdn-icons-png.flaticon.com/128/5968/5968499.png"},
        { nome: "Compartilha",    url: "https://www.compartilhamentomb.marinha.mil.br",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/compartilha.png"},
        { nome: "BONO",    url: "https://bono.marinha.mil.br/bono/index",
         icone: "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_of_the_Brazilian_Navy_%28symbol%29.svg"},
        { nome: "SisBol",    url: "https://www.dpm.mb/sisbol-externo",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/sisbol.jpg"},
        { nome: "Trigramas",    url: "http://www.ciaw.mb/drupal/sites/default/files/arquivoszipados/Lista%20de%20Trigramas.pdf",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/trigramas.png"},
        { nome: "Transparencia",    url: "https://portaldatransparencia.gov.br/servidores" },
        
        { nome: "MS Cloud",    url: "https://m365.cloud.microsoft/search" },
        
        { nome: "CRSM",      url: "https://com3dn.github.io/crsm/index.html",
         icone: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=128"},
        { nome: "Pesquisa Marítima",   url: "https://rimururrc.github.io/ope-mar/prompts.html",
         icone: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=128"},
        { nome: "Análise Crítica",     url: "https://github.com/rimururrc/MetAnPesq",
         icone: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://github.com&size=128"},
    ],
    "casa": [
        { nome: "Gmail",         url: "https://mail.google.com/mail/u/0/#inbox",
         icone: "https://cdn-icons-png.flaticon.com/128/5968/5968534.png"},
        { nome: "Calendário",    url: "https://calendar.google.com/calendar/u/0/r",
         icone: "https://cdn-icons-png.flaticon.com/128/5968/5968499.png"},
        { nome: "Tarefas",       url: "https://tasks.google.com",
         icone: "https://fonts.gstatic.com/s/i/productlogos/tasks/v10/192px.svg"}, 
        { nome: "Keep",          url: "https://keep.google.com/u/0/#home",
         icone: "https://cdn-icons-png.flaticon.com/128/2991/2991161.png"},
        { nome: "FutureTools",   url: "https://www.futuretools.io/" },
        { nome: "NotebookLM",    url: "https://notebooklm.google.com/",
         icone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAKlh4D6yGleH-NKMlxKzAF7rZytqvFuEGQ&s"},
        { nome: "Gemini",        url: "https://gemini.google.com/app?hl=pt-BR" },
        { nome: "ChatGPT",       url: "https://chatgpt.com/",
         icone: "https://img.icons8.com/?size=100&id=TUk7vxvtu6hX&format=png&color=000000"},
        { nome: "Copilot",       url: "https://copilot.microsoft.com/",
         icone: "https://img.icons8.com/?size=100&id=PxQoyT1s0uFh&format=png&color=000000"},
        { nome: "Gdrive",        url: "https://drive.google.com/drive/u/0/my-drive",
         icone: "https://img.icons8.com/?size=100&id=ya4CrqO7PgnY&format=png&color=000000"},
        { nome: "Microsoft 365", url: "https://m365.cloud.microsoft/apps/",
         icone: "https://img.icons8.com/?size=100&id=g7UKWvv49CoI&format=png&color=000000"},
        { nome: "SIGAA",         url: "https://si3.ufc.br/sigaa/verTelaLogin.do",
         icone: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtt5-DNknOSKYQKWcR3subKjzFrbHovCYUf9t0Jv9XvEdJXEAB-2nBJNgBsMcMs5diQ4jNOw6YeAhZDHkO8Mche9aMUVSWYV9zTX7NAgb-POr5X6_gu8eInqUWx37C9nz71ocK5ekMs98/s400/brasao.png"},
        { nome: "Servidores",    url: "https://portaldatransparencia.gov.br/servidores" },
        { nome: "Pelando",       url: "https://www.pelando.com.br/" },
        { nome: "Wise Up",       url: "https://online.wiseup.com/login?lang=pt" },
        { nome: "YouTube",       url: "https://www.youtube.com/" },
        { nome: "Compilador",    url: "https://onecompiler.com/" },
        { nome: "Gifhub",        url: "https://github.com/WillerVasques?tab=repositories" },
        { nome: "TopAI Tools",   url: "https://topai.tools/categories" },
        { nome: "Reddit",        url: "https://www.reddit.com/r/concursospublicos/" },
        { nome: "Mexilhar",      url: "https://mexilhar.blogspot.com/",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/icone-do-site-300x300.png"},
    ],
    "estudos": [
        { nome: "Aulas BB",      url: "https://www.direcaoconcursos.com.br" },
        { nome: "Jurisway",      url: "https://jurisway.org.br/",
         icone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbM1T-YP2HZQaLYY_lqtuGyY3ZI0CxFx8kTQ&s"},
        { nome: "Kultivi",       url: "https://kultivi.com/cursos/concursos" },
        { nome: "Gramática",     url: "https://www.novagramaticaonline.com/" },
        { nome: "Calcule Mais",  url: "https://calculemais.com.br/" },
        { nome: "IOB Concursos", url: "https://www.youtube.com/@IOBconcursos/playlists" },
        { nome: "Anna’s Archive", url: "https://annas-archive.li/search?index=&lang=pt" },
        { nome: "WeLib", url: "https://pt.welib.org/" },
    ]
};

// --- 2. LÓGICA DE RENDERIZAÇÃO ---
(function renderAllTabs() {
    for (const [idAba, links] of Object.entries(bancoDeLinks)) {
        const tabDiv = document.getElementById(idAba);
        if (!tabDiv) continue; 

        const gridContainer = document.createElement('div');
        gridContainer.className = 'atalhos-container';
        
        const fragment = document.createDocumentFragment();

        links.forEach(item => {
            const linkEl = document.createElement('a');
            linkEl.href = item.url;
            linkEl.className = 'atalho';
            linkEl.target = '_self';
            linkEl.rel = 'noopener noreferrer';

            let iconUrl;

            if (item.icone) {
                iconUrl = item.icone;
            } else {
                let dominio;
                try {
                    dominio = new URL(item.url).hostname;
                } catch (e) { dominio = 'google.com'; } 
                
                // SOLUÇÃO: Usar a API do Google para TODOS os sites com resolução de 128px
                iconUrl = `https://www.google.com/s2/favicons?domain=${dominio}&sz=128`;
            }

            const img = document.createElement('img');
            img.src = iconUrl;
            img.alt = item.nome;
            img.loading = "lazy";

            img.onerror = function() {
                this.onerror = null; 
                this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%239aa0a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';
            };

            const span = document.createElement('span');
            span.textContent = item.nome;

            linkEl.appendChild(img);
            linkEl.appendChild(span);
            fragment.appendChild(linkEl);
        });

        gridContainer.appendChild(fragment);
        tabDiv.appendChild(gridContainer);
    }
})();

// --- 3. LÓGICA DE TROCA DE ABAS E SALVAMENTO ---
function openTab(evt, tabName) {
    const tabcontents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active");
    }
    
    const tabbuttons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    
    // Se foi um clique real (tem 'evt'), usa o botão clicado. Senão, busca o botão pelo nome.
    if (evt) {
        evt.currentTarget.classList.add("active");
    } else {
        document.querySelector(`.tab-button[onclick*="${tabName}"]`).classList.add("active");
    }

    // Salva a aba escolhida na memória do navegador
    localStorage.setItem('abaSelecionada', tabName);
}

// --- 4. RECUPERAR A ABA AO ABRIR A PÁGINA ---
window.addEventListener('DOMContentLoaded', () => {
    // Verifica se há uma aba salva. Se for a primeira vez, usa 'casa' como padrão
    const abaSalva = localStorage.getItem('abaSelecionada') || 'casa';
    
    // Chama a função para abrir a aba salva automaticamente
    openTab(null, abaSalva);
});
