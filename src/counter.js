
export function fetchCounter(paramString = '', callback) {
    setTimeout(() => {
        callback(paramString.split(',').map(item => {
            return {
                text: item.startsWith('-') ? item.substr(1) : item,
                completed: item.startsWith('-')
            };
        }))
    }, 500)
}
