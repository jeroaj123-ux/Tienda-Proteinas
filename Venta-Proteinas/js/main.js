document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");
  const navButtons = document.querySelectorAll("nav button");

  window.app = appElement; 

  function setActive(link) {
    navButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.link === link));
  }

  window.render = function(view) {
    setActive(view);

    if (view === "home") {
      appElement.innerHTML = `
        <div class="card">
          <h2>Bienvenido a Ponte Mamado</h2>
          <p>Tu tienda de suplementos.</p>
          <p>¿No sabes dónde comprar proteínas?, ¡llego tu solucion facil y rapida!. Envíos en menos de una semana en Colombia, un poco mas dependiendo de tu pais.</p>
          <a href="#" class="btn" data-link="products">Ver productos</a>
        </div>
      `;
    }

    if (view === "products") {
      let html = `<div class="card"><h2>Catálogo</h2><div class="products">`;
      products.forEach(p => {
        html += `
          <div class="product">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <strong>$${p.price.toLocaleString()}</strong>
            <button class="btn" onclick="addToCart(${p.id})">Agregar</button>
          </div>`;
      });
      html += "</div></div>";
      appElement.innerHTML = html;
    }

    if (view === "cart") {
      if (cart.length === 0) {
        appElement.innerHTML = `<div class="card"><h2>Tu carrito</h2><p>No hay productos añadidos.</p></div>`;
        return;
      }
      let html = `<div class="card"><h2>Tu carrito</h2>`;
      cart.forEach(p => {
        html += `
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <span>${p.name} (x${p.qty})</span>
            <button class="btn" onclick="removeFromCart(${p.id})">Eliminar</button>
          </div>`;
      });
      html += `
        <hr>
        <button class="btn" data-link="checkout">Finalizar compra</button>
        <button class="btn" onclick="clearCart()">Vaciar carrito</button>
      </div>`;
      appElement.innerHTML = html;
    }

    if (view === "checkout") {
      renderCheckout();
    }

    if (view === "about") {
      appElement.innerHTML = `
        <div class="card">
          <h2>Acerca del proyecto</h2>
          <p>Este sitio es un prototipo para simular una tienda de proteínas nada es real es un tipo de "simulador" como anteriormente se menciona.</p>
        </div>
      `;
    }
  };

  document.body.addEventListener("click", e => {
    const link = e.target.dataset.link;
    if (link) {
      e.preventDefault();
      render(link);
    }
  });

  render("home");
});
