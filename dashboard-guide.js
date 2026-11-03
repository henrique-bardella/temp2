export function initDashboardGuide(areas, { notice = '', selector = '.reading-journey li' } = {}) {
  const dialog = document.querySelector('#dashboard-guide');
  if (!dialog) return;
  const title = dialog.querySelector('#dashboard-guide-title');
  const description = dialog.querySelector('#dashboard-guide-description');
  const viewport = dialog.querySelector('.dashboard-guide-crop');
  const image = dialog.querySelector('img');
  const highlight = dialog.querySelector('.dashboard-guide-highlight');
  const zoom = dialog.querySelector('[data-toggle-guide-zoom]');
  const caption = dialog.querySelector('#dashboard-guide-caption');
  const status = dialog.querySelector('[role="status"]');
  let trigger;
  let currentArea;
  let expanded = false;

  function renderView() {
    const area = currentArea;
    viewport.style.aspectRatio = expanded ? `${area.width} / ${area.height}` : `${area.imageWidth} / ${area.imageHeight}`;
    viewport.style.maxWidth = expanded ? `${Math.max(area.width, 420)}px` : '100%';
    image.style.width = expanded ? `${area.imageWidth / area.width * 100}%` : '100%';
    image.style.left = expanded ? `${-area.x / area.width * 100}%` : '0';
    image.style.top = expanded ? `${-area.y / area.height * 100}%` : '0';
    image.alt = expanded ? `Trecho do dashboard: ${area.title}. ${area.description}` : `Dashboard ${area.pageTitle || area.title}, com a área de ${area.title} destacada.`;
    highlight.hidden = expanded;
    highlight.style.left = `${area.x / area.imageWidth * 100}%`;
    highlight.style.top = `${area.y / area.imageHeight * 100}%`;
    highlight.style.width = `${area.width / area.imageWidth * 100}%`;
    highlight.style.height = `${area.height / area.imageHeight * 100}%`;
    zoom.textContent = expanded ? 'Ver dashboard completo' : 'Ampliar trecho';
    zoom.setAttribute('aria-pressed', String(expanded));
    caption.textContent = expanded ? 'Trecho ampliado para leitura dos detalhes.' : 'A área destacada mostra onde encontrar este item no dashboard.';
  }
  zoom.addEventListener('click', () => {
    expanded = !expanded;
    renderView();
  });

  document.querySelectorAll(selector).forEach((item, index) => {
    const area = areas[index];
    if (!area) return;
    const content = item.querySelector('div');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'dashboard-guide-trigger';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', dialog.id);
    const heading = content.querySelector('h3');
    const label = document.createElement('span');
    label.className = 'dashboard-guide-heading';
    label.textContent = heading.textContent;
    const copy = document.createElement('span');
    copy.className = 'dashboard-guide-copy';
    copy.textContent = content.querySelector('p').textContent;
    const action = document.createElement('span');
    action.className = 'dashboard-guide-action';
    action.textContent = 'Ver localização no dashboard →';
    button.append(label, copy, action);
    content.replaceWith(button);
    button.addEventListener('click', () => {
      trigger = button;
      currentArea = area;
      expanded = false;
      zoom.disabled = true;
      title.textContent = area.title;
      description.textContent = [area.description, notice].filter(Boolean).join(' ');
      viewport.hidden = true;
      status.hidden = false;
      status.textContent = 'Carregando imagem…';
      renderView();
      image.onload = () => { viewport.hidden = false; status.hidden = true; zoom.disabled = false; };
      image.onerror = () => { status.textContent = 'A imagem deste dashboard ainda não está disponível.'; };
      image.src = new URL(`../images/${area.image}`, import.meta.url).href;
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('dashboard-guide-open');
    });
  });
  dialog.querySelector('[data-close-guide]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.querySelector('.dashboard-guide-content').addEventListener('click', (event) => event.stopPropagation());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dashboard-guide-open');
    trigger?.focus();
  });
}

