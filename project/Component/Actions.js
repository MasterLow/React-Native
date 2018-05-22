

export const ISLOGIN = 'ISLOGIN';
export const TEXT = 'TEXT';
























export function ISLOGINLICK(index) {
    return {
        type: ISLOGIN,
        data: index,
    }
}

export function TEXTLICK(index) {
    return {
        type: TEXT,
        data:index,
    }
}