 

const btnCalcular = document.getElementById("btnContar");
let contador = 0;
btnCalcular.addEventListener("click", function() {

        contador++
              document.getElementById("contador").textContent = contador;

        console.log(contador)
        
  });
 

      document.getElementById("contador").textContent = contador;