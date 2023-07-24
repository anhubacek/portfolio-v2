
declare global 
{
    namespace NodeJS 
    {
        interface ProcessEnv 
        {
            STRAPI_URL: URL | RequestInfo;
            STRAPI_KEY: string;
        }
    }
}

declare module "vanta/dist/vanta.halo.min"; 
declare module "vanta/dist/vanta.net.min"; 
declare module "vanta/dist/vanta.dots.min"; 
declare module "vanta/dist/vanta.fog.min";