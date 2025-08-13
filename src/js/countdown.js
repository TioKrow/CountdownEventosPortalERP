(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "08/18/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDownDate1 = new Date(birthday);
    const x = setInterval(function () {

        const now = new Date();
        const distance = countDownDate1.getTime() - now.getTime();

        // Días hábiles restantes
        const businessDays = getBusinessDaysCount(now, countDownDate1);

        document.getElementById("days").innerText = businessDays,
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
            document.getElementById("headline").innerText = "Event Day!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
        //seconds
    }, 0)
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    const second2 = 1000,
        minute2 = second2 * 60,
        hour2 = minute2 * 60,
        day2 = hour2 * 24;


    let today2 = new Date(),
        dd2 = String(today2.getDate()).padStart(2, "0"),
        mm2 = String(today2.getMonth() + 1).padStart(2, "0"),
        yyyy2 = today2.getFullYear(),
        nextYear2 = yyyy2 + 1,
        dayMonth2 = "09/15",
        Event2 = dayMonth2 + "/" + yyyy2;

    today2 = mm2 + "/" + dd2 + "/" + yyyy2;
    if (today2 > Event2) {
        Event2 = dayMonth2 + "/" + nextYear2;
    }
    //end
    const countDownDate2 = new Date(Event2);
    const x2 = setInterval(function () {

        const now2 = new Date(),
            distance2 = countDownDate2 - now2;

        // Días hábiles restantes
        const businessDays2 = getBusinessDaysCount(now2, countDownDate2);

        document.getElementById("days2").innerText = businessDays2,
            document.getElementById("hours2").innerText = Math.floor((distance2 % (day2)) / (hour2)),
            document.getElementById("minutes2").innerText = Math.floor((distance2 % (hour2)) / (minute2)),
            document.getElementById("seconds2").innerText = Math.floor((distance2 % (minute2)) / second2);

        //do something later when date is reached
        if (distance2 < 0) {
            document.getElementById("headline2").innerText = "Event Day!";
            document.getElementById("countdown2").style.display = "none";
            document.getElementById("content2").style.display = "block";
            clearInterval(x2);
        }
        //seconds
    }, 0)

    //Event 2 countdown ends here

    //Event 3 countdown starts here
    const second3 = 1000,
        minute3 = second3 * 60,
        hour3 = minute3 * 60,
        day3 = hour3 * 24;


    let today3 = new Date(),
        dd3 = String(today3.getDate()).padStart(2, "0"),
        mm3 = String(today3.getMonth() + 1).padStart(2, "0"),
        yyyy3 = today3.getFullYear(),
        nextYear3 = yyyy3 + 1,
        dayMonth3 = "10/20",
        Event3 = dayMonth3 + "/" + yyyy3;

    today3 = mm3 + "/" + dd3 + "/" + yyyy3;
    if (today3 > Event3) {
        Event3 = dayMonth3 + "/" + nextYear3;
    }
    //end
    const countDownDate3 = new Date(Event3);
    const x3 = setInterval(function () {

        const now3 = new Date(),
            distance3 = countDownDate3 - now3;

        // Días hábiles restantes
        const businessDays3 = getBusinessDaysCount(now3, countDownDate3);

        document.getElementById("days3").innerText = businessDays3,
            document.getElementById("hours3").innerText = Math.floor((distance3 % (day3)) / (hour3)),
            document.getElementById("minutes3").innerText = Math.floor((distance3 % (hour3)) / (minute3)),
            document.getElementById("seconds3").innerText = Math.floor((distance3 % (minute3)) / second3);

        //do something later when date is reached
        if (distance3 < 0) {
            document.getElementById("headline3").innerText = "Event Day!";
            document.getElementById("countdown3").style.display = "none";
            document.getElementById("content3").style.display = "block";
            clearInterval(x3);
        }
        //seconds
    }, 0)

    // Función para contar días hábiles (lunes a viernes) entre dos fechas
    function getBusinessDaysCount(startDate, endDate) {
        let count = 0;
        let current = new Date(startDate);
        current.setHours(0, 0, 0, 0);
        endDate = new Date(endDate);
        endDate.setHours(0, 0, 0, 0);

        while (current <= endDate) {
            const day = current.getDay();
            if (day !== 0 && day !== 6) { // 0 = domingo, 6 = sábado
                count++;
            }
            current.setDate(current.getDate() + 1);
        }
        return count;
    }
}());