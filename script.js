(function () {
  'use strict';

  var root = document.documentElement;

  // ---- Dark mode toggle (remembers choice) ----
  var themeBtn = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) { /* storage unavailable */ }
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');

  function setMenu(open) {
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.textContent = open ? '✕' : '☰';
  }

  navToggle.addEventListener('click', function () {
    setMenu(!navMenu.classList.contains('open'));
  });

  navMenu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  // ---- Project filter ----
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projects = document.querySelectorAll('.project');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      projects.forEach(function (card) {
        var cats = card.getAttribute('data-category').split(' ');
        var show = filter === 'all' || cats.indexOf(filter) !== -1;
        card.classList.toggle('hidden', !show);
      });
    });
  });

  // ---- Footer year ----
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
