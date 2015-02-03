$(function() {
	var appointmentsView = new AppointmentsView({collection: appointments,el:$('app')});
	appointmentsView.render();
});
	