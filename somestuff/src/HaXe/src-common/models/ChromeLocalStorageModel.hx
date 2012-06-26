package models;
import js.Lib;

/**
 * ...
 * @author MikeC
 */

class ChromeLocalStorageModel 
{

	public function get(key:String) : Dynamic
	{
		var o = Lib.eval('localStorage');
		return untyped { o[key]; };
	}
	
	public function set(key:String, val:Dynamic) : Void
	{
		trace('Saving in localStorage: '+key+" :: "+val);
		var o = Lib.eval('localStorage');
		untyped { o[key] = val; }
	}
	
}