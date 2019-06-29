export const PORT = parseInt(process.env.PORT, 10) || 3000
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'
export const BIND_ADDRESS = IS_DEVELOPMENT ? '127.0.0.1' : '0.0.0.0'
