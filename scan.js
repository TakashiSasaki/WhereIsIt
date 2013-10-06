function scanPorts(start, end) {
    if (start == null) start = 1;
    if (end == null) end = 65535;
    for (var i = start; i <= end; ++i) {
        scanPort(i);
    }
}
function scanPort(port_number) {
    var url = "http://localhost:" + port_number + "/";
    var query = $.get(url);
    var port_number = new Number(port_number);
    query.always(function () {
    });
    query.done(function (data, textStatus, jqXHR) {
        var tbody_element = $("#scanned-results tbody");
        tbody_element.append($("<tr><td>" + url + "</td><td>" + jqXHR.status + "</td></tr>"));
    });
    query.fail(function (jqXHR, textStatus, errorThrown) {
        var tbody_element = $("#scanned-results tbody");
        tbody_element.append($("<tr><td>" + url + "</td><td>" + jqXHR.status + "</td></tr>"));
    });
}
$("#buttonScan").bind("click", function (event) {
    scanPorts(5980, 5989);
});
