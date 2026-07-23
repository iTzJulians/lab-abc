 

const btnCalcular = document.getElementById("btnContar");
let contador = 0;
btnCalcular.addEventListener("click", function() {

        contador++
              document.getElementById("contador").textContent = contador;

        console.log(contador)
        
  });
 

      document.getElementById("contador").textContent = contador;
// Contador de letras descubiertas (RF-04)
let letrasDescubiertas = 0;

/**
 * Voltea la card al hacer clic (efecto de rotación).
 * Agrega/quita la clase .volteada para que el CSS anime el giro.
 * Solo cuenta la letra la primera vez que se descubre.
 * @param {HTMLElement} card - Elemento .card recibido con voltear(this)
 */
function voltear(card) {
    // Primera vez que se descubre esta letra
    if (!card.dataset.descubierta) {
        card.dataset.descubierta = 'true';
        letrasDescubiertas++;

        const contador = document.querySelector('#contador');
        if (contador) {
            contador.textContent = letrasDescubiertas;
        }
    }

    // Alterna la clase que dispara la rotación en CSS
    card.classList.toggle('volteada');
}
