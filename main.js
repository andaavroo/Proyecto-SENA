document.addEventListener('DOMContentLoaded', () => {
    // Navegación entre secciones
    const menuLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('section');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('data-target');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === target) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Manejo del carrito y compra
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceId = button.getAttribute('data-service-id');
            // Aquí puedes agregar la lógica para agregar el servicio al carrito, por ejemplo, incrementar un contador
            cartCount++;
            updateCartCount();
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', function() {
        // Aquí puedes agregar la lógica para procesar la compra, por ejemplo, mostrar un mensaje de éxito y reiniciar el carrito
        alert('Compra realizada con éxito!');
        cartCount = 0;
        updateCartCount();
    });

    function updateCartCount() {
        cartCountElement.textContent = `(${cartCount})`;
    }
});