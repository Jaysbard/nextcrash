import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-300">
      <h2 className="text-2xl p-4 bg-black text-white">
        This is my About me page.
      </h2>
      <p className="mt-2 bg-black p-4 text-white">
        Only God grants success. Please remember.
      </p>
      <Link href="/">
        <a className="mt-2 bg-black text-white p-4 underline rounded-xl">
          {" "}
          Return Home
        </a>
      </Link>
    </div>
  );
}
