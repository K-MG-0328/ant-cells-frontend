import Link from 'next/link';
import { Term } from '@/features/terms/domain/model/term';

interface TermDetailProps {
  term: Term;
}

export default function TermDetail({ term }: TermDetailProps) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 px-4 pt-12 dark:bg-zinc-950">
      <div className="w-full max-w-sm rounded-2xl bg-white px-8 py-10 shadow-md dark:bg-zinc-900">
        <Link
          href="/terms"
          className="mb-6 flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          ← 돌아가기
        </Link>
        <h1 className="mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-white">
          {term.title}
        </h1>
        <div className="flex flex-col gap-6">
          {term.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-1">
                {section.content.map((line, i) => (
                  <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400">
                    {line}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
