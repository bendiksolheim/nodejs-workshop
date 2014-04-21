var getContentType = function(extension) {
	if (extension == "html") {
		return "text/html";
	} else if (extension == "jpg") {
		return "image/jpeg";
	} else {
		return "text/plain";
	}
}

exports.getContentType = getContentType;