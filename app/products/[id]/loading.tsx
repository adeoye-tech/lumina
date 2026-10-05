export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 rounded-xl border bg-white p-6 md:grid-cols-2">
          <div className="h-96 animate-pulse rounded-lg bg-gray-200" />

          <div className="flex flex-col justify-center">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

            <div className="mt-3 h-10 w-3/4 animate-pulse rounded bg-gray-200" />

            <div className="mt-5 h-8 w-32 animate-pulse rounded bg-gray-200" />

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200" />
            </div>

            <div className="mt-8 h-12 w-36 animate-pulse rounded-lg bg-gray-200" />
          </div>
        </div>
      </div>
    </main>
  );
}