updateContext();

// Listen for clicking on the icon, open the options page
chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.create({url:"options.html"});
});

// ---------------------------------------------------------------------------------------------------------------------------------------- //

function updateContext()
{
	chrome.contextMenus.removeAll();

	var additionalBlogsStr = localStorage["additional-blogs-txt"];
	if(!additionalBlogsStr || additionalBlogsStr=="")
	{
		chrome.contextMenus.create({"title": "Post Image To Tumblr", "contexts":["image"], "onclick": function(info, tab){postImage(info,tab,"Default Blog")} });
		chrome.contextMenus.create({"title": "Post Text To Tumblr", "contexts":["selection"], "onclick": function(info, tab){postText(info,tab,"Default Blog")} });
		chrome.contextMenus.create({"title": "Post Page To Tumblr", "contexts":["page"], "onclick": function(info, tab){postPage(info,tab,"Default Blog")} });
		chrome.contextMenus.create({"title": "Post Link To Tumblr", "contexts":["link"], "onclick": function(info, tab){postLink(info,tab,"Default Blog")} });
	}
	else
	{
		var blogs = additionalBlogsStr.split(",");
		for (var i in blogs) { blogs[i] = $.trim(blogs[i]);	 }
		blogs.unshift("Default Blog");
		
		var m  = chrome.contextMenus.create({"title": "Post Image To Tumblr..", "contexts":["image"]});
		$.each(blogs,function(j,b) {	chrome.contextMenus.create({"title": b+"", "parentId":m, "contexts":["image"], "onclick": function(info, tab){postImage(info,tab,b+"")}}); });	
		
		m  = chrome.contextMenus.create({"title": "Post Text To Tumblr..", "contexts":["selection"]});
		$.each(blogs,function(j,b) {	chrome.contextMenus.create({"title": b+"", "parentId":m, "contexts":["selection"], "onclick": function(info, tab){postText(info,tab,b+"")}}); });	
		
		m  = chrome.contextMenus.create({"title": "Post Page To Tumblr..", "contexts":["page"]});
		$.each(blogs,function(j,b) {	chrome.contextMenus.create({"title": b+"", "parentId":m, "contexts":["page"], "onclick": function(info, tab){postPage(info,tab,b+"")}}); });	
		
		m  = chrome.contextMenus.create({"title": "Post Link To Tumblr..", "contexts":["link"]});
		$.each(blogs,function(j,b) {	chrome.contextMenus.create({"title": b+"", "parentId":m, "contexts":["link"], "onclick": function(info, tab){postLink(info,tab,b+"")}}); });			
	}
}

// ---------------------------------------------------------------------------------------------------------------------------------------- //

function postImage(info, tab, blog) 
{	
	postContent(info,tab,blog,{type:"photo",source:info.srcUrl});
}

function postText(info, tab, blog) 
{	
	postContent(info,tab,blog,{type:"regular",title:info.linkUrl,body:info.selectionText});
}

function postPage(info, tab, blog) 
{	
	postContent(info,tab,blog,{type:"link",url:info.pageUrl,name:tab.title});
}

function postLink(info, tab, blog) 
{	
	postContent(info,tab,blog,{type:"link",url:info.linkUrl,name:info.linkUrl});
}

// ---------------------------------------------------------------------------------------------------------------------------------------- //

function postContent(info, tab, blog, tumblrPostParams) 
{	
	var tweetPost = localStorage["tweet_post"];
	var email = localStorage["tumblr_email"];
	var password = localStorage["tumblr_pass"];
	var publishState = localStorage["publish_state"];	
	var preformatPost = localStorage["preformat_post"];
	
	if(!email || email=="" || !password || password=="")
	{
		// Whoops!
		alert("You need to set your Tumblr username and password in the options before posting!");
		
		// Go to the options page
		chrome.tabs.create({url:"options.html"});	
	}
	else if(preformatPost==1)
	{
		chrome.tabs.create({url:"share.html?u="+encodeURIComponent(info.srcUrl)});
	}
	else
	{			
		var sendToTwitter = tweetPost;		
		if(tweetPost=="prompt"){ sendToTwitter=confirm("Post to Twitter?")?"auto":"no"; }
				
		// Add some generic params
		if(tumblrPostParams==null){ tumblrPostParams={}; }
		tumblrPostParams["email"] = email;
		tumblrPostParams["password"] = password;
		tumblrPostParams["state"] = publishState;
		tumblrPostParams["send-to-twitter"] = sendToTwitter;
		tumblrPostParams["generator"] = "PostToTumblr http://www.mikecann.co.uk";
		tumblrPostParams["click-through-url"] = info.srcUrl;
		
		// Handle multiple blogs
		if(blog!="Default Blog"){tumblrPostParams.group = blog;}
		
		var postingNote = webkitNotifications.createNotification('images/icon48.png', "Posting Content..", info.pageUrl);
		postingNote.show();				
	
		$.ajax({
		  url: 'http://www.tumblr.com/api/write',
		  type: 'POST',
		  data:tumblrPostParams,
		  async: false,
		  complete: function(transport)
		  {		 
				if(transport.status == 200 || transport.status == 201) 
				{
					 postingNote.cancel();				 
					 var postedNote = webkitNotifications.createNotification('images/icon48.png', "Content Posted!", info.pageUrl);					 
					 setTimeout(function() { postedNote.cancel(); }, 5000);
					 postedNote.show();
				} 
				else if(transport.status == 403) 
				{
					postingNote.cancel();				 
					var errorNote = webkitNotifications.createNotification('images/icon48.png', "Posting Error!", "Bad email or password");
					setTimeout(function() { errorNote.cancel(); }, 5000);
					errorNote.show();					
					
					// Go to the options page
					chrome.tabs.create({url:"options.html"});
				}
		
			}
		 });			
	}
}

// ---------------------------------------------------------------------------------------------------------------------------------------- //