import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

export async function GET() : Promise<NextResponse> {
    const response = await fetch(`${config.api.baseUrl}/getreviews/${config.api.uuid}`);
    const data = await response.json();
    if (!response.ok) {
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: response.status });
    }
    return NextResponse.json(data);
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const body = await request.json();
        const response = await fetch(`${config.api.baseUrl}/postreview/${config.api.uuid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: 'Failed to post review: ' + errorMessage }, { status: 500 });
    }
}
