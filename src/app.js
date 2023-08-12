
    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "4-4-2023"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')

        const db = res1.db(dbname)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        db.collection('users').insertOne({
            name : 'ahmed',
            age : 26
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        })

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        db.collection ('users').insertMany(
           [ {
                name: 'malk',
                age: 21
            },
            {
                name: 'ABDO2',
                age: 22
            }
            ,{
                name: 'islam3',
                age: 27
            },
            {
                name: 'adel4',
                age: 38
            },
            {
                name: 'reem5',
                age: 26
            },
            {
                name: 'tasneem6',
                age: 25
            },
            {
                name: 'zaki7',
                age: 25
            },
            {
                name: 'esraa8',
                age: 25
            },
            {
                name: 'shika9',
                age: 25
            },
            {
                name: 'mahmoud10',
                age: 25
            },
            {
                name: 'aya',
                age: 25
            }] , (error,data)=>{
                if(error){
                    console.log('Unable to insert data')
                }
            } 
        )

      db.collection('users').find({age:25}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
 
      db.collection('users').find({age:25}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })

    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      db.collection("users").updateOne({_id:mongodb.ObjectId("642f2ae82bc298571960e9a0")},{
        $inc:{age : 20}
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

    //   ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      db.collection("users").updateMany({},{
        $inc : {age : 10}
      })
      .then((data1) =>{console.log(data1.modifiedCount)})
      .catch((error)=> console.log(error))

//   ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

      db.collection("users").deleteOne({_id:mongodb.ObjectId("642f2b0af1c6b73e04b31ca6")})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))
    

      db.collection("users").deleteMany({age:25})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))
})