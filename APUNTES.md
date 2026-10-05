# ORM 

* Un ORM (siglas de Object-Relational Mapping, o Mapeo Objeto-Relacional) es una herramienta de software que actúa como puente entre el código de tu aplicación y tu base de datos relacional *

* Su función principal es permitirte interactuar con los datos (crear, leer, actualizar y borrar registros) utilizando el lenguaje de programación que ya conoces (como Python, JavaScript o C#) y el paradigma de la Programación Orientada a Objetos (POO), en lugar de tener que escribir consultas en SQL puro. *

## prisma



`npm install @prisma/adapter-pg@7 --save-dev`

- Este comando sirve para conectar el ORM Prisma con una base de datos PostgreSQL utilizando el controlador nativo de Node.js (pg), optimizando el rendimiento en entornos como funciones Serverless (como Vercel o AWS Lambda).

🔍 ¿Qué hace cada parte del comando?
• @prisma/adapter-pg: Es el adaptador oficial de Prisma que le permite comunicarse con la base de datos a través del paquete pg (Node-Postgres), en lugar de usar el motor binario estándar de Prisma.
• @7: Instala específicamente la versión 7 de este adaptador (útil para mantener compatibilidad con versiones específicas de tu proyecto).
• --save-dev: Guarda el paquete como una dependencia de desarrollo, lo que significa que solo se utilizará mientras programas y construyes la aplicación, pero no se incluirá en el código final de producción si no es necesario.

`npm install prisma@7 tsx --save-dev`

- 📦 ¿Qué estás instalando con este comando?
• prisma@7: Instala la versión 7 de la Herramientas de Interfaz de Línea de Comandos (CLI) de Prisma. Te servirá para gestionar tus modelos de datos, crear migraciones y generar el cliente de Prisma para interactuar con tu base de datos.
• tsx: Es una herramienta excelente para desarrollo. Te permite ejecutar archivos de TypeScript (.ts) directamente en Node.js en tiempo real, sin necesidad de compilarlos manualmente a JavaScript (.js) cada vez que haces un cambio. Actúa como un reemplazo moderno y mucho más rápido de ts-node.
• --save-dev: Al igual que antes, los guarda en tu package.json como dependencias de desarrollo, ya que solo los necesitas mientras estás programando.