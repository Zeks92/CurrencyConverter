// Convert RSD to...
document.getElementById('RSDInput').addEventListener('input', function(e) {

    // Use RSD
    document.getElementById('RSD1').style.visibility = 'visible';
    document.getElementById('RSD2').style.visibility = 'visible';
    document.getElementById('RSD3').style.visibility = 'visible';
    document.getElementById('RSD4').style.visibility = 'visible';
    let RSD = e.target.value;
    if (RSD >= 0) {

        // Convert to EUR
        document.getElementById('RSDToEUR').innerHTML = (RSD / 118.1149).toFixed(2);

        // Convert to USD
        document.getElementById('RSDToUSD').innerHTML = (RSD / 101.911).toFixed(2);

        // Conver to GBP
        document.getElementById('RSDToGBP').innerHTML = (RSD / 132.5942).toFixed(2);

        // Conver to CHF
        document.getElementById('RSDToCHF').innerHTML = (RSD / 104.6097).toFixed(2);
    } else {
        document.getElementById('RSD1').style.visibility = 'hidden';
        document.getElementById('RSD2').style.visibility = 'hidden';
        document.getElementById('RSD3').style.visibility = 'hidden';
        document.getElementById('RSD4').style.visibility = 'hidden';

    }

});

// Convert EUR to...
document.getElementById('EURInput').addEventListener('input', function(e) {

    // Use EUR
    document.getElementById('EUR1').style.visibility = 'visible';
    document.getElementById('EUR2').style.visibility = 'visible';
    document.getElementById('EUR3').style.visibility = 'visible';
    document.getElementById('EUR4').style.visibility = 'visible';
    let EUR = e.target.value;
    if (EUR >= 0) {
        // Convert to USD
        document.getElementById('EURToUSD').innerHTML = (EUR * 1.159).toFixed(2);

        // Convert to RSD
        document.getElementById('EURToGBP').innerHTML = (EUR * 0.9808).toFixed(2);

        //Convert to GBP
        document.getElementById('EURToCHF').innerHTML = (EUR * 1.1291).toFixed(2);

        // Conver to CHF
        document.getElementById('EURToRSD').innerHTML = (EUR * 118.1149).toFixed(2);
    } else {
        document.getElementById('EUR1').style.visibility = 'hidden';
        document.getElementById('EUR2').style.visibility = 'hidden';
        document.getElementById('EUR3').style.visibility = 'hidden';
        document.getElementById('EUR4').style.visibility = 'hidden';
    }

});

// Convert USD to...
document.getElementById('USDInput').addEventListener('input', function(e) {

    // Use USD
    document.getElementById('USD1').style.visibility = 'visible';
    document.getElementById('USD2').style.visibility = 'visible';
    document.getElementById('USD3').style.visibility = 'visible';
    document.getElementById('USD4').style.visibility = 'visible';
    let USD = e.target.value;
    if (USD >= 0) {

        // Convert to RSD
        document.getElementById('USDToGBP').innerHTML = (USD * 0.76859).toFixed(2);

        // Convert to EUR
        document.getElementById('USDToCHF').innerHTML = (USD * 0.9742).toFixed(2);

        // Convert to GBP
        document.getElementById('USDToRSD').innerHTML = (USD * 101.911).toFixed(2);

        // Conver to CHF
        document.getElementById('USDToEUR').innerHTML = (USD * 0.86281).toFixed(2);
    } else {
        document.getElementById('USD1').style.visibility = 'hidden';
        document.getElementById('USD2').style.visibility = 'hidden';
        document.getElementById('USD3').style.visibility = 'hidden';
        document.getElementById('USD4').style.visibility = 'hidden';
    }

});
// Convert GBP to...
document.getElementById('GBPInput').addEventListener('input', function(e) {

    // Use GBP
    document.getElementById('GBP1').style.visibility = 'visible';
    document.getElementById('GBP2').style.visibility = 'visible';
    document.getElementById('GBP3').style.visibility = 'visible';
    document.getElementById('GBP4').style.visibility = 'visible';
    let GBP = e.target.value;
    if (GBP >= 0) {

        // Convert to RSD
        document.getElementById('GBPToCHF').innerHTML = (GBP * 1.26751).toFixed(2);

        // Convert to EUR
        document.getElementById('GBPToRSD').innerHTML = (GBP * 132.5942).toFixed(2);

        // Convert to USD
        document.getElementById('GBPToEUR').innerHTML = (GBP * 1.12259).toFixed(2);

        // Conver to CHF
        document.getElementById('GBPToUSD').innerHTML = (GBP * 1.30108).toFixed(2);
    } else {
        document.getElementById('GBP1').style.visibility = 'hidden';
        document.getElementById('GBP2').style.visibility = 'hidden';
        document.getElementById('GBP3').style.visibility = 'hidden';
        document.getElementById('GBP4').style.visibility = 'hidden';
    }

});
document.getElementById('CHFInput').addEventListener('input', function(e) {

    // Use CHF
    document.getElementById('CHF1').style.visibility = 'visible';
    document.getElementById('CHF2').style.visibility = 'visible';
    document.getElementById('CHF3').style.visibility = 'visible';
    document.getElementById('CHF4').style.visibility = 'visible';
    let CHF = e.target.value;
    if (CHF >= 0) {

        // Convert to RSD
        document.getElementById('CHFToRSD').innerHTML = (CHF * 104.6097).toFixed(2);

        // Convert to EUR
        document.getElementById('CHFToEUR').innerHTML = (CHF * 0.88566).toFixed(2);

        // Convert to USD
        document.getElementById('CHFToUSD').innerHTML = (CHF * 1.02648).toFixed(2);

        // Conver to CHF
        document.getElementById('CHFToGBP').innerHTML = (CHF * 0.78895).toFixed(2);
    } else {
        document.getElementById('CHF1').style.visibility = 'hidden';
        document.getElementById('CHF2').style.visibility = 'hidden';
        document.getElementById('CHF3').style.visibility = 'hidden';
        document.getElementById('CHF4').style.visibility = 'hidden';
    }

});


