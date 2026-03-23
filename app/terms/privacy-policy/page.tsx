import { getTermByType } from '@/features/terms/application/queries/termQuery';
import TermDetail from '@/features/terms/ui/components/TermDetail';
import { notFound } from 'next/navigation';

export default function PrivacyPolicyPage() {
  const term = getTermByType('PRIVACY_POLICY');
  if (!term) notFound();
  return <TermDetail term={term} />;
}
