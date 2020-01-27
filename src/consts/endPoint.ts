export let DONGGYU_ENDPOINT = '220.67.154.77:4001/api/'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    DONGGYU_ENDPOINT = 'http://localhost:4001/api/'
} else {
    DONGGYU_ENDPOINT = '220.67.154.77:4001/api/'
}

