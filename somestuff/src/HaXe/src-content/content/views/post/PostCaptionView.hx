package content.views.post;
import content.views.common.DivView;
import js.JQuery;
import js.Lib;

/**
 * ...
 * @author MikeC
 */

class PostCaptionView extends DivView
{

	public function new() 
	{
		super("ptt_post_caption_container");		
			
		element.innerHTML = '<form><textarea id="ptt_caption_textarea" rows="5" cols="80" style="width: 100%">Add caption..</textarea></form>';
					
		// Start tinyMCE
		//Lib.eval('tinyMCE').init( { mode:"none", theme:"simple" } );	
		//Lib.eval('tinyMCE').execCommand("mceAddControl", false, "mce-editor");
	}
	
	public function getText() : String
	{
		return new JQuery('#ptt_caption_textarea').val();
	}
	
}