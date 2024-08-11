const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const steps = document.querySelectorAll('.number');
let currentStep = 0; //inicia en el actual.


//funcion para actualizar la linea de avance
const updateMovingLine = () => {
    steps.forEach((step, index) => {
        index <= currentStep ? step.classList.add('active')   // Añade la clase "active" si el índice es menor o igual al paso actual
        : step.classList.remove('active');//quita la clase "active" del actual.    
    })
    //funcion que actualiza los botones (desabilita cuando es necesario)
    prevBtn.disabled = currentStep === 0; // Desactiva "Prev" si estamos en el primer paso.
    nextBtn.disabled = currentStep === steps.length - 1; // Desactiva "Next" si estamos en el último paso
}
//evento para avanzar.
nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length -1 ) {
        currentStep++;  //avanza al siguiente paso.
        updateMovingLine(); // Actualiza el estado después de avanzar
}
});

// Evento para retroceder
prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--; // Retrocede al paso anterior
        updateMovingLine(); // Actualiza el estado después de retroceder
    }
 });
// Inicializa el estado
updateMovingLine();