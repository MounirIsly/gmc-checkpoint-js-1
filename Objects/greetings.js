const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	var city = GUEST_LIST[name];
	if(city) {
		return "Hi! I'm " + (name) +", and I'm from " + (city) + "."
	} else {
		return "Hi! I'm a guest."
	}	
}