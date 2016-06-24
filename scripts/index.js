$(document).ready(function () {
    $('#search').keyup(function () {
        var title = $('#search').val();
        $.getJSON("/Home/SearchArticle?title=" + title, function (data) {
            if (data) {
                $('#table tr').remove();
                $('#table').append("<tr><th width='13'><input type='checkbox' class='checkbox' /></th><th>Title</th><th>Date</th><th>Added by</th><th width='110' class='ac'>Content Control</th></tr>");
                $.each(data, function (item, i) {
                    $('#table').append("<tr><td><input type = 'checkbox' class = 'checkbox'/></td><td><h3>" +
                                        "<a hreaf = '#' id = 'title'>" + i["Title"] + "</a>" + "</h3></td><td>" +
                                        "<a hreaf = '#' id = 'date'>" + i["Time"] + "</a>" + "</h3></td><td>" +
                                        "<a hreaf = '#' id = 'title'>" + i["UserName"] + "</a>" + "</h3></td><td>" +
                                        "<a href = '#' class = 'ico del'> Delete</a>  " +
                                        "<a href = '#' class = 'ico edit'> Edit</a> </td></tr>");
                });
            }
        });
    });
});