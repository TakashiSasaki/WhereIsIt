/* for Everything serach engine */
function Everything(port) {
    if (port == null) port = 80;
    var jqXHR = $.ajax({type: "GET", url: "http://localhost:" + port});
    jqXHR.done(function (data, textStatus, jqXHR) {
        $("#textareaEverything").val(data);
    });
    jqXHR.fail(function (jqXHR, textStatus, errorThrown) {
        $("#textareaEverything").val(textStatus);
    });
}
var everything = new Everything(88);
