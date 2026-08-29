document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shopping-form');
    const input = document.getElementById('product-input');
    const list = document.getElementById('shopping-list');
    const themeToggle = document.getElementById('theme-toggle');

    // Cargar datos de localStorage
    let products = JSON.parse(localStorage.getItem('shoppingList')) || [];

    // Manejo del tema
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('shoppingList', JSON.stringify(products));
    };

    const render = () => {
        list.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            if (product.completed) li.classList.add('completed');
            li.dataset.id = product.id;

            const span = document.createElement('span');
            span.textContent = product.text;
            span.className = 'product-text';

            const delBtn = document.createElement('button');
            delBtn.textContent = 'Eliminar';
            delBtn.className = 'delete-btn';

            li.appendChild(span);
            li.appendChild(delBtn);
            list.appendChild(li);
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
            products.push({
                id: Date.now(),
                text: text,
                completed: false
            });
            products.sort((a, b) => a.text.localeCompare(b.text));
            input.value = '';
            saveToLocalStorage();
            render();
        }
    });

    list.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;

        const id = parseInt(li.dataset.id);

        if (e.target.classList.contains('delete-btn')) {
            // Eliminar producto
            products = products.filter(p => p.id !== id);
        } else {
            // Marcar como comprado/no comprado
            products = products.map(p => {
                if (p.id === id) {
                    return { ...p, completed: !p.completed };
                }
                return p;
            });
        }

        saveToLocalStorage();
        render();
    });

    // Event listener para el cambio de tema
    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️'; // Sol para indicar modo claro
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙'; // Luna para indicar modo oscuro
        }
    });

    // Renderizado inicial
    render();
    loadTheme();
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.error('SW registration failed:', err));
  });
}
const updateOfflineStatus = () => {
  document.body.classList.toggle('offline', !navigator.onLine);
};
window.addEventListener('online', updateOfflineStatus);
window.addEventListener('offline', updateOfflineStatus);
