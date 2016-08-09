$(document).ready(function() {
	$('#blogs-list-table').DataTable({
		"order": [[ 2, "desc" ]],
		"ajax": "../blog/blogs_list.json",
		"columnsDefs": [
			{ "visible": false, "targets": 3 }
		],
		"columns": [
			{ "data": "title" },
			{ "data": "technologyStack" },
			{ "data": "timestamp" },
			{ "data": "url" }
		]
	});

	$('#blogs-list-table tbody').on('click', 'tr', function () {
		var data = this.row(this).data();
		alert(data[3]);
	});
});
