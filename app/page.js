import Link from 'next/link';

export default function Home() {
  return (
    <header>
      <h1>CPRG 306: Web Development - Assignments</h1>
      <Link href="/week-2">Link to Week 2 →</Link>
      <Link href="/week-3">Link to Week 3 →</Link>
      <Link href="/week-4">Link to Week 4 →</Link>
    </header>
  );
}
