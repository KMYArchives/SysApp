
function slice(string, char, slice) {
	if (char == null) { char = ' '; }
	return string.split(char)[slice];
}

function capitalize(string) {
	if (typeof string !== 'string') return '';
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function cut(string, length, ending) {
	if (length == null) { length = 100; }
	if (ending == null) { ending = '...'; }

	if (string.length > length) {
		return string.substring(0, length - ending.length) + ending;
	} else {
		return string;
	}
}

function toDataURL(url, callback) {
	var xhr = new XMLHttpRequest();

	xhr.onload = function () {
		var reader = new FileReader();
		reader.onloadend = function () { callback(reader.result); }
		reader.readAsDataURL(xhr.response);
	};

	xhr.open('GET', url);
	xhr.responseType = 'blob';
	xhr.send();
}

function emailMask(email) {
	var previous = '',
		masked = email.replace(/([^@\.])/g, '*').split('');

	for (i = 0; i < masked.length; i++) {
		if (i <= 1 || previous == '.' || previous == '@') { masked[i] = email[i]; }
		previous = email[i];
	}

	return masked.join('');
}

function intFloat(number) {
	var n = number.toString(),
		r = '',
		x = 0;

	for (var i = n.length; i > 0; i--) {
		r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '');
		x = x == 2 ? 0 : x + 1;
	}

	return r.split('').reverse().join('');
}

function formatBytes(bytes, decimals = 2) {
	if (bytes.length === 0) return '0 Bytes';

	var dm = decimals < 0 ? 0 : decimals,
		i = Math.floor(Math.log(bytes.length) / Math.log(1024)),
		sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	return parseFloat((bytes.length / Math.pow(1024, i)).toFixed(dm)) + ' ' + sizes[i];
}

function formatArch(arch) {
	switch (arch.substring(0, 3).toLowerCase()) {
		case 'x86':
			return '32 bits';
		case 'x64':
			return '64 bits';
		case 'arm':
			return 'ARM';
		case 'cri':
			return 'CRIS';
		case 'm68':
			return 'M68 K';
		case 'mc6':
			return 'MC 6809';
		case 'mip':
			return 'Mips';
		case 'ppc':
			return 'PPC';
		case 'spa':
			return 'Sparc';
		case 'tms':
			return 'TMS 320'
		default:
			return 'Unknown';
	}
}

function percent(x, y, percent = 100, toFixed = 1) { return (x * percent / y).toFixed(toFixed) + '%'; }