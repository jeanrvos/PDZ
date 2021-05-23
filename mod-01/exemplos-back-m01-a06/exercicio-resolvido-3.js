function formatDate (day, month, year) {

    const dayString = `${day}`.padStart(2, "0");
    const monthString = `${month}`.padStart(2, "0");

    const formattedDate = `${dayString}/${monthString}/${year}`;
    console.log(formattedDate);
    
}

formatDate (1,1,2021);