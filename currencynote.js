
function print() {
    var Rs = parseInt(document.getElementById('inputnum').value);
    var arr = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1]
    array2 = []
    j=0
    a = []
    for (var i = 0; i < arr.length; i++) {
        if (Rs >= arr[i]) {
            array2[i] = Math.floor(Rs / arr[i])
            a[j]= "<br>" + arr[i] + " : " + array2[i];
            j = j+1
            var Hidecoma = a.join("")
            document.getElementById('print').innerHTML="Currency : Notes"+ Hidecoma
            // document.getElementById('print').innerHTML="Currency : Notes"+ a
            Rs = Rs % arr[i]
        }

    }
}

