import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const prompt = searchParams.get('prompt');

    if (!prompt) {
        return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    try {
        const params = new URLSearchParams({
            q: prompt,
            license: 'cc0,pdm,by,by-sa,by-nc,by-nd,by-nc-sa,by-nc-nd', // License filters idk
            image_type: 'photograph,illustration',
            size: 'medium,large',
            page_size: '3' // 3 max tries
        });

        const response = await fetch(`https://api.openverse.org/v1/images/?${params}`);
        
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            // Iterate through images until a valid one is found
            for (const image of data.results) {
                if (image.url) {
                    try {
                        const imageCheck = await fetch(image.url, { method: 'HEAD' });
                        if (imageCheck.ok) {
                            return NextResponse.json(image);
                        }
                    } catch {
                        // Continue to next image if this one fails
                        continue;
                    }
                }
            }
        }
        
        return NextResponse.json({ error: 'No valid images found' }, { status: 404 });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: 'Failed to fetch image: ' + errorMessage }, { status: 500 });
    }
}
