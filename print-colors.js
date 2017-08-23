exports.foreground = {
	light: {
		gray: '\033[90m',
		red: '\033[91m',
		green: '\033[92m',
		yellow: '\033[93m',
		blue: '\033[94m',
		pink: '\033[95m',
		cyan: '\033[96m',
		white: '\033[97m'
	},
	dark: {
		gray: '\033[30m',
		red: '\033[31m',
		green: '\033[32m',
		yellow: '\033[33m',
		blue: '\033[34m',
		pink: '\033[35m',
		cyan: '\033[36m',
		white: '\033[37m'
	}
};
exports.background = {
	light: {
		gray: '\033[100m',
		red: '\033[101m',
		green: '\033[102m',
		yellow: '\033[103m',
		blue: '\033[104m',
		pink: '\033[105m',
		cyan: '\033[106m',
		white: '\033[107m'
	},
	dark: {
		gray: '\033[40m',
		red: '\033[41m',
		green: '\033[42m',
		yellow: '\033[43m',
		blue: '\033[44m',
		pink: '\033[45m',
		cyan: '\033[46m',
		white: '\033[47m'
	}
};
exports.end = '\033[0m';

// Shortcuts
exports.foreground.l = exports.foreground.light;
exports.foreground.d = exports.foreground.dark;
exports.background.l = exports.background.light;
exports.background.d = exports.background.dark;
exports.fg = exports.foreground;
exports.bg = exports.background;
exports.e = exports.end;

exports.help = function() {
	console.log('');
	console.log('            '+exports.bg.l.white+'                                        '+exports.e);
	console.log('            '+exports.bg.l.white+exports.fg.l.red+'              COLOR - JS                '+exports.e);
	console.log('            '+exports.bg.l.white+'                                        '+exports.e);
	console.log('            '+exports.bg.d.white+'                                        '+exports.e);
	console.log('');
	let message = 'background|bg.light|l.';
	message = message.replace(/[a-z]*/g, function(a, b){
	    return exports.e+exports.fg.l.gray+a+exports.e;
	});
	message += exports.e+exports.bg.l.gray+exports.fg.d.gray+'gray|'+
			exports.e+exports.bg.l.red+exports.fg.d.gray+'red|'+
			exports.e+exports.bg.l.green+exports.fg.d.gray+'green|'+
			exports.e+exports.bg.l.yellow+exports.fg.d.gray+'yellow|'+
			exports.e+exports.bg.l.blue+exports.fg.d.gray+'blue|'+
			exports.e+exports.bg.l.pink+exports.fg.d.gray+'pink|'+
			exports.e+exports.bg.l.cyan+exports.fg.d.gray+'cyan|'+
			exports.e+exports.bg.l.white+exports.fg.d.gray+'white'+exports.e;
	message = message.replace(/\|/g,exports.e+exports.fg.l.white+'|'+exports.e);
	message = message.replace(/\./g,exports.e+exports.fg.l.red+'.'+exports.e);
	console.log(message+exports.e);

	message = 'foreground|fg.light|l.';
	message = message.replace(/[a-z]*/g, function(a, b){
	    return exports.e+exports.fg.l.gray+a+exports.e;
	});
	message += exports.e+exports.fg.l.gray+exports.bg.d.gray+'gray|'+
			exports.e+exports.fg.l.red+exports.bg.d.gray+'red|'+
			exports.e+exports.fg.l.green+exports.bg.d.gray+'green|'+
			exports.e+exports.fg.l.yellow+exports.bg.d.gray+'yellow|'+
			exports.e+exports.fg.l.blue+exports.bg.d.gray+'blue|'+
			exports.e+exports.fg.l.pink+exports.bg.d.gray+'pink|'+
			exports.e+exports.fg.l.cyan+exports.bg.d.gray+'cyan|'+
			exports.e+exports.fg.l.white+exports.bg.d.gray+'white'+exports.e;
	message = message.replace(/\|/g,exports.e+exports.fg.l.white+'|'+exports.e);
	message = message.replace(/\./g,exports.e+exports.fg.l.red+'.'+exports.e);
	console.log(message+exports.e);

	message = 'background|bg.dark|d.';
	message = message.replace(/[a-z]*/g, function(a, b){
	    return exports.e+exports.fg.l.gray+a+exports.e;
	});
	message += exports.e+exports.bg.d.gray+exports.fg.l.white+'gray|'+
			exports.e+exports.bg.d.red+exports.fg.l.white+'red|'+
			exports.e+exports.bg.d.green+exports.fg.l.white+'green|'+
			exports.e+exports.bg.d.yellow+exports.fg.d.gray+'yellow|'+
			exports.e+exports.bg.d.blue+exports.fg.l.white+'blue|'+
			exports.e+exports.bg.d.pink+exports.fg.l.white+'pink|'+
			exports.e+exports.bg.d.cyan+exports.fg.l.white+'cyan|'+
			exports.e+exports.bg.d.white+exports.fg.d.gray+'white'+exports.e;
	message = message.replace(/\|/g,exports.e+exports.fg.l.white+'|'+exports.e);
	message = message.replace(/\./g,exports.e+exports.fg.l.red+'.'+exports.e);
	console.log(message+exports.e);

	message = 'foreground|fg.dark|d.';
	message = message.replace(/[a-z]*/g, function(a, b){
	    return exports.e+exports.fg.l.gray+a+exports.e;
	});
	message += exports.e+exports.fg.d.gray+exports.bg.l.white+'gray|'+
			exports.e+exports.fg.d.red+exports.bg.d.gray+'red|'+
			exports.e+exports.fg.d.green+exports.bg.d.gray+'green|'+
			exports.e+exports.fg.d.yellow+exports.bg.d.gray+'yellow|'+
			exports.e+exports.fg.d.blue+exports.bg.d.gray+'blue|'+
			exports.e+exports.fg.d.pink+exports.bg.d.gray+'pink|'+
			exports.e+exports.fg.d.cyan+exports.bg.d.gray+'cyan|'+
			exports.e+exports.fg.d.white+exports.bg.d.gray+'white'+exports.e;
	message = message.replace(/\|/g,exports.e+exports.fg.l.white+'|'+exports.e);
	message = message.replace(/\./g,exports.e+exports.fg.l.red+'.'+exports.e);
	console.log(message+exports.e);
};
exports.docs = exports.help;
exports.example = exports.help;
