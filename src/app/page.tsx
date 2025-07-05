'use client';

import { useState, useEffect } from 'react';
import type { JSX } from 'react';

import { CreateHighlightRequest, HighlightProps } from '@/types/types';
import HighlightsGrid from '@/components/highlights/HighlightsGrid';
import CreateButtonWrapper from '@/components/highlightCreation/CreateButtonWrapper';

export default function Home(): JSX.Element {
  const [data, setData] = useState<HighlightProps[] | null>(null);

  // Fetch highlights data from the API
  // May have to tweak this in the future in case it refreshes unexpectedly; have to check
  const fetchData = async (): Promise<void> => {
    const res = await fetch('/api/highlights');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await res.json();
    setData(result);
  };

  // Post a new highlight
  const postHighlight = async (newHighlight: CreateHighlightRequest): Promise<unknown> => {
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

  // Handle new highlight submission
  // Will be called when the CreateButtonWrapper submits a new highlight
  const handleNewHighlight = async (highlightData: HighlightProps): Promise<void> => {
    try {
      await postHighlight(highlightData);
      await fetchData();
    } catch (error) {
      console.error('Failed to create highlight:', error);
    }
  };

  // Fetch data on component mount
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
