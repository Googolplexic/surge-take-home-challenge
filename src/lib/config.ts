export const config = {
    api: {
        baseUrl: process.env.SURGE_API_BASE_URL || 'https://surgetakehome.vercel.app/api',
        uuid: process.env.SURGE_UUID || 'revenant'
    }
} as const;

export type Config = typeof config;
