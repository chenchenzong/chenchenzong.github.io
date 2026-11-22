const themeButton = document.querySelector('.theme-toggle');
const themes = ['auto', 'light', 'dark'];

themeButton?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme || 'auto';
  const next = themes[(themes.indexOf(current) + 1) % themes.length];
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
  themeButton.title = `Color theme: ${next}`;
});

const newsToggle = document.querySelector('.news-toggle');
newsToggle?.addEventListener('click', () => {
  const expanded = newsToggle.getAttribute('aria-expanded') === 'true';
  document.querySelectorAll('.news-extra').forEach((item) => { item.hidden = expanded; });
  newsToggle.setAttribute('aria-expanded', String(!expanded));
  newsToggle.textContent = expanded ? 'Show all' : 'Show less';
});

const search = document.querySelector('#publication-search');
search?.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  const publications = [...document.querySelectorAll('.all-publications .publication')];
  let visibleCount = 0;

  publications.forEach((publication) => {
    const visible = publication.textContent.toLowerCase().includes(query);
    publication.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  document.querySelectorAll('.year-heading').forEach((heading) => {
    let sibling = heading.nextElementSibling;
    let hasVisiblePaper = false;
    while (sibling && !sibling.classList.contains('year-heading')) {
      if (sibling.classList.contains('publication') && !sibling.hidden) hasVisiblePaper = true;
      sibling = sibling.nextElementSibling;
    }
    heading.hidden = !hasVisiblePaper;
  });

  document.querySelector('.empty-state').hidden = visibleCount !== 0;
});

