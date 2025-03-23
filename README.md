# DirectCodes - Interfaz de Registro

Este proyecto implementa una interfaz de registro con modo oscuro/claro, notificaciones toast, selección de idioma y menús desplegables, siguiendo fielmente un diseño de referencia.

## Características

- **Layout exacto al diseño de referencia**
- **Modo Oscuro/Claro** con toggle personalizado
- **Notificaciones Toast** que aparecen en la esquina superior izquierda
- **Selector de Idiomas** con banderas en formato circular
- **Menú desplegable** para "Product page"
- **Formulario de registro** completo con validación
- **Componentes reutilizables** de alta calidad
- **Diseño completamente responsive**

## Instalación

1. Clona este repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Para las banderas de los países, instala:

```bash
npm install react-country-flag
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

## Personalización

### Temas

El modo oscuro/claro está implementado usando Tailwind CSS. Puedes personalizar los colores editando el archivo `tailwind.config.js`.

### Notificaciones

Las notificaciones toast están implementadas a través del `useToastStore`. Puedes mostrar una notificación desde cualquier componente :

```jsx
import useToastStore from '../store/toastStore';

const MyComponent = () => {
  const { showToast } = useToastStore();

  const handleAction = () => {
    showToast('success', 'Acción completada exitosamente', 'Éxito');
  };

  return (
    <div>
      <button onClick={handleAction}>Mostrar Notificación</button>
    </div>
  );
};

export default MyComponent
```

## Licencia

MIT
