'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch('/api/highlights');
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
