'use client';

import { useState, useEffect } from 'react';
import { CreateHighlightRequest } from '@/types/types'; // Adjust the import path as necessary
import HighlightsGrid from '@/components/highlights/HighlightsGrid';

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

      await fetchData();

      fetchImage('grouse mountain Vancouver, BC').then(image => {
        setImageUrl(image.url || '');
      });

      const sampleHighlight = {
        title: 'Sample Highlight',
        location: 'my house',
        description: 'Testing ',
      };


      // await postHighlight(sampleHighlight);
      await fetchData();
    };

    initializeData();
  }, []);

  return (
    <div>
      <HighlightsGrid />

      {/* Temp debug div */}
      <div className="debug-section">
        <details>
          <summary>Debug</summary>
          <h3>Sample Image:</h3>
          {imageUrl && <img src={imageUrl} alt="Generated image" className="debug-image" />}
          <h3>API Data:</h3>
          <pre className="debug-pre">
            {JSON.stringify(data, null, 2)}
          </pre>
          <h3>POST Result:</h3>
          <pre className="debug-pre">
            {JSON.stringify(postResult, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}
