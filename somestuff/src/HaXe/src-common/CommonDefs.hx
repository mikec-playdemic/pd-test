package ;

import models.UserModel;

typedef CreatePostDataPacket =
{
	var data : Dynamic;
	var type : String;
	var caption : String;
	var blog : TumblrBlogDetail;
}

typedef OpenContentWindowPacket =
{
	var type:String;
	var value:String;
	var user:SerialisableUser;
}