import React from "react"
import { useEffect, useState } from "react"

export const Joke = () => {
    const [joke, setJoke] = useState("")

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', {
                method: "GET",
                headers: {
                    'X-RapidAPI-Key': 'your-api-key',
                    'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
                  }
            });

            console.log(response)

            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            
            const data = await response.json()
            setJoke(data[0].joke);
        } catch (error) {
            console.error("Error:", error)
        }
    }

    useEffect(() => {
        fetchJoke()
    }, [])

    return(
        <>
        <h2>Joke of the Day</h2>
        {joke && (
            <p>{joke}</p>
        )}
        </>
    )

}