// Dark Mode Toggle
const darkModeToggle = () => {
  const html = document.documentElement;
  const isDark = localStorage.getItem('darkMode') === 'true';
  
  if (isDark || (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  }

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
  });
};

// Mobile Sidebar Toggle
const sidebarToggle = () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const openBtn = document.getElementById('sidebar-open');
  const closeBtn = document.getElementById('sidebar-close');

  const open = () => {
    sidebar?.classList.remove('-translate-x-full');
    overlay?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    sidebar?.classList.add('-translate-x-full');
    overlay?.classList.add('hidden');
    document.body.style.overflow = '';
  };

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
};

// Search
const initSearch = () => {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  const pages = [
    { title: 'Cover & Kata Pengantar', url: 'index.html', chapter: 'Cover' },
    { title: 'BAB 1: Pengenalan Artificial Intelligence', url: 'bab-01.html', chapter: 'BAB 1' },
    { title: 'BAB 2: Jenis-Jenis Artificial Intelligence', url: 'bab-02.html', chapter: 'BAB 2' },
    { title: 'BAB 3: Generative AI', url: 'bab-03.html', chapter: 'BAB 3' },
    { title: 'BAB 4: Large Language Model (LLM)', url: 'bab-04.html', chapter: 'BAB 4' },
    { title: 'BAB 5: Prompt Engineering', url: 'bab-05.html', chapter: 'BAB 5' },
    { title: 'BAB 6: Embedding', url: 'bab-06.html', chapter: 'BAB 6' },
    { title: 'BAB 7: Vector Database', url: 'bab-07.html', chapter: 'BAB 7' },
    { title: 'BAB 8: Retrieval Augmented Generation (RAG)', url: 'bab-08.html', chapter: 'BAB 8' },
    { title: 'BAB 9: Model Context Protocol (MCP)', url: 'bab-09.html', chapter: 'BAB 9' },
    { title: 'BAB 10: Agentic AI', url: 'bab-10.html', chapter: 'BAB 10' },
    { title: 'BAB 11: Integrasi AI dengan Laravel', url: 'bab-11.html', chapter: 'BAB 11' },
    { title: 'BAB 12: Deployment AI', url: 'bab-12.html', chapter: 'BAB 12' },
    { title: 'BAB 13: Maintenance AI', url: 'bab-13.html', chapter: 'BAB 13' },
    { title: 'BAB 14: Studi Kasus', url: 'bab-14.html', chapter: 'BAB 14' },
  ];

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      results.classList.add('hidden');
      return;
    }
    const filtered = pages.filter(p => 
      p.title.toLowerCase().includes(query) || p.chapter.toLowerCase().includes(query)
    );
    results.innerHTML = filtered.length
      ? filtered.map(p => `<a href="${p.url}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"><span class="text-xs text-primary-600 dark:text-primary-400 font-medium">${p.chapter}</span><br>${p.title}</a>`).join('')
      : '<div class="px-4 py-2 text-sm text-gray-500">Tidak ditemukan</div>';
    results.classList.remove('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.add('hidden');
    }
  });
};

// Copy Code Buttons
const initCopyButtons = () => {
  document.querySelectorAll('.code-block').forEach(block => {
    const btn = block.querySelector('.copy-btn');
    const code = block.querySelector('code');
    if (!btn || !code) return;
    btn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(code.textContent || '');
      btn.innerHTML = '<svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
      setTimeout(() => {
        btn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>';
      }, 2000);
    });
  });
};

// Active nav link highlighting
const highlightNav = () => {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#sidebar nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('bg-primary-50', 'dark:bg-primary-900/30', 'text-primary-700', 'dark:text-primary-300', 'border-l-2', 'border-primary-500');
    }
  });
};

// Table of Contents scroll spy
const initTocSpy = () => {
  const headings = document.querySelectorAll('h2[id], h3[id]');
  const tocLinks = document.querySelectorAll('#toc a');
  if (!headings.length || !tocLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(link => {
          link.classList.remove('text-primary-600', 'dark:text-primary-400');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('text-primary-600', 'dark:text-primary-400');
          }
        });
      }
    });
  }, { rootMargin: '-80px 0px -80% 0px' });

  headings.forEach(h => observer.observe(h));
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  darkModeToggle();
  sidebarToggle();
  initSearch();
  initCopyButtons();
  highlightNav();
  initTocSpy();
});
