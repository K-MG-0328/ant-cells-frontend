import { getTermByType } from '@/features/terms/application/queries/termQuery';
import TermDetail from '@/features/terms/ui/components/TermDetail';
import { notFound } from 'next/navigation';

export default function ChildProtectionPage() {
  const term = getTermByType('CHILD_PROTECTION');
  if (!term) notFound();
  return <TermDetail term={term} />;
}
