// Theme Management Logic
const themeManager = {
  storageKey: 'toto-app-theme',
  
  init() {
    const savedTheme = localStorage.getItem(this.storageKey);
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    this.setTheme(initialTheme);
    
    // Setup listener for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(this.storageKey)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
    this.updateToggleIcons(theme);
  },

  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  },

  updateToggleIcons(theme) {
    const toggle = document.querySelector('theme-toggle');
    if (toggle) {
      toggle.setAttribute('theme', theme);
    }
  }
};

// Theme Toggle Web Component
class ThemeToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['theme'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const theme = this.getAttribute('theme') || 'light';
    const isDark = theme === 'dark';
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        button {
          background: var(--card-bg, #ffffff);
          color: var(--text-color, #333333);
          border: 2px solid var(--primary-color, #4CAF50);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px var(--shadow-color, rgba(0,0,0,0.1));
          padding: 0;
          margin: 0;
          outline: none;
        }
        button:hover {
          transform: scale(1.1) rotate(12deg);
          box-shadow: 0 6px 20px var(--glow-color, rgba(0,0,0,0.2));
          border-color: var(--primary-hover, #45a049);
        }
        button:active {
          transform: scale(0.95);
        }
        .icon {
          line-height: 1;
          user-select: none;
        }
      </style>
      <button id="theme-btn" aria-label="Toggle dark mode" title="Toggle Day/Night Mode">
        <span class="icon">${isDark ? '🌙' : '☀️'}</span>
      </button>
    `;
    this.shadowRoot.getElementById('theme-btn').onclick = (e) => {
      e.preventDefault();
      themeManager.toggle();
    };
  }
}
customElements.define('theme-toggle', ThemeToggle);

// Toto Generator Web Component
class TotoGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 500px;
          margin: 0 auto;
          padding: 2.5rem;
          background: var(--comp-card-bg, #ffffff);
          border-radius: var(--border-radius, 16px);
          box-shadow: 0 20px 50px var(--comp-shadow, rgba(0,0,0,0.1));
          transition: all var(--transition-speed, 0.3s);
          border: 1px solid var(--comp-shadow, rgba(0,0,0,0.05));
        }
        .controls {
          margin-bottom: 2.5rem;
        }
        button {
          background-color: var(--comp-primary, #4CAF50);
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: var(--border-radius, 12px);
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 700;
          transition: all 0.3s;
          box-shadow: 0 8px 20px var(--comp-glow, rgba(0,0,0,0.15));
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        button:hover {
          background-color: var(--comp-primary-hover, #45a049);
          transform: translateY(-3px);
          box-shadow: 0 12px 25px var(--comp-glow, rgba(0,0,0,0.25));
        }
        button:active {
          transform: translateY(-1px);
        }
        .numbers {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          min-height: 80px;
        }
        .number {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--comp-number-bg, #f0f0f0);
          color: var(--comp-text, #333333);
          font-size: 1.4rem;
          font-weight: 800;
          box-shadow: 0 4px 12px var(--comp-shadow, rgba(0,0,0,0.1));
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }
        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      </style>
      <div>
        <div class="controls">
          <button id="generate">Generate Numbers</button>
        </div>
        <div class="numbers" id="numbers-container"></div>
      </div>
    `;

    this.shadowRoot.getElementById('generate').onclick = () => this.generateNumbers();
  }

  generateNumbers() {
    const numbersContainer = this.shadowRoot.getElementById('numbers-container');
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }

    [...numbers].sort((a, b) => a - b).forEach((number, index) => {
      const numberElement = document.createElement('div');
      numberElement.className = 'number';
      numberElement.style.animationDelay = `${index * 0.08}s`;
      numberElement.textContent = number;
      numbersContainer.appendChild(numberElement);
    });
  }
}

customElements.define('toto-generator', TotoGenerator);

// Initialize theme on load
themeManager.init();
