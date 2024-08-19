const api =<T extends string,> (base: T) =><U extends string = ''> (tail: U) => `/api${base}${tail}` as const
const base = api('/users')
export const USER_ENDPOINTS = {
    index: base(''),
    login: base('/login'),
    logout: base('/logout'),
    register: "/api/user/register",
    me: "/api/user/me",
} as const

export const POST_ENDPOINTS = {
    create: "/api/post/create",
    read: "/api/post/read",
    update: "/api/post/update",
    delete: "/api/post/delete",
} as const