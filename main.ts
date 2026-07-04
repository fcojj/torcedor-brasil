input.onButtonPressed(Button.A, function () {
    alternarSensibilidadeModo = 1 - alternarSensibilidadeModo
    if (alternarSensibilidadeModo == 0) {
        ajustarModo(255, 255)
    } else {
        ajustarModo(180, 60)
    }
    basic.pause(200)
})
function tocarLista (lista: number[]) {
    for (let item of lista) {
        if (repetir == 0) {
            break;
        }
        if (item == 0) {
            pausa()
        } else {
            music.playTone(item * 2, music.beat(BeatFraction.Quarter))
        }
    }
}
input.onSound(DetectedSound.Loud, function () {
    if (repetir == 0) {
        repetir = 1
        pins.servoWritePin(AnalogPin.P8, 180)
        while (repetir == 1) {
            basic.showIcon(IconNames.Heart)
            // Frase 1
            tocarLista([
            370,
            311,
            370,
            311,
            247,
            277,
            311,
            277,
            247,
            311,
            0
            ])
            // Frase 2
            tocarLista([
            370,
            311,
            370,
            311,
            247,
            277,
            311,
            277,
            247,
            330,
            0
            ])
            // Frase 4
            tocarLista([
            415,
            330,
            415,
            330,
            277,
            311,
            330,
            370,
            415,
            466,
            415,
            311,
            415,
            0
            ])
            // Frase 3
            tocarLista([
            415,
            415,
            370,
            330,
            311,
            277,
            370,
            247
            ])
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    repetir = 0
    music.stopAllSounds()
    pins.servoWritePin(AnalogPin.P8, 90)
    basic.showIcon(IconNames.Happy)
    alterarCorLedRgb(0, 1023, 1023)
})
function alterarCorLedRgb (redValor: number, greenValor: number, blueValor: number) {
    pins.analogWritePin(AnalogPin.P1, redValor)
    pins.analogWritePin(AnalogPin.P2, greenValor)
    pins.analogWritePin(AnalogPin.P16, blueValor)
}
function pausa () {
    music.rest(music.beat(BeatFraction.Quarter))
}
function ajustarModo (sensibilidade: number, volume: number) {
    music.setVolume(volume)
    input.setSoundThreshold(SoundThreshold.Loud, sensibilidade)
}
let repetir = 0
let alternarSensibilidadeModo = 0
basic.showIcon(IconNames.Happy)
pins.setAudioPin(DigitalPin.P0)
alternarSensibilidadeModo = 0
music.setVolume(255)
music.setTempo(75)
repetir = 0
input.setSoundThreshold(SoundThreshold.Loud, 255)
alterarCorLedRgb(0, 1023, 1023)
pins.servoWritePin(AnalogPin.P8, 90)
basic.forever(function () {
    if (repetir == 1) {
        alterarCorLedRgb(1023, 0, 1023)
        basic.pause(500)
        alterarCorLedRgb(0, 150, 1023)
        basic.pause(500)
        alterarCorLedRgb(1023, 1023, 0)
        basic.pause(500)
    }
})
