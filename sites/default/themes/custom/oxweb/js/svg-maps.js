(function ($){
    function supportsSVG(){
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == "http://www.w3.org/2000/svg";
    }

    $(function(){
        if(supportsSVG()){
            $('.svg-map').each(function(){
                var $self = $(this);
                $('.map', $self).load($self.data('svg-src'), null, function() {
                    if(!$self.data('links')){
                        $('.text-links', $self).hide();
                    }
                    $('.map g', $self).click(function() {
                        // NB: slight odd [0], required as no explicit click function is bound
                        $('#map-link-' + $(this).attr('id') + ' a')[0].click(); 
                        return false;
                    });

                    // Map hover toggles text link hover
                    $('.map g', $self).hover(function(){
                        $('#map-link-' + $(this).attr('id') + ' a').addClass('hover'); 
                    }, function(){
                        $('#map-link-' + $(this).attr('id') + ' a').removeClass('hover'); 
                    });
                });
            });

            // Text link hovers toggle map shape hovers
            $('.svg-map .text-links li').hover(function(){
                $('#' + $(this).attr('id').replace('map-link-','')).attr('class', 'hover');
            }, function(){
                $('#' + $(this).attr('id').replace('map-link-','')).attr('class', '');
            });
        }
    });
}(jQuery));