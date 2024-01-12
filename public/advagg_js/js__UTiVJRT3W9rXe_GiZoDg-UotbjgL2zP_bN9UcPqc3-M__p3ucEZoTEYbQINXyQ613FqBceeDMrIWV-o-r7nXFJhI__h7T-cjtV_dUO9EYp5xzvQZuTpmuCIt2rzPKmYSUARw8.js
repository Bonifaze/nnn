/*!
	Colorbox 1.6.3
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=n("button","Slideshow"),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",t(U).bind("click."+Z,function(){J.next()})),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);
;/*})'"*/
;/*})'"*/
/**
 * @file
 * Colorbox module init js.
 */

(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($('a, area, input', context).colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox').each(function(){
        // Only images are supported for the "colorbox" class.
        // The "photo" setting forces the href attribute to be treated as an image.
        var extendParams = {
          photo: true
        };
        // If a title attribute is supplied, sanitize it.
        var title = $(this).attr('title');
        if (title) {
          extendParams.title = Drupal.checkPlain(title);
        }
        $(this).colorbox($.extend({}, settings.colorbox, extendParams));
      });

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * @file
 * Colorbox module style js.
 */

(function ($) {

Drupal.behaviors.initColorboxPlainStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Make all the controls invisible.
      $('#cboxCurrent, #cboxSlideshow, #cboxPrevious, #cboxNext', context).addClass('element-invisible');
      // Replace "Close" with "×" and show.
      $('#cboxClose', context).html('\327').addClass('cbox-close-plain');
      // Hide empty title.
      if ($('#cboxTitle:empty', context).length == true) {
        $('#cboxTitle', context).hide();
      }
      $('#cboxLoadedContent', context).bind('mouseover', function () {
        $('#cboxClose', context).animate({opacity: 1}, {queue: false, duration: "fast"});
        if ($('#cboxTitle:empty', context).length == false) {
          $('#cboxTitle', context).slideDown();
        }
      });
      $('#cboxOverlay', context).bind('mouseover', function () {
        $('#cboxClose', context).animate({opacity: 0}, {queue: false, duration: "fast"});
        if ($('#cboxTitle:empty', context).length == false) {
          $('#cboxTitle', context).slideUp();
        }
      });
    });
    $(context).bind('cbox_closed', function () {
      $('#cboxClose', context).removeClass('cbox-close-plain');
    });
  }
};

})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * @file
 * Colorbox module load js.
 */
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space.
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        if (e[2]) {
          e[2] = Drupal.checkPlain(e[2]);
        }
        p[e[1]] = e[2];
      }
      return p;
    };

    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var href = $(this).attr('href');
        if (!hrefIsSafe(href)) {
          return;
        }

        var params = $.urlParams(href);
        if (!params.hasOwnProperty('title')) {
          // If a title attribute is supplied, sanitize it.
          var title = $(this).attr('title');
          if (title) {
            params.title = Drupal.checkPlain(title);
          }
        }
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

/**
 * Returns true if the passed-in href string is safe for colorbox_load.
 *
 * @param href
 *   The href string to be tested.
 *
 * @return
 *   Boolean true if the href is safe.
 */
function hrefIsSafe(href) {
  var normalizedUrl = Drupal.absoluteUrl(href);

  // Only local, non-file-system URLs are allowed.
  if (!Drupal.urlIsLocal(normalizedUrl)) {
    return false;
  }

  // Reject uploaded files from the public or private file system.
  if (normalizedUrl.indexOf(Drupal.settings.colorbox.file_public_path) !== -1 ||
    normalizedUrl.match(/\/system\/files\//) ||
    normalizedUrl.match(/[?|&]q=system\/files\//)) {
    return false;
  }

  // All checks passed.
  return true;
}

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
/**
 * Media Colorbox behavior.
 */
Drupal.behaviors.initMediaColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      console.log('You must install the Colorbox library.');
      return;
    }
    var enableAudioPlaylist = false;

    $('a.media-colorbox', context).once('init-media-colorbox', function() {

      // Merge Colorbox settings with Media Colorbox settings from data attributes.
      var options = jQuery.extend({}, settings.colorbox);
      var mediaColorboxSettings = {};
      if($(this).data('mediaColorboxFixedWidth') > 0) {
        mediaColorboxSettings = {width: $(this).data('mediaColorboxFixedWidth')};
        jQuery.extend(options, mediaColorboxSettings);
      }
      if($(this).data('mediaColorboxFixedHeight') > 0){
        mediaColorboxSettings = {height: $(this).data('mediaColorboxFixedHeight')};
        jQuery.extend(options, mediaColorboxSettings);
      }

      // Set up the callback and listener to go to to next slide
      $(this).colorbox(options);
      if($(this).data('mediaColorboxAudioPlaylist')){
        enableAudioPlaylist = true;
      }
    });

    // Set up the callback and listener to go to to next slide
    $(document).bind('cbox_complete', function() {
      if(enableAudioPlaylist) {
        $("audio").bind("ended", function(event) {
          setTimeout($.colorbox.next, 100);
        });
      }
      $("#cboxLoadedContent img").bind("click", function (event) {
        setTimeout($.colorbox.next, 0);
      });
      $("#cboxLoadedContent img").css('cursor', 'pointer');
    });
  }
};
})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {

  Drupal.behaviors.leaflet = {
    attach:function (context, settings) {

      $(settings.leaflet).each(function () {
        // skip to the next iteration if the map already exists
        var container = L.DomUtil.get(this.mapId);
        if (!container || container._leaflet_id) {
          return;
        }

        // load a settings object with all of our map settings
        var settings = {};
        for (var setting in this.map.settings) {
          settings[setting] = this.map.settings[setting];
        }

        // instantiate our new map
        var lMap = new L.Map(this.mapId, settings);
        lMap.bounds = [];

        // add map layers
        var layers = {}, overlays = {};
        var i = 0;
        for (var key in this.map.layers) {
          var layer = this.map.layers[key];
          var map_layer = Drupal.leaflet.create_layer(layer, key);
          //layers[key] = map_layer;

          // Distinguish between "base layers" and "overlays".
          // Fall back to "base" in case "layer_type" has not been defined in
          // hook_leaflet_map_info()
          layer.layer_type = (typeof layer.layer_type === 'undefined') ? 'base' : layer.layer_type;
          // As stated in http://leafletjs.com/examples/layers-control,
          // when using multiple base layers, only one of them should be added
          // to the map at instantiation, but all of them should be present in
          // the base layers object when creating the layers control.
          // See statement L.control.layers(layers, overlays) much further below.
          switch (layer.layer_type) {
            case 'overlay':
              //lMap.addLayer(map_layer);
              overlays[key] = map_layer;
              break;
            default:
              if (i === 0 /*|| !this.map.settings.layerControl*/) {
                lMap.addLayer(map_layer);
                i++;
              }
              layers[key] = map_layer;
              break;
          }
          i++;
        }

        var switchEnable = false;
        for (var key in layers) {
          if (layers[key].options.switchLayer) {
            layers[key].setSwitchLayer(layers[layers[key].options.switchLayer]);
            switchEnable = true;
          }
        }
        if (switchEnable) {
          switchManager = new SwitchLayerManager(lMap, {baseLayers: layers});
        }

        // keep an instance of leaflet layers
        this.map.lLayers = layers;

        // keep an instance of map_id
        this.map.map_id = this.mapId;

        // add features
        for (i = 0; i < this.features.length; i++) {
          var feature = this.features[i];
          var lFeature;

          // dealing with a layer group
          if (feature.group) {
            var lGroup = new L.LayerGroup();
            for (var groupKey in feature.features) {
              var groupFeature = feature.features[groupKey];
              lFeature = leaflet_create_feature(groupFeature, lMap);
              if (groupFeature.popup) {
                lFeature.bindPopup(groupFeature.popup);
              }
              lGroup.addLayer(lFeature);

              // Allow others to do something with the feature within a group.
              $(document).trigger('leaflet.feature', [lFeature, feature]);
            }

            // add the group to the layer switcher
            overlays[feature.label] = lGroup;

            lMap.addLayer(lGroup);
          }
          else {
            lFeature = leaflet_create_feature(feature, lMap);
            lMap.addLayer(lFeature);

            if (feature.popup) {
              lFeature.bindPopup(feature.popup);
            }

            // Allow others to do something with the feature.
            $(document).trigger('leaflet.feature', [lFeature, feature]);
          }

        }

        // add layer switcher
        if (this.map.settings.layerControl) {
          L.control.layers(layers, overlays).addTo(lMap);
        }

        // center the map
        var zoom = this.map.settings.zoom ? this.map.settings.zoom : this.map.settings.zoomDefault;
        if (this.map.center && (this.map.center.force || this.features.length === 0)) {
          lMap.setView(new L.LatLng(this.map.center.lat, this.map.center.lon), zoom);
        }
        else if (this.features.length > 0) {
          Drupal.leaflet.fitbounds(lMap);
          if (this.map.settings.zoom) { // or: if (zoom) ?
            lMap.setZoom(zoom);
          }
        }

        // add attribution
        if (this.map.settings.attributionControl && this.map.attribution) {
          lMap.attributionControl.setPrefix(this.map.attribution.prefix);
          lMap.attributionControl.addAttribution(this.map.attribution.text);
        }

        // add the leaflet map to our settings object to make it accessible
        this.lMap = lMap;

        // allow other modules to get access to the map object using jQuery's trigger method
        $(document).trigger('leaflet.map', [this.map, lMap]);

        // Destroy features so that an AJAX reload does not get parts of the old set.
        // Required when the View has "Use AJAX" set to Yes.
        this.features = null;
      });

      function leaflet_create_feature(feature, lMap) {
        var lFeature;
        switch (feature.type) {
          case 'point':
            lFeature = Drupal.leaflet.create_point(feature, lMap);
            break;
          case 'linestring':
            lFeature = Drupal.leaflet.create_linestring(feature, lMap);
            break;
          case 'polygon':
            lFeature = Drupal.leaflet.create_polygon(feature, lMap);
            break;
          case 'multipolyline':
            feature.multipolyline = true;
            // no break;
          case 'multipolygon':
            lFeature = Drupal.leaflet.create_multipoly(feature, lMap);
            break;
          case 'json':
            lFeature = Drupal.leaflet.create_json(feature.json, lMap);
            break;
          case 'popup':
            lFeature = Drupal.leaflet.create_popup(feature, lMap);
            break;
          case 'circle':
            lFeature = Drupal.leaflet.create_circle(feature, lMap);
            break;
          case 'circlemarker':
            lFeature = Drupal.leaflet.create_circlemarker(feature, lMap);
            break;
          case 'rectangle':
            lFeature = Drupal.leaflet.create_rectangle(feature, lMap);
            break;
        }

        // assign our given unique ID, useful for associating nodes
        if (feature.leaflet_id) {
          lFeature._leaflet_id = feature.leaflet_id;
        }

        var options = {};
        if (feature.options) {
          for (var option in feature.options) {
            options[option] = feature.options[option];
          }
          lFeature.setStyle(options);
        }

        return lFeature;
      }

    }
  };

  Drupal.leaflet = {

    isOldVersion: function () {
      return !(parseInt(L.version) >= 1); // version may start with '0' or '.'
    },

    create_layer: function (layer, key) {
      // Use a Zoomswitch Layer extension to enable zoom-switch option.
      var map_layer = new L.TileLayerZoomSwitch(layer.urlTemplate);
      map_layer._leaflet_id = key;

      if (layer.options) {
        for (var option in layer.options) {
          map_layer.options[option] = layer.options[option];
        }
      }

      // layers served from TileStream need this correction in the y coordinates
      // TODO: Need to explore this more and find a more elegant solution
      if (layer.type == 'tilestream') {
        map_layer.getTileUrl = function (tilePoint) {
          this._adjustTilePoint(tilePoint);
          var zoom = this._getZoomForUrl();
          return L.Util.template(this._url, L.Util.extend({
            s: this._getSubdomain(tilePoint),
            z: zoom,
            x: tilePoint.x,
            y: Math.pow(2, zoom) - tilePoint.y - 1
          }, this.options));
        };
      }
      return map_layer;
    },

    create_circle: function(circle, lMap) {
      var latLng = new L.LatLng(circle.lat, circle.lon);
      latLng = latLng.wrap();
      lMap.bounds.push(latLng);
      if (circle.radius) {
        // @deprecated
        return L.circle(latLng, circle.radius, circle.options);
      }
      return new L.Circle(latLng, circle.options);
    },

    create_circlemarker: function(circle, lMap) {
      var latLng = new L.LatLng(circle.lat, circle.lon);
      latLng = latLng.wrap();
      lMap.bounds.push(latLng);
      return new L.CircleMarker(latLng, circle.options);
    },

    create_rectangle: function(box, lMap) {
      var bounds = box.bounds,
        southWest = new L.LatLng(bounds.s, bounds.w),
        northEast = new L.LatLng(bounds.n, bounds.e),
        latLng = new L.LatLngBounds(southWest, northEast);
      lMap.bounds.push(latLng);
      return new L.Rectangle(latLng, box.settings);
    },

    create_point: function(marker, lMap) {
      var latLng = new L.LatLng(marker.lat, marker.lon);
      latLng = latLng.wrap();
      lMap.bounds.push(latLng);
      var lMarker;

      if (marker.html) {
        if (marker.html_class) {
          var icon = new L.DivIcon({html: marker.html, className: marker.html_class});
        }
        else {
          var icon = new L.DivIcon({html: marker.html});
        }
        // override applicable marker defaults
        if (marker.icon.iconSize) {
          icon.options.iconSize = new L.Point(parseInt(marker.icon.iconSize.x, 10), parseInt(marker.icon.iconSize.y, 10));
        }
        if (marker.icon.iconAnchor) {
          icon.options.iconAnchor = new L.Point(parseFloat(marker.icon.iconAnchor.x), parseFloat(marker.icon.iconAnchor.y));
        }
        lMarker = new L.Marker(latLng, {icon:icon});
      }
      else if (marker.icon) {
        var icon = new L.Icon({iconUrl: marker.icon.iconUrl});

        // override applicable marker defaults
        if (marker.icon.iconSize) {
          icon.options.iconSize = new L.Point(parseInt(marker.icon.iconSize.x, 10), parseInt(marker.icon.iconSize.y, 10));
        }
        if (marker.icon.iconAnchor) {
          icon.options.iconAnchor = new L.Point(parseFloat(marker.icon.iconAnchor.x), parseFloat(marker.icon.iconAnchor.y));
        }
        if (marker.icon.popupAnchor) {
          icon.options.popupAnchor = new L.Point(parseFloat(marker.icon.popupAnchor.x), parseFloat(marker.icon.popupAnchor.y));
        }
        if (marker.icon.shadowUrl !== undefined) {
          icon.options.shadowUrl = marker.icon.shadowUrl;
        }
        if (marker.icon.shadowSize) {
          icon.options.shadowSize = new L.Point(parseInt(marker.icon.shadowSize.x, 10), parseInt(marker.icon.shadowSize.y, 10));
        }
        if (marker.icon.shadowAnchor) {
          icon.options.shadowAnchor = new L.Point(parseInt(marker.icon.shadowAnchor.x, 10), parseInt(marker.icon.shadowAnchor.y, 10));
        }
        if (marker.icon.zIndexOffset) {
          icon.options.zIndexOffset = marker.icon.zIndexOffset;
        }
        if (marker.icon.className) {
          icon.options.className = marker.icon.className;
        }
        var options = {icon:icon};
        if (marker.zIndexOffset) {
          options.zIndexOffset = marker.zIndexOffset;
        }
        lMarker = new L.Marker(latLng, options);
      }
      else {
        lMarker = new L.Marker(latLng);
      }

      if (marker.label) {
        lMarker.options.title = marker.label;
      }

      return lMarker;
    },

    create_linestring: function(polyline, lMap) {
      var latlngs = [];
      for (var i = 0; i < polyline.points.length; i++) {
        var latlng = new L.LatLng(polyline.points[i].lat, polyline.points[i].lon);
        latlng = latlng.wrap();
        latlngs.push(latlng);
        lMap.bounds.push(latlng);
      }
      return new L.Polyline(latlngs);
    },

    create_polygon: function(polygon, lMap) {
      var latlngs = [];
      for (var i = 0; i < polygon.points.length; i++) {
        var latlng = new L.LatLng(polygon.points[i].lat, polygon.points[i].lon);
        latlng = latlng.wrap();
        latlngs.push(latlng);
        lMap.bounds.push(latlng);
      }
      return new L.Polygon(latlngs);
    },

    create_multipoly: function(multipoly, lMap) {
      var polygons = [];
      for (var x = 0; x < multipoly.component.length; x++) {
        var latlngs = [];
        var polygon = multipoly.component[x];
        for (var i = 0; i < polygon.points.length; i++) {
          var latlng = new L.LatLng(polygon.points[i].lat, polygon.points[i].lon);
          latlng = latlng.wrap();
          latlngs.push(latlng);
          lMap.bounds.push(latlng);
        }
        polygons.push(latlngs);
      }
      if (this.isOldVersion()) {
        return multipoly.multipolyline ? new L.MultiPolyline(polygons) : new L.MultiPolygon(polygons);
      }
      return multipoly.multipolyline ? new L.Polyline(polygons): new L.Polygon(polygons);
    },

    create_json:function(json, lMap) {
      lJSON = new L.GeoJSON(json, {
        onEachFeature:function (feature, layer) {
          var has_properties = (typeof feature.properties != 'undefined');

          // bind popups
          if (has_properties && typeof feature.properties.popup != 'undefined') {
            layer.bindPopup(feature.properties.popup);
          }

          for (var layer_id in layer._layers) {
            for (var i in layer._layers[layer_id]._latlngs) {
              lMap.bounds.push(layer._layers[layer_id]._latlngs[i]);
            }
          }

          if (has_properties && typeof feature.properties.style != 'undefined') {
            layer.setStyle(feature.properties.style);
          }

          if (has_properties && typeof feature.properties.leaflet_id != 'undefined') {
            layer._leaflet_id = feature.properties.leaflet_id;
          }
        }
      });

      return lJSON;
    },

    create_popup: function(popup) {
      var latLng = new L.LatLng(popup.lat, popup.lon);
      this.bounds.push(latLng);
      var lPopup = new L.Popup();
      lPopup.setLatLng(latLng);
      if (popup.content) {
        lPopup.setContent(popup.content);
      }
      return lPopup;
    },

    fitbounds:function (lMap) {
      if (lMap.bounds.length > 0) {
        lMap.fitBounds(new L.LatLngBounds(lMap.bounds));
      }
    }
  };

  // Zoomswitch method cribbed liberally from:
  // http://www.makina-corpus.org/blog/leaflet-zoom-switcher
  L.TileLayerZoomSwitch = L.TileLayer.extend({
    includes: L.Mixin.Events,

    options: {
      // switchZoomUnder: when zoom < switchZoomUnder, then switch to switchLayer
      switchZoomUnder: -1,
      // switchZoomAbove: when zoom >= switchZoomAbove, then switch to switchLayer
      switchZoomAbove: -1,
      switchLayer: null
    },

    setSwitchLayer: function (layer) {
      this.options.switchLayer = layer;
    },

    getSwitchZoomUnder: function () {
      return this.options.switchZoomUnder;
    },

    getSwitchZoomAbove: function () {
      return this.options.switchZoomAbove;
    },

    getSwitchLayer: function () {
      return this.options.switchLayer;
    }

  });

  L.tileLayerZoomSwitch = function (url, options) {
    return new L.TileLayerZoomSwitch(url, options);
  };

  /*
   * SwitchLayerManager is a custom class for managing base layer automatic switching according to the current zoom level
   */

  SwitchLayerManager = L.Class.extend({

    _map: null,

    options: {
      baseLayers: null
    },

    initialize: function (map, options) {
      this._map = map;
      L.Util.setOptions(this, options);

      this._map.on({
        'zoomend': this._update
      }, this)

    },

    _update: function (e) {
      var zoom = this._map.getZoom();

      for (var i in this.options.baseLayers) {
        var curBL = this.options.baseLayers[i];
        var zoomUnder = curBL.getSwitchZoomUnder();
        var zoomAbove = curBL.getSwitchZoomAbove();
        var switchLayer = curBL.getSwitchLayer();

        // If layer got a switchlayer, and if layer actually displayed
        if (switchLayer && curBL._map != null) {
        //if (switchLayer) {
          if(zoomUnder != -1 && zoom < zoomUnder) {
            this._map.removeLayer(curBL);
            this._map.addLayer(switchLayer, false);
          }

          if(zoomAbove != -1 && zoom >= zoomAbove) {
            this._map.removeLayer(curBL);
            this._map.addLayer(switchLayer, false);
          }
        }
      }
    }
  });

})(jQuery);

;/*})'"*/
;/*})'"*/
