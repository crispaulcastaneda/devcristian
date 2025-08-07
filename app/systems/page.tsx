import Link from 'next/link';
import type { Metadata } from 'next';
import { systems } from './system-data';

export const metadata: Metadata = {
  title: 'Systems',
  description: 'Large scale systems and applications',
};

export default function Systems() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Web App</h1>

      <div>
        {systems.map((system, index) => (
          <Link
            key={index}
            href={system.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{system.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {system.year}
              </p>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
                {system.description}
              </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
