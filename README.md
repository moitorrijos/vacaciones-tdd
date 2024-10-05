# Prueba de TDD

Para correr el proyecto clona este repo localmente y correo `npm install`.
Luego correo `npm run test` para iniciar las pruebas.
Puedes agregar las pruebas que quieras en `vacaciones.test.ts` y modificar el código de `vacaciones.ts` hasta que todas las pruebas pasen.
Por ejemplo podrías agregar una prueba como la siguiente:

```
expect(vacaciones(25, [10])).toEqual([-15])
```

Esta metodología se llama **"desarrollo basado en pruebas (TDD por sus siglas en inglés Test Driven Development)"**.
En este pequeño proyecto tenemos una función en el archivo `vacaciones.ts` que es constantemente puesta a prueba por _vitest_ al correr `npm run test`.
