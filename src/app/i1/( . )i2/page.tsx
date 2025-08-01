import Link from 'next/link';
import React from 'react';

export default function InterceptedI2() {
  return (
    <div>
      I2 Intercepted Page (.) | <Link href="/i1">I1</Link>
    </div>
  );
}
