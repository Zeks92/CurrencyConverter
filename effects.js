$(document).ready(function() {
    $('#first').hover(function() {
        $('#RSD, #RSD1, #RSD2, #RSD3, #RSD4').css({'font-weight':'bold', 'background':'#0066ff', 'color':'#993d00'});
    }, function() {
        $('#RSD, #RSD1, #RSD2, #RSD3, #RSD4').css({'font-weight':'normal','background':'#eceeef', 'color':'#464a4c'});
    });
    $('#second').hover(function() {
        $('#EUR, #EUR1, #EUR2, #EUR3, #EUR4').css({'font-weight':'bold', 'background':'#0066ff', 'color':'#993d00'});
    }, function() {
        $('#EUR, #EUR1, #EUR2, #EUR3, #EUR4').css({'font-weight':'normal','background':'#eceeef', 'color':'#464a4c'});
    });
    $('#third').hover(function() {
        $('#USD, #USD1, #USD2, #USD3, #USD4').css({'font-weight':'bold', 'background':'#0066ff', 'color':'#993d00'});
    }, function() {
        $('#USD, #USD1, #USD2, #USD3, #USD4').css({'font-weight':'normal','background':'#eceeef', 'color':'#464a4c'});
    });
    $('#fourth').hover(function() {
        $('#GBP, #GBP1, #GBP2, #GBP3, #GBP4').css({'font-weight':'bold', 'background':'#0066ff', 'color':'#993d00'});
    }, function() {
        $('#GBP, #GBP1, #GBP2, #GBP3, #GBP4').css({'font-weight':'normal','background':'#eceeef', 'color':'#464a4c'});
    });
    $('#fifth').hover(function() {
        $('#CHF, #CHF1, #CHF2, #CHF3, #CHF4').css({'font-weight':'bold', 'background':'#0066ff', 'color':'#993d00'});
    }, function() {
        $('#CHF, #CHF1, #CHF2, #CHF3, #CHF4').css({'font-weight':'normal','background':'#eceeef', 'color':'#464a4c'});
    });
});