'use strict'

import { getCreatures } from "../main.js"

const criaturas = await getCreatures()

const criarCard = (criatura) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.classList.add('imagem')
    imagem.src = criatura.image

    const nome = document.createElement('p')
    nome.classList.add('nome')
    nome.textContent = criatura.name

    card.append(imagem, nome)

    return card
}

export const carregarCardCreature = () => {
    const container = document.getElementById('container')
    const cards = criaturas.map(criarCard)

    container.replaceChildren(...cards)
}