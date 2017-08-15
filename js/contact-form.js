    
$('#contact-form').bootstrapValidator({
//        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Name: {
                validators: {
                    notEmpty: {
                        message: 'The Name is required and cannot be empty'
                    }
                }
            },
            email: {
                validators: {
                    
                    /*-----------------------------------------*/
                    
                    
  $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
//        $('hideme').each( function(i){
//            
//            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height();
//            
//            /* If the object is completely visible in the window, fade it it */
//            if( bottom_of_window > bottom_of_object ){
//                
//                $(this).animate({'opacity':'1'},200);
//                    
//            }
//            
//        }); 
//    
//    });
//    
//});