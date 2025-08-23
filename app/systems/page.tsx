import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freelance',
  description: 'Another environment where I contribute my skills.',
};

export default function Freelance() {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-medium">My freelance journey</h2>
      <article className="prose prose-neutral dark:prose-invert">

        <p>Freelancing is a significant part of my career in the Software Development field.
          It allows me to apply my skills and knowledge to real-world projects, collaborate with diverse clients, and continuously learn and adapt to new challenges.
        </p>
        <p>Through freelancing platforms and direct client engagements, I have had the opportunity to work on a variety of projects, ranging from small business websites to complex web applications. Each project has contributed to my growth as a developer, enhancing my problem-solving abilities and technical expertise.
        </p>

        <p>If you are interested to build a project with me, I can offer a services where you can give trust and confidence that I will deliver the best quality of work. 
        </p>

        <h3>What I can offer</h3>
        <ul>
          <li>Web Development: Building responsive and user-friendly websites using modern technologies such as HTML, CSS, JavaScript, React.js, Next.js, TypeScript, and Tailwind CSS.</li>
          <li>Full-Stack Development: Developing complete web applications with both frontend and backend components, utilizing Node.js and PHP for server-side logic and database management.</li>
          <li>Website Maintenance: Providing ongoing support and maintenance for existing websites, including updates, bug fixes, and performance optimization.</li>
          <li>Email template that could help your digital marketing solutions.</li>
          <li>Consultation: Offering expert advice on web development best practices, technology stack selection, and project planning to ensure successful project outcomes.</li>
        </ul>

        <p>Feel free to reach out to me via email: <a href="mailto:cristianpaul_c@yahoo.com">cristianpaul_c@yahoo.com</a></p>

        <p>In my platform you can visit: <br/>
          <a href="https://www.upwork.com/freelancers/~01693c15544a38d577">upwork</a> <br/>
          <a href="https://www.raket.ph/crispaulcastaneda">Raket.ph</a></p>


      </article>
    </section>
  );
}