# 🧠 Formulario Inteligente con IA y Automatización (React + n8n)

Un proyecto fullstack moderno que automatiza completamente la recepción, análisis y gestión de leads a través de un formulario inteligente integrado con inteligencia artificial (OpenAI) y automatización sin código (n8n).

---

## 🚀 Descripción

Este formulario web reacciona dinámicamente según el tipo de usuario (cliente, proveedor o colaborador), valida los datos en tiempo real y los envía a un flujo automatizado en n8n. Una vez recibido:

1. Se analiza el mensaje con IA (OpenAI GPT-3.5) para detectar interés, urgencia, categoría, palabras clave y generar una respuesta automática.
2. Se guarda toda la información en Google Sheets.
3. Se envía un email personalizado al usuario con la respuesta generada.
4. Se genera un PDF con todos los datos y análisis IA.
5. (Opcional) Se sube automáticamente a Google Drive.

---

## 🛠️ Tecnologías utilizadas

### Frontend

* React + Vite
* TailwindCSS + Framer Motion (UI y animaciones)
* React Hook Form + Zod (validación de formularios)
* Axios (peticiones HTTP)

### Backend / Automatización

* n8n (orquestador de flujos)
* OpenAI API (GPT-3.5)
* Google Sheets (base de datos tipo CRM)
* Email (SMTP / Gmail)
* HTML → PDF Generator
* (Opcional) Google Drive API

---

## 💡 Funcionalidades destacadas

* Formulario 100% dinámico y responsive
* Clasificación automatizada con IA (inteligencia real de negocio)
* Emails generados con HTML profesional
* Archivos PDF con formato de informe
* Persistencia completa de cada interacción
* Sin necesidad de backend propio

---

## 📂 Estructura del flujo en n8n

1. **Webhook** (POST): recibe datos del formulario
2. **OpenAI** (chat completion): analiza mensaje del usuario
3. **Function**: parsea JSON IA y junta datos del lead
4. **Email**: envía respuesta automática al cliente
5. **HTML → PDF**: genera informe PDF
6. **Google Sheets**: guarda todo
7. **(Opcional)**: Google Drive → sube PDF automáticamente

---

## 📸 Capturas recomendadas para el portfolio

* Pantalla del formulario React según tipo de usuario
* Ejemplo de respuesta IA en email recibido
* Hoja de cálculo con registros organizados
* PDF generado con análisis IA incluido

---

## 📚 Qué demuestra este proyecto

* Integración real entre frontend moderno y automatización sin servidor
* Uso productivo y razonado de IA con buenos prompts
* Automatización completa sin código repetitivo
* Capacidad de construir herramientas profesionales end-to-end

---

## 🧪 Próximos pasos (bonus)

* Añadir seguimiento automatizado a leads de alto interés
* Añadir clasificación por sentimiento o intención
* Generar gráficos desde Google Sheets
* Dashboard visual de resultados

---

## 📎 Repositorio y demo

> Este proyecto está disponible como parte de mi portfolio profesional. Puedes ver más proyectos como este en [mi página personal](https://...)

---

¿Te interesa colaborar en automatizaciones similares? ¡Contáctame!
