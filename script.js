// ==========================
// Seleccionar producto y agregarlo al carrito
// ==========================
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");

let carrito = [];

document.querySelectorAll(".btnSelect").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    const price = btn.getAttribute("data-price");

    carrito.push({ name, price });
    actualizarCarrito();

    // Estilo visual de agregado
    alert(`${name} agregado al carrito con éxito 🛒`);
  });
});

// ==========================
// Botón Retirar (solo visual de la card)
// ==========================
document.querySelectorAll(".btnRemove").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-card");
    const card = document.getElementById("card" + id);
    const desc = document.getElementById("desc" + id);

    card.classList.remove("border", "border-success", "shadow");
    desc.classList.add("d-none");
  });
});

// ==========================
// Funciones carrito
// ==========================
function actualizarCarrito() {
  cartList.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    li.innerHTML = `${item.name} - $${item.price} 
      <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">X</button>`;
    cartList.appendChild(li);
  });
  cartCount.textContent = carrito.length;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

document.getElementById("btnVaciar").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

document.getElementById("btnComprar").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
  } else {
    alert("¡Compra realizada con éxito! 🎉");
    carrito = [];
    actualizarCarrito();
  }
});

// ==========================
// Agregar imágenes dinámicas
// ==========================
const input = document.getElementById("imageUrl");
const addBtn = document.getElementById("addImageBtn");
const gallery = document.getElementById("galleryContainer");

addBtn.addEventListener("click", () => {
  const url = input.value.trim();

  if (url) {
    const col = document.createElement("div");
    col.classList.add("col-md-4");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    const img = document.createElement("img");
    img.src = url;
    img.classList.add("card-img-top");
    img.alt = "Imagen agregada";

    card.appendChild(img);
    col.appendChild(card);
    gallery.appendChild(col);

    input.value = "";
  } else {
    alert("Por favor, ingresa una URL válida.");
  }
});

// ==========================
// Fondo degradado HSL dinámico (TONOS NEUTROS)
// ==========================
document.addEventListener("mousemove", (e) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const hue = Math.round(20 + (e.clientX / width) * 40);
  const saturation = Math.round(10 + (e.clientY / height) * 30);
  const lightness = 75;

  document.body.style.background = `linear-gradient(135deg, 
    hsl(${hue}, ${saturation}%, ${lightness}%), 
    hsl(${(hue + 15) % 360}, ${saturation}%, ${lightness - 10}%)
  )`;
});

// ==========================
// LISTA DE TAREAS
// ==========================
const taskList = document.getElementById("taskList");
const removeFirstBtn = document.getElementById("removeFirstBtn");
const newTaskInput = document.getElementById("newTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

removeFirstBtn.addEventListener("click", () => {
  const firstTask = taskList.querySelector("li");
  if (firstTask) {
    firstTask.remove();
  } else {
    alert("No hay tareas para eliminar.");
  }
});

addTaskBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = taskText;
    taskList.appendChild(li);
    newTaskInput.value = "";
  } else {
    alert("Por favor, escribe una tarea antes de agregar.");
  }
});