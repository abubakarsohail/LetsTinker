$(document).ready(function () {
    $('#search').keyup(function () {
        var UserName = $('#search').val();
        $.getJSON("/Admin/SearchUser?UserName=" + UserName, function (data) {
            if (data) {
                $('#table tr').remove();
                $('#table').append("<tr><th width='13'><input type='checkbox' class='checkbox' /></th><th>User</th><th width='110' class='ac'>Content Control</th></tr>");
                    $.each(data, function (item, i) {
                    $('#table').append("<tr><td><input type = 'checkbox' class = 'checkbox'/></td><td><h3>" +
                                        "<a hreaf = '#' id = 'UserName'>" + i["UserName"] + "</a>" + "</h3></td><td>" +
                                        "<a href = '/Admin/Delete?UserName=" + i["UserName"] + "' class = 'ico del'> Delete</a>  " + 
                                        "<a href = '#' class = 'ico edit'> Edit</a> </td></tr>");
                });
            }
        });
    });
});