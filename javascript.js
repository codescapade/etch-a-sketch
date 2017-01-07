
$(document).ready(function ()
{

	var width = 16;
	var height = 16;
	var content = '';
	
	for (var y = 0; y < height; y++)
	{
		for (var x = 0; x < width; x++)
		{
			content += '<div class="tile"></div>';
		}
		content += '<br>';
	}
	$('#grid').append(content);
	var gridWidth = $('#grid').width();
	var gridHeight = $('#grid').height();
	$('.tile').width(gridWidth / width);
	$('.tile').height(gridHeight / height);

	$('.tile').mouseenter(function ()
	{
		$(this).css('background-color', '#55aadd');
	});
});