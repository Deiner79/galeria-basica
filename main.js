const fotos = [
  {
    id: 1,
    src: "./fotos/bus.jpg",
    category: "vehiculo",
  },
  {
    id: 2,
    src: "./fotos/carro.jpg",
    category: "vehiculo",
  },
  {
    id: 3,
    src: "./fotos/moto.jpg",
    category: "vehiculo",
  },
  {
    id: 4,
    src: "./fotos/leon.jpg",
    category: "animales",
  },
  {
    id: 5,
    src: "./fotos/mangosta.jpg",
    category: "animales",
  },
  {
    id: 6,
    src: "./fotos/foto-zorro.jpg",
    category: "animales",
  },
  {
    id: 7,
    src: "./fotos/nieve.jpg",
    category: "paisajes",
  },
  {
    id: 8,
    src: "./fotos/desierto.jpg",
    category: "paisajes",
  },
  {
    id: 9,
    src: "./fotos/verano.jpg",
    category: "paisajes",
  },
];
const galeria = document.querySelector(".foto");
const mostrarFoto = () => {
  fotos.forEach((foto) => {
    const img = document.createElement("img");
    img.src = foto.src;
    img.alt = `Imagen de ${foto.category}`;
    img.dataset.category = foto.category;
    img.classList.add("img");
    galeria.appendChild(img);
    return img;
  });
};

mostrarFoto();

function verCategoria() {
  const btn = document.querySelectorAll("button");
  btn.forEach((boton) => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-categoria");
      const imagenes = document.querySelectorAll("img");
      imagenes.forEach((imagen) => {
        if (categoria === "todos" || imagen.dataset.category === categoria) {
          imagen.classList.remove("ocultarImg"); // Mostrar la imagen si coincide o si se selecciona "todos"
        } else {
          imagen.classList.add("ocultarImg"); // Ocultar la imagen si no coincide
        }
      });
    });
  });
}
verCategoria();
