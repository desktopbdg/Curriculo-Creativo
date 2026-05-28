
function createWindow(id) {
  var w = 560;
  var h = 420;
  var randomTop = 60 + Math.floor(Math.random() * 60);
  var randomLeft = 100 + Math.floor(Math.random() * 200);

  var win = document.createElement("div");
  win.className = "window";
  win.id = "win-" + id;
  win.style.width = w + "px";
  win.style.height = h + "px";
  win.style.top = randomTop + "px";
  win.style.left = randomLeft + "px";

  var header = document.createElement("div");
  header.className = "window-header";

  var title = document.createElement("span");
  title.className = "window-title";
  title.textContent = t(id);

  var buttons = document.createElement("div");
  buttons.className = "window-buttons";

  var minBtn = document.createElement("button");
  minBtn.className = "window-btn";
  minBtn.innerHTML = "&#8211;";
  minBtn.addEventListener("click", function() { minimizeWindow("win-" + id); });

  var maxBtn = document.createElement("button");
  maxBtn.className = "window-btn";
  maxBtn.innerHTML = "&#9723;";
  maxBtn.addEventListener("click", function() { maximizeWindow("win-" + id); });

  var closeBtn = document.createElement("button");
  closeBtn.className = "window-btn close-btn";
  closeBtn.innerHTML = "&#10005;";
  closeBtn.addEventListener("click", function() { closeWindow("win-" + id); });

  buttons.appendChild(minBtn);
  buttons.appendChild(maxBtn);
  buttons.appendChild(closeBtn);

  header.appendChild(title);
  header.appendChild(buttons);

  var body = document.createElement("div");
  body.className = "window-body";
  body.innerHTML = getWindowContent(id);

  var resizeHandle = document.createElement("div");
  resizeHandle.className = "window-resize";

  win.appendChild(header);
  win.appendChild(body);
  win.appendChild(resizeHandle);

  win.addEventListener("mousedown", function() { bringToFront("win-" + id); });

  document.getElementById("windowsArea").appendChild(win);

  setupWindowDrag(win);
  setupWindowResize(win);

  if (id === "projetos") {
    var searchInput = body.querySelector(".project-search");
    if (searchInput) {
      searchInput.addEventListener("input", function() {
        filterProjects(win);
      });
    }
    var filterBtns = body.querySelectorAll(".filter-btn");
    for (var i = 0; i < filterBtns.length; i++) {
      filterBtns[i].addEventListener("click", function() {
        var allBtns = body.querySelectorAll(".filter-btn");
        for (var j = 0; j < allBtns.length; j++) {
          allBtns[j].classList.remove("active");
        }
        this.classList.add("active");
        filterProjects(win);
      });
    }
  }

  if (id === "lixeira") {
    var restoreBtns = body.querySelectorAll(".trash-restore-btn");
    for (var i = 0; i < restoreBtns.length; i++) {
      restoreBtns[i].addEventListener("click", function() {
        restoreFromTrash(this.getAttribute("data-restore"));
      });
    }
  }

  return win;
}

function openApp(id) {
  if (id === "cv" || id === "cc") {
    let url = id === "cv" ? "download/CV.pdf" : "download/CC.pdf";
    window.open(url, "_blank");
    return;
  }


  var winId = "win-" + id;
  var win = document.getElementById(winId);

  if (!win) {
    win = createWindow(id);
  }

  win.classList.add("open");
  bringToFront(winId);
  openWindows[id] = true;

  var pin = document.getElementById("pin-" + id);
  if (pin) pin.classList.add("active");
}

function closeWindow(winId) {
  var win = document.getElementById(winId);
  if (!win) return;

  var id = winId.replace("win-", "");
  delete openWindows[id];

  var pin = document.getElementById("pin-" + id);
  if (pin) pin.classList.remove("active");

  win.parentNode.removeChild(win);
}

function minimizeWindow(winId) {
  var win = document.getElementById(winId);
  if (win) win.classList.remove("open");
}

function maximizeWindow(winId) {
  var win = document.getElementById(winId);
  if (!win) return;

  if (win.getAttribute("data-maximized") === "1") {
    win.style.top = win.getAttribute("data-prev-top");
    win.style.left = win.getAttribute("data-prev-left");
    win.style.width = win.getAttribute("data-prev-width");
    win.style.height = win.getAttribute("data-prev-height");
    win.style.borderRadius = "8px";
    win.setAttribute("data-maximized", "");
  } else {
    win.setAttribute("data-prev-top", win.style.top);
    win.setAttribute("data-prev-left", win.style.left);
    win.setAttribute("data-prev-width", win.style.width);
    win.setAttribute("data-prev-height", win.style.height);
    win.style.top = "0";
    win.style.left = "0";
    win.style.width = "100%";
    win.style.height = "calc(100% - 44px)";
    win.style.borderRadius = "0";
    win.setAttribute("data-maximized", "1");
  }

  bringToFront(winId);
}

function bringToFront(winId) {
  var allWindows = document.querySelectorAll(".window");
  for (var i = 0; i < allWindows.length; i++) {
    allWindows[i].classList.remove("focused");
  }
  var win = document.getElementById(winId);
  if (win) {
    topZIndex++;
    win.style.zIndex = topZIndex;
    win.classList.add("focused");
  }
}

function toggleApp(id) {
  var winId = "win-" + id;
  var win = document.getElementById(winId);

  if (win && win.classList.contains("open") && win.classList.contains("focused")) {
    minimizeWindow(winId);
  } else if (win && win.classList.contains("open")) {
    bringToFront(winId);
  } else {
    openApp(id);
  }
}

function closeAllWindows() {
  var allWindows = document.querySelectorAll(".window");
  for (var i = 0; i < allWindows.length; i++) {
    allWindows[i].parentNode.removeChild(allWindows[i]);
  }
  var allPins = document.querySelectorAll(".pin-btn");
  for (var i = 0; i < allPins.length; i++) {
    allPins[i].classList.remove("active");
  }
  openWindows = {};
}

var windowDragEl = null;
var windowDragOffX = 0;
var windowDragOffY = 0;
var resizeEl = null;

function setupWindowDrag(win) {
  var header = win.querySelector(".window-header");
  header.addEventListener("mousedown", function(e) {
    if (e.target.closest(".window-buttons")) return;
    if (win.getAttribute("data-maximized") === "1") return;
    windowDragEl = win;
    var rect = win.getBoundingClientRect();
    windowDragOffX = e.clientX - rect.left;
    windowDragOffY = e.clientY - rect.top;
    bringToFront(win.id);
    e.preventDefault();
  });
  header.addEventListener("dblclick", function() {
    maximizeWindow(win.id);
  });
}

function setupWindowResize(win) {
  var handle = win.querySelector(".window-resize");
  handle.addEventListener("mousedown", function(e) {
    resizeEl = win;
    e.preventDefault();
    e.stopPropagation();
  });
}

document.addEventListener("mousemove", function(e) {
  if (windowDragEl) {
    windowDragEl.style.left = (e.clientX - windowDragOffX) + "px";
    windowDragEl.style.top = (e.clientY - windowDragOffY) + "px";
  }
  if (resizeEl) {
    var rect = resizeEl.getBoundingClientRect();
    var newW = Math.max(380, e.clientX - rect.left);
    var newH = Math.max(260, e.clientY - rect.top);
    resizeEl.style.width = newW + "px";
    resizeEl.style.height = newH + "px";
  }
});

document.addEventListener("mouseup", function() {
  windowDragEl = null;
  resizeEl = null;
});

function updateClock() {
  var now = new Date();
  var hours = String(now.getHours()).padStart(2, "0");
  var minutes = String(now.getMinutes()).padStart(2, "0");
  var timeStr = hours + ":" + minutes;

  document.getElementById("lockTime").textContent = timeStr;
  document.getElementById("clockTime").textContent = timeStr;

  var locale = lang === "pt" ? "pt-BR" : "en-US";

  document.getElementById("lockDate").textContent = now.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("clockDate").textContent = now.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function fetchWeather() {}

document.getElementById("loginBtn").addEventListener("click", function() {
  var lock = document.getElementById("lockScreen");
  lock.classList.add("hidden");
  setTimeout(function() {
    lock.style.display = "none";
    document.getElementById("desktop").classList.add("visible");
  }, 700);
});

document.getElementById("loginInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    document.getElementById("loginBtn").click();
  }
});

document.getElementById("logoutBtn").addEventListener("click", function() {
  closeAllWindows();
  hideStartMenu();
  document.getElementById("desktop").classList.remove("visible");
  var lock = document.getElementById("lockScreen");
  lock.style.display = "";
  lock.classList.remove("hidden");
  document.getElementById("loginInput").value = "";
});

document.getElementById("langBtn").addEventListener("click", function() {
  if (lang === "pt") {
    lang = "en";
    document.getElementById("langBtn").textContent = "ENG";
  } else {
    lang = "pt";
    document.getElementById("langBtn").textContent = "PT";
  }
  document.documentElement.lang = lang;
  buildDesktopIcons();
  buildStartMenu();
  buildTaskbarPins();
  updateClock();
  document.getElementById("startSearch").placeholder = t("search");
  document.getElementById("logoutText").textContent = t("logout");
});

function toggleStartMenu() {
  document.getElementById("startMenu").classList.toggle("visible");
}

function hideStartMenu() {
  document.getElementById("startMenu").classList.remove("visible");
}

document.getElementById("startBtn").addEventListener("click", function(e) {
  e.stopPropagation();
  toggleStartMenu();
});

document.getElementById("startSearch").addEventListener("input", function(e) {
  var query = e.target.value.toLowerCase();
  var items = document.querySelectorAll(".start-menu-item");
  for (var i = 0; i < items.length; i++) {
    var text = items[i].querySelector("span").textContent.toLowerCase();
    if (text.indexOf(query) >= 0) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
});

document.getElementById("weatherArea").addEventListener("click", function() {
  window.open("https://www.msn.com/pt-pt/meteorologia", "_blank");
});

var wallpapers = [
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  "linear-gradient(135deg, #141e30, #243b55)",
  "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
  "linear-gradient(135deg, #232526, #414345)",
  "linear-gradient(135deg, #2d1b69, #11998e)",
  "linear-gradient(135deg, #0c0c1d, #1a1a3e, #2e1065)",
  "linear-gradient(to bottom, #020111 10%, #3a0164 40%, #6b0f72 60%, #c94b4b 80%, #f09819 100%)"
];
var wallpaperIndex = 0;

document.getElementById("desktop").addEventListener("contextmenu", function(e) {
  if (e.target.closest(".window") || e.target.closest(".taskbar") || e.target.closest(".start-menu")) return;
  e.preventDefault();
  var menu = document.getElementById("contextMenu");
  menu.innerHTML = '<div class="context-item" data-action="refresh">' + t("refresh") + '</div>' +
    '<div class="context-divider"></div>' +
    '<div class="context-item" data-action="wallpaper">' + t("wallpaper") + '</div>' +
    '<div class="context-divider"></div>' +
    '<div class="context-item" data-action="about">' + t("about") + '</div>';
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY + "px";
  menu.classList.add("visible");
});

document.getElementById("contextMenu").addEventListener("click", function(e) {
  var item = e.target.closest(".context-item");
  if (!item) return;
  var action = item.getAttribute("data-action");
  if (action === "refresh") location.reload();
  if (action === "wallpaper") {
    wallpaperIndex = (wallpaperIndex + 1) % wallpapers.length;
    document.getElementById("desktop").style.background = wallpapers[wallpaperIndex];
  }
  if (action === "about") openApp("sobre_mim");
  if (action === "closewin") {
    var winId = item.getAttribute("data-winid");
    if (winId) closeWindow(winId);
  }
  document.getElementById("contextMenu").classList.remove("visible");
});

document.addEventListener("click", function(e) {
  if (!e.target.closest(".start-menu") && !e.target.closest("#startBtn")) {
    hideStartMenu();
  }
  if (!e.target.closest(".context-menu")) {
    document.getElementById("contextMenu").classList.remove("visible");
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    hideStartMenu();
    document.getElementById("contextMenu").classList.remove("visible");
  }
});

buildDesktopIcons();
buildStartMenu();
buildTaskbarPins();
updateClock();
setInterval(updateClock, 1000);
