esp8266.init(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate115200)
esp8266.connectWiFi("subodh", "subodh123")
basic.forever(function () {
    esp8266.uploadThingspeak(
    "2WBEXOXSIRZH0ZFH",
    input.temperature()
    )
})
