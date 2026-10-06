const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joel2008.',
    database: 'alfogolar_db'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Error al conectar a la base de datos:', err);
        return;
    }
    console.log('✅ ¡Conectado exitosamente a la base de datos MySQL!');
});

// 🏠 RUTA INICIAL
app.get('/', (req, res) => {
    res.json({ Mensaje: 'Bienvenido a la API del restaurante Al Fogolar' });
});

// ==========================================
// RUTAS DE PLATOS (MENÚ) CON MYSQL
// ==========================================

// GET - OBTENER TODOS LOS PLATOS (Cambiamos los nombres con AS para que la web los lea de una vez)
app.get('/api/platos', (req, res) => {
    const query = `
        SELECT 
            id, 
            title_es AS nombre_es, 
            title_en AS nombre_en, 
            description_es AS descripcion_es, 
            description_en AS descripcion_en, 
            price_cop AS precio_cop, 
            price_usd AS precio_usd, 
            image_url AS imagen_url 
        FROM platos
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        res.json(results);
    });
});

// POST - CREAR NUEVO PLATO
app.post('/api/platos', (req, res) => {
    const { nombre_es, nombre_en, descripcion_es, descripcion_en, precio_cop, precio_usd, imagen_url } = req.body;

    if (!nombre_es || !precio_cop) {
        return res.status(400).json({
            success: false,
            mensaje: 'El nombre en español y el precio en COP son requeridos'
        });
    }

    const query = 'INSERT INTO platos (title_es, title_en, description_es, description_en, price_cop, price_usd, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [nombre_es, nombre_en || '', descripcion_es || '', descripcion_en || '', precio_cop, precio_usd || 0, imagen_url || ''], (err, result) => {
        if (err) return res.status(500).json({ success: false, error: err.message });

        res.status(201).json({
            success: true,
            mensaje: 'Plato creado exitosamente',
            id: result.insertId
        });
    });
});

// ==========================================
// RUTAS DE OPINIONES CON MYSQL
// ==========================================

// GET - OBTENER TODAS LAS OPINIONES
app.get('/api/opiniones', (req, res) => {
    db.query('SELECT * FROM opciones ORDER BY id DESC', (err, results) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        res.json(results);
    });
});

// POST - CREAR NUEVA OPINIÓN
app.post('/api/opiniones', (req, res) => {
    const { dish, rating, name, comment } = req.body;
    const query = 'INSERT INTO opciones (dish, rating, name, comment) VALUES (?, ?, ?, ?)';

    if (!name || !comment || !rating) {
        return res.status(400).json({
            success: false,
            mensaje: 'Nombre, calificación y comentario son requeridos'
        });
    }
    
    db.query(query, [dish || 'General', rating, name, comment], (err, result) => {
        if (err) return res.status(500).json({ success: false, error: err.message });

        res.status(201).json({
            success: true,
            mensaje: 'Opinión guardada exitosamente',
            id: result.insertId
        });
    });
});

// SERVIDOR 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta para eliminar un plato por su ID
app.delete('/api/platos/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM platos WHERE id = ?'; // (Asegúrese que su tabla se llame 'platos' en MySQL)

    db.query(query, [id], (err, resultado) => {
        if (err) {
            console.error("Error al eliminar en MySQL:", err);
            return res.status(500).json({ error: "Error al eliminar el plato" });
        }
        
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: "Plato no encontrado" });
        }

        res.json({ mensaje: "¡Plato eliminado exitosamente!" });
    });
});

// Eliminar opinión
app.delete('/api/opiniones/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM opciones WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar opinión:', err);
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Opinión eliminada', results });
        }
    });
});