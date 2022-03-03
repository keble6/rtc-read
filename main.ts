let date = ""
let time = ""
let dateTime = ""
let stringIn = ""
let month = ""
let year = ""
let hour = ""
let minute = ""
let command = ""
function readTime () {
    date = "" + DS3231.date() + "/" + DS3231.month() + "/" + DS3231.year()
    time = "" + DS3231.hour() + ":" + DS3231.minute() + ":" + DS3231.second()
    dateTime = "" + date + " " + time
}
input.onButtonPressed(Button.A, function () {
    readTime()
    basic.showString(dateTime)
    serial.writeLine(dateTime)
})
function setDate () {
    date = stringIn.substr(2, 2)
    month = stringIn.substr(4, 2)
    year = stringIn.substr(6, 4)
    DS3231.dateTime(
    parseFloat(year),
    parseFloat(month),
    parseFloat(date),
    DS3231.day(),
    DS3231.hour(),
    DS3231.minute(),
    DS3231.second()
    )
}
function setTime () {
    hour = stringIn.substr(2, 2)
    minute = stringIn.substr(4, 2)
    DS3231.dateTime(
    DS3231.year(),
    DS3231.month(),
    DS3231.date(),
    DS3231.day(),
    parseFloat(hour),
    parseFloat(minute),
    DS3231.second()
    )
}
function setTimeDate () {
    stringIn = serial.readUntil(serial.delimiters(Delimiters.CarriageReturn))
    command = stringIn.substr(0, 2)
    if (command == "st") {
        setTime()
    } else {
        setDate()
    }
}
serial.onDataReceived(serial.delimiters(Delimiters.CarriageReturn), function () {
    setTimeDate()
})
