const progress = document.getElementById('progress')
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const steps = document.querySelectorAll('.number');
let currentStep = 0; //inicia en el actual.

const updateMovingLine = () => {
        steps.forEach((step, index) => {
            index <= currentStep ? step.classList.add('active')   // Añade la clase "active" si el índice es menor o igual al paso actual
            : step.classList.remove('active');//quita la clase "active" del actual.    
        })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%'

    if (currentStep === 0) {
        prev.disabled = true
    } else if (currentStep === steps.length - 1) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

prev.addEventListener('click', () => {
    currentStep--
    if (currentStep < 0) {
        currentStep = 0
    }
    updateMovingLine()
})


next.addEventListener('click', () => {
    currentStep++
    if (currentStep > steps.length) {
        currentStep = steps.length
    }
    updateMovingLine()
})





// //funcion para actualizar la linea de avance
// const updateMovingLine = () => {
//     steps.forEach((step, index) => {
//         index <= currentStep ? step.classList.add('active')   // Añade la clase "active" si el índice es menor o igual al paso actual
//         : step.classList.remove('active');//quita la clase "active" del actual.    
//     })
//     //funcion que actualiza los botones (desabilita cuando es necesario)
//     prevBtn.disabled = currentStep === 0; // Desactiva "Prev" si estamos en el primer paso.
//     nextBtn.disabled = currentStep === steps.length - 1; // Desactiva "Next" si estamos en el último paso
// }
// //evento para avanzar.
// nextBtn.addEventListener('click', () => {
//     if (currentStep < steps.length -1 ) {
//         currentStep++;  //avanza al siguiente paso.
//         updateMovingLine(); // Actualiza el estado después de avanzar
// }
// });

// // Evento para retroceder
// prevBtn.addEventListener('click', () => {
//     if (currentStep > 0) {
//         currentStep--; // Retrocede al paso anterior
//         updateMovingLine(); // Actualiza el estado después de retroceder
//     }
//  });
// // Inicializa el estado
// updateMovingLine();