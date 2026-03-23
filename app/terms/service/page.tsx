import { getTermByType } from '@/features/terms/application/queries/termQuery';
import TermDetail from '@/features/terms/ui/components/TermDetail';
import { notFound } from 'next/navigation';

export default function TermsOfServicePage() {
  const term = getTermByType('TERMS_OF_SERVICE');
  if (!term) notFound();
  return <TermDetail term={term} />;
}
