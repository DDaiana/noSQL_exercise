db = connect("localhost:27017/celebrities");


function getCelebrityName(){
    db.celebrities.find().forEach(celebrities => print(celebrities.name))
}

function getCelebrityWithChildren(){
    return db.celebrities.find({ children: { $gt: 0 } }).count()
}

function getNoAwardsByBirthPlace(){
    return db.celebrities.aggregate([{$group: {_id:"$birthplace", sum_val:{$sum:"$awards"}}}])
}
