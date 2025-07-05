import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

export async function GET() {
    const response = await fetch(`${config.api.baseUrl}/getreviews/${config.api.uuid}`);
    const data = await response.json();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
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
    } catch (error) {
        return NextResponse.json({ error: 'Failed to post review' }, { status: 500 });
    }
}
