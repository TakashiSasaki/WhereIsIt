/* for Everything serach engine */
function Everything(port) {
    if (port == null) this.port = 80;
    var jqXHR = $.ajax({type: "GET", url: "http://localhost:" + this.port, dataType: "html"});
    jqXHR.done(function (data, textStatus, jqXHR) {
        var dom = $(data);
        this.title = dom[3].innerText;
        if (title == "Everything") {
            this.isHttpAccepted = true;
        } else {
            this.isHttpAccepted = false;
        }
        $("#textareaEverything").val(data);
    });
    jqXHR.fail(function (jqXHR, textStatus, errorThrown) {
        $("#textareaEverything").val(textStatus);
    });
}
var everything = new Everything();
