function getBudgets(arr) {
	var sumBudget = 0;
	
	for (var i = 0; i < arr.length; i++)
		{
			sumBudget += arr[i].budget;
		}
	
	return sumBudget;
}