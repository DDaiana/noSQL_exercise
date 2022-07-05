db = connect("localhost:27017/celebrities")

db.celebrities.drop()


db.celebrities.insertMany([
    { name: "Pochi", age: 12, birthplace: "antimatter", relationship: "single", children: 0, awards: 0 },
    { name: "Puffy", age: 22, birthplace: "antimatter", relationship: "single", children: 0, awards: 2 },
    { name: "Puffy", age: 22, birthplace: "antimatter", relationship: "single", children: 0, awards: 2 },
    { name: "Anna", age: 30, birthplace: "antimatter", relationship: "married", children: 2, awards: 2 }
])



