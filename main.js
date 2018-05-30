;(function() {
	'use strict';

	document.addEventListener("DOMContentLoaded", function() {
        Array.from(document.querySelectorAll('.scheme .Buttons.primary .Buttons__Item'))
            .forEach(function(button) {
                button.onclick = function(e) {
                    document.getElementById('mainhtml').classList.toggle('light');
                    document.getElementById('mainhtml').classList.toggle('dark');
                    Array.from(document.querySelectorAll('.scheme .Buttons.primary .Buttons__Item'))
                        .forEach(function(b) {
                            b.classList.toggle('checked');
                        });
                };
            });
	});
})();