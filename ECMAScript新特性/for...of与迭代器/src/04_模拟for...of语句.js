function forOf(obj, callback) {
    let iterable, result

    if (typeof obj[Symbol.iterator] !== 'function')
        throw new TypeError(result + ' is not iterable')
    if (typeof callback !== 'function')
        throw new TypeError('cb must be callback')

    iterable = obj[Symbol.iterator]()

    result = iterable.next()
    while (!result.done) {
        callback(result.value)
        result = iterable.next()
    }
}

let arr = [1, 2, 3, 4]
forOf(arr, item => {
    console.log(item)
})
