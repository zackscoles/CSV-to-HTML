window.onload = function () {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var textType = /text.*/.csv;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var result = reader.result;
                var tableData = result.split("\n");
                var myTable = document.createElement("table");
                var tblBody = document.createElement("tbody");

                for (var i = 0; i < tableData.length; i++) {
                    var row = document.createElement("tr");
                    var x = tableData[i].split(", ");

                    for (var a = 0; a < x.length; a++) {
                        var cell = document.createElement("td");
                        var cellText = document.createTextNode(x[a]);

                        cell.appendChild(cellText);
                        row.appendChild(cell);
                    }
                    tblBody.appendChild(row);
                }
                myTable.appendChild(tblBody);

                myTable.setAttribute("border", "2");

                fileDisplayArea.appendChild(myTable);
            }
        reader.readAsText(file);

        } else {
            fileDisplayArea.innerText = "File not supported!"
        }
    });
}
