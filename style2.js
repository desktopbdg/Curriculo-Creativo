
function startIconDrag(e) {
  var icon = e.currentTarget;
  var appId = icon.getAttribute("data-app");
  if (appId === "lixeira") return;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  draggingIcon = icon;
  isDragging = false;
  var rect = icon.getBoundingClientRect();
  dragOffsetX = e.clientX - rect.left;
  dragOffsetY = e.clientY - rect.top;
  e.preventDefault();
}

document.addEventListener("mousemove", function(e) {
  if (!draggingIcon) return;
  var dx = Math.abs(e.clientX - dragStartX);
  var dy = Math.abs(e.clientY - dragStartY);
  if (!isDragging && (dx > 5 || dy > 5)) {
    isDragging = true;
    draggingIcon.classList.add("dragging");
  }
  if (isDragging) {
    draggingIcon.style.left = (e.clientX - dragOffsetX) + "px";
    draggingIcon.style.top = (e.clientY - dragOffsetY) + "px";
    var trashEl = document.querySelector('[data-app="lixeira"]');
    if (trashEl) {
      var trashRect = trashEl.getBoundingClientRect();
      var mouseOnTrash = e.clientX > trashRect.left && e.clientX < trashRect.right && e.clientY > trashRect.top && e.clientY < trashRect.bottom;
      if (mouseOnTrash) {
        trashEl.style.background = "rgba(232, 17, 35, 0.2)";
        trashEl.style.border = "2px dashed #e81123";
      } else {
        trashEl.style.background = "";
        trashEl.style.border = "";
      }
    }
  }
});

document.addEventListener("mouseup", function(e) {
  if (!draggingIcon) return;
  if (isDragging) {
    var appId = draggingIcon.getAttribute("data-app");
    var trashEl = document.querySelector('[data-app="lixeira"]');
    if (trashEl) {
      var trashRect = trashEl.getBoundingClientRect();
      var droppedOnTrash = e.clientX > trashRect.left && e.clientX < trashRect.right && e.clientY > trashRect.top && e.clientY < trashRect.bottom;
      trashEl.style.background = "";
      trashEl.style.border = "";
      if (droppedOnTrash && appId !== "lixeira") {
        sendToTrash(appId);
        draggingIcon.classList.remove("dragging");
        draggingIcon.style.left = "";
        draggingIcon.style.top = "";
        draggingIcon = null;
        isDragging = false;
        return;
      }
    }
    draggingIcon.classList.remove("dragging");
    draggingIcon.style.left = "";
    draggingIcon.style.top = "";
  }
  draggingIcon = null;
  isDragging = false;
});

function sendToTrash(appId) {
  var appIndex = -1;
  for (var i = 0; i < apps.length; i++) {
    if (apps[i].id === appId) {
      appIndex = i;
      break;
    }
  }
  if (appIndex === -1) return;
  var removed = apps.splice(appIndex, 1)[0];
  trashBin.push(removed);
  closeWindow("win-" + appId);
  buildDesktopIcons();
  buildStartMenu();
  buildTaskbarPins();
  updateTrashWindow();
}

function restoreFromTrash(appId) {
  var trashIndex = -1;
  for (var i = 0; i < trashBin.length; i++) {
    if (trashBin[i].id === appId) {
      trashIndex = i;
      break;
    }
  }
  if (trashIndex === -1) return;
  var restored = trashBin.splice(trashIndex, 1)[0];
  var insertBefore = apps.length - 1;
  if (insertBefore < 0) insertBefore = 0;
  apps.splice(insertBefore, 0, restored);
  buildDesktopIcons();
  buildStartMenu();
  buildTaskbarPins();
  updateTrashWindow();
}

function updateTrashWindow() {
  var body = document.querySelector("#win-lixeira .window-body");
  if (!body) return;
  body.innerHTML = getLixeiraContent();
  var restoreBtns = body.querySelectorAll(".trash-restore-btn");
  for (var i = 0; i < restoreBtns.length; i++) {
    restoreBtns[i].addEventListener("click", function() {
      restoreFromTrash(this.getAttribute("data-restore"));
    });
  }
}

function handleIconDblClick(e) {
  if (isDragging) return;
  var appId = e.currentTarget.getAttribute("data-app");
  openApp(appId);
}

function buildStartMenu() {
  var list = document.getElementById("startList");
  list.innerHTML = "";
  for (var i = 0; i < apps.length; i++) {
    var app = apps[i];
    var item = document.createElement("div");
    item.className = "start-menu-item";
    item.setAttribute("data-app", app.id);
    item.innerHTML = app.icon.replace(/width="\d+"/, 'width="18"').replace(/height="\d+"/, 'height="18"') + "<span>" + t(app.id) + "</span>";
    item.addEventListener("click", function() {
      var id = this.getAttribute("data-app");
      openApp(id);
      hideStartMenu();
    });
    list.appendChild(item);
  }
}

function buildTaskbarPins() {
  var container = document.getElementById("taskbarPins");
  container.innerHTML = "";
  for (var i = 0; i < apps.length; i++) {
    var app = apps[i];
    if (!app.pinned) continue;
    var btn = document.createElement("button");
    btn.className = "taskbar-btn pin-btn";
    btn.id = "pin-" + app.id;
    btn.title = t(app.id);
    btn.innerHTML = app.icon.replace(/width="\d+"/, 'width="18"').replace(/height="\d+"/, 'height="18"');
    btn.setAttribute("data-app", app.id);
    btn.addEventListener("click", function() {
      toggleApp(this.getAttribute("data-app"));
    });
    btn.addEventListener("contextmenu", function(e) {
      e.preventDefault();
      e.stopPropagation();
      var appId = this.getAttribute("data-app");
      var winId = "win-" + appId;
      var win = document.getElementById(winId);
      if (!win) return;
      var menu = document.getElementById("contextMenu");
      menu.innerHTML = '<div class="context-item" data-action="closewin" data-winid="' + winId + '">' + t("close_window") + '</div>';
      menu.style.left = e.clientX + "px";
      menu.style.top = e.clientY + "px";
      menu.classList.add("visible");
    });
    container.appendChild(btn);
  }
}

function getProjetosContent() {
  var html = '<h2>' + t("projetos") + '</h2>';
  html += '<div class="project-toolbar">';
  html += '<input type="text" class="project-search" placeholder="' + t("search_app") + '">';
  html += '<div class="project-filters">';
  html += '<button class="filter-btn active" data-filter="all">' + t("filter_all") + '</button>';
  html += '<button class="filter-btn" data-filter="image">' + t("filter_image") + '</button>';
  html += '<button class="filter-btn" data-filter="video">' + t("filter_video") + '</button>';
  html += '<button class="filter-btn" data-filter="site">' + t("filter_site") + '</button>';
  html += '<button class="filter-btn" data-filter="app">' + t("filter_app") + '</button>';
  html += '<button class="filter-btn" data-filter="animation">' + t("filter_animation") + '</button>';
  html += '</div></div>';

  var appGroups = {};
  var appOrder = [];
  for (var i = 0; i < projectData.length; i++) {
    var p = projectData[i];
    if (!appGroups[p.app]) {
      appGroups[p.app] = [];
      appOrder.push(p.app);
    }
    appGroups[p.app].push(p);
  }

  for (var i = 0; i < appOrder.length; i++) {
    var appName = appOrder[i];
    var projects = appGroups[appName];
    html += '<div class="project-section" data-app="' + appName + '">';
    html += '<div class="project-section-title">' + appName + '</div>';
    html += '<div class="project-grid">';
    for (var j = 0; j < projects.length; j++) {
      var p = projects[j];
      var title = lang === "pt" ? p.title_pt : p.title_en;
      var desc = lang === "pt" ? p.desc_pt : p.desc_en;
      html += '<div class="project-card" data-type="' + p.type + '">';
      if (p.video) {
        html += '<div class="project-preview">';
        html += '<video muted autoplay loop>';
        html += '<source src="' + p.video + '" type="video/mp4">';
        html += '</video>';
        html += '</div>';
      } else {
        html += '<div class="project-preview">';
        html += '<img src="' + p.img + '">';
        html += '</div>';
      }
      html += '<div class="project-info">';
      html += '<div class="project-title">' + title + '</div>';
      html += '<p class="project-desc">' + desc + '</p>';
      html += '<div class="project-downloads">';

      html += '<a href="' + p.finalFile + '" class="download-btn" target="_blank">';
      html += t("download_final") + ' .' + p.fileFinal;
      html += '</a>';
      html += '</div></div></div>';
    }
    html += '</div></div>';
  }

  return html;
}


function getSobreMimContent() {
  var html = '<h2>' + t("sobre_mim") + '</h2>';

  html += '<div class="about-section">';
  html += '<h3>' + t("presentation") + '</h3>';
  html += '<div style="display:flex;gap:16px;align-items:flex-start">';
  html += '<img src="imgs/avatar.jpg" style="width:90px;height:90px;border-radius:50%;flex-shrink:0;border:2px solid rgba(255,255,255,0.15)">';
  html += '<div>';
  html += '<p>' + t("about_text") + '</p>';
  html += '</div></div>';
  html += '</div>';

  html += '<div class="about-section">';
  html += '<h3>' + t("digital_comp") + '</h3>';
  for (var i = 0; i < digitalComp.length; i++) {
    var c = digitalComp[i];
    html += '<div class="skill-row">';
    html += '<span class="skill-name">' + t(c.key) + '</span>';
    html += '<div class="skill-bar"><div class="skill-fill" style="width:' + c.pct + '%"></div></div>';
    html += '<span class="skill-pct">' + c.pct + '%</span>';
    html += '</div>';
  }
  html += '</div>';

  html += '<div class="about-section">';
  html += '<h3>' + t("personal_comp") + '</h3>';
  for (var i = 0; i < personalComp.length; i++) {
    var c = personalComp[i];
    html += '<div class="skill-row">';
    html += '<span class="skill-name">' + t(c.key) + '</span>';
    html += '<div class="skill-bar"><div class="skill-fill" style="width:' + c.pct + '%"></div></div>';
    html += '<span class="skill-pct">' + c.pct + '%</span>';
    html += '</div>';
  }
  html += '</div>';

  html += '<div class="about-section">';
  html += '<h3>' + t("languages_title") + '</h3>';
  var langData = [
    { name_pt: "Português", name_en: "Portuguese", level: "native_level", cls: "native" },
    { name_pt: "Inglês", name_en: "English", level: "fluent_level", cls: "fluent" },
    { name_pt: "Espanhol", name_en: "Spanish", level: "beginner_level", cls: "beginner" },
    { name_pt: "Francês", name_en: "French", level: "beginner_level", cls: "beginner" }
  ];
  for (var i = 0; i < langData.length; i++) {
    var l = langData[i];
    var lName = lang === "pt" ? l.name_pt : l.name_en;
    html += '<div class="lang-row">';
    html += '<span class="lang-name">' + lName + '</span>';
    html += '<span class="lang-level ' + l.cls + '">' + t(l.level) + '</span>';
    html += '</div>';
  }
  html += '</div>';

  html += '<div class="about-section">';
  html += '<h3>' + t("formation") + '</h3>';
  html += '<div class="edu-card">';
  html += '<div class="edu-course">' + t("basic_edu") + '</div>';
  html += '<div class="edu-school">Escola Básica Marquesa de Alorna</div>';
  html += '<div class="edu-date">2020 - 2024</div>';
  html += '</div>';
  html += '<div class="edu-card">';
  html += '<div class="edu-course">' + t("multimedia_course") + '</div>';
  html += '<div class="edu-school">Escola Profissional de Artes, Tecnologia e Desporto</div>';
  html += '<div class="edu-date">2025 - 2027</div>';
  html += '</div>';
  html += '</div>';

  html += '<div class="about-section">';
  html += '<h3>' + t("interests") + '</h3>';
  html += '<div class="interests-container">';
  var interestKeys = ["int_3d2d", "int_animation", "int_photography", "int_web", "int_apps"];
  for (var i = 0; i < interestKeys.length; i++) {
    html += '<span class="interest-pill">' + t(interestKeys[i]) + '</span>';
  }
  html += '</div></div>';

  return html;
}

function getContatosContent() {
  var html = '<h2>' + t("contatos") + '</h2>';
  html += '<p>' + t("contact_intro") + '</p>';
  html += '<div class="contact-list">';

  html += '<div class="contact-row">';
  html += '<div class="contact-info">';
  html += '<div class="contact-label">' + t("email_school") + '</div>';
  html += '<a href="mailto:aluno224168@epad.edu.pt" class="contact-value">aluno224168@epad.edu.pt</a>';
  html += '</div></div>';

  html += '<div class="contact-row">';
  html += '<div class="contact-info">';
  html += '<div class="contact-label">' + t("email_pro") + '</div>';
  html += '<a href="mailto:beatrizdiasgomes20@email.com" class="contact-value">beatrizdiasgomes20@email.com</a>';
  html += '</div></div>';

  html += '<div class="contact-row">';
  html += '<div class="contact-info">';
  html += '<div class="contact-label">' + t("phone") + '</div>';
  html += '<span class="contact-value">+351 932 196 314</span>';
  html += '</div></div>';

  html += '<div class="contact-row">';
  html += '<div class="contact-info">';
  html += '<div class="contact-label">WhatsApp</div>';
  html += '<span class="contact-value">+351 932 196 314</span>';
  html += '</div>';
  html += '<img class="contact-qr" src="imgs/whatsapp_qrcode.png" alt="WhatsApp QR">';
  html += '</div>';

  html += '<div class="contact-row">';
  html += '<div class="contact-info">';
  html += '<div class="contact-label">Instagram</div>';
  html += '<a href="https://instagram.com/beatriz.dg" target="_blank" class="contact-value">@beatriz_.d.g</a>';
  html += '</div>';
  html += '<img class="contact-qr" src="imgs/insta_qrcode.png" alt="Instagram QR">';
  html += '</div>';

  html += '<div class="contact-row">';
  html += '<div class="contact-info">';
  html += '<div class="contact-label">LinkedIn</div>';
  html += '<a href="https://linkedin.com/in/beatriz-dg" target="_blank" class="contact-value">linkedin.com/in/beatriz-dg</a>';
  html += '</div>';
  html += '<img class="contact-qr" src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://linkedin.com/in/beatriz-dg" alt="LinkedIn QR">';
  html += '</div>';

  html += '</div>';
  return html;
}

function getAplicacoesContent() {
  var html = '<h2>' + t("aplicacoes") + '</h2>';
  html += '<p>' + t("apps_desc") + '</p>';
  for (var i = 0; i < toolsData.length; i++) {
    var tool = toolsData[i];
    var ti = toolIcons[tool.name] || { color: "#555", abbr: "?" };
    html += '<div class="skill-row">';
    html += '<span class="tool-icon ' + tool.name.replace(/\s+/g, '-').toLowerCase() + '">';
    html += '<img src="' + ti.img + '" alt="' + tool.name + '">';
    html += '</span>';
    html += '<span class="skill-name">' + tool.name + '</span>';
    html += '<div class="skill-bar"><div class="skill-fill" style="width:' + tool.pct + '%"></div></div>';
    html += '<span class="skill-pct">' + tool.pct + '%</span>';
    html += '</div>';
  }
  return html;
}

function getLixeiraContent() {
  if (trashBin.length === 0) {
    return '<div class="trash-empty-msg">' + trashIcon + '<p>' + t("trash_empty") + '</p></div>';
  }
  var html = "<h2>" + t("lixeira") + "</h2>";
  for (var i = 0; i < trashBin.length; i++) {
    html += '<div class="trash-item"><span>' + t(trashBin[i].id) + '</span><button class="trash-restore-btn" data-restore="' + trashBin[i].id + '">' + t("restore") + '</button></div>';
  }
  return html;
}

function getWindowContent(id) {
  if (id === "projetos") return getProjetosContent();
  if (id === "sobre_mim") return getSobreMimContent();
  if (id === "contatos") return getContatosContent();
  if (id === "aplicacoes") return getAplicacoesContent();
  if (id === "lixeira") return getLixeiraContent();
  return "";
}

function filterProjects(win) {
  var searchVal = win.querySelector(".project-search").value.toLowerCase();
  var activeBtn = win.querySelector(".filter-btn.active");
  var activeFilter = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
  var sections = win.querySelectorAll(".project-section");
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var appName = section.getAttribute("data-app").toLowerCase();
    var matchSearch = searchVal === "" || appName.indexOf(searchVal) >= 0;
    if (!matchSearch) {
      section.style.display = "none";
      continue;
    }
    var cards = section.querySelectorAll(".project-card");
    var visibleCount = 0;
    for (var j = 0; j < cards.length; j++) {
      var card = cards[j];
      var cardType = card.getAttribute("data-type");
      var matchType = activeFilter === "all" || cardType === activeFilter;
      card.style.display = matchType ? "" : "none";
      if (matchType) visibleCount++;
    }
    section.style.display = visibleCount > 0 ? "" : "none";
  }
}
