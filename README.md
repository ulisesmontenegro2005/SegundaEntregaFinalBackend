# SegundaEntregaFinalBackend

METODOS DE PRODUCTOS

    -	Obtener todos los productos (Método GET): /api/productos

    -	Añadir productos, se puede hacer de dos maneras:
        1-	/api/productos/post (Método GET) completar formulario y enviar.
        2-	/api/productos/post (Método POST) enviar mediante el cuerpo los campos requeridos del producto.

    -	Modificar productos (Método PUT): /api/productos/put, enviar mediante el cuerpo el producto ya modificado con la propiedad código correspondiente al producto que se solicita modificar.

    -	Eliminar productos (Método DELETE): /api/productos/delete/:código, enviar mediante el parámetro el código del producto que se solicita eliminar.

METODOS DE CARRITOS

    -	Obtener todos los carritos (Método GET): /api/carritos

    -	Crear un carrito (Método POST): /api/carritos/post/:user, enviar mediante el user el nombre con el cual se identificará su carrito.

    -	Eliminar un carrito (Método DELETE): /api/carritos/delete/:user, enviar mediante el user el nombre con el cual se identificará su carrito para eliminarlo.

    -	Agregar producto a un carrito (Método POST): /api/carritos/post/:user/productos/:código, mediante user se debe enviar el parámetro con el cual se identificara el carrito y además mediante el segundo parámetro se enviara el código con el cual se identifica el producto que desea añadir al carrito.

    -	Eliminar producto de un carrito (Método DELETE): /api/carritos/delete/:user/productos/:código, mediante user se debe enviar el parámetro con el cual se identificara el carrito y además mediante el segundo parámetro se enviara el código con el cual se identifica el producto que desea eliminar del carrito.

