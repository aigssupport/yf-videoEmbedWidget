package com.hof.video;

import com.hof.parameters.GeneralPanelOptions;
import com.hof.parameters.InputType;
import com.hof.parameters.Parameter;
import com.hof.parameters.ParameterDisplayRule;
import com.hof.parameters.ParameterImpl;
import com.hof.parameters.ParameterSection;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class VideoWidgetURLSection extends ParameterSection {

    /**
     * SectionKey is used by the front-end to create a unique panel/section combination to allow
     * quick removal, what is returned here should be unique
     */
    @Override
    public String getSectionKey() {
        return "youtube-url";
    }

    /**
     * The name of the Section that will be displayed to the user, if the section has display name
     * turned on
     */
    @Override
    public String getName() {
        return "Video URL";
    }

    /**
     * Parameters that will be available to a user in this section
     */
    @Override
    public List<Parameter> getParameters() {
        List<Parameter> parameterList = new LinkedList<>();
        
        ParameterImpl p = new ParameterImpl();
        p.setName("Video URL"); //Name that will be displayed to the user when they are editing this.
        p.setProperty("videoURL"); //Property that this will be stored as in the database, and the name of the property to access when using getFormatValue
        p.setInputType(InputType.TEXTBOX); //Define this option as a textbox
        p.setModelKey("formats"); //All of the options are saved in formats. 
        p.addViewOption("width", "240px"); //Set the display width of the textbox to 250px
        parameterList.add(p);
        return parameterList;
    }

    
    @Override
    public List<ParameterDisplayRule> getDisplayRules() {
        return null;
    }

    @Override
    public GeneralPanelOptions getSectionOptions() {
        return null;
    }

    @Override
    public Map<String, ?> getData() {
        return null;
    }

}
