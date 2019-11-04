const on = (...kinds) => (...els) => (fn) =>
	kinds.forEach(kind =>
    els.forEach(el => el.addEventListener(kind, fn))
  )

const a = document.getElementById('a');
const b = document.getElementById('b');
const o = document.getElementById('output');

on('input', 'mousedown')(a, b)(update);
  // 'mousedown' because otherwise you can "lock" the other slider in place at min=max=value

const max = 2020;
const min = 1950;
const range = max - min + 1; // +1 inclusive

update(); // 1x

// As the user drags on input, update the available range and visual space for both inputs
function update({target} = {}) {
  let pivot; // unless otherwise acted on
  
  if (target === a) {
		if (a.valueAsNumber >= Number(a.max)) {
	    pivot = Math.min(max - 1, Number(a.max) + 1);
    }
  }
  
  if (target === b) {
		if (b.valueAsNumber <= Number(b.min)) {
    	pivot = Math.max(min, Number(b.min) - 2);
    }
  }
  
  if (pivot != null) {
  	a.max = pivot;
	  b.min = pivot + 1;
  }
  
  a.style.flexGrow = stepsIn(a);
  b.style.flexGrow = stepsIn(b);
  
  // Print selected range
  o.innerText = `${a.value} - ${b.value}`;
}

// Number of discrete steps in an input range
function stepsIn(el) {
  return Number(el.max) - Number(el.min) + 1;
}


document.getElementById("searchMovieButton").addEventListener("click", function() {
    search();
});

function search(){
    document.getElementById('searchContainer').classList.remove("hide");
}