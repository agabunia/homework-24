import React from "react"
import { useParams } from "react-router-dom"

interface IData {
    id:number
    fact:string
}

const data:IData[] = [
    {id: 1, fact: 'Artist Bob Kane and writer Bill Finger are the creators of the original character.'},
    {id: 2, fact: 'Unlike other superheroes, Batman does not have any superpowers.'},
    {id: 3, fact: 'When he was only a child he witnessed his parents being murdered by criminals.'},
    {id: 4, fact: 'His secret identity is Bruce Wayne!'},
    {id: 5, fact: 'He has over 6,500 comic books, nearly 50 videogames and more than 10 live-action movies'}
]

const FactsPage = () => {
    const fact = useParams()

    const findFact = data.find(f => f.id === parseInt(fact.factId))
    if(!findFact) {
        return <div><h2>Fact was not found</h2></div>
    }

    return (
        <div>
            <h1>You Choose Facts</h1>
            <h1>Fact No {findFact.id}</h1>
            <h2> {findFact.fact} </h2>
        </div>
    )
}

export default FactsPage