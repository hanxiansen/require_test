require.config({
	paths: {
		jquery: 'jquery-1.8.3.min.js'
	}
});

require(['jquery'], function($) {
	alert($().jquery);
})