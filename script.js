 const letras = [
    {
        id: 'A',
        nombre: 'Aguacate',
        link: 'https://imgs.search.brave.com/0R6ATxmBX2cpnyidXUF0IbtE-OLByD7IeGeZCXmsKfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYw/MjkzOTg0L2VzL3Zl/Y3Rvci9wZXJzb25h/amUtZGUtZGlidWpv/cy1hbmltYWRvcy1h/Z3VhY2F0ZS1oYWNp/ZW5kby1lamVyY2lj/aW9zLWNvbi1lbC1h/cm8tZGVsLWh1bGEt/cGxhbm8uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTQ5bUZP/NGRHeC1rMzFFaG5u/bnQ5Y3hNbHBlbUtQ/THFMaGt0Tm16NExz/OVU9'

    },
    {
        id: 'B',
        nombre: 'Barco',
        link: 'https://imgs.search.brave.com/9VnyMnNz5FiI59DoWt9Flzouv1hqbss1-1SppqT6yCA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vYXJ3YW4xMjMv/YXJ3YW4xMjMyNDAy/L2Fyd2FuMTIzMjQw/MjAwNzE2LzIyNjE0/OTU0Ny1iYXJjby1k/ZS15YXRlLWRlLWRp/YnVqb3MtYW5pbWFk/b3MtbmF2ZWdhbmRv/LWlsdXN0cmFjaSVD/MyVCM24tdmVjdG9y/aWFsLXBsYW5hLmpw/Zz92ZXI9Ng'
    },
    {
        id: 'C',
        nombre: 'Camaleon',
        link: 'https://imgs.search.brave.com/f5rN-NUjxo3h2SOgKcovLzjd0fgWZmMxqiVwrclYXXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vdG90YWxseWph/bWllL3RvdGFsbHlq/YW1pZTIyMDEvdG90/YWxseWphbWllMjIw/MTAwMDExLzE4MDU4/MzU5Ny11bmEtaWx1/c3RyYWNpJUMzJUIz/bi12ZWN0b3JpYWwt/ZGUtZGlidWpvcy1h/bmltYWRvcy1kZS11/bi1saW5kby1sYWdh/cnRvLWNhbWFsZSVD/MyVCM24tdmVyZGUu/anBnP3Zlcj02'
    },
    {
        id: 'D',
        nombre: 'Dedo',
        link: 'https://imgs.search.brave.com/PROPMtxXQ-Iexo6tXXFE64pq2fjVMQgWvWb3tRz6ZLs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE0LzY5/My82MzYvbm9uXzJ4/L2Zpbmdlci1pY29u/LWNhcnRvb24tc3R5/bGUtdmVjdG9yLmpw/Zw'
    },
    {
        id: 'E',
        nombre: 'Elefante',
        link: 'https://imgs.search.brave.com/uEV9S4HPmRxqJwF9CgPQf8U7Hksydyod9Wge3swy5-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/MzQyLzkyOS9zbWFs/bC9jdXRlLWNhcnRv/b24tZWxlcGhhbnQt/d2l0aC1zbWlsZS1m/cmVlLXZlY3Rvci5q/cGc'
    },
    {
        id: 'F',
        nombre: 'Foca',
        link: 'https://imgs.search.brave.com/cQ0Qc837TMBzunliTHxyllEbGIDaZiGgj04zxeETUG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ZlY3Rvci1wcmVt/aXVtL3NlbGxvLWRp/YnVqb3MtYW5pbWFk/b3MtZXMtdmVjdG9y/LXNpbXBsZV8xMDIz/OTg0LTI3NTI3Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA'
    },
    {
        id: 'G',
        nombre: 'Gato',
        link: 'https://imgs.search.brave.com/kY6Gj3RZ6DAVHuu9jynUgZMgNoVcvMnxYDFdwIfFPXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ZlY3Rvci1wcmVt/aXVtL2ljb25vLXZl/Y3RvcmlhbC1kaWJ1/am9zLWFuaW1hZG9z/LWdhdG8tYm9uaXRv/LXNlbnRhZG8taWx1/c3RyYWNpb24taWNv/bm8tbmF0dXJhbGV6/YS1hbmltYWwtY29u/Y2VwdG8tYWlzbGFk/by12ZWN0b3ItcGxh/bm8tZXN0aWxvLWRp/YnVqby1hbmltYWRv/LXByZW1pdW1fMTAz/MzU3OS02MjQ5Ny5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA'
    },
    {
        id: 'H',
        nombre: 'Hormiga',
        link: 'https://www.primeraescuela.com/imagestn/puzzles/alfabeto/h_hormiga.png'
    },
    {
        id: 'I',
        nombre: 'Iguana',
        link: 'https://i.pinimg.com/originals/8e/ed/01/8eed01556a3e923706def2989caf5b39.jpg'
    },
    {
        id: 'J',
        nombre: 'Jaguar',
        link: 'https://thumbs.dreamstime.com/b/ejemplo-del-vector-de-la-letra-j-y-jaguar-alfabeto-133613106.jpg'
    },
    {
        id: 'K',
        nombre: 'Koala',
        link: 'https://img.magnific.com/vector-premium/ilustracion-educativa-letra-k-alfabeto_402001-1438.jpg?w=2000'
    },
    {
        id: 'L',
        nombre: 'Leon',
        link: 'https://png.pngtree.com/png-vector/20240710/ourlarge/pngtree-alphabet-letter-l-with-for-lion-png-image_12973981.png'
    },
    {
        id: 'M',
        nombre: 'Mano',
        link: 'https://webmundoinfantil.com/wp-content/uploads/m-10.jpg'
    },
    {
        id: 'N',
        nombre: 'Nube',
        link: 'https://i.pinimg.com/vwebp/736x/17/4d/05/174d0502a77fec6a6b4056b156616191.webp'
    },
    {
        id: 'Ñ',
        nombre: 'Ñoño',
        link: 'https://i.pinimg.com/1200x/16/16/81/1616815aef6e9d07688efc9d984d91e8.jpg'
    },
    {
        id: 'O',
        nombre: 'Olla',
        link: 'https://i.pinimg.com/vwebp/736x/be/b5/50/beb550d65f6cf55138b375c2a0344409.webp'
    },
    {
        id: 'P',
        nombre: 'Pajaro',
        link: 'https://i.pinimg.com/736x/65/48/22/654822127363a67590e449da80c3ccfa.jpg'
    },
    {
        id: 'Q',
        nombre: 'Queso',
        link: 'https://i.pinimg.com/736x/17/38/1b/17381b556ef6710401c3660a3d9c6f39.jpg'
    },
    {
        id: 'R',
        nombre: 'Rosa',
        link: 'https://i.pinimg.com/736x/b1/26/cd/b126cd93624bf2bac186bce6f8633aab.jpg'
    },
    {
        id: 'S',
        nombre: 'Sobre',
        link: 'https://i.pinimg.com/1200x/d0/5d/4b/d05d4bc6a6d1d1daea66c6c65ae3449b.jpg'
    },
    {
        id: 'T',
        nombre: 'Tomate',
        link: 'https://previews.123rf.com/images/izakowski/izakowski1308/izakowski130800078/21295658-cartoon-illustration-of-capital-letter-t-from-alphabet-with-tomato-for-children-education.jpg',


    },
    {
        id: 'U',
        nombre: 'Unicornio',
        link: 'https://img.magnific.com/vector-premium/letra-u-es-alfabeto-dibujos-animados-unicornio_43633-856.jpg?w=360'
    },
    {
        id: 'V',
        nombre: 'Volcan',
        link: 'https://previews.123rf.com/images/izakowski/izakowski1708/izakowski170800060/83563794-educational-cartoon-illustration-of-letter-v-from-alphabet-with-volcano-for-children.jpg'
    },
    {
        id: 'W',
        nombre: 'Waffles',
        link: 'https://i.pinimg.com/236x/64/f9/a8/64f9a8d32c2dc404e657e42a8e75789b.jpg?nii=t'
    },
    {
        id: 'X',
        nombre: 'Xilofono',
        link: 'https://www.shutterstock.com/image-vector/illustration-isolated-alphabet-letter-x-260nw-2441876199.jpg'
    },
    {
        id: 'Y',
        nombre: 'Yate',
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_R0G2qJFLwyD3ZoxcOkO2xWllpMErsLHq6q0ON3-OTw&s=10'
    },
    {
        id: 'Z',
        nombre: 'Zebra',
        link: 'https://thumbs.dreamstime.com/b/letra-z-15422068.jpg'
    }
 ]
 const vocales = ['A', 'E', 'I', 'O', 'U'];



// Contador de letras descubiertas (RF-04)
let letrasDescubiertas = 0;

const btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.addEventListener("click", function() {
    location.reload();
});

 
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

function filtrar(tipo) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (tipo === 'todas' || card.dataset.tipo === tipo) {
            card.style.display = 'flex';
        }else {
            card.style.display = 'none';
        }
    }

    );
}



function renderizarCards() {
    const contenedor = document.getElementById('contenedor-cards');
    let html = '';

    for (let i=0; i < letras.length; i++) {
        const letra = letras[i];
        const tipo = vocales.includes(letra.id) ? 'vocal' : 'consonante';
        html += `
            <div class='card' data-tipo='${tipo}' onclick='voltear(this)'>
                <div class='card-inner'>
                    <div class='card-frente'>
                        <h1>
                            ${letra.id}
                        </h1>
                    </div>
                    <div class='card-dorso'>
                        <img src='${letra.link}' alt='${letra.nombre}'>
                        <h3>
                            ${letra.nombre}
                        </h3>
                    </div>
                </div>
                
            </div>
        `;
    }
    contenedor.innerHTML = html;
}

renderizarCards();