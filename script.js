function encode (secret, message) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let secretString = [];
    let secretKey = [];
    let messageMap = [];
    let encodedMessage = '';

    // get number of times secret will fit as a whole and push each char to secretString array
    for (let i = 0; i < Math.trunc(message.length / secret.length); i++) {
        secret.split('').forEach((char) => {
            secretString.push(char.toUpperCase());
        });
    }

    // get number of remaining characters needed and push each char to secretString
    for (let i = 0; i < (message.length % secret.length); i++) {
        secretString.push(secret.split('')[i].toUpperCase());
    }

    secretString.forEach((char) => {
        secretKey.push({
            index: alphabet.indexOf(char),
            letter: char
        });
    });

    message.split('').forEach((char) => {
        messageMap.push({
            index: alphabet.indexOf(char.toUpperCase()),
            letter: char.toUpperCase()
        });
    });

    for (let i = 0; i  < secretKey.length; i++) {
        let alteredAlphabet = alphabet.slice(secretKey[i].index, 25);
        alphabet.slice(0, secretKey[i].index).forEach((char) => {
            alteredAlphabet.push(char);
        });

        encodedMessage = encodedMessage.concat(alteredAlphabet[messageMap[i].index]);
    }   

    console.log('encoded message = ' + encodedMessage);

}


function decode(secret, message) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let secretString = [];
    let secretKey = [];
    let messageMap = [];
    let decodedMessage = '';

    // get number of times secret will fit as a whole and push each char to secretString array
    for (let i = 0; i < Math.trunc(message.length / secret.length); i++) {
        secret.split('').forEach((char) => {
            secretString.push(char.toUpperCase());
        });
    }

    // get number of remaining characters needed and push each char to secretString
    for (let i = 0; i < (message.length % secret.length); i++) {
        secretString.push(secret.split('')[i].toUpperCase());
    }

    secretString.forEach((char) => {
        secretKey.push({
            index: alphabet.indexOf(char),
            letter: char
        });
    });

    message.split('').forEach((char) => {
        messageMap.push({
            index: alphabet.indexOf(char.toUpperCase()),
            letter: char.toUpperCase()
        });
    });

    for (let i = 0; i  < secretKey.length; i++) {
        let alteredAlphabet = alphabet.slice(secretKey[i].index, 25);
        alphabet.slice(0, secretKey[i].index).forEach((char) => {
            alteredAlphabet.push(char);
        });
        
        decodedMessage = decodedMessage.concat(alphabet[alteredAlphabet.indexOf(message.split('')[i])]);
    }   

    console.log('decoded message = ' + decodedMessage);

}
