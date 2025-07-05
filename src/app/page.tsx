'use client';

import { useState, useEffect } from 'react';
import { CreateHighlightRequest } from '@/types/highlight'; // Adjust the import path as necessary

export default function Home() {
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [postResult, setPostResult] = useState(null);

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

  // Sample test func for posting new highlight
  const postHighlight = async (newHighlight: CreateHighlightRequest) => {
    const res = await fetch('/api/highlights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHighlight),
    });
    if (!res.ok) {
      throw new Error('Failed to post highlight');
    }
    const result = await res.json();
    setPostResult(result);
    return result;
  };

  useEffect(() => {
    const initializeData = async () => {
      // First fetch initial data
      await fetchData();

      // Fetch image
      fetchImage('grouse mountain Vancouver, BC').then(image => {
        setImageUrl(image.url || '');
      });

      // Sample POST test data
      const sampleHighlight = {
        title: 'Sample Highlight',
        location: 'my house',
        description: 'Testing ',
      };

      // Post new highlight and then fetch updated data
      // await postHighlight(sampleHighlight);
      await fetchData(); 
    };

    initializeData();
  }, []);

  return (
    <div>
      <h1>Image</h1>
      {imageUrl && <img src={imageUrl} alt="Generated image" />}

      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h1>POST Result:</h1>
      <pre>{JSON.stringify(postResult, null, 2)}</pre>
    </div>
  );
}
