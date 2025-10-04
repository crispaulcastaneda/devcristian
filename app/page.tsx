import Image from 'next/image';

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
      <h1 className="mb-8 text-2xl font-medium">Hi, I'm Cristian Paul 👋🏼</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I work as a <strong>Web Developer</strong> at <strong><a href="https://www.n-able.com/">N-able</a></strong>, constantly exploring front-end, back-end, cybersecurity, and system architecture to strengthen my <strong>Software Development</strong> skills.
        </p>
      </div>
    </section>
  );
}
