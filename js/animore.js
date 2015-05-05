require.config({
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'libs/jquery-1.8.2.min',
        modernizr: 'libs/modernizr',
        masonry: 'libs/masonry.pkgd.min',
        cbpGridGallery: 'cbpGridGallery',
        classie: 'libs/classie',
        ace: 'ace/ace',
        ini: 'ini',
        animore: 'animore'
    },
    shim: {
        'cbpGridGallery': ['modernizr', 'masonry', 'classie'],
        'animore': ['jquery']
    }
});

require(['jquery', 'cbpGridGallery', 'ini'], function($, cbpGridGallery, Ini) {
	//$(document).ready(function() {
		// 首页动效list渲染
	    aniList('grid', 10, Ini.pageList);
	    //菜单栏切换
		var _old;
		$('#J_menu').delegate('td', 'click', function(e) {
			if(_old) {
				_old.removeClass('active');
			}else {
				$('#J_menu .active').removeClass('active');
			}
			$(this).addClass('active');
			_old = $(this);
		});
		
	//});

	function aniList(id, len, pageList) {
		len = (pageList.length >= len) ? len : pageList.length;
		var node = $('#' + id);
		var str = '<li class="grid-sizer"></li>';
		node.css('display', 'none');
		for(var i = 0; i < len; i++) {
			str += '<li><figure id="J_grid_list' + i + '"></figure></li>';
		}
		node.append(str);
		
		for(var i = 0, j=0; i < len; i++) {
			$('#J_grid_list' + i).load('tmpl/' + pageList[i] + '.html .container', function() {
				
				j++;

				var jsUrl = $(this).children('.container').attr('jsUrl') || '';
				if(jsUrl) {
					$.get(jsUrl);
				}
				if(j == len) {
					new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
				}

			});
		}
		node.css('display', 'block');

	}

});