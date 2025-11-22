import Cookies from 'js-cookie';
export type Token = string;

export const setCookie = (
    name: string,
    value: string,
    options?: Cookies.CookieAttributes
) => Cookies.set(name, value, options);

export const getCookie = (name: string): string | undefined => Cookies.get(name);

export const removeCookie = (name: string, options?: Cookies.CookieAttributes) =>
    Cookies.remove(name, options);

export const getToken = (): Token | null => getCookie('token') || null;

export const saveToken = (token: Token): string | undefined => setCookie('token', token);

export const dropToken = (): void => removeCookie('token');