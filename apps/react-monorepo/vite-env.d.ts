/// <reference types="vite/client" />

// IntelliSense for TypeScript: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
export interface ImportMetaEnv {
    readonly ENV_NAME: string;
    readonly ENV_DOMAIN_URL: string;
    readonly ENV_API_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}