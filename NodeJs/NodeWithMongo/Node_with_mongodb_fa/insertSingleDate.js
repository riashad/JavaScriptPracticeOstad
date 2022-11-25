const {client} = require('./dbConfigRemote');

const insertSingleData = async ()=>{
	try {
		//select db
		let connectDB = client.db('school');
		//select collection
		let connectColl = connectDB.collection('students');
		//data to insert
		let data = {
			name: "Kalam Ahmed",
			course: "MERN Stack",
			roll: "11",
			platform: "OSTAD",
			trainer: "Rabbil Hassan",
			support: "Faisal Ahmed",
			location: "Jessore"
		}
		//pushing into collection
		let pushData = await connectColl.insertOne(data);
		console.log(`Data inserted successfully and the id_ ${pushData.insertedId}`);
	} catch (e) {
		//displaying error
		console.log(e);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}

insertSingleData();
