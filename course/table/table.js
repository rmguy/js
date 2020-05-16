function buildTable() {
    for (var i=0; i<3; i++) {
        var tr = document.createElement("tr");
        for (var j=0; j<3; j++) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(i + "," + j));
            tr.appendChild(td);
        }
        document.getElementById("tableBody").appendChild(tr);
    }
}
