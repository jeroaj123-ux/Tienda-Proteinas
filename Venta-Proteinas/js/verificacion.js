function renderCheckout() {
  const total = cart.reduce((t, p) => t + p.price * p.qty, 0);

  app.innerHTML = `
    <div class="card">
      <h2>Finalizar compra</h2>
      <form id="checkout-form">
        <label>Nombre completo</label>
        <input type="text" required>
        
        <label>Correo electrónico</label>
        <input type="email" required>
        
        <label>Dirección</label>
        <input type="text" required>

        <p><strong>Total a pagar: $${total.toLocaleString()}</strong></p>
        <button type="submit" class="btn">Confirmar compra</button>
      </form>
    </div>
  `;

  const form = document.getElementById("checkout-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("¡Compra completada, asi como te llegara pronto, pronto te pondras mamadisimo!");
    clearCart();
    render("home");
  });
}
