// Remove explitives from comments
// REF: http://api.jquery.com/contains-selector
// REF: http://api.jquery.com/addclass/
// Extend into an array of explitives

console.log($('.text:contains("fuck")').length);

$('.text:contains("fuck")').addClass('bad');