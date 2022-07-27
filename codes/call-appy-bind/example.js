let obj1 = {
    number1: 5,
    number2: 10,
    multiply: function(customNumber1, customNumber2) {
        return (customNumber1 ?? this.number1) * (customNumber2 ?? this.number2)
    }
}

console.log('obj1.multiply() ->', obj1.multiply())

console.log('call() ->', obj1.multiply.call({ number1: 10, number2: 20 }, 5, 5))

let callObj = obj1.multiply.call({ number1: 10, number2: 20 }, 5, 5)

console.log('CallObj -> ', callObj /* callObj() -> Uncaught TypeError: callObj is not a function */)

console.log('apply() ->', obj1.multiply.apply({ number1: 10, number2: 20 }, [9, 1]))

let applyObj = obj1.multiply.apply({ number1: 10, number2: 20 }, [9, 1])

console.log('ApplyObj -> ', applyObj /* applyObj() -> Uncaught TypeError: applyObj is not a function */)

let bindObj = obj1.multiply.bind({ number1: 2, number2: 2 }, 6, 0) // function

console.log('bindObj ->', bindObj())