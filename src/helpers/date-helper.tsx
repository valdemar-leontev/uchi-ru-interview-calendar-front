export const getMonthString = (date: Date) => {
	const months = ["January", "February", "March",
		"April", "May", "June",
		"July", "August", "September",
		"October", "November", "December"];

	return months[date.getMonth()];
};

export const getDayString = (date: Date) => {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
		"Thursday", "Friday", "Saturday"];

	return days[date.getDay()];
};

export const getFirstDayOfTheWeek = () => {
	let today = new Date();
	let firstDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);

	return firstDayOfWeek
};

export const getMonthNameByNumber = (monthNumber: number) => {
	const date = new Date();
	date.setMonth(monthNumber - 1);

	const monthName = date.toLocaleString('default', { month: 'long' });

	return monthName;
};

export const validateDate = (dateString: string) => {
	const pattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

	return pattern.test(dateString);
};

export const prepareDate = (dateTime: string) => {
	const [date, time = '00:00:00'] = dateTime.split(' ');

	const [year, month, day] = date.split('-').map((part) => part.padStart(2, '0'));

	const [hour = '00', minute = '00', second = '00'] = time.split(':').map((part) => part.padStart(2, '0'));

	const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

	return formattedDateTime;
}

export const convertDate = (dateString: string) => {
	const parts = dateString.split(" ");
	const datePart = parts[0];
	const timePart = parts[1];

	const date = datePart.split("-");
	const year = date[0];
	const month = date[1];
	const day = date[2];

	const hour = timePart.split(":")[0];

	const convertedDate = year + "-" + month + "-" + day + "-" + hour;

	return convertedDate;
};