function session(action = null, session = null, value = null) {
	switch (action) {
		case 'create':
			return localStorage.setItem(session, value);
		case 'delete':
			return localStorage.removeItem(session);
		case 'get':
			return localStorage.getItem(session);
	}
}

function b64toBlob(b64Data, contentType, sliceSize) {
	contentType = contentType || '';
	sliceSize = sliceSize || 512;

	var byteCharacters = atob(b64Data),
		byteArrays = [];

	for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		var slice = byteCharacters.slice(offset, offset + sliceSize);

		var byteNumbers = new Array(slice.length);

		for (var i = 0; i < slice.length; i++) { byteNumbers[i] = slice.charCodeAt(i); }

		var byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}

	return new Blob(byteArrays, { type: contentType });
}

function copyToClipboard(text) {
    var dummy = document.createElement('input');
    document.body.appendChild(dummy);
    
    dummy.value = text;
    dummy.select();
    
    document.execCommand('copy');
    document.body.removeChild(dummy);
}