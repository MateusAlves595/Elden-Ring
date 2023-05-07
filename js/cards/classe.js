'use strict'

import { getClasses } from "../main.js"

const classes = await getClasses()

const criarCard = (classe) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('foto')
    foto.src = classe.image

    card.append(foto)

    return card
}

export const carregarCardClasses = () => {
    const container = document.getElementById('container')
    const cards = classes.map(criarCard)

    container.replaceChildren(...cards)
}