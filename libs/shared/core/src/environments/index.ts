import { ImportMetaEnv } from './../../vite-env';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const metaEnv: ImportMetaEnv = import.meta.env as ImportMetaEnv;

const environment: ImportMetaEnv = {
    ENV_NAME: metaEnv.ENV_NAME,
    ENV_DOMAIN_URL: metaEnv.ENV_DOMAIN_URL,
    ENV_API_BASE_URL: metaEnv.ENV_API_BASE_URL,
}

export default environment;

