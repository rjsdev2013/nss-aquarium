const database = {
    fish: [
        {
            name: "Guppy Goldberg",
            food: "plants",
            size: 3,
            location: "Coral Reefs of Japan",
            image: null        
        },        
        {
            name: "Phish Styx",
            food: "grooves",
            size: 6,
            location: "river of rock",
            image: null
        },
        {
            name: "Genghis Karp",
            food: "sticky rice",
            size: 4,
            location: "Coral Reefs of Japan",
            image: null
        },
        {
            name: "Ann Chovy",
            food: "caesar",
            size: 5,
            location: "Coral Reefs of Japan",
            image: "https://oceana.org/sites/default/files/285468/0921gill-navigobius_fig_2.jpg"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}