'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  // Sample test func for now
  const fetchData = async () => {
    const res = await fetch('/api/highlights');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await res.json();
    setData(result);
  };

  // Sample test funct for now
  const fetchImage = async (prompt: string) => {
    const res = await fetch(`/api/images?prompt=${encodeURIComponent(prompt)}`);
    if (!res.ok) {
      throw new Error('Failed to fetch image');
    }
    const image = await res.json();
    return image;
  };  

  useEffect(() => {
    fetchData();
    fetchImage('grouse mountain Vancouver, BC').then(image => {
      setImageUrl(image.url || '');
    });
  }, []);

  return (
    <div>
      <h1>Image</h1>
      {imageUrl && <img src={imageUrl} alt="Generated image" />}
      
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
