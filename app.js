const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const root = document.documentElement.style;

function stars(n) {
  let h = "";
  for (let i = 0; i < 5; i++)
    h += `<svg class="star ${i < n ? "on" : ""}" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>`;
  return `<div class="stars" role="img" aria-label="Готово ${n} из 5">${h}</div>`;
}
const busy = k => k.orders.length ? SITE.busyLabel + k.orders.length : SITE.freeLabel;
const setK = k => { root.setProperty("--c1", k.color); root.setProperty("--c2", k.color2); root.setProperty("--ct", k.textColor); };
const photo = k => k.photo ? `<div class="bg" style="background-image:url('${esc(k.photo)}')"></div>` : "";

function init() {
  document.title = SITE.tabTitle;
  root.setProperty("--bg1", THEME.bg1); root.setProperty("--bg2", THEME.bg2);
  root.setProperty("--accent", THEME.accent); root.setProperty("--accent2", THEME.accent2);
  root.setProperty("--text", THEME.text);
  $("#welcomeTitle").textContent = SITE.welcomeTitle;
  $("#welcomeText").textContent = SITE.welcomeText;
  const tg = $("#tg"); tg.textContent = SITE.telegramLabel; tg.href = SITE.telegramUrl;
  $("#chooseTitle").textContent = SITE.chooseTitle;
  $("#chooseHint").textContent = SITE.chooseHint;
  $("#back").textContent = SITE.backButton;
  $("#ordersTitle").textContent = SITE.ordersTitle;
  $("#footer").textContent = SITE.footer;

  $("#track").innerHTML = KACHERS.map(k => `
    <a class="kcard" href="#${k.id}" style="--c1:${k.color};--c2:${k.color2};--ct:${k.textColor}">
      ${photo(k)}
      <div class="glass"><b>${esc(k.name)}</b><span>${esc(busy(k))}</span></div>
    </a>`).join("");

  $("#prev").onclick = () => $("#track").scrollBy({ left: -420, behavior: "smooth" });
  $("#next").onclick = () => $("#track").scrollBy({ left: 420, behavior: "smooth" });
  addEventListener("hashchange", route);
  route();
}

function route() {
  const k = KACHERS.find(x => "#" + x.id === location.hash);
  $("#home").hidden = !!k; $("#person").hidden = !k;
  document.body.classList.toggle("personal", !!k);
  scrollTo(0, 0);
  if (!k) return;
  setK(k);
  $("#profile").className = "profile" + (k.photo ? " hasphoto" : "");
    $("#profile").innerHTML = `${photo(k)}<div class="glass"><h1>${esc(k.name)}</h1><p>${esc(busy(k))}</p><small class="note">${esc(SITE.starsNote)}</small></div>`;
  $("#orders").innerHTML = k.orders.length
    ? k.orders.map((o, i) => `
      <article class="order">
        <div><h3>${SITE.orderWord}${i + 1}</h3>
        <p>${SITE.clientWord}${esc(o.client)}</p>
        <p>${SITE.itemWord}${esc(o.item)}</p></div>
        ${stars(o.progress)}
      </article>`).join("")
    : `<div class="empty">${esc(SITE.emptyOrders)}</div>`;
}
init();
