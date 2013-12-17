/* for Everything serach engine */
"use strict";
function Everything(port, query) {
    this.self = this;
    if (port == null) self.port = 80; else self.port = port;
    self.url = "http://localhost:" + port + "/?search=" + encodeURI(query);
    self.result = new Array();

    this.run = function () {
        console.log(self.url);
        var jq_xhr = $.ajax(
            {
                url: url,
                type: "GET",
                dataType: "html"
            }
        );
        jq_xhr.done(function (data, textStatus, jqXHR) {
            var dom = $(data);
            var table = dom.find("table");
            var tr = table.find("tr");
            console.log(tr);
            tr.each(function (x) {
                console.log("" + x + "->" + this);

                if ($(this).is(".trdata1") || $(this).is(".trdata2")) {
                    var a = $(this).find("a");
                    var filename = $(a[0]).contents().text();
                    var directory = $(a[1]).contents().text();
                    var size = $(this).find(".sizedata").text();
                    var datetime = $(this).find(".modifieddata").text();
                    self.result.push([filename, directory, size, datetime]);
                }
            });

            var title = dom[3].innerText;
            if (title == "Everything") {
                this.isHttpAccepted = true;
            } else {
                this.isHttpAccepted = false;
            }//if
            try {
                $("#textareaEverything").val(self.result);
            } catch (e) {
            }
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
