var creatures = [
    {
        name: "Shark", habitat: "Ocean"
    },
    {
        name: "Whale", habitat: "Ocean"
    },
    {
        name: "Lion", habitat: "Savanna"
    },
    {
        name: "Monkey", habitat: "Jungle"
    }
];

const aquaticCreatures = creatures.filter(creature => creature.habitat == 'Ocean');

// console.log(aquaticCreatures);

// for (const key in aquaticCreatures) {
//     console.log(aquaticCreatures[key].name);
// }

creatures.map(e => console.log(e.name));