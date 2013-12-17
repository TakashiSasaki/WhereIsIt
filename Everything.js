/* for Everything serach engine */
"use strict";
function Everything(port) {
    if (port == null) port = 80;
    var url = "http://localhost:" + port + "/";

    this.run = function () {
        console.log(url);
        var jq_xhr = $.ajax(
            {
                url: url,
                type: "GET",
                dataType: "html"
            }
        );
        jq_xhr.done(function (data, textStatus, jqXHR) {
            console.log("ajax done");
            var dom = $(data);
            this.title = dom[3].innerText;
            if (title == "Everything") {
                this.isHttpAccepted = true;
            } else {
                this.isHttpAccepted = false;
            }//if
            $("#textareaEverything").val(data);
        });

        jq_xhr.fail(function (xmlHttpRequest, textStatus, errorThrown) {
            console.log("ajax fail");
            $("#textareaEverything").val(textStatus);
        });

        jq_xhr.always(function (jqXHR, textStatus, errorThrown) {
            console.log("ajax always");
        });
    }
//run
}//Everything
$(function () {
    var everything = new Everything(80);
    setInterval(everything.run, 5000);
});
