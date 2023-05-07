'use strict'

export const getClasses = async () => {
    const url = `https://eldenring.fanapis.com/api/classes`
    const response = await fetch(url)
    const data = await response.json()

    return data.data
}

export const getCreatures = async () => {
    const url = `https://eldenring.fanapis.com/api/creatures`
    const response = await fetch(url)
    const data = await response.json()

    return data.data
}

export const getBosses = async () => {
    const url = `https://eldenring.fanapis.com/api/bosses`
    const response = await fetch(url)
    const data = await response.json()

    return data.data
}

export const getNpcs = async () => {
    const url = `	https://eldenring.fanapis.com/api/npcs`
    const response = await fetch(url)
    const data = await response.json()

    return data.data
}

export const getLocations = async () => {
    const url = `https://eldenring.fanapis.com/api/locations`
    const response = await fetch(url)
    const data = await response.json()

    return data.data
}