const ITEM_STORAGE = {
    LANG: 'lang',
    ACCESS_TOKEN: "accessToken",
    REFRESH_TOKEN: "refreshToken",
}

const LANGUAGE_OPTION = {
    ENGLISH: 'en',
    VIETNAM: 'vi',
    JAPAN: 'ja'
}

const BREADCRUMB_LANG = {
    "home": "breadcrumb.home",
    "admin": "breadcrumb.admin",
    "menu": "breadcrumb.menu",
    "order": "breadcrumb.order",
    "user-management": "breadcrumb.userManagement",
    "store-management": "breadcrumb.storeManagement",
}

const ROLE_OPTION = [
    { label: "ADMIN_ROLE", value: "ADMIN_ROLE" },
    { label: "SUB_ADMIN_ROLE", value: "SUB_ADMIN_ROLE" },
    { label: "CUSTOMER_ROLE", value: "CUSTOMER_ROLE" },
    { label: "USER_ROLE", value: "USER_ROLE" },
]

const HTTP_CODE = {
    SUCCESS: 'API_200',
    BAD_REQUEST: "API_304",
    NOT_POUND: "API_404",
}

const CREATE_EDIT_TAB = {
    CREATE: 'Create',
    EDIT: 'Edit'
}

export {
    ITEM_STORAGE,
    LANGUAGE_OPTION,
    BREADCRUMB_LANG,
    ROLE_OPTION,
    HTTP_CODE,
    CREATE_EDIT_TAB
}