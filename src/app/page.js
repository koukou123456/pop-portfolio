import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="#">
            My Portfolio
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          This is my first Next.js portfolio site with Tailwind CSS!
        </p>
      </main>
    </div>
  );
}
