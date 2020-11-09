define(['jquery', 'resource/VideoEmbedBuilder.js'], function($, VideoEmbedBuilder) {
    let VideoWidget = function(options) {
        let messenger = options.messenger;
        //Get the Video URL and parse it using the VideoEmbedBuilder function
        let videoId = messenger.getOptionValue('videoURL');
        let videoObject = VideoEmbedBuilder.getVideoObject(videoId);
        
        let edit = messenger.edit;
        
        //If VideoEmbedBuilder generates an object for us, we can add it to the page.
        if(videoObject) {
            
            //If this is a widget in edit mode, just call embedImage otherwise embed the video
            if(edit) {
                VideoEmbedBuilder.embedImage($(options.element), videoObject);
            } else {
                VideoEmbedBuilder.embedVideo($(options.element), videoObject);
            }
        } else if(edit) {
            options.element.innerText = 'Please add a Video URL in the properties panel';
        }
    }
    return VideoWidget;
});