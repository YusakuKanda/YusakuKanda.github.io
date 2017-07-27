$(function() {

	/* 2017年作品　モーダルウィンドウ */
	$(".modal-link").animatedModal({
	  modalTarget: "animatedModal_01",
	  beforeOpen: function(link) {
	    var title = link.attr('data-modal-title');
	    $('#animatedModal_01 h3').text(title);

	    var concept = link.find('.hidden-concept').html();
	    $('#animatedModal_01 .concept').html(concept);

	    var appendThumbnail = function(picture, pictureNo) {
	      if (picture) {
	        var listItem = $('<li id="thumbnail' + pictureNo + '" class="select"></li>');
	        var anchor = $('<a href="' + picture + '"></a>');
	        var image = $('<img src="' + picture + '" alt="Picture ' + pictureNo + '" />');
	        anchor.append(image);
	        listItem.append(anchor);
	        $('#animatedModal_01 .contents').append(listItem);
	      }
	    };

	    $('#animatedModal_01 .contents *').remove();

	    var picture1 = link.attr('data-image-url-1');
	    var picture2 = link.attr('data-image-url-2');
	    var picture3 = link.attr('data-image-url-3');

	    if (picture2 || picture3) {
	      appendThumbnail(picture1, 1);
	      appendThumbnail(picture2, 2);
	      appendThumbnail(picture3, 3);
				onThumbnailClick();
	    }

	    $('#animatedModal_01 .picture img').attr('src', picture1);
	  }
	});


	/*サムネイル*/
	function onThumbnailClick() {
		$(".select a").click(function() {
			$(".picture img")
				.attr("src", $(this).attr("href"))
				.css({ opacity: 0 })
				.animate({ opacity: 1 }, 1200);
			return false;
		});
	}


	/*レスポンシブ*/
	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  percentPosition: true
	});

});
