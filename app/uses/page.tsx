import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'My Uses',
};

export default function Uses() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">My daily tech tools</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <h3>Hardware Tools</h3>

        <ul>
          <li>Machine: Macbook M4 Air 13" 16GB</li>
          <li>Keyboard: UGREEN 5.0 BT Wireless</li>
          <li>Mouse: UGREEN 5.0 BT Wireless 4000 DPI</li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h3>Code Tools</h3>

        <ul>
          <li>
            <a href="https://code.visualstudio.com/">VS Code</a>
          </li>
          <li>
            <a href="https://cursor.com/">Cursor AI</a>
          </li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h3>Terminal</h3>

        <ul>
          <li>
            <a href="https://git-scm.com/">git</a>
          </li>
          <li>
            <a href="https://iterm2.com/">iTerm2</a>
          </li>
          <li>
            <a href="https://ohmyz.sh/">Oh My ZSH</a>
          </li>
        </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <h3>Applications</h3>
        <ul>
          <li>
            <a href="https://www.raycast.com/">Raycast</a>
          </li>
          <li>
            <a href="https://orbstack.dev/">Orb Stack</a>
          </li>
        </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <h3>AI</h3>
        <ul>
          <li>
            <a href="https://github.com/features/copilot">GitHub Copilot</a>
          </li>
          <li>
            <a href="https://chatgpt.com/">ChatGPT</a>
          </li>
          <li>
            <a href="https://claude.ai/">Claude AI</a>
          </li>
        </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <h3>Technologies</h3>
        <ul>
          <li>Frontend: <span className="text-neutral-600 dark:text-neutral-400">HTML5, CSS3, Tailwind, JavaScript, jQuery, React.js, Next.js, TypeScript</span></li>
          <li>Backend: <span className="text-neutral-600 dark:text-neutral-400">JSON, Node.js, PHP</span></li>
          <li>Database: <span className="text-neutral-600 dark:text-neutral-400">MySQL, Apache</span></li>
          <li>API Tools: <span className="text-neutral-600 dark:text-neutral-400">Postman</span></li>
          <li>Version Control: <span className="text-neutral-600 dark:text-neutral-400">Git, GitHub, SVN, Vercel</span></li>
          <li>CMS: <span className="text-neutral-600 dark:text-neutral-400">Wordpress</span></li>
          <li>SEO & Analytics: <span className="text-neutral-600 dark:text-neutral-400">Google (GTM), (GA), Matomo</span></li>
          <li>UX UI Design: <span className="text-neutral-600 dark:text-neutral-400">Figma, Zeplin</span></li>
          <li>Deployment: <span className="text-neutral-600 dark:text-neutral-400">Plesk, AWS</span></li>
          <li>CI/CD & DevOps: <span className="text-neutral-600 dark:text-neutral-400">Docker, GitHub Actions</span></li>
          <li>Collab Tools: <span className="text-neutral-600 dark:text-neutral-400">Trello, Jira (Kanban), Teams</span></li>
        </ul>
      </div>
    </section>
  );
}
