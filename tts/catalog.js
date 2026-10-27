const list = document.querySelector('#voices');
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const count = document.querySelector('#count');
let voices = [];
let toastTimer;
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function render() {
  const query = search.value.trim().toLocaleLowerCase('ru');
  const filtered = voices.filter(v => (!category.value || v.category === category.value) && `${v.name} ${v.id} ${v.category}`.toLocaleLowerCase('ru').includes(query));
  list.replaceChildren();
  for (const voice of filtered) {
    const card = element('article', 'voice');
    const top = element('div', 'voice-top');
    top.append(element('div', 'avatar', [...voice.name][0]?.toLocaleUpperCase('ru') || '♪'));
    const title = element('div');
    title.append(element('h2', '', voice.name), element('span', 'tag', voice.category)); top.append(title);
    const command = element('div', 'command');
    const text = `!tts ${voice.id}`;
    const copy = element('button', 'copy', '⧉'); copy.type = 'button'; copy.dataset.copy = text; copy.setAttribute('aria-label', `Скопировать ${text}`);
    command.append(element('code', '', text), copy);
    const audio = element('audio'); audio.controls = true; audio.preload = 'metadata'; audio.src = voice.audio; audio.setAttribute('aria-label', `Образец голоса ${voice.name}`);
    audio.addEventListener('play', () => document.querySelectorAll('audio').forEach(other => { if (other !== audio) other.pause(); }));
    card.append(top, command, audio); list.append(card);
  }
  count.textContent = `Найдено: ${filtered.length}`;
  document.querySelector('#empty').hidden = filtered.length > 0;
}
async function load() {
  document.querySelector('#error').hidden = true;
  try {
    const response = await fetch('voices.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const data = await response.json();
    if (!Array.isArray(data) || data.some(v => !/^[a-z0-9][a-z0-9_-]{0,39}$/.test(v.id) || typeof v.name !== 'string' || typeof v.category !== 'string' || !new RegExp(`^audio/${v.id}\\.wav\\?v=[a-f0-9]{12}$`).test(v.audio))) throw new Error('Invalid catalog');
    voices = data;
    category.replaceChildren(new Option('Все категории', ''));
    [...new Set(voices.map(v => v.category))].sort().forEach(value => category.add(new Option(value, value)));
    render();
  } catch {
    count.textContent = 'Ошибка загрузки'; list.replaceChildren(); document.querySelector('#empty').hidden = true; document.querySelector('#error').hidden = false;
  }
}
document.addEventListener('click', async event => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;
  let copied = false;
  try { await navigator.clipboard.writeText(button.dataset.copy); copied = true; } catch {
    const input = document.createElement('textarea'); input.value = button.dataset.copy; input.style.position = 'fixed'; input.style.opacity = '0'; document.body.append(input); input.select();
    try { copied = document.execCommand('copy'); } catch { /* Show selectable command below. */ }
    input.remove(); button.focus();
  }
  const toast = document.querySelector('#toast'); toast.textContent = copied ? `Скопировано: ${button.dataset.copy}` : `Скопируй команду: ${button.dataset.copy}`; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
});
search.addEventListener('input', render); category.addEventListener('change', render); document.querySelector('#retry').addEventListener('click', load);
load();
