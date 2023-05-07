'use strict'

import { carregarCardClasses } from "./cards/classe.js"
import { carregarCardCreature } from "./cards/creature.js"
import { carregarCardBoss } from "./cards/boss.js"
import { carregarCardNpc } from "./cards/npc.js"
import { carregarCardLocation } from "./cards/location.js"

const routes = {
    '/classes' : '/pages/classes.html',
    '/creatures' : '/pages/creatures.html',
    '/bosses' : '/pages/bosses.html',
    '/npcs' : '/pages/npcs.html',
    '/locations' : '/pages/locations.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if(window.location.pathname == '/classes'){
        carregarCardClasses()
    } else if(window.location.pathname == '/creatures'){
        carregarCardCreature()
    } else if(window.location.pathname == '/bosses'){
        carregarCardBoss()
    } else if(window.location.pathname == '/npcs'){
        carregarCardNpc()
    } else if(window.location.pathname == '/locations'){
        carregarCardLocation()
    }
}

window.route = route