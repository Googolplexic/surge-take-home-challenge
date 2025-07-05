'use client';

import { useState, useEffect } from 'react';

import { CreateHighlightRequest, HighlightProps } from '@/types/types';
import HighlightsGrid from '@/components/highlights/HighlightsGrid';
import CreateButtonWrapper from '@/components/ui/CreateButtonWrapper';

export default function Home() {
  const [data, setData] = useState<HighlightProps[] | null>(null);


  const fetchData = async () => {
    const res = await fetch('/api/highlights');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await res.json();
    setData(result);
  };


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
    return result;
  };


  const handleNewHighlight = async (highlightData: HighlightProps) => {
    try {
      await postHighlight(highlightData);
      await fetchData();
    } catch (error) {
      console.error('Failed to create highlight:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HighlightsGrid highlights={data} />
      <CreateButtonWrapper onSubmit={handleNewHighlight} />

    </div>
  );
}
