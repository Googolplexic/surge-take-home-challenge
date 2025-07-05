import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

export async function GET() {
    const response = await fetch(`${config.api.baseUrl}/getreviews/${config.api.uuid}`);
    const data = await response.json();
    return NextResponse.json(data);
}
