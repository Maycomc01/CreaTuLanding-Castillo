# CreaTuLanding1+Castillo

Este proyecto es la primera entrega del e-commerce desarrollado con React. La consigna consistía en crear una landing page con los componentes base que estructurarán la tienda online.
Este proyecto fue mutano con las entregas hasta el punto final que es esta version de una app completa y funcional de un tienda en linea.

## Requisitos

- NodeJS v22.14.0

## Estructura del proyecto 📂

Una estructura modula permite organizar el código de manera clara y escalable. Cada módulo encapsula funcionalidades específicas, combinando componentes, estilos, pruebas y lógica relacionada, lo que facilita el mantenimiento y la colaboración en equipo.

src/
├── App.jsx
├── main.jsx
│
├── components/
│ ├── FetchProduct.jsx
│ ├── FetchProduct.module.css
│ │
│ ├── banners/
│ │ ├── Banner1.jsx
│ │ ├── Banner2.jsx
│ │ └── ...otros archivos
│ │
│ ├── cartWidget/
│ │ ├── CartWidget.jsx
│ │ ├── CartWidget.module.css
│ │ └── ...otros archivos
│ │
│ ├── NavBar/
│ │ ├── NavBar.jsx
│ │ ├── NavBar.module.css
│ │ └── ...otros archivos
│ │
│ └── pages/
│ ├── Home.jsx
│ ├── Productos.jsx
│ ├── DetalleProducto.jsx
│ └── ...otras páginas
│
├── context/
│ ├── CartContext.jsx
│ └── ...otros contextos
│
├── firebase/
│ ├── config.js
│ └── ...otros archivos
│
└── img/
├── logo.png
├── banner01.jpg
└── ...otras imágenes

## Instalación 🛠️

1. Clona el repositorio:

```bash
git clone https://github.com/Maycomc01/CreaTuLanding-Castillo.git
```

2. Entrar al proyecto

```bash
cd CreaTuLanding-Castillo
```

3. Instalar Dependencias

```bash
npm install
```

4. Correr el proyecto

```bash
npm run dev
```
