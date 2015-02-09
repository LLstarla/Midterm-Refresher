// Three *new* message when page loads
// Show Date
// Show Number of Messages in Inbox
// Add JavaScript to close button


var msg1 = 'Better your life with more stuff!';
var msg2 = 'Star Trek > Star Wars!';

var total = 100 + 31;

$('.header').text(msg2);


$('.content p').text('Unread Messages: ' + total);


$('.message .close').on('click', function() {
  $(this).closest('.message').fadeOut();
});