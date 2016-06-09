$(document).ready(function() {

	var loaderhtml = '<div id="progress" class="waiting"><dt></dt><dd></dd></div>';
	var loadercss  = '<!-- Loader Icone --><style>#progress {position: fixed;z-index: 2147483647;top: 0;left: -6px;width: 0%;height: 2px;background: #d8e01f;-moz-border-radius: 1px;-webkit-border-radius: 1px;border-radius: 1px;-moz-transition: width 500ms ease-out, opacity 400ms linear;-ms-transition: width 500ms ease-out, opacity 400ms linear;-o-transition: width 500ms ease-out, opacity 400ms linear;-webkit-transition: width 500ms ease-out, opacity 400ms linear;transition: width 500ms ease-out, opacity 400ms linear;}#progress.done {opacity: 0;}#progress dd,#progress dt {position: absolute;top: 0;height: 2px;-moz-box-shadow: #d8e01f 1px 0 6px 1px;-ms-box-shadow: #d8e01f 1px 0 6px 1px;-webkit-box-shadow: #d8e01f 1px 0 6px 1px;box-shadow: #d8e01f 1px 0 6px 1px;-moz-border-radius: 100%;-webkit-border-radius: 100%;border-radius: 100%;}#progress dd {opacity: 1;width: 20px;right: 0;clip: rect(-6px, 22px, 14px, 10px);}#progress dt {opacity: 1;width: 180px;right: -80px;clip: rect(-6px, 90px, 14px, -6px);}@-moz-keyframes pulse {30% {opacity: 1;}60% {opacity: 0;}100% {opacity: 1;}}@-ms-keyframes pulse {30% {opacity: 0.6;}60% {opacity: 0;}100% {opacity: 0.6;}}@-o-keyframes pulse {30% {opacity: 1;}60% {opacity: 0;}100% {opacity: 1;}}@-webkit-keyframes pulse {30% {opacity: 0.6;}60% {opacity: 0;}100% {opacity: 0.6;}}@keyframes pulse {30% {opacity: 1;}60% {opacity: 0;}100% {opacity: 1;}}#progress.waiting dd,#progress.waiting dt {-moz-animation: pulse 2s ease-out 0s infinite;-ms-animation: pulse 2s ease-out 0s infinite;-o-animation: pulse 2s ease-out 0s infinite;-webkit-animation: pulse 2s ease-out 0s infinite;animation: pulse 2s ease-out 0s infinite;}.hideme{opacity: 0;}</style><!-- /Loader Icone -->';
	
	$('head').append(loadercss);
	$('body').append(loaderhtml);

    $({property: 0}).animate({property: 105}, {
        duration: 4000,
        step: function() {
            var _percent = Math.round(this.property);
            $('#progress').css('width',  _percent+"%");
            if(_percent == 105) {
                $("#progress").addClass("done");
            }
        },
        complete: function() {
        }
    });
    
});

var url = 'https://www.iconeinternet.com.br/plugin/footer/';
document.getElementById('development').innerHTML = '<iframe src='+url+' width="100%" height="100px" border="0" style="border:0;">';