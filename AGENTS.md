# A&P Infraestructuras — reglas del proyecto

## Identidad y veracidad
- A&P Infraestructuras es una empresa ficticia creada para una presentación escolar. No atribuirle actividad comercial, obras reales, clientes, personal contratado, contactos, certificaciones o resultados.
- Identidad de marca: Antares + Pollux como an&#233;cdota breve, sin fecha de fundaci&#243;n ni origen geogr&#225;fico atribuido. Posicionamiento: Construcciones de otro mundo, con los pies en la tierra..
- Usar la paleta #1B2A4A, #E89E3B, #F4E7CE, #4A6B69, #22252A, #FAF8F3, #FFFFFF y #DDD8CE. Mantener dise&#241;o sobrio, responsive, accesible y compatible con GitHub Pages.
- No inventar teléfonos, emails, domicilios exactos, redes, mapas, personas, imágenes de obras, nombres de clientes ni datos pendientes.

## SOLANA
- SOLANA es el nombre del proyecto final escolar: complejo habitacional multifamiliar en Maipu, Mendoza, Argentina; proyecto academico en desarrollo. No sustituir nombre ni ubicacion.
- SOLANA se muestra como SOLANA, subtitulo Complejo habitacional multifamiliar, ubicacion Maipu, Mendoza, Argentina y estado Proyecto academico en desarrollo. Separarlo de UMBRAL 85, el prototipo bioclimatico unifamiliar de 85 m2.
- Datos académicos SOLANA: V1 dúplex 94,32 m²; V2 departamentos 113,59 m²; V3 garajes 123,69 m²; suma declarada 331,60 m². Área de trabajo 484 m² provisoria; superficie contractual, pérgolas y semicubiertos pendientes. No presentar esas áreas como superficie contractual.
- Presupuesto académico de $372.680.000 = 484 × USD 700 × $1.100, solo simulación académica; nunca precio de mercado ni tarifa A&P. El cómputo tiene cantidades iniciales, pero faltan precios unitarios. Sus doce incidencias solo representan la distribución de la simulación SOLANA, no una regla universal.
- No prometer ahorros ni rendimiento. Las referencias IRAM/CIRSOC y demás normas son datos del documento base pendientes de verificación; no afirmar cumplimiento.

## Contenido técnico
- El portfolio contiene ocho escenarios ficticios, SOLANA academico y UMBRAL 85 conceptual. Etiquetar los casos como demostrativos. No crear ficha personal real.
- Mantener PPR, hormigón H-25, azotado de cemento con hidrófugo, aluminio línea A30 y sistemas constructivos descritos por separado tal como indica la fuente.
- No inventar montos ni calcular precios unitarios. La única operación permitida en el configurador es superficie cubierta × una de las dos referencias globales documentadas; no realizar cálculos técnicos.
- Mostrar “Imagen ilustrativa pendiente”/“Documentación pendiente” donde falten recursos; nunca simular fotos, renders, planos o PDFs.

## Arquitectura y funcionalidades
- Sitio estático con HTML, CSS y JavaScript vanilla, sin dependencias ni servicios; debe funcionar al abrir `index.html` localmente.
- Páginas raíz: inicio, nosotros, servicios, SOLANA, portfolio, ficha dinámica, novedades, contacto, empleo, FAQ, licitaciones, privacidad y términos. Portfolio en `proyectos.html`; conservar el Centro de Proyectos en `proyectos/` y la presentación/biblioteca SOLANA en `proyectos/solana/`.
- Navegación móvil accesible, filtros/búsqueda, fichas por slug, formularios sin transmisión ni almacenamiento, avisos académicos, foco visible y respeto por `prefers-reduced-motion`.
- No publicar ni subir cambios sin solicitud explícita. Los formularios deben declarar que no envían ni guardan información.


## Configurador residencial y referencias económicas
- La única página HTML del configurador es `presupuesto.html`; reutiliza `site.css` y `site.js`.
- Los valores iniciales son referencias de Mendoza para noviembre de 2026: economica ARS 1.631.281/m2 y calidad media ARS 2.111.994/m2. La fuente institucional es https://centrodeingenierosdemendoza.com.ar/ y la referencia periodistica del relevamiento es https://www.sitioandino.com.ar/economia/construir-una-casa-supera-los-16-millones-metro-cuadrado-cuanto-cuestan-los-materiales-mendoza-n5733753.
- Los valores, el periodo y las URL se mantienen en `PRICE_REFERENCES` dentro de `site.js`. Actualizar solo luego de verificar la nueva publicacion; editar tambien periodo y enlaces. No agregar actualizacion automatica ni nuevos rubros con precios supuestos.
- Procedimiento de actualización: consultar la publicación institucional, verificar período, valores y alcance; editar `PRICE_REFERENCES`, y actualizar este archivo y `README.md`. No publicar cambios sin solicitud explícita.
- Fórmula única: superficie cubierta × referencia global seleccionada. Económica y calidad media usan sus referencias respectivas. Terminación superior/personalizada no se calcula sin referencia compatible. No aplicar multiplicadores por tipología, plantas ni sistemas.
- Las superficies semicubiertas, cocheras, sistemas constructivos, terminaciones superiores, instalaciones y exteriores sin precio unitario documentado se muestran como pendientes; nunca se suman al importe.
- El configurador no solicita datos personales, no envía ni guarda información. El resultado es una estimación preliminar, no presupuesto total ni cotización contractual.

## Identidad de proyectos y portada
- SOLANA es el nombre del proyecto acad&#233;mico de arquitectura y construcciones desarrollado en Maip&#250;, Mendoza. Propone un complejo habitacional multifamiliar cuyo dise&#241;o se encuentra en desarrollo. La implantaci&#243;n, organizaci&#243;n espacial, relaciones funcionales y soluciones constructivas se documentar&#225;n a partir de los planos y modelos actualizados del proyecto. No sustituir nombre ni ubicaci?n.
- UMBRAL 85 es el prototipo conceptual independiente, unifamiliar, de 85 m2. Mostrar Prototipo de vivienda bioclimatica unifamiliar y Prototipo conceptual en desarrollo. Conservar el slug interno `solana-prototipo-85` por compatibilidad de enlaces.
- La historia institucional de A&P y la de SOLANA son relatos separados.
- La portada de Inicio usa cuatro capas Parallax en `assets/img/parallax/`: cielo, monta&#241;as, arquitectura y primer plano, en ese orden.
- Las cuatro capas conservan lienzos PNG RGBA de 1920 x 1080; la primera es opaca y las capas 2, 3 y 4 tienen transparencia alfa real.
- El movimiento se limita al hero visible, funciona en escritorio, tablet y m&#243;vil, y se desactiva con `prefers-reduced-motion`; CSS mantiene una composici&#243;n est&#225;tica si JavaScript no ejecuta el efecto.
- El progreso del hero normaliza el desplazamiento entre 0 y 1; los topes de traslaci&#243;n son 8 px para cielo, 32 px para monta&#241;as, 64 px para arquitectura y 96 px para primer plano.
- No usar recursos defectuosos de `_images_extract/parallax/` ni modificar la geometr&#237;a o los lienzos de las capas definitivas.
- SOLANA Maip&#250; utiliza `assets/img/solana/solana-fachada.webp` como visualización arquitectónica; no representa una obra construida y no sustituye la imagen de UMBRAL 85 (`assets/img/projects/solana-terral-85.jpg`).
- La biblioteca y el visor PDF A3 de SOLANA están en `proyectos/solana/index.html`; el catálogo se define en `proyectos/solana/documentos.js` y el visor en `proyectos/solana/solana.js`.

## Biblioteca técnica y medios SOLANA
- Los planos PDF disponibles están en `proyectos/solana/documentos/`: `arquitectura/arquitectura.pdf`, `estructuras/estructura.pdf`, `instalaciones/electricidad.pdf`, `instalaciones/gas.pdf` e `instalaciones/sanitario.pdf`.
- Cada archivo se registra en `documentos.js` con título y ruta relativa a `proyectos/solana/index.html`. Cargar solo documentos existentes; la categoría Planificación muestra “Documentación pendiente” hasta recibir archivos reales.
- El visor nativo incrustado carga un único PDF seleccionado. Mantener controles de abrir en pestaña, descargar, pantalla completa donde se admita y alternativa explícita para móviles o navegadores incompatibles. Los planos son material académico en desarrollo, no documentación ejecutiva aprobada.
- Los renders WebP propios de SOLANA se conservan en `assets/img/solana/`: fachada, conjunto, lateral y terraza. El video original está en `assets/video/solana/recorrido-solana.mp4`; no autoplay ni alterar el archivo.
- Mantener navegación por teclado, contador y progreso de la presentación SOLANA, galería ampliable accesible y diseño responsive. No deducir especificaciones arquitectónicas a partir de los renders.

## Referencias del configurador
- El recorrido de `presupuesto.html` tiene cuatro pasos: tipo y localidad, superficie cubierta, características opcionales y resultado.
- Solo calcular superficie cubierta × referencia global cuando el tipo sea casa unifamiliar, la localidad corresponda a Mendoza y la terminación sea económica o calidad media. Las referencias no se aplican automáticamente a dúplex, multifamiliares, ampliaciones, otras localidades ni calidad superior/personalizada.
- La cochera no suma superficie ni precio. Preguntar cantidad y tipo solo como información; si es cubierta, aclarar si ya está dentro de la superficie cubierta informada para evitar doble cómputo.
- Galería/pérgola, terraza, piscina, paisajismo, sistemas y exteriores quedan pendientes y nunca se valorizan sin precios unitarios documentados. La calculadora no recoge, transmite ni almacena datos personales.


## Estudio académico de asoleamiento SOLANA
- La sección de asoleamiento se mantiene en `proyectos/solana/index.html`, después de Visualización arquitectónica y antes de la biblioteca técnica. Usa los MP4 de `assets/video/solana/asoleamiento/` y sus portadas JPEG en `assets/img/solana/asoleamiento/`.
- Los archivos son simulaciones académicas sobre el modelo SOLANA. No regenerar ni modificar el contenido arquitectónico de las grabaciones; no reproducir automáticamente los videos.
- Explicar por separado el patrón solar general del hemisferio sur y lo que se observa en cada simulación. Mantener visible que ubicación, fecha, zona horaria y parámetros del programa están pendientes de validación. No afirmar confort térmico ni cumplimiento energético.

## Categoría Premium del configurador
- Premium se presenta como "Premium — Alta gama / Estimación personalizada". El rango publicado por 617 News no tiene alcance, tipología, superficie modelo, rubros ni tratamiento de impuestos y gastos comparables; no usarlo para generar un total.
