// Blog data (static demo)
const BLOGS = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    desc: "Learn the best practices for building scalable React applications that can grow with your business. From state management to performance optimization, we'll cover it all.",
    date: "2024-02-15",
    category: "Frontend",
    tags: ["Frontend", "Fullstack"],
    views: 1200,
    comments: 8,
    img: "assets/blog1.webp",
    imgFallback: "assets/blog1.jpg",
    imgAlt: "React code screenshot",
  },
  {
    id: 2,
    title: "Optimizing Node.js Backend Performance",
    desc: "A practical guide to optimizing Node.js backend performance, including async patterns, memory management, and monitoring best practices.",
    date: "2024-02-10",
    category: "Backend",
    tags: ["Backend", "DevOps"],
    views: 980,
    comments: 5,
    img: "assets/blog2.webp",
    imgFallback: "assets/blog2.jpg",
    imgAlt: "Node.js code screenshot",
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Developers",
    desc: "Discover the fundamental principles of UI/UX design that will help you create better user experiences. From color theory to user psychology, we'll explore what makes great design.",
    date: "2024-01-28",
    category: "UI/UX",
    tags: ["UI/UX", "Frontend"],
    views: 1500,
    comments: 12,
    img: "assets/blog3.webp",
    imgFallback: "assets/blog3.jpg",
    imgAlt: "UI/UX code screenshot",
  },
  {
    id: 4,
    title: "Fullstack Project Architecture: Best Practices",
    desc: "Explore how to structure fullstack projects for maintainability and scalability. Covers monorepos, API design, and deployment strategies.",
    date: "2024-01-20",
    category: "Fullstack",
    tags: ["Fullstack", "Backend", "Frontend"],
    views: 1100,
    comments: 7,
    img: "assets/blog4.webp",
    imgFallback: "assets/blog4.jpg",
    imgAlt: "Fullstack code screenshot",
  },
  {
    id: 5,
    title: "DevOps for Developers: CI/CD Essentials",
    desc: "A hands-on introduction to DevOps for developers. Learn about CI/CD pipelines, automation, and deployment best practices.",
    date: "2024-01-10",
    category: "DevOps",
    tags: ["DevOps", "Backend"],
    views: 800,
    comments: 3,
    img: "assets/blog5.webp",
    imgFallback: "assets/blog5.jpg",
    imgAlt: "DevOps code screenshot",
  },
  {
    id: 6,
    title: "Modern CSS: Tips for Responsive Design",
    desc: "Master modern CSS techniques for responsive web design. Learn about Flexbox, Grid, and best practices for mobile-first layouts.",
    date: "2024-01-02",
    category: "Frontend",
    tags: ["Frontend", "UI/UX"],
    views: 900,
    comments: 4,
    img: "assets/blog6.webp",
    imgFallback: "assets/blog6.jpg",
    imgAlt: "CSS code screenshot",
  },
];

const PAGE_SIZE = 3;
let currentPage = 1;
let currentTag = "All";
let currentQuery = "";
let filteredBlogs = BLOGS;
let scrollMemory = 0;

const blogList = document.getElementById("blogList");
const pagination = document.getElementById("pagination");
const tagList = document.getElementById("tagList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resultCount = document.getElementById("resultCount");

function renderSkeleton() {
  blogList.innerHTML = `<div class='skeleton h-40 mb-8'></div><div class='skeleton h-40 mb-8'></div><div class='skeleton h-40 mb-8'></div>`;
}

function filterBlogs() {
  let blogs = BLOGS;
  if (currentTag !== "All") {
    blogs = blogs.filter(b => b.tags.includes(currentTag));
  }
  if (currentQuery.trim()) {
    const q = currentQuery.trim().toLowerCase();
    blogs = blogs.filter(b => b.title.toLowerCase().includes(q) || b.desc.toLowerCase().includes(q));
  }
  filteredBlogs = blogs;
  currentPage = 1;
  renderBlogs();
  renderPagination();
  renderResultCount();
}

function renderResultCount() {
  if (filteredBlogs.length === 0) {
    resultCount.textContent = "No articles found.";
  } else {
    resultCount.textContent = `${filteredBlogs.length} article${filteredBlogs.length > 1 ? 's' : ''} found.`;
  }
}

function renderBlogs() {
  renderSkeleton();
  setTimeout(() => {
    if (filteredBlogs.length === 0) {
      blogList.innerHTML = `<div class='no-results'>No articles match your search or filter.</div>`;
      return;
    }
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const blogsToShow = filteredBlogs.slice(start, end);
    blogList.innerHTML = blogsToShow.map(blog => `
      <article class="blog-card focus-outline" tabindex="0" aria-label="${blog.title}">
        <picture>
          <source srcset="${blog.img}" type="image/webp">
          <img src="${blog.imgFallback}" alt="${blog.imgAlt}" class="blog-img lazy" loading="lazy" style="background:#18181b;" />
        </picture>
        <div class="blog-content">
          <div>
            <div class="blog-meta">
              <span class="blog-category">${blog.category}</span>
              <span class="blog-date">${blog.date}</span>
            </div>
            <div class="blog-title">${blog.title}</div>
            <div class="blog-desc">${blog.desc}</div>
          </div>
          <div class="flex items-center justify-between mt-2">
            <div class="blog-stats">
              <span><i class="fas fa-eye"></i>${blog.views}</span>
              <span><i class="fas fa-comments"></i>${blog.comments}</span>
            </div>
            <a href="#" class="read-more focus-outline" tabindex="0" aria-label="Read more about ${blog.title}">Read More <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </article>
    `).join("");
    // Lazy load images
    const lazyImages = blogList.querySelectorAll('img.lazy');
    if ('IntersectionObserver' in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            lazyImageObserver.unobserve(img);
          }
        });
      });
      lazyImages.forEach(function(img) {
        lazyImageObserver.observe(img);
      });
    } else {
      lazyImages.forEach(function(img) {
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
      });
    }
  }, 350);
}

function renderPagination() {
  const total = filteredBlogs.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  let html = '';
  const createBtn = (page, label, active = false, disabled = false) =>
    `<button class="page-btn${active ? ' active' : ''}" ${active ? 'aria-current="page"' : ''} ${disabled ? 'disabled' : ''} tabindex="0">${label}</button>`;
  // Prev arrow
  html += `<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page"><i class="fas fa-chevron-left"></i></button>`;
  // Page numbers with ellipsis
  let pageArr = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pageArr.push(i);
  } else {
    if (currentPage <= 3) {
      pageArr = [1,2,3,4,'...',totalPages];
    } else if (currentPage >= totalPages - 2) {
      pageArr = [1,'...',totalPages-3,totalPages-2,totalPages-1,totalPages];
    } else {
      pageArr = [1,'...',currentPage-1,currentPage,currentPage+1,'...',totalPages];
    }
  }
  pageArr.forEach(p => {
    if (p === '...') {
      html += `<span class="page-ellipsis">...</span>`;
    } else {
      html += createBtn(p, p, p === currentPage);
    }
  });
  // Next arrow
  html += `<button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Next page"><i class="fas fa-chevron-right"></i></button>`;
  pagination.innerHTML = html;
}

// Event listeners
searchInput.addEventListener('input', e => {
  currentQuery = e.target.value;
  clearSearch.classList.toggle('hidden', !currentQuery);
  filterBlogs();
});
clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  currentQuery = '';
  clearSearch.classList.add('hidden');
  filterBlogs();
  searchInput.focus();
});
tagList.addEventListener('click', e => {
  if (e.target.classList.contains('tag-btn')) {
    tagList.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    currentTag = e.target.dataset.tag;
    filterBlogs();
    tagList.setAttribute('aria-activedescendant', e.target.textContent);
  }
});
pagination.addEventListener('click', e => {
  if (e.target.closest('.page-btn') && !e.target.closest('.page-btn').disabled) {
    const btn = e.target.closest('.page-btn');
    const label = btn.textContent.trim();
    if (label === '' && btn.querySelector('i')) {
      // Arrow
      if (btn.getAttribute('aria-label') === 'Previous page') {
        if (currentPage > 1) currentPage--;
      } else {
        const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE);
        if (currentPage < totalPages) currentPage++;
      }
    } else {
      currentPage = parseInt(label);
    }
    renderBlogs();
    renderPagination();
    window.scrollTo({ top: blogList.offsetTop - 80, behavior: 'smooth' });
  }
});

// Keyboard navigation for tags and pagination
[ tagList, pagination ].forEach(el => {
  el.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const next = document.activeElement.nextElementSibling;
      if (next) next.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prev = document.activeElement.previousElementSibling;
      if (prev) prev.focus();
    }
  });
});

// Scroll position memory
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('blogScroll', window.scrollY);
});
window.addEventListener('DOMContentLoaded', () => {
  renderBlogs();
  renderPagination();
  renderResultCount();
  if (sessionStorage.getItem('blogScroll')) {
    setTimeout(() => window.scrollTo(0, sessionStorage.getItem('blogScroll')), 100);
  }
}); 