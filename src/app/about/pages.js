// src/app/about/page.js

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">About Me</h1>
        <p className="mt-3 text-2xl">
          This is the about page of my portfolio site.
        </p>
      </main>
    </div>
  );
}
