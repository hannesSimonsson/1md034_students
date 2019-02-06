new Vue({
    el: '#orders',
    methods: {
        markDone: function() {
             document.getElementById("orderConfirmation").innerHTML = "";
             info();
             console.log("Button pushed!");
        }
    }
});

new Vue({
    el: '#wrapper',
    methods: {
        checked: function() {
            document.getElementById("orderSummary").innerHTML = "";
            summary();
            console.log("Checked");
        }
    }
});
