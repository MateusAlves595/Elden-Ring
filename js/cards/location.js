'use strict'

import { getLocations } from "../main.js"

const locais = await getLocations()

const criarCard = (local) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.classList.add('imagem')
    imagem.src = local.image

    const nome = document.createElement('p')
    nome.classList.add('nome')
    nome.textContent = local.name

    card.append(imagem, nome)

    return card
}

export const carregarCardLocation = () => {
    const container = document.getElementById('container')
    const cards = locais.map(criarCard)

    container.replaceChildren(...cards)
}