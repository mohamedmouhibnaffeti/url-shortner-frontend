export const checkIsURL = (url: string): boolean => {
    const status = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
    return status ? true : false
}

export const CopyString = (str: string) => {
    navigator.clipboard.writeText(str)
}