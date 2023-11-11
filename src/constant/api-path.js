const USER = {
    CUSTOMER: {
        SEARCH: '/api/user/search',
    },
    AUTH: {
        LOGIN: '/api/auth/login',
        SIGNUP: '/api/auth/signup'
    },
    CHAT: {
        CREATE: '/api/chat/create',
        MESSAGES: '/api/chat/messages'
    },
    CHECK_LIST: {
        GET_ALL: '/api/check-list/all',
        CREATE: '/api/check-list/create',
        UPDATE_STATUS: '/api/check-list/status/update',
        UPDATE: '/api/check-list/update',
        DELETE: '/api/check-list/delete'
    },
    TASK: {
        GET_ALL: '/api/task/all',
        DETAIL: '/api/task',
        CREATE: '/api/task/create',
        UPDATE_STATUS: '/api/task/status/update',
        UPDATE: '/api/task/update'
    }
}

const COMMON = {
    AUTH: {
        LOGIN: "/authenservice/api/auth/login",
        SIGNUP: "/authenservice/api/auth/signup",
    }
}

const ADMIN = {
    USER: {
        CREATE: "/authenservice/api/admin/user/add",
        EDIT: "/authenservice/api/admin/user/edit",
        SEARCH: "/authenservice/api/admin/user/search",
        DETAIL: "/authenservice/api/admin/user/detail",
    }
}

export {
    USER, COMMON, ADMIN
}