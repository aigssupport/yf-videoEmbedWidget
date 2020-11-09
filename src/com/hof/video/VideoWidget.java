package com.hof.video;

import com.hof.mi.interfaces.Resource;
import com.hof.mi.widgetcanvas.panelcollection.CanvasWidgetPanel;
import com.hof.mi.widgetcanvas.panelcollection.CanvasWidgetPanelInfo;
import com.hof.mi.widgetcanvas.widgettemplate.AbstractCodeTemplate;

public class VideoWidget extends AbstractCodeTemplate {

    /**
     * Name to be displayed to a user when they see this widget in the canvas panels.
     */
    @Override
    public String getTemplateTitle() {
        return "Video Widget";
    }

    /**
     * Add any files that we will need the front-end to be able to load.
     */
    @Override
    public void setupResources() {
        /*
         * These are both files that have been ourselves so we can define them without setting the isLibrary flag
         * These files will be loaded in a single request when the code widget is initialised
         */
        addResource(new Resource("resource/VideoWidget.js", "text/javascript"));
        addResource(new Resource("resource/VideoEmbedBuilder.js", "text/javascript"));
        
        /*
         *  This is a Third Party Library, so we want to set the isLibrary flag to true
         */
        addResource(new Resource("resource/lib/jsVideoParser.js", "text/javascript", true));
    }

    /**
     * Define the entry point for this widget to be resource/YouTubeWidget.js
     * When the widget is loaded, this is the file that will be first executed.
     */
    @Override
    public String getMainJavascriptPath() {
        return "resource/VideoWidget.js";
    }
    
    /**
     *  Return the implementation of the VideoWidgetPanel
     */
    @Override
    public CanvasWidgetPanel getPanel(CanvasWidgetPanelInfo panelInfo) {
        return new VideoWidgetPanel(panelInfo);
    }
}
