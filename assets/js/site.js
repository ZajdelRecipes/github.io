function menuFunction() {
  var x = document.getElementById("recipeTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function getRecipes(recipes) {
  var html = "<p>";

  for(var i=0; i<recipes.length; i++) {
    var recipe = recipes[i];

     html += buildRecipeLink(recipe);
  }

  html += "</p>";
  
  if(recipes.length <= 0) {
    document.getElementById("recipe-list").innerHTML = "<p>No Recipes found</p>";

  } else {
    document.getElementById("recipe-list").innerHTML = html;
  }
}

function buildRecipeLink(recipe) {
  var html = 
    "<a href='/assets/recipes/" + recipe.url + "'>" + 
    recipe.title +
    "</a>" +
    "<br/>";

  return html;
}

function search() {
  var input = document.getElementById("search").value;
  var tokens = input.split(" ");

  input = "";

  var stopWords = ["and", "or", "i", "the", "of", "a", "as", "at", "is", "are", "to", "if"];

  for(var x=0; x<tokens.length; x++) {
    var word = tokens[x].toLowerCase();

    for (var y=0; y<stopWords.length; y++) {
      if(tokens[x] == stopWords[y]) {
        word = "";
        break;
      }
    }

    if(word != "") {
      input += tokens[x] + "|";
    }
  }

  var cleanedInput = input.substring(0, input.length-1);

  recipes = [];

  for(var i=0; i<recipeList.length; i++) {
    var recipe = recipeList[i];
    var reg = new RegExp(cleanedInput, 'gi');

    if(reg.test(recipe.title)) {
      recipes.push(recipe);

		} else if(reg.test(recipe.keywords)) {
			recipes.push(recipe);
		}
  }

  getRecipes(recipes);
}
