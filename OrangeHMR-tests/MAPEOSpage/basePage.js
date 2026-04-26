//Se estable el "mapeo" de los comandos basicos a utilizar en la pagina para
//poder ser reutilizados en los casos de prueba



class BasePage { //creo una clase llamada BasePage
  constructor(page) {  //recibe al navegador 
        //CONSTRUCTOR:Es un método especial de una clase que se ejecuta automáticamente 
        // cuando creás una instancia.
     this.page = page; // esto guarda el page que le pasan dentro de la clase
        // usar this.page o base.page es lo mismo. 
        //EJEMPLO MENTAL: BasePage es una persona, page un control remoto, entonces ->
        //this.page = page; "dame el control remoto y lo guardo en mi mano"
    
  }

  async open(path) { //creo una funcion llamada open que recibe una ruta (path)
    await this.page.goto(path); //le digo a la pagina que vaya a esa ruta, que abra la pag
  }

  async click(locator) { //creo una funcion llamada click que recibe un localizador (locator)
    await locator.click(); // "dame el localizador y haz click en el elemento que encontraste"
  }

  async fill(locator, value) { //creo una funcion llamada fill que recibe un localizador (locator) y un valor (value)
    await locator.fill(value); // "dame el localizador y escribe el valor que te di en el elemento que encontraste"
  }

  async getText(locator) { //creo una funcion llamada getText que recibe un localizador (locator)
    return await locator.innerText(); // "dame el localizador y devuelve *return* el texto que encontraste alli *innerText*"
  } //innerText es una funcion de Playwright que devuelve el texto que se encuentra dentro del elemento localizado

  async waitForVisible(locator) { //creo una funcion llamada waitForVisible que recibe un localizador (locator)
    await locator.waitFor({ state: 'visible' }); // "dame el localizador y espera hasta que el elemento que encontraste este visible en la pagina"
  } //waitFor es una funcion de Playwright que espera a que un elemento cumpla una condicion, en este caso que su estado sea 'visible'
}

module.exports = BasePage; //esto exporta la clase BasePage para que pueda ser utilizada en otros archivos, como los casos de prueba.