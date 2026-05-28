var lang = "pt";

var translations = {
  pt: {
    projetos: "Projetos",
    sobre_mim: "Sobre Mim",
    contatos: "Contatos",
    aplicacoes: "Aplicações",
    lixeira: "Lixeira",
    cv: "CV",
    cc: "CC",
    search: "Pesquisar...",
    logout: "Sair",
    refresh: "Atualizar",
    wallpaper: "Alterar Papel de Parede",
    about: "Sobre",
    trash_empty: "A lixeira está vazia.",
    restore: "Restaurar",
    presentation: "Apresentação",
    about_text: "Olá! O meu nome é Beatriz, nasci a 20 de setembro de 2009. A minha área de interesse é a Programação, especialmente o desenvolvimento de jogos.",
    digital_comp: "Competências Digitais",
    personal_comp: "Competências Pessoais",
    languages_title: "Idiomas",
    formation: "Formação Académica",
    interests: "Interesses",
    contact_intro: "Entre em contato comigo:",
    apps_desc: "Ferramentas que utilizo:",
    search_app: "Pesquisar por aplicação...",
    filter_all: "Todos",
    filter_image: "Imagem",
    filter_video: "Vídeo",
    filter_site: "Site",
    filter_app: "App",
    filter_animation: "Animação",
    download_final: "Descarregar",
    download_project: "Projeto",
    native_level: "Nativo",
    fluent_level: "Fluente",
    beginner_level: "Iniciante",
    email_school: "Email Escolar",
    email_pro: "Email Pessoal",
    phone: "Telemóvel",
    design: "Design",
    content_creation: "Criação de conteúdo para redes",
    storytelling: "Storytelling",
    audio_editing: "Edição de áudio",
    video_editing: "Edição de vídeo",
    photo_editing: "Edição de fotografia",
    research: "Pesquisa e análise",
    web_dev: "Desenvolvimento de Web",
    app_dev: "Desenvolvimento de Apps",
    creativity: "Criatividade e inovação",
    time_mgmt: "Gestão de tempo",
    autonomy: "Autonomia",
    adaptation: "Adaptação",
    communication: "Comunicação",
    teamwork: "Trabalho em equipa",
    organization: "Organização",
    critical_thinking: "Pensamento crítico",
    problem_solving: "Resolução de problemas",
    planning: "Planeamento",
    empathy: "Empatia",
    curiosity: "Curiosidade",
    proactivity: "Proatividade",
    leadership: "Liderança",
    rigor: "Rigor",
    int_3d2d: "Modelação",
    int_animation: "Animação",
    int_photography: "Fotografia",
    int_web: "Desenvolvimento de Web",
    int_apps: "Desenvolvimento de Apps",
    close_window: "Fechar Janela",
    basic_edu: "Ensino Básico",
    multimedia_course: "Curso Profissional de Multimédia"
  },
  en: {
    projetos: "Projects",
    sobre_mim: "About Me",
    contatos: "Contacts",
    aplicacoes: "Applications",
    lixeira: "Trash",
    cv: "CV",
    cc: "CC",
    search: "Search...",
    logout: "Log out",
    refresh: "Refresh",
    wallpaper: "Change Wallpaper",
    about: "About",
    trash_empty: "Trash is empty.",
    restore: "Restore",
    presentation: "Presentation",
    about_text: "Hi! My name is Beatriz, I was born on September 20, 2009. My area of interest is Programming, especially game development.",
    digital_comp: "Digital Skills",
    personal_comp: "Personal Skills",
    languages_title: "Languages",
    formation: "Academic Education",
    interests: "Interests",
    contact_intro: "Get in touch with me:",
    apps_desc: "Tools I use:",
    search_app: "Search by application...",
    filter_all: "All",
    filter_image: "Image",
    filter_video: "Video",
    filter_site: "Site",
    filter_app: "App",
    filter_animation: "Animation",
    download_final: "Download",
    download_project: "Project",
    native_level: "Native",
    fluent_level: "Fluent",
    beginner_level: "Beginner",
    email_school: "School Email",
    email_pro: "Personal Email",
    phone: "Phone",
    design: "Design",
    content_creation: "Social Media Content Creation",
    storytelling: "Storytelling",
    audio_editing: "Audio Editing",
    video_editing: "Video Editing",
    photo_editing: "Photo Editing",
    research: "Research and Analysis",
    web_dev: "Web Development",
    app_dev: "App Development",
    creativity: "Creativity and Innovation",
    time_mgmt: "Time Management",
    autonomy: "Autonomy",
    adaptation: "Adaptation",
    communication: "Communication",
    teamwork: "Teamwork",
    organization: "Organization",
    critical_thinking: "Critical Thinking",
    problem_solving: "Problem Solving",
    planning: "Planning",
    empathy: "Empathy",
    curiosity: "Curiosity",
    proactivity: "Proactivity",
    leadership: "Leadership",
    rigor: "Rigor",
    int_3d2d: "Modeling",
    int_animation: "Animation",
    int_photography: "Photography",
    int_web: "Web Development",
    int_apps: "App Development",
    close_window: "Close Window",
    basic_edu: "Basic Education",
    multimedia_course: "Professional Multimedia Course"
  }
};

function t(key) {
  return translations[lang][key] || key;
}

var folderIconPath = 'M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.2C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z';
var userIconPath = 'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z';
var phoneIconPath = 'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z';
var laptopIconPath = 'M128 32C92.7 32 64 60.7 64 96V352h512V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2zM160 128h320c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z';
var trashIconPath = 'M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z';
var fileIconPath = 'M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z';

function makeSvg(viewBox, fill, path) {
  return '<svg viewBox="' + viewBox + '" fill="' + fill + '"><path d="' + path + '"/></svg>';
}

var folderIcon = makeSvg('0 0 576 512', '#ffffff', folderIconPath);
var userIcon = makeSvg('0 0 448 512', '#ffffff', userIconPath);
var phoneIcon = makeSvg('0 0 512 512', '#ffffff', phoneIconPath);
var laptopIcon = makeSvg('0 0 640 512', '#ffffff', laptopIconPath);
var trashIcon = makeSvg('0 0 448 512', '#ffffff', trashIconPath);
var fileIcon = makeSvg('0 0 384 512', '#ffffff', fileIconPath);

var folderIconColor = makeSvg('0 0 576 512', '#FFD43B', folderIconPath);
var userIconColor = makeSvg('0 0 448 512', '#60A5FA', userIconPath);
var phoneIconColor = makeSvg('0 0 512 512', '#34D399', phoneIconPath);
var laptopIconColor = makeSvg('0 0 640 512', '#A78BFA', laptopIconPath);
var trashIconColor = makeSvg('0 0 448 512', '#94A3B8', trashIconPath);
var fileIconColor = makeSvg('0 0 384 512', '#60A5FA', fileIconPath);

var apps = [
  { id: "projetos", icon: folderIcon, colorIcon: folderIconColor, pinned: true },
  { id: "sobre_mim", icon: userIcon, colorIcon: userIconColor, pinned: true },
  { id: "contatos", icon: phoneIcon, colorIcon: phoneIconColor, pinned: true },
  { id: "aplicacoes", icon: laptopIcon, colorIcon: laptopIconColor, pinned: true },
  { id: "cv", icon: fileIcon, colorIcon: fileIconColor, pinned: false },
  { id: "cc", icon: fileIcon, colorIcon: fileIconColor, pinned: false },
  { id: "lixeira", icon: trashIcon, colorIcon: trashIconColor, pinned: false }
];

// para mudar os videos e imagens dos PROJETOS
var projectData = [
  { app: "Adobe After Effects", type: "animation", title_pt: "Análise e Recriação de Spot Publicitário em Animação", title_en: "Animated Advertising Spot Analysis and Recreation", desc_pt: "Este trabalho consistiu na seleção e análise de um spot publicitário animado, incluindo a criação de um storyboard para estudar a sua estrutura. Posteriormente, foi desenvolvido um novo spot para um produto diferente, mantendo a mesma linguagem e estrutura de animação do original. O projeto aplicou conhecimentos adquiridos na UFCD, incluindo tratamento de imagem no Photoshop, desenho vetorial no Illustrator e animação no After Effects.", desc_en: "This project involved selecting and analyzing an animated advertising spot, including the creation of a storyboard to study its structure. Afterwards, a new advertisement was developed for a different product while maintaining the same animation structure and style as the original. The project applied skills learned in the UFCD, including image editing in Photoshop, vector design in Illustrator, and animation in After Effects.", fileFinal: "MP4", finalFile: "videos/ae.mp4", video: "videos/ae.mp4" },
  { app: "Adobe Animate", type: "animation", title_pt: "Desenvolvimento de Quiz Interativo com Feedback Visual", title_en: "Interactive Quiz Development with Visual Feedback", desc_pt: "Este projeto consistiu na criação de um quiz interativo com 5 perguntas de escolha múltipla, cada uma com duas alternativas. O jogo foi desenvolvido de forma totalmente navegável, incluindo uma tela inicial com botão de início, sequência de perguntas e uma tela final com o resultado do jogador. Foram aplicados elementos de feedback visual e/ou sonoro para respostas corretas e incorretas, assim como interatividade através de botões programados em ActionScript 3.0. O design seguiu um tema coerente, com consistência visual entre fundos, cores e estilo das perguntas, garantindo uma experiência de utilizador intuitiva e dinâmica.", desc_en: "This project involved creating an interactive quiz with 5 multiple-choice questions, each with two possible answers. The game was fully navigable, including a start screen with a “Start Quiz” button, a sequence of questions, and a final results screen showing the player’s performance. Visual and/or audio feedback was implemented for correct and incorrect answers, along with interactivity using ActionScript 3.0 buttons. The design followed a consistent theme, ensuring visual coherence across backgrounds, colors, and question styling, providing a smooth and engaging user experience.", fileFinal: "SWF", finalFile: "download/quiz.swf", img: "imgs/quiz.png"},
  { app: "Adobe Animate", type: "animation", title_pt: "Animação Frame-by-Frame", title_en: "Frame-by-Frame Animation", desc_pt: "A animação mostra uma transformação gradual em frame-by-frame, onde formas simples evoluem até criar um objeto final completo. O movimento contínuo e fluido evidencia o cuidado na criação manual de cada quadro, dando personalidade ao resultado.", desc_en: "The animation shows a gradual transformation using frame-by-frame technique, where simple shapes evolve until forming a complete final object. The smooth, continuous movement highlights the careful manual creation of each frame.", fileFinal: "MP4", finalFile: "videos/frame.mp4", video: "videos/frame.mp4"},
  { app: "Adobe Illustrator", type: "image", title_pt: "Aplicação de Linguagens da Arte Digital em Imagem Vetorial", title_en: "Application of Digital Art Styles in Vector Image Design", desc_pt: "Este projeto consistiu na seleção de uma imagem e na aplicação de diferentes linguagens da arte digital em ambiente de desenho vetorial. Foram exploradas técnicas como Silhouette Pop Art, Line Art, Low Poly e Pixel Art, com o objetivo de transformar a imagem original através de estilos visuais distintos, aplicando princípios da arte digital e do design vetorial.", desc_en: "This project involved selecting an image and applying different digital art styles in a vector design environment. Techniques such as Silhouette Pop Art, Line Art, Low Poly, and Pixel Art were explored, transforming the original image through distinct visual styles while applying principles of digital art and vector design.", fileFinal: "JPG", finalFile: "imgs/billie.jpg", img: "imgs/billie.jpg"},
  { app: "Adobe Premiere", type: "video", title_pt: "Criação de Trailer", title_en: "Trailer Creation", desc_pt: "Este projeto consistiu na criação de um trailer com o objetivo de apresentar um produto, evento ou conceito de forma atrativa e impactante. Foram utilizadas técnicas de edição de vídeo, seleção de cenas, efeitos visuais e construção de ritmo narrativo para captar a atenção do público e transmitir a mensagem de forma eficaz.", desc_en: "This project involved creating a trailer aimed at presenting a product, event, or concept in an engaging and impactful way. Video editing techniques, scene selection, visual effects, and narrative pacing were used to capture the audience’s attention and effectively communicate the message.", fileFinal: "MP4", finalFile: "videos/trailer.mp4", video: "videos/trailer.mp4"},
  { app: "Adobe Premiere", type: "video", title_pt: "Produção de Videoclip", title_en: "Video Clip Production", desc_pt: "Este projeto consistiu no desenvolvimento de um videoclipe, desde a fase de planeamento até à edição final. Foram aplicadas técnicas de edição de vídeo, sincronização de áudio e imagem, e composição visual, com o objetivo de criar uma narrativa coerente e dinâmica que acompanhasse a música escolhida. O trabalho envolveu também decisões criativas relacionadas com ritmo, transições e estilo visual.", desc_en: "This project involved the development of a video clip, from the planning stage to the final editing process. Video editing techniques, audio synchronization, and visual composition were applied to create a coherent and dynamic narrative that matches the chosen song. The work also included creative decisions related to pacing, transitions, and visual style.", fileFinal: "MP4", finalFile: "videos/videoclip.mp4", video: "videos/videoclip.mp4"},
  { app: "Adobe Premiere", type: "video", title_pt: "WorldSkills – Edição e Animação de Vídeo", title_en: "WorldSkills – Video Editing and Animation", desc_pt: "Este trabalho foi desenvolvido no âmbito da competição WorldSkills e consistiu na edição e animação de um vídeo sobre o Dia da Criança. O projeto foi realizado no Adobe Premiere Pro, utilizando keyframes, efeitos visuais e transições para criar uma sequência dinâmica e apelativa. Todo o material utilizado foi fornecido pela organização, sendo o objetivo principal demonstrar competências técnicas de edição e criatividade na montagem do vídeo.", desc_en: "This project was developed for the WorldSkills competition and consisted of editing and animating a video about Children’s Day. The work was done using Adobe Premiere Pro, applying keyframes, visual effects, and transitions to create a dynamic and engaging sequence. All materials were provided by the organization, with the main goal being to demonstrate technical editing skills and creativity in video composition.", fileFinal: "MP4", finalFile: "videos/worldskills.mp4", video: "videos/worldskills.mp4"},
  { app: "3ds Max", type: "video", title_pt: "Desenvolvimento de Animação 3D", title_en: "3D Animation Development", desc_pt: "Este trabalho consistiu na criação de uma sinopse original gerada por IA, servindo como base narrativa para uma animação sem personagens humanas ou humanoides, focando-se em objetos animados. O projeto envolveu modelação e animação 3D, aplicação de materiais, câmaras e luzes, bem como a criação de uma animação fluida e cinematográfica, com atenção à imersão visual.", desc_en: "This project involved creating an original AI-generated synopsis to serve as the narrative foundation for an animation without human or humanoid characters, focusing instead on animated objects. The work included 3D modeling and animation, implementation of materials, cameras, and lighting, and producing a fluid, cinematic animation with strong visual immersion.", fileFinal: "MP4", finalFile: "videos/ufo.mp4", video: "videos/ufo.mp4"}
];

var toolIcons = {
  "Adobe After Effects": { color: "#FFFFFF", img: "imgs/ae_logo.png" },
  "Adobe Animate": { color: "#FFFFFF", img: "imgs/an_logo.png" },
  "Adobe Illustrator": { color: "#FFFFFF", img: "imgs/ai_logo.png" },
  "Adobe InDesign": { color: "#FFFFFF",  img: "imgs/id_logo.png" },
  "Adobe Photoshop": { color: "#FFFFFF",  img: "imgs/ps_logo.png" },
  "Adobe Premiere": { color: "#FFFFFF", img: "imgs/pr_logo.png" },
  "Google Docs": { color: "#FFFFFF", img: "imgs/docs_logo.png" },
  "Google Forms": { color: "#FFFFFF", img: "imgs/forms_logo.png" },
  "Google Sheets": { color: "#FFFFFF", img: "imgs/sheets_logo.png" },
  "Google Sites": { color: "#FFFFFF", img: "imgs/sites_logo.png" },
  "Google Slides": { color: "#FFFFFF", img: "imgs/slides_logo.png" },
  "Access": { color: "#FFFFFF", img: "imgs/access_logo.png" },
  "Blender": { color: "#FFFFFF", img: "imgs/blender_logo.png" },
  "Canva": { color: "#FFFFFF", img: "imgs/canva_logo.png" },
  "Excel": { color: "#FFFFFF", img: "imgs/excel_logo.png" },
  "PowerPoint": { color: "#FFFFFF", img: "imgs/pp_logo.png" },
  "Unity": { color: "#FFFFFF", img: "imgs/unity_logo.png" },
  "Visual Studio Code": { color: "#FFFFFF", img: "imgs/vscode_logo.png" },
  "Word": { color: "#FFFFFF", img: "imgs/word_logo.png" },
  "WordPress": { color: "#FFFFFF", img: "imgs/wp_logo.png" },
  "3ds Max": { color: "#FFFFFF", img: "imgs/3dsmax_logo.png" }
};

var toolsData = [
  { name: "Adobe After Effects", pct: 55 },
  { name: "Adobe Animate", pct: 50 },
  { name: "Adobe Illustrator", pct: 70 },
  { name: "Adobe InDesign", pct: 60 },
  { name: "Adobe Photoshop", pct: 65 },
  { name: "Adobe Premiere", pct: 70 },
  { name: "Google Docs", pct: 90 },
  { name: "Google Forms", pct: 80 },
  { name: "Google Sheets", pct: 65 },
  { name: "Google Sites", pct: 55 },
  { name: "Google Slides", pct: 80 },
  { name: "Access", pct: 60 },
  { name: "Blender", pct: 30 },
  { name: "Canva", pct: 80 },
  { name: "Excel", pct: 70 },
  { name: "PowerPoint", pct: 75 },
  { name: "Unity", pct: 20 },
  { name: "Visual Studio Code", pct: 80 },
  { name: "Word", pct: 90 },
  { name: "WordPress", pct: 65 },
  { name: "3ds Max", pct: 50 }
];

var digitalComp = [
  { key: "design", pct: 80 },
  { key: "content_creation", pct: 50 },
  { key: "storytelling", pct: 65 },
  { key: "audio_editing", pct: 55 },
  { key: "video_editing", pct: 75 },
  { key: "photo_editing", pct: 70 },
  { key: "research", pct: 65 },
  { key: "web_dev", pct: 90 },
  { key: "app_dev", pct: 55 }
];

var personalComp = [
  { key: "creativity", pct: 90 },
  { key: "time_mgmt", pct: 70 },
  { key: "autonomy", pct: 85 },
  { key: "adaptation", pct: 80 },
  { key: "communication", pct: 55 },
  { key: "teamwork", pct: 85 },
  { key: "organization", pct: 75 },
  { key: "critical_thinking", pct: 70 },
  { key: "problem_solving", pct: 80 },
  { key: "planning", pct: 70 },
  { key: "empathy", pct: 85 },
  { key: "curiosity", pct: 100 },
  { key: "proactivity", pct: 80 },
  { key: "leadership", pct: 65 },
  { key: "rigor", pct: 75 }
];

var trashBin = [];
var openWindows = {};
var topZIndex = 200;
var draggingIcon = null;
var dragOffsetX = 0;
var dragOffsetY = 0;
var isDragging = false;
var dragStartX = 0;
var dragStartY = 0;

function buildDesktopIcons() {
  var area = document.getElementById("iconArea");
  area.innerHTML = "";
  for (var i = 0; i < apps.length; i++) {
    var app = apps[i];
    var icon = document.createElement("div");
    icon.className = "desktop-icon";
    icon.setAttribute("data-app", app.id);
    icon.innerHTML = app.colorIcon + "<span>" + t(app.id) + "</span>";
    icon.addEventListener("mousedown", startIconDrag);
    icon.addEventListener("dblclick", handleIconDblClick);
    area.appendChild(icon);
  }
}
