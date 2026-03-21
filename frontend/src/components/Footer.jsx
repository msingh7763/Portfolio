export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-700 px-4 py-6 text-center">
      <p className="text-sm text-slate-600 dark:text-slate-300">
        © {year} Muskan Kumari. Built with React and Tailwind.
      </p>
    </footer>
  );
}
