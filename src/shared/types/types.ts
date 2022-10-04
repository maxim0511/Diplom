import { THEME_DARK, THEME_LIGHT } from '../config'

export type Nullable<T> = null | T
export type Theme = typeof THEME_DARK | typeof THEME_LIGHT
export type Language = 'ru' | 'en'
