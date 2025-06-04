document.addEventListener('DOMContentLoaded', function() {
  // Datos directamente en el JS (reemplaza con tus datos reales)
  const portfolioData = {
    "personalInfo": {
      "name": "Edwin F. Ibañez",
      "title": "Ingeniero de software",
      "photo": "images/profile.jpg",
      "description": "Soy un apasionado ingeniero de software con especialización en Inteligencia Artificial y Automatización de Procesos, dedicado a transformar ideas en soluciones tecnológicas inteligentes. Con experiencia en desarrollo Full Stack (HTML/CSS, JavaScript, PHP, Python, Django) y dominio de plataformas Low-Code como Power Apps, Power Automate y Power BI, creo aplicaciones robustas que combinan funcionalidad, escalabilidad y experiencia de usuario; siempre con un enfoque en automatización, análisis de datos e integración de IA.\n\nMi filosofía se basa en entregar soluciones óptimas donde la innovación y la usabilidad converjan: no solo resuelvo problemas, sino que diseño sistemas intuitivos, estéticos y técnicamente sólidos. Si buscas impulsar tu proyecto con tecnología inteligente y eficiente, estoy listo para colaborar. Explora mis trabajos y contáctame para llevar tus ideas al siguiente nivel.",
      "socialMedia": [
        {"name": "LinkedIn", "url": "https://www.linkedin.com/in/edwin-iba%C3%B1ez-147b1b34/", "icon": "linkedin"},
        {"name": "GitHub", "url": "https://github.com/edwin1327", "icon": "github"},
        {"name": "Instagram", "url": "https://www.instagram.com/edwinfabian.13/", "icon": "instagram"},
        {"name": "Youtube", "url": "https://www.youtube.com/channel/UCHRoTgXauWtNIf6eYJ8YGdg", "icon": "youtube"}
      ]
    },
    "skills": [
      {"name": "HTML", "level": 90},
      {"name": "CSS", "level": 85},
      {"name": "JavaScript", "level": 80},
      {"name": "Python", "level": 75},
      {"name": "SharePoint", "level": 70},
      {"name": "Power Apps", "level": 80},
      {"name": "Power Automate", "level": 85},
      {"name": "Power BI", "level": 75},
      {"name": "MySQL", "level": 70},
      {"name": "PHP", "level": 65},
      {"name": "Java", "level": 40},
      {"name": "Inteligencia Artificial", "level": 75}
    ],
    "education": [
      {
        "institution": "Google - Coursera",
        "degree": "Aspectos básicos: Datos, datos, en todas partes",
        "year": "2025"
      },
      {
        "institution": "Universidad Manuela Beltrán",
        "degree": "Ingeniero de Software",
        "year": "2019-2024"
      },
      {
        "institution": "Platzi",
        "degree": "Metodologías Ágiles",
        "year": "2023"
      },
      {
        "institution": "Universidad Tecnológica de Pereira – MinTic",
        "degree": "Diplomado en habilidades de programación con énfasis en Desarrollo web ",
        "year": "2022"
      },
      {
        "institution": "Universidad Tecnológica de Pereira – MinTic",
        "degree": "Diplomado en Desarrollo de Software",
        "year": "2022"
      },
      {
        "institution": "Universidad Tecnológica de Pereira – MinTic",
        "degree": "Diplomado en Programación Básica en Java",
        "year": "2022"
      },
      {
        "institution": "Universidad Tecnológica de Pereira – MinTic",
        "degree": "Diplomado en Fundamentos de Programación en Python",
        "year": "2022"
      },
      {
        "institution": "Colsubsidio Educación Tecnológica - CET",
        "degree": "Curso introducción a la programación con Python",
        "year": "2021"
      }
    ],
    "featuredProjects": [
      {
        "title": "Catálogo de Productos",
        "description": "Aplicación de Listado de Productos para la venta",
        "technologies": ["HTML", "CSS", "JS"],
        "image": "images/project1.jpg",
        "link": "https://edwin1327.github.io/catalogo-productos/index.html"
      },
      {
        "title": "Landing Page",
        "description": "Página Landing Page con inicio y registro de sesión",
        "technologies": ["HTML", "CSS"],
        "image": "images/project2.jpg",
        "link": "https://edwin1327.github.io/proyectoLandingPage/"
      }
    ]
  };

  // Actualizar información personal
  updatePersonalInfo(portfolioData.personalInfo);
  
  // Cargar habilidades
  loadSkills(portfolioData.skills);
  
  // Cargar educación
  loadEducation(portfolioData.education);
  
  // Cargar proyectos destacados
  loadProjects(portfolioData.featuredProjects);
  
  // Actualizar año en el footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Configurar menú hamburguesa
  setupHamburgerMenu();
  
  // Configurar smooth scrolling
  setupSmoothScrolling();
  
  // Configurar animación de habilidades
  setupSkillsAnimation();
  
  // Configurar efecto de escritura (si existe el elemento)
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    setupTypewriterEffect(heroTitle);
  }
});

// Funciones auxiliares
function updatePersonalInfo(info) {
  if (!info) return;
  
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const profileImage = document.getElementById('profile-image');
  const aboutProfileImage = document.getElementById('about-profile-image');
  const aboutDescription = document.getElementById('about-description');
  
  if (heroTitle) {
    heroTitle.innerHTML = `Hola, soy <span class="name-highlight">${info.name}</span>`;
  }
  
  if (heroSubtitle) {
    heroSubtitle.textContent = info.title;
  }
  
  if (profileImage) {
    profileImage.src = info.photo;
    profileImage.alt = `Foto de ${info.name}`;
  }
  
  if (aboutProfileImage) {
    aboutProfileImage.src = info.photo;
    aboutProfileImage.alt = `Foto de ${info.name}`;
  }
  
  if (aboutDescription) {
    const paragraphs = info.description.split('\n\n');
    aboutDescription.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }
  
  // Cargar redes sociales
  const socialLinks = document.querySelector('.social-links');
  if (socialLinks && info.socialMedia) {
    socialLinks.innerHTML = ''; // Limpiar existentes
    info.socialMedia.forEach(social => {
      const link = document.createElement('a');
      link.href = social.url;
      link.title = social.name;
      link.target = "_blank";
      link.rel = "noopener noreferrer";  // Mejora seguridad
      link.innerHTML = `<i class="fab fa-${social.icon}"></i>`;
      socialLinks.appendChild(link);
    });
  }
}

function loadSkills(skills) {
  const skillsContainer = document.querySelector('.skills-container');
  if (!skillsContainer || !skills) return;
  
  skillsContainer.innerHTML = ''; // Limpiar existentes
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
      <div class="skill-name">
        <span>${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-level="${skill.level}"></div>
      </div>
    `;
    skillsContainer.appendChild(skillItem);
  });
}

function loadEducation(education) {
  const timeline = document.querySelector('.timeline');
  if (!timeline || !education) return;
  
  timeline.innerHTML = ''; // Limpiar existentes
  education.forEach((edu, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
    timelineItem.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-date">${edu.year}</div>
        <h3>${edu.institution}</h3>
        <p>${edu.degree}</p>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });
}

function loadProjects(projects) {
  const projectsGrid = document.querySelector('.projects-grid');
  if (!projectsGrid || !projects) return;
  
  projectsGrid.innerHTML = ''; // Limpiar existentes
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.link}" target="_blank">Ver Proyecto</a>
          <a href="${project.link}" target="_blank">Código Fuente</a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });
}

function setupHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

function setupSkillsAnimation() {
  const animateSkills = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('#skills');
    
    if (isElementInViewport(skillsSection)) {
      skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = `${level}%`;
        }, 100);
      });
      window.removeEventListener('scroll', animateSkills);
    }
  };
  
  window.addEventListener('scroll', animateSkills);
}

function setupTypewriterEffect(element) {
  const text = element.textContent;
  element.textContent = '';
  
  let i = 0;
  const typingEffect = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingEffect);
    }
  }, 100);
}

function isElementInViewport(el) {
  if (!el) return false;
  
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}