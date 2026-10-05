"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-xl border bg-white p-10 text-center">
        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-3 text-gray-500">
          We couldn't load this product. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}