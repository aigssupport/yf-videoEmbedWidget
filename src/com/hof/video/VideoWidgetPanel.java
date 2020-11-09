package com.hof.video;

import com.hof.mi.widgetcanvas.panelcollection.CanvasWidgetPanel;
import com.hof.mi.widgetcanvas.panelcollection.CanvasWidgetPanelInfo;

public class VideoWidgetPanel extends CanvasWidgetPanel {

    public VideoWidgetPanel(CanvasWidgetPanelInfo info) {
        super(info);
    }
    
    /**
     * Add our URL section to the CanvasWidgetPanel. 
     */
    @Override
    protected void buildSections() {
        super.buildSections();
        //Since we want the url section to be near the top of the panel, use add(1, section);
        sections.add(1, new VideoWidgetURLSection());
    }
    
}
