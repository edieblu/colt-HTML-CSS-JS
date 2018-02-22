function kebab(str) {
	for (var i = 0; i < str.length; i++){
		if (str[i] === "-") {
			str[i] = "_";
		} else {
			continue;
		}
	return str;
	}
}

console.log(kebab("my-kebab"))