import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-xl mx-auto py-12 px-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png"
          className="block w-32"
          alt="Next.js logotype"
        />
        <h1 className="text-4xl mt-4 font-semibold">
          next-template-typescript-tailwind
        </h1>
        <p className="mt-2 text-gray-500">
          This is a Next.js template that uses Typescript and Tailwind.css
        </p>

        <ul className="space-y-2 list-disc list-inside mt-6">
          <li>
            <a className="link" href="https://nextjs.org">
              Learn more about Next.js
            </a>
          </li>
          <li>
            <a className="link" href="https://www.typescriptlang.org">
              Learn more about Typescript
            </a>
          </li>
          <li>
            <a className="link" href="https://tailwindcss.com">
              Learn more about Tailwind.css
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
