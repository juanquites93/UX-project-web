# Alarma Sensorial - Maquetacion UX

Prototipo de interfaz web para la aplicacion **Alarma Sensorial**, desarrollado con Angular 19 y Tailwind CSS como proyecto de la materia de UX.

## Requisitos previos

- **Node.js** v18 o superior ([descargar](https://nodejs.org/))
- **npm** (viene incluido con Node.js)
- **Angular CLI** (se instala automaticamente con las dependencias)

## Como correr el proyecto

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd UX-project-web
```

2. Instalar las dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
ng serve -o
```

Esto abrira automaticamente el navegador en `http://localhost:4200`.

## Flujo de navegacion

La aplicacion cuenta con un **sidebar lateral** con 5 secciones:

1. **Principal** - Pantalla de inicio con la lista de alarmas, toggles para activar/desactivar cada alarma, y una seccion lateral de mensajes motivacionales. Incluye botones de "Crear" y "Agregar".

2. **Configuracion retos** - Primero se muestra una pantalla intermedia para seleccionar una alarma de la lista. Al seleccionar una, se accede a la configuracion de retos con 3 opciones:
   - **Problemas matematicos** - Configuracion de nivel de dificultad, cantidad de problemas y complejidad.
   - **Escaner codigo QR** - Registro y gestion de objetos a escanear con la camara.
   - **Caminar pasos** - Configuracion de cantidad de pasos y tiempo limite con un slider.

3. **Alarmas de respaldo** - Seccion de alarmas secundarias.

4. **Configuracion Sensorial** - Ajustes sensoriales de la alarma.

5. **Configuracion de perfiles** - Gestion de perfiles de usuario.

## Nota sobre el sistema de diseño

El diseno de la interfaz fue creado en Figma utilizando el sistema de diseño **shadcn/ui**, el cual esta basado en **Radix UI** y esta pensado originalmente para **React**. Dado que este proyecto esta desarrollado en **Angular**, se utilizo **Spartan NG**, una libreria que adapta los componentes de shadcn/ui al ecosistema de Angular, permitiendo mantener la fidelidad visual del diseno original.

## Tecnologias utilizadas

- Angular 19 (standalone components, signals)
- Tailwind CSS v3
- Spartan NG (adaptacion de shadcn/ui para Angular)
- TypeScript
- ng-icons (iconos Lucide)
