function readTime () {
    date = "" + DS3231.date() + "/" + DS3231.month() + "/" + DS3231.year()
    time = "" + DS3231.hour() + "/" + DS3231.minute() + "/" + DS3231.second()
    dateTime = "" + date + " " + time
}
input.onButtonPressed(Button.A, function () {
    basic.showString(dateTime)
    serial.writeString(dateTime)
})
let time = ""
let date = ""
let dateTime = ""
dateTime = ""
