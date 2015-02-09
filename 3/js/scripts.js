// Remove explitives from comments
// REF: http://api.jquery.com/contains-selector
// REF: http://api.jquery.com/addclass/
// Extend into an array of explitives


var bad = ['fuck' , 'shit' , 'damn'];




console.log($('.text:contains("fuck")').length);

$('.text:contains("fuck")').addClass('bad');






for (var i=0; i < bad.length; i++ ) {

	console.log(bad[i]);
}




































