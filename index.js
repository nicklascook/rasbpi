var Lcd = require('lcd'),
    lcd = new Lcd({
        rs: 26,
        e: 19,
        data: [13, 6, 5, 11],
        cols: 8,
        rows: 2
    });

lcd.on('ready', function () {
    setInterval(function () {
        lcd.setCursor(0, 0);
        lcd.print(new Date().toString().substring(16, 24));
    }, 1000);
});

// If ctrl+c is hit, free resources and exit.
process.on('SIGINT', function () {
    lcd.clear();
    lcd.close();
    process.exit();
});