# QR Code Golf Encryption Library v1.0 #
================================================

## Description ##

This is a set of functions to encrypt some text and, using certain 3rd-party libraries, produce a nice little QR code that one can send to their friends. The project's code is minimal as the only parts I coded myself are the jumbling, encryption and mapping functions. However, when used in conjuction with the QR code encoder/decoders that I paired them in the live demo, they make a nice tool to use for encrypted communications.

## Live version ##

Check out the live demo at: (http://chalarangelo.github.io/qrcodegolf/index.html)

## Requirements ## 

None really, but I used it with these two projects to encode/decode messages:

+ **angular-qr**: (https://github.com/janantala/angular-qr)
+ **qcode-decoder**: (https://github.com/cirocosta/qcode-decoder)

## Usage ##

The `jumble` function will either turn your text into eldritch horrors or translate the eldritch scribblings for you. To jumble it all up, use `jumble(false,"your text here")` and to make it human-readable again, use `jumble(true,"the eldritch scribblings here")`.

The `vigenere` function will encrypt some text into utter gibberish, using the provided key. To encrypt use `vigenere(false,"your text here","a nice safe key")` and to decrypt use `vigenere(true,"your encrypted message here","the nice safe key")`.

Finally, to map the values from ASCII to values between 00 and 99, use `asciify(false,"your text")` and to get the original text from a numeric string, use `asciify(true,"numeric represenation of your text").`

Use all three together and you have a nice encryption tool at your disposal.

## License ##

The project is licensed under the MIT License. 