/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_DEFAULT_IMAGE: string;
    readonly PUBLIC_DEFAULT_TUNO: string;
}

interface ImportMeta {
readonly env: ImportMetaEnv;
}
