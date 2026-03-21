export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-6xl font-bold text-slate-900 dark:text-white">404</h1>
      <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">Page not found</p>
      <a
        href="/"
        className="mt-6 inline-flex rounded-lg bg-brand-600 px-5 py-3 text-base font-semibold text-white hover:bg-brand-500"
      >
        Go back home
      </a>
    </section>
  );
}