export const config = {
    api: {
        baseUrl: process.env.SURGE_API_BASE_URL,
        uuid: process.env.SURGE_UUID
    }
} as const;

export type Config = typeof config;
