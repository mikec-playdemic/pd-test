package content.models;
import base.BaseModel;
import models.postTypes.IPostType;
import models.postTypes.LinkPostType;
import models.postTypes.PhotoPostType;
import models.postTypes.QuotePostType;
import models.postTypes.TextPostType;
import hsl.haxe.Signaler;
import hsl.haxe.DirectSignaler;

/**
 * ...
 * @author MikeC
 */

class PostTypesModel extends BaseModel
{
	public var types : Array<IPostType>;
	public var selectedTab(default, set_selectedTab):IPostType;
	public var selectedTabChanged : Signaler<Void>;
	
	public function new() 
	{
		super();
		types = [];
		types.push(new PhotoPostType());
		types.push(new TextPostType());
		types.push(new LinkPostType());
		types.push(new QuotePostType());
		selectedTabChanged = new DirectSignaler(this);
		selectedTab = types[0];
	}	
	
	public function setInitialSelectedType(tname:String) : Void
	{
		for (t in types) if (t.name == tname) selectedTab = t;
	}
		
	private function set_selectedTab(value:IPostType):IPostType 
	{
		selectedTab = value;
		selectedTabChanged.dispatch();
		return selectedTab;
	}
}