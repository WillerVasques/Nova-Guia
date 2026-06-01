// --- LÓGICA DE FUNDO PROGRESSIVO (BLUR-UP) ---
// Substitua estas URLs pelas suas imagens
const lowResUrl  = "https://cdn.jsdelivr.net/gh/WillerVasques/Nova-Guia@main/Imagens/Esquadra-compactado.jpg";
const highResUrl = "https://cdn.jsdelivr.net/gh/WillerVasques/Nova-Guia@main/Imagens/Esquadra.jpg";

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

// --- 1. DADOS PADRÃO (FALLBACK) ---
const bancoDeLinksPadrao = {
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
        { nome: "Protocolo",    url: "https://docs.google.com/spreadsheets/d/169tb9ju8pOJ1wjiW3OHcUdxqSrsZVSeOVwoFeOGAJSw/edit?usp=sharing", 
         icone: "https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"},
        { nome: "Earth",    url: "https://earth.google.com/web" },
        { nome: "Pelando",    url: "https://www.pelando.com.br/busca/tablet" },

        { nome: "Calendário",    url: "https://calendar.google.com/calendar/u/0/r?pli=1",
         icone: "https://cdn-icons-png.flaticon.com/128/5968/5968499.png"},
        { nome: "Compartilha",    url: "https://www.compartilhamentomb.marinha.mil.br",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/compartilha.png"},
        { nome: "BONO",    url: "https://bono.marinha.mil.br/bono/index",
         icone: "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_of_the_Brazilian_Navy_%28symbol%29.svg"},
        { nome: "TERDIS",    url: "https://com3dn.mb/uso-geral/dn-30/view/pmpe",
         icone: "https://raw.githubusercontent.com/WillerVasques/Nova-Guia/refs/heads/main/Imagens/TERDIS.jpg"},
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
    ],
    "tfm": [
        { nome: "Treino Mestre",      url: "https://treinomestre.com.br/" },
    ]
};

// Carrega os links salvos no localStorage, ou usa os padrões caso não existam
let bancoDeLinks = JSON.parse(localStorage.getItem('bancoDeLinksSalvos')) || bancoDeLinksPadrao;

// --- 2. LÓGICA DE RENDERIZAÇÃO COM DRAG & DROP ---
function renderAllTabs() {
    for (const [idAba, links] of Object.entries(bancoDeLinks)) {
        const tabDiv = document.getElementById(idAba);
        if (!tabDiv) continue; 

        // Limpa a aba antes de renderizar (necessário para atualizar após o drop)
        tabDiv.innerHTML = '';

        const gridContainer = document.createElement('div');
        gridContainer.className = 'atalhos-container';
        gridContainer.dataset.aba = idAba; // Identifica a qual aba pertence o container
        
        const fragment = document.createDocumentFragment();

        links.forEach((item, index) => {
            const linkEl = document.createElement('a');
            linkEl.href = item.url;
            linkEl.className = 'atalho';
            linkEl.target = '_self';
            linkEl.rel = 'noopener noreferrer';
            
            // Ativa o recurso de arrastar do HTML5
            linkEl.draggable = true;
            linkEl.dataset.index = index; // Guarda a posição atual do item

            // --- EVENTOS DRAG AND DROP ---
            linkEl.addEventListener('dragstart', handleDragStart);
            linkEl.addEventListener('dragover', handleDragOver);
            linkEl.addEventListener('drop', handleDrop);
            linkEl.addEventListener('dragend', handleDragEnd);

            let iconUrl = item.icone ? item.icone : `https://www.google.com/s2/favicons?domain=${new URL(item.url).hostname}&sz=128`;

            const img = document.createElement('img');
            img.src = iconUrl;
            img.alt = item.nome;
            img.loading = "lazy";
            img.onerror = function() {
                this.onerror = null; 
                this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%239aa0a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line></svg>';
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
}

// --- FUNÇÕES DE MANIPULAÇÃO DO DRAG & DROP ---
let draggingElement = null;

function handleDragStart(e) {
    draggingElement = this;
    this.style.opacity = '0.4';
    
    // Define as informações necessárias para a troca de posição
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.index);
    e.dataTransfer.setData('aba', this.parentElement.dataset.aba);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessário para permitir o "Drop"
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();

    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const toIndex = parseInt(this.dataset.index);
    const abaOrigem = e.dataTransfer.getData('aba');
    const abaDestino = this.parentElement.dataset.aba;

    // Garante que só reordena se estiver na mesma aba
    if (draggingElement !== this && abaOrigem === abaDestino) {
        const abaLinks = bancoDeLinks[abaDestino];
        
        // Remove o item da posição antiga e insere na nova posição
        const [reorderedItem] = abaLinks.splice(fromIndex, 1);
        abaLinks.splice(toIndex, 0, reorderedItem);

        // Salva a nova configuração permanentemente no cache/localStorage do PC
        localStorage.setItem('bancoDeLinksSalvos', JSON.stringify(bancoDeLinks));

        // Renderiza novamente a tela refletindo as novas posições
        renderAllTabs();
    }
}

function handleDragEnd() {
    this.style.opacity = '1';
}

// Inicializa a renderização dos links
renderAllTabs();

// --- 3. LÓGICA DE TROCA DE ABAS ---
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
    
    if (evt) {
        evt.currentTarget.classList.add("active");
    } else {
        const btn = document.querySelector(`.tab-button[onclick*="${tabName}"]`);
        if (btn) btn.classList.add("active");
    }

    localStorage.setItem('abaSelecionada', tabName);
}

window.addEventListener('DOMContentLoaded', () => {
    const abaSalva = localStorage.getItem('abaSelecionada') || 'casa';
    openTab(null, abaSalva);
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker registrado'))
        .catch(err => console.error('Erro no SW:', err));
}
