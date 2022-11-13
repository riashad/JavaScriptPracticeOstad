import {districtList} from "./districtList.js"; // Named Module Import

districtList.map((currentItem, index) => {
	let distName = "My district name is: " + currentItem.name;
	let distCode = `My district code is ${currentItem.code}`;//Template strings use Tick (`) and it helps to include variables inside the string
	console.log(distName + "\n" + distCode);
});

