console.log("✅ app.js cargado");
let modoAdminActivo = false;

// ================================================
// TRADUCTOR ES/EN
// ================================================

const translations = {
    es: {
        badgeText: "Barichara - Santander",
        inicioTitle: "El Encuentro de dos Culturas en una Fusión Única",
        inicioSubtitle: "Disfruta de la auténtica gastronomía artesanal italiana con el alma y los ingredientes tradicionales de nuestra tierra santandereana. Ubicados en la histórica Antigua Casa Encanto.",
        subtitle: "Barichara, Santander",
        exploreMenuBtn: "Explorar Menú",
        reserveBtn: "Reservar Mesa",
        
        expCocinaTitle: "🍳 Cocina Artesanal",
        expCocinDesc: "Preparaciones cuidadas al detalle cada día, combinando técnicas tradicionales y frescura inigualable.",
        expMagiaTitle: "🏛️ Magia Colonial",
        expMagiaDesc: "Un espacio mágico en la Antigua Casa Encanto, a solo unos pasos del parque principal.",
        expAmbienteTitle: "🍷 Ambiente Acogedor",
        expAmbienteDesc: "El lugar perfecto para compartir en pareja, con amigos o en familia disfrutando de una experiencia única.",
        
        historyTitle: "Dos Mundos, Un Solo Fogón: La Historia de Al Fogolar",
        historyText1: "En el noreste y el sur de Italia, el 'Fogolar' es mucho más que un simple espacio físico; representa el fogón tradicional, el fuego sagrado y el rincón del hogar donde la familia se reúne a compartir la vida alrededor de una buena mesa. Con esa misma filosofía de calidez, unión y hospitalidad, nacimos en Barichara hace más de una década, con el propósito de crear un refugio gastronómico donde cada comensal se sintiera como en casa, cobijado por la magia colonial del pueblo más lindo de Colombia.",
        historyText2: "Nuestra historia comenzó como un homenaje a las raíces italianas, ofreciendo pastas artesanales moldeadas completamente a mano y pizzas crujientes horneadas con el respeto absoluto a los legados del viejo continente. Sin embargo, al estar inmersos en la profunda riqueza cultural de Santander, nuestra cocina vivió una evolución natural. Inspirados por los ingredientes locales y el entorno, decidimos fusionar las técnicas europeas con la identidad de la región.",
        historyText3: "Tras años de consolidar nuestra esencia frente a la emblemática Catedral de Barichara, hoy escribimos un nuevo capítulo desde nuestra sede en la Antigua Casa Encanto. En este nuevo espacio, conservamos intacta la imponente arquitectura de tapia pisada y piedra labrada que caracteriza la historia del municipio, elevando la experiencia para ofrecer no solo grandes sabores, sino también un ambiente lleno de arte, comodidad y una evolución culinaria.",
        
        menuTitle: "Carta Tradicional",
        dish1Title: "Carne Oreada con Yuca",
        dish1Desc: "Marinada al sol con especias locales y hogao.",
        dish2Title: "Cabro con Pepitoria",
        dish2Desc: "Asado al carbón con su tradicional pepitoria.",
        dish3Title: "Arepas Carisecas",
        dish3Desc: "Horneadas en leña con miel de panela.",
        
        ubicacionTitle: "Ubicación",
        ubicacionText: "Nos encontramos ubicados en el hermoso municipio de Barichara, Santander. ¡Visítanos en nuestra nueva sede y vive una experiencia inolvidable!",
        addressInfo: "📍 <strong>Dirección:</strong> Cl. 6 #5-68 (A media cuadra del parque principal), Barichara, Santander",
        hoursInfo: "🕒 <strong>Horarios:</strong> Lunes a Domingo de 12:00 p.m. a 9:00 p.m.",
        howToGetThere: "🚗 <strong>Cómo llegar:</strong> Estamos a solo media cuadra del parque principal de Barichara. ¡Fácil de ubicar en el centro histórico!",
        priceInfo: "💲 <strong>Precio promedio por persona:</strong> $40,000 - $60,000 COP",
        
        opinionsMainTitle: "Opiniones de nuestros visitantes",
        formTitle: "💬 Deja tu Opinión",
        langBtn: "🇬🇧 English",
        currencyBtn: "💱 Moneda: COP",
        
        gameMainTitle: "¡Atrapa la Arepa!",
        gameSubTitle: "Mueve la canasta con las flechas del teclado o el mouse para atrapar las arepas y ganar puntos.",
        scoreText: "Puntuación:",
        startBtn: "▶️ Iniciar Juego"
    },
    en: {
        badgeText: "Barichara - Santander",
        inicioTitle: "The Meeting of Two Cultures in a Unique Fusion",
        inicioSubtitle: "Enjoy authentic artisanal Italian gastronomy with the soul and traditional ingredients of our Santander land. Located in the historic Antigua Casa Encanto.",
        subtitle: "Barichara, Santander",
        exploreMenuBtn: "Explore Menu",
        reserveBtn: "Reserve Table",
        
        expCocinaTitle: "🍳 Artisanal Cooking",
        expCocinDesc: "Carefully prepared dishes every day, combining traditional techniques and unmatched freshness.",
        expMagiaTitle: "🏛️ Colonial Magic",
        expMagiaDesc: "A magical space in the Antigua Casa Encanto, just steps from the main park.",
        expAmbienteTitle: "🍷 Welcoming Atmosphere",
        expAmbienteDesc: "The perfect place to share with your partner, friends or family enjoying a unique experience.",
        
        historyTitle: "Two Worlds, One Hearth: The History of Al Fogolar",
        historyText1: "In the northeast and south of Italy, the 'Fogolar' is much more than a physical space; it represents the traditional hearth, the sacred fire and the corner of the home where family gathers to share life around a good table. With this same philosophy of warmth, unity and hospitality, we were born in Barichara over a decade ago, with the purpose of creating a gastronomic refuge where each diner felt at home, sheltered by the colonial magic of Colombia's most beautiful town.",
        historyText2: "Our story began as a tribute to Italian roots, offering handmade artisanal pastas and crispy pizzas baked with absolute respect for the legacy of the old continent. However, immersed in the rich cultural wealth of Santander, our cuisine underwent a natural evolution. Inspired by local ingredients and environment, we decided to merge European techniques with regional identity. The result is a unique gastronomic proposal where the delicacy of homemade ravioli coexists in perfect harmony with the character and strength of traditional local dishes.",
        historyText3: "After years of consolidating our essence in front of the emblematic Barichara Cathedral, today we are writing a new chapter from our headquarters in the Antigua Casa Encanto. In this new space, we preserve intact the imposing architecture of rammed earth and hewn stone that characterizes the history of the municipality, elevating the experience to offer not only great flavors, but also an atmosphere full of art, comfort and a culinary evolution that continues uniting the best of two worlds in one hearth.",
        
        menuTitle: "Traditional Menu",
        dish1Title: "Jerky Beef with Yuca",
        dish1Desc: "Sun-dried with local spices and hogao.",
        dish2Title: "Cabro with Pepitoria",
        dish2Desc: "Charcoal grilled with traditional pepitoria.",
        dish3Title: "Crispy Arepas",
        dish3Desc: "Wood-fired with panela honey.",
        
        ubicacionTitle: "Location",
        ubicacionText: "We are located in the beautiful municipality of Barichara, Santander. Visit us at our new headquarters and experience something unforgettable!",
        addressInfo: "📍 <strong>Address:</strong> Cl. 6 #5-68 (Half a block from the main park), Barichara, Santander",
        hoursInfo: "🕒 <strong>Hours:</strong> Monday to Sunday from 12:00 p.m. to 9:00 p.m.",
        howToGetThere: "🚗 <strong>How to get there:</strong> We are just half a block from Barichara's main park. Easy to find in the historic center!",
        priceInfo: "💲 <strong>Average price per person:</strong> $40,000 - $60,000 COP",
        
        opinionsMainTitle: "Visitor Reviews",
        formTitle: "💬 Leave Your Review",
        langBtn: "🇪🇸 Español",
        currencyBtn: "💱 Currency: COP",
        
        gameMainTitle: "Catch the Arepa!",
        gameSubTitle: "Move the basket with arrow keys or mouse to catch the arepas and earn points.",
        scoreText: "Score:",
        startBtn: "▶️ Start Game"
    }
};

let currentLang = 'es';
const currencies = { COP: 1, USD: 0.00025 };
let currentCurrency = 'COP';

// ================================================
// FUNCIONES DE TRADUCCIÓN
// ================================================

function setLanguage(lang) {
    currentLang = lang;
    updateTexts();
    localStorage.setItem('preferredLang', lang);
}

function setCurrency(currency) {
    currentCurrency = currency;
    updatePrices();
    localStorage.setItem('preferredCurrency', currency);
}

function updateTexts() {
    const t = translations[currentLang];
    
    // Header y navegación
    if (document.getElementById('subtitle')) document.getElementById('subtitle').textContent = t.subtitle;
    if (document.getElementById('langBtn')) {
        document.getElementById('langBtn').textContent = t.langBtn;
        document.getElementById('langBtn').onclick = () => setLanguage(currentLang === 'es' ? 'en' : 'es');
    }

    if (document.getElementById('currencyBtn')) {
    document.getElementById('currencyBtn').textContent = t.currencyBtn;
    document.getElementById('currencyBtn').onclick = () => setCurrency(currentCurrency === 'COP' ? 'USD' : 'COP');
}

    // Sección INICIO
    if (document.getElementById('badgeText')) document.getElementById('badgeText').textContent = t.badgeText;
    if (document.getElementById('inicioTitle')) document.getElementById('inicioTitle').textContent = t.inicioTitle;
    if (document.getElementById('inicioSubtitle')) document.getElementById('inicioSubtitle').textContent = t.inicioSubtitle;
    if (document.getElementById('exploreMenuBtn')) document.getElementById('exploreMenuBtn').textContent = t.exploreMenuBtn;
    if (document.getElementById('reserveBtn')) document.getElementById('reserveBtn').textContent = t.reserveBtn;
    
    if (document.getElementById('expCocinaTitle')) document.getElementById('expCocinaTitle').textContent = t.expCocinaTitle;
    if (document.getElementById('expCocinDesc')) document.getElementById('expCocinDesc').textContent = t.expCocinDesc;
    if (document.getElementById('expMagiaTitle')) document.getElementById('expMagiaTitle').textContent = t.expMagiaTitle;
    if (document.getElementById('expMagiaDesc')) document.getElementById('expMagiaDesc').textContent = t.expMagiaDesc;
    if (document.getElementById('expAmbienteTitle')) document.getElementById('expAmbienteTitle').textContent = t.expAmbienteTitle;
    if (document.getElementById('expAmbienteDesc')) document.getElementById('expAmbienteDesc').textContent = t.expAmbienteDesc;

    // Sección HISTORIA
    if (document.getElementById('historyTitle')) document.getElementById('historyTitle').textContent = t.historyTitle;
    if (document.getElementById('historyText1')) document.getElementById('historyText1').textContent = t.historyText1;
    if (document.getElementById('historyText2')) document.getElementById('historyText2').textContent = t.historyText2;
    if (document.getElementById('historyText3')) document.getElementById('historyText3').textContent = t.historyText3;

    // Sección MENÚ
    if (document.getElementById('menuTitle')) document.getElementById('menuTitle').textContent = t.menuTitle;
    if (document.getElementById('dish1Title')) document.getElementById('dish1Title').textContent = t.dish1Title;
    if (document.getElementById('dish1Desc')) document.getElementById('dish1Desc').textContent = t.dish1Desc;
    if (document.getElementById('dish2Title')) document.getElementById('dish2Title').textContent = t.dish2Title;
    if (document.getElementById('dish2Desc')) document.getElementById('dish2Desc').textContent = t.dish2Desc;
    if (document.getElementById('dish3Title')) document.getElementById('dish3Title').textContent = t.dish3Title;
    if (document.getElementById('dish3Desc')) document.getElementById('dish3Desc').textContent = t.dish3Desc;

    // Sección UBICACIÓN
    if (document.getElementById('ubicacionTitle')) document.getElementById('ubicacionTitle').textContent = t.ubicacionTitle;
    if (document.getElementById('ubicacionText')) document.getElementById('ubicacionText').textContent = t.ubicacionText;
    if (document.getElementById('addressInfo')) document.getElementById('addressInfo').innerHTML = t.addressInfo;
    if (document.getElementById('hoursInfo')) document.getElementById('hoursInfo').innerHTML = t.hoursInfo;
    if (document.getElementById('howToGetThere')) document.getElementById('howToGetThere').innerHTML = t.howToGetThere;
    if (document.getElementById('priceInfo')) document.getElementById('priceInfo').innerHTML = t.priceInfo;

    // Sección OPINIONES
    if (document.getElementById('opinionsMainTitle')) document.getElementById('opinionsMainTitle').textContent = t.opinionsMainTitle;
    if (document.getElementById('formTitle')) document.getElementById('formTitle').textContent = t.formTitle;

    // Sección JUEGO
    if (document.getElementById('gameMainTitle')) document.getElementById('gameMainTitle').textContent = t.gameMainTitle;
    if (document.getElementById('gameSubTitle')) document.getElementById('gameSubTitle').textContent = t.gameSubTitle;
    if (document.getElementById('startBtn')) document.getElementById('startBtn').textContent = t.startBtn;
    
    updateScoreText();
}

function updateScoreText() {
    const t = translations[currentLang];
    if (document.getElementById('scoreText')) {
        document.getElementById('scoreText').textContent = `${t.scoreText} ${gameScore}`;
    }
}

function updatePrices() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        const cop = parseFloat(price.getAttribute('data-cop'));
        const usd = parseFloat(price.getAttribute('data-usd'));
        const amount = currentCurrency === 'COP' ? cop : usd;
        price.textContent = currentCurrency === 'COP' ? `$ ${amount.toLocaleString('es-CO')} ${currentCurrency}` : `$ ${amount.toFixed(2)} ${currentCurrency}`;
    });
}

// ================================================
// NAVEGACIÓN POR SECCIONES (TABS)
// ================================================

function showSection(sectionId, event) {
    if (event) event.preventDefault();
    
    // Ocultar todas las secciones
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Desactivar todos los botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active-section');
        if (sectionId === 'juego') initializeGame();
    }
    
    // Activar el botón correspondiente
    event?.target?.classList.add('active');

        // Mostrar/ocultar botón de moneda solo en menú
    const currencyContainer = document.getElementById('currencyContainer');
    if (currencyContainer) {
        currencyContainer.style.display = sectionId === 'menu' ? 'block' : 'none';
    }

}


// ================================================
// SISTEMA DE OPINIONES (REVIEWS)
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userReviewForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const dish = document.getElementById('selectDish').value;
            const rating = document.getElementById('selectRating').value;
            const name = document.getElementById('inputName').value;
            const comment = document.getElementById('inputComment').value;
            
            const reviewList = document.getElementById('generalReviewsList');
            const stars = '⭐'.repeat(parseInt(rating));
            const newReview = document.createElement('p');
            newReview.className = 'review';
            newReview.innerHTML = `${stars} "${comment}" - ${name} <small style="color: gray;">(${dish})</small>`;
            
            const hr = document.createElement('hr');
            hr.style.cssText = "border: 0; border-top: 1px solid #eee; margin: 0.8rem 0;";
            
            reviewList.appendChild(newReview);
            reviewList.appendChild(hr);
            
            form.reset();
            alert(currentLang === 'es' ? '¡Gracias por tu opinión!' : 'Thank you for your review!');
        });
    }

    // Cargar preferencias guardadas
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    const savedCurrency = localStorage.getItem('preferredCurrency') || 'COP';
    setLanguage(savedLang);
    setCurrency(savedCurrency);
});

// ================================================
// MINIJUEGO: ATRAPA LA AREPA
// ================================================

const canvas = document.getElementById('gameCanvas');
const ctx = canvas?.getContext('2d');
let gameActive = false;
let gameScore = 0;
let player = { x: canvas?.width / 2 || 200, y: canvas?.height - 30 || 370, width: 50, height: 20, color: '#7f4f24' };
let arepas = [];
let gameSpeed = 3;

function initializeGame() {
    gameActive = false;
    gameScore = 0;
    arepas = [];
    updateScoreText();
    drawGame();
}

function drawGame() {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar canasta
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.strokeStyle = '#5c3a1f';
    ctx.lineWidth = 2;
    ctx.strokeRect(player.x, player.y, player.width, player.height);

    // Dibujar arepas
    arepas.forEach((arepa, index) => {
        ctx.fillStyle = '#f4a460';
        ctx.beginPath();
        ctx.arc(arepa.x, arepa.y, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#d4a373';
        ctx.lineWidth = 2;
        ctx.stroke();

        arepa.y += gameSpeed;

        // Verificar colisión
        if (arepa.y > player.y && arepa.x > player.x && arepa.x < player.x + player.width) {
            gameScore++;
            updateScoreText();
            arepas.splice(index, 1);
            gameSpeed += 0.1;
        }

        if (arepa.y > canvas.height) {
            arepas.splice(index, 1);
        }
    });

    if (gameActive) {
        if (Math.random() < 0.02) {
            arepas.push({ x: Math.random() * (canvas.width - 16) + 8, y: 0 });
        }
        requestAnimationFrame(drawGame);
    }
}

// Movimiento con teclado
document.addEventListener('keydown', (e) => {
    if (!gameActive || !canvas) return;
    if (e.key === 'ArrowLeft' && player.x > 0) player.x -= 15;
    if (e.key === 'ArrowRight' && player.x < canvas.width - player.width) player.x += 15;
});

// Movimiento con mouse
if (canvas) {
    canvas.addEventListener('mousemove', (e) => {
        if (!gameActive) return;
        const rect = canvas.getBoundingClientRect();
        player.x = e.clientX - rect.left - player.width / 2;
        if (player.x < 0) player.x = 0;
        if (player.x > canvas.width - player.width) player.x = canvas.width - player.width;
    });
}

// Botón iniciar juego
const startBtn = document.getElementById('startBtn');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        gameActive = !gameActive;
        startBtn.textContent = gameActive ? (currentLang === 'es' ? '⏸️ Pausar' : '⏸️ Pause') : (currentLang === 'es' ? '▶️ Iniciar Juego' : '▶️ Start Game');
        if (gameActive) {
            drawGame();
        }
    });
}

// Función para verificar la contraseña del administrador/empleado
function verificarAccesoAdmin() {
    const passwordIngresada = prompt("Ingrese la contraseña de empleado:");
    const claveCorrecta = "fogolar2026";

    if (passwordIngresada === claveCorrecta) {
        document.getElementById("panelAdministracion").style.display = "block";
        alert("¡Acceso concedido! Ya puede gestionar el menú y eliminar platos.");
        document.getElementById("panelAdministracion").scrollIntoView({ behavior: 'smooth' });
        modoAdminActivo = true;  // ← AGREGA ESTA LÍNEA
        cargarResenas();
    } else if (passwordIngresada !== null) {
        alert("Contraseña incorrecta. Acceso denegado.");
    }
}

function cerrarPanelAdmin() {
    modoAdminActivo = false;
    document.getElementById("panelAdministracion").style.display = "none";
    document.getElementById("formNuevoPlato").reset();
    cargarPlatosMenu(); // <--- Oculta los botones de eliminar para los clientes normales
}

// Capturar el envío del formulario para guardarlo en la base de datos vía API
document.addEventListener("DOMContentLoaded", () => {
    const formPlato = document.getElementById("formNuevoPlato");
    
    if (formPlato) {
        formPlato.addEventListener("submit", async (e) => {
            e.preventDefault();

            const nuevoPlato = {
                nombre_es: document.getElementById("nombreEsp").value,
                nombre_en: document.getElementById("nombreEng").value,
                descripcion: document.getElementById("descripcionPlato").value,
                precio_cop: parseFloat(document.getElementById("precioCop").value),
                precio_usd: parseFloat(document.getElementById("precioUsd").value),
                imagen: document.getElementById("imagenPlato").value
            };

            try {
                const respuesta = await fetch('http://localhost:3000/api/platos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevoPlato)
                });

                if (respuesta.ok) {
                    alert("¡Plato agregado exitosamente al menú de Al Fogolar!");
                    formPlato.reset();
                    // Si tienes una función que recarga los platos en pantalla, la puedes llamar aquí:
                    // cargarPlatos(); 
                } else {
                    alert("Hubo un error al guardar el plato en el servidor.");
                }
            } catch (error) {
                console.error("Error de conexión:", error);
                alert("No se pudo conectar con el servidor backend.");
            }
        });
    }
});

// ================================================
// CARGAR PLATOS DINÁMICAMENTE DESDE EL BACKEND
// ================================================

async function cargarPlatosMenu() {
    try {
        const respuesta = await fetch('http://localhost:3000/api/platos');
        const platos = await respuesta.json();
        
        const menuGrid = document.getElementById('menuGrid');
        if (!menuGrid) return;
        
        menuGrid.innerHTML = '';
        
        // Verificamos si el panel de administración está visible actualmente
        const panelAdminVisible = document.getElementById('panelAdministracion')?.style.display === 'block';
        
        platos.forEach(plato => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            
            const nombre = plato.nombre_es || plato.title_es || 'Plato especial';
            const descripcion = plato.descripcion_es || plato.description_es || 'Deliciosa preparación artesanal.';
            const precioCop = plato.precio_cop || plato.price_cop || 0;
            const precioUsd = plato.precio_usd || plato.price_usd || 0;
            const imagen = plato.imagen_url || plato.image_url || plato.imagen || plato.foto || plato.image || plato.img || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=80';
            
            // Obtenemos el ID del plato (asegurándonos de cubrir cualquier nombre de columna posible)
            const platoId = plato.id || plato.id_plato || plato.codigo || plato.dish_id;

            // Si el administrador está logueado, le agregamos el botón de eliminar abajo
            let botonEliminarHTML = '';
            if (panelAdminVisible && platoId) {
                botonEliminarHTML = `
                    <button onclick="eliminarPlato(${platoId})" style="margin-top: 10px; width: 100%; background: #d9534f; color: white; border: none; padding: 6px; border-radius: 4px; cursor: pointer; font-weight: bold;">
                        🗑️ Eliminar Plato
                    </button>
                `;
            }

            card.innerHTML = `
                <img src="${imagen}" alt="${nombre}">
                <div class="menu-info">
                    <div>
                        <h3>${nombre}</h3>
                        <p>${descripcion}</p>
                    </div>
                    <span class="price" data-cop="${precioCop}" data-usd="${precioUsd}">$ ${Number(precioCop).toLocaleString('es-CO')} COP</span>
                    ${botonEliminarHTML}
                </div>
            `;
            
            menuGrid.appendChild(card);
        });
        
        updatePrices();
        
    } catch (error) {
        console.error("Error al cargar los platos del menú:", error);
    }
}

// Ejecutar la función cuando cargue la página y también cuando se guarde un nuevo plato
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 DOMContentLoaded ejecutado");
    cargarPlatosMenu();
    console.log("✅ cargarPlatosMenu ejecutada");
    cargarResenas();
    console.log("✅ cargarResenas ejecutada");
    cargarPlatosDropdown();
    console.log("✅ cargarPlatosDropdown ejecutada");
});
    
    const formPlato = document.getElementById("formNuevoPlato");
    if (formPlato) {
        formPlato.addEventListener("submit", async (e) => {
            e.preventDefault();

            const nuevoPlato = {
                nombre_es: document.getElementById("nombreEsp").value,
                nombre_en: document.getElementById("nombreEng").value,
                descripcion_es: document.getElementById("descripcionPlato").value, // Aseguramos que coincida con el backend
                precio_cop: parseFloat(document.getElementById("precioCop").value),
                precio_usd: parseFloat(document.getElementById("precioUsd").value),
                imagen_url: document.getElementById("imagenPlato").value // Aseguramos que coincida con el backend
            };

            try {
                const respuesta = await fetch('http://localhost:3000/api/platos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevoPlato)
                });

                if (respuesta.ok) {
                    alert("¡Plato agregado exitosamente al menú de Al Fogolar!");
                    formPlato.reset();
                    cerrarPanelAdmin();
                    cargarPlatosMenu(); // <--- Recarga automática del menú en pantalla
                } else {
                    alert("Hubo un error al guardar el plato en el servidor.");
                }
            } catch (error) {
                console.error("Error de conexión:", error);
                alert("No se pudo conectar con el servidor backend.");
            }
        });
    }

// Función para eliminar un plato por su ID
async function eliminarPlato(id) {
    if (!confirm("¿Está seguro de que desea eliminar este plato del menú?")) {
        return;
    }

    try {
        const respuesta = await fetch(`http://localhost:3000/api/platos/${id}`, {
            method: 'DELETE'
        });

        if (respuesta.ok) {
            alert("¡Plato eliminado exitosamente!");
            cargarPlatosMenu(); // Recarga el menú para que desaparezca de la pantalla
        } else {
            alert("Hubo un error al intentar eliminar el plato en el servidor.");
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor backend.");
    }
}

// ================================================
// CARGAR RESEÑAS DESDE LA BASE DE DATOS
// ================================================

   async function cargarResenas() {
    try {
        const respuesta = await fetch('http://localhost:3000/api/opiniones');
        const resenas = await respuesta.json();
        
        const reviewList = document.getElementById('generalReviewsList');
        if (!reviewList) return;
        
        reviewList.innerHTML = '';
        
        if (resenas.length === 0) {
            reviewList.innerHTML = '<p style="text-align: center; color: #999;">Aún no hay reseñas. ¡Sé el primero en dejar una!</p>';
            return;
        }
        
        resenas.forEach(resena => {
            const stars = '⭐'.repeat(resena.rating);
            const p = document.createElement('p');
            p.className = 'review';
            p.innerHTML = `${stars} "${resena.comment}" - ${resena.name} <small style="color: gray;">(${resena.dish})</small>`;
            
            // Botón de eliminar (solo visible si panel admin está activo)
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = '❌';
            btnEliminar.style.cssText = "background: #ff6b6b; color: white; border: none; padding: 0.3rem 0.6rem; border-radius: 4px; cursor: pointer; margin-left: 0.5rem; font-size: 0.9rem;";
            btnEliminar.onclick = async () => {
                if (confirm('¿Estás seguro de eliminar esta reseña?')) {
                    try {
                        await fetch(`http://localhost:3000/api/opiniones/${resena.id}`, { method: 'DELETE' });
                        cargarResenas(); // Recarga las reseñas
                    } catch (error) {
                        console.error('Error al eliminar:', error);
                    }
                }
            };
            
            // Solo mostrar botón si panel admin está activo
            if (modoAdminActivo) {
                p.appendChild(btnEliminar);
            }
            
            const hr = document.createElement('hr');
            hr.style.cssText = "border: 0; border-top: 1px solid #eee; margin: 0.8rem 0;";
            
            reviewList.appendChild(p);
            reviewList.appendChild(hr);
        });
    } catch (error) {
        console.error('Error al cargar reseñas:', error);
    }
}
// ================================================
// NAVEGACIÓN POR SECCIONES (TABS)
// ================================================

function showSection(sectionId, event) {
    if (event) event.preventDefault();
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active-section');
    }
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    const currencyContainer = document.getElementById('currencyContainer');
    if (currencyContainer) {
        currencyContainer.style.display = sectionId === 'menu' ? 'block' : 'none';
    }
}

// ================================================
// CARGAR PLATOS EN EL DROPDOWN DE OPINIONES
// ================================================

async function cargarPlatosDropdown() {
    try {
        const respuesta = await fetch('http://localhost:3000/api/platos');
        const platos = await respuesta.json();
        
        const selectDish = document.getElementById('selectDish');
        if (!selectDish) return;
        
        // Limpiar opciones previas (excepto la primera)
        while (selectDish.options.length > 1) {
            selectDish.remove(1);
        }
        
        // Agregar platos dinámicamente
        platos.forEach(plato => {
            const option = document.createElement('option');
            option.value = plato.nombre_es || plato.title_es;
            option.textContent = plato.nombre_es || plato.title_es;
            selectDish.appendChild(option);
        });
    } catch (error) {
        console.error('Error al cargar platos en dropdown:', error);
    }
}

// Guardar reseña cuando se envía el formulario
const formResena = document.getElementById("userReviewForm");
if (formResena) {
    formResena.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const plato = document.getElementById("selectDish").value;
        const rating = document.getElementById("selectRating").value;
        const nombre = document.getElementById("inputName").value;
        const comentario = document.getElementById("inputComment").value;
        
        try {
            const respuesta = await fetch('http://localhost:3000/api/opiniones', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    dish: plato,
                    rating: rating,
                    name: nombre,
                    comment: comentario
                })
            });
            
            if (respuesta.ok) {
                alert('¡Reseña enviada! Gracias por tu opinión 🙌');
                formResena.reset();
                cargarResenas(); // Recarga las reseñas
            }
        } catch (error) {
            console.error('Error al enviar reseña:', error);
        }
    });
}