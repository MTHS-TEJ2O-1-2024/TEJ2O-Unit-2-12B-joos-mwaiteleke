/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program turns on neopixels based on distance using sonar
*/

let distance = 0
let neopixelStrip: neopixel.Strip = null

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // Measure the distance
    input.onButtonPressed(Button.A, function () {
        distance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )

    // Turns on neopixels based on distance
    if (distance < 10) {

        // Turn NeoPixels to red if distance is less than 10 cm
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()

    } else {

        // Turn NeoPixels to green if distance is 10 cm or more
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
    }
})})
