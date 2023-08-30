document.querySelectorAll('input[name="payment-method"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        alert('You selected: ' + this.value);
    });
});
