# Examen Evaluación Extraordinaria

# Día 15/06/2020 Tiempo: 3 horas

- Nota: Cada pregunta se valorará como bien o como mal (valoraciones intermedias serán excepcionales).
- Nota2: En cada pregunta se especifica si se valora en el examen de diseño o en el de desarrollo o en ambos.
- Nota3: Para aprobar cada examen hay que obtener una puntuación mínima de 5 puntos en ese examen.
- Nota4: Organice su tiempo. Si no consigue resolver un apartado pase al siguiente. El examen consta de apartados de diseño y de desarrollo que por lo general se pueden resolver por separado. Si un apartado depende de otro que no sabe resolver, siempre puede dar una solución que aunque no sea correcta, le permita seguir avanzando.
- Nota5: Para que una solución sea correcta, no sólo hay que conseguir que haga lo que se pide, sino que además todo lo que funcionaba lo tiene que seguir haciendo.
- Nota6: Lea completamente el examen antes de empezar y comience por lo que le parezca más fácil.

Pasos previos antes de empezar

- Clone el repositorio del enunciado

```bash
git clone https://github.com/surtich/enunciado-examen.git
```

- Vaya al directorio del proyecto

```bash
cd enunciado-examen
```

- Configure su usuario de git:

```bash
git config user.name "Sustituya por su nombre y apellidos"
git config user.email "Sustituya por su correo electrónico"
```

- Cree un _branch_ con su nombre y apellidos separados con guiones (no incluya mayúsculas, acentos o caracteres no alfabéticos, excepción hecha de los guiones). Ejemplo:

```bash
    git checkout -b <fulanito-perez-gomez>
```

- Compruebe que está en la rama correcta:

```bash
    git status
```

- Suba la rama al repositorio remoto:

```bash
    git push origin <nombre-de-la-rama-dado-anteriormente>
```

- Instale las dependencias y arranque la aplicación:

```bash
    yarn install
    yarn start
```

Navegue a [http://localhost:3000](http://localhost:3000)

- Dígale al profesor que ya ha terminado para que compruebe que todo es correcto.

## EXAMEN

El único ejercicio consiste en diseñar una página que permita editar los datos de una habitación.

#### 1.- Botón de edición

#### 1.1.- (1 punto desarrollo) En la página de Admin, al pulsar sobre una habitación se mostrará un botón que permitirá editar la habitación.

#### 1.2.- (2 puntos desarrollo) Al pulsar sobre otra habitación el botón de la anterior se ocultará y se mostrará el botón de edición de la pulsada.

#### 1.3.- (2 puntos diseño) El botón se mostrará centrado con respecto a la imagen de la habitación y contendrá la imagen guardada en `src/images/edit.png`.

#### 2.- Navegación

#### 2.1.- (1 punto desarrollo) Al pulsar sobre editar en una habitación concreta se navegará a una nueva página que tendrá esta URL `http://localhost:3000/rooms/id-habitacion-pulsada`.

#### 3.- Edición

#### 3.1.- (1 punto desarrollo) Se cargarán los datos de la habitación pulsada.

#### 3.2.- (5 puntos diseño) El estilo será similar al mostrado en rooms (`http://localhost:3000/rooms/single-standard`) pero con algunas diferencias:

* El nombre de la habitación será una caja de texto editable
* Details será un textarea.
* Price será una caja numérica.
* Size será una caja numérica.
* Max capacity: será un desplegable entre varias opciones.
* Pets allowed será un checkbox.
* Breakfast será un checkbox.
* Featured será un checkbox.
* Los extras se mostrarán en una lista pero no serán editables.

Los componentes tendrán seleccionados los valores de la habitación en edición y estarán uniformemente distribuidos.

#### 3.3.- (2 puntos desarrollo) Los cambios realizados en una habitación no se almacenarán directamente sino que, cuando haya un cambio, se mostrará un botón que permitirá guardar los cambios. Al aceptar los cambios, se usarán esos nuevos datos en el resto de la aplicación.

#### 3.4.- (2 puntos desarrollo) Habrá un botón que permitirá cancelar los cambios. En ese caso se volverán a mostrar los valores anteriores.

#### 3.5.- (1 punto desarrollo) Los botones aceptar y cancelar se mostrarán cuando haya cambios y se ocultarán cuando se pulse sobre uno de ellos.

#### 3.6.- (3 puntos diseño) Los botones aceptar y cancelar estarán adecuadamente colocados y usarán las imágenes `src/images/ok.png` y `src/images/ko.png`.

## Para entregar

- Ejecute el siguiente comando para comprobar que está en la rama correcta y ver los ficheros que ha cambiado:

```bash
    git status
```

- Prepare los cambios para que se añadan al repositorio local:

```bash
    git add .
    git commit -m "completed exam"
```

- Compruebe que no tiene más cambios que incluir:

```bash
    git status
```

- Dígale al profesor que va a entregar el examen.

- Ejecute el siguiente comando:

```bash
    git push origin <nombre-de-la-rama>
```

- Abandone el aula en silencio.
