interface encrypt{
    (key:string, value:string):string
}

const md5:encrypt = (key:string,value:string):string => {
    return key + '---' + value
}



const sha1: encrypt = (key: string, value: string): string => {
    return key + '===' + value
}

