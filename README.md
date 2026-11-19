# A&P Infraestructuras

Sitio estático en HTML, CSS y JavaScript vanilla. El portfolio contiene escenarios demostrativos y propuestas conceptuales; SOLANA Maipú es un proyecto académico en desarrollo.

## Abrir localmente

Abrí `index.html` en Chrome. No requiere instalación, dependencias ni servidor. También se puede servir como sitio estático desde GitHub Pages.

## Secciones

- Sitio corporativo: `index.html` y páginas raíz.
- Portfolio y fichas: `proyectos.html` y `proyecto.html?slug=...`.
- Centro de documentación preservado: `proyectos/index.html`.
- Presentación y biblioteca SOLANA preservadas: `proyectos/solana/index.html`.

Los formularios son demostrativos y no transmiten ni almacenan datos. Los documentos y galerías aún no entregados se indican como pendientes.

## Publicación

Estos cambios son locales. Codex no publicó el sitio ni lo subió a GitHub Pages.


## Configurador y estimación preliminar

`presupuesto.html` presenta cuatro pasos para describir una casa unifamiliar, dúplex, complejo multifamiliar o ampliación. Solo se calcula la superficie cubierta × referencia global cuando la tipología, localidad y terminación son compatibles. No hay adicionales manuales, multiplicadores ni margen arbitrario. Las características constructivas, otras superficies y exteriores quedan como partidas pendientes y no se suman.

Referencias de Mendoza para noviembre de 2026, almacenadas en `PRICE_REFERENCES` de `site.js`: económica, ARS 1.631.281/m²; calidad media, ARS 2.111.994/m². Fuentes: [Centro de Ingenieros de Mendoza](https://centrodeingenierosdemendoza.com.ar/) y [relevamiento de materiales de Sitio Andino](https://www.sitioandino.com.ar/economia/construir-una-casa-supera-los-16-millones-metro-cuadrado-cuanto-cuestan-los-materiales-mendoza-n5733753). Los precios de materiales no se tratan como precios de trabajos terminados. “Superior / personalizada” no genera cálculo sin una referencia global compatible.

Para act&#250;alizar, verificar una publicación institucional nueva y luego editar valor, unidad, período, procedencia y alcance en `PRICE_REFERENCES`, además de act&#250;alizar esta documentación. No hay act&#250;alización automática. El configurador no pide datos personales, no los transmite ni los almacena. El resultado es una estimación preliminar de superficie cubierta, no un presupuesto total ni una cotización contract&#250;al.

## SOLANA

SOLANA es un proyecto acad&#233;mico de arquitectura y construcciones desarrollado en Maip&#250;, Mendoza. Propone un complejo habitacional multifamiliar cuyo dise&#241;o se encuentra en desarrollo. La implantaci&#243;n, organizaci&#243;n espacial, relaciones funcionales y soluciones constructivas se documentar&#225;n a partir de los planos y modelos actualizados del proyecto. V1: d&#250;plex, 94,32 m&#178;; V2: departamentos, 113,59 m&#178;; V3: garajes, 123,69 m&#178;; suma declarada: 331,60 m&#178;. Los 484 m&#178; son &#225;rea de trabajo provisoria; superficie contract&#250;al, p&#233;rgolas y semicubiertos pendientes. ARS 372.680.000 corresponde solo a una simulaci&#243;n acad&#233;mica, no a precio de mercado ni tarifa A&amp;P.

UMBRAL 85 es otro proyecto: prototipo conceptual de vivienda bioclim&#225;tica unifamiliar de 85 m&#178;, en desarrollo. No se combinan sus planos, superficies ni documentaci&#243;n con SOLANA.

## Portfolio e imágenes

Las nueve imágenes ilustrativas de escenarios demostrativos están en `assets/img/projects/`. SOLANA usa `assets/img/solana/solana-fachada.webp` como visualización principal; UMBRAL 85 conserva `assets/img/projects/solana-terral-85.jpg`. Ninguna imagen acredita una obra ejecutada. El slug interno `solana-prototipo-85` se conserva para mantener enlaces existentes; su nombre visible es UMBRAL 85, “Vivienda bioclimática unifamiliar”, un prototipo conceptual en desarrollo de 85 m², distinto del complejo académico SOLANA Maipú.

## Identidad institucional y color

A&amp;P es una propuesta acad&#233;mica ficticia, sin obras ejecutadas ni resultados atribuidos. La historia de marca vincula Antares y Pollux como una an&#233;cdota breve, sin fecha de fundaci&#243;n ni origen geogr&#225;fico atribuido. SOLANA es el complejo habitacional multifamiliar acad&#233;mico en desarrollo de Maip&#250;, Mendoza. UMBRAL 85 es el prototipo conceptual independiente de vivienda bioclim&#225;tica unifamiliar de 85 m&#178;.

La paleta del proyecto utiliza `#1B2A4A`, `#E89E3B`, `#F4E7CE`, `#4A6B69`, `#22252A`, `#FAF8F3`, `#FFFFFF` y `#DDD8CE`.

## Parallax de portada

La portada de Inicio utiliza las cuatro capas definitivas de `assets/img/parallax/`, en orden de cielo, monta&#241;as, arquitectura y primer plano. Son PNG RGBA de 1920 x 1080; la primera capa es opaca y las otras tres tienen transparencia alfa real. El movimiento act&#250;a mientras el hero est&#225; visible en escritorio, tablet y m&#243;vil, con desplazamiento normalizado de 0 a 1. Los topes son 8 px para cielo, 32 px para monta&#241;as, 64 px para arquitectura y 96 px para primer plano. `prefers-reduced-motion` deja la composici&#243;n est&#225;tica. CSS conserva la escena est&#225;tica como alternativa si JavaScript no ejecuta el efecto. No utilizar los recursos defectuosos de `_images_extract/parallax/` ni modificar la geometr&#237;a o los lienzos definitivos.

## Recursos SOLANA

El Centro de Proyectos incluye la presentaci&#243;n, galer&#237;a de renders, recorrido audiovisual y biblioteca t&#233;cnica de SOLANA. Los cinco planos PDF A3 se muestran en el visor nativo integrado y tambi&#233;n se pueden abrir o descargar. SOLANA utiliza renders propios en assets/img/solana/; assets/img/projects/solana-terral-85.jpg contin&#250;a asignada exclusivamente a UMBRAL 85.


## Biblioteca y recursos SOLANA

Los planos acad&#233;micos est&#225;n en proyectos/solana/documentos/: Arquitectura (arquitectura/arquitectura.pdf), Estructuras (estructuras/estructura.pdf) e Instalaciones (instalaciones/electricidad.pdf, instalaciones/gas.pdf, instalaciones/sanitario.pdf). El cat&#225;logo se administra en proyectos/solana/documentos.js, organizado por disciplina. Para agregar un plano futuro, guardar el PDF real bajo la carpeta de disciplina y a&#241;adir t&#237;tulo, nombre de archivo y ruta relativa en el cat&#225;logo. No inventar escalas, fechas ni aprobaciones. El visor carga un PDF a la vez y ofrece pesta&#241;a nueva, descarga, pantalla completa cuando se permite y enlace alternativo.

La galer&#237;a usa assets/img/solana/solana-fachada.webp, solana-conjunto.webp, solana-lateral.webp y solana-terraza.webp. El video original es assets/video/solana/recorrido-solana.mp4; usa controles nativos y portada de la fachada, sin reproducci&#243;n autom&#225;tica. Son visualizaciones del proyecto acad&#233;mico, no evidencia de una obra construida. La documentaci&#243;n est&#225; en desarrollo y no es ejecutiva aprobada.

## Recorrido del configurador

presupuesto.html organiza la orientaci&#243;n preliminar en cuatro pasos: tipo/localidad, superficie cubierta, caracter&#237;sticas opcionales y resultado imprimible. Solo calcula superficie cubierta &#215; referencia global si se selecciona casa unifamiliar, Mendoza y terminaci&#243;n econ&#243;mica o calidad media. No calcula autom&#225;ticamente d&#250;plex, complejos multifamiliares, ampliaciones, otras localidades ni terminaci&#243;n superior/personalizada por falta de referencia compatible. La cochera no suma superficie ni importe; se registra cantidad y tipo y, si es cubierta, si ya est&#225; incluida en los m&#178; informados para evitar doble c&#243;mputo. Superficies complementarias, exteriores, instalaciones y opciones t&#233;cnicas quedan pendientes, sin coeficientes ni precios supuestos.

Las referencias vigentes de noviembre de 2026 son ARS 1.631.281/m&#178; (econ&#243;mica) y ARS 2.111.994/m&#178; (calidad media), almacenadas en PRICE_REFERENCES dentro de site.js. Corresponden a viviendas tradicionales de Mendoza y no equivalen a presupuesto contractual ni tarifa A&P. No se mezclan con la simulaci&#243;n acad&#233;mica SOLANA. El configurador no pide datos personales, no transmite ni almacena respuestas.


## Estudio académico de asoleamiento SOLANA

La presentación de `proyectos/solana/index.html` incluye dos videos comparativos en `assets/video/solana/asoleamiento/`, con portadas en `assets/img/solana/asoleamiento/`. La sección resume el patrón general de verano e invierno en Mendoza y distingue esa explicación de la información observada en pantalla. Los videos no se reproducen automáticamente. La duración de día visible, cercana a 14 horas tanto para la fecha aproximada de junio como para diciembre, queda indicada como dato pendiente de validación. Revisar ubicación geográfica, fecha, zona horaria y parámetros solares del programa utilizado antes de tomar esas simulaciones como referencia.

## Categoría Premium del configurador

El configurador presenta "Premium — Alta gama" como "Estimación personalizada", sin total automático. La publicación de 617 News consultada en noviembre de 2026 menciona un rango aproximado, pero no permite verificar alcance comparable, tipología, superficie modelo, rubros incluidos, impuestos ni gastos. Por eso no se incorporan esas cifras a `PRICE_REFERENCES`. Las categorías económica y calidad media permanecen en ARS 1.631.281/m² y ARS 2.111.994/m² para noviembre de 2026, con enlaces institucional y periodístico verificados.

## Revisión local y publicación

`.gitignore` excluye capturas de revisión y `.chrome-check/`, que no son recursos del sitio. Git no estaba instalado ni se encontró un directorio `.git` en el entorno revisado; no se determinó remoto, rama o configuración de GitHub Pages. No se hizo commit, push ni publicación. Antes de reemplazar un sitio existente, confirmar el repositorio, la rama y la carpeta de publicación desde GitHub Desktop o una instalación de Git configurada.
