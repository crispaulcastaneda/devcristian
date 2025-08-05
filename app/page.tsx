import Image from 'next/image';
import { socialLinks } from './lib/config';

export default function Page() {
  return (
    <section>
      <Image
        src="/photos/dp.jpeg"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
        unoptimized
        width={150}
        height={100}
        priority
      />
      <h1 className="mb-8 text-2xl font-medium">Hi, I'm Paul!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a web developer with hands-on experience in both front-end and
          back-end technologies, especially focused on creating seamless user
          experiences.
        </p>
      </div>
    </section>
  );
}
