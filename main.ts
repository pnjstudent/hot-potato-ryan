let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Snake)
    while (0 < timer) {
        timer += -1
        basic.pause(1000)
    }
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
	
})
