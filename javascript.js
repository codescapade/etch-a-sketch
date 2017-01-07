
var startColor = { red: 60, green: 200, blue: 230 };
var whiteColor = {red: 238, green: 238, blue: 238 };

$(document).ready(function ()
{
	createGrid(16);
});

function resetGrid ()
{
	// show the prompt to enter the number of tiles per side
	var size = prompt("Number of squares per side?");
	createGrid(size);
}

function createGrid (size)
{
	// clear the grid div
	$('#grid').empty();

	// create the content for the grid depending on the size
	var content = '';
	for (var y = 0; y < size; y++)
	{
		for (var x = 0; x < size; x++)
		{
			content += '<div class="tile"></div>';
		}
	}
	$('#grid').append(content);

	// set the grid div size based on the div width and height
	var gridWidth = $('#grid').width();
	var gridHeight = $('#grid').height();
	$('.tile').width(gridWidth / size);
	$('.tile').height(gridHeight / size);

	// set the color of each tile to a light grey
	$('.tile').css('background-color', 'rgb(' + whiteColor.red + ', ' + whiteColor.green + ', ' + whiteColor.blue + ')');

	$('.tile').mouseenter(function ()
	{
		var color = $(this).css('background-color');
		var rgb = color.slice(4, color.indexOf(")")).split(",");

		var red = parseInt(rgb[0],10);
  		var green = parseInt(rgb[1],10);
  		var blue = parseInt(rgb[1], 10);

  		// if the tile is already colored decrease the values to make it darker
		if (red !== whiteColor.red)
		{
			$(this).css('background-color', 'rgb(' + (red - 25) + ', ' + (green - 25) + ', ' + (blue - 25) + ')');
		}
		else // set the first color value
		{
			$(this).css('background-color', 'rgb(' + startColor.red + ', ' + startColor.green + ', ' + startColor.blue + ')');
		}
	});
}