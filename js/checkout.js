document.getElementById("nofunit").addEventListener("keyup", function() {
    var x = document.getElementById("nofunit");
    if(x.value !== null){
        document.getElementById("totprice").innerHTML = proprice * x.value;
    }
    
});

document.getElementById("buy1").addEventListener("click", function() {
    document.getElementById("proprice").innerHTML = "njnjnjknj";
    // var x = document.getElementById("pricelkr")
    // x.innerHTML = "fdd"
    
});