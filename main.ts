/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Oct 2024
 * This program turns on neopixels based on distance using sonar
*/

let distance = 0
let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB) // Adjust DigitalPin and length to match your setup

input.onButtonPressed(Button.A, function () {
    // Measure the distance
    distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters) // Adjust pins to match your setup

    // Turns on neopixels based on distance
    if (distance < 10) {
        // Turn NeoPixels to red if distance is less than 10 cm
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        // Turn NeoPixels to green if distance is 10 cm or more
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    strip.show()
})

