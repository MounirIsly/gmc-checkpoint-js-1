function afterNYears(names, n) {
	for (var value in names) {
		names[value] += Math.abs(n)
	}
	return names
}