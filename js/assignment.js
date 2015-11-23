var categories_template, category_template, animal_template;

var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

function showAnimalTemplate(animal_template, current_category){
	$(".animal-thumbnail").click(function(){
		var index = $(this).data("id");
		current_animal = current_category.animals[index];
			
		showTemplate(animal_template, current_animal);

		$(".nav-tabs .active").removeClass("active");
		$("#animal-tab").addClass("active");
	});
}

$(document).ready(function(){
	var source = $("#categories-template").html();
	categories_template = Handlebars.compile(source);

	source = $("#category-template").html();
	category_template = Handlebars.compile(source);

	source = $("#animal-template").html();
	animal_template = Handlebars.compile(source);

	$("#categories-tab").click(function(){
		showTemplate(categories_template, animals_data);

		$(".nav-tabs .active").removeClass("active");
		$("#categories-tab").addClass("active");

		$(".category-thumbnail").click(function(){
			var index = $(this).data("id");
			current_category = animals_data.category[index];
			
			showTemplate(category_template, current_category);

			$(".nav-tabs .active").removeClass("active");
			$("#category-tab").addClass("active");

			showAnimalTemplate(animal_template, current_category);
		});
	});

	$("#category-tab").click(function(){
		showTemplate(category_template, current_category);

		$(".nav-tabs .active").removeClass("active");
		$("#category-tab").addClass("active");

		showAnimalTemplate(animal_template, current_category);
	});

	$("#animal-tab").click(function(){
		showTemplate(animal_template, current_animal);

		$(".nav-tabs .active").removeClass("active");
		$("#animal-tab").addClass("active");
	});

	$("#categories-tab").click();
});