package content.views.header;
import chrome.Extension;
import content.views.common.ImageButton;

/**
 * ...
 * @author 
 */

class HeaderOptionButton extends ImageButton
{
	
	public function new(optionName:String, tooltip:String) 
	{
		super(
			Extension.getURL('images/' + optionName + ".png"),
			Extension.getURL('images/' + optionName + "_hover.png"),
			Extension.getURL('images/' + optionName + "_hover.png"),
			Extension.getURL('images/' + optionName + "_hover.png")
		);
		
		image.alt = tooltip;
		image.className = "ptt_header_option_button";
	}
	
}