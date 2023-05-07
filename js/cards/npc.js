'use strict'

import { getNpcs } from "../main.js"

const npcs = await getNpcs()

const criarCard = (npc) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.classList.add('imagem')
    imagem.src = npc.image

    const nome = document.createElement('p')
    nome.classList.add('nome')
    nome.textContent = npc.name

    card.append(imagem, nome)

    return card
}

export const carregarCardNpc = () => {
    const container = document.getElementById('container')
    const cards = npcs.map(criarCard)

    container.replaceChildren(...cards)
}