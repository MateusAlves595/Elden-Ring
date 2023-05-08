'use strict'

class footer extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' }) 
        this.texto_copyright = 'Digite o autor'
    }

    static get observedAttributes(){
        return ['texto_copyright']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())

}

styles(){
    const css = document.createElement('style')
    css.textContent = `
    .copyright{
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-family: 'Sarabun';
        font-size: 1.2rem;
        color: #FFFBAB;
    }
    /* MOBILE */
    @media (max-width:640px){
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 200px;
        }
    }
    `
    return css
}

component(){

    const container = document.createElement('div')
    container.classList.add('container')

    const textoCopyright = document.createElement('p')
    textoCopyright.classList.add('copyright')
    textoCopyright.textContent = this.texto_copyright

    container.append(textoCopyright)

    return container

}

}

customElements.define('footer-elden', footer)