import Link from 'next/link';

export default function I1Page() {
  return (
    <div>
      I1 Page | 
      <Link href="/i2">I2</Link> | 
      <Link href="/i3">I3</Link>
    </div>
  );
}
