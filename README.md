# Examen Final

# Día 05/03/2020 Tiempo: 5 horas

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

- Dígale al profesor que ya ha terminado para que compruebe que todo es correcto y desconecte la red.

## EXAMEN

#### 1.- Crear un slider de `Featured Rooms`.

![Enunciado](./enunciado/slider.gif)

#### 1.1.- (1 punto diseño) Modifique el componente `FeaturedRooms` para que las habitaciones se muestren como se ve en las imágenes.

Nota: Es decir, que el tamaño de las imágenes se adaptará a la pantalla.

![Image 1.1](./enunciado/image1.1.png)
![Image 1.1bis](./enunciado/image1.1bis.png)

#### 1.2.- (1 punto diseño) La imagen central ocupará el doble que las demás.

![Image 1.2](./enunciado/image1.2.png)

#### 1.3.- (1 punto diseño) Al situarse encima de una de las imágenes, ésta se hará más grande y las demás empequeñecerán.

![Image 1.3](./enunciado/image1.3.gif)

#### 1.4.- (1 punto diseño) La transición de tamaños será animada.

![Image 1.4](./enunciado/image1.4.gif)

#### 1.5.- (1 punto diseño) Todo lo anterior seguirá funcionando incluso si hay más habitaciones destacadas.

![Image 1.5](./enunciado/image1.5.png)

#### 1.6.- (3 puntos desarrollo) La transición de imágenes se hará automáticamente.

Nota: Se comprobará que se no se producen `memory leaks` y que se manejan los estados correctamente.

![Image 1.6](./enunciado/image1.6.gif)

#### 1.7.- (1 punto desarrollo) Cuando llegue a la última imagen volverá a empezar desde la primera imagen o mejor (1 punto adicional desarrollo) Cuando llegue a la última imagen volverá hacia atrás.

![Image 1.7](./enunciado/image1.7.gif)

#### 1.8.- (2 puntos desarrollo) Cuando se sitúe encima de una imagen, la transición automática se parará y esa imagen se hará más grande. Si no está encima de ninguna imagen volverá a comenzar la transición automática.

Nota: Puede que para que esto funcione tenga que hacer con JavaScript lo que seguramente hizo con CSS en el apartado 1.3

Nota2: Si puntúa en desarrollo con este apartado, no lo hará en diseño en el apartado 1.3. Por ello en el examen de diseño hay once puntos y no diez.

Nota2: Los eventos de React para detectar que está encima de un componente o que dejar de estarlo son respectivamente `OnMouseOver` y `OnMouseOut`.

![Image 1.8](./enunciado/image1.8.gif)

2 .- Mejora de los estilos de `Admin`

#### 2.1.- (1 punto diseño) El alto del `grid` se adaptará al tamaño de pantalla.

![Image 2.1](./enunciado/image2.1.gif)

#### 2.2.- (2 puntos diseño) Cuando las imágenes sean demasiado pequeñas, cambiará la forma de mostrarlas.

![Image 2.2](./enunciado/image2.2.gif)

#### 2.3.- (1 punto diseño) Organice mejor cómo se distribuye el espacio y el tamaño de las imágenes. Es decir, evite que queden espacios libres y cuide la separación entre imágenes.

![Image 2.3](./enunciado/image2.3.png)

#### 2.4.- (1 punto diseño) La última imagen ocupara todo el espacio sobrante.

![Image 2.4](./enunciado/image2.4.png)

3 .- Se podrá marcar una imagen cómo destacada

#### 3.1.- (1 punto diseño) En `Admin` coloque una estrella en cada imagen.

Nota: Las imágenes están en el directorio `src/images` y los ficheros se llaman `star.png` y `star_blank.png`.

![Image 3.1](./enunciado/image3.1.png)

#### 3.2.- (1 punto desarrollo) La estrella mostrada será distinta en función de si es `featured` o no.

![Image 3.2](./enunciado/image3.2.png)

#### 3.3.- (1 punto desarrollo) Al pulsar sobre una estrella, cambiará su estado.

#### 3.4.- (1 punto desarrollo) Los cambios se mantendrán al navegar.

![Image 3.4](./enunciado/image3.4.gif)

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

- Conecte la red y ejecute el siguiente comando:

```bash
    git push origin <nombre-de-la-rama>
```

- Abandone el aula en silencio.
