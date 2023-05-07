'use strict'

import { getBosses } from "../main.js"

const bosses = await getBosses()

const criarCard = (boss) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.classList.add('imagem')
    imagem.src = boss.image

    const nome = document.createElement('p')
    nome.classList.add('nome')
    nome.textContent = boss.name

    card.append(imagem, nome)

    return card
}

export const carregarCardBoss = () => {
    const container = document.getElementById('container')
    const cards = bosses.map(criarCard)

    container.replaceChildren(...cards)
}