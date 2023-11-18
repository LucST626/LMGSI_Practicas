function calc(){
    const inputA = document.querySelector("#valorA")
    const inputB = document.querySelector("#valorB")
    const textoSuma = document.querySelector("#resultadoSuma")
    const textoResta = document.querySelector("#resultadoResta")
    const textoMultiplicación = document.querySelector("#resultadoMultiplicación")
    const textoDivisión = document.querySelector("#resultadoDivisión")
    const textoMódulo = document.querySelector("#resultadoMódulo")
    const textoMenorque = document.querySelector("#resultadoMenorque")
    const textoMayorque = document.querySelector("#resultadoMayorque")
    const textoMayorigualque = document.querySelector("#resultadoMayorigualque")
    const textoMenorigualque = document.querySelector("#resultadoMenorigualque")
    const valorA = parseFloat(inputA.value)         
    const valorB = parseFloat(inputB.value)
    const resultadoSuma = valorA + valorB
    const resultadoResta = valorA - valorB
    const resultadoMultiplicación = valorA * valorB
    const resultadoDivisión = valorA / valorB
    const resultadoMódulo = valorA % valorB
    const resultadoMenorque = valorA < valorB
    const resultadoMayorque = valorA > valorB
    const resultadoMayorigualque = valorA >= valorB
    const resultadoMenorigualque = valorA <= valorB
    textoSuma.innerHTML =  `${valorA} + ${valorB} = ${resultadoSuma}`
    textoResta.innerHTML =  `${valorA} - ${valorB} = ${resultadoResta}`
    textoMultiplicación.innerHTML =  `${valorA} * ${valorB} = ${resultadoMultiplicación}`
    textoDivisión.innerHTML =  `${valorA} / ${valorB} = ${resultadoDivisión}`
    textoMódulo.innerHTML =  `${valorA} % ${valorB} = ${resultadoMódulo}`
    textoMenorque.innerHTML =  `${valorA} < ${valorB} = ${resultadoMenorque}`
    textoMayorque.innerHTML =  `${valorA} > ${valorB} = ${resultadoMayorque}`
    textoMayorigualque.innerHTML =  `${valorA} >= ${valorB} = ${resultadoMayorigualque}`
    textoMenorigualque.innerHTML =  `${valorA} <= ${valorB} = ${resultadoMenorigualque}`
    console.log(resultadoSuma)
    console.log(resultadoResta)
    console.log(resultadoMultiplicación)
    console.log(resultadoDivisión)
    console.log(resultadoMódulo)
    console.log(resultadoMenorque)
    console.log(resultadoMayorque)
    console.log(resultadoMayorigualque)
    console.log(resultadoMenorigualque)
  }