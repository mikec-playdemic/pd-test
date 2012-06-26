package ;

/**
 * ...
 * @author MikeC
 */

extern class ChromeExOAuth 
{
	static function initBackgroundPage(params:Dynamic) : ChromeExOAuth;
	function authorize(callbackHandler:Void->Void):Void;
	function sendSignedRequest(uri:String, callbackHandler:Dynamic->Dynamic->Void, requestPacket:Dynamic):Void;
	function clearTokens() : Void;
	function hasToken() : Bool;
}