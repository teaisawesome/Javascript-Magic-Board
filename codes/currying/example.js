const rectangleVolume = (length) => {
    return (height) => {
        return (width) => {
            return length * height * width
        }
    }
}

console.log('rectangleVolume ->', rectangleVolume(2)(3)(4))

console.log('messenger ->', messenger('Robert')('Diana')('Cinema on Sunday')('Would you like to come to the cinema on Sunday? They are showing our favorite movie, we should watch it.'))


function messenger(from) {
    return (to) => {
        return (subject) => {
            return (msg) => {
                let brk = '\n\n'
                return `${brk}Subject: ${subject}${brk}Supperino ${to}!${brk}${msg}${brk}See ya!${brk}${from}`
            }
        }
    }
}