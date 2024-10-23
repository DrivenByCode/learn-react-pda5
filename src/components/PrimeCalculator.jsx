import { useState, useMemo } from 'react';
import calculatePrimes from './CalculatePrimes';

// // 소수를 계산하는 함수

export default function PrimeCalculator() {
  const [limit, setLimit] = useState(10);
  const [toggle, setToggle] = useState(false);

  const primes = useMemo(() => {
    return calculatePrimes(limit);
  }, [limit]);

  return (
    <div>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        버튼 {toggle ? 'ON' : 'OFF'}
      </button>
      <input type="number" value={limit} onChange={(e) => setLimit(Number(e.target.value))} />
      <p>계산된 소수: {primes.join(', ')}</p>
    </div>
  );
}
