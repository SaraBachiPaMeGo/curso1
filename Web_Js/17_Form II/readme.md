# La API de validación de restricciones #

(The constraint validation API)

Disponible en los elementos:

- HTMLButtonElement
- HTMLFieldSetElement
- HTMLInputElement
- HTMLOutputElement
- HTMLSelectElement
- HTMLTextAreaElement

Porpiedades

-validationMessage : Un mensaje en el idioma del navegador, que describe la restriccion que el control no satisface (si la hay), o el texto vacío si el control no es candidato a la restriccion de validación (willValidate es false) o el valor del elemento satisface las restricciones


-validity:	Un objeto ValidityState que describe el estado de validación del elemento.
-validity.customError:	Devuelve true si el elemento tiene un error personalizado; de lo contrario, devuelve false.
-validity.patternMismatch:	Devuelve true si el valor del elemento no cumple el patrón indicado; de lo contrario, devuelve false.

    Si devuelve true, el elemento coincide con la pseudo-clase de CSS :invalid.
-validity.rangeOverflow:	Devuelve true si el valor del elemento es mayor al máximo permitido; de lo contrario, devuelve false.

    Si devuelve true, el elemento coincide con las pseudo-clases de CSS :invalid y :out-of-range.
-validity.rangeUnderflow::Devuelve true si el valor del elemento ese menor al mínimo permitido; de lo contrario, devuelve false.

Si devuelve true, el elemento coincide con las pseudo-clases de CSS :invalid y :out-of-range.
validity.stepMismatch:Devuelve true si el valor del elemento no cumple las reglas indicadas por el atributo step; de lo contrario, devuelve false.

Si devuelve true, el elemento coincide con las pseudo-clases de CSS :invalid y :out-of-range.
-validity.tooLong:Devuelve true si el valor del elemento es mayor al indicado como longitud máxima; de lo contrario, devuelve false.

Si devuelve true, el elemento coincide con las pseudo-clases de CSS :invalid y :out-of-range.
-validity.typeMismatch:Devuelve true si el valor del elemento no tiene la sintaxis correcta; de lo contrario, devuelve false.

Si devuelve true, el elemento coincide con la pseudo-clase de CSS :invalid.
-validity.valid:Devuelve true si el valor del elemento no tiene problemas de validación; de lo contrario, devuelve false.

Si devuelve true, el elemento coincide con la pseudo-clase de CSS :valid; de lo contrario, coincide con la pseudo-clase :invalid.
-validity.valueMissing:Devuelve true si el elemento no tiene valor pero es un campo requerido; de lo contrario, devuelve false.

Si devuelve true, el elemento coincide con la pseudo-clase de CSS :invalid.
willValidate:Devuelve true si el elemento será validado cuando el formulario es enviado; de lo contrario, devuelve false.
Métodos de la API de validación de restricciones
Método Descripción
-checkValidity(): Devuelve true si el valor del elemento no tiene problemas de validación; de lo contrario, devuelve false. Si el elemento es inválido, este método invocará a un evento invalid en el elemento.
-setCustomValidity(message): Añade un mensaje de error personalizado al elemento; si estableces un mensaje de error personalizado, el elemento es considerado inválido, y se despliega el error especificado. Esto te permite usar código de JavaScript para establecer otras fallas de validación más allá de las ofrecidas por el estándar. El mensaje es mostrado al usuario cuando se reporta el problema.

Si el argumento es una cadena de texto vacía, el error personalizado se borra.

