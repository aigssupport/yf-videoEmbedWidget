define(['jquery', 'resource/lib/jsVideoParser.js'], function($, jsVideoParser) {
    
    /**
     * Helper function to get providers 
     */
    function getProvider(providerName) {
        let provider = VIDEO_PROVIDERS[providerName];
        if(!provider) {
            alert(providerName + ' is not supported');
        }
        return provider;
    }
    
    /**
     * Helper method to create an iframe with the passed videoURL
     */
    function createIframe(videoURL) {
        return $('<iframe/>').attr({
            src: videoURL,
            width: '100%',
            height: '100%'
        });
    }
    
    /**
     * Helper method to create a img element with the passed imageURL
     */
    function createImage(imageURL) {
        return $('<img/>').attr({
            src: imageURL
        }).css({
            width: '100%',
            height: '100%'
        });
    }
    
    /**
     * A dictionary  object containing all of the video embedding providers that this plugin supports
     * each item should define an 'image' function to allow embedding of thumbnails as well as a 
     * "video" function which allows embedding of the actual video itself
     */
    const VIDEO_PROVIDERS = {
            'youtube': {
                /**
                 * Image generation function for youtube. 
                 */
                'image': function($renderTo, videoObject, options) {
                    let imageURL = jsVideoParser.create({
                        videoInfo: videoObject,
                        format: 'shortImage'
                    });
                    
                    $renderTo.append(createImage(imageURL));
                }, 
                /**
                 * Video generation function for youtube
                 */
                'video': function($renderTo, videoObject, options) {
                    let videoURL = jsVideoParser.create({
                        videoInfo: videoObject,
                        format:'embed'
                    });
                    
                    $renderTo.append(createIframe(videoURL));
                }
            }, 
            'vimeo': {
                /**
                 * Image generation function for vimeo
                 */
                'image': function($renderTo, videoObject, options) {
                    let imageURL = jsVideoParser.create({
                        videoInfo: videoObject,
                        format: 'image'
                    });
                    
                    $renderTo.append(createImage(imageURL));
                },
                
                /**
                 * Video generation function for youtube
                 */
                'video':function($renderTo, videoObject, options) {
                    let videoURL = jsVideoParser.create({
                        videoInfo: videoObject,
                        format:'embed'
                    });
                    
                    $renderTo.append(createIframe(videoURL));
                }
            }
    }
    
    return {
        /**
         * Utility function to parse the video object using the videoParser.js
         */
        'getVideoObject': function(url) {
            return jsVideoParser.parse(url);
        },
        
        /**
         * Called when the CodeWidget is in edit mode to display the URL of the 
         */
        'embedImage': function($renderTo, videoObject, options) {
            let provider = getProvider(videoObject.provider);
            if(!provider) return;
            
            if(provider.image) {
                provider.image($renderTo, videoObject, options);
            } else if(provider.video) {
                //If there is no image function for the provider, then just embed the video
                provider.video($renderTo, videoObject, options);
            }
        },
        
        /**
         * Called when the code widget is in active mode to render the actual content
         */
        'embedVideo': function($renderTo, videoObject, options) {
            let provider = getProvider(videoObject.provider);
            if(!provider) return;
            
            if(provider.video) {
                provider.video($renderTo, videoObject, options);
            }
        }
    }
});