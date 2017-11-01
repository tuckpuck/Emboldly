$(function () {
	var $content = $('#jsonContent');
	var data = {
		rss_url: 'https://medium.com/feed/tuckertriggs/tagged/technology'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    console.log(response);
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function (k, item) {
				var visibleSm;
				if(k < 3){
					visibleSm = '';
				 } else {
					 visibleSm = ' visible-sm';
				 }
				output += '<div class="col-md-12 col-lg-4' + visibleSm + '">';
				output += '<div class="blog-post"><header>';
				var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
				var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
				var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
				var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
				var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
				output += '<div class="blog-element"><a href="'+ item.link + '"><img class="img-responsive" src="' + src + '" width="360px" height="240px"></div></header>';
				output += '<div class="blog-content"><h4>' + item.title + '</a></h4>';
				output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';
				output += '</div></div></div>';
				return k < 3;
			});
			$content.html(output);
		}
	});
});
