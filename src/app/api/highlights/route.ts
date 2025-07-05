import { config } from '@/lib/config';

export async function GET(request: Request) {
    const response = await fetch(`${config.api.baseUrl}/getreviews/${config.api.uuid}`);
    const data = await response.json();
    return Response.json(data);
}
