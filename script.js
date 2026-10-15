const PRODUCTS = [
  { id: 1,  name: 'Classic Crew Sweatshirt', price: 1299, img: 'image/darksweathsirt.jpg',   cat: 'men',   isNew: true  },
  { id: 2,  name: 'Washed Graphic Tee',      price: 899,  img: 'image/washedtee.jpg',        cat: 'men',   isNew: true  },
  { id: 3,  name: 'Essential Black Polo',    price: 799,  img: 'image/blackpolo.jpg',        cat: 'men',   isNew: false },
  { id: 4,  name: 'Relaxed Cream Tee',       price: 699,  img: 'image/creamtee.jpg',         cat: 'women', isNew: true  },
  { id: 5,  name: 'Long Brown Coat',         price: 3499, img: 'image/longbrowncoat.jpg',    cat: 'women', isNew: true  },
  { id: 6,  name: 'Black Utility Jacket',    price: 2799, img: 'image/blackutilityjacket.jpg',      cat: 'men',   isNew: true  },
  { id: 7,  name: 'Everyday Street Hoodie',  price: 1599, img: 'image/everydayjacket.jpg',     cat: 'men',   isNew: false },
  { id: 8,  name: 'Soft Knit Top',           price: 999,  img: 'image/softknit.jpg',          cat: 'women', isNew: false },
  { id: 9,  name: 'Kids Play Set',           price: 899,  img: 'image/kidsplayset.jpg',      cat: 'kids',  isNew: true  },
  { id: 10, name: 'Pleated Midi Skirt',      price: 1399, img: 'image/pleated.jpg',        cat: 'women', isNew: false },
  { id: 11, name: 'Baggy Denim Jeans',       price: 1499, img: 'image/baggydenim.jpg',       cat: 'men',   isNew: false },
  { id: 12, name: 'Kids Denim Jacket',       price: 1299, img: 'image/kidsdenim.jpg',  cat: 'kids',  isNew: false },
  { id: 13, name: 'Wide Leg Trousers',       price: 1799, img: 'image/wideleg.jpg',          cat: 'women', isNew: true  },
  { id: 14, name: 'Linen Button Shirt',      price: 1199, img: 'image/linenpolo.jpg',       cat: 'men',   isNew: false },
  { id: 15, name: 'Ribbed Long Sleeve',      price: 849,  img: 'image/ribbed.jpg', cat: 'women', isNew: false },
  { id: 16, name: 'Kids Striped Sweater',    price: 799,  img: 'image/kidsstripe.jpg',      cat: 'kids',  isNew: false },
  { id: 17, name: 'Kids Everyday Hoodie',    price: 1099, img: 'image/kidseveryday.jpg',       cat: 'kids',  isNew: true  },
  { id: 18, name: 'Boxy Cropped Jacket',     price: 2299, img: 'image/boxypolo.jpg',    cat: 'women', isNew: false },
  { id: 19, name: 'Relaxed Cargo Pants',     price: 1699, img: 'image/relaxedcargo.jpg',       cat: 'men',   isNew: true  },
  { id: 20, name: 'Kids Jogger Pants',       price: 649,  img: 'image/kidsjogger.jpg',      cat: 'kids',  isNew: false }
];

const NAV = [
  { label: 'HOME',  href: 'index.html' },
  { label: 'MEN',   href: 'men.html' },
  { label: 'WOMEN', href: 'women.html' },
  { label: 'KIDS',  href: 'kids.html' }
];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const peso = (n) => '₱' + n.toLocaleString('en-US');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const thisFile = () => location.pathname.split('/').pop() || 'index.html';

const store = {
  get(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v === null || v === undefined ? fallback : v;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }
};

const headerSlot = $('#site-header');
if (headerSlot) {
  const file = thisFile();
  headerSlot.innerHTML =
    '<div class="top-bar" id="top">' +
      '<p>FREE DELIVERY ON ORDERS ABOVE ₱999</p>' +
      '<div class="top-bar-links">' +
        '<button class="nav-btn" data-open="app">DOWNLOAD APP</button>' +
        '<button class="nav-btn" data-open="track">TRACK ORDER</button>' +
        '<button class="nav-btn" data-open="help">HELP</button>' +
      '</div>' +
    '</div>' +
    '<header class="navbar">' +
      '<div class="nav-left">' +
        NAV.map((n) => '<a href="' + n.href + '"' + (file === n.href ? ' class="current"' : '') + '>' + n.label + '</a>').join('') +
      '</div>' +
      '<a href="index.html" class="logo">GAZU</a>' +
      '<div class="nav-right">' +
        '<a href="search.html"' + (file === 'search.html' ? ' class="current"' : '') + '>SEARCH</a>' +
        '<a href="login.html" id="login-link"' + (file === 'login.html' ? ' class="current"' : '') + '>LOGIN</a>' +
        '<a href="wishlist.html"' + (file === 'wishlist.html' ? ' class="current"' : '') + '>WISHLIST</a>' +
      '</div>' +
    '</header>';
}

const footerSlot = $('#site-footer');
if (footerSlot) {
  footerSlot.innerHTML =
    '<footer class="footer" id="contact">' +
      '<div class="footer-top">' +
        '<div class="footer-info">' +
          '<h3>GAZU</h3>' +
          '<p>Fashion that moves with you.</p>' +
          '<p>Email: hello@gazu.com</p>' +
          '<p>Phone: +63 900 000 0000</p>' +
          '<p>Location: Cebu City, Philippines</p>' +
          '<div class="footer-social">' +
            '<a href="https://www.instagram.com/" target="_blank" rel="noopener">INSTAGRAM</a>' +
            '<a href="https://www.tiktok.com/" target="_blank" rel="noopener">TIKTOK</a>' +
            '<a href="https://www.facebook.com/" target="_blank" rel="noopener">FACEBOOK</a>' +
          '</div>' +
        '</div>' +
        '<form class="footer-form" id="contact-form">' +
          '<h3>CONTACT US</h3>' +
          '<input type="text" placeholder="Your Name" required>' +
          '<input type="email" placeholder="Your Email" required>' +
          '<textarea placeholder="Your Message" required></textarea>' +
          '<button type="submit">SEND MESSAGE</button>' +
        '</form>' +
      '</div>' +
      '<p class="copyright">&copy; 2026 GAZU. All rights reserved.</p>' +
    '</footer>';
}

document.body.insertAdjacentHTML('beforeend',
  '<div class="overlay" id="overlay"><div class="modal"><button class="modal-close" id="modal-close">&times;</button><div id="modal-body"></div></div></div>'
);

const overlay = $('#overlay');
const modalBody = $('#modal-body');

function openModal(html) {
  modalBody.innerHTML = html;
  overlay.classList.add('open');
}

function closeModal() {
  overlay.classList.remove('open');
}

function showMessage(title, text, onOk) {
  openModal('<h3>' + title + '</h3><p>' + text + '</p><button class="btn-dark" id="ok-btn">OK</button>');
  $('#ok-btn').onclick = () => {
    closeModal();
    if (onOk) onOk();
  };
}

$('#modal-close').onclick = closeModal;
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const getWish = () => store.get('wishlist', []);

function refreshHearts() {
  const wish = getWish();
  $$('.heart').forEach((h) => {
    const on = wish.includes(Number(h.dataset.id));
    h.classList.toggle('active', on);
    h.innerHTML = on ? '&#9829;' : '&#9825;';
  });
}

function toggleWish(id) {
  let wish = getWish();
  wish = wish.includes(id) ? wish.filter((x) => x !== id) : [...wish, id];
  store.set('wishlist', wish);
  refreshHearts();
  if (document.body.dataset.page === 'wishlist') renderWishlistPage();
}

const card = (p) =>
  '<div class="product">' +
    '<div class="product-img">' +
      '<img src="' + p.img + '" alt="' + esc(p.name) + '" onerror="this.style.display=\'none\'">' +
      '<span class="heart" data-id="' + p.id + '">&#9825;</span>' +
    '</div>' +
    '<h4>' + esc(p.name) + '</h4>' +
    '<p>' + peso(p.price) + '</p>' +
  '</div>';

function fillGrid(list, emptyHtml) {
  const grid = $('#collection-grid');
  grid.innerHTML = list.length ? list.map(card).join('') : '<p class="empty">' + emptyHtml + '</p>';
  const count = $('#result-count');
  if (count) count.textContent = list.length + ' ITEMS';
  refreshHearts();
}

function initListPage() {
  const b = document.body.dataset;
  const base = b.filter;

  const banner = $('#page-banner');
  banner.innerHTML =
    '<div class="page-banner-text"><p>GAZU</p><h1>' + esc(b.title) + '</h1><span>' + esc(b.sub) + '</span></div>' +
    '<img src="' + esc(b.banner) + '" alt="" onerror="this.style.display=\'none\'">';

  const inBase = (p) => {
    if (base === 'men' || base === 'women' || base === 'kids') return p.cat === base;
    if (base === 'new') return p.isNew;
    return true;
  };

  let cat = 'all';
  const showFilters = base === 'shop' || base === 'all' || base === 'new' || base === 'collection';
  const filterBox = $('#filters');

  if (showFilters) {
    filterBox.innerHTML =
      '<button class="filter active" data-cat="all">ALL</button>' +
      '<button class="filter" data-cat="men">MEN</button>' +
      '<button class="filter" data-cat="women">WOMEN</button>' +
      '<button class="filter" data-cat="kids">KIDS</button>';
  }

  const render = () => {
    const list = PRODUCTS.filter((p) => inBase(p) && (cat === 'all' || p.cat === cat));
    fillGrid(list, 'No products found.');
    $$('.filter').forEach((f) => f.classList.toggle('active', f.dataset.cat === cat));
  };

  $$('.filter').forEach((f) => {
    f.onclick = () => {
      cat = f.dataset.cat;
      render();
    };
  });

  render();
}


function initSearchPage() {
  const input = $('#search-input');
  const params = new URLSearchParams(location.search);
  input.value = params.get('q') || '';

  const run = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      $('#collection-grid').innerHTML = '';
      $('#result-count').textContent = 'TYPE TO SEARCH';
      return;
    }
    const list = PRODUCTS.filter((p) => (p.name + ' ' + p.cat).toLowerCase().includes(q));
    fillGrid(list, 'No results for "' + esc(q) + '".');
  };

  input.addEventListener('input', run);
  run();
  input.focus();
}


function renderWishlistPage() {
  const list = PRODUCTS.filter((p) => getWish().includes(p.id));
  fillGrid(list, 'Your wishlist is empty. Tap the heart on any product to save it here. <a href="shop.html">Go to shop</a>');
}


function updateLoginLabel() {
  const user = store.get('user', null);
  const link = $('#login-link');
  if (link) link.textContent = user ? 'HI, ' + user.name.split(' ')[0].toUpperCase() : 'LOGIN';
}

function initLoginPage(tab) {
  tab = tab || 'login';
  const box = $('#auth-box');
  const user = store.get('user', null);

  if (user) {
    box.innerHTML =
      '<h3>MY ACCOUNT</h3>' +
      '<p>Logged in as <b>' + esc(user.name) + '</b><br>' + esc(user.email) + '</p>' +
      '<button class="btn-dark" id="logout-btn">LOG OUT</button>';
    $('#logout-btn').onclick = () => {
      store.set('user', null);
      updateLoginLabel();
      showMessage('Logged out', 'You have been logged out.', () => initLoginPage('login'));
    };
    return;
  }

  const loginForm =
    '<form id="auth-form">' +
      '<input type="email" id="a-email" placeholder="Email" required>' +
      '<input type="password" id="a-pass" placeholder="Password" required>' +
      '<p class="form-error" id="auth-error" style="display:none"></p>' +
      '<button type="submit" class="btn-dark">LOGIN</button>' +
    '</form>';

  const signupForm =
    '<form id="auth-form">' +
      '<input type="text" id="a-name" placeholder="Full Name" required>' +
      '<input type="email" id="a-email" placeholder="Email" required>' +
      '<input type="password" id="a-pass" placeholder="Password (min. 6 characters)" minlength="6" required>' +
      '<p class="form-error" id="auth-error" style="display:none"></p>' +
      '<button type="submit" class="btn-dark">CREATE ACCOUNT</button>' +
    '</form>';

  box.innerHTML =
    '<div class="tabs">' +
      '<button class="tab ' + (tab === 'login' ? 'active' : '') + '" data-tab="login">LOGIN</button>' +
      '<button class="tab ' + (tab === 'signup' ? 'active' : '') + '" data-tab="signup">SIGN UP</button>' +
    '</div>' + (tab === 'login' ? loginForm : signupForm);

  $$('.tab').forEach((t) => {
    t.onclick = () => initLoginPage(t.dataset.tab);
  });

  const error = (msg) => {
    const el = $('#auth-error');
    el.textContent = msg;
    el.style.display = 'block';
  };

  $('#auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#a-email').value.trim().toLowerCase();
    const pass = $('#a-pass').value;
    const accounts = store.get('accounts', []);

    if (tab === 'signup') {
      const name = $('#a-name').value.trim();
      if (accounts.some((a) => a.email === email)) {
        error('This email is already registered. Please login instead.');
        return;
      }
      accounts.push({ name, email, pass });
      store.set('accounts', accounts);
      store.set('user', { name, email });
      updateLoginLabel();
      showMessage('Account created', 'Welcome to GAZU, ' + esc(name) + '! You are now logged in.', () => initLoginPage('login'));
    } else {
      const found = accounts.find((a) => a.email === email && a.pass === pass);
      if (!found) {
        error('Wrong email or password.');
        return;
      }
      store.set('user', { name: found.name, email: found.email });
      updateLoginLabel();
      showMessage('Login successful', 'Welcome back, ' + esc(found.name) + '!', () => { location.href = 'index.html'; });
    }
  });
}


function viewApp() {
  openModal('<h3>DOWNLOAD APP</h3><p>The GAZU app is coming soon on iOS and Android. Stay tuned!</p>');
}

function viewTrack() {
  openModal('<h3>TRACK ORDER</h3><input type="text" id="track-input" placeholder="Enter your order number"><button class="btn-dark" id="track-btn">TRACK</button><p id="track-result" style="margin-top:15px"></p>');
  $('#track-btn').onclick = () => {
    const v = $('#track-input').value.trim();
    $('#track-result').textContent = v
      ? 'No order found for #' + v + '. Please check your order number and try again.'
      : 'Please enter your order number.';
  };
}

function viewHelp() {
  openModal(
    '<h3>HELP</h3>' +
    '<p><b>Delivery:</b> Free delivery on orders above ₱999.</p>' +
    '<p><b>Returns:</b> Easy returns within 15 days.</p>' +
    '<p><b>Payment:</b> 100% secure checkout.</p>' +
    '<p><b>Need more help?</b> Email us at hello@gazu.com or use the contact form at the bottom of the page.</p>'
  );
}

const views = { app: viewApp, track: viewTrack, help: viewHelp };

document.addEventListener('click', (e) => {
  const opener = e.target.closest('[data-open]');
  if (opener && views[opener.dataset.open]) {
    views[opener.dataset.open]();
    return;
  }
  const heart = e.target.closest('.heart');
  if (heart) toggleWish(Number(heart.dataset.id));
});


const contactForm = $('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    showMessage('Message sent!', 'You have successfully sent your message. We will get back to you soon.');
  });
}


const page = document.body.dataset.page;
if (page === 'list') initListPage();
if (page === 'search') initSearchPage();
if (page === 'wishlist') renderWishlistPage();
if (page === 'login') initLoginPage(new URLSearchParams(location.search).get('tab') || 'login');

updateLoginLabel();
refreshHearts();