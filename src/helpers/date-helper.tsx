export const getMonthString = (date: Date) => {
	const months = ["January", "February", "March",
		"April", "May", "June",
		"July", "August", "September",
		"October", "November", "December"];

	return months[date.getMonth()];
}

export const getDayString = (date: Date) => {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
		"Thursday", "Friday", "Saturday"];

	return days[date.getDay()];
}

export const getFirstDayOfTheWeek = () => {
	let today = new Date();
	let firstDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);

	return firstDayOfWeek
}
