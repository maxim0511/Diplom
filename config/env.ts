import getConfig from 'next/config'
const getEnv = (key: string) => {
    const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

    const envVar = key.startsWith('NEXT_PUBLIC_')
        ? publicRuntimeConfig[key]
        : serverRuntimeConfig[key]

    if (!envVar && typeof window === 'undefined') {
        throw new Error(`Env variable ${key} is required`)
    }

    return envVar
}
export const URL = getEnv('NEXT_PUBLIC_API_TARGET_URL')
export const CONTAINER = getEnv('NEXT_PUBLIC_CONTAINER_VERSION')
// Режим запуска программы
export const NODE_ENV = getEnv('NODE_ENV')
// Режим разработки
export const isDevEnv = NODE_ENV === 'development'
// Режим продакшена
export const isProdEnv = NODE_ENV === 'production'
