En algunas ocasiones nuestros usuarios pueden tener mala conexión a internet y puede que necesite de tu ayuda para reintentar varias veces una petición, tu reto es crear una función que haga petición tipo GET a una API usando `fetch`, pero con un número de intentos, es decir si le envías 3 intentos la petición debe volverse a enviar el número de intentos que hayas especificado.

Si la petición es exitosa en cualquiera de los intentos, debe retornar la información en formato JSON, Pero si en todos los intentos fallos debe retornar un error con el siguiente mensaje "Invalid request with x retries"

La solución debería tener un input y output como los siguientes:

Input

```js
fetchRetry('https://domain-a.com/api-1', 5);
```

Output

```sh
Invalid request with 5 retries
```
