export default async function getDateTimeNow() {

    const date = new Date();

    const second = String(date.getSeconds()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const hours = String(date.getHours()).padStart(2, 0);

    const meridiem = hours >= 12 ? "PM" : "AM";


    const day = String(date.getDay()).padStart(2, 0);

    let month = date.getMonth()

    switch (month) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }

    const year = date.getFullYear();

    return `${month} ${day}, ${year} @ ${hours}:${minutes}:${second} ${meridiem}`; 

}