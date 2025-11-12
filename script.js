let currentLang = 'en';

const translations = {
  en: {
    about: "About",
    academics: "Academics",
    cv: "CV",
    studies: "Studies",
    work: "Work Experience",
    skills: "Skills",
    contact: "Contact",

    name: "Mikko F., PhD",
    tagline: "LANGUAGE • TECH • EDUCATION",
    about_text: `Polyglot, linguist and educator with a passion for applied linguistics, language digitalisation and technology, and language policy for minor and endangered languages. Currently lecturing at Mongolia International University, I have studied at several European universities on various scholarships, lived in over ten countries, and have a background combining academic, freelance (translator, Spanish tutor) and corporate experience. I am also a former Blue Book trainee at the European Commission.<br><br>
    Besides linguistics, I have knowledge of programming for digital humanities and NLP, music theory, and indie game development. I follow the <i>tri-dharma</i> principle, developing myself, my institution, and my students and the local community. Future projects focus on developing digital tools for endangered languages, research in L2 education, and promoting academic leadership.`,
    hashtags: "#polyglot #education #linguistics #translation #lexicography #research #language_teaching #language_policy #project_management #language_technology #nlp #music_theory #content_writing #public_speaking",

    academics_title: "Academic Experience",
    ku_name: "Kyrgyzstan University of Language and Culture",
    ku_position: "Lecturer",
    ku_location: "Shopokov",
    ku_dates: "Sep 2024–Jun 2025",
    miu_name: "Mongolia International University",
    miu_position: "Lecturer",
    remote: "remote",
    miu_dates: "Aug 2024–present",
    lessons_title: "Courses Taught",
    course_linguistics: "Linguistics",
    course_language_tech: "Language Technology",
    course_l2_methods: "L2 Teaching Methods",
    course_research_methods: "Research Methodology",
    course_language_policy: "Language Policy",
    course_translation: "Translation",
    lessons_text_p1: "These courses combine theory with hands-on practice, including corpus building, NLP tools, and field research.",
    lessons_text_p2: 'Students can access course material in 👉 <a href="https://mikko-lms.netlify.app" target="_blank" rel="noopener noreferrer">this LMS</a>.',
    projects_title: "Projects",
    project_text: "— check out my little multilingual translation app portfolio 🙂",
    project_lexikyrgyz: "— demo version of a Kyrgyz-English dictionary 🇰🇬",

    studies_title: "Studies",
    phd_degree: "PhD: Language Policy and Regulation",
    ehu_name: "University of the Basque Country",
    phd_dates: "2023–2025",
    phd_thesis: "Dissertation: “Charting global language regulation practices towards language maintenance and revitalisation”",
    ma_lex_degree: "MA: Lexicography",
    emlex_name: "Károli Gáspár University & Friedrich-Alexander-Universität",
    ma_lex_dates: "2020–2022",
    ma_lex_thesis: "Thesis: “Towards a typology of online dictionary practices for endangered languages”",
    ma_ling_degree: "MA: Linguistics",
    ehu_name2: "University of the Basque Country",
    ma_ling_dates: "2017–2018",
    ma_ling_thesis: "Thesis: “Grammatical complexity and its measurement in diachrony”",
    ma_trans_degree: "MA: Translation",
    ionio_ma_name: "Ionian University",
    ma_trans_dates: "2015–2017",
    ba_degree: "BA: Translation and Interpretation",
    ionio_ba_name: "Ionian University",
    ba_dates: "2011–2015",
    leipzig_exchange: "University of Leipzig, exchange student",
    leipzig_dates: "2014–2015",
    erasmus_exchange: "University of Eastern Finland & University of Lapland, Erasmus",
    erasmus_dates: "2013",
    honourable_mention: "(Honourable mention)",
    certs_title: "Certificates & Courses",
    conf_title: "Conferences (attencande, selected)",
    conf_ec: "European Commission",
    conf_mt: "Machine translation — Low resource languages, online workshop",
    conf_roma: "Roma Tre University",
    conf_memorial: "The Pandemic, Technology, and Language Revitalization, Memorial University",
    conf_wiko: "Alfried Krupp Wissenschaftskolleg",

    work_title: "Work Experience (non-Academic)",
    tp_role: "data annotator",
    greece: "Greece",
    tp_dates: "September 2025–present",
    peoplecert_role: "online proctor",
    greece2: "Greece",
    peoplecert_dates: "September 2023–August 2024",
    kiwi_role: "travel agent",
    brno: "Brno",
    kiwi_dates: "March–August 2023",
    ec_role: "Blue Book trainee",
    luxembourg: "Luxembourg",
    ec_dates: "October 2022–February 2023",
    achensee_role: "customer service",
    austria: "Austria",
    achensee_dates: "Winter season 2019/20",
    military_service: "Military service",
    military_role: "military music department",
    military_dates: "2018–2019",
    centro_name: "Centre of Byzantine, Modern Greek and Cypriot Studies",
    centro_role: "secretarial support",
    granada: "Granada",
    centro_dates: "September 2016–January 2017",
    tutor_role: "English & Spanish language tutor",
    tutor_dates: "2012–present",
    freelance_role: "Freelance translator",
    freelance_dates: "2012–2015",
    internships_title: "Internships",
    rennes: "Rennes",
    oplb_dates: "July–August 2021",
    thessaloniki: "Thessaloniki",
    lexicon_dates: "July–August 2015",
    leipzig_uni: "University of Leipzig",
    leipzig_city: "Leipzig",
    leipzig_intern_dates: "March–April 2015",
    constanta: "Constanța",
    intermundia_dates: "May–July 2014",
    volunteering_title: "Volunteering",
    anglu_role: "Camp leader",
    lithuania: "Lithuania",
    anglu_dates: "June–July 2017",
    aiesec_role: "Spanish tutor",
    podgorica: "Podgorica",
    aiesec_dates: "February–March 2017",

    skills_title: "Skills",
    lang_title: "Languages",
    native_label: "Native:",
    native_langs: "Greek, English (international)",
    fluent_label: "Fluent:",
    fluent_langs: "Spanish, German, Italian",
    intermediate_label: "Intermediate:",
    intermediate_langs: "French, Portuguese",
    amateur_label: "Amateur:",
    amateur_langs: "Russian, Finnish, Hungarian, Basque",
    tech_title: "Technology",
    misc_title: "Misc.",
    music_skill: "Transverse flute (intermediate), Music theory",
    wikipedia_skill: "Wikipedia articles translation (in Greek)",
    hobbies: "Hiking, Solo travelling, Cycling",

    contact_title: "Contact",
    email_label: "Your email",
    topic_label: "Topic",
    message_label: "Message",
    send_button: "Send",

    pdf_version: "PDF version",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    location: "📍 Thessaloniki, Greece"
  },
  es: {
    about: "Sobre mí",
    academics: "Docencia",
    cv: "CV",
    studies: "Estudios",
    work: "Experiencia Laboral",
    skills: "Competencias",
    contact: "Contacto",

    name: "Mikko F., PhD",
    tagline: "IDIOMA • TECNOLOGÍA • EDUCACIÓN",
    about_text: `Lingüista, políglota y educador apasionado por la lingüística aplicada, la digitalización y la tecnología de lenguas, y la política lingüística para lenguas minoritarias/amenazadas. Actualmente imparto clases en la Universidad Internacional de Mongolia; he estudiado en varias universidades europeas con becas diversas, he vivido en más de diez países y mi trayectoria combina experiencia académica, freelance (traductor, tutor de español) y corporativa; también he sido becario Blue Book en la Comisión Europea.<br><br>
    Además de la lingüística, tengo conocimientos de programación para humanidades digitales y PLN, teoría musical y desarrollo de videojuegos indie. Sigo el principio <i>tri-dharma</i>, desarrollándome a mí mismo, a mi institución y a mis alumnos y la comunidad local. Mis proyectos futuros se centran en el desarrollo de herramientas digitales para lenguas amenazadas, investigación en enseñanza de L2 y promoción del liderazgo académico.`,
    hashtags: "#polyglot #education #linguistics #translation #lexicography #research #language_teaching #language_policy #project_management #language_technology #nlp #music_theory #content_writing #public_speaking",

    academics_title: "Experiencia Académica",
    ku_name: "Universidad de Lengua y Cultura de Kirguistán",
    ku_position: "docente",
    ku_location: "Shopokov",
    ku_dates: "septiembre 2024–junio 2025",
    miu_name: "Universidad Internacional de Mongolia",
    miu_position: "docente",
    remote: "remoto",
    miu_dates: "agosto 2024–presente",
    lessons_title: "Cursos Impartidos",
    course_linguistics: "Lingüística",
    course_language_tech: "Tecnologías lingüísticas",
    course_l2_methods: "Métodos de enseñanza de L2",
    course_research_methods: "Metodología de la investigación",
    course_language_policy: "Política lingüística",
    course_translation: "Traducción",
    lessons_text_p1: "Estos cursos combinan teoría con práctica aplicada, incluyendo construcción de corpus, herramientas de PLN e investigación de campo.",
    lessons_text_p2: 'Los estudiantes pueden acceder al material de los cursos en 👉 <a href="https://mikko-lms.netlify.app" target="_blank" rel="noopener noreferrer">este LMS</a>.',
    projects_title: "Proyectos",
    project_text: "— ¡Echen un vistazo a mi pequeña app de traducción multilingüe! 🙂",
    project_lexikyrgyz: "— versión demo de un diccionario kirguís-inglés 🇰🇬",

    studies_title: "Estudios",
    phd_degree: "Doctorado: Política y Regulación Lingüística",
    ehu_name: "Universidad del País Vasco",
    phd_dates: "2023–2025",
    phd_thesis: "Tesis: «Charting global language regulation practices towards language maintenance and revitalisation»",
    ma_lex_degree: "Máster: Lexicografía",
    emlex_name: "Universidad de Károli Gáspár & Universidad de Erlangen-Núremberg",
    ma_lex_dates: "2020–2022",
    ma_lex_thesis: "Tesis: «Towards a typology of online dictionary practices for endangered languages»",
    ma_ling_degree: "Máster: Lingüística",
    ehu_name2: "Universidad del País Vasco",
    ma_ling_dates: "2017–2018",
    ma_ling_thesis: "Tesis: «Grammatical complexity and its measurement in diachrony»",
    ma_trans_degree: "Máster: Traducción",
    ionio_ma_name: "Universidad Jónica",
    ma_trans_dates: "2015–2017",
    ba_degree: "Grado: Traducción e Interpretación",
    ionio_ba_name: "Universidad Jónica",
    ba_dates: "2011–2015",
    leipzig_exchange: "Universidad de Leipzig, estudiante de intercambio",
    leipzig_dates: "2014–2015",
    erasmus_exchange: "Universidad de Finlandia Oriental y Universidad de Laponia, Erasmus",
    erasmus_dates: "2013",
    honourable_mention: "(mención honorífica)",
    certs_title: "Certificados y Cursos",
    conf_title: "Conferencias (asistencia; selección)",
    conf_ec: "Comisión Europea",
    conf_mt: "Traducción automática — Lenguas de bajos recursos, taller en línea",
    conf_roma: "Universidad Roma Tre",
    conf_memorial: "The Pandemic, Technology, and Language Revitalization, Memorial University",
    conf_wiko: "Alfried Krupp Wissenschaftskolleg",

    work_title: "Experiencia Laboral (no académica)",
    tp_role: "anotador de datos",
    greece: "Grecia",
    tp_dates: "septiembre 2025–presente",
    peoplecert_role: "supervisor de exámenes en línea",
    greece2: "Grecia",
    peoplecert_dates: "septiembre 2023–agosto 2024",
    kiwi_role: "agente de viajes",
    brno: "Brno",
    kiwi_dates: "marzo–agosto 2023",
    ec_role: "becario Blue Book",
    luxembourg: "Luxemburgo",
    ec_dates: "octubre 2022–febrero 2023",
    achensee_role: "atención al cliente",
    austria: "Austria",
    achensee_dates: "temporada de invierno 2019/20",
    military_service: "Servicio militar",
    military_role: "departamento de música militar",
    military_dates: "2018–2019",
    centro_name: "Centro de Estudios Bizantinos, Neogriegos y Chipriotas",
    centro_role: "apoyo secretarial",
    granada: "Granada",
    centro_dates: "septiembre 2016–enero 2017",
    tutor_role: "Tutor de inglés y español",
    tutor_dates: "2012–presente",
    freelance_role: "Traductor freelance",
    freelance_dates: "2012–2015",
    internships_title: "Prácticas",
    rennes: "Rennes",
    oplb_dates: "julio–agosto 2021",
    thessaloniki: "Salónica",
    lexicon_dates: "julio–agosto 2015",
    leipzig_uni: "Universidad de Leipzig",
    leipzig_city: "Leipzig",
    leipzig_intern_dates: "marzo–abril 2015",
    constanta: "Constanța",
    intermundia_dates: "mayo–julio 2014",
    volunteering_title: "Voluntariado",
    anglu_role: "líder de campamento de niños",
    lithuania: "Lituania",
    anglu_dates: "junio–julio 2017",
    aiesec_role: "tutor de español",
    podgorica: "Podgorica",
    aiesec_dates: "febrero–marzo 2017",

    skills_title: "Competencias",
    lang_title: "Idiomas",
    native_label: "Nativo:",
    native_langs: "Griego, Inglés (internacional)",
    fluent_label: "Fluido:",
    fluent_langs: "Español, Alemán, Italiano",
    intermediate_label: "Intermedio:",
    intermediate_langs: "Francés, Portugués",
    amateur_label: "Aficionado:",
    amateur_langs: "Ruso, Finés, Húngaro, Euskera",
    tech_title: "Tecnología",
    misc_title: "Otras",
    music_skill: "Flauta traversa (nivel intermedio), Teoría musical",
    wikipedia_skill: "Traducción de artículos de Wikipedia (al griego)",
    hobbies: "Viajes en solitario, Senderismo, Ciclismo",

    contact_title: "Contacto",
    email_label: "Tu correo",
    topic_label: "Asunto",
    message_label: "Mensaje",
    send_button: "Enviar",

    pdf_version: "Versión PDF",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    location: "📍 Salónica, Grecia"
  }
};

const sections = {
  about: document.getElementById('about'),
  academics: document.getElementById('academics'),
  studies: document.getElementById('studies'),
  work: document.getElementById('work'),
  skills: document.getElementById('skills'),
  contact: document.getElementById('contact')
};

function showSection(sectionId) {
  if (!sections[sectionId]) sectionId = 'about';
  Object.values(sections).forEach(s => s.classList.add('hidden'));
  sections[sectionId].classList.remove('hidden');
  history.pushState(null, '', `#${sectionId}`);
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const link = document.querySelector(`[href="#${sectionId}"]`);
  if (link) link.classList.add('active');
}

document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.getAttribute('href').substring(1);
    showSection(target);
  });
});

const cvToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

cvToggle.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  document.querySelector('.dropdown').classList.toggle('open');
});

document.addEventListener('click', () => {
  document.querySelector('.dropdown').classList.remove('open');
});

const langToggle = document.getElementById('lang-toggle');
const langDropdown = document.getElementById('lang-dropdown');

langToggle.innerHTML = '🌐';

langToggle.addEventListener('click', e => {
  e.stopPropagation();
  langDropdown.classList.toggle('hidden');
});

document.addEventListener('click', e => {
  if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.add('hidden');
  }
  if (!cvToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    document.querySelector('.dropdown').classList.remove('open');
  }
});

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.getAttribute('data-lang');
    localStorage.setItem('preferredLang', currentLang);
    updateContent();
    langDropdown.classList.add('hidden');
  });
});

function updateContent() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[currentLang][key] !== undefined) {
      el.innerHTML = translations[currentLang][key];
    }
  });
  document.title = 'Mikko CV';
}

window.addEventListener('load', () => {
  langToggle.innerHTML = '🌐';
  const saved = localStorage.getItem('preferredLang');
  if (saved && translations[saved]) currentLang = saved;
  else if (translations[navigator.language.slice(0,2)]) currentLang = navigator.language.slice(0,2);
  const hash = window.location.hash.substring(1);
  showSection(hash || 'about');
  updateContent();
});

window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1);
  showSection(hash || 'about');
});
