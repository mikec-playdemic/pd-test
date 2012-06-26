$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof jeash=='undefined') jeash = {}
if(!jeash.events) jeash.events = {}
jeash.events.IEventDispatcher = function() { }
jeash.events.IEventDispatcher.__name__ = ["jeash","events","IEventDispatcher"];
jeash.events.IEventDispatcher.prototype.addEventListener = null;
jeash.events.IEventDispatcher.prototype.dispatchEvent = null;
jeash.events.IEventDispatcher.prototype.hasEventListener = null;
jeash.events.IEventDispatcher.prototype.removeEventListener = null;
jeash.events.IEventDispatcher.prototype.willTrigger = null;
jeash.events.IEventDispatcher.prototype.__class__ = jeash.events.IEventDispatcher;
jeash.events.EventDispatcher = function(target) {
	if( target === $_ ) return;
	$s.push("jeash.events.EventDispatcher::new");
	var $spos = $s.length;
	if(target != null) this.jeashTarget = target; else this.jeashTarget = this;
	this.jeashEventMap = [];
	$s.pop();
}
jeash.events.EventDispatcher.__name__ = ["jeash","events","EventDispatcher"];
jeash.events.EventDispatcher.compareListeners = function(l1,l2) {
	$s.push("jeash.events.EventDispatcher::compareListeners");
	var $spos = $s.length;
	var $tmp = l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.EventDispatcher.prototype.jeashTarget = null;
jeash.events.EventDispatcher.prototype.jeashEventMap = null;
jeash.events.EventDispatcher.prototype.getList = function(type) {
	$s.push("jeash.events.EventDispatcher::getList");
	var $spos = $s.length;
	var $tmp = this.jeashEventMap[type];
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.EventDispatcher.prototype.setList = function(type,list) {
	$s.push("jeash.events.EventDispatcher::setList");
	var $spos = $s.length;
	this.jeashEventMap[type] = list;
	$s.pop();
}
jeash.events.EventDispatcher.prototype.existList = function(type) {
	$s.push("jeash.events.EventDispatcher::existList");
	var $spos = $s.length;
	var $tmp = this.jeashEventMap[type] != undefined;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.EventDispatcher.prototype.addEventListener = function(type,inListener,useCapture,inPriority,useWeakReference) {
	$s.push("jeash.events.EventDispatcher::addEventListener");
	var $spos = $s.length;
	var capture = useCapture == null?false:useCapture;
	var priority = inPriority == null?0:inPriority;
	var list = this.getList(type);
	if(!this.existList(type)) {
		list = new Array();
		this.setList(type,list);
	}
	var l = new jeash.events.Listener(inListener,capture,priority);
	list.push(l);
	$s.pop();
}
jeash.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	$s.push("jeash.events.EventDispatcher::dispatchEvent");
	var $spos = $s.length;
	if(event.target == null) event.target = this.jeashTarget;
	var list = this.getList(event.type);
	var capture = event.eventPhase == jeash.events.EventPhase.CAPTURING_PHASE;
	if(this.existList(event.type)) {
		list.sort(jeash.events.EventDispatcher.compareListeners);
		var idx = 0;
		while(idx < list.length) {
			var listener = list[idx];
			if(listener.mUseCapture == capture) {
				listener.dispatchEvent(event);
				if(event.jeashGetIsCancelledNow()) {
					$s.pop();
					return true;
				}
			}
			if(idx < list.length && listener != list[idx]) {
			} else idx++;
		}
		$s.pop();
		return true;
	}
	$s.pop();
	return false;
	$s.pop();
}
jeash.events.EventDispatcher.prototype.hasEventListener = function(type) {
	$s.push("jeash.events.EventDispatcher::hasEventListener");
	var $spos = $s.length;
	var $tmp = this.existList(type);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.EventDispatcher.prototype.removeEventListener = function(type,listener,inCapture) {
	$s.push("jeash.events.EventDispatcher::removeEventListener");
	var $spos = $s.length;
	if(!this.existList(type)) {
		$s.pop();
		return;
	}
	var list = this.getList(type);
	var capture = inCapture == null?false:inCapture;
	var _g1 = 0, _g = list.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(list[i].Is(listener,capture)) {
			list.splice(i,1);
			$s.pop();
			return;
		}
	}
	$s.pop();
}
jeash.events.EventDispatcher.prototype.toString = function() {
	$s.push("jeash.events.EventDispatcher::toString");
	var $spos = $s.length;
	var $tmp = "[ " + this.__name__ + " ]";
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.EventDispatcher.prototype.willTrigger = function(type) {
	$s.push("jeash.events.EventDispatcher::willTrigger");
	var $spos = $s.length;
	var $tmp = this.hasEventListener(type);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.EventDispatcher.prototype.__class__ = jeash.events.EventDispatcher;
jeash.events.EventDispatcher.__interfaces__ = [jeash.events.IEventDispatcher];
if(!jeash.display) jeash.display = {}
jeash.display.LoaderInfo = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.display.LoaderInfo::new");
	var $spos = $s.length;
	jeash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
	$s.pop();
}
jeash.display.LoaderInfo.__name__ = ["jeash","display","LoaderInfo"];
jeash.display.LoaderInfo.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.display.LoaderInfo.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.display.LoaderInfo.create = function(ldr) {
	$s.push("jeash.display.LoaderInfo::create");
	var $spos = $s.length;
	var li = new jeash.display.LoaderInfo();
	li.loader = ldr;
	$s.pop();
	return li;
	$s.pop();
}
jeash.display.LoaderInfo.prototype.bytes = null;
jeash.display.LoaderInfo.prototype.bytesLoaded = null;
jeash.display.LoaderInfo.prototype.bytesTotal = null;
jeash.display.LoaderInfo.prototype.childAllowsParent = null;
jeash.display.LoaderInfo.prototype.content = null;
jeash.display.LoaderInfo.prototype.contentType = null;
jeash.display.LoaderInfo.prototype.frameRate = null;
jeash.display.LoaderInfo.prototype.height = null;
jeash.display.LoaderInfo.prototype.loader = null;
jeash.display.LoaderInfo.prototype.loaderURL = null;
jeash.display.LoaderInfo.prototype.parameters = null;
jeash.display.LoaderInfo.prototype.parentAllowsChild = null;
jeash.display.LoaderInfo.prototype.sameDomain = null;
jeash.display.LoaderInfo.prototype.sharedEvents = null;
jeash.display.LoaderInfo.prototype.url = null;
jeash.display.LoaderInfo.prototype.width = null;
jeash.display.LoaderInfo.prototype.__class__ = jeash.display.LoaderInfo;
jeash.display.LineScaleMode = { __ename__ : ["jeash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
jeash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
jeash.display.LineScaleMode.HORIZONTAL.toString = $estr;
jeash.display.LineScaleMode.HORIZONTAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.NONE = ["NONE",1];
jeash.display.LineScaleMode.NONE.toString = $estr;
jeash.display.LineScaleMode.NONE.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.NORMAL = ["NORMAL",2];
jeash.display.LineScaleMode.NORMAL.toString = $estr;
jeash.display.LineScaleMode.NORMAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
jeash.display.LineScaleMode.VERTICAL.toString = $estr;
jeash.display.LineScaleMode.VERTICAL.__enum__ = jeash.display.LineScaleMode;
jeash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	if( inX === $_ ) return;
	$s.push("jeash.display.GfxPoint::new");
	var $spos = $s.length;
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
	$s.pop();
}
jeash.display.GfxPoint.__name__ = ["jeash","display","GfxPoint"];
jeash.display.GfxPoint.prototype.x = null;
jeash.display.GfxPoint.prototype.y = null;
jeash.display.GfxPoint.prototype.cx = null;
jeash.display.GfxPoint.prototype.cy = null;
jeash.display.GfxPoint.prototype.type = null;
jeash.display.GfxPoint.prototype.__class__ = jeash.display.GfxPoint;
jeash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	if( inGrad === $_ ) return;
	$s.push("jeash.display.LineJob::new");
	var $spos = $s.length;
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
	$s.pop();
}
jeash.display.LineJob.__name__ = ["jeash","display","LineJob"];
jeash.display.LineJob.prototype.grad = null;
jeash.display.LineJob.prototype.point_idx0 = null;
jeash.display.LineJob.prototype.point_idx1 = null;
jeash.display.LineJob.prototype.thickness = null;
jeash.display.LineJob.prototype.alpha = null;
jeash.display.LineJob.prototype.colour = null;
jeash.display.LineJob.prototype.pixel_hinting = null;
jeash.display.LineJob.prototype.joints = null;
jeash.display.LineJob.prototype.caps = null;
jeash.display.LineJob.prototype.scale_mode = null;
jeash.display.LineJob.prototype.miter_limit = null;
jeash.display.LineJob.prototype.__class__ = jeash.display.LineJob;
jeash.display.PointInPathMode = { __ename__ : ["jeash","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
jeash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
jeash.display.PointInPathMode.USER_SPACE.toString = $estr;
jeash.display.PointInPathMode.USER_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
jeash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
jeash.display.PointInPathMode.DEVICE_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.Graphics = function(inSurface) {
	if( inSurface === $_ ) return;
	$s.push("jeash.display.Graphics::new");
	var $spos = $s.length;
	if(inSurface == null) {
		this.jeashSurface = js.Lib.document.createElement("canvas");
		this.jeashSurface.width = 0;
		this.jeashSurface.height = 0;
	} else this.jeashSurface = inSurface;
	this.mMatrix = new jeash.geom.Matrix();
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.originX = 0;
	this.originY = 0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.mNoClip = false;
	this.jeashClearLine();
	this.mLineJobs = [];
	this.jeashChanged = true;
	this.jeashShift = false;
	this.nextDrawIndex = 0;
	$s.pop();
}
jeash.display.Graphics.__name__ = ["jeash","display","Graphics"];
jeash.display.Graphics.jeashDetectIsPointInPathMode = function() {
	$s.push("jeash.display.Graphics::jeashDetectIsPointInPathMode");
	var $spos = $s.length;
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) {
		var $tmp = jeash.display.PointInPathMode.USER_SPACE;
		$s.pop();
		return $tmp;
	}
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?jeash.display.PointInPathMode.USER_SPACE:jeash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	$s.pop();
	return rv;
	$s.pop();
}
jeash.display.Graphics.prototype.jeashSurface = null;
jeash.display.Graphics.prototype.jeashChanged = null;
jeash.display.Graphics.prototype.mPoints = null;
jeash.display.Graphics.prototype.mSolid = null;
jeash.display.Graphics.prototype.mFilling = null;
jeash.display.Graphics.prototype.mFillColour = null;
jeash.display.Graphics.prototype.mFillAlpha = null;
jeash.display.Graphics.prototype.mSolidGradient = null;
jeash.display.Graphics.prototype.mBitmap = null;
jeash.display.Graphics.prototype.mCurrentLine = null;
jeash.display.Graphics.prototype.mLineJobs = null;
jeash.display.Graphics.prototype.mNoClip = null;
jeash.display.Graphics.prototype.mDrawList = null;
jeash.display.Graphics.prototype.mLineDraws = null;
jeash.display.Graphics.prototype.mPenX = null;
jeash.display.Graphics.prototype.mPenY = null;
jeash.display.Graphics.prototype.mLastMoveID = null;
jeash.display.Graphics.prototype.mMatrix = null;
jeash.display.Graphics.prototype.jeashShift = null;
jeash.display.Graphics.prototype.owner = null;
jeash.display.Graphics.prototype.mBoundsDirty = null;
jeash.display.Graphics.prototype.standardExtent = null;
jeash.display.Graphics.prototype.originX = null;
jeash.display.Graphics.prototype.originY = null;
jeash.display.Graphics.prototype.nextDrawIndex = null;
jeash.display.Graphics.prototype.jeashRenderFrame = null;
jeash.display.Graphics.prototype.SetSurface = function(inSurface) {
	$s.push("jeash.display.Graphics::SetSurface");
	var $spos = $s.length;
	this.jeashSurface = inSurface;
	$s.pop();
}
jeash.display.Graphics.prototype.createCanvasColor = function(color,alpha) {
	$s.push("jeash.display.Graphics::createCanvasColor");
	var $spos = $s.length;
	var r;
	var g;
	var b;
	r = (16711680 & color) >> 16;
	g = (65280 & color) >> 8;
	b = 255 & color;
	var $tmp = "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Graphics.prototype.createCanvasGradient = function(ctx,g) {
	$s.push("jeash.display.Graphics::createCanvasGradient");
	var $spos = $s.length;
	var gradient;
	var matrix = g.matrix;
	if((g.flags & jeash.display.Graphics.RADIAL) == 0) {
		var p1 = matrix.transformPoint(new jeash.geom.Point(-819.2,0));
		var p2 = matrix.transformPoint(new jeash.geom.Point(819.2,0));
		gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
	} else {
		var p1 = matrix.transformPoint(new jeash.geom.Point(g.focal * 819.2,0));
		var p2 = matrix.transformPoint(new jeash.geom.Point(0,819.2));
		gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
	}
	var _g = 0, _g1 = g.points;
	while(_g < _g1.length) {
		var point = _g1[_g];
		++_g;
		var color = this.createCanvasColor(point.col,point.alpha);
		var pos = point.ratio / 255;
		gradient.addColorStop(pos,color);
	}
	$s.pop();
	return gradient;
	$s.pop();
}
jeash.display.Graphics.prototype.jeashRender = function(maskHandle,matrix) {
	$s.push("jeash.display.Graphics::jeashRender");
	var $spos = $s.length;
	if(!this.jeashChanged) {
		$s.pop();
		return false;
	}
	this.ClosePolygon(true);
	var extent = this.getStandardExtent();
	if(this.jeashRenderFrame++ < 10) {
		if(this.standardExtent.width - this.standardExtent.x != this.jeashSurface.width && this.standardExtent.height - this.standardExtent.y != this.jeashSurface.height) this.jeashAdjustSurface(); else if(this.standardExtent.width - this.standardExtent.x < this.jeashSurface.width && this.standardExtent.height - this.standardExtent.y < this.jeashSurface.height) this.jeashAdjustSurface();
	}
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx == null) {
		$s.pop();
		return false;
	}
	var len = this.mDrawList.length;
	this.jeashShift = Math.abs(extent.x) < this.jeashSurface.width && Math.abs(extent.y) < this.jeashSurface.height?true:false;
	ctx.save();
	if(this.jeashShift) ctx.translate(-extent.x,-extent.y);
	var _g = this.nextDrawIndex;
	while(_g < len) {
		var i = _g++;
		var d = this.mDrawList[len - 1 - i];
		if(d.lineJobs.length > 0) {
			var _g1 = 0, _g2 = d.lineJobs;
			while(_g1 < _g2.length) {
				var lj = _g2[_g1];
				++_g1;
				ctx.lineWidth = lj.thickness;
				switch(lj.joints) {
				case jeash.display.Graphics.CORNER_ROUND:
					ctx.lineJoin = "round";
					break;
				case jeash.display.Graphics.CORNER_MITER:
					ctx.lineJoin = "miter";
					break;
				case jeash.display.Graphics.CORNER_BEVEL:
					ctx.lineJoin = "bevel";
					break;
				}
				switch(lj.caps) {
				case jeash.display.Graphics.END_ROUND:
					ctx.lineCap = "round";
					break;
				case jeash.display.Graphics.END_SQUARE:
					ctx.lineCap = "square";
					break;
				case jeash.display.Graphics.END_NONE:
					ctx.lineCap = "butt";
					break;
				}
				ctx.miterLimit = lj.miter_limit;
				if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
				ctx.beginPath();
				var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
				while(_g4 < _g3) {
					var i1 = _g4++;
					var p = d.points[i1];
					switch(p.type) {
					case jeash.display.Graphics.MOVE:
						ctx.moveTo(p.x,p.y);
						break;
					case jeash.display.Graphics.CURVE:
						ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
						break;
					default:
						ctx.lineTo(p.x,p.y);
					}
				}
				ctx.closePath();
				ctx.stroke();
			}
		} else {
			ctx.beginPath();
			var _g1 = 0, _g2 = d.points;
			while(_g1 < _g2.length) {
				var p = _g2[_g1];
				++_g1;
				switch(p.type) {
				case jeash.display.Graphics.MOVE:
					ctx.moveTo(p.x,p.y);
					break;
				case jeash.display.Graphics.CURVE:
					ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
					break;
				default:
					ctx.lineTo(p.x,p.y);
				}
			}
			ctx.closePath();
		}
		var fillColour = d.fillColour;
		var fillAlpha = d.fillAlpha;
		if(fillAlpha >= 0. && fillAlpha <= 1.) {
			var g = d.solidGradient;
			if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else ctx.fillStyle = this.createCanvasColor(fillColour,fillAlpha);
		}
		ctx.fill();
		ctx.save();
		var bitmap = d.bitmap;
		if(bitmap != null) {
			if(this.jeashShift) ctx.translate(-extent.x,-extent.y);
			if(!this.mNoClip) ctx.clip();
			var img = bitmap.texture_buffer;
			var matrix1 = bitmap.matrix;
			if(matrix1 != null) ctx.transform(matrix1.a,matrix1.b,matrix1.c,matrix1.d,matrix1.tx,matrix1.ty);
			ctx.drawImage(img,0,0);
		}
		ctx.restore();
	}
	ctx.restore();
	this.jeashChanged = false;
	this.nextDrawIndex = len;
	$s.pop();
	return true;
	$s.pop();
}
jeash.display.Graphics.prototype.jeashHitTest = function(inX,inY) {
	$s.push("jeash.display.Graphics::jeashHitTest");
	var $spos = $s.length;
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx == null) {
		$s.pop();
		return false;
	}
	ctx.save();
	var _g = 0, _g1 = this.mDrawList;
	while(_g < _g1.length) {
		var d = _g1[_g];
		++_g;
		ctx.beginPath();
		var _g2 = 0, _g3 = d.points;
		while(_g2 < _g3.length) {
			var p = _g3[_g2];
			++_g2;
			switch(p.type) {
			case jeash.display.Graphics.MOVE:
				ctx.moveTo(p.x,p.y);
				break;
			case jeash.display.Graphics.CURVE:
				ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
				break;
			default:
				ctx.lineTo(p.x,p.y);
			}
		}
		ctx.closePath();
		if(ctx.isPointInPath(inX,inY)) {
			$s.pop();
			return true;
		}
	}
	ctx.restore();
	$s.pop();
	return false;
	$s.pop();
}
jeash.display.Graphics.prototype.blit = function(inTexture) {
	$s.push("jeash.display.Graphics::blit");
	var $spos = $s.length;
	this.ClosePolygon(true);
	var ctx = (function($this) {
		var $r;
		try {
			$r = $this.jeashSurface.getContext("2d");
		} catch( e ) {
			$r = (function($this) {
				var $r;
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				jeash.Lib.trace("2d canvas API not implemented for: " + $this.jeashSurface);
				$r = null;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	if(ctx != null) ctx.drawImage(inTexture.mTextureBuffer,this.mPenX,this.mPenY);
	$s.pop();
}
jeash.display.Graphics.prototype.lineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
	$s.push("jeash.display.Graphics::lineStyle");
	var $spos = $s.length;
	this.AddLineSegment();
	if(thickness == null) {
		this.jeashClearLine();
		$s.pop();
		return;
	} else {
		this.mCurrentLine.grad = null;
		this.mCurrentLine.thickness = thickness;
		this.mCurrentLine.colour = color == null?0:color;
		this.mCurrentLine.alpha = alpha == null?1.0:alpha;
		this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
		this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:jeash.display.Graphics.PIXEL_HINTING;
	}
	if(caps != null) {
		switch( (caps)[1] ) {
		case 1:
			this.mCurrentLine.caps = jeash.display.Graphics.END_ROUND;
			break;
		case 2:
			this.mCurrentLine.caps = jeash.display.Graphics.END_SQUARE;
			break;
		case 0:
			this.mCurrentLine.caps = jeash.display.Graphics.END_NONE;
			break;
		}
	}
	this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NORMAL;
	if(scaleMode != null) {
		switch( (scaleMode)[1] ) {
		case 2:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NORMAL;
			break;
		case 3:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_VERTICAL;
			break;
		case 0:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_HORIZONTAL;
			break;
		case 1:
			this.mCurrentLine.scale_mode = jeash.display.Graphics.SCALE_NONE;
			break;
		}
	}
	this.mCurrentLine.joints = jeash.display.Graphics.CORNER_ROUND;
	if(joints != null) {
		switch( (joints)[1] ) {
		case 1:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_ROUND;
			break;
		case 0:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_MITER;
			break;
		case 2:
			this.mCurrentLine.joints = jeash.display.Graphics.CORNER_BEVEL;
			break;
		}
	}
	$s.pop();
}
jeash.display.Graphics.prototype.lineGradientStyle = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	$s.push("jeash.display.Graphics::lineGradientStyle");
	var $spos = $s.length;
	this.mCurrentLine.grad = this.CreateGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	$s.pop();
}
jeash.display.Graphics.prototype.beginFill = function(color,alpha) {
	$s.push("jeash.display.Graphics::beginFill");
	var $spos = $s.length;
	this.ClosePolygon(true);
	this.mFillColour = color;
	this.mFillAlpha = alpha == null?1.0:alpha;
	this.mFilling = true;
	this.mSolidGradient = null;
	this.mBitmap = null;
	$s.pop();
}
jeash.display.Graphics.prototype.endFill = function() {
	$s.push("jeash.display.Graphics::endFill");
	var $spos = $s.length;
	this.ClosePolygon(true);
	$s.pop();
}
jeash.display.Graphics.prototype.DrawEllipse = function(x,y,rx,ry) {
	$s.push("jeash.display.Graphics::DrawEllipse");
	var $spos = $s.length;
	this.moveTo(x + rx,y);
	this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
	this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
	this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
	this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
	this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
	this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
	this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
	this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	$s.pop();
}
jeash.display.Graphics.prototype.drawEllipse = function(x,y,rx,ry) {
	$s.push("jeash.display.Graphics::drawEllipse");
	var $spos = $s.length;
	this.ClosePolygon(false);
	rx /= 2;
	ry /= 2;
	this.DrawEllipse(x + rx,y + ry,rx,ry);
	this.ClosePolygon(false);
	$s.pop();
}
jeash.display.Graphics.prototype.drawCircle = function(x,y,rad) {
	$s.push("jeash.display.Graphics::drawCircle");
	var $spos = $s.length;
	this.ClosePolygon(false);
	this.DrawEllipse(x,y,rad,rad);
	this.ClosePolygon(false);
	$s.pop();
}
jeash.display.Graphics.prototype.drawRect = function(x,y,width,height) {
	$s.push("jeash.display.Graphics::drawRect");
	var $spos = $s.length;
	if(width == 0 && height == 0) this.mNoClip = true; else this.mNoClip = false;
	this.ClosePolygon(false);
	this.moveTo(x,y);
	this.lineTo(x + width,y);
	this.lineTo(x + width,y + height);
	this.lineTo(x,y + height);
	this.lineTo(x,y);
	this.ClosePolygon(false);
	$s.pop();
}
jeash.display.Graphics.prototype.drawRoundRect = function(x,y,width,height,rx,ry) {
	$s.push("jeash.display.Graphics::drawRoundRect");
	var $spos = $s.length;
	rx *= 0.5;
	ry *= 0.5;
	var w = width * 0.5;
	x += w;
	if(rx > w) rx = w;
	var lw = w - rx;
	var w_ = lw + rx * Math.sin(Math.PI / 4);
	var cw_ = lw + rx * Math.tan(Math.PI / 8);
	var h = height * 0.5;
	y += h;
	if(ry > h) ry = h;
	var lh = h - ry;
	var h_ = lh + ry * Math.sin(Math.PI / 4);
	var ch_ = lh + ry * Math.tan(Math.PI / 8);
	this.ClosePolygon(false);
	this.moveTo(x + w,y + lh);
	this.curveTo(x + w,y + ch_,x + w_,y + h_);
	this.curveTo(x + cw_,y + h,x + lw,y + h);
	this.lineTo(x - lw,y + h);
	this.curveTo(x - cw_,y + h,x - w_,y + h_);
	this.curveTo(x - w,y + ch_,x - w,y + lh);
	this.lineTo(x - w,y - lh);
	this.curveTo(x - w,y - ch_,x - w_,y - h_);
	this.curveTo(x - cw_,y - h,x - lw,y - h);
	this.lineTo(x + lw,y - h);
	this.curveTo(x + cw_,y - h,x + w_,y - h_);
	this.curveTo(x + w,y - ch_,x + w,y - lh);
	this.lineTo(x + w,y + lh);
	this.ClosePolygon(false);
	$s.pop();
}
jeash.display.Graphics.prototype.CreateGradient = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	$s.push("jeash.display.Graphics::CreateGradient");
	var $spos = $s.length;
	var points = new Array();
	var _g1 = 0, _g = colors.length;
	while(_g1 < _g) {
		var i = _g1++;
		points.push({ col : colors[i], alpha : alphas[i], ratio : ratios[i]});
	}
	var flags = 0;
	if(type == jeash.display.GradientType.RADIAL) flags |= jeash.display.Graphics.RADIAL;
	if(spreadMethod == jeash.display.SpreadMethod.REPEAT) flags |= jeash.display.Graphics.SPREAD_REPEAT; else if(spreadMethod == jeash.display.SpreadMethod.REFLECT) flags |= jeash.display.Graphics.SPREAD_REFLECT;
	if(matrix == null) {
		matrix = new jeash.geom.Matrix();
		matrix.createGradientBox(25,25);
	} else matrix = matrix.clone();
	var focal = focalPointRatio == null?0:focalPointRatio;
	var $tmp = { points : points, matrix : matrix, flags : flags, focal : focal};
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Graphics.prototype.beginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	$s.push("jeash.display.Graphics::beginGradientFill");
	var $spos = $s.length;
	this.ClosePolygon(true);
	this.mFilling = true;
	this.mBitmap = null;
	this.mSolidGradient = this.CreateGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	$s.pop();
}
jeash.display.Graphics.prototype.beginBitmapFill = function(bitmap,matrix,in_repeat,in_smooth) {
	$s.push("jeash.display.Graphics::beginBitmapFill");
	var $spos = $s.length;
	this.ClosePolygon(true);
	var repeat = in_repeat == null?true:in_repeat;
	var smooth = in_smooth == null?false:in_smooth;
	this.mFilling = true;
	this.mSolidGradient = null;
	this.mBitmap = { texture_buffer : bitmap.mTextureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?jeash.display.Graphics.BMP_REPEAT:0) | (smooth?jeash.display.Graphics.BMP_SMOOTH:0)};
	$s.pop();
}
jeash.display.Graphics.prototype.jeashClearLine = function() {
	$s.push("jeash.display.Graphics::jeashClearLine");
	var $spos = $s.length;
	this.mCurrentLine = new jeash.display.LineJob(null,-1,-1,0.0,0.0,0,1,jeash.display.Graphics.CORNER_ROUND,jeash.display.Graphics.END_ROUND,jeash.display.Graphics.SCALE_NORMAL,3.0);
	$s.pop();
}
jeash.display.Graphics.prototype.jeashClearCanvas = function() {
	$s.push("jeash.display.Graphics::jeashClearCanvas");
	var $spos = $s.length;
	if(this.jeashSurface != null) {
		var w = this.jeashSurface.width;
		this.jeashSurface.width = w;
	}
	$s.pop();
}
jeash.display.Graphics.prototype.clear = function() {
	$s.push("jeash.display.Graphics::clear");
	var $spos = $s.length;
	this.jeashClearLine();
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.nextDrawIndex = 0;
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.jeashClearCanvas();
	this.mLineJobs = [];
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
	$s.pop();
}
jeash.display.Graphics.prototype.getStandardExtent = function() {
	$s.push("jeash.display.Graphics::getStandardExtent");
	var $spos = $s.length;
	if(this.standardExtent != null) {
		var $tmp = this.standardExtent;
		$s.pop();
		return $tmp;
	}
	if(this.mDrawList.length == 0) {
		var $tmp = this.standardExtent = new jeash.geom.Rectangle();
		$s.pop();
		return $tmp;
	}
	var maxX, minX, maxY, minY;
	maxX = minX = 0.;
	maxY = minY = 0.;
	var _g = 0, _g1 = this.mDrawList;
	while(_g < _g1.length) {
		var dl = _g1[_g];
		++_g;
		var _g2 = 0, _g3 = dl.points;
		while(_g2 < _g3.length) {
			var p = _g3[_g2];
			++_g2;
			maxX = p.x > maxX?p.x:maxX;
			minX = p.x < minX?p.x:minX;
			maxY = p.y > maxY?p.y:maxY;
			minY = p.y < minY?p.y:minY;
		}
		if(dl.bitmap != null) {
			var width = dl.bitmap.texture_buffer.width;
			var height = dl.bitmap.texture_buffer.height;
			maxX = width > maxX?width:maxX;
			minX = 0 < minX?0:minX;
			maxY = height > maxY?height:maxY;
			minY = 0 < minY?0:minY;
		}
	}
	if(minX < 0 && minX < this.originX || minY < 0 && minY < this.originY) {
		this.nextDrawIndex = 0;
		this.jeashClearCanvas();
	}
	this.originX = minX;
	this.originY = minY;
	var $tmp = this.standardExtent = new jeash.geom.Rectangle(minX,minY,maxX - minX,maxY - minY);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Graphics.prototype.moveTo = function(inX,inY) {
	$s.push("jeash.display.Graphics::moveTo");
	var $spos = $s.length;
	this.mPenX = inX;
	this.mPenY = inY;
	if(!this.mFilling) this.ClosePolygon(false); else {
		this.AddLineSegment();
		this.mLastMoveID = this.mPoints.length;
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
	}
	$s.pop();
}
jeash.display.Graphics.prototype.lineTo = function(inX,inY) {
	$s.push("jeash.display.Graphics::lineTo");
	var $spos = $s.length;
	var pid = this.mPoints.length;
	if(pid == 0) {
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
		pid++;
	}
	this.mPenX = inX;
	this.mPenY = inY;
	this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.LINE));
	if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
		if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
		this.mCurrentLine.point_idx1 = pid;
	}
	if(!this.mFilling) this.ClosePolygon(false);
	$s.pop();
}
jeash.display.Graphics.prototype.curveTo = function(inCX,inCY,inX,inY) {
	$s.push("jeash.display.Graphics::curveTo");
	var $spos = $s.length;
	var pid = this.mPoints.length;
	if(pid == 0) {
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,jeash.display.Graphics.MOVE));
		pid++;
	}
	this.mPenX = inX;
	this.mPenY = inY;
	this.mPoints.push(new jeash.display.GfxPoint(inX,inY,inCX,inCY,jeash.display.Graphics.CURVE));
	if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
		if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
		this.mCurrentLine.point_idx1 = pid;
	}
	$s.pop();
}
jeash.display.Graphics.prototype.flush = function() {
	$s.push("jeash.display.Graphics::flush");
	var $spos = $s.length;
	this.ClosePolygon(true);
	$s.pop();
}
jeash.display.Graphics.prototype.AddDrawable = function(inDrawable) {
	$s.push("jeash.display.Graphics::AddDrawable");
	var $spos = $s.length;
	if(inDrawable == null) {
		$s.pop();
		return;
	}
	this.mDrawList.unshift(inDrawable);
	$s.pop();
}
jeash.display.Graphics.prototype.AddLineSegment = function() {
	$s.push("jeash.display.Graphics::AddLineSegment");
	var $spos = $s.length;
	if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new jeash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
	this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	$s.pop();
}
jeash.display.Graphics.prototype.ClosePolygon = function(inCancelFill) {
	$s.push("jeash.display.Graphics::ClosePolygon");
	var $spos = $s.length;
	var l = this.mPoints.length;
	if(l > 0) {
		if(l > 1) {
			if(this.mFilling && l > 2) {
				if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
			}
			this.AddLineSegment();
			var drawable = { points : this.mPoints, fillColour : this.mFillColour, fillAlpha : this.mFillAlpha, solidGradient : this.mSolidGradient, bitmap : this.mBitmap, lineJobs : this.mLineJobs};
			this.AddDrawable(drawable);
		}
		this.mLineJobs = [];
		this.mPoints = [];
	}
	if(inCancelFill) {
		this.mFillAlpha = 0;
		this.mSolidGradient = null;
		this.mBitmap = null;
		this.mFilling = false;
	}
	this.jeashChanged = true;
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
	$s.pop();
}
jeash.display.Graphics.prototype.drawGraphicsData = function(points) {
	$s.push("jeash.display.Graphics::drawGraphicsData");
	var $spos = $s.length;
	var _g = 0;
	while(_g < points.length) {
		var data = points[_g];
		++_g;
		if(data == null) this.mFilling = true; else switch(data.jeashGraphicsDataType) {
		case jeash.display.GraphicsDataType.STROKE:
			var stroke = data;
			if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.jeashGraphicsFillType) {
			case jeash.display.GraphicsFillType.SOLID_FILL:
				var fill = stroke.fill;
				this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
				break;
			case jeash.display.GraphicsFillType.GRADIENT_FILL:
				var fill = stroke.fill;
				this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
			break;
		case jeash.display.GraphicsDataType.PATH:
			var path = data;
			var j = 0;
			var _g2 = 0, _g1 = path.commands.length;
			while(_g2 < _g1) {
				var i = _g2++;
				var command = path.commands[i];
				switch(command) {
				case 1:
					this.moveTo(path.data[j],path.data[j + 1]);
					j = j + 2;
					break;
				case 2:
					this.lineTo(path.data[j],path.data[j + 1]);
					j = j + 2;
					break;
				case 3:
					this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
					j = j + 4;
					break;
				}
			}
			break;
		case jeash.display.GraphicsDataType.SOLID:
			var fill = data;
			this.beginFill(fill.color,fill.alpha);
			break;
		case jeash.display.GraphicsDataType.GRADIENT:
			var fill = data;
			this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
			break;
		}
	}
	$s.pop();
}
jeash.display.Graphics.prototype.markBoundsClean = function() {
	$s.push("jeash.display.Graphics::markBoundsClean");
	var $spos = $s.length;
	this.mBoundsDirty = false;
	$s.pop();
}
jeash.display.Graphics.prototype.markBoundsDirty = function() {
	$s.push("jeash.display.Graphics::markBoundsDirty");
	var $spos = $s.length;
	if(!this.mBoundsDirty) {
		this.mBoundsDirty = true;
		if(this.owner != null) this.owner.jeashInvalidateBounds();
	}
	$s.pop();
}
jeash.display.Graphics.prototype.getContext = function() {
	$s.push("jeash.display.Graphics::getContext");
	var $spos = $s.length;
	try {
		var $tmp = this.jeashSurface.getContext("2d");
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		jeash.Lib.trace("2d canvas API not implemented for: " + this.jeashSurface);
		$s.pop();
		return null;
	}
	$s.pop();
}
jeash.display.Graphics.prototype.jeashAdjustSurface = function() {
	$s.push("jeash.display.Graphics::jeashAdjustSurface");
	var $spos = $s.length;
	var width = Math.ceil(this.standardExtent.width - this.standardExtent.x);
	var height = Math.ceil(this.standardExtent.height - this.standardExtent.y);
	if(width > 5000 || height > 5000) {
		$s.pop();
		return;
	}
	var dstCanvas = js.Lib.document.createElement("canvas");
	var ctx = dstCanvas.getContext("2d");
	dstCanvas.width = width;
	dstCanvas.height = height;
	jeash.Lib.jeashDrawToSurface(this.jeashSurface,dstCanvas);
	if(jeash.Lib.jeashIsOnStage(this.jeashSurface)) {
		jeash.Lib.jeashAppendSurface(dstCanvas);
		jeash.Lib.jeashCopyStyle(this.jeashSurface,dstCanvas);
		jeash.Lib.jeashSwapSurface(this.jeashSurface,dstCanvas);
		jeash.Lib.jeashRemoveSurface(this.jeashSurface);
	}
	this.jeashSurface = dstCanvas;
	$s.pop();
}
jeash.display.Graphics.prototype.__class__ = jeash.display.Graphics;
jeash.display.ImageDataLease = function(s,t) {
	if( s === $_ ) return;
	$s.push("jeash.display.ImageDataLease::new");
	var $spos = $s.length;
	this.seed = s;
	this.time = t;
	this.changeX = 0;
	this.changeY = 0;
	this.changeWidth = 0;
	this.changeHeight = 0;
	$s.pop();
}
jeash.display.ImageDataLease.__name__ = ["jeash","display","ImageDataLease"];
jeash.display.ImageDataLease.prototype.seed = null;
jeash.display.ImageDataLease.prototype.time = null;
jeash.display.ImageDataLease.prototype.changeX = null;
jeash.display.ImageDataLease.prototype.changeY = null;
jeash.display.ImageDataLease.prototype.changeWidth = null;
jeash.display.ImageDataLease.prototype.changeHeight = null;
jeash.display.ImageDataLease.prototype.__class__ = jeash.display.ImageDataLease;
jeash.display.IBitmapDrawable = function() { }
jeash.display.IBitmapDrawable.__name__ = ["jeash","display","IBitmapDrawable"];
jeash.display.IBitmapDrawable.prototype.drawToSurface = null;
jeash.display.IBitmapDrawable.prototype.__class__ = jeash.display.IBitmapDrawable;
jeash.display.BitmapData = function(inWidth,inHeight,inTransparent,inFillColor) {
	if( inWidth === $_ ) return;
	$s.push("jeash.display.BitmapData::new");
	var $spos = $s.length;
	if(inTransparent == null) inTransparent = true;
	this.jeashLocked = false;
	this.jeashLeaseNum = 0;
	this.mTextureBuffer = js.Lib.document.createElement("canvas");
	this.mTextureBuffer.width = inWidth;
	this.mTextureBuffer.height = inHeight;
	this.jeashTransparent = inTransparent;
	this.rect = new jeash.geom.Rectangle(0,0,inWidth,inHeight);
	if(inFillColor != null) {
		if(!this.jeashTransparent) inFillColor |= -16777216;
		this.fillRect(this.rect,inFillColor);
	}
	$s.pop();
}
jeash.display.BitmapData.__name__ = ["jeash","display","BitmapData"];
jeash.display.BitmapData.jeashCreateFromHandle = function(inHandle) {
	$s.push("jeash.display.BitmapData::jeashCreateFromHandle");
	var $spos = $s.length;
	var result = new jeash.display.BitmapData(0,0);
	result.mTextureBuffer = inHandle;
	$s.pop();
	return result;
	$s.pop();
}
jeash.display.BitmapData.prototype.mTextureBuffer = null;
jeash.display.BitmapData.prototype.jeashTransparent = null;
jeash.display.BitmapData.prototype.width = null;
jeash.display.BitmapData.prototype.height = null;
jeash.display.BitmapData.prototype.rect = null;
jeash.display.BitmapData.prototype.jeashImageData = null;
jeash.display.BitmapData.prototype.jeashLocked = null;
jeash.display.BitmapData.prototype.jeashLease = null;
jeash.display.BitmapData.prototype.jeashLeaseNum = null;
jeash.display.BitmapData.prototype.jeashAssignedBitmaps = null;
jeash.display.BitmapData.prototype.applyFilter = function(sourceBitmapData,sourceRect,destPoint,filter) {
	$s.push("jeash.display.BitmapData::applyFilter");
	var $spos = $s.length;
	throw "BitmapData.applyFilter not implemented in Jeash";
	$s.pop();
}
jeash.display.BitmapData.prototype.draw = function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
	$s.push("jeash.display.BitmapData::draw");
	var $spos = $s.length;
	if(smoothing == null) smoothing = false;
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	source.drawToSurface(this.mTextureBuffer,matrix,colorTransform,blendMode,clipRect,smoothing);
	$s.pop();
}
jeash.display.BitmapData.prototype.getColorBoundsRect = function(mask,color,findColor) {
	$s.push("jeash.display.BitmapData::getColorBoundsRect");
	var $spos = $s.length;
	if(findColor == null) findColor = true;
	var me = this;
	var doGetColorBoundsRect = function(data) {
		$s.push("jeash.display.BitmapData::getColorBoundsRect@121");
		var $spos = $s.length;
		var minX = me.mTextureBuffer != null?me.mTextureBuffer.width:0, maxX = 0, minY = me.mTextureBuffer != null?me.mTextureBuffer.height:0, maxY = 0, i = 0;
		while(i < data.length) {
			var value = me.getInt32(i,data);
			if(findColor) {
				if((value & mask) == color) {
					var x = Math.round(i % ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
			} else if((value & mask) != color) {
				var x = Math.round(i % ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4) / 4);
				var y = Math.round(i / ((me.mTextureBuffer != null?me.mTextureBuffer.width:0) * 4));
				if(x < minX) minX = x;
				if(x > maxX) maxX = x;
				if(y < minY) minY = y;
				if(y > maxY) maxY = y;
			}
			i += 4;
		}
		if(minX < maxX && minY < maxY) {
			var $tmp = new jeash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY);
			$s.pop();
			return $tmp;
		} else {
			var $tmp = new jeash.geom.Rectangle(0,0,me.mTextureBuffer != null?me.mTextureBuffer.width:0,me.mTextureBuffer != null?me.mTextureBuffer.height:0);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	};
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		var $tmp = doGetColorBoundsRect(imageData.data);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = doGetColorBoundsRect(this.jeashImageData.data);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.dispose = function() {
	$s.push("jeash.display.BitmapData::dispose");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.BitmapData.prototype.compare = function(inBitmapTexture) {
	$s.push("jeash.display.BitmapData::compare");
	var $spos = $s.length;
	throw "Not implemented. compare";
	$s.pop();
	return 0;
	$s.pop();
}
jeash.display.BitmapData.prototype.copyPixels = function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
	$s.push("jeash.display.BitmapData::copyPixels");
	var $spos = $s.length;
	if(mergeAlpha == null) mergeAlpha = false;
	if(sourceBitmapData.mTextureBuffer == null || this.mTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) {
		$s.pop();
		return;
	}
	if(sourceRect.x + sourceRect.width > sourceBitmapData.mTextureBuffer.width) sourceRect.width = sourceBitmapData.mTextureBuffer.width - sourceRect.x;
	if(sourceRect.y + sourceRect.height > sourceBitmapData.mTextureBuffer.height) sourceRect.height = sourceBitmapData.mTextureBuffer.height - sourceRect.y;
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	var ctx = this.mTextureBuffer.getContext("2d");
	ctx.drawImage(sourceBitmapData.mTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
	$s.pop();
}
jeash.display.BitmapData.prototype.clipRect = function(r) {
	$s.push("jeash.display.BitmapData::clipRect");
	var $spos = $s.length;
	if(r.x < 0) {
		r.width -= -r.x;
		r.x = 0;
		if(r.x + r.width <= 0) {
			$s.pop();
			return null;
		}
	}
	if(r.y < 0) {
		r.height -= -r.y;
		r.y = 0;
		if(r.y + r.height <= 0) {
			$s.pop();
			return null;
		}
	}
	if(r.x + r.width >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0)) {
		r.width -= r.x + r.width - (this.mTextureBuffer != null?this.mTextureBuffer.width:0);
		if(r.width <= 0) {
			$s.pop();
			return null;
		}
	}
	if(r.y + r.height >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) {
		r.height -= r.y + r.height - (this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		if(r.height <= 0) {
			$s.pop();
			return null;
		}
	}
	$s.pop();
	return r;
	$s.pop();
}
jeash.display.BitmapData.prototype.fillRect = function(rect,color) {
	$s.push("jeash.display.BitmapData::fillRect");
	var $spos = $s.length;
	if(rect == null) {
		$s.pop();
		return;
	}
	if(rect.width <= 0 || rect.height <= 0) {
		$s.pop();
		return;
	}
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	var r = (color & 16711680) >>> 16;
	var g = (color & 65280) >>> 8;
	var b = color & 255;
	var a = this.jeashTransparent?color >>> 24:255;
	var ctx = this.mTextureBuffer.getContext("2d");
	if(!this.jeashLocked) {
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var offsetX;
		var _g1 = 0, _g = imagedata.data.length >> 2;
		while(_g1 < _g) {
			var i = _g1++;
			offsetX = i * 4;
			imagedata.data[offsetX] = r;
			imagedata.data[offsetX + 1] = g;
			imagedata.data[offsetX + 2] = b;
			imagedata.data[offsetX + 3] = a;
		}
		ctx.putImageData(imagedata,rect.x,rect.y);
	} else {
		var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
		var offsetY;
		var offsetX;
		var _g1 = 0, _g = Math.round(rect.height);
		while(_g1 < _g) {
			var i = _g1++;
			offsetY = i * this.jeashImageData.width;
			var _g3 = 0, _g2 = Math.round(rect.width);
			while(_g3 < _g2) {
				var j = _g3++;
				offsetX = 4 * (j + offsetY);
				this.jeashImageData.data[s + offsetX] = r;
				this.jeashImageData.data[s + offsetX + 1] = g;
				this.jeashImageData.data[s + offsetX + 2] = b;
				this.jeashImageData.data[s + offsetX + 3] = a;
			}
		}
		ctx.putImageData(this.jeashImageData,0,0,rect.x,rect.y,rect.width,rect.height);
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.getPixels = function(rect) {
	$s.push("jeash.display.BitmapData::getPixels");
	var $spos = $s.length;
	var byteArray = new jeash.utils.ByteArray();
	rect = this.clipRect(rect);
	if(rect == null) {
		$s.pop();
		return byteArray;
	}
	var len = Math.round(4 * rect.width * rect.height);
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			byteArray.writeByte(imagedata.data[i]);
		}
	} else {
		var offset = Math.round(4 * this.jeashImageData.width * rect.y + rect.x * 4);
		var pos = offset;
		var boundR = Math.round(4 * (rect.x + rect.width));
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(pos % (this.jeashImageData.width * 4) > boundR - 1) pos += this.jeashImageData.width * 4 - boundR;
			byteArray.writeByte(this.jeashImageData.data[pos]);
			pos++;
		}
	}
	byteArray.position = 0;
	$s.pop();
	return byteArray;
	$s.pop();
}
jeash.display.BitmapData.prototype.getPixel = function(x,y) {
	$s.push("jeash.display.BitmapData::getPixel");
	var $spos = $s.length;
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) {
		$s.pop();
		return 0;
	}
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(x,y,1,1);
		var $tmp = imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		$s.pop();
		return $tmp;
	} else {
		var offset = 4 * y * (this.mTextureBuffer != null?this.mTextureBuffer.width:0) + x * 4;
		var $tmp = this.jeashImageData.data[offset] << 16 | this.jeashImageData.data[offset + 1] << 8 | this.jeashImageData.data[offset + 2];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.getInt32 = function(offset,data) {
	$s.push("jeash.display.BitmapData::getInt32");
	var $spos = $s.length;
	var b5, b6, b7, b8, pow = Math.pow;
	b5 = data[offset + 3] & 255;
	b6 = data[offset] & 255;
	b7 = data[offset + 1] & 255;
	b8 = data[offset + 2] & 255;
	var $tmp = parseInt(((b5 >> 7) * pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.BitmapData.prototype.getPixel32 = function(x,y) {
	$s.push("jeash.display.BitmapData::getPixel32");
	var $spos = $s.length;
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) {
		$s.pop();
		return 0;
	}
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var $tmp = this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = this.getInt32(4 * y * this.mTextureBuffer.width + x * 4,this.jeashImageData.data);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.setPixel = function(x,y,color) {
	$s.push("jeash.display.BitmapData::setPixel");
	var $spos = $s.length;
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) {
		$s.pop();
		return;
	}
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(1,1);
		imageData.data[0] = (color & 16711680) >>> 16;
		imageData.data[1] = (color & 65280) >>> 8;
		imageData.data[2] = color & 255;
		ctx.putImageData(imageData,x,y);
	} else {
		var offset = 4 * y * this.jeashImageData.width + x * 4;
		this.jeashImageData.data[offset] = (color & 16711680) >>> 16;
		this.jeashImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.jeashImageData.data[offset + 2] = color & 255;
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.setPixel32 = function(x,y,color) {
	$s.push("jeash.display.BitmapData::setPixel32");
	var $spos = $s.length;
	if(x < 0 || y < 0 || x >= (this.mTextureBuffer != null?this.mTextureBuffer.width:0) || y >= (this.mTextureBuffer != null?this.mTextureBuffer.height:0)) {
		$s.pop();
		return;
	}
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(1,1);
		imageData.data[0] = (color & 16711680) >>> 16;
		imageData.data[1] = (color & 65280) >>> 8;
		imageData.data[2] = color & 255;
		if(this.jeashTransparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
		ctx.putImageData(imageData,x,y);
	} else {
		var offset = 4 * y * this.jeashImageData.width + x * 4;
		this.jeashImageData.data[offset] = (color & 16711680) >>> 16;
		this.jeashImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.jeashImageData.data[offset + 2] = color & 255;
		if(this.jeashTransparent) this.jeashImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.jeashImageData.data[offset + 3] = 255;
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.setPixels = function(rect,byteArray) {
	$s.push("jeash.display.BitmapData::setPixels");
	var $spos = $s.length;
	rect = this.clipRect(rect);
	if(rect == null) {
		$s.pop();
		return;
	}
	var len = Math.round(4 * rect.width * rect.height);
	if(!this.jeashLocked) {
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.createImageData(rect.width,rect.height);
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			imageData.data[i] = byteArray.readByte();
		}
		ctx.putImageData(imageData,rect.x,rect.y);
	} else {
		var offset = Math.round(4 * this.jeashImageData.width * rect.y + rect.x * 4);
		var pos = offset;
		var boundR = Math.round(4 * (rect.x + rect.width));
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(pos % (this.jeashImageData.width * 4) > boundR - 1) pos += this.jeashImageData.width * 4 - boundR;
			this.jeashImageData.data[pos] = byteArray.readByte();
			pos++;
		}
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.clone = function() {
	$s.push("jeash.display.BitmapData::clone");
	var $spos = $s.length;
	var bitmapData = new jeash.display.BitmapData(this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0,this.jeashTransparent);
	var rect = new jeash.geom.Rectangle(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
	bitmapData.setPixels(rect,this.getPixels(rect));
	bitmapData.jeashLease = new jeash.display.ImageDataLease(bitmapData.jeashLeaseNum++,Date.now().getTime());
	$s.pop();
	return bitmapData;
	$s.pop();
}
jeash.display.BitmapData.prototype.handle = function() {
	$s.push("jeash.display.BitmapData::handle");
	var $spos = $s.length;
	var $tmp = this.mTextureBuffer;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.BitmapData.prototype.getWidth = function() {
	$s.push("jeash.display.BitmapData::getWidth");
	var $spos = $s.length;
	if(this.mTextureBuffer != null) {
		var $tmp = this.mTextureBuffer.width;
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return 0;
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.getHeight = function() {
	$s.push("jeash.display.BitmapData::getHeight");
	var $spos = $s.length;
	if(this.mTextureBuffer != null) {
		var $tmp = this.mTextureBuffer.height;
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return 0;
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.destroy = function() {
	$s.push("jeash.display.BitmapData::destroy");
	var $spos = $s.length;
	this.mTextureBuffer = null;
	$s.pop();
}
jeash.display.BitmapData.prototype.jeashOnLoad = function(data,e) {
	$s.push("jeash.display.BitmapData::jeashOnLoad");
	var $spos = $s.length;
	var canvas = data.texture;
	var width = data.image.width;
	var height = data.image.height;
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(data.image,0,0,width,height);
	data.bitmapData.width = width;
	data.bitmapData.height = height;
	data.bitmapData.rect = new jeash.geom.Rectangle(0,0,width,height);
	data.bitmapData.jeashBuildLease();
	if(data.inLoader != null) {
		var e1 = new jeash.events.Event(jeash.events.Event.COMPLETE);
		e1.target = data.inLoader;
		data.inLoader.dispatchEvent(e1);
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.jeashLoadFromFile = function(inFilename,inLoader) {
	$s.push("jeash.display.BitmapData::jeashLoadFromFile");
	var $spos = $s.length;
	var image = js.Lib.document.createElement("img");
	if(inLoader != null) {
		var data = { image : image, texture : this.mTextureBuffer, inLoader : inLoader, bitmapData : this};
		image.addEventListener("load",(function(f,a1) {
			$s.push("jeash.display.BitmapData::jeashLoadFromFile@462");
			var $spos = $s.length;
			var $tmp = function(a2) {
				$s.push("jeash.display.BitmapData::jeashLoadFromFile@462@462");
				var $spos = $s.length;
				var $tmp = f(a1,a2);
				$s.pop();
				return $tmp;
				$s.pop();
			};
			$s.pop();
			return $tmp;
			$s.pop();
		})($closure(this,"jeashOnLoad"),data),false);
	}
	image.src = inFilename;
	$s.pop();
}
jeash.display.BitmapData.prototype.lock = function() {
	$s.push("jeash.display.BitmapData::lock");
	var $spos = $s.length;
	this.jeashLocked = true;
	var ctx = this.mTextureBuffer.getContext("2d");
	this.jeashImageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
	$s.pop();
}
jeash.display.BitmapData.prototype.unlock = function(changeRect) {
	$s.push("jeash.display.BitmapData::unlock");
	var $spos = $s.length;
	this.jeashLocked = false;
	var ctx = this.mTextureBuffer.getContext("2d");
	if(changeRect != null) ctx.putImageData(this.jeashImageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.jeashImageData,0,0);
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	$s.pop();
}
jeash.display.BitmapData.prototype.drawToSurface = function(inSurface,matrix,colorTransform,blendMode,clipRect,smothing) {
	$s.push("jeash.display.BitmapData::drawToSurface");
	var $spos = $s.length;
	var ctx = inSurface.getContext("2d");
	ctx.save();
	if(matrix != null) ctx.transform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	ctx.drawImage(this.mTextureBuffer,0,0);
	ctx.restore();
	$s.pop();
}
jeash.display.BitmapData.prototype.colorTransform = function(rect,colorTransform) {
	$s.push("jeash.display.BitmapData::colorTransform");
	var $spos = $s.length;
	rect = this.clipRect(rect);
	if(rect == null) {
		$s.pop();
		return;
	}
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
		var offsetX;
		var _g1 = 0, _g = imagedata.data.length >> 2;
		while(_g1 < _g) {
			var i = _g1++;
			offsetX = i * 4;
			imagedata.data[offsetX] = Std["int"](imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset);
			imagedata.data[offsetX + 1] = Std["int"](imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset);
			imagedata.data[offsetX + 2] = Std["int"](imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset);
			imagedata.data[offsetX + 3] = Std["int"](imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset);
		}
		ctx.putImageData(imagedata,rect.x,rect.y);
	} else {
		var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
		var offsetY;
		var offsetX;
		var _g1 = 0, _g = Math.round(rect.height);
		while(_g1 < _g) {
			var i = _g1++;
			offsetY = i * this.jeashImageData.width;
			var _g3 = 0, _g2 = Math.round(rect.width);
			while(_g3 < _g2) {
				var j = _g3++;
				offsetX = 4 * (j + offsetY);
				this.jeashImageData.data[s + offsetX] = Std["int"](this.jeashImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset);
				this.jeashImageData.data[s + offsetX + 1] = Std["int"](this.jeashImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset);
				this.jeashImageData.data[s + offsetX + 2] = Std["int"](this.jeashImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset);
				this.jeashImageData.data[s + offsetX + 3] = Std["int"](this.jeashImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset);
			}
		}
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.copyChannel = function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
	$s.push("jeash.display.BitmapData::copyChannel");
	var $spos = $s.length;
	this.rect = this.clipRect(this.rect);
	if(this.rect == null) {
		$s.pop();
		return;
	}
	if(sourceBitmapData.mTextureBuffer == null || this.mTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) {
		$s.pop();
		return;
	}
	if(sourceRect.x + sourceRect.width > sourceBitmapData.mTextureBuffer.width) sourceRect.width = sourceBitmapData.mTextureBuffer.width - sourceRect.x;
	if(sourceRect.y + sourceRect.height > sourceBitmapData.mTextureBuffer.height) sourceRect.height = sourceBitmapData.mTextureBuffer.height - sourceRect.y;
	var doChannelCopy = function(imageData) {
		$s.push("jeash.display.BitmapData::copyChannel@555");
		var $spos = $s.length;
		var srcCtx = sourceBitmapData.mTextureBuffer.getContext("2d");
		var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
		var destIdx = destChannel == 8?3:destChannel == 4?2:destChannel == 2?1:destChannel == 1?0:(function($this) {
			var $r;
			throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			return $r;
		}(this));
		var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
		var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
		var setPos = function(val) {
			$s.push("jeash.display.BitmapData::copyChannel@555@567");
			var $spos = $s.length;
			if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
			imageData.data[pos] = val;
			pos += 4;
			$s.pop();
		};
		var srcIdx = sourceChannel == 8?3:sourceChannel == 4?2:sourceChannel == 2?1:sourceChannel == 1?0:(function($this) {
			var $r;
			throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			return $r;
		}(this));
		while(srcIdx < srcImageData.data.length) {
			setPos(srcImageData.data[srcIdx]);
			srcIdx += 4;
		}
		$s.pop();
	};
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		doChannelCopy(imageData);
		ctx.putImageData(imageData,0,0);
	} else doChannelCopy(this.jeashImageData);
	$s.pop();
}
jeash.display.BitmapData.prototype.hitTest = function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
	$s.push("jeash.display.BitmapData::hitTest");
	var $spos = $s.length;
	if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
	var me = this;
	var type = Type.getClassName(Type.getClass(secondObject));
	firstAlphaThreshold = firstAlphaThreshold & -1;
	var doHitTest = function(imageData) {
		$s.push("jeash.display.BitmapData::hitTest@602");
		var $spos = $s.length;
		if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) {
			$s.pop();
			return false;
		}
		switch(secondObject.__proto__.__class__.__name__[2]) {
		case "Rectangle":
			var rect = secondObject;
			rect.x -= firstPoint.x;
			rect.y -= firstPoint.y;
			rect = me.clipRect(rect);
			if(rect == null) {
				$s.pop();
				return false;
			}
			var boundingBox = new jeash.geom.Rectangle(0,0,me.mTextureBuffer != null?me.mTextureBuffer.width:0,me.mTextureBuffer != null?me.mTextureBuffer.height:0);
			if(!rect.intersects(boundingBox)) {
				$s.pop();
				return false;
			}
			var diff = rect.intersection(boundingBox);
			var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
			var pos = offset;
			var boundR = Math.round(4 * (diff.x + diff.width));
			while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				if(imageData.data[pos] - firstAlphaThreshold >= 0) {
					$s.pop();
					return true;
				}
				pos += 4;
			}
			$s.pop();
			return false;
		case "Point":
			var point = secondObject;
			var x = point.x - firstPoint.x, y = point.y - firstPoint.y;
			if(x < 0 || y < 0 || x >= (me.mTextureBuffer != null?me.mTextureBuffer.width:0) || y >= (me.mTextureBuffer != null?me.mTextureBuffer.height:0)) {
				$s.pop();
				return false;
			}
			if(imageData.data[Math.round(4 * (y * (me.mTextureBuffer != null?me.mTextureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) {
				$s.pop();
				return true;
			}
			$s.pop();
			return false;
		case "Bitmap":
			throw "BitmapData::hitTest secondObject argument as BitmapData is not (yet) supported.";
			$s.pop();
			return false;
		case "BitmapData":
			throw "BitmapData::hitTest secondObject argument as BitmapData is not (yet) supported.";
			$s.pop();
			return false;
		default:
			throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
			$s.pop();
			return false;
		}
		$s.pop();
	};
	if(!this.jeashLocked) {
		this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
		var ctx = this.mTextureBuffer.getContext("2d");
		var imageData = ctx.getImageData(0,0,this.mTextureBuffer != null?this.mTextureBuffer.width:0,this.mTextureBuffer != null?this.mTextureBuffer.height:0);
		var $tmp = doHitTest(imageData);
		$s.pop();
		return $tmp;
		ctx.putImageData(imageData,0,0);
	} else {
		var $tmp = doHitTest(this.jeashImageData);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.display.BitmapData.prototype.scroll = function(x,y) {
	$s.push("jeash.display.BitmapData::scroll");
	var $spos = $s.length;
	throw "Not implemented yet, patches welcome. BitmapData::scroll.";
	$s.pop();
}
jeash.display.BitmapData.prototype.jeashGetLease = function() {
	$s.push("jeash.display.BitmapData::jeashGetLease");
	var $spos = $s.length;
	var $tmp = this.jeashLease;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.BitmapData.prototype.jeashGetNumRefBitmaps = function() {
	$s.push("jeash.display.BitmapData::jeashGetNumRefBitmaps");
	var $spos = $s.length;
	var $tmp = this.jeashAssignedBitmaps;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.BitmapData.prototype.jeashIncrNumRefBitmaps = function() {
	$s.push("jeash.display.BitmapData::jeashIncrNumRefBitmaps");
	var $spos = $s.length;
	this.jeashAssignedBitmaps++;
	$s.pop();
}
jeash.display.BitmapData.prototype.jeashDecrNumRefBitmaps = function() {
	$s.push("jeash.display.BitmapData::jeashDecrNumRefBitmaps");
	var $spos = $s.length;
	this.jeashAssignedBitmaps--;
	$s.pop();
}
jeash.display.BitmapData.prototype.jeashBuildLease = function() {
	$s.push("jeash.display.BitmapData::jeashBuildLease");
	var $spos = $s.length;
	this.jeashLease = new jeash.display.ImageDataLease(this.jeashLeaseNum++,Date.now().getTime());
	$s.pop();
}
jeash.display.BitmapData.prototype.__class__ = jeash.display.BitmapData;
jeash.display.BitmapData.__interfaces__ = [jeash.display.IBitmapDrawable];
if(!jeash.geom) jeash.geom = {}
jeash.geom.Point = function(inX,inY) {
	if( inX === $_ ) return;
	$s.push("jeash.geom.Point::new");
	var $spos = $s.length;
	this.x = inX == null?0.0:inX;
	this.y = inY == null?0.0:inY;
	$s.pop();
}
jeash.geom.Point.__name__ = ["jeash","geom","Point"];
jeash.geom.Point.distance = function(pt1,pt2) {
	$s.push("jeash.geom.Point::distance");
	var $spos = $s.length;
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	var $tmp = Math.sqrt(dx * dx + dy * dy);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Point.interpolate = function(pt1,pt2,f) {
	$s.push("jeash.geom.Point::interpolate");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Point.polar = function(len,angle) {
	$s.push("jeash.geom.Point::polar");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Point.prototype.x = null;
jeash.geom.Point.prototype.y = null;
jeash.geom.Point.prototype.add = function(v) {
	$s.push("jeash.geom.Point::add");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(v.x + this.x,v.y + this.y);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Point.prototype.clone = function() {
	$s.push("jeash.geom.Point::clone");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(this.x,this.y);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Point.prototype.equals = function(toCompare) {
	$s.push("jeash.geom.Point::equals");
	var $spos = $s.length;
	var $tmp = toCompare.x == this.x && toCompare.y == this.y;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Point.prototype.length = null;
jeash.geom.Point.prototype.get_length = function() {
	$s.push("jeash.geom.Point::get_length");
	var $spos = $s.length;
	var $tmp = Math.sqrt(this.x * this.x + this.y * this.y);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Point.prototype.normalize = function(thickness) {
	$s.push("jeash.geom.Point::normalize");
	var $spos = $s.length;
	if(this.x == 0 && this.y == 0) this.x = thickness; else {
		var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
		this.x *= norm;
		this.y *= norm;
	}
	$s.pop();
}
jeash.geom.Point.prototype.offset = function(dx,dy) {
	$s.push("jeash.geom.Point::offset");
	var $spos = $s.length;
	this.x += dx;
	this.y += dy;
	$s.pop();
}
jeash.geom.Point.prototype.subtract = function(v) {
	$s.push("jeash.geom.Point::subtract");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(this.x - v.x,this.y - v.y);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Point.prototype.__class__ = jeash.geom.Point;
List = function(p) {
	if( p === $_ ) return;
	$s.push("List::new");
	var $spos = $s.length;
	this.length = 0;
	$s.pop();
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	$s.push("List::add");
	var $spos = $s.length;
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.push = function(item) {
	$s.push("List::push");
	var $spos = $s.length;
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.first = function() {
	$s.push("List::first");
	var $spos = $s.length;
	var $tmp = this.h == null?null:this.h[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.last = function() {
	$s.push("List::last");
	var $spos = $s.length;
	var $tmp = this.q == null?null:this.q[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.pop = function() {
	$s.push("List::pop");
	var $spos = $s.length;
	if(this.h == null) {
		$s.pop();
		return null;
	}
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	$s.pop();
	return x;
	$s.pop();
}
List.prototype.isEmpty = function() {
	$s.push("List::isEmpty");
	var $spos = $s.length;
	var $tmp = this.h == null;
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.clear = function() {
	$s.push("List::clear");
	var $spos = $s.length;
	this.h = null;
	this.q = null;
	this.length = 0;
	$s.pop();
}
List.prototype.remove = function(v) {
	$s.push("List::remove");
	var $spos = $s.length;
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1]; else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			$s.pop();
			return true;
		}
		prev = l;
		l = l[1];
	}
	$s.pop();
	return false;
	$s.pop();
}
List.prototype.iterator = function() {
	$s.push("List::iterator");
	var $spos = $s.length;
	var $tmp = { h : this.h, hasNext : function() {
		$s.push("List::iterator@155");
		var $spos = $s.length;
		var $tmp = this.h != null;
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("List::iterator@158");
		var $spos = $s.length;
		if(this.h == null) {
			$s.pop();
			return null;
		}
		var x = this.h[0];
		this.h = this.h[1];
		$s.pop();
		return x;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.toString = function() {
	$s.push("List::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{" == null?"null":"{";
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = ", " == null?"null":", ";
		s.add(Std.string(l[0]));
		l = l[1];
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.join = function(sep) {
	$s.push("List::join");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
		s.add(l[0]);
		l = l[1];
	}
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
List.prototype.filter = function(f) {
	$s.push("List::filter");
	var $spos = $s.length;
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	$s.pop();
	return l2;
	$s.pop();
}
List.prototype.map = function(f) {
	$s.push("List::map");
	var $spos = $s.length;
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	$s.pop();
	return b;
	$s.pop();
}
List.prototype.__class__ = List;
IntIter = function(min,max) {
	if( min === $_ ) return;
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	var $tmp = this.min < this.max;
	$s.pop();
	return $tmp;
	$s.pop();
}
IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	var $tmp = this.min++;
	$s.pop();
	return $tmp;
	$s.pop();
}
IntIter.prototype.__class__ = IntIter;
if(!jeash.system) jeash.system = {}
jeash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if( checkPolicyFile === $_ ) return;
	$s.push("jeash.system.LoaderContext::new");
	var $spos = $s.length;
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	$s.pop();
}
jeash.system.LoaderContext.__name__ = ["jeash","system","LoaderContext"];
jeash.system.LoaderContext.prototype.applicationDomain = null;
jeash.system.LoaderContext.prototype.checkPolicyFile = null;
jeash.system.LoaderContext.prototype.securityDomain = null;
jeash.system.LoaderContext.prototype.__class__ = jeash.system.LoaderContext;
Hash = function(p) {
	if( p === $_ ) return;
	$s.push("Hash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	$s.pop();
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	var $tmp = this.h["$" + key];
	$s.pop();
	return $tmp;
	$s.pop();
}
Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		var $tmp = this.hasOwnProperty.call(this.h,key);
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		for(var i in this.h) if( i == key ) return true;
		$s.pop();
		return false;
	}
	$s.pop();
}
Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		$s.pop();
		return false;
	}
	delete(this.h["$" + key]);
	$s.pop();
	return true;
	$s.pop();
}
Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	var $tmp = a.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
		$s.push("Hash::iterator@75");
		var $spos = $s.length;
		var $tmp = this.it.hasNext();
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("Hash::iterator@76");
		var $spos = $s.length;
		var i = this.it.next();
		var $tmp = this.ref["$" + i];
		$s.pop();
		return $tmp;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
Hash.prototype.__class__ = Hash;
IntHash = function(p) {
	if( p === $_ ) return;
	$s.push("IntHash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	$s.pop();
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	$s.push("IntHash::set");
	var $spos = $s.length;
	this.h[key] = value;
	$s.pop();
}
IntHash.prototype.get = function(key) {
	$s.push("IntHash::get");
	var $spos = $s.length;
	var $tmp = this.h[key];
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.exists = function(key) {
	$s.push("IntHash::exists");
	var $spos = $s.length;
	var $tmp = this.h[key] != null;
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.remove = function(key) {
	$s.push("IntHash::remove");
	var $spos = $s.length;
	if(this.h[key] == null) {
		$s.pop();
		return false;
	}
	delete(this.h[key]);
	$s.pop();
	return true;
	$s.pop();
}
IntHash.prototype.keys = function() {
	$s.push("IntHash::keys");
	var $spos = $s.length;
	var a = new Array();
	for( x in this.h ) a.push(x);
	var $tmp = a.iterator();
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.iterator = function() {
	$s.push("IntHash::iterator");
	var $spos = $s.length;
	var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
		$s.push("IntHash::iterator@66");
		var $spos = $s.length;
		var $tmp = this.it.hasNext();
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("IntHash::iterator@67");
		var $spos = $s.length;
		var i = this.it.next();
		var $tmp = this.ref[i];
		$s.pop();
		return $tmp;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.toString = function() {
	$s.push("IntHash::toString");
	var $spos = $s.length;
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
IntHash.prototype.__class__ = IntHash;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	$s.push("StringTools::urlEncode");
	var $spos = $s.length;
	var $tmp = encodeURIComponent(s);
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.urlDecode = function(s) {
	$s.push("StringTools::urlDecode");
	var $spos = $s.length;
	var $tmp = decodeURIComponent(s.split("+").join(" "));
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.htmlEscape = function(s) {
	$s.push("StringTools::htmlEscape");
	var $spos = $s.length;
	var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.htmlUnescape = function(s) {
	$s.push("StringTools::htmlUnescape");
	var $spos = $s.length;
	var $tmp = s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.startsWith = function(s,start) {
	$s.push("StringTools::startsWith");
	var $spos = $s.length;
	var $tmp = s.length >= start.length && s.substr(0,start.length) == start;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.endsWith = function(s,end) {
	$s.push("StringTools::endsWith");
	var $spos = $s.length;
	var elen = end.length;
	var slen = s.length;
	var $tmp = slen >= elen && s.substr(slen - elen,elen) == end;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.isSpace = function(s,pos) {
	$s.push("StringTools::isSpace");
	var $spos = $s.length;
	var c = s.charCodeAt(pos);
	var $tmp = c >= 9 && c <= 13 || c == 32;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.ltrim = function(s) {
	$s.push("StringTools::ltrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) {
		var $tmp = s.substr(r,l - r);
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.rtrim = function(s) {
	$s.push("StringTools::rtrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) {
		var $tmp = s.substr(0,l - r);
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.trim = function(s) {
	$s.push("StringTools::trim");
	var $spos = $s.length;
	var $tmp = StringTools.ltrim(StringTools.rtrim(s));
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.rpad = function(s,c,l) {
	$s.push("StringTools::rpad");
	var $spos = $s.length;
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	$s.pop();
	return s;
	$s.pop();
}
StringTools.lpad = function(s,c,l) {
	$s.push("StringTools::lpad");
	var $spos = $s.length;
	var ns = "";
	var sl = s.length;
	if(sl >= l) {
		$s.pop();
		return s;
	}
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	var $tmp = ns + s;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.replace = function(s,sub,by) {
	$s.push("StringTools::replace");
	var $spos = $s.length;
	var $tmp = s.split(sub).join(by);
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.hex = function(n,digits) {
	$s.push("StringTools::hex");
	var $spos = $s.length;
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	$s.pop();
	return s;
	$s.pop();
}
StringTools.fastCodeAt = function(s,index) {
	$s.push("StringTools::fastCodeAt");
	var $spos = $s.length;
	var $tmp = s.cca(index);
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.isEOF = function(c) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	var $tmp = c != c;
	$s.pop();
	return $tmp;
	$s.pop();
}
StringTools.prototype.__class__ = StringTools;
if(typeof haxe=='undefined') haxe = {}
haxe.Firebug = function() { }
haxe.Firebug.__name__ = ["haxe","Firebug"];
haxe.Firebug.detect = function() {
	$s.push("haxe.Firebug::detect");
	var $spos = $s.length;
	try {
		var $tmp = console != null && console.error != null;
		$s.pop();
		return $tmp;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		$s.pop();
		return false;
	}
	$s.pop();
}
haxe.Firebug.redirectTraces = function() {
	$s.push("haxe.Firebug::redirectTraces");
	var $spos = $s.length;
	haxe.Log.trace = haxe.Firebug.trace;
	js.Lib.setErrorHandler(haxe.Firebug.onError);
	$s.pop();
}
haxe.Firebug.onError = function(err,stack) {
	$s.push("haxe.Firebug::onError");
	var $spos = $s.length;
	var buf = err + "\n";
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		buf += "Called from " + s + "\n";
	}
	haxe.Firebug.trace(buf,null);
	$s.pop();
	return true;
	$s.pop();
}
haxe.Firebug.trace = function(v,inf) {
	$s.push("haxe.Firebug::trace");
	var $spos = $s.length;
	var type = inf != null && inf.customParams != null?inf.customParams[0]:null;
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = inf == null?"error":"log";
	console[type]((inf == null?"":inf.fileName + ":" + inf.lineNumber + " : ") + Std.string(v));
	$s.pop();
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
if(!haxe.io) haxe.io = {}
haxe.io.Bytes = function(length,b) {
	if( length === $_ ) return;
	$s.push("haxe.io.Bytes::new");
	var $spos = $s.length;
	this.length = length;
	this.b = b;
	$s.pop();
}
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	$s.push("haxe.io.Bytes::alloc");
	var $spos = $s.length;
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	var $tmp = new haxe.io.Bytes(length,a);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.ofString = function(s) {
	$s.push("haxe.io.Bytes::ofString");
	var $spos = $s.length;
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.cca(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	var $tmp = new haxe.io.Bytes(a.length,a);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.ofData = function(b) {
	$s.push("haxe.io.Bytes::ofData");
	var $spos = $s.length;
	var $tmp = new haxe.io.Bytes(b.length,b);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.length = null;
haxe.io.Bytes.prototype.b = null;
haxe.io.Bytes.prototype.get = function(pos) {
	$s.push("haxe.io.Bytes::get");
	var $spos = $s.length;
	var $tmp = this.b[pos];
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.set = function(pos,v) {
	$s.push("haxe.io.Bytes::set");
	var $spos = $s.length;
	this.b[pos] = v & 255;
	$s.pop();
}
haxe.io.Bytes.prototype.blit = function(pos,src,srcpos,len) {
	$s.push("haxe.io.Bytes::blit");
	var $spos = $s.length;
	if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	if(b1 == b2 && pos > srcpos) {
		var i = len;
		while(i > 0) {
			i--;
			b1[i + pos] = b2[i + srcpos];
		}
		$s.pop();
		return;
	}
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		b1[i + pos] = b2[i + srcpos];
	}
	$s.pop();
}
haxe.io.Bytes.prototype.sub = function(pos,len) {
	$s.push("haxe.io.Bytes::sub");
	var $spos = $s.length;
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var $tmp = new haxe.io.Bytes(len,this.b.slice(pos,pos + len));
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.compare = function(other) {
	$s.push("haxe.io.Bytes::compare");
	var $spos = $s.length;
	var b1 = this.b;
	var b2 = other.b;
	var len = this.length < other.length?this.length:other.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		if(b1[i] != b2[i]) {
			var $tmp = b1[i] - b2[i];
			$s.pop();
			return $tmp;
		}
	}
	var $tmp = this.length - other.length;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.readString = function(pos,len) {
	$s.push("haxe.io.Bytes::readString");
	var $spos = $s.length;
	if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
	var s = "";
	var b = this.b;
	var fcc = String.fromCharCode;
	var i = pos;
	var max = pos + len;
	while(i < max) {
		var c = b[i++];
		if(c < 128) {
			if(c == 0) break;
			s += fcc(c);
		} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
			var c2 = b[i++];
			s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
		} else {
			var c2 = b[i++];
			var c3 = b[i++];
			s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
		}
	}
	$s.pop();
	return s;
	$s.pop();
}
haxe.io.Bytes.prototype.toString = function() {
	$s.push("haxe.io.Bytes::toString");
	var $spos = $s.length;
	var $tmp = this.readString(0,this.length);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.toHex = function() {
	$s.push("haxe.io.Bytes::toHex");
	var $spos = $s.length;
	var s = new StringBuf();
	var chars = [];
	var str = "0123456789abcdef";
	var _g1 = 0, _g = str.length;
	while(_g1 < _g) {
		var i = _g1++;
		chars.push(str.charCodeAt(i));
	}
	var _g1 = 0, _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = this.b[i];
		s.b[s.b.length] = String.fromCharCode(chars[c >> 4]);
		s.b[s.b.length] = String.fromCharCode(chars[c & 15]);
	}
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.getData = function() {
	$s.push("haxe.io.Bytes::getData");
	var $spos = $s.length;
	var $tmp = this.b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Bytes.prototype.__class__ = haxe.io.Bytes;
haxe.io.BytesBuffer = function(p) {
	if( p === $_ ) return;
	$s.push("haxe.io.BytesBuffer::new");
	var $spos = $s.length;
	this.b = new Array();
	$s.pop();
}
haxe.io.BytesBuffer.__name__ = ["haxe","io","BytesBuffer"];
haxe.io.BytesBuffer.prototype.b = null;
haxe.io.BytesBuffer.prototype.addByte = function($byte) {
	$s.push("haxe.io.BytesBuffer::addByte");
	var $spos = $s.length;
	this.b.push($byte);
	$s.pop();
}
haxe.io.BytesBuffer.prototype.add = function(src) {
	$s.push("haxe.io.BytesBuffer::add");
	var $spos = $s.length;
	var b1 = this.b;
	var b2 = src.b;
	var _g1 = 0, _g = src.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.b.push(b2[i]);
	}
	$s.pop();
}
haxe.io.BytesBuffer.prototype.addBytes = function(src,pos,len) {
	$s.push("haxe.io.BytesBuffer::addBytes");
	var $spos = $s.length;
	if(pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
	var b1 = this.b;
	var b2 = src.b;
	var _g1 = pos, _g = pos + len;
	while(_g1 < _g) {
		var i = _g1++;
		this.b.push(b2[i]);
	}
	$s.pop();
}
haxe.io.BytesBuffer.prototype.getBytes = function() {
	$s.push("haxe.io.BytesBuffer::getBytes");
	var $spos = $s.length;
	var bytes = new haxe.io.Bytes(this.b.length,this.b);
	this.b = null;
	$s.pop();
	return bytes;
	$s.pop();
}
haxe.io.BytesBuffer.prototype.__class__ = haxe.io.BytesBuffer;
jeash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if( in_a === $_ ) return;
	$s.push("jeash.geom.Matrix::new");
	var $spos = $s.length;
	this.a = in_a == null?1.0:in_a;
	this.b = in_b == null?0.0:in_b;
	this.c = in_c == null?0.0:in_c;
	this.d = in_d == null?1.0:in_d;
	this.tx = in_tx == null?0.0:in_tx;
	this.ty = in_ty == null?0.0:in_ty;
	$s.pop();
}
jeash.geom.Matrix.__name__ = ["jeash","geom","Matrix"];
jeash.geom.Matrix.prototype.a = null;
jeash.geom.Matrix.prototype.b = null;
jeash.geom.Matrix.prototype.c = null;
jeash.geom.Matrix.prototype.d = null;
jeash.geom.Matrix.prototype.tx = null;
jeash.geom.Matrix.prototype.ty = null;
jeash.geom.Matrix.prototype.clone = function() {
	$s.push("jeash.geom.Matrix::clone");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Matrix.prototype.createGradientBox = function(in_width,in_height,rotation,in_tx,in_ty) {
	$s.push("jeash.geom.Matrix::createGradientBox");
	var $spos = $s.length;
	this.a = in_width / 1638.4;
	this.d = in_height / 1638.4;
	if(rotation != null && rotation != 0.0) {
		var cos = Math.cos(rotation);
		var sin = Math.sin(rotation);
		this.b = sin * this.d;
		this.c = -sin * this.a;
		this.a *= cos;
		this.d *= cos;
	} else this.b = this.c = 0;
	this.tx = in_tx != null?in_tx + in_width / 2:in_width / 2;
	this.ty = in_ty != null?in_ty + in_height / 2:in_height / 2;
	$s.pop();
}
jeash.geom.Matrix.prototype.setRotation = function(inTheta,inScale) {
	$s.push("jeash.geom.Matrix::setRotation");
	var $spos = $s.length;
	var scale = inScale == null?1.0:inScale;
	this.a = Math.cos(inTheta) * scale;
	this.c = Math.sin(inTheta) * scale;
	this.b = -this.c;
	this.d = this.a;
	$s.pop();
}
jeash.geom.Matrix.prototype.invert = function() {
	$s.push("jeash.geom.Matrix::invert");
	var $spos = $s.length;
	var norm = this.a * this.d - this.b * this.c;
	if(norm == 0) {
		this.a = this.b = this.c = this.d = 0;
		this.tx = -this.tx;
		this.ty = -this.ty;
	} else {
		norm = 1.0 / norm;
		var a1 = this.d * norm;
		this.d = this.a * norm;
		this.a = a1;
		this.b *= -norm;
		this.c *= -norm;
		var tx1 = -this.a * this.tx - this.c * this.ty;
		this.ty = -this.b * this.tx - this.d * this.ty;
		this.tx = tx1;
	}
	$s.pop();
	return this;
	$s.pop();
}
jeash.geom.Matrix.prototype.transformPoint = function(inPos) {
	$s.push("jeash.geom.Matrix::transformPoint");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Matrix.prototype.translate = function(inDX,inDY) {
	$s.push("jeash.geom.Matrix::translate");
	var $spos = $s.length;
	this.tx += inDX;
	this.ty += inDY;
	$s.pop();
}
jeash.geom.Matrix.prototype.rotate = function(inTheta) {
	$s.push("jeash.geom.Matrix::rotate");
	var $spos = $s.length;
	var cos = Math.cos(inTheta);
	var sin = Math.sin(inTheta);
	var a1 = this.a * cos - this.b * sin;
	this.b = this.a * sin + this.b * cos;
	this.a = a1;
	var c1 = this.c * cos - this.d * sin;
	this.d = this.c * sin + this.d * cos;
	this.c = c1;
	var tx1 = this.tx * cos - this.ty * sin;
	this.ty = this.tx * sin + this.ty * cos;
	this.tx = tx1;
	$s.pop();
}
jeash.geom.Matrix.prototype.scale = function(inSX,inSY) {
	$s.push("jeash.geom.Matrix::scale");
	var $spos = $s.length;
	this.a *= inSX;
	this.b *= inSY;
	this.c *= inSX;
	this.d *= inSY;
	this.tx *= inSX;
	this.ty *= inSY;
	$s.pop();
}
jeash.geom.Matrix.prototype.concat = function(m) {
	$s.push("jeash.geom.Matrix::concat");
	var $spos = $s.length;
	var a1 = this.a * m.a + this.b * m.c;
	this.b = this.a * m.b + this.b * m.d;
	this.a = a1;
	var c1 = this.c * m.a + this.d * m.c;
	this.d = this.c * m.b + this.d * m.d;
	this.c = c1;
	var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
	this.ty = this.tx * m.b + this.ty * m.d + m.ty;
	this.tx = tx1;
	$s.pop();
}
jeash.geom.Matrix.prototype.mult = function(m) {
	$s.push("jeash.geom.Matrix::mult");
	var $spos = $s.length;
	var result = new jeash.geom.Matrix();
	result.a = this.a * m.a + this.b * m.c;
	result.b = this.a * m.b + this.b * m.d;
	result.c = this.c * m.a + this.d * m.c;
	result.d = this.c * m.b + this.d * m.d;
	result.tx = this.tx * m.a + this.ty * m.c + m.tx;
	result.ty = this.tx * m.b + this.ty * m.d + m.ty;
	$s.pop();
	return result;
	$s.pop();
}
jeash.geom.Matrix.prototype.identity = function() {
	$s.push("jeash.geom.Matrix::identity");
	var $spos = $s.length;
	this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 1;
	this.tx = 0;
	this.ty = 0;
	$s.pop();
}
jeash.geom.Matrix.prototype.toMozString = function() {
	$s.push("jeash.geom.Matrix::toMozString");
	var $spos = $s.length;
	var $tmp = "matrix(" + this.a.toFixed(4) + ", " + this.b.toFixed(4) + ", " + this.c.toFixed(4) + ", " + this.d.toFixed(4) + ", " + this.tx.toFixed(4) + "px, " + this.ty.toFixed(4) + "px)";
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Matrix.prototype.toString = function() {
	$s.push("jeash.geom.Matrix::toString");
	var $spos = $s.length;
	var $tmp = "matrix(" + this.a.toFixed(4) + ", " + this.b.toFixed(4) + ", " + this.c.toFixed(4) + ", " + this.d.toFixed(4) + ", " + this.tx.toFixed(4) + ", " + this.ty.toFixed(4) + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Matrix.prototype.__class__ = jeash.geom.Matrix;
haxe.Resource = function() { }
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.listNames = function() {
	$s.push("haxe.Resource::listNames");
	var $spos = $s.length;
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	$s.pop();
	return names;
	$s.pop();
}
haxe.Resource.getString = function(name) {
	$s.push("haxe.Resource::getString");
	var $spos = $s.length;
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) {
				var $tmp = x.str;
				$s.pop();
				return $tmp;
			}
			var b = haxe.Unserializer.run(x.data);
			var $tmp = b.toString();
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
haxe.Resource.getBytes = function(name) {
	$s.push("haxe.Resource::getBytes");
	var $spos = $s.length;
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) {
				var $tmp = haxe.io.Bytes.ofString(x.str);
				$s.pop();
				return $tmp;
			}
			var $tmp = haxe.Unserializer.run(x.data);
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
haxe.Resource.prototype.__class__ = haxe.Resource;
if(!jeash.errors) jeash.errors = {}
jeash.errors.Error = function(message,id) {
	if( message === $_ ) return;
	$s.push("jeash.errors.Error::new");
	var $spos = $s.length;
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
	$s.pop();
}
jeash.errors.Error.__name__ = ["jeash","errors","Error"];
jeash.errors.Error.prototype.errorID = null;
jeash.errors.Error.prototype.message = null;
jeash.errors.Error.prototype.name = null;
jeash.errors.Error.prototype.getStackTrace = function() {
	$s.push("jeash.errors.Error::getStackTrace");
	var $spos = $s.length;
	var $tmp = haxe.Stack.toString(haxe.Stack.exceptionStack());
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.errors.Error.prototype.toString = function() {
	$s.push("jeash.errors.Error::toString");
	var $spos = $s.length;
	if(this.message != null) {
		var $tmp = this.message;
		$s.pop();
		return $tmp;
	} else {
		$s.pop();
		return "Error";
	}
	$s.pop();
}
jeash.errors.Error.prototype.__class__ = jeash.errors.Error;
jeash.errors.IOError = function(message) {
	if( message === $_ ) return;
	$s.push("jeash.errors.IOError::new");
	var $spos = $s.length;
	if(message == null) message = "";
	jeash.errors.Error.call(this,message);
	$s.pop();
}
jeash.errors.IOError.__name__ = ["jeash","errors","IOError"];
jeash.errors.IOError.__super__ = jeash.errors.Error;
for(var k in jeash.errors.Error.prototype ) jeash.errors.IOError.prototype[k] = jeash.errors.Error.prototype[k];
jeash.errors.IOError.prototype.__class__ = jeash.errors.IOError;
jeash.display.DisplayObject = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.display.DisplayObject::new");
	var $spos = $s.length;
	this.parent = null;
	jeash.events.EventDispatcher.call(this,null);
	this.jeashSetX(this.jeashSetY(0));
	this.jeashScaleX = this.jeashScaleY = 1.0;
	this.alpha = 1.0;
	this.jeashSetRotation(0.0);
	this.__swf_depth = 0;
	this.mMatrix = new jeash.geom.Matrix();
	this.mFullMatrix = new jeash.geom.Matrix();
	this.mMask = null;
	this.mMaskingObj = null;
	this.mBoundsRect = new jeash.geom.Rectangle();
	this.mGraphicsBounds = null;
	this.mMaskHandle = null;
	this.name = "DisplayObject " + jeash.display.DisplayObject.mNameID++;
	this.jeashSetVisible(true);
	$s.pop();
}
jeash.display.DisplayObject.__name__ = ["jeash","display","DisplayObject"];
jeash.display.DisplayObject.__super__ = jeash.events.EventDispatcher;
for(var k in jeash.events.EventDispatcher.prototype ) jeash.display.DisplayObject.prototype[k] = jeash.events.EventDispatcher.prototype[k];
jeash.display.DisplayObject.GetFlatGLMatrix = function(m) {
	$s.push("jeash.display.DisplayObject::GetFlatGLMatrix");
	var $spos = $s.length;
	var $tmp = [m.a,m.b,0,m.tx,m.c,m.d,0,m.ty,0,0,1,0,0,0,-1,1];
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.x = null;
jeash.display.DisplayObject.prototype.y = null;
jeash.display.DisplayObject.prototype.scaleX = null;
jeash.display.DisplayObject.prototype.scaleY = null;
jeash.display.DisplayObject.prototype.rotation = null;
jeash.display.DisplayObject.prototype.accessibilityProperties = null;
jeash.display.DisplayObject.prototype.alpha = null;
jeash.display.DisplayObject.prototype.name = null;
jeash.display.DisplayObject.prototype.cacheAsBitmap = null;
jeash.display.DisplayObject.prototype.width = null;
jeash.display.DisplayObject.prototype.height = null;
jeash.display.DisplayObject.prototype.visible = null;
jeash.display.DisplayObject.prototype.opaqueBackground = null;
jeash.display.DisplayObject.prototype.mouseX = null;
jeash.display.DisplayObject.prototype.mouseY = null;
jeash.display.DisplayObject.prototype.parent = null;
jeash.display.DisplayObject.prototype.stage = null;
jeash.display.DisplayObject.prototype.scrollRect = null;
jeash.display.DisplayObject.prototype.mask = null;
jeash.display.DisplayObject.prototype.filters = null;
jeash.display.DisplayObject.prototype.blendMode = null;
jeash.display.DisplayObject.prototype.loaderInfo = null;
jeash.display.DisplayObject.prototype.__swf_depth = null;
jeash.display.DisplayObject.prototype.transform = null;
jeash.display.DisplayObject.prototype.mBoundsDirty = null;
jeash.display.DisplayObject.prototype.mMtxChainDirty = null;
jeash.display.DisplayObject.prototype.mMtxDirty = null;
jeash.display.DisplayObject.prototype.mBoundsRect = null;
jeash.display.DisplayObject.prototype.mGraphicsBounds = null;
jeash.display.DisplayObject.prototype.mScale9Grid = null;
jeash.display.DisplayObject.prototype.mMatrix = null;
jeash.display.DisplayObject.prototype.mFullMatrix = null;
jeash.display.DisplayObject.prototype.jeashX = null;
jeash.display.DisplayObject.prototype.jeashY = null;
jeash.display.DisplayObject.prototype.jeashScaleX = null;
jeash.display.DisplayObject.prototype.jeashScaleY = null;
jeash.display.DisplayObject.prototype.jeashRotation = null;
jeash.display.DisplayObject.prototype.jeashVisible = null;
jeash.display.DisplayObject.prototype.mScrollRect = null;
jeash.display.DisplayObject.prototype.mOpaqueBackground = null;
jeash.display.DisplayObject.prototype.mMask = null;
jeash.display.DisplayObject.prototype.mMaskingObj = null;
jeash.display.DisplayObject.prototype.mMaskHandle = null;
jeash.display.DisplayObject.prototype.jeashFilters = null;
jeash.display.DisplayObject.prototype.toString = function() {
	$s.push("jeash.display.DisplayObject::toString");
	var $spos = $s.length;
	var $tmp = this.name;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashDoAdded = function(inObj) {
	$s.push("jeash.display.DisplayObject::jeashDoAdded");
	var $spos = $s.length;
	if(inObj == this) {
		var evt = new jeash.events.Event(jeash.events.Event.ADDED,true,false);
		evt.target = inObj;
		this.dispatchEvent(evt);
	}
	var evt = new jeash.events.Event(jeash.events.Event.ADDED_TO_STAGE,false,false);
	evt.target = inObj;
	this.dispatchEvent(evt);
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashDoRemoved = function(inObj) {
	$s.push("jeash.display.DisplayObject::jeashDoRemoved");
	var $spos = $s.length;
	if(inObj == this) {
		var evt = new jeash.events.Event(jeash.events.Event.REMOVED,true,false);
		evt.target = inObj;
		this.dispatchEvent(evt);
	}
	var evt = new jeash.events.Event(jeash.events.Event.REMOVED_FROM_STAGE,false,false);
	evt.target = inObj;
	this.dispatchEvent(evt);
	var gfx = this.jeashGetGraphics();
	if(gfx != null) jeash.Lib.jeashRemoveSurface(gfx.jeashSurface);
	$s.pop();
}
jeash.display.DisplayObject.prototype.DoMouseEnter = function() {
	$s.push("jeash.display.DisplayObject::DoMouseEnter");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.DisplayObject.prototype.DoMouseLeave = function() {
	$s.push("jeash.display.DisplayObject::DoMouseLeave");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetParent = function(parent) {
	$s.push("jeash.display.DisplayObject::jeashSetParent");
	var $spos = $s.length;
	if(parent == this.parent) {
		$s.pop();
		return;
	}
	this.mMtxChainDirty = true;
	if(this.parent != null) {
		this.parent.__removeChild(this);
		this.parent.jeashInvalidateBounds();
	}
	if(parent != null) parent.jeashInvalidateBounds();
	if(this.parent == null && parent != null) {
		this.parent = parent;
		this.jeashDoAdded(this);
	} else if(this.parent != null && parent == null) {
		this.parent = parent;
		this.jeashDoRemoved(this);
	} else this.parent = parent;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetStage = function() {
	$s.push("jeash.display.DisplayObject::GetStage");
	var $spos = $s.length;
	var $tmp = jeash.Lib.jeashGetStage();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.AsContainer = function() {
	$s.push("jeash.display.DisplayObject::AsContainer");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetScrollRect = function() {
	$s.push("jeash.display.DisplayObject::GetScrollRect");
	var $spos = $s.length;
	if(this.mScrollRect == null) {
		$s.pop();
		return null;
	}
	var $tmp = this.mScrollRect.clone();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashAsInteractiveObject = function() {
	$s.push("jeash.display.DisplayObject::jeashAsInteractiveObject");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObject.prototype.SetScrollRect = function(inRect) {
	$s.push("jeash.display.DisplayObject::SetScrollRect");
	var $spos = $s.length;
	this.mScrollRect = inRect;
	var $tmp = this.GetScrollRect();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.hitTestObject = function(obj) {
	$s.push("jeash.display.DisplayObject::hitTestObject");
	var $spos = $s.length;
	$s.pop();
	return false;
	$s.pop();
}
jeash.display.DisplayObject.prototype.hitTestPoint = function(x,y,shapeFlag) {
	$s.push("jeash.display.DisplayObject::hitTestPoint");
	var $spos = $s.length;
	var bounding_box = shapeFlag == null?true:!shapeFlag;
	$s.pop();
	return true;
	$s.pop();
}
jeash.display.DisplayObject.prototype.localToGlobal = function(point) {
	$s.push("jeash.display.DisplayObject::localToGlobal");
	var $spos = $s.length;
	if(this.parent == null) {
		var $tmp = new jeash.geom.Point(this.jeashGetX() + point.x,this.jeashGetY() + point.y);
		$s.pop();
		return $tmp;
	} else {
		point.x = point.x + this.jeashGetX();
		point.y = point.y + this.jeashGetY();
		var $tmp = this.parent.localToGlobal(point);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetMouseX = function() {
	$s.push("jeash.display.DisplayObject::jeashGetMouseX");
	var $spos = $s.length;
	var $tmp = this.globalToLocal(new jeash.geom.Point(this.GetStage().jeashGetMouseX(),0)).x;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetMouseX = function(x) {
	$s.push("jeash.display.DisplayObject::jeashSetMouseX");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetMouseY = function() {
	$s.push("jeash.display.DisplayObject::jeashGetMouseY");
	var $spos = $s.length;
	var $tmp = this.globalToLocal(new jeash.geom.Point(0,this.GetStage().jeashGetMouseY())).y;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetMouseY = function(y) {
	$s.push("jeash.display.DisplayObject::jeashSetMouseY");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetTransform = function() {
	$s.push("jeash.display.DisplayObject::GetTransform");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Transform(this);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.SetTransform = function(trans) {
	$s.push("jeash.display.DisplayObject::SetTransform");
	var $spos = $s.length;
	this.mMatrix = trans.GetMatrix().clone();
	$s.pop();
	return trans;
	$s.pop();
}
jeash.display.DisplayObject.prototype.getFullMatrix = function(childMatrix) {
	$s.push("jeash.display.DisplayObject::getFullMatrix");
	var $spos = $s.length;
	if(childMatrix == null) {
		var $tmp = this.mFullMatrix.clone();
		$s.pop();
		return $tmp;
	} else {
		var $tmp = childMatrix.mult(this.mFullMatrix);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	$s.push("jeash.display.DisplayObject::getBounds");
	var $spos = $s.length;
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	if(this.mBoundsDirty) this.BuildBounds();
	var mtx = this.mFullMatrix.clone();
	mtx.concat(targetCoordinateSpace.mFullMatrix.clone().invert());
	var rect = this.mBoundsRect.transform(mtx);
	$s.pop();
	return rect;
	$s.pop();
}
jeash.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	$s.push("jeash.display.DisplayObject::getRect");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObject.prototype.globalToLocal = function(inPos) {
	$s.push("jeash.display.DisplayObject::globalToLocal");
	var $spos = $s.length;
	var $tmp = this.mFullMatrix.clone().invert().transformPoint(inPos);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetNumChildren = function() {
	$s.push("jeash.display.DisplayObject::GetNumChildren");
	var $spos = $s.length;
	$s.pop();
	return 0;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetMatrix = function() {
	$s.push("jeash.display.DisplayObject::GetMatrix");
	var $spos = $s.length;
	var $tmp = this.mMatrix.clone();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.SetMatrix = function(inMatrix) {
	$s.push("jeash.display.DisplayObject::SetMatrix");
	var $spos = $s.length;
	this.mMatrix = inMatrix.clone();
	$s.pop();
	return inMatrix;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetGraphics = function() {
	$s.push("jeash.display.DisplayObject::jeashGetGraphics");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetOpaqueBackground = function() {
	$s.push("jeash.display.DisplayObject::GetOpaqueBackground");
	var $spos = $s.length;
	var $tmp = this.mOpaqueBackground;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.SetOpaqueBackground = function(inBG) {
	$s.push("jeash.display.DisplayObject::SetOpaqueBackground");
	var $spos = $s.length;
	this.mOpaqueBackground = inBG;
	var $tmp = this.mOpaqueBackground;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetBackgroundRect = function() {
	$s.push("jeash.display.DisplayObject::GetBackgroundRect");
	var $spos = $s.length;
	if(this.mGraphicsBounds == null) {
		var gfx = this.jeashGetGraphics();
		if(gfx != null) this.mGraphicsBounds = gfx.getStandardExtent().clone();
	}
	var $tmp = this.mGraphicsBounds;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashInvalidateBounds = function() {
	$s.push("jeash.display.DisplayObject::jeashInvalidateBounds");
	var $spos = $s.length;
	this.mBoundsDirty = true;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashInvalidateMatrix = function(local) {
	$s.push("jeash.display.DisplayObject::jeashInvalidateMatrix");
	var $spos = $s.length;
	if(local == null) local = false;
	this.mMtxChainDirty = this.mMtxChainDirty || !local;
	this.mMtxDirty = this.mMtxDirty || local;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashValidateMatrix = function() {
	$s.push("jeash.display.DisplayObject::jeashValidateMatrix");
	var $spos = $s.length;
	if(this.mMtxDirty || this.mMtxChainDirty && this.parent != null) {
		if(this.mMtxChainDirty && this.parent != null) this.parent.jeashValidateMatrix();
		if(this.mMtxDirty) {
			this.mMatrix.b = this.mMatrix.c = this.mMatrix.tx = this.mMatrix.ty = 0;
			this.mMatrix.a = this.jeashScaleX;
			this.mMatrix.d = this.jeashScaleY;
			var rad = this.jeashRotation * Math.PI / 180.0;
			if(rad != 0.0) this.mMatrix.rotate(rad);
			this.mMatrix.tx = this.jeashX;
			this.mMatrix.ty = this.jeashY;
		}
		if(this.parent != null) this.mFullMatrix = this.parent.getFullMatrix(this.mMatrix); else this.mFullMatrix = this.mMatrix;
		this.mMtxDirty = this.mMtxChainDirty = false;
	}
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashRender = function(parentMatrix,inMask) {
	$s.push("jeash.display.DisplayObject::jeashRender");
	var $spos = $s.length;
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		var m = this.mFullMatrix.clone();
		gfx.jeashRender(inMask,m);
		var extent = gfx.getStandardExtent();
		if(gfx.jeashShift) {
			m.tx = m.tx + extent.x * m.a + extent.y * m.c;
			m.ty = m.ty + extent.x * m.b + extent.y * m.d;
		}
		if(inMask != null) jeash.Lib.jeashDrawToSurface(gfx.jeashSurface,inMask,m,(this.parent != null?this.parent.alpha:1) * this.alpha); else {
			jeash.Lib.jeashSetSurfaceTransform(gfx.jeashSurface,m);
			jeash.Lib.jeashSetSurfaceOpacity(gfx.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
		}
	}
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	$s.push("jeash.display.DisplayObject::jeashRenderContentsToCache");
	var $spos = $s.length;
	this.jeashRender(parentMatrix,canvas);
	$s.pop();
}
jeash.display.DisplayObject.prototype.MatrixUniforms = function() {
	$s.push("jeash.display.DisplayObject::MatrixUniforms");
	var $spos = $s.length;
	$s.pop();
	return false;
	$s.pop();
}
jeash.display.DisplayObject.prototype.drawToSurface = function(inSurface,matrix,colorTransform,blendMode,clipRect,smoothing) {
	$s.push("jeash.display.DisplayObject::drawToSurface");
	var $spos = $s.length;
	if(matrix == null) matrix = new jeash.geom.Matrix();
	this.jeashRenderContentsToCache(matrix,inSurface);
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint = function(point) {
	$s.push("jeash.display.DisplayObject::jeashGetObjectUnderPoint");
	var $spos = $s.length;
	if(!this.jeashGetVisible()) {
		$s.pop();
		return null;
	}
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		var local = this.globalToLocal(point);
		switch( (this.GetStage().jeashPointInPathMode)[1] ) {
		case 0:
			if(local.x < 0 || local.y < 0 || local.x * this.jeashGetScaleX() > this.jeashGetWidth() || local.y * this.jeashGetScaleY() > this.jeashGetHeight()) {
				$s.pop();
				return null;
			}
			if(gfx.jeashHitTest(local.x,local.y)) {
				var $tmp = this;
				$s.pop();
				return $tmp;
			}
			break;
		case 1:
			if(local.x < 0 || local.y < 0 || local.x * this.jeashGetScaleX() > this.jeashGetWidth() || local.y * this.jeashGetScaleY() > this.jeashGetHeight()) {
				$s.pop();
				return null;
			}
			if(gfx.jeashHitTest(local.x * this.jeashGetScaleX(),local.y * this.jeashGetScaleY())) {
				var $tmp = this;
				$s.pop();
				return $tmp;
			}
			break;
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetMask = function() {
	$s.push("jeash.display.DisplayObject::GetMask");
	var $spos = $s.length;
	var $tmp = this.mMask;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.SetMask = function(inMask) {
	$s.push("jeash.display.DisplayObject::SetMask");
	var $spos = $s.length;
	if(this.mMask != null) this.mMask.mMaskingObj = null;
	this.mMask = inMask;
	if(this.mMask != null) this.mMask.mMaskingObj = this;
	var $tmp = this.mMask;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetFilters = function(filters) {
	$s.push("jeash.display.DisplayObject::jeashSetFilters");
	var $spos = $s.length;
	if(filters == null) this.jeashFilters = null; else {
		this.jeashFilters = new Array();
		var _g = 0;
		while(_g < filters.length) {
			var filter = filters[_g];
			++_g;
			this.jeashFilters.push(filter.clone());
		}
	}
	$s.pop();
	return filters;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetFilters = function() {
	$s.push("jeash.display.DisplayObject::jeashGetFilters");
	var $spos = $s.length;
	if(this.jeashFilters == null) {
		var $tmp = [];
		$s.pop();
		return $tmp;
	}
	var result = new Array();
	var _g = 0, _g1 = this.jeashFilters;
	while(_g < _g1.length) {
		var filter = _g1[_g];
		++_g;
		result.push(filter.clone());
	}
	$s.pop();
	return result;
	$s.pop();
}
jeash.display.DisplayObject.prototype.BuildBounds = function() {
	$s.push("jeash.display.DisplayObject::BuildBounds");
	var $spos = $s.length;
	var gfx = this.jeashGetGraphics();
	if(gfx == null) this.mBoundsRect = new jeash.geom.Rectangle(this.jeashGetX(),this.jeashGetY(),0,0); else {
		this.mBoundsRect = gfx.getStandardExtent().clone();
		gfx.mBoundsDirty = false;
		if(this.mScale9Grid != null) {
			this.mBoundsRect.width *= this.jeashGetScaleX();
			this.mBoundsRect.height *= this.jeashGetScaleY();
		}
	}
	this.mBoundsDirty = false;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetScreenBounds = function() {
	$s.push("jeash.display.DisplayObject::GetScreenBounds");
	var $spos = $s.length;
	if(this.mBoundsDirty) this.BuildBounds();
	var $tmp = this.mBoundsRect.clone();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.GetFocusObjects = function(outObjs) {
	$s.push("jeash.display.DisplayObject::GetFocusObjects");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.DisplayObject.prototype.__BlendIndex = function() {
	$s.push("jeash.display.DisplayObject::__BlendIndex");
	var $spos = $s.length;
	var $tmp = this.blendMode == null?jeash.display.Graphics.BLEND_NORMAL:this.blendMode[1];
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetInteractiveObjectStack = function(outStack) {
	$s.push("jeash.display.DisplayObject::jeashGetInteractiveObjectStack");
	var $spos = $s.length;
	var io = this.jeashAsInteractiveObject();
	if(io != null) outStack.push(io);
	if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(outStack);
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashFireEvent = function(event) {
	$s.push("jeash.display.DisplayObject::jeashFireEvent");
	var $spos = $s.length;
	var stack = [];
	if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(stack);
	var l = stack.length;
	if(l > 0) {
		event.jeashSetPhase(jeash.events.EventPhase.CAPTURING_PHASE);
		stack.reverse();
		var _g = 0;
		while(_g < stack.length) {
			var obj = stack[_g];
			++_g;
			event.currentTarget = obj;
			obj.dispatchEvent(event);
			if(event.jeashGetIsCancelled()) {
				$s.pop();
				return;
			}
		}
	}
	event.jeashSetPhase(jeash.events.EventPhase.AT_TARGET);
	event.currentTarget = this;
	this.dispatchEvent(event);
	if(event.jeashGetIsCancelled()) {
		$s.pop();
		return;
	}
	if(event.bubbles) {
		event.jeashSetPhase(jeash.events.EventPhase.BUBBLING_PHASE);
		stack.reverse();
		var _g = 0;
		while(_g < stack.length) {
			var obj = stack[_g];
			++_g;
			event.currentTarget = obj;
			obj.dispatchEvent(event);
			if(event.jeashGetIsCancelled()) {
				$s.pop();
				return;
			}
		}
	}
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashBroadcast = function(event) {
	$s.push("jeash.display.DisplayObject::jeashBroadcast");
	var $spos = $s.length;
	this.dispatchEvent(event);
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashAddToStage = function() {
	$s.push("jeash.display.DisplayObject::jeashAddToStage");
	var $spos = $s.length;
	var gfx = this.jeashGetGraphics();
	if(gfx != null) jeash.Lib.jeashAppendSurface(gfx.jeashSurface);
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashInsertBefore = function(obj) {
	$s.push("jeash.display.DisplayObject::jeashInsertBefore");
	var $spos = $s.length;
	var gfx1 = this.jeashGetGraphics();
	var gfx2 = obj.jeashIsOnStage()?obj.jeashGetGraphics():null;
	if(gfx1 != null) {
		if(gfx2 != null) jeash.Lib.jeashAppendSurface(gfx1.jeashSurface,gfx2.jeashSurface); else jeash.Lib.jeashAppendSurface(gfx1.jeashSurface);
	}
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashIsOnStage = function() {
	$s.push("jeash.display.DisplayObject::jeashIsOnStage");
	var $spos = $s.length;
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		var $tmp = jeash.Lib.jeashIsOnStage(gfx.jeashSurface);
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return false;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetVisible = function() {
	$s.push("jeash.display.DisplayObject::jeashGetVisible");
	var $spos = $s.length;
	var $tmp = this.jeashVisible;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetVisible = function(visible) {
	$s.push("jeash.display.DisplayObject::jeashSetVisible");
	var $spos = $s.length;
	var gfx = this.jeashGetGraphics();
	if(gfx != null) {
		if(gfx.jeashSurface != null) {
			if(visible) jeash.Lib.jeashSetSurfaceVisible(gfx.jeashSurface,true); else jeash.Lib.jeashSetSurfaceVisible(gfx.jeashSurface,false);
		}
	}
	this.jeashVisible = visible;
	$s.pop();
	return visible;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetHeight = function() {
	$s.push("jeash.display.DisplayObject::jeashGetHeight");
	var $spos = $s.length;
	this.BuildBounds();
	var $tmp = this.jeashScaleY * this.mBoundsRect.height;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetHeight = function(inHeight) {
	$s.push("jeash.display.DisplayObject::jeashSetHeight");
	var $spos = $s.length;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	var h = this.mBoundsRect.height;
	if(this.jeashScaleY * h != inHeight) {
		if(h <= 0) {
			$s.pop();
			return 0;
		}
		this.jeashScaleY = inHeight / h;
		this.jeashInvalidateMatrix(true);
	}
	$s.pop();
	return inHeight;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetWidth = function() {
	$s.push("jeash.display.DisplayObject::jeashGetWidth");
	var $spos = $s.length;
	if(this.mBoundsDirty) this.BuildBounds();
	var $tmp = this.jeashScaleX * this.mBoundsRect.width;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetWidth = function(inWidth) {
	$s.push("jeash.display.DisplayObject::jeashSetWidth");
	var $spos = $s.length;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	var w = this.mBoundsRect.width;
	if(this.jeashScaleX * w != inWidth) {
		if(w <= 0) {
			$s.pop();
			return 0;
		}
		this.jeashScaleX = inWidth / w;
		this.jeashInvalidateMatrix(true);
	}
	$s.pop();
	return inWidth;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetX = function() {
	$s.push("jeash.display.DisplayObject::jeashGetX");
	var $spos = $s.length;
	var $tmp = this.jeashX;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetY = function() {
	$s.push("jeash.display.DisplayObject::jeashGetY");
	var $spos = $s.length;
	var $tmp = this.jeashY;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetX = function(n) {
	$s.push("jeash.display.DisplayObject::jeashSetX");
	var $spos = $s.length;
	this.jeashInvalidateMatrix(true);
	this.jeashX = n;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	$s.pop();
	return n;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetY = function(n) {
	$s.push("jeash.display.DisplayObject::jeashSetY");
	var $spos = $s.length;
	this.jeashInvalidateMatrix(true);
	this.jeashY = n;
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	$s.pop();
	return n;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetScaleX = function() {
	$s.push("jeash.display.DisplayObject::jeashGetScaleX");
	var $spos = $s.length;
	var $tmp = this.jeashScaleX;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetScaleY = function() {
	$s.push("jeash.display.DisplayObject::jeashGetScaleY");
	var $spos = $s.length;
	var $tmp = this.jeashScaleY;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetScaleX = function(inS) {
	$s.push("jeash.display.DisplayObject::jeashSetScaleX");
	var $spos = $s.length;
	if(this.jeashScaleX == inS) {
		$s.pop();
		return inS;
	}
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	this.jeashScaleX = inS;
	$s.pop();
	return inS;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetScaleY = function(inS) {
	$s.push("jeash.display.DisplayObject::jeashSetScaleY");
	var $spos = $s.length;
	if(this.jeashScaleY == inS) {
		$s.pop();
		return inS;
	}
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	if(this.mBoundsDirty) this.BuildBounds();
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	this.jeashScaleY = inS;
	$s.pop();
	return inS;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashSetRotation = function(n) {
	$s.push("jeash.display.DisplayObject::jeashSetRotation");
	var $spos = $s.length;
	if(!this.mMtxDirty) this.jeashInvalidateMatrix(true);
	if(this.parent != null) this.parent.jeashInvalidateBounds();
	this.jeashRotation = n;
	$s.pop();
	return n;
	$s.pop();
}
jeash.display.DisplayObject.prototype.jeashGetRotation = function() {
	$s.push("jeash.display.DisplayObject::jeashGetRotation");
	var $spos = $s.length;
	var $tmp = this.jeashRotation;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObject.prototype.__class__ = jeash.display.DisplayObject;
jeash.display.DisplayObject.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.display.InteractiveObject = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.display.InteractiveObject::new");
	var $spos = $s.length;
	jeash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.jeashSetTabIndex(0);
	this.name = "InteractiveObject";
	$s.pop();
}
jeash.display.InteractiveObject.__name__ = ["jeash","display","InteractiveObject"];
jeash.display.InteractiveObject.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.InteractiveObject.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.InteractiveObject.prototype.doubleClickEnabled = null;
jeash.display.InteractiveObject.prototype.focusRect = null;
jeash.display.InteractiveObject.prototype.mouseEnabled = null;
jeash.display.InteractiveObject.prototype.tabEnabled = null;
jeash.display.InteractiveObject.prototype.tabIndex = null;
jeash.display.InteractiveObject.prototype.jeashDoubleClickEnabled = null;
jeash.display.InteractiveObject.prototype.jeashTabIndex = null;
jeash.display.InteractiveObject.prototype.toString = function() {
	$s.push("jeash.display.InteractiveObject::toString");
	var $spos = $s.length;
	var $tmp = this.name;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.InteractiveObject.prototype.OnKey = function(inKey) {
	$s.push("jeash.display.InteractiveObject::OnKey");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.InteractiveObject.prototype.jeashAsInteractiveObject = function() {
	$s.push("jeash.display.InteractiveObject::jeashAsInteractiveObject");
	var $spos = $s.length;
	$s.pop();
	return this;
	$s.pop();
}
jeash.display.InteractiveObject.prototype.jeashGetTabIndex = function() {
	$s.push("jeash.display.InteractiveObject::jeashGetTabIndex");
	var $spos = $s.length;
	var $tmp = this.jeashTabIndex;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.InteractiveObject.prototype.jeashSetTabIndex = function(inIndex) {
	$s.push("jeash.display.InteractiveObject::jeashSetTabIndex");
	var $spos = $s.length;
	this.jeashTabIndex = inIndex;
	$s.pop();
	return inIndex;
	$s.pop();
}
jeash.display.InteractiveObject.prototype.jeashGetObjectUnderPoint = function(point) {
	$s.push("jeash.display.InteractiveObject::jeashGetObjectUnderPoint");
	var $spos = $s.length;
	if(!this.mouseEnabled) {
		$s.pop();
		return null;
	} else {
		var $tmp = jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.display.InteractiveObject.prototype.__class__ = jeash.display.InteractiveObject;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	$s.pop();
	return $tmp;
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	var m = o[f];
	if(m == null) {
		$s.pop();
		return null;
	}
	var f1 = function() {
		$s.push("js.Boot::__closure@67");
		var $spos = $s.length;
		var $tmp = m.apply(o,arguments);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	f1.scope = o;
	f1.method = m;
	$s.pop();
	return f1;
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return "null";
	}
	if(s.length >= 5) {
		$s.pop();
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) {
					var $tmp = o[0];
					$s.pop();
					return $tmp;
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				var $tmp = str + ")";
				$s.pop();
				return $tmp;
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			$s.pop();
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			$s.pop();
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				$s.pop();
				return s2;
			}
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		$s.pop();
		return str;
	case "function":
		$s.pop();
		return "<function>";
	case "string":
		$s.pop();
		return o;
	default:
		var $tmp = String(o);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		$s.pop();
		return false;
	}
	if(cc == cl) {
		$s.pop();
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				$s.pop();
				return true;
			}
		}
	}
	var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
	$s.pop();
	return $tmp;
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	try {
		if(o instanceof cl) {
			if(cl == Array) {
				var $tmp = o.__enum__ == null;
				$s.pop();
				return $tmp;
			}
			$s.pop();
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) {
			$s.pop();
			return true;
		}
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		if(cl == null) {
			$s.pop();
			return false;
		}
	}
	switch(cl) {
	case Int:
		var $tmp = Math.ceil(o%2147483648.0) === o;
		$s.pop();
		return $tmp;
	case Float:
		var $tmp = typeof(o) == "number";
		$s.pop();
		return $tmp;
	case Bool:
		var $tmp = o === true || o === false;
		$s.pop();
		return $tmp;
	case String:
		var $tmp = typeof(o) == "string";
		$s.pop();
		return $tmp;
	case Dynamic:
		$s.pop();
		return true;
	default:
		if(o == null) {
			$s.pop();
			return false;
		}
		var $tmp = o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		$s.push("js.Boot::__init@205");
		var $spos = $s.length;
		this.splice(i,0,x);
		$s.pop();
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		$s.push("js.Boot::__init@208");
		var $spos = $s.length;
		var idx = this.indexOf(obj);
		if(idx == -1) {
			$s.pop();
			return false;
		}
		this.splice(idx,1);
		$s.pop();
		return true;
		$s.pop();
	}:function(obj) {
		$s.push("js.Boot::__init@213");
		var $spos = $s.length;
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				$s.pop();
				return true;
			}
			i++;
		}
		$s.pop();
		return false;
		$s.pop();
	};
	Array.prototype.iterator = function() {
		$s.push("js.Boot::__init@225");
		var $spos = $s.length;
		var $tmp = { cur : 0, arr : this, hasNext : function() {
			$s.push("js.Boot::__init@225@229");
			var $spos = $s.length;
			var $tmp = this.cur < this.arr.length;
			$s.pop();
			return $tmp;
			$s.pop();
		}, next : function() {
			$s.push("js.Boot::__init@225@232");
			var $spos = $s.length;
			var $tmp = this.arr[this.cur++];
			$s.pop();
			return $tmp;
			$s.pop();
		}};
		$s.pop();
		return $tmp;
		$s.pop();
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@239");
		var $spos = $s.length;
		var x = this.cca(i);
		if(x != x) {
			$s.pop();
			return null;
		}
		$s.pop();
		return x;
		$s.pop();
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		$s.push("js.Boot::__init@246");
		var $spos = $s.length;
		if(pos != null && pos != 0 && len != null && len < 0) {
			$s.pop();
			return "";
		}
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		var $tmp = oldsub.apply(this,[pos,len]);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$closure = js.Boot.__closure;
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
jeash.events.Event = function(inType,inBubbles,inCancelable) {
	if( inType === $_ ) return;
	$s.push("jeash.events.Event::new");
	var $spos = $s.length;
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.jeashIsCancelled = false;
	this.jeashIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = jeash.events.EventPhase.AT_TARGET;
	$s.pop();
}
jeash.events.Event.__name__ = ["jeash","events","Event"];
jeash.events.Event.prototype.bubbles = null;
jeash.events.Event.prototype.cancelable = null;
jeash.events.Event.prototype.eventPhase = null;
jeash.events.Event.prototype.target = null;
jeash.events.Event.prototype.currentTarget = null;
jeash.events.Event.prototype.type = null;
jeash.events.Event.prototype.jeashIsCancelled = null;
jeash.events.Event.prototype.jeashIsCancelledNow = null;
jeash.events.Event.prototype.jeashSetPhase = function(phase) {
	$s.push("jeash.events.Event::jeashSetPhase");
	var $spos = $s.length;
	this.eventPhase = phase;
	$s.pop();
}
jeash.events.Event.prototype.jeashGetIsCancelled = function() {
	$s.push("jeash.events.Event::jeashGetIsCancelled");
	var $spos = $s.length;
	var $tmp = this.jeashIsCancelled;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.Event.prototype.jeashGetIsCancelledNow = function() {
	$s.push("jeash.events.Event::jeashGetIsCancelledNow");
	var $spos = $s.length;
	var $tmp = this.jeashIsCancelledNow;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.Event.prototype.clone = function() {
	$s.push("jeash.events.Event::clone");
	var $spos = $s.length;
	var $tmp = new jeash.events.Event(this.type,this.bubbles,this.cancelable);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.Event.prototype.stopImmediatePropagation = function() {
	$s.push("jeash.events.Event::stopImmediatePropagation");
	var $spos = $s.length;
	this.jeashIsCancelledNow = this.jeashIsCancelled = true;
	$s.pop();
}
jeash.events.Event.prototype.stopPropagation = function() {
	$s.push("jeash.events.Event::stopPropagation");
	var $spos = $s.length;
	this.jeashIsCancelled = true;
	$s.pop();
}
jeash.events.Event.prototype.toString = function() {
	$s.push("jeash.events.Event::toString");
	var $spos = $s.length;
	$s.pop();
	return "Event";
	$s.pop();
}
jeash.events.Event.prototype.__class__ = jeash.events.Event;
jeash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if( type === $_ ) return;
	$s.push("jeash.events.MouseEvent::new");
	var $spos = $s.length;
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
	$s.pop();
}
jeash.events.MouseEvent.__name__ = ["jeash","events","MouseEvent"];
jeash.events.MouseEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.MouseEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.MouseEvent.prototype.altKey = null;
jeash.events.MouseEvent.prototype.buttonDown = null;
jeash.events.MouseEvent.prototype.ctrlKey = null;
jeash.events.MouseEvent.prototype.delta = null;
jeash.events.MouseEvent.prototype.localX = null;
jeash.events.MouseEvent.prototype.localY = null;
jeash.events.MouseEvent.prototype.relatedObject = null;
jeash.events.MouseEvent.prototype.shiftKey = null;
jeash.events.MouseEvent.prototype.stageX = null;
jeash.events.MouseEvent.prototype.stageY = null;
jeash.events.MouseEvent.prototype.commandKey = null;
jeash.events.MouseEvent.prototype.clickCount = null;
jeash.events.MouseEvent.prototype.jeashCreateSimilar = function(type,related,targ) {
	$s.push("jeash.events.MouseEvent::jeashCreateSimilar");
	var $spos = $s.length;
	var result = new jeash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
	if(targ != null) result.target = targ;
	$s.pop();
	return result;
	$s.pop();
}
jeash.events.MouseEvent.prototype.updateAfterEvent = function() {
	$s.push("jeash.events.MouseEvent::updateAfterEvent");
	var $spos = $s.length;
	$s.pop();
}
jeash.events.MouseEvent.prototype.__class__ = jeash.events.MouseEvent;
jeash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if( inX === $_ ) return;
	$s.push("jeash.geom.Rectangle::new");
	var $spos = $s.length;
	this.x = inX == null?0:inX;
	this.y = inY == null?0:inY;
	this.width = inWidth == null?0:inWidth;
	this.height = inHeight == null?0:inHeight;
	$s.pop();
}
jeash.geom.Rectangle.__name__ = ["jeash","geom","Rectangle"];
jeash.geom.Rectangle.prototype.x = null;
jeash.geom.Rectangle.prototype.y = null;
jeash.geom.Rectangle.prototype.width = null;
jeash.geom.Rectangle.prototype.height = null;
jeash.geom.Rectangle.prototype.left = null;
jeash.geom.Rectangle.prototype.get_left = function() {
	$s.push("jeash.geom.Rectangle::get_left");
	var $spos = $s.length;
	var $tmp = this.x;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.set_left = function(l) {
	$s.push("jeash.geom.Rectangle::set_left");
	var $spos = $s.length;
	this.width -= l - this.x;
	this.x = l;
	$s.pop();
	return l;
	$s.pop();
}
jeash.geom.Rectangle.prototype.right = null;
jeash.geom.Rectangle.prototype.get_right = function() {
	$s.push("jeash.geom.Rectangle::get_right");
	var $spos = $s.length;
	var $tmp = this.x + this.width;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.set_right = function(r) {
	$s.push("jeash.geom.Rectangle::set_right");
	var $spos = $s.length;
	this.width = r - this.x;
	$s.pop();
	return r;
	$s.pop();
}
jeash.geom.Rectangle.prototype.top = null;
jeash.geom.Rectangle.prototype.get_top = function() {
	$s.push("jeash.geom.Rectangle::get_top");
	var $spos = $s.length;
	var $tmp = this.y;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.set_top = function(t) {
	$s.push("jeash.geom.Rectangle::set_top");
	var $spos = $s.length;
	this.height -= t - this.y;
	this.y = t;
	$s.pop();
	return t;
	$s.pop();
}
jeash.geom.Rectangle.prototype.bottom = null;
jeash.geom.Rectangle.prototype.get_bottom = function() {
	$s.push("jeash.geom.Rectangle::get_bottom");
	var $spos = $s.length;
	var $tmp = this.y + this.height;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.set_bottom = function(b) {
	$s.push("jeash.geom.Rectangle::set_bottom");
	var $spos = $s.length;
	this.height = b - this.y;
	$s.pop();
	return b;
	$s.pop();
}
jeash.geom.Rectangle.prototype.topLeft = null;
jeash.geom.Rectangle.prototype.get_topLeft = function() {
	$s.push("jeash.geom.Rectangle::get_topLeft");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(this.x,this.y);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.set_topLeft = function(p) {
	$s.push("jeash.geom.Rectangle::set_topLeft");
	var $spos = $s.length;
	this.x = p.x;
	this.y = p.y;
	var $tmp = p.clone();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.size = null;
jeash.geom.Rectangle.prototype.get_size = function() {
	$s.push("jeash.geom.Rectangle::get_size");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(this.width,this.height);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.set_size = function(p) {
	$s.push("jeash.geom.Rectangle::set_size");
	var $spos = $s.length;
	this.width = p.x;
	this.height = p.y;
	var $tmp = p.clone();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.bottomRight = null;
jeash.geom.Rectangle.prototype.get_bottomRight = function() {
	$s.push("jeash.geom.Rectangle::get_bottomRight");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Point(this.x + this.width,this.y + this.height);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.set_bottomRight = function(p) {
	$s.push("jeash.geom.Rectangle::set_bottomRight");
	var $spos = $s.length;
	this.width = p.x - this.x;
	this.height = p.y - this.y;
	var $tmp = p.clone();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.clone = function() {
	$s.push("jeash.geom.Rectangle::clone");
	var $spos = $s.length;
	var $tmp = new jeash.geom.Rectangle(this.x,this.y,this.width,this.height);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.contains = function(inX,inY) {
	$s.push("jeash.geom.Rectangle::contains");
	var $spos = $s.length;
	var $tmp = inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.containsPoint = function(point) {
	$s.push("jeash.geom.Rectangle::containsPoint");
	var $spos = $s.length;
	var $tmp = this.contains(point.x,point.y);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.containsRect = function(rect) {
	$s.push("jeash.geom.Rectangle::containsRect");
	var $spos = $s.length;
	var $tmp = this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.equals = function(toCompare) {
	$s.push("jeash.geom.Rectangle::equals");
	var $spos = $s.length;
	var $tmp = this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.inflate = function(dx,dy) {
	$s.push("jeash.geom.Rectangle::inflate");
	var $spos = $s.length;
	this.x -= dx;
	this.width += dx * 2;
	this.y -= dy;
	this.height += dy * 2;
	$s.pop();
}
jeash.geom.Rectangle.prototype.inflatePoint = function(point) {
	$s.push("jeash.geom.Rectangle::inflatePoint");
	var $spos = $s.length;
	this.inflate(point.x,point.y);
	$s.pop();
}
jeash.geom.Rectangle.prototype.intersection = function(toIntersect) {
	$s.push("jeash.geom.Rectangle::intersection");
	var $spos = $s.length;
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) {
		var $tmp = new jeash.geom.Rectangle();
		$s.pop();
		return $tmp;
	}
	var y0 = this.y < toIntersect.y?toIntersect.x:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	if(y1 <= y0) {
		var $tmp = new jeash.geom.Rectangle();
		$s.pop();
		return $tmp;
	}
	var $tmp = new jeash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.intersects = function(toIntersect) {
	$s.push("jeash.geom.Rectangle::intersects");
	var $spos = $s.length;
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) {
		$s.pop();
		return false;
	}
	var y0 = this.y < toIntersect.y?toIntersect.x:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	var $tmp = y1 > y0;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.union = function(toUnion) {
	$s.push("jeash.geom.Rectangle::union");
	var $spos = $s.length;
	var x0 = this.x > toUnion.x?toUnion.x:this.x;
	var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
	var y0 = this.y > toUnion.y?toUnion.x:this.y;
	var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
	var $tmp = new jeash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.isEmpty = function() {
	$s.push("jeash.geom.Rectangle::isEmpty");
	var $spos = $s.length;
	var $tmp = this.width == 0 && this.height == 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.offset = function(dx,dy) {
	$s.push("jeash.geom.Rectangle::offset");
	var $spos = $s.length;
	this.x += dx;
	this.y += dy;
	$s.pop();
}
jeash.geom.Rectangle.prototype.offsetPoint = function(point) {
	$s.push("jeash.geom.Rectangle::offsetPoint");
	var $spos = $s.length;
	this.x += point.x;
	this.y += point.y;
	$s.pop();
}
jeash.geom.Rectangle.prototype.setEmpty = function() {
	$s.push("jeash.geom.Rectangle::setEmpty");
	var $spos = $s.length;
	this.x = this.y = this.width = this.height = 0;
	$s.pop();
}
jeash.geom.Rectangle.prototype.transform = function(m) {
	$s.push("jeash.geom.Rectangle::transform");
	var $spos = $s.length;
	var tx0 = m.a * this.x + m.c * this.y;
	var tx1 = tx0;
	var ty0 = m.b * this.x + m.d * this.y;
	var ty1 = tx0;
	var tx = m.a * (this.x + this.width) + m.c * this.y;
	var ty = m.b * (this.x + this.width) + m.d * this.y;
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
	ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	tx = m.a * this.x + m.c * (this.y + this.height);
	ty = m.b * this.x + m.d * (this.y + this.height);
	if(tx < tx0) tx0 = tx;
	if(ty < ty0) ty0 = ty;
	if(tx > tx1) tx1 = tx;
	if(ty > ty1) ty1 = ty;
	var $tmp = new jeash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Rectangle.prototype.extendBounds = function(r) {
	$s.push("jeash.geom.Rectangle::extendBounds");
	var $spos = $s.length;
	var dx = this.x - r.x;
	if(dx > 0) {
		this.x -= dx;
		this.width += dx;
	}
	var dy = this.y - r.y;
	if(dy > 0) {
		this.y -= dy;
		this.height += dy;
	}
	if(r.get_right() > this.get_right()) this.set_right(r.get_right());
	if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	$s.pop();
}
jeash.geom.Rectangle.prototype.__class__ = jeash.geom.Rectangle;
haxe.Int32 = function() { }
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	$s.push("haxe.Int32::make");
	var $spos = $s.length;
	var $tmp = a << 16 | b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.ofInt = function(x) {
	$s.push("haxe.Int32::ofInt");
	var $spos = $s.length;
	var $tmp = x | 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.clamp = function(x) {
	$s.push("haxe.Int32::clamp");
	var $spos = $s.length;
	var $tmp = x | 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.toInt = function(x) {
	$s.push("haxe.Int32::toInt");
	var $spos = $s.length;
	if((x >> 30 & 1) != x >>> 31) throw "Overflow " + x;
	var $tmp = x;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.toNativeInt = function(x) {
	$s.push("haxe.Int32::toNativeInt");
	var $spos = $s.length;
	var $tmp = x;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.add = function(a,b) {
	$s.push("haxe.Int32::add");
	var $spos = $s.length;
	var $tmp = a + b | 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.sub = function(a,b) {
	$s.push("haxe.Int32::sub");
	var $spos = $s.length;
	var $tmp = a - b | 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.mul = function(a,b) {
	$s.push("haxe.Int32::mul");
	var $spos = $s.length;
	var $tmp = a * b | 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.div = function(a,b) {
	$s.push("haxe.Int32::div");
	var $spos = $s.length;
	var $tmp = Std["int"](a / b);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.mod = function(a,b) {
	$s.push("haxe.Int32::mod");
	var $spos = $s.length;
	var $tmp = a % b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.shl = function(a,b) {
	$s.push("haxe.Int32::shl");
	var $spos = $s.length;
	var $tmp = a << b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.shr = function(a,b) {
	$s.push("haxe.Int32::shr");
	var $spos = $s.length;
	var $tmp = a >> b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.ushr = function(a,b) {
	$s.push("haxe.Int32::ushr");
	var $spos = $s.length;
	var $tmp = a >>> b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.and = function(a,b) {
	$s.push("haxe.Int32::and");
	var $spos = $s.length;
	var $tmp = a & b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.or = function(a,b) {
	$s.push("haxe.Int32::or");
	var $spos = $s.length;
	var $tmp = a | b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.xor = function(a,b) {
	$s.push("haxe.Int32::xor");
	var $spos = $s.length;
	var $tmp = a ^ b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.neg = function(a) {
	$s.push("haxe.Int32::neg");
	var $spos = $s.length;
	var $tmp = -a;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.isNeg = function(a) {
	$s.push("haxe.Int32::isNeg");
	var $spos = $s.length;
	var $tmp = a < 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.isZero = function(a) {
	$s.push("haxe.Int32::isZero");
	var $spos = $s.length;
	var $tmp = a == 0;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.complement = function(a) {
	$s.push("haxe.Int32::complement");
	var $spos = $s.length;
	var $tmp = ~a;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.compare = function(a,b) {
	$s.push("haxe.Int32::compare");
	var $spos = $s.length;
	var $tmp = a - b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.ucompare = function(a,b) {
	$s.push("haxe.Int32::ucompare");
	var $spos = $s.length;
	if(a < 0) {
		var $tmp = b < 0?~b - ~a:1;
		$s.pop();
		return $tmp;
	}
	var $tmp = b < 0?-1:a - b;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Int32.prototype.__class__ = haxe.Int32;
jeash.display.SpreadMethod = { __ename__ : ["jeash","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
jeash.display.SpreadMethod.REPEAT = ["REPEAT",0];
jeash.display.SpreadMethod.REPEAT.toString = $estr;
jeash.display.SpreadMethod.REPEAT.__enum__ = jeash.display.SpreadMethod;
jeash.display.SpreadMethod.REFLECT = ["REFLECT",1];
jeash.display.SpreadMethod.REFLECT.toString = $estr;
jeash.display.SpreadMethod.REFLECT.__enum__ = jeash.display.SpreadMethod;
jeash.display.SpreadMethod.PAD = ["PAD",2];
jeash.display.SpreadMethod.PAD.toString = $estr;
jeash.display.SpreadMethod.PAD.__enum__ = jeash.display.SpreadMethod;
jeash.display.IGraphicsPath = function() { }
jeash.display.IGraphicsPath.__name__ = ["jeash","display","IGraphicsPath"];
jeash.display.IGraphicsPath.prototype.__class__ = jeash.display.IGraphicsPath;
if(!jeash.utils) jeash.utils = {}
jeash.utils.Endian = { __ename__ : ["jeash","utils","Endian"], __constructs__ : ["BIG_ENDIAN","LITTLE_ENDIAN"] }
jeash.utils.Endian.BIG_ENDIAN = ["BIG_ENDIAN",0];
jeash.utils.Endian.BIG_ENDIAN.toString = $estr;
jeash.utils.Endian.BIG_ENDIAN.__enum__ = jeash.utils.Endian;
jeash.utils.Endian.LITTLE_ENDIAN = ["LITTLE_ENDIAN",1];
jeash.utils.Endian.LITTLE_ENDIAN.toString = $estr;
jeash.utils.Endian.LITTLE_ENDIAN.__enum__ = jeash.utils.Endian;
jeash.display.BitmapDataChannel = function() { }
jeash.display.BitmapDataChannel.__name__ = ["jeash","display","BitmapDataChannel"];
jeash.display.BitmapDataChannel.prototype.__class__ = jeash.display.BitmapDataChannel;
jeash.display.IGraphicsStroke = function() { }
jeash.display.IGraphicsStroke.__name__ = ["jeash","display","IGraphicsStroke"];
jeash.display.IGraphicsStroke.prototype.__class__ = jeash.display.IGraphicsStroke;
jeash.display.IGraphicsData = function() { }
jeash.display.IGraphicsData.__name__ = ["jeash","display","IGraphicsData"];
jeash.display.IGraphicsData.prototype.jeashGraphicsDataType = null;
jeash.display.IGraphicsData.prototype.__class__ = jeash.display.IGraphicsData;
jeash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if( thickness === $_ ) return;
	$s.push("jeash.display.GraphicsStroke::new");
	var $spos = $s.length;
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.STROKE;
	$s.pop();
}
jeash.display.GraphicsStroke.__name__ = ["jeash","display","GraphicsStroke"];
jeash.display.GraphicsStroke.prototype.caps = null;
jeash.display.GraphicsStroke.prototype.fill = null;
jeash.display.GraphicsStroke.prototype.joints = null;
jeash.display.GraphicsStroke.prototype.miterLimit = null;
jeash.display.GraphicsStroke.prototype.pixelHinting = null;
jeash.display.GraphicsStroke.prototype.scaleMode = null;
jeash.display.GraphicsStroke.prototype.thickness = null;
jeash.display.GraphicsStroke.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsStroke.prototype.__class__ = jeash.display.GraphicsStroke;
jeash.display.GraphicsStroke.__interfaces__ = [jeash.display.IGraphicsStroke,jeash.display.IGraphicsData];
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	$s.push("haxe.Stack::callStack");
	var $spos = $s.length;
	var $tmp = haxe.Stack.makeStack("$s");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Stack.exceptionStack = function() {
	$s.push("haxe.Stack::exceptionStack");
	var $spos = $s.length;
	var $tmp = haxe.Stack.makeStack("$e");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Stack.toString = function(stack) {
	$s.push("haxe.Stack::toString");
	var $spos = $s.length;
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b[b.b.length] = "\nCalled from " == null?"null":"\nCalled from ";
		haxe.Stack.itemToString(b,s);
	}
	var $tmp = b.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Stack.itemToString = function(b,s) {
	$s.push("haxe.Stack::itemToString");
	var $spos = $s.length;
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b[b.b.length] = "a C function" == null?"null":"a C function";
		break;
	case 1:
		var m = $e[2];
		b.b[b.b.length] = "module " == null?"null":"module ";
		b.b[b.b.length] = m == null?"null":m;
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (" == null?"null":" (";
		}
		b.b[b.b.length] = file == null?"null":file;
		b.b[b.b.length] = " line " == null?"null":" line ";
		b.b[b.b.length] = line == null?"null":line;
		if(s1 != null) b.b[b.b.length] = ")" == null?"null":")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b[b.b.length] = cname == null?"null":cname;
		b.b[b.b.length] = "." == null?"null":".";
		b.b[b.b.length] = meth == null?"null":meth;
		break;
	case 4:
		var n = $e[2];
		b.b[b.b.length] = "local function #" == null?"null":"local function #";
		b.b[b.b.length] = n == null?"null":n;
		break;
	}
	$s.pop();
}
haxe.Stack.makeStack = function(s) {
	$s.push("haxe.Stack::makeStack");
	var $spos = $s.length;
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		} catch( e ) {
			$r = (function($this) {
				var $r;
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				$r = [];
				return $r;
			}($this));
		}
		return $r;
	}(this));
	var m = new Array();
	var _g1 = 0, _g = a.length - (s == "$s"?2:0);
	while(_g1 < _g) {
		var i = _g1++;
		var d = a[i].split("::");
		m.unshift(haxe.StackItem.Method(d[0],d[1]));
	}
	$s.pop();
	return m;
	$s.pop();
}
haxe.Stack.prototype.__class__ = haxe.Stack;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	$s.push("Type::getClass");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	if(o.__enum__ != null) {
		$s.pop();
		return null;
	}
	var $tmp = o.__class__;
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getEnum = function(o) {
	$s.push("Type::getEnum");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	var $tmp = o.__enum__;
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getSuperClass = function(c) {
	$s.push("Type::getSuperClass");
	var $spos = $s.length;
	var $tmp = c.__super__;
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getClassName = function(c) {
	$s.push("Type::getClassName");
	var $spos = $s.length;
	var a = c.__name__;
	var $tmp = a.join(".");
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getEnumName = function(e) {
	$s.push("Type::getEnumName");
	var $spos = $s.length;
	var a = e.__ename__;
	var $tmp = a.join(".");
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.resolveClass = function(name) {
	$s.push("Type::resolveClass");
	var $spos = $s.length;
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		cl = null;
	}
	if(cl == null || cl.__name__ == null) {
		$s.pop();
		return null;
	}
	$s.pop();
	return cl;
	$s.pop();
}
Type.resolveEnum = function(name) {
	$s.push("Type::resolveEnum");
	var $spos = $s.length;
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		e = null;
	}
	if(e == null || e.__ename__ == null) {
		$s.pop();
		return null;
	}
	$s.pop();
	return e;
	$s.pop();
}
Type.createInstance = function(cl,args) {
	$s.push("Type::createInstance");
	var $spos = $s.length;
	if(args.length <= 3) {
		var $tmp = new cl(args[0],args[1],args[2]);
		$s.pop();
		return $tmp;
	}
	if(args.length > 8) throw "Too many arguments";
	var $tmp = new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.createEmptyInstance = function(cl) {
	$s.push("Type::createEmptyInstance");
	var $spos = $s.length;
	var $tmp = new cl($_);
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.createEnum = function(e,constr,params) {
	$s.push("Type::createEnum");
	var $spos = $s.length;
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		var $tmp = f.apply(e,params);
		$s.pop();
		return $tmp;
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	$s.pop();
	return f;
	$s.pop();
}
Type.createEnumIndex = function(e,index,params) {
	$s.push("Type::createEnumIndex");
	var $spos = $s.length;
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	var $tmp = Type.createEnum(e,c,params);
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.getInstanceFields = function(c) {
	$s.push("Type::getInstanceFields");
	var $spos = $s.length;
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	$s.pop();
	return a;
	$s.pop();
}
Type.getClassFields = function(c) {
	$s.push("Type::getClassFields");
	var $spos = $s.length;
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	$s.pop();
	return a;
	$s.pop();
}
Type.getEnumConstructs = function(e) {
	$s.push("Type::getEnumConstructs");
	var $spos = $s.length;
	var a = e.__constructs__;
	var $tmp = a.copy();
	$s.pop();
	return $tmp;
	$s.pop();
}
Type["typeof"] = function(v) {
	$s.push("Type::typeof");
	var $spos = $s.length;
	switch(typeof(v)) {
	case "boolean":
		var $tmp = ValueType.TBool;
		$s.pop();
		return $tmp;
	case "string":
		var $tmp = ValueType.TClass(String);
		$s.pop();
		return $tmp;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			var $tmp = ValueType.TInt;
			$s.pop();
			return $tmp;
		}
		var $tmp = ValueType.TFloat;
		$s.pop();
		return $tmp;
	case "object":
		if(v == null) {
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
		var e = v.__enum__;
		if(e != null) {
			var $tmp = ValueType.TEnum(e);
			$s.pop();
			return $tmp;
		}
		var c = v.__class__;
		if(c != null) {
			var $tmp = ValueType.TClass(c);
			$s.pop();
			return $tmp;
		}
		var $tmp = ValueType.TObject;
		$s.pop();
		return $tmp;
	case "function":
		if(v.__name__ != null) {
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
		var $tmp = ValueType.TFunction;
		$s.pop();
		return $tmp;
	case "undefined":
		var $tmp = ValueType.TNull;
		$s.pop();
		return $tmp;
	default:
		var $tmp = ValueType.TUnknown;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumEq = function(a,b) {
	$s.push("Type::enumEq");
	var $spos = $s.length;
	if(a == b) {
		$s.pop();
		return true;
	}
	try {
		if(a[0] != b[0]) {
			$s.pop();
			return false;
		}
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) {
				$s.pop();
				return false;
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) {
			$s.pop();
			return false;
		}
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		$s.pop();
		return false;
	}
	$s.pop();
	return true;
	$s.pop();
}
Type.enumConstructor = function(e) {
	$s.push("Type::enumConstructor");
	var $spos = $s.length;
	var $tmp = e[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.enumParameters = function(e) {
	$s.push("Type::enumParameters");
	var $spos = $s.length;
	var $tmp = e.slice(2);
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.enumIndex = function(e) {
	$s.push("Type::enumIndex");
	var $spos = $s.length;
	var $tmp = e[1];
	$s.pop();
	return $tmp;
	$s.pop();
}
Type.prototype.__class__ = Type;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	var $tmp = eval(code);
	$s.pop();
	return $tmp;
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
}
js.Lib.prototype.__class__ = js.Lib;
jeash.events.EventPhase = function() { }
jeash.events.EventPhase.__name__ = ["jeash","events","EventPhase"];
jeash.events.EventPhase.prototype.__class__ = jeash.events.EventPhase;
jeash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if( inBitmapData === $_ ) return;
	$s.push("jeash.display.Bitmap::new");
	var $spos = $s.length;
	jeash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	this.name = "Bitmap " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics = new jeash.display.Graphics();
	if(inBitmapData != null) this.jeashSetBitmapData(inBitmapData);
	this.jeashGraphics.jeashSurface.id = this.name;
	$s.pop();
}
jeash.display.Bitmap.__name__ = ["jeash","display","Bitmap"];
jeash.display.Bitmap.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.Bitmap.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.Bitmap.prototype.bitmapData = null;
jeash.display.Bitmap.prototype.pixelSnapping = null;
jeash.display.Bitmap.prototype.smoothing = null;
jeash.display.Bitmap.prototype.jeashGraphics = null;
jeash.display.Bitmap.prototype.jeashCurrentLease = null;
jeash.display.Bitmap.prototype.jeashSetBitmapData = function(inBitmapData) {
	$s.push("jeash.display.Bitmap::jeashSetBitmapData");
	var $spos = $s.length;
	this.jeashInvalidateBounds();
	this.bitmapData = inBitmapData;
	$s.pop();
	return inBitmapData;
	$s.pop();
}
jeash.display.Bitmap.prototype.jeashGetGraphics = function() {
	$s.push("jeash.display.Bitmap::jeashGetGraphics");
	var $spos = $s.length;
	var $tmp = this.jeashGraphics;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Bitmap.prototype.BuildBounds = function() {
	$s.push("jeash.display.Bitmap::BuildBounds");
	var $spos = $s.length;
	jeash.display.DisplayObject.prototype.BuildBounds.call(this);
	if(this.bitmapData != null) {
		var r = new jeash.geom.Rectangle(0,0,this.bitmapData.getWidth(),this.bitmapData.getHeight());
		if(r.width != 0 || r.height != 0) {
			if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
		}
	}
	$s.pop();
}
jeash.display.Bitmap.prototype.jeashRender = function(parentMatrix,inMask) {
	$s.push("jeash.display.Bitmap::jeashRender");
	var $spos = $s.length;
	if(this.bitmapData == null) {
		$s.pop();
		return;
	}
	if(this.mMtxDirty || this.mMtxChainDirty) this.jeashValidateMatrix();
	var m = this.mFullMatrix.clone();
	var imageDataLease = this.bitmapData.jeashLease;
	if(imageDataLease != null) {
		if(this.jeashCurrentLease == null || imageDataLease.seed != this.jeashCurrentLease.seed || imageDataLease.time != this.jeashCurrentLease.time) {
			var srcCanvas = this.bitmapData.mTextureBuffer;
			this.jeashGraphics.jeashSurface.width = srcCanvas.width;
			this.jeashGraphics.jeashSurface.height = srcCanvas.height;
			this.jeashGraphics.clear();
			jeash.Lib.jeashDrawToSurface(srcCanvas,this.jeashGraphics.jeashSurface);
			this.jeashCurrentLease = imageDataLease;
		}
	}
	jeash.Lib.jeashSetSurfaceTransform(this.jeashGraphics.jeashSurface,m);
	jeash.Lib.jeashSetSurfaceOpacity(this.jeashGraphics.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
	$s.pop();
}
jeash.display.Bitmap.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	$s.push("jeash.display.Bitmap::jeashRenderContentsToCache");
	var $spos = $s.length;
	this.jeashRender(parentMatrix,canvas);
	jeash.Lib.jeashDrawToSurface(this.jeashGraphics.jeashSurface,canvas,parentMatrix,(this.parent != null?this.parent.alpha:1) * this.alpha);
	$s.pop();
}
jeash.display.Bitmap.prototype.jeashGetObjectUnderPoint = function(point) {
	$s.push("jeash.display.Bitmap::jeashGetObjectUnderPoint");
	var $spos = $s.length;
	if(!this.jeashGetVisible()) {
		$s.pop();
		return null;
	} else if(this.bitmapData != null) {
		var local = this.globalToLocal(point);
		if(local.x < 0 || local.y < 0 || local.x > this.jeashGetWidth() || local.y > this.jeashGetHeight()) {
			$s.pop();
			return null;
		} else {
			var $tmp = this;
			$s.pop();
			return $tmp;
		}
	} else {
		var $tmp = jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.display.Bitmap.prototype.__class__ = jeash.display.Bitmap;
if(!jeash.text) jeash.text = {}
jeash.text.TextFieldType = function(p) {
	$s.push("jeash.text.TextFieldType::new");
	var $spos = $s.length;
	$s.pop();
}
jeash.text.TextFieldType.__name__ = ["jeash","text","TextFieldType"];
jeash.text.TextFieldType.prototype.__class__ = jeash.text.TextFieldType;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	if(o.hasOwnProperty != null) {
		var $tmp = o.hasOwnProperty(field);
		$s.pop();
		return $tmp;
	}
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	$s.pop();
	return v;
	$s.pop();
}
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	var $tmp = func.apply(o,args);
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
	var a = new Array();
	if(o.hasOwnProperty) {
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	$s.pop();
	return a;
	$s.pop();
}
Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	var $tmp = typeof(f) == "function" && f.__name__ == null;
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	var $tmp = a == b?0:a > b?1:-1;
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		$s.pop();
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		$s.pop();
		return false;
	}
	var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		$s.pop();
		return false;
	}
	var t = typeof(v);
	var $tmp = t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	if(!Reflect.hasField(o,f)) {
		$s.pop();
		return false;
	}
	delete(o[f]);
	$s.pop();
	return true;
	$s.pop();
}
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	$s.pop();
	return o2;
	$s.pop();
}
Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	var $tmp = function() {
		$s.push("Reflect::makeVarArgs@108");
		var $spos = $s.length;
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		var $tmp = f(a);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	$s.pop();
	return $tmp;
	$s.pop();
}
Reflect.prototype.__class__ = Reflect;
jeash.text.TextField = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.text.TextField::new");
	var $spos = $s.length;
	jeash.display.InteractiveObject.call(this);
	this.mWidth = 40;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.jeashGraphics = new jeash.display.Graphics();
	this.mCaretGfx = new jeash.display.Graphics();
	this.mFace = jeash.text.TextField.mDefaultFont;
	this.mAlign = jeash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.mScrollH = 0;
	this.mScrollV = 1;
	this.mType = jeash.text.TextFieldType.DYNAMIC;
	this.SetAutoSize(jeash.text.TextFieldAutoSize.NONE);
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.mInput = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.name = "TextField " + jeash.display.DisplayObject.mNameID++;
	this.SetBorderColor(0);
	this.SetBorder(false);
	this.SetBackgroundColor(16777215);
	this.SetBackground(false);
	$s.pop();
}
jeash.text.TextField.__name__ = ["jeash","text","TextField"];
jeash.text.TextField.__super__ = jeash.display.InteractiveObject;
for(var k in jeash.display.InteractiveObject.prototype ) jeash.text.TextField.prototype[k] = jeash.display.InteractiveObject.prototype[k];
jeash.text.TextField.prototype.htmlText = null;
jeash.text.TextField.prototype.text = null;
jeash.text.TextField.prototype.textColor = null;
jeash.text.TextField.prototype.textWidth = null;
jeash.text.TextField.prototype.textHeight = null;
jeash.text.TextField.prototype.defaultTextFormat = null;
jeash.text.TextField.prototype.mHTMLText = null;
jeash.text.TextField.prototype.mText = null;
jeash.text.TextField.prototype.mTextColour = null;
jeash.text.TextField.prototype.mType = null;
jeash.text.TextField.prototype.autoSize = null;
jeash.text.TextField.prototype.selectable = null;
jeash.text.TextField.prototype.multiline = null;
jeash.text.TextField.prototype.embedFonts = null;
jeash.text.TextField.prototype.borderColor = null;
jeash.text.TextField.prototype.background = null;
jeash.text.TextField.prototype.backgroundColor = null;
jeash.text.TextField.prototype.caretPos = null;
jeash.text.TextField.prototype.displayAsPassword = null;
jeash.text.TextField.prototype.border = null;
jeash.text.TextField.prototype.wordWrap = null;
jeash.text.TextField.prototype.maxChars = null;
jeash.text.TextField.prototype.restrict = null;
jeash.text.TextField.prototype.type = null;
jeash.text.TextField.prototype.antiAliasType = null;
jeash.text.TextField.prototype.sharpness = null;
jeash.text.TextField.prototype.gridFitType = null;
jeash.text.TextField.prototype.length = null;
jeash.text.TextField.prototype.mTextHeight = null;
jeash.text.TextField.prototype.mFace = null;
jeash.text.TextField.prototype.mDownChar = null;
jeash.text.TextField.prototype.selectionBeginIndex = null;
jeash.text.TextField.prototype.selectionEndIndex = null;
jeash.text.TextField.prototype.caretIndex = null;
jeash.text.TextField.prototype.mParagraphs = null;
jeash.text.TextField.prototype.mTryFreeType = null;
jeash.text.TextField.prototype.mLineInfo = null;
jeash.text.TextField.prototype.mAlign = null;
jeash.text.TextField.prototype.mHTMLMode = null;
jeash.text.TextField.prototype.mSelStart = null;
jeash.text.TextField.prototype.mSelEnd = null;
jeash.text.TextField.prototype.mInsertPos = null;
jeash.text.TextField.prototype.mSelectDrag = null;
jeash.text.TextField.prototype.mInput = null;
jeash.text.TextField.prototype.mWidth = null;
jeash.text.TextField.prototype.mHeight = null;
jeash.text.TextField.prototype.mSelectionAnchored = null;
jeash.text.TextField.prototype.mSelectionAnchor = null;
jeash.text.TextField.prototype.mScrollH = null;
jeash.text.TextField.prototype.mScrollV = null;
jeash.text.TextField.prototype.jeashGraphics = null;
jeash.text.TextField.prototype.mCaretGfx = null;
jeash.text.TextField.prototype.ClearSelection = function() {
	$s.push("jeash.text.TextField::ClearSelection");
	var $spos = $s.length;
	this.mSelStart = this.mSelEnd = -1;
	this.mSelectionAnchored = false;
	this.Rebuild();
	$s.pop();
}
jeash.text.TextField.prototype.DeleteSelection = function() {
	$s.push("jeash.text.TextField::DeleteSelection");
	var $spos = $s.length;
	if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) {
		this.mText = this.mText.substr(0,this.mSelStart) + this.mText.substr(this.mSelEnd);
		this.mInsertPos = this.mSelStart;
		this.mSelStart = this.mSelEnd = -1;
		this.mSelectionAnchored = false;
	}
	$s.pop();
}
jeash.text.TextField.prototype.OnMoveKeyStart = function(inShift) {
	$s.push("jeash.text.TextField::OnMoveKeyStart");
	var $spos = $s.length;
	if(inShift && this.selectable) {
		if(!this.mSelectionAnchored) {
			this.mSelectionAnchored = true;
			this.mSelectionAnchor = this.mInsertPos;
			if(jeash.text.TextField.sSelectionOwner != this) {
				if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
				jeash.text.TextField.sSelectionOwner = this;
			}
		}
	} else this.ClearSelection();
	$s.pop();
}
jeash.text.TextField.prototype.OnMoveKeyEnd = function() {
	$s.push("jeash.text.TextField::OnMoveKeyEnd");
	var $spos = $s.length;
	if(this.mSelectionAnchored) {
		if(this.mInsertPos < this.mSelectionAnchor) {
			this.mSelStart = this.mInsertPos;
			this.mSelEnd = this.mSelectionAnchor;
		} else {
			this.mSelStart = this.mSelectionAnchor;
			this.mSelEnd = this.mInsertPos;
		}
	}
	$s.pop();
}
jeash.text.TextField.prototype.OnKey = function(inKey) {
	$s.push("jeash.text.TextField::OnKey");
	var $spos = $s.length;
	if(inKey.type != jeash.events.KeyboardEvent.KEY_DOWN) {
		$s.pop();
		return;
	}
	var key = inKey.keyCode;
	var ascii = inKey.charCode;
	var shift = inKey.shiftKey;
	if(ascii == 3) {
		if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) throw "To implement setClipboardString. TextField.OnKey";
		$s.pop();
		return;
	}
	if(this.mInput) {
		if(key == jeash.ui.Keyboard.LEFT) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos--;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.RIGHT) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos++;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.HOME) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos = 0;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.END) {
			this.OnMoveKeyStart(shift);
			this.mInsertPos = this.mText.length;
			this.OnMoveKeyEnd();
		} else if(key == jeash.ui.Keyboard.DELETE || key == jeash.ui.Keyboard.BACKSPACE) {
			if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) this.DeleteSelection(); else {
				if(key == jeash.ui.Keyboard.BACKSPACE && this.mInsertPos > 0) this.mInsertPos--;
				var l = this.mText.length;
				if(this.mInsertPos > l) {
					if(l > 0) this.mText = this.mText.substr(0,l - 1);
				} else this.mText = this.mText.substr(0,this.mInsertPos) + this.mText.substr(this.mInsertPos + 1);
			}
		} else if(ascii >= 32 && ascii < 128) {
			if(this.mSelEnd > this.mSelStart && this.mSelStart >= 0) this.DeleteSelection();
			this.mText = this.mText.substr(0,this.mInsertPos) + String.fromCharCode(ascii) + this.mText.substr(this.mInsertPos);
			this.mInsertPos++;
		}
		if(this.mInsertPos < 0) this.mInsertPos = 0;
		var l = this.mText.length;
		if(this.mInsertPos > l) this.mInsertPos = l;
		this.RebuildText();
	}
	$s.pop();
}
jeash.text.TextField.prototype.OnFocusIn = function(inMouse) {
	$s.push("jeash.text.TextField::OnFocusIn");
	var $spos = $s.length;
	if(this.mInput && this.selectable && !inMouse) {
		this.mSelStart = 0;
		this.mSelEnd = this.mText.length;
		this.RebuildText();
	}
	$s.pop();
}
jeash.text.TextField.prototype.jeashGetWidth = function() {
	$s.push("jeash.text.TextField::jeashGetWidth");
	var $spos = $s.length;
	var $tmp = this.mWidth;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.jeashGetHeight = function() {
	$s.push("jeash.text.TextField::jeashGetHeight");
	var $spos = $s.length;
	var $tmp = this.mHeight;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.jeashSetWidth = function(inWidth) {
	$s.push("jeash.text.TextField::jeashSetWidth");
	var $spos = $s.length;
	if(inWidth != this.mWidth) {
		this.mWidth = inWidth;
		this.Rebuild();
	}
	var $tmp = this.mWidth;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.jeashSetHeight = function(inHeight) {
	$s.push("jeash.text.TextField::jeashSetHeight");
	var $spos = $s.length;
	if(inHeight != this.mHeight) {
		this.mHeight = inHeight;
		this.Rebuild();
	}
	var $tmp = this.mHeight;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.GetType = function() {
	$s.push("jeash.text.TextField::GetType");
	var $spos = $s.length;
	var $tmp = this.mType;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.SetType = function(inType) {
	$s.push("jeash.text.TextField::SetType");
	var $spos = $s.length;
	this.mType = inType;
	this.mInput = this.mType == jeash.text.TextFieldType.INPUT;
	if(this.mInput && this.mHTMLMode) this.ConvertHTMLToText(true);
	this.tabEnabled = this.GetType() == jeash.text.TextFieldType.INPUT;
	this.Rebuild();
	$s.pop();
	return inType;
	$s.pop();
}
jeash.text.TextField.prototype.GetCaret = function() {
	$s.push("jeash.text.TextField::GetCaret");
	var $spos = $s.length;
	var $tmp = this.mInsertPos;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.jeashGetGraphics = function() {
	$s.push("jeash.text.TextField::jeashGetGraphics");
	var $spos = $s.length;
	var $tmp = this.jeashGraphics;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.getLineIndexAtPoint = function(inX,inY) {
	$s.push("jeash.text.TextField::getLineIndexAtPoint");
	var $spos = $s.length;
	if(this.mLineInfo.length < 1) {
		$s.pop();
		return -1;
	}
	if(inY <= 0) {
		$s.pop();
		return 0;
	}
	var _g1 = 0, _g = this.mLineInfo.length;
	while(_g1 < _g) {
		var l = _g1++;
		if(this.mLineInfo[l].mY0 > inY) {
			var $tmp = l == 0?0:l - 1;
			$s.pop();
			return $tmp;
		}
	}
	var $tmp = this.mLineInfo.length - 1;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.getCharIndexAtPoint = function(inX,inY) {
	$s.push("jeash.text.TextField::getCharIndexAtPoint");
	var $spos = $s.length;
	var li = this.getLineIndexAtPoint(inX,inY);
	if(li < 0) {
		$s.pop();
		return -1;
	}
	var line = this.mLineInfo[li];
	var idx = line.mIndex;
	var _g = 0, _g1 = line.mX;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x > inX) {
			$s.pop();
			return idx;
		}
		idx++;
	}
	$s.pop();
	return idx;
	$s.pop();
}
jeash.text.TextField.prototype.getCharBoundaries = function(a) {
	$s.push("jeash.text.TextField::getCharBoundaries");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.text.TextField.prototype.OnMouseDown = function(inX,inY) {
	$s.push("jeash.text.TextField::OnMouseDown");
	var $spos = $s.length;
	if(this.tabEnabled || this.selectable) {
		if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
		jeash.text.TextField.sSelectionOwner = this;
		this.GetStage().SetFocus(this);
		var gx = inX / this.GetStage().jeashGetScaleX();
		var gy = inY / this.GetStage().jeashGetScaleY();
		var pos = this.globalToLocal(new jeash.geom.Point(gx,gy));
		this.mSelectDrag = this.getCharIndexAtPoint(pos.x,pos.y);
		if(this.tabEnabled) this.mInsertPos = this.mSelectDrag;
		this.mSelStart = this.mSelEnd = -1;
		this.RebuildText();
	}
	$s.pop();
}
jeash.text.TextField.prototype.OnMouseDrag = function(inX,inY) {
	$s.push("jeash.text.TextField::OnMouseDrag");
	var $spos = $s.length;
	if((this.tabEnabled || this.selectable) && this.mSelectDrag >= 0) {
		var gx = inX / this.GetStage().jeashGetScaleX();
		var gy = inY / this.GetStage().jeashGetScaleY();
		var pos = this.globalToLocal(new jeash.geom.Point(gx,gy));
		var idx = this.getCharIndexAtPoint(pos.x,pos.y);
		if(jeash.text.TextField.sSelectionOwner != this) {
			if(jeash.text.TextField.sSelectionOwner != null) jeash.text.TextField.sSelectionOwner.ClearSelection();
			jeash.text.TextField.sSelectionOwner = this;
		}
		if(idx < this.mSelectDrag) {
			this.mSelStart = idx;
			this.mSelEnd = this.mSelectDrag;
		} else if(idx > this.mSelectDrag) {
			this.mSelStart = this.mSelectDrag;
			this.mSelEnd = idx;
		} else this.mSelStart = this.mSelEnd = -1;
		if(this.tabEnabled) this.mInsertPos = idx;
		this.RebuildText();
	}
	$s.pop();
}
jeash.text.TextField.prototype.OnMouseUp = function(inX,inY) {
	$s.push("jeash.text.TextField::OnMouseUp");
	var $spos = $s.length;
	this.mSelectDrag = -1;
	$s.pop();
}
jeash.text.TextField.prototype.mMaxWidth = null;
jeash.text.TextField.prototype.mMaxHeight = null;
jeash.text.TextField.prototype.mLimitRenderX = null;
jeash.text.TextField.prototype.RenderRow = function(inRow,inY,inCharIdx,inAlign,inInsert) {
	$s.push("jeash.text.TextField::RenderRow");
	var $spos = $s.length;
	var h = 0;
	var w = 0;
	var _g = 0;
	while(_g < inRow.length) {
		var chr = inRow[_g];
		++_g;
		if(chr.fh > h) h = chr.fh;
		w += chr.adv;
	}
	if(w > this.mMaxWidth) this.mMaxWidth = w;
	var full_height = Std["int"](h * 1.2);
	var align_x = 0;
	var insert_x = 0;
	if(inInsert != null) {
		if(this.autoSize != jeash.text.TextFieldAutoSize.NONE) {
			this.mScrollH = 0;
			insert_x = inInsert;
		} else {
			insert_x = inInsert - this.mScrollH;
			if(insert_x < 0) this.mScrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.mScrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
			if(this.mScrollH < 0) this.mScrollH = 0;
		}
	}
	if(this.autoSize == jeash.text.TextFieldAutoSize.NONE && w <= this.mLimitRenderX) {
		if(inAlign == jeash.text.TextFormatAlign.CENTER) align_x = this.mLimitRenderX - w >> 1; else if(inAlign == jeash.text.TextFormatAlign.RIGHT) align_x = this.mLimitRenderX - w;
	}
	var x_list = new Array();
	this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx, mX : x_list});
	var cache_sel_font = null;
	var cache_normal_font = null;
	var x = align_x - this.mScrollH;
	var x0 = x;
	var _g = 0;
	while(_g < inRow.length) {
		var chr = inRow[_g];
		++_g;
		var adv = chr.adv;
		if(x + adv > this.mLimitRenderX) break;
		x_list.push(x);
		if(x >= 0) {
			var font = chr.font;
			if(chr.sel) {
				this.jeashGraphics.lineStyle();
				this.jeashGraphics.beginFill(2105440);
				this.jeashGraphics.drawRect(x,inY,adv,full_height);
				this.jeashGraphics.endFill();
				if(cache_normal_font == chr.font) font = cache_sel_font; else {
					font = jeash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
					cache_sel_font = font;
					cache_normal_font = chr.font;
				}
			}
			font.RenderChar(this.jeashGraphics,chr.chr,x,Std["int"](inY + (h - chr.fh)));
		}
		x += adv;
	}
	x += this.mScrollH;
	if(inInsert != null) {
		this.mCaretGfx.lineStyle(1,this.mTextColour);
		this.mCaretGfx.moveTo(inInsert + align_x - this.mScrollH,inY);
		this.mCaretGfx.lineTo(inInsert + align_x - this.mScrollH,inY + full_height);
	}
	$s.pop();
	return full_height;
	$s.pop();
}
jeash.text.TextField.prototype.Rebuild = function() {
	$s.push("jeash.text.TextField::Rebuild");
	var $spos = $s.length;
	this.mLineInfo = [];
	this.jeashGraphics.clear();
	this.mCaretGfx.clear();
	if(this.background) {
		this.jeashGraphics.beginFill(this.backgroundColor);
		this.jeashGraphics.drawRect(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4);
		this.jeashGraphics.endFill();
	}
	this.jeashGraphics.lineStyle(this.mTextColour);
	var insert_x = null;
	this.mMaxWidth = 0;
	var wrap = this.mLimitRenderX = this.wordWrap && !this.mInput?Std["int"](this.jeashGetWidth()):999999;
	var char_idx = 0;
	var h = 0;
	var s0 = this.mSelStart;
	var s1 = this.mSelEnd;
	var _g = 0, _g1 = this.mParagraphs;
	while(_g < _g1.length) {
		var paragraph = _g1[_g];
		++_g;
		var row = [];
		var row_width = 0;
		var last_word_break = 0;
		var last_word_break_width = 0;
		var last_word_char_idx = 0;
		var start_idx = char_idx;
		var tx = 0;
		var _g2 = 0, _g3 = paragraph.spans;
		while(_g2 < _g3.length) {
			var span = _g3[_g2];
			++_g2;
			var text = span.text;
			var font = span.font;
			var fh = font.jeashGetHeight();
			last_word_break = row.length;
			last_word_break_width = row_width;
			last_word_char_idx = char_idx;
			var _g5 = 0, _g4 = text.length;
			while(_g5 < _g4) {
				var ch = _g5++;
				if(char_idx == this.mInsertPos && this.mInput) insert_x = tx;
				var g = text.charCodeAt(ch);
				var adv = font.jeashGetAdvance(g);
				if(g == 32) {
					last_word_break = row.length;
					last_word_break_width = tx;
					last_word_char_idx = char_idx;
				}
				if(tx + adv > wrap) {
					if(last_word_break > 0) {
						var row_end = row.splice(last_word_break,row.length - last_word_break);
						h += this.RenderRow(row,h,start_idx,paragraph.align);
						row = row_end;
						tx -= last_word_break_width;
						start_idx = last_word_char_idx;
						last_word_break = 0;
						last_word_break_width = 0;
						last_word_char_idx = 0;
						if(row_end.length > 0 && row_end[0].chr == 32) {
							row_end.shift();
							start_idx++;
						}
					} else {
						h += this.RenderRow(row,h,char_idx,paragraph.align);
						row = [];
						tx = 0;
						start_idx = char_idx;
					}
				}
				row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
				tx += adv;
				char_idx++;
			}
		}
		if(row.length > 0) {
			var pos = this.mInput && insert_x == null?tx:insert_x == null?0:insert_x;
			h += this.RenderRow(row,h,start_idx,paragraph.align,pos);
		}
	}
	var w = this.mMaxWidth;
	if(h < this.mTextHeight) h = this.mTextHeight;
	this.mMaxHeight = h;
	switch(this.autoSize) {
	case jeash.text.TextFieldAutoSize.LEFT:
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		break;
	case jeash.text.TextFieldAutoSize.RIGHT:
		var x0 = this.jeashGetX() + this.jeashGetWidth();
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		this.jeashSetX(x0 - w);
		break;
	case jeash.text.TextFieldAutoSize.CENTER:
		var x0 = this.jeashGetX() + this.jeashGetWidth() / 2;
		this.jeashSetWidth(w);
		this.jeashSetHeight(h);
		this.jeashSetX(x0 - w / 2);
		break;
	default:
		if(this.wordWrap) this.jeashSetHeight(h);
	}
	if(char_idx == 0 && this.mInput) {
		var x = 0;
		if(this.mAlign == jeash.text.TextFormatAlign.CENTER) x = Std["int"](this.jeashGetWidth() / 2); else if(this.mAlign == jeash.text.TextFormatAlign.RIGHT) x = Std["int"](this.jeashGetWidth()) - 1;
		this.mCaretGfx.lineStyle(1,this.mTextColour);
		this.mCaretGfx.moveTo(x,0);
		this.mCaretGfx.lineTo(x,this.mTextHeight);
	}
	if(this.border) {
		this.jeashGraphics.endFill();
		this.jeashGraphics.lineStyle(1,this.borderColor);
		this.jeashGraphics.drawRect(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4);
	}
	$s.pop();
}
jeash.text.TextField.prototype.GetObj = function(inX,inY,inObj) {
	$s.push("jeash.text.TextField::GetObj");
	var $spos = $s.length;
	var inv = this.mFullMatrix.clone();
	inv.invert();
	var px = inv.a * inX + inv.c * inY + inv.tx;
	var py = inv.b * inX + inv.d * inY + inv.ty;
	if(px > 0 && px < this.jeashGetWidth() && py > 0 && py < this.jeashGetHeight()) {
		$s.pop();
		return this;
	}
	$s.pop();
	return null;
	$s.pop();
}
jeash.text.TextField.prototype.GetBackgroundRect = function() {
	$s.push("jeash.text.TextField::GetBackgroundRect");
	var $spos = $s.length;
	if(this.border) {
		var $tmp = new jeash.geom.Rectangle(-2,-2,this.jeashGetWidth() + 4,this.jeashGetHeight() + 4);
		$s.pop();
		return $tmp;
	} else {
		var $tmp = new jeash.geom.Rectangle(0,0,this.jeashGetWidth(),this.jeashGetHeight());
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.text.TextField.prototype.jeashRender = function(inParentMatrix,inMask) {
	$s.push("jeash.text.TextField::jeashRender");
	var $spos = $s.length;
	if(!this.jeashGetVisible()) {
		$s.pop();
		return;
	}
	jeash.display.InteractiveObject.prototype.jeashRender.call(this,inParentMatrix,inMask);
	if(this.mInput && this.GetStage().GetFocus() == this) {
		if((Std["int"](jeash.Lib.getTimer() * 0.002) & 1) == 1) this.mCaretGfx.jeashRender(inMask,this.mFullMatrix);
	}
	$s.pop();
}
jeash.text.TextField.prototype.GetTextWidth = function() {
	$s.push("jeash.text.TextField::GetTextWidth");
	var $spos = $s.length;
	var $tmp = this.mMaxWidth;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.GetTextHeight = function() {
	$s.push("jeash.text.TextField::GetTextHeight");
	var $spos = $s.length;
	var $tmp = this.mMaxHeight;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.GetTextColour = function() {
	$s.push("jeash.text.TextField::GetTextColour");
	var $spos = $s.length;
	var $tmp = this.mTextColour;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.SetTextColour = function(inCol) {
	$s.push("jeash.text.TextField::SetTextColour");
	var $spos = $s.length;
	this.mTextColour = inCol;
	this.RebuildText();
	$s.pop();
	return inCol;
	$s.pop();
}
jeash.text.TextField.prototype.GetText = function() {
	$s.push("jeash.text.TextField::GetText");
	var $spos = $s.length;
	if(this.mHTMLMode) this.ConvertHTMLToText(false);
	var $tmp = this.mText;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.SetText = function(inText) {
	$s.push("jeash.text.TextField::SetText");
	var $spos = $s.length;
	this.mText = inText;
	this.mHTMLText = inText;
	this.mHTMLMode = false;
	this.RebuildText();
	var $tmp = this.mText;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.ConvertHTMLToText = function(inUnSetHTML) {
	$s.push("jeash.text.TextField::ConvertHTMLToText");
	var $spos = $s.length;
	this.mText = "";
	var _g = 0, _g1 = this.mParagraphs;
	while(_g < _g1.length) {
		var paragraph = _g1[_g];
		++_g;
		var _g2 = 0, _g3 = paragraph.spans;
		while(_g2 < _g3.length) {
			var span = _g3[_g2];
			++_g2;
			this.mText += span.text;
		}
	}
	if(inUnSetHTML) {
		this.mHTMLMode = false;
		this.RebuildText();
	}
	$s.pop();
}
jeash.text.TextField.prototype.GetFocusObjects = function(outObjs) {
	$s.push("jeash.text.TextField::GetFocusObjects");
	var $spos = $s.length;
	if(this.mInput) outObjs.push(this);
	$s.pop();
}
jeash.text.TextField.prototype.SetAutoSize = function(inAutoSize) {
	$s.push("jeash.text.TextField::SetAutoSize");
	var $spos = $s.length;
	this.autoSize = inAutoSize;
	this.Rebuild();
	$s.pop();
	return inAutoSize;
	$s.pop();
}
jeash.text.TextField.prototype.SetWordWrap = function(inWordWrap) {
	$s.push("jeash.text.TextField::SetWordWrap");
	var $spos = $s.length;
	this.wordWrap = inWordWrap;
	this.Rebuild();
	var $tmp = this.wordWrap;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.SetBorder = function(inBorder) {
	$s.push("jeash.text.TextField::SetBorder");
	var $spos = $s.length;
	this.border = inBorder;
	this.Rebuild();
	$s.pop();
	return inBorder;
	$s.pop();
}
jeash.text.TextField.prototype.SetBorderColor = function(inBorderCol) {
	$s.push("jeash.text.TextField::SetBorderColor");
	var $spos = $s.length;
	this.borderColor = inBorderCol;
	this.Rebuild();
	$s.pop();
	return inBorderCol;
	$s.pop();
}
jeash.text.TextField.prototype.SetBackgroundColor = function(inCol) {
	$s.push("jeash.text.TextField::SetBackgroundColor");
	var $spos = $s.length;
	this.backgroundColor = inCol;
	this.Rebuild();
	$s.pop();
	return inCol;
	$s.pop();
}
jeash.text.TextField.prototype.SetBackground = function(inBack) {
	$s.push("jeash.text.TextField::SetBackground");
	var $spos = $s.length;
	this.background = inBack;
	this.Rebuild();
	$s.pop();
	return inBack;
	$s.pop();
}
jeash.text.TextField.prototype.GetHTMLText = function() {
	$s.push("jeash.text.TextField::GetHTMLText");
	var $spos = $s.length;
	var $tmp = this.mHTMLText;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.DecodeColour = function(col) {
	$s.push("jeash.text.TextField::DecodeColour");
	var $spos = $s.length;
	var $tmp = Std.parseInt("0x" + col.substr(1));
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.AddXML = function(x,a) {
	$s.push("jeash.text.TextField::AddXML");
	var $spos = $s.length;
	var type = x.nodeType;
	if(type == Xml.Document || type == Xml.Element) {
		if(type == Xml.Element) {
			a = { face : a.face, height : a.height, colour : a.colour, align : a.align};
			switch(x.getNodeName()) {
			case "p":
				var l = this.mParagraphs.length;
				var align = x.get("align");
				if(align != null) a.align = Type.createEnum(jeash.text.TextFormatAlign,align);
				if(l > 0 && this.mParagraphs[l - 1].spans.length > 0 && this.multiline) this.mParagraphs.push({ align : a.align, spans : []});
				break;
			case "font":
				var face = x.get("face");
				if(face != null) a.face = face;
				var height = x.get("size");
				if(height != null) a.height = Std["int"](Std.parseFloat(height));
				var col = x.get("color");
				if(col != null) a.colour = this.DecodeColour(col);
				break;
			}
		}
		var $it0 = x.iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			this.AddXML(child,a);
		}
	} else {
		var text = x.getNodeValue();
		var font = jeash.text.FontInstance.CreateSolid(a.face,a.height,a.colour,1.0);
		if(font != null && text != "") {
			var span = { text : text, font : font};
			var l = this.mParagraphs.length;
			if(this.mParagraphs.length < 1) this.mParagraphs.push({ align : a.align, spans : [span]}); else this.mParagraphs[l - 1].spans.push(span);
		}
	}
	$s.pop();
}
jeash.text.TextField.prototype.RebuildText = function() {
	$s.push("jeash.text.TextField::RebuildText");
	var $spos = $s.length;
	this.mParagraphs = [];
	if(this.mHTMLMode) {
		var xml = Xml.parse(this.mHTMLText);
		var a = { face : this.mFace, height : this.mTextHeight, colour : this.mTextColour, align : this.mAlign};
		this.AddXML(xml,a);
	} else {
		var font = jeash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
		var paras = this.mText.split("\n");
		var _g = 0;
		while(_g < paras.length) {
			var paragraph = paras[_g];
			++_g;
			this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph}]});
		}
	}
	this.Rebuild();
	$s.pop();
}
jeash.text.TextField.prototype.SetHTMLText = function(inHTMLText) {
	$s.push("jeash.text.TextField::SetHTMLText");
	var $spos = $s.length;
	this.mParagraphs = new Array();
	this.mHTMLText = inHTMLText;
	this.mHTMLMode = true;
	this.RebuildText();
	if(this.mInput) this.ConvertHTMLToText(true);
	var $tmp = this.mHTMLText;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.setSelection = function(beginIndex,endIndex) {
	$s.push("jeash.text.TextField::setSelection");
	var $spos = $s.length;
	$s.pop();
}
jeash.text.TextField.prototype.getTextFormat = function(beginIndex,endIndex) {
	$s.push("jeash.text.TextField::getTextFormat");
	var $spos = $s.length;
	var $tmp = new jeash.text.TextFormat();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.getDefaultTextFormat = function() {
	$s.push("jeash.text.TextField::getDefaultTextFormat");
	var $spos = $s.length;
	var $tmp = new jeash.text.TextFormat();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.setTextFormat = function(inFmt) {
	$s.push("jeash.text.TextField::setTextFormat");
	var $spos = $s.length;
	if(inFmt.font != null) this.mFace = inFmt.font;
	if(inFmt.size != null) this.mTextHeight = Std["int"](inFmt.size);
	if(inFmt.align != null) this.mAlign = inFmt.align;
	if(inFmt.color != null) this.mTextColour = inFmt.color;
	this.RebuildText();
	var $tmp = this.getTextFormat();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.TextField.prototype.__class__ = jeash.text.TextField;
jeash.text.FontInstanceMode = { __ename__ : ["jeash","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
jeash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
jeash.text.FontInstanceMode.fimSolid.toString = $estr;
jeash.text.FontInstanceMode.fimSolid.__enum__ = jeash.text.FontInstanceMode;
jeash.text.FontInstance = function(inFont,inHeight) {
	if( inFont === $_ ) return;
	$s.push("jeash.text.FontInstance::new");
	var $spos = $s.length;
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
	$s.pop();
}
jeash.text.FontInstance.__name__ = ["jeash","text","FontInstance"];
jeash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	$s.push("jeash.text.FontInstance::CreateSolid");
	var $spos = $s.length;
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = jeash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) {
		$s.pop();
		return f;
	}
	var font = new jeash.text.Font();
	font.jeashSetScale(inHeight);
	font.jeashSetFontName(inFace);
	if(font == null) {
		$s.pop();
		return null;
	}
	f = new jeash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	jeash.text.FontInstance.mSolidFonts.set(id,f);
	$s.pop();
	return f;
	$s.pop();
}
jeash.text.FontInstance.prototype.mMode = null;
jeash.text.FontInstance.prototype.mColour = null;
jeash.text.FontInstance.prototype.mAlpha = null;
jeash.text.FontInstance.prototype.mFont = null;
jeash.text.FontInstance.prototype.mHeight = null;
jeash.text.FontInstance.prototype.mGlyphs = null;
jeash.text.FontInstance.prototype.mCacheAsBitmap = null;
jeash.text.FontInstance.prototype.mTryFreeType = null;
jeash.text.FontInstance.prototype.height = null;
jeash.text.FontInstance.prototype.toString = function() {
	$s.push("jeash.text.FontInstance::toString");
	var $spos = $s.length;
	var $tmp = "FontInstance:" + this.mFont + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.FontInstance.prototype.GetFace = function() {
	$s.push("jeash.text.FontInstance::GetFace");
	var $spos = $s.length;
	var $tmp = this.mFont.fontName;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.FontInstance.prototype.jeashGetHeight = function() {
	$s.push("jeash.text.FontInstance::jeashGetHeight");
	var $spos = $s.length;
	var $tmp = this.mHeight;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.FontInstance.prototype.SetSolid = function(inCol,inAlpha) {
	$s.push("jeash.text.FontInstance::SetSolid");
	var $spos = $s.length;
	this.mColour = inCol;
	this.mAlpha = inAlpha;
	this.mMode = jeash.text.FontInstanceMode.fimSolid;
	$s.pop();
}
jeash.text.FontInstance.prototype.RenderChar = function(inGraphics,inGlyph,inX,inY) {
	$s.push("jeash.text.FontInstance::RenderChar");
	var $spos = $s.length;
	inGraphics.beginFill(this.mColour,this.mAlpha);
	this.mFont.jeashRender(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
	$s.pop();
}
jeash.text.FontInstance.prototype.jeashGetAdvance = function(inChar) {
	$s.push("jeash.text.FontInstance::jeashGetAdvance");
	var $spos = $s.length;
	if(this.mFont == null) {
		$s.pop();
		return 0;
	}
	var $tmp = this.mFont.jeashGetAdvance(inChar,this.mHeight);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.FontInstance.prototype.__class__ = jeash.text.FontInstance;
if(!jeash.net) jeash.net = {}
jeash.net.URLRequest = function(inURL) {
	if( inURL === $_ ) return;
	$s.push("jeash.net.URLRequest::new");
	var $spos = $s.length;
	if(inURL != null) this.url = inURL;
	$s.pop();
}
jeash.net.URLRequest.__name__ = ["jeash","net","URLRequest"];
jeash.net.URLRequest.prototype.url = null;
jeash.net.URLRequest.prototype.__class__ = jeash.net.URLRequest;
jeash.display.StageScaleMode = { __ename__ : ["jeash","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
jeash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
jeash.display.StageScaleMode.SHOW_ALL.toString = $estr;
jeash.display.StageScaleMode.SHOW_ALL.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
jeash.display.StageScaleMode.NO_SCALE.toString = $estr;
jeash.display.StageScaleMode.NO_SCALE.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
jeash.display.StageScaleMode.NO_BORDER.toString = $estr;
jeash.display.StageScaleMode.NO_BORDER.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
jeash.display.StageScaleMode.EXACT_FIT.toString = $estr;
jeash.display.StageScaleMode.EXACT_FIT.__enum__ = jeash.display.StageScaleMode;
jeash.utils.ByteArray = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.utils.ByteArray::new");
	var $spos = $s.length;
	this.position = 0;
	this.data = [];
	this.TWOeN23 = Math.pow(2,-23);
	this.pow = Math.pow;
	this.LN2 = Math.log(2);
	this.abs = Math.abs;
	this.log = Math.log;
	this.floor = Math.floor;
	this.bigEndian = false;
	$s.pop();
}
jeash.utils.ByteArray.__name__ = ["jeash","utils","ByteArray"];
jeash.utils.ByteArray.prototype.data = null;
jeash.utils.ByteArray.prototype.bigEndian = null;
jeash.utils.ByteArray.prototype.bytesAvailable = null;
jeash.utils.ByteArray.prototype.endian = null;
jeash.utils.ByteArray.prototype.objectEncoding = null;
jeash.utils.ByteArray.prototype.position = null;
jeash.utils.ByteArray.prototype.length = null;
jeash.utils.ByteArray.prototype.TWOeN23 = null;
jeash.utils.ByteArray.prototype.pow = null;
jeash.utils.ByteArray.prototype.LN2 = null;
jeash.utils.ByteArray.prototype.abs = null;
jeash.utils.ByteArray.prototype.log = null;
jeash.utils.ByteArray.prototype.floor = null;
jeash.utils.ByteArray.prototype.GetBytesAvailable = function() {
	$s.push("jeash.utils.ByteArray::GetBytesAvailable");
	var $spos = $s.length;
	var $tmp = this.GetLength() - this.position;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.readString = function(len) {
	$s.push("jeash.utils.ByteArray::readString");
	var $spos = $s.length;
	var bytes = haxe.io.Bytes.alloc(len);
	this.readFullBytes(bytes,0,len);
	var $tmp = bytes.toString();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.readFullBytes = function(bytes,pos,len) {
	$s.push("jeash.utils.ByteArray::readFullBytes");
	var $spos = $s.length;
	var _g1 = pos, _g = pos + len;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.read = function(nbytes) {
	$s.push("jeash.utils.ByteArray::read");
	var $spos = $s.length;
	var s = new jeash.utils.ByteArray();
	this.readBytes(s,0,nbytes);
	var $tmp = haxe.io.Bytes.ofData(s.data);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.GetLength = function() {
	$s.push("jeash.utils.ByteArray::GetLength");
	var $spos = $s.length;
	var $tmp = this.data.length;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.readByte = function() {
	$s.push("jeash.utils.ByteArray::readByte");
	var $spos = $s.length;
	if(this.position >= this.GetLength()) throw new jeash.errors.IOError("Read error - Out of bounds");
	var $tmp = this.data[this.position++];
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.readBytes = function(bytes,offset,length) {
	$s.push("jeash.utils.ByteArray::readBytes");
	var $spos = $s.length;
	if(offset < 0 || length < 0 || offset + length > this.data.length) throw new jeash.errors.IOError("Read error - Out of bounds");
	if(this.data.length == 0 && length > 0) throw new jeash.errors.IOError("Read error - Out of bounds");
	if(this.data.length < length) length = this.data.length;
	var b1 = this.data;
	var b2 = bytes;
	b2.position = offset;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		b2.writeByte(b1[this.position + i]);
	}
	b2.position = offset;
	this.position += length;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeByte = function(value) {
	$s.push("jeash.utils.ByteArray::writeByte");
	var $spos = $s.length;
	this.data[this.position++] = value;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeBytes = function(bytes,offset,length) {
	$s.push("jeash.utils.ByteArray::writeBytes");
	var $spos = $s.length;
	if(offset < 0 || length < 0 || offset + length > bytes.GetLength()) throw new jeash.errors.IOError("Write error - Out of bounds");
	var b2 = bytes;
	b2.position = offset;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		this.data[this.position++] = b2.readByte();
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.readBoolean = function() {
	$s.push("jeash.utils.ByteArray::readBoolean");
	var $spos = $s.length;
	var $tmp = this.readByte() == 1?true:false;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeBoolean = function(value) {
	$s.push("jeash.utils.ByteArray::writeBoolean");
	var $spos = $s.length;
	this.writeByte(value?1:0);
	$s.pop();
}
jeash.utils.ByteArray.prototype.readDouble = function() {
	$s.push("jeash.utils.ByteArray::readDouble");
	var $spos = $s.length;
	var data = this.data, pos, b1, b2, b3, b4, b5, b6, b7, b8;
	if(this.bigEndian) {
		pos = (this.position += 8) - 8;
		b1 = data[pos] & 255;
		b2 = data[++pos] & 255;
		b3 = data[++pos] & 255;
		b4 = data[++pos] & 255;
		b5 = data[++pos] & 255;
		b6 = data[++pos] & 255;
		b7 = data[++pos] & 255;
		b8 = data[++pos] & 255;
	} else {
		pos = this.position += 8;
		b1 = data[--pos] & 255;
		b2 = data[--pos] & 255;
		b3 = data[--pos] & 255;
		b4 = data[--pos] & 255;
		b5 = data[--pos] & 255;
		b6 = data[--pos] & 255;
		b7 = data[--pos] & 255;
		b8 = data[--pos] & 255;
	}
	var sign = 1 - (b1 >> 7 << 1);
	var exp = (b1 << 4 & 2047 | b2 >> 4) - 1023;
	var sig = parseInt((((b2 & 15) << 16 | b3 << 8 | b4) * this.pow(2,32)).toString(2),2) + parseInt(((b5 >> 7) * this.pow(2,31)).toString(2),2) + parseInt(((b5 & 127) << 24 | b6 << 16 | b7 << 8 | b8).toString(2),2);
	if(sig == 0 && exp == -1023) {
		$s.pop();
		return 0.0;
	}
	var $tmp = sign * (1.0 + this.pow(2,-52) * sig) * this.pow(2,exp);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeDouble = function(x) {
	$s.push("jeash.utils.ByteArray::writeDouble");
	var $spos = $s.length;
	if(x == 0.0) {
		var _g = 0;
		while(_g < 8) {
			var _ = _g++;
			this.data[this.position++] = 0;
		}
	}
	var exp = this.floor(this.log(this.abs(x)) / this.LN2);
	var sig = this.floor(this.abs(x) / this.pow(2,exp) * this.pow(2,52));
	var sig_h = sig & 34359738367;
	var sig_l = this.floor(sig / this.pow(2,32));
	var b1 = exp + 1023 >> 4 | (exp > 0?x < 0?128:64:x < 0?128:0), b2 = exp + 1023 << 4 & 255 | sig_l >> 16 & 15, b3 = sig_l >> 8 & 255, b4 = sig_l & 255, b5 = sig_h >> 24 & 255, b6 = sig_h >> 16 & 255, b7 = sig_h >> 8 & 255, b8 = sig_h & 255;
	if(this.bigEndian) {
		this.data[this.position++] = b1;
		this.data[this.position++] = b2;
		this.data[this.position++] = b3;
		this.data[this.position++] = b4;
		this.data[this.position++] = b5;
		this.data[this.position++] = b6;
		this.data[this.position++] = b7;
		this.data[this.position++] = b8;
	} else {
		this.data[this.position++] = b8;
		this.data[this.position++] = b7;
		this.data[this.position++] = b6;
		this.data[this.position++] = b5;
		this.data[this.position++] = b4;
		this.data[this.position++] = b3;
		this.data[this.position++] = b2;
		this.data[this.position++] = b1;
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.readFloat = function() {
	$s.push("jeash.utils.ByteArray::readFloat");
	var $spos = $s.length;
	var data = this.data, pos, b1, b2, b3, b4;
	if(this.bigEndian) {
		pos = (this.position += 4) - 4;
		b1 = data[pos] & 255;
		b2 = data[++pos] & 255;
		b3 = data[++pos] & 255;
		b4 = data[++pos] & 255;
	} else {
		pos = this.position += 4;
		b1 = data[--pos] & 255;
		b2 = data[--pos] & 255;
		b3 = data[--pos] & 255;
		b4 = data[--pos] & 255;
	}
	var sign = 1 - (b1 >> 7 << 1);
	var exp = (b1 << 1 & 255 | b2 >> 7) - 127;
	var sig = (b2 & 127) << 16 | b3 << 8 | b4;
	if(sig == 0 && exp == -127) {
		$s.pop();
		return 0.0;
	}
	var $tmp = sign * (1 + this.TWOeN23 * sig) * this.pow(2,exp);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeFloat = function(x) {
	$s.push("jeash.utils.ByteArray::writeFloat");
	var $spos = $s.length;
	if(x == 0.0) {
		var _g = 0;
		while(_g < 4) {
			var _ = _g++;
			this.data[this.position++] = 0;
		}
	}
	var exp = this.floor(this.log(this.abs(x)) / this.LN2);
	var sig = this.floor(this.abs(x) / this.pow(2,exp) * this.pow(2,23)) & 8388607;
	var b1 = exp + 127 >> 1 | (exp > 0?x < 0?128:64:x < 0?128:0), b2 = exp + 127 << 7 & 255 | sig >> 16 & 127, b3 = sig >> 8 & 255, b4 = sig & 255;
	if(this.bigEndian) {
		this.data[this.position++] = b1;
		this.data[this.position++] = b2;
		this.data[this.position++] = b3;
		this.data[this.position++] = b4;
	} else {
		this.data[this.position++] = b4;
		this.data[this.position++] = b3;
		this.data[this.position++] = b2;
		this.data[this.position++] = b1;
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.readInt = function() {
	$s.push("jeash.utils.ByteArray::readInt");
	var $spos = $s.length;
	var ch1, ch2, ch3, ch4;
	if(this.bigEndian) {
		ch4 = this.readByte();
		ch3 = this.readByte();
		ch2 = this.readByte();
		ch1 = this.readByte();
	} else {
		ch1 = this.readByte();
		ch2 = this.readByte();
		ch3 = this.readByte();
		ch4 = this.readByte();
	}
	var $tmp = ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeInt = function(value) {
	$s.push("jeash.utils.ByteArray::writeInt");
	var $spos = $s.length;
	if(this.bigEndian) {
		this.writeByte(value >>> 24);
		this.writeByte(value >> 16 & 255);
		this.writeByte(value >> 8 & 255);
		this.writeByte(value & 255);
	} else {
		this.writeByte(value & 255);
		this.writeByte(value >> 8 & 255);
		this.writeByte(value >> 16 & 255);
		this.writeByte(value >>> 24);
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.readShort = function() {
	$s.push("jeash.utils.ByteArray::readShort");
	var $spos = $s.length;
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	if((n & 32768) != 0) {
		var $tmp = n - 65536;
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return n;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeShort = function(value) {
	$s.push("jeash.utils.ByteArray::writeShort");
	var $spos = $s.length;
	if(value < -32768 || value >= 32768) throw new jeash.errors.IOError("Write error - overflow");
	this.writeUnsignedShort(value & 65535);
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeUnsignedShort = function(value) {
	$s.push("jeash.utils.ByteArray::writeUnsignedShort");
	var $spos = $s.length;
	if(value < 0 || value >= 65536) throw new jeash.errors.IOError("Write error - overflow");
	if(this.__GetEndian() == jeash.utils.Endian.BIG_ENDIAN) {
		this.writeByte(value >> 8);
		this.writeByte(value & 255);
	} else {
		this.writeByte(value & 255);
		this.writeByte(value >> 8);
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.readUTF = function() {
	$s.push("jeash.utils.ByteArray::readUTF");
	var $spos = $s.length;
	var len = this.readShort();
	var bytes = haxe.io.Bytes.ofData(this.data);
	var $tmp = bytes.readString(2,len);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeUTF = function(value) {
	$s.push("jeash.utils.ByteArray::writeUTF");
	var $spos = $s.length;
	var bytes = haxe.io.Bytes.ofString(value);
	this.writeShort(bytes.length);
	var _g1 = 0, _g = bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeUTFBytes = function(value) {
	$s.push("jeash.utils.ByteArray::writeUTFBytes");
	var $spos = $s.length;
	var bytes = haxe.io.Bytes.ofString(value);
	var _g1 = 0, _g = bytes.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.data[this.position++] = bytes.b[i];
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.readUTFBytes = function(len) {
	$s.push("jeash.utils.ByteArray::readUTFBytes");
	var $spos = $s.length;
	var bytes = haxe.io.Bytes.ofData(this.data);
	var $tmp = bytes.readString(0,len);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.readUnsignedByte = function() {
	$s.push("jeash.utils.ByteArray::readUnsignedByte");
	var $spos = $s.length;
	var $tmp = this.readByte();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.readUnsignedShort = function() {
	$s.push("jeash.utils.ByteArray::readUnsignedShort");
	var $spos = $s.length;
	var $tmp = this.readShort();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.readUnsignedInt = function() {
	$s.push("jeash.utils.ByteArray::readUnsignedInt");
	var $spos = $s.length;
	var $tmp = this.readInt();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.utils.ByteArray.prototype.writeUnsignedInt = function(value) {
	$s.push("jeash.utils.ByteArray::writeUnsignedInt");
	var $spos = $s.length;
	this.writeInt(value);
	$s.pop();
}
jeash.utils.ByteArray.prototype.__GetEndian = function() {
	$s.push("jeash.utils.ByteArray::__GetEndian");
	var $spos = $s.length;
	if(this.bigEndian == true) {
		var $tmp = jeash.utils.Endian.BIG_ENDIAN;
		$s.pop();
		return $tmp;
	} else {
		var $tmp = jeash.utils.Endian.LITTLE_ENDIAN;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
jeash.utils.ByteArray.prototype.__SetEndian = function(endian) {
	$s.push("jeash.utils.ByteArray::__SetEndian");
	var $spos = $s.length;
	if(endian == jeash.utils.Endian.BIG_ENDIAN) this.bigEndian = true; else this.bigEndian = false;
	$s.pop();
	return endian;
	$s.pop();
}
jeash.utils.ByteArray.prototype.__class__ = jeash.utils.ByteArray;
jeash.display.DisplayObjectContainer = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.display.DisplayObjectContainer::new");
	var $spos = $s.length;
	this.jeashChildren = new Array();
	this.mLastSetupObjs = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	jeash.display.InteractiveObject.call(this);
	this.name = "DisplayObjectContainer " + jeash.display.DisplayObject.mNameID++;
	$s.pop();
}
jeash.display.DisplayObjectContainer.__name__ = ["jeash","display","DisplayObjectContainer"];
jeash.display.DisplayObjectContainer.__super__ = jeash.display.InteractiveObject;
for(var k in jeash.display.InteractiveObject.prototype ) jeash.display.DisplayObjectContainer.prototype[k] = jeash.display.InteractiveObject.prototype[k];
jeash.display.DisplayObjectContainer.prototype.jeashChildren = null;
jeash.display.DisplayObjectContainer.prototype.mLastSetupObjs = null;
jeash.display.DisplayObjectContainer.prototype.numChildren = null;
jeash.display.DisplayObjectContainer.prototype.mouseChildren = null;
jeash.display.DisplayObjectContainer.prototype.tabChildren = null;
jeash.display.DisplayObjectContainer.prototype.AsContainer = function() {
	$s.push("jeash.display.DisplayObjectContainer::AsContainer");
	var $spos = $s.length;
	$s.pop();
	return this;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashBroadcast = function(event) {
	$s.push("jeash.display.DisplayObjectContainer::jeashBroadcast");
	var $spos = $s.length;
	var i = 0;
	if(this.jeashChildren.length > 0) while(true) {
		var child = this.jeashChildren[i];
		child.jeashBroadcast(event);
		if(i >= this.jeashChildren.length) break;
		if(this.jeashChildren[i] == child) {
			i++;
			if(i >= this.jeashChildren.length) break;
		}
	}
	this.dispatchEvent(event);
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.BuildBounds = function() {
	$s.push("jeash.display.DisplayObjectContainer::BuildBounds");
	var $spos = $s.length;
	jeash.display.InteractiveObject.prototype.BuildBounds.call(this);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible()) {
			var r = obj.getBounds(this);
			if(r.width != 0 || r.height != 0) {
				if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
			}
		}
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashInvalidateMatrix = function(local) {
	$s.push("jeash.display.DisplayObjectContainer::jeashInvalidateMatrix");
	var $spos = $s.length;
	if(local == null) local = false;
	if(this.mMtxChainDirty == false && this.mMtxDirty == false) {
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.jeashInvalidateMatrix();
		}
	}
	this.mMtxChainDirty = this.mMtxChainDirty || !local;
	this.mMtxDirty = this.mMtxDirty || local;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashDoAdded = function(inObj) {
	$s.push("jeash.display.DisplayObjectContainer::jeashDoAdded");
	var $spos = $s.length;
	jeash.display.InteractiveObject.prototype.jeashDoAdded.call(this,inObj);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.jeashDoAdded(inObj);
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashDoRemoved = function(inObj) {
	$s.push("jeash.display.DisplayObjectContainer::jeashDoRemoved");
	var $spos = $s.length;
	jeash.display.InteractiveObject.prototype.jeashDoRemoved.call(this,inObj);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var child = _g1[_g];
		++_g;
		child.jeashDoRemoved(inObj);
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.GetBackgroundRect = function() {
	$s.push("jeash.display.DisplayObjectContainer::GetBackgroundRect");
	var $spos = $s.length;
	var r = jeash.display.InteractiveObject.prototype.GetBackgroundRect.call(this);
	if(r != null) r = r.clone();
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible()) {
			var o = obj.GetBackgroundRect();
			if(o != null) {
				var trans = o.transform(obj.mMatrix);
				if(r == null || r.width == 0 || r.height == 0) r = trans; else if(trans.width != 0 && trans.height != 0) r.extendBounds(trans);
			}
		}
	}
	$s.pop();
	return r;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.GetFocusObjects = function(outObjs) {
	$s.push("jeash.display.DisplayObjectContainer::GetFocusObjects");
	var $spos = $s.length;
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		obj.GetFocusObjects(outObjs);
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.GetNumChildren = function() {
	$s.push("jeash.display.DisplayObjectContainer::GetNumChildren");
	var $spos = $s.length;
	var $tmp = this.jeashChildren.length;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashRender = function(inParentMatrix,inMask) {
	$s.push("jeash.display.DisplayObjectContainer::jeashRender");
	var $spos = $s.length;
	if(!this.jeashGetVisible() || this.mMaskingObj != null) {
		$s.pop();
		return;
	}
	jeash.display.InteractiveObject.prototype.jeashRender.call(this,inParentMatrix,inMask);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		if(obj.jeashGetVisible() && obj.mMaskingObj == null) obj.jeashRender(this.mFullMatrix,inMask);
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashRenderContentsToCache = function(parentMatrix,canvas) {
	$s.push("jeash.display.DisplayObjectContainer::jeashRenderContentsToCache");
	var $spos = $s.length;
	jeash.display.InteractiveObject.prototype.jeashRenderContentsToCache.call(this,parentMatrix,canvas);
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		obj.jeashRenderContentsToCache(this.mMatrix,canvas);
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.WalkChildren = function(func) {
	$s.push("jeash.display.DisplayObjectContainer::WalkChildren");
	var $spos = $s.length;
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var obj = _g1[_g];
		++_g;
		func(obj);
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.addChild = function(object) {
	$s.push("jeash.display.DisplayObjectContainer::addChild");
	var $spos = $s.length;
	if(object == this) throw "Adding to self";
	if(object.parent == this) {
		this.setChildIndex(object,this.jeashChildren.length - 1);
		$s.pop();
		return object;
	}
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == object) throw "Internal error: child already existed at index " + i;
	}
	if(this.jeashIsOnStage()) object.jeashAddToStage();
	this.jeashChildren.push(object);
	object.jeashSetParent(this);
	$s.pop();
	return object;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashAddToStage = function() {
	$s.push("jeash.display.DisplayObjectContainer::jeashAddToStage");
	var $spos = $s.length;
	jeash.display.InteractiveObject.prototype.jeashAddToStage.call(this);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.jeashChildren[i].jeashAddToStage();
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashInsertBefore = function(obj) {
	$s.push("jeash.display.DisplayObjectContainer::jeashInsertBefore");
	var $spos = $s.length;
	jeash.display.InteractiveObject.prototype.jeashInsertBefore.call(this,obj);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.jeashChildren[i].jeashAddToStage();
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashSetVisible = function(visible) {
	$s.push("jeash.display.DisplayObjectContainer::jeashSetVisible");
	var $spos = $s.length;
	jeash.display.InteractiveObject.prototype.jeashSetVisible.call(this,visible);
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.jeashChildren[i].jeashSetVisible(visible);
	}
	$s.pop();
	return visible;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.addChildAt = function(obj,index) {
	$s.push("jeash.display.DisplayObjectContainer::addChildAt");
	var $spos = $s.length;
	if(index > this.jeashChildren.length || index < 0) throw "Invalid index position " + index;
	if(obj.parent == this) {
		this.setChildIndex(obj,index);
		$s.pop();
		return;
	}
	if(index == this.jeashChildren.length) {
		this.jeashChildren.push(obj);
		if(this.jeashIsOnStage()) obj.jeashAddToStage();
	} else {
		if(this.jeashIsOnStage()) obj.jeashInsertBefore(this.jeashChildren[index]);
		this.jeashChildren.insert(index,obj);
	}
	obj.jeashSetParent(this);
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.contains = function(child) {
	$s.push("jeash.display.DisplayObjectContainer::contains");
	var $spos = $s.length;
	if(child == null) {
		$s.pop();
		return false;
	}
	if(this == child) {
		$s.pop();
		return true;
	}
	var _g = 0, _g1 = this.jeashChildren;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		if(c == child) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	$s.push("jeash.display.DisplayObjectContainer::getChildAt");
	var $spos = $s.length;
	if(index >= 0 && index < this.jeashChildren.length) {
		var $tmp = this.jeashChildren[index];
		$s.pop();
		return $tmp;
	}
	throw "getChildAt : index out of bounds " + index + "/" + this.jeashChildren.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.getChildByName = function(inName) {
	$s.push("jeash.display.DisplayObjectContainer::getChildByName");
	var $spos = $s.length;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i].name == inName) {
			var $tmp = this.jeashChildren[i];
			$s.pop();
			return $tmp;
		}
	}
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	$s.push("jeash.display.DisplayObjectContainer::getChildIndex");
	var $spos = $s.length;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child) {
			$s.pop();
			return i;
		}
	}
	$s.pop();
	return -1;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	$s.push("jeash.display.DisplayObjectContainer::removeChild");
	var $spos = $s.length;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child) {
			child.jeashSetParent(null);
			if(this.getChildIndex(child) >= 0) throw "Not removed properly";
			$s.pop();
			return;
		}
	}
	throw "removeChild : none found?";
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.removeChildAt = function(inI) {
	$s.push("jeash.display.DisplayObjectContainer::removeChildAt");
	var $spos = $s.length;
	this.jeashChildren[inI].jeashSetParent(null);
	var $tmp = this.jeashChildren[inI];
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.__removeChild = function(child) {
	$s.push("jeash.display.DisplayObjectContainer::__removeChild");
	var $spos = $s.length;
	var i = this.getChildIndex(child);
	if(i >= 0) this.jeashChildren.splice(i,1);
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.setChildIndex = function(child,index) {
	$s.push("jeash.display.DisplayObjectContainer::setChildIndex");
	var $spos = $s.length;
	if(index > this.jeashChildren.length) throw "Invalid index position " + index;
	var s = null;
	var orig = this.getChildIndex(child);
	if(orig < 0) {
		var msg = "setChildIndex : object " + child.name + " not found.";
		if(child.parent == this) {
			var realindex = -1;
			var _g1 = 0, _g = this.jeashChildren.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(this.jeashChildren[i] == child) {
					realindex = i;
					break;
				}
			}
			if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in jeashChildren array!";
		}
		throw msg;
	}
	if(index < orig) {
		var i = orig;
		while(i > index) {
			this.swapChildren(this.jeashChildren[i],this.jeashChildren[i - 1]);
			i--;
		}
	} else if(orig < index) {
		var i = orig;
		while(i < index) {
			this.swapChildren(this.jeashChildren[i],this.jeashChildren[i + 1]);
			i++;
		}
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashSwapSurface = function(c1,c2) {
	$s.push("jeash.display.DisplayObjectContainer::jeashSwapSurface");
	var $spos = $s.length;
	if(this.jeashChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.jeashChildren.length;
	if(this.jeashChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.jeashChildren.length;
	var gfx1 = this.jeashChildren[c1].jeashGetGraphics();
	var gfx2 = this.jeashChildren[c2].jeashGetGraphics();
	if(gfx1 != null && gfx2 != null) jeash.Lib.jeashSwapSurface(gfx1.jeashSurface,gfx2.jeashSurface);
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.swapChildren = function(child1,child2) {
	$s.push("jeash.display.DisplayObjectContainer::swapChildren");
	var $spos = $s.length;
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this.jeashChildren[i] == child1) c1 = i; else if(this.jeashChildren[i] == child2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = this.jeashChildren[c1];
		this.jeashChildren[c1] = this.jeashChildren[c2];
		this.jeashChildren[c2] = swap;
		swap = null;
		this.jeashSwapSurface(c1,c2);
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.swapChildrenAt = function(child1,child2) {
	$s.push("jeash.display.DisplayObjectContainer::swapChildrenAt");
	var $spos = $s.length;
	var swap = this.jeashChildren[child1];
	this.jeashChildren[child1] = this.jeashChildren[child2];
	this.jeashChildren[child2] = swap;
	swap = null;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashGetObjectUnderPoint = function(point) {
	$s.push("jeash.display.DisplayObjectContainer::jeashGetObjectUnderPoint");
	var $spos = $s.length;
	if(!this.jeashGetVisible()) {
		$s.pop();
		return null;
	}
	var l = this.jeashChildren.length - 1;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
		if(result != null) {
			$s.pop();
			return result;
		}
	}
	var $tmp = jeash.display.InteractiveObject.prototype.jeashGetObjectUnderPoint.call(this,point);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.getObjectsUnderPoint = function(point) {
	$s.push("jeash.display.DisplayObjectContainer::getObjectsUnderPoint");
	var $spos = $s.length;
	var result = new Array();
	this.jeashGetObjectsUnderPoint(point,result);
	$s.pop();
	return result;
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.jeashGetObjectsUnderPoint = function(point,stack) {
	$s.push("jeash.display.DisplayObjectContainer::jeashGetObjectsUnderPoint");
	var $spos = $s.length;
	var l = this.jeashChildren.length - 1;
	var _g1 = 0, _g = this.jeashChildren.length;
	while(_g1 < _g) {
		var i = _g1++;
		var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
		if(result != null) stack.push(result);
	}
	$s.pop();
}
jeash.display.DisplayObjectContainer.prototype.__class__ = jeash.display.DisplayObjectContainer;
jeash.display.Loader = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.display.Loader::new");
	var $spos = $s.length;
	jeash.display.DisplayObjectContainer.call(this);
	this.contentLoaderInfo = jeash.display.LoaderInfo.create(this);
	this.name = "Loader " + jeash.display.DisplayObject.mNameID++;
	$s.pop();
}
jeash.display.Loader.__name__ = ["jeash","display","Loader"];
jeash.display.Loader.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Loader.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Loader.prototype.content = null;
jeash.display.Loader.prototype.contentLoaderInfo = null;
jeash.display.Loader.prototype.mImage = null;
jeash.display.Loader.prototype.mShape = null;
jeash.display.Loader.prototype.load = function(request,context) {
	$s.push("jeash.display.Loader::load");
	var $spos = $s.length;
	var parts = request.url.split(".");
	var extension = parts.length == 0?"":parts[parts.length - 1].toLowerCase();
	var transparent = true;
	this.contentLoaderInfo.url = request.url;
	this.contentLoaderInfo.contentType = (function($this) {
		var $r;
		switch(extension) {
		case "swf":
			$r = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			$r = (function($this) {
				var $r;
				transparent = false;
				$r = "image/jpeg";
				return $r;
			}($this));
			break;
		case "png":
			$r = "image/png";
			break;
		case "gif":
			$r = "image/gif";
			break;
		default:
			$r = (function($this) {
				var $r;
				throw "Unrecognized file " + request.url;
				return $r;
			}($this));
		}
		return $r;
	}(this));
	this.mImage = new jeash.display.BitmapData(0,0,transparent);
	try {
		this.contentLoaderInfo.addEventListener(jeash.events.Event.COMPLETE,$closure(this,"handleLoad"),false,2147483647);
		this.mImage.jeashLoadFromFile(request.url,this.contentLoaderInfo);
		this.content = new jeash.display.Bitmap(this.mImage);
		this.contentLoaderInfo["content"] = this.content;
		this.addChild(this.content);
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		haxe.Log.trace("Error " + e,{ fileName : "Loader.hx", lineNumber : 90, className : "jeash.display.Loader", methodName : "load"});
		var evt = new jeash.events.IOErrorEvent(jeash.events.IOErrorEvent.IO_ERROR);
		this.contentLoaderInfo.dispatchEvent(evt);
		$s.pop();
		return;
	}
	if(this.mShape == null) {
		this.mShape = new jeash.display.Shape();
		this.addChild(this.mShape);
	}
	$s.pop();
}
jeash.display.Loader.prototype.handleLoad = function(e) {
	$s.push("jeash.display.Loader::handleLoad");
	var $spos = $s.length;
	this.contentLoaderInfo.removeEventListener(jeash.events.Event.COMPLETE,$closure(this,"handleLoad"));
	this.jeashInvalidateBounds();
	$s.pop();
}
jeash.display.Loader.prototype.BuildBounds = function() {
	$s.push("jeash.display.Loader::BuildBounds");
	var $spos = $s.length;
	jeash.display.DisplayObjectContainer.prototype.BuildBounds.call(this);
	if(this.mImage != null) {
		var r = new jeash.geom.Rectangle(0,0,this.mImage.getWidth(),this.mImage.getHeight());
		if(r.width != 0 || r.height != 0) {
			if(this.mBoundsRect.width == 0 && this.mBoundsRect.height == 0) this.mBoundsRect = r.clone(); else this.mBoundsRect.extendBounds(r);
		}
	}
	$s.pop();
}
jeash.display.Loader.prototype.__class__ = jeash.display.Loader;
jeash.display.BlendMode = { __ename__ : ["jeash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
jeash.display.BlendMode.ADD = ["ADD",0];
jeash.display.BlendMode.ADD.toString = $estr;
jeash.display.BlendMode.ADD.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.ALPHA = ["ALPHA",1];
jeash.display.BlendMode.ALPHA.toString = $estr;
jeash.display.BlendMode.ALPHA.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.DARKEN = ["DARKEN",2];
jeash.display.BlendMode.DARKEN.toString = $estr;
jeash.display.BlendMode.DARKEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
jeash.display.BlendMode.DIFFERENCE.toString = $estr;
jeash.display.BlendMode.DIFFERENCE.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.ERASE = ["ERASE",4];
jeash.display.BlendMode.ERASE.toString = $estr;
jeash.display.BlendMode.ERASE.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
jeash.display.BlendMode.HARDLIGHT.toString = $estr;
jeash.display.BlendMode.HARDLIGHT.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.INVERT = ["INVERT",6];
jeash.display.BlendMode.INVERT.toString = $estr;
jeash.display.BlendMode.INVERT.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.LAYER = ["LAYER",7];
jeash.display.BlendMode.LAYER.toString = $estr;
jeash.display.BlendMode.LAYER.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
jeash.display.BlendMode.LIGHTEN.toString = $estr;
jeash.display.BlendMode.LIGHTEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
jeash.display.BlendMode.MULTIPLY.toString = $estr;
jeash.display.BlendMode.MULTIPLY.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.NORMAL = ["NORMAL",10];
jeash.display.BlendMode.NORMAL.toString = $estr;
jeash.display.BlendMode.NORMAL.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.OVERLAY = ["OVERLAY",11];
jeash.display.BlendMode.OVERLAY.toString = $estr;
jeash.display.BlendMode.OVERLAY.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.SCREEN = ["SCREEN",12];
jeash.display.BlendMode.SCREEN.toString = $estr;
jeash.display.BlendMode.SCREEN.__enum__ = jeash.display.BlendMode;
jeash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
jeash.display.BlendMode.SUBTRACT.toString = $estr;
jeash.display.BlendMode.SUBTRACT.__enum__ = jeash.display.BlendMode;
jeash.events.Listener = function(inListener,inUseCapture,inPriority) {
	if( inListener === $_ ) return;
	$s.push("jeash.events.Listener::new");
	var $spos = $s.length;
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = jeash.events.Listener.sIDs++;
	$s.pop();
}
jeash.events.Listener.__name__ = ["jeash","events","Listener"];
jeash.events.Listener.prototype.mListner = null;
jeash.events.Listener.prototype.mUseCapture = null;
jeash.events.Listener.prototype.mPriority = null;
jeash.events.Listener.prototype.mID = null;
jeash.events.Listener.prototype.Is = function(inListener,inCapture) {
	$s.push("jeash.events.Listener::Is");
	var $spos = $s.length;
	var $tmp = Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.events.Listener.prototype.dispatchEvent = function(event) {
	$s.push("jeash.events.Listener::dispatchEvent");
	var $spos = $s.length;
	this.mListner(event);
	$s.pop();
}
jeash.events.Listener.prototype.__class__ = jeash.events.Listener;
haxe.io.Eof = function(p) {
	$s.push("haxe.io.Eof::new");
	var $spos = $s.length;
	$s.pop();
}
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype.toString = function() {
	$s.push("haxe.io.Eof::toString");
	var $spos = $s.length;
	$s.pop();
	return "Eof";
	$s.pop();
}
haxe.io.Eof.prototype.__class__ = haxe.io.Eof;
jeash.display.StageQuality = function() { }
jeash.display.StageQuality.__name__ = ["jeash","display","StageQuality"];
jeash.display.StageQuality.prototype.__class__ = jeash.display.StageQuality;
jeash.display.JointStyle = { __ename__ : ["jeash","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
jeash.display.JointStyle.MITER = ["MITER",0];
jeash.display.JointStyle.MITER.toString = $estr;
jeash.display.JointStyle.MITER.__enum__ = jeash.display.JointStyle;
jeash.display.JointStyle.ROUND = ["ROUND",1];
jeash.display.JointStyle.ROUND.toString = $estr;
jeash.display.JointStyle.ROUND.__enum__ = jeash.display.JointStyle;
jeash.display.JointStyle.BEVEL = ["BEVEL",2];
jeash.display.JointStyle.BEVEL.toString = $estr;
jeash.display.JointStyle.BEVEL.__enum__ = jeash.display.JointStyle;
jeash.text.FontStyle = { __ename__ : ["jeash","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
jeash.text.FontStyle.REGULAR = ["REGULAR",0];
jeash.text.FontStyle.REGULAR.toString = $estr;
jeash.text.FontStyle.REGULAR.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.ITALIC = ["ITALIC",1];
jeash.text.FontStyle.ITALIC.toString = $estr;
jeash.text.FontStyle.ITALIC.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
jeash.text.FontStyle.BOLD_ITALIC.toString = $estr;
jeash.text.FontStyle.BOLD_ITALIC.__enum__ = jeash.text.FontStyle;
jeash.text.FontStyle.BOLD = ["BOLD",3];
jeash.text.FontStyle.BOLD.toString = $estr;
jeash.text.FontStyle.BOLD.__enum__ = jeash.text.FontStyle;
jeash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if( inRedMultiplier === $_ ) return;
	$s.push("jeash.geom.ColorTransform::new");
	var $spos = $s.length;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
	this.color = 0;
	$s.pop();
}
jeash.geom.ColorTransform.__name__ = ["jeash","geom","ColorTransform"];
jeash.geom.ColorTransform.prototype.alphaMultiplier = null;
jeash.geom.ColorTransform.prototype.alphaOffset = null;
jeash.geom.ColorTransform.prototype.blueMultiplier = null;
jeash.geom.ColorTransform.prototype.blueOffset = null;
jeash.geom.ColorTransform.prototype.color = null;
jeash.geom.ColorTransform.prototype.greenMultiplier = null;
jeash.geom.ColorTransform.prototype.greenOffset = null;
jeash.geom.ColorTransform.prototype.redMultiplier = null;
jeash.geom.ColorTransform.prototype.redOffset = null;
jeash.geom.ColorTransform.prototype.concat = function(second) {
	$s.push("jeash.geom.ColorTransform::concat");
	var $spos = $s.length;
	throw "Not implemented";
	$s.pop();
}
jeash.geom.ColorTransform.prototype.__class__ = jeash.geom.ColorTransform;
jeash.text.TextFormatAlign = { __ename__ : ["jeash","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
jeash.text.TextFormatAlign.LEFT = ["LEFT",0];
jeash.text.TextFormatAlign.LEFT.toString = $estr;
jeash.text.TextFormatAlign.LEFT.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
jeash.text.TextFormatAlign.RIGHT.toString = $estr;
jeash.text.TextFormatAlign.RIGHT.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
jeash.text.TextFormatAlign.JUSTIFY.toString = $estr;
jeash.text.TextFormatAlign.JUSTIFY.__enum__ = jeash.text.TextFormatAlign;
jeash.text.TextFormatAlign.CENTER = ["CENTER",3];
jeash.text.TextFormatAlign.CENTER.toString = $estr;
jeash.text.TextFormatAlign.CENTER.__enum__ = jeash.text.TextFormatAlign;
jeash.display.StageAlign = { __ename__ : ["jeash","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
jeash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
jeash.display.StageAlign.TOP_RIGHT.toString = $estr;
jeash.display.StageAlign.TOP_RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
jeash.display.StageAlign.TOP_LEFT.toString = $estr;
jeash.display.StageAlign.TOP_LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.TOP = ["TOP",2];
jeash.display.StageAlign.TOP.toString = $estr;
jeash.display.StageAlign.TOP.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.RIGHT = ["RIGHT",3];
jeash.display.StageAlign.RIGHT.toString = $estr;
jeash.display.StageAlign.RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.LEFT = ["LEFT",4];
jeash.display.StageAlign.LEFT.toString = $estr;
jeash.display.StageAlign.LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
jeash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
jeash.display.StageAlign.BOTTOM_RIGHT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
jeash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
jeash.display.StageAlign.BOTTOM_LEFT.__enum__ = jeash.display.StageAlign;
jeash.display.StageAlign.BOTTOM = ["BOTTOM",7];
jeash.display.StageAlign.BOTTOM.toString = $estr;
jeash.display.StageAlign.BOTTOM.__enum__ = jeash.display.StageAlign;
jeash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	if( in_font === $_ ) return;
	$s.push("jeash.text.TextFormat::new");
	var $spos = $s.length;
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
	$s.pop();
}
jeash.text.TextFormat.__name__ = ["jeash","text","TextFormat"];
jeash.text.TextFormat.prototype.align = null;
jeash.text.TextFormat.prototype.blockIndent = null;
jeash.text.TextFormat.prototype.bold = null;
jeash.text.TextFormat.prototype.bullet = null;
jeash.text.TextFormat.prototype.color = null;
jeash.text.TextFormat.prototype.display = null;
jeash.text.TextFormat.prototype.font = null;
jeash.text.TextFormat.prototype.indent = null;
jeash.text.TextFormat.prototype.italic = null;
jeash.text.TextFormat.prototype.kerning = null;
jeash.text.TextFormat.prototype.leading = null;
jeash.text.TextFormat.prototype.leftMargin = null;
jeash.text.TextFormat.prototype.letterSpacing = null;
jeash.text.TextFormat.prototype.rightMargin = null;
jeash.text.TextFormat.prototype.size = null;
jeash.text.TextFormat.prototype.tabStops = null;
jeash.text.TextFormat.prototype.target = null;
jeash.text.TextFormat.prototype.underline = null;
jeash.text.TextFormat.prototype.url = null;
jeash.text.TextFormat.prototype.__class__ = jeash.text.TextFormat;
jeash.display.InterpolationMethod = { __ename__ : ["jeash","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
jeash.display.InterpolationMethod.RGB = ["RGB",0];
jeash.display.InterpolationMethod.RGB.toString = $estr;
jeash.display.InterpolationMethod.RGB.__enum__ = jeash.display.InterpolationMethod;
jeash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
jeash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
jeash.display.InterpolationMethod.LINEAR_RGB.__enum__ = jeash.display.InterpolationMethod;
StringBuf = function(p) {
	if( p === $_ ) return;
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = new Array();
	$s.pop();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b[this.b.length] = x == null?"null":x;
	$s.pop();
}
StringBuf.prototype.addSub = function(s,pos,len) {
	$s.push("StringBuf::addSub");
	var $spos = $s.length;
	this.b[this.b.length] = s.substr(pos,len);
	$s.pop();
}
StringBuf.prototype.addChar = function(c) {
	$s.push("StringBuf::addChar");
	var $spos = $s.length;
	this.b[this.b.length] = String.fromCharCode(c);
	$s.pop();
}
StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	var $tmp = this.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.clear = function() {
	$s.push("haxe.Log::clear");
	var $spos = $s.length;
	js.Boot.__clear_trace();
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
Main = function() { }
Main.__name__ = ["Main"];
Main.main = function() {
	$s.push("Main::main");
	var $spos = $s.length;
	haxe.Firebug.redirectTraces();
	jeash.Lib.jeashGetCurrent().GetStage().alpha = 0.5;
	jeash.Lib.jeashGetCurrent().GetStage().addEventListener(jeash.events.Event.RESIZE,Main.onResize);
	$s.pop();
}
Main.onResize = function(e) {
	$s.push("Main::onResize");
	var $spos = $s.length;
	var s = jeash.Lib.jeashGetCurrent().GetStage();
	haxe.Log.trace("RESIZE " + s.jeashGetStageWidth() + ", " + s.jeashGetStageHeight(),{ fileName : "Main.hx", lineNumber : 24, className : "Main", methodName : "onResize"});
	$s.pop();
}
Main.prototype.__class__ = Main;
jeash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey) {
	if( type === $_ ) return;
	$s.push("jeash.events.KeyboardEvent::new");
	var $spos = $s.length;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.charCode = inCharCode == null?0:inCharCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.altKey = inAltKey == null?false:inAltKey;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
	$s.pop();
}
jeash.events.KeyboardEvent.__name__ = ["jeash","events","KeyboardEvent"];
jeash.events.KeyboardEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.KeyboardEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.KeyboardEvent.prototype.keyCode = null;
jeash.events.KeyboardEvent.prototype.charCode = null;
jeash.events.KeyboardEvent.prototype.keyLocation = null;
jeash.events.KeyboardEvent.prototype.ctrlKey = null;
jeash.events.KeyboardEvent.prototype.altKey = null;
jeash.events.KeyboardEvent.prototype.shiftKey = null;
jeash.events.KeyboardEvent.prototype.__class__ = jeash.events.KeyboardEvent;
if(!jeash.filters) jeash.filters = {}
jeash.filters.BitmapFilter = function(inType) {
	if( inType === $_ ) return;
	$s.push("jeash.filters.BitmapFilter::new");
	var $spos = $s.length;
	this.mType = inType;
	$s.pop();
}
jeash.filters.BitmapFilter.__name__ = ["jeash","filters","BitmapFilter"];
jeash.filters.BitmapFilter.prototype.mType = null;
jeash.filters.BitmapFilter.prototype.clone = function() {
	$s.push("jeash.filters.BitmapFilter::clone");
	var $spos = $s.length;
	throw "Implement in subclass. BitmapFilter::clone";
	$s.pop();
	return null;
	$s.pop();
}
jeash.filters.BitmapFilter.prototype.jeashApplyFilter = function(surface) {
	$s.push("jeash.filters.BitmapFilter::jeashApplyFilter");
	var $spos = $s.length;
	$s.pop();
}
jeash.filters.BitmapFilter.prototype.__class__ = jeash.filters.BitmapFilter;
jeash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if( type === $_ ) return;
	$s.push("jeash.events.FocusEvent::new");
	var $spos = $s.length;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
	$s.pop();
}
jeash.events.FocusEvent.__name__ = ["jeash","events","FocusEvent"];
jeash.events.FocusEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.FocusEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.FocusEvent.prototype.keyCode = null;
jeash.events.FocusEvent.prototype.shiftKey = null;
jeash.events.FocusEvent.prototype.relatedObject = null;
jeash.events.FocusEvent.prototype.__class__ = jeash.events.FocusEvent;
jeash.display.Sprite = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.display.Sprite::new");
	var $spos = $s.length;
	jeash.Lib.jeashGetCanvas();
	this.jeashGraphics = new jeash.display.Graphics();
	if(this.jeashGraphics != null) this.jeashGraphics.owner = this;
	jeash.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.name = "Sprite " + jeash.display.DisplayObject.mNameID++;
	this.jeashGraphics.jeashSurface.id = this.name;
	$s.pop();
}
jeash.display.Sprite.__name__ = ["jeash","display","Sprite"];
jeash.display.Sprite.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Sprite.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Sprite.prototype.jeashGraphics = null;
jeash.display.Sprite.prototype.graphics = null;
jeash.display.Sprite.prototype.useHandCursor = null;
jeash.display.Sprite.prototype.buttonMode = null;
jeash.display.Sprite.prototype.jeashCursorCallbackOver = null;
jeash.display.Sprite.prototype.jeashCursorCallbackOut = null;
jeash.display.Sprite.prototype.startDrag = function(lockCenter,bounds) {
	$s.push("jeash.display.Sprite::startDrag");
	var $spos = $s.length;
	if(this.GetStage() != null) this.GetStage().jeashStartDrag(this,lockCenter,bounds);
	$s.pop();
}
jeash.display.Sprite.prototype.stopDrag = function() {
	$s.push("jeash.display.Sprite::stopDrag");
	var $spos = $s.length;
	if(this.GetStage() != null) this.GetStage().jeashStopDrag(this);
	$s.pop();
}
jeash.display.Sprite.prototype.jeashGetGraphics = function() {
	$s.push("jeash.display.Sprite::jeashGetGraphics");
	var $spos = $s.length;
	var $tmp = this.jeashGraphics;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Sprite.prototype.jeashSetUseHandCursor = function(cursor) {
	$s.push("jeash.display.Sprite::jeashSetUseHandCursor");
	var $spos = $s.length;
	if(cursor == this.useHandCursor) {
		$s.pop();
		return cursor;
	}
	if(this.jeashCursorCallbackOver != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
	if(this.jeashCursorCallbackOut != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
	if(!cursor) if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","default",""); else {
		this.jeashCursorCallbackOver = function(_) {
			$s.push("jeash.display.Sprite::jeashSetUseHandCursor@89");
			var $spos = $s.length;
			if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer","");
			$s.pop();
		};
		this.jeashCursorCallbackOut = function(_) {
			$s.push("jeash.display.Sprite::jeashSetUseHandCursor@90");
			var $spos = $s.length;
			if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
			$s.pop();
		};
		this.addEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
		this.addEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
	}
	this.useHandCursor = cursor;
	$s.pop();
	return cursor;
	$s.pop();
}
jeash.display.Sprite.prototype.__class__ = jeash.display.Sprite;
jeash.display.MovieClip = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.display.MovieClip::new");
	var $spos = $s.length;
	jeash.display.Sprite.call(this);
	this.enabled = true;
	this.mCurrentFrame = 0;
	this.mTotalFrames = 0;
	this.name = "MovieClip " + jeash.display.DisplayObject.mNameID++;
	$s.pop();
}
jeash.display.MovieClip.__name__ = ["jeash","display","MovieClip"];
jeash.display.MovieClip.__super__ = jeash.display.Sprite;
for(var k in jeash.display.Sprite.prototype ) jeash.display.MovieClip.prototype[k] = jeash.display.Sprite.prototype[k];
jeash.display.MovieClip.prototype.enabled = null;
jeash.display.MovieClip.prototype.currentFrame = null;
jeash.display.MovieClip.prototype.framesLoaded = null;
jeash.display.MovieClip.prototype.totalFrames = null;
jeash.display.MovieClip.prototype.mCurrentFrame = null;
jeash.display.MovieClip.prototype.mTotalFrames = null;
jeash.display.MovieClip.prototype.GetTotalFrames = function() {
	$s.push("jeash.display.MovieClip::GetTotalFrames");
	var $spos = $s.length;
	var $tmp = this.mTotalFrames;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.MovieClip.prototype.GetCurrentFrame = function() {
	$s.push("jeash.display.MovieClip::GetCurrentFrame");
	var $spos = $s.length;
	var $tmp = this.mCurrentFrame;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.MovieClip.prototype.gotoAndPlay = function(frame,scene) {
	$s.push("jeash.display.MovieClip::gotoAndPlay");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.MovieClip.prototype.gotoAndStop = function(frame,scene) {
	$s.push("jeash.display.MovieClip::gotoAndStop");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.MovieClip.prototype.play = function() {
	$s.push("jeash.display.MovieClip::play");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.MovieClip.prototype.stop = function() {
	$s.push("jeash.display.MovieClip::stop");
	var $spos = $s.length;
	$s.pop();
}
jeash.display.MovieClip.prototype.__class__ = jeash.display.MovieClip;
if(!jeash.ui) jeash.ui = {}
jeash.ui.Keyboard = function() { }
jeash.ui.Keyboard.__name__ = ["jeash","ui","Keyboard"];
jeash.ui.Keyboard.jeashConvertWebkitCode = function(code) {
	$s.push("jeash.ui.Keyboard::jeashConvertWebkitCode");
	var $spos = $s.length;
	switch(code.toLowerCase()) {
	case "backspace":
		var $tmp = jeash.ui.Keyboard.BACKSPACE;
		$s.pop();
		return $tmp;
	case "tab":
		var $tmp = jeash.ui.Keyboard.TAB;
		$s.pop();
		return $tmp;
	case "enter":
		var $tmp = jeash.ui.Keyboard.ENTER;
		$s.pop();
		return $tmp;
	case "shift":
		var $tmp = jeash.ui.Keyboard.SHIFT;
		$s.pop();
		return $tmp;
	case "control":
		var $tmp = jeash.ui.Keyboard.CONTROL;
		$s.pop();
		return $tmp;
	case "capslock":
		var $tmp = jeash.ui.Keyboard.CAPS_LOCK;
		$s.pop();
		return $tmp;
	case "escape":
		var $tmp = jeash.ui.Keyboard.ESCAPE;
		$s.pop();
		return $tmp;
	case "space":
		var $tmp = jeash.ui.Keyboard.SPACE;
		$s.pop();
		return $tmp;
	case "pageup":
		var $tmp = jeash.ui.Keyboard.PAGE_UP;
		$s.pop();
		return $tmp;
	case "pagedown":
		var $tmp = jeash.ui.Keyboard.PAGE_DOWN;
		$s.pop();
		return $tmp;
	case "end":
		var $tmp = jeash.ui.Keyboard.END;
		$s.pop();
		return $tmp;
	case "home":
		var $tmp = jeash.ui.Keyboard.HOME;
		$s.pop();
		return $tmp;
	case "left":
		var $tmp = jeash.ui.Keyboard.LEFT;
		$s.pop();
		return $tmp;
	case "right":
		var $tmp = jeash.ui.Keyboard.RIGHT;
		$s.pop();
		return $tmp;
	case "up":
		var $tmp = jeash.ui.Keyboard.UP;
		$s.pop();
		return $tmp;
	case "down":
		var $tmp = jeash.ui.Keyboard.DOWN;
		$s.pop();
		return $tmp;
	case "insert":
		var $tmp = jeash.ui.Keyboard.INSERT;
		$s.pop();
		return $tmp;
	case "delete":
		var $tmp = jeash.ui.Keyboard.DELETE;
		$s.pop();
		return $tmp;
	case "numlock":
		var $tmp = jeash.ui.Keyboard.NUMLOCK;
		$s.pop();
		return $tmp;
	case "break":
		var $tmp = jeash.ui.Keyboard.BREAK;
		$s.pop();
		return $tmp;
	}
	if(code.indexOf("U+") == 0) {
		var $tmp = Std.parseInt(code.substr(3));
		$s.pop();
		return $tmp;
	}
	throw "Unrecognised key code: " + code;
	$s.pop();
	return 0;
	$s.pop();
}
jeash.ui.Keyboard.jeashConvertMozillaCode = function(code) {
	$s.push("jeash.ui.Keyboard::jeashConvertMozillaCode");
	var $spos = $s.length;
	switch(code) {
	case jeash.ui.Keyboard.DOM_VK_BACK_SPACE:
		var $tmp = jeash.ui.Keyboard.BACKSPACE;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_TAB:
		var $tmp = jeash.ui.Keyboard.TAB;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_RETURN:
		var $tmp = jeash.ui.Keyboard.ENTER;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_ENTER:
		var $tmp = jeash.ui.Keyboard.ENTER;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_SHIFT:
		var $tmp = jeash.ui.Keyboard.SHIFT;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_CONTROL:
		var $tmp = jeash.ui.Keyboard.CONTROL;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_CAPS_LOCK:
		var $tmp = jeash.ui.Keyboard.CAPS_LOCK;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_ESCAPE:
		var $tmp = jeash.ui.Keyboard.ESCAPE;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_SPACE:
		var $tmp = jeash.ui.Keyboard.SPACE;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_PAGE_UP:
		var $tmp = jeash.ui.Keyboard.PAGE_UP;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_PAGE_DOWN:
		var $tmp = jeash.ui.Keyboard.PAGE_DOWN;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_END:
		var $tmp = jeash.ui.Keyboard.END;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_HOME:
		var $tmp = jeash.ui.Keyboard.HOME;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_LEFT:
		var $tmp = jeash.ui.Keyboard.LEFT;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_RIGHT:
		var $tmp = jeash.ui.Keyboard.RIGHT;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_UP:
		var $tmp = jeash.ui.Keyboard.UP;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_DOWN:
		var $tmp = jeash.ui.Keyboard.DOWN;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_INSERT:
		var $tmp = jeash.ui.Keyboard.INSERT;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_DELETE:
		var $tmp = jeash.ui.Keyboard.DELETE;
		$s.pop();
		return $tmp;
	case jeash.ui.Keyboard.DOM_VK_NUM_LOCK:
		var $tmp = jeash.ui.Keyboard.NUMLOCK;
		$s.pop();
		return $tmp;
	default:
		$s.pop();
		return code;
	}
	$s.pop();
}
jeash.ui.Keyboard.capsLock = null;
jeash.ui.Keyboard.numLock = null;
jeash.ui.Keyboard.isAccessible = function() {
	$s.push("jeash.ui.Keyboard::isAccessible");
	var $spos = $s.length;
	$s.pop();
	return false;
	$s.pop();
}
jeash.ui.Keyboard.prototype.__class__ = jeash.ui.Keyboard;
Selection = function() { }
Selection.__name__ = ["Selection"];
Selection.prototype.anchorNode = null;
Selection.prototype.anchorOffset = null;
Selection.prototype.focusNode = null;
Selection.prototype.focusOffset = null;
Selection.prototype.isCollapsed = null;
Selection.prototype.rangeCount = null;
Selection.prototype.collapse = null;
Selection.prototype.collapseToStart = null;
Selection.prototype.collapseToEnd = null;
Selection.prototype.selectAllChildren = null;
Selection.prototype.deleteFromDocument = null;
Selection.prototype.getRangeAt = null;
Selection.prototype.addRange = null;
Selection.prototype.removeRange = null;
Selection.prototype.removeAllRanges = null;
Selection.prototype.stringifier = null;
Selection.prototype.__class__ = Selection;
MessagePortArray = function() { }
MessagePortArray.__name__ = ["MessagePortArray"];
MessagePortArray.prototype.__class__ = MessagePortArray;
MessagePort = function() { }
MessagePort.__name__ = ["MessagePort"];
MessagePort.prototype.postMessage = null;
MessagePort.prototype.start = null;
MessagePort.prototype.close = null;
MessagePort.prototype.onmessage = null;
MessagePort.prototype.__class__ = MessagePort;
if(!haxe.xml) haxe.xml = {}
haxe.xml.Filter = { __ename__ : ["haxe","xml","Filter"], __constructs__ : ["FInt","FBool","FEnum","FReg"] }
haxe.xml.Filter.FInt = ["FInt",0];
haxe.xml.Filter.FInt.toString = $estr;
haxe.xml.Filter.FInt.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FBool = ["FBool",1];
haxe.xml.Filter.FBool.toString = $estr;
haxe.xml.Filter.FBool.__enum__ = haxe.xml.Filter;
haxe.xml.Filter.FEnum = function(values) { var $x = ["FEnum",2,values]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Filter.FReg = function(matcher) { var $x = ["FReg",3,matcher]; $x.__enum__ = haxe.xml.Filter; $x.toString = $estr; return $x; }
haxe.xml.Attrib = { __ename__ : ["haxe","xml","Attrib"], __constructs__ : ["Att"] }
haxe.xml.Attrib.Att = function(name,filter,defvalue) { var $x = ["Att",0,name,filter,defvalue]; $x.__enum__ = haxe.xml.Attrib; $x.toString = $estr; return $x; }
haxe.xml.Rule = { __ename__ : ["haxe","xml","Rule"], __constructs__ : ["RNode","RData","RMulti","RList","RChoice","ROptional"] }
haxe.xml.Rule.RNode = function(name,attribs,childs) { var $x = ["RNode",0,name,attribs,childs]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RData = function(filter) { var $x = ["RData",1,filter]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RMulti = function(rule,atLeastOne) { var $x = ["RMulti",2,rule,atLeastOne]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RList = function(rules,ordered) { var $x = ["RList",3,rules,ordered]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.RChoice = function(choices) { var $x = ["RChoice",4,choices]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
haxe.xml.Rule.ROptional = function(rule) { var $x = ["ROptional",5,rule]; $x.__enum__ = haxe.xml.Rule; $x.toString = $estr; return $x; }
if(!haxe.xml._Check) haxe.xml._Check = {}
haxe.xml._Check.CheckResult = { __ename__ : ["haxe","xml","_Check","CheckResult"], __constructs__ : ["CMatch","CMissing","CExtra","CElementExpected","CDataExpected","CExtraAttrib","CMissingAttrib","CInvalidAttrib","CInvalidData","CInElement"] }
haxe.xml._Check.CheckResult.CMatch = ["CMatch",0];
haxe.xml._Check.CheckResult.CMatch.toString = $estr;
haxe.xml._Check.CheckResult.CMatch.__enum__ = haxe.xml._Check.CheckResult;
haxe.xml._Check.CheckResult.CMissing = function(r) { var $x = ["CMissing",1,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtra = function(x) { var $x = ["CExtra",2,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CElementExpected = function(name,x) { var $x = ["CElementExpected",3,name,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CDataExpected = function(x) { var $x = ["CDataExpected",4,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CExtraAttrib = function(att,x) { var $x = ["CExtraAttrib",5,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CMissingAttrib = function(att,x) { var $x = ["CMissingAttrib",6,att,x]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidAttrib = function(att,x,f) { var $x = ["CInvalidAttrib",7,att,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInvalidData = function(x,f) { var $x = ["CInvalidData",8,x,f]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
haxe.xml._Check.CheckResult.CInElement = function(x,r) { var $x = ["CInElement",9,x,r]; $x.__enum__ = haxe.xml._Check.CheckResult; $x.toString = $estr; return $x; }
EReg = function(r,opt) {
	if( r === $_ ) return;
	$s.push("EReg::new");
	var $spos = $s.length;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
	$s.pop();
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	$s.push("EReg::match");
	var $spos = $s.length;
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	var $tmp = this.r.m != null;
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.matched = function(n) {
	$s.push("EReg::matched");
	var $spos = $s.length;
	var $tmp = this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.matchedLeft = function() {
	$s.push("EReg::matchedLeft");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) {
		var $tmp = this.r.s.substr(0,this.r.m.index);
		$s.pop();
		return $tmp;
	}
	var $tmp = this.r.l;
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.matchedRight = function() {
	$s.push("EReg::matchedRight");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		var $tmp = this.r.s.substr(sz,this.r.s.length - sz);
		$s.pop();
		return $tmp;
	}
	var $tmp = this.r.r;
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.matchedPos = function() {
	$s.push("EReg::matchedPos");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	var $tmp = { pos : this.r.m.index, len : this.r.m[0].length};
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.split = function(s) {
	$s.push("EReg::split");
	var $spos = $s.length;
	var d = "#__delim__#";
	var $tmp = s.replace(this.r,d).split(d);
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.replace = function(s,by) {
	$s.push("EReg::replace");
	var $spos = $s.length;
	var $tmp = s.replace(this.r,by);
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.customReplace = function(s,f) {
	$s.push("EReg::customReplace");
	var $spos = $s.length;
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.add(this.matchedLeft());
		buf.add(f(this));
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s == null?"null":s;
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
EReg.prototype.__class__ = EReg;
haxe.xml.Check = function() { }
haxe.xml.Check.__name__ = ["haxe","xml","Check"];
haxe.xml.Check.isBlank = function(x) {
	$s.push("haxe.xml.Check::isBlank");
	var $spos = $s.length;
	var $tmp = x.nodeType == Xml.PCData && haxe.xml.Check.blanks.match(x.getNodeValue()) || x.nodeType == Xml.Comment;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.xml.Check.filterMatch = function(s,f) {
	$s.push("haxe.xml.Check::filterMatch");
	var $spos = $s.length;
	var $e = (f);
	switch( $e[1] ) {
	case 0:
		var $tmp = haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FReg(new EReg("[0-9]+","")));
		$s.pop();
		return $tmp;
	case 1:
		var $tmp = haxe.xml.Check.filterMatch(s,haxe.xml.Filter.FEnum(["true","false","0","1"]));
		$s.pop();
		return $tmp;
	case 2:
		var values = $e[2];
		var _g = 0;
		while(_g < values.length) {
			var v = values[_g];
			++_g;
			if(s == v) {
				$s.pop();
				return true;
			}
		}
		$s.pop();
		return false;
	case 3:
		var r = $e[2];
		var $tmp = r.match(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml.Check.isNullable = function(r) {
	$s.push("haxe.xml.Check::isNullable");
	var $spos = $s.length;
	var $e = (r);
	switch( $e[1] ) {
	case 2:
		var one = $e[3], r1 = $e[2];
		var $tmp = one != true || haxe.xml.Check.isNullable(r1);
		$s.pop();
		return $tmp;
	case 3:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) {
				$s.pop();
				return false;
			}
		}
		$s.pop();
		return true;
	case 4:
		var rl = $e[2];
		var _g = 0;
		while(_g < rl.length) {
			var r1 = rl[_g];
			++_g;
			if(haxe.xml.Check.isNullable(r1)) {
				$s.pop();
				return true;
			}
		}
		$s.pop();
		return false;
	case 1:
		$s.pop();
		return false;
	case 0:
		$s.pop();
		return false;
	case 5:
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.xml.Check.check = function(x,r) {
	$s.push("haxe.xml.Check::check");
	var $spos = $s.length;
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var childs = $e[4], attribs = $e[3], name = $e[2];
		if(x.nodeType != Xml.Element || x.getNodeName() != name) {
			var $tmp = haxe.xml._Check.CheckResult.CElementExpected(name,x);
			$s.pop();
			return $tmp;
		}
		var attribs1 = attribs == null?new Array():attribs.copy();
		var $it0 = x.attributes();
		while( $it0.hasNext() ) {
			var xatt = $it0.next();
			var found = false;
			var _g = 0;
			while(_g < attribs1.length) {
				var att = attribs1[_g];
				++_g;
				var $e = (att);
				switch( $e[1] ) {
				case 0:
					var defvalue = $e[4], filter = $e[3], name1 = $e[2];
					if(xatt != name1) continue;
					if(filter != null && !haxe.xml.Check.filterMatch(x.get(xatt),filter)) {
						var $tmp = haxe.xml._Check.CheckResult.CInvalidAttrib(name1,x,filter);
						$s.pop();
						return $tmp;
					}
					attribs1.remove(att);
					found = true;
					break;
				}
			}
			if(!found) {
				var $tmp = haxe.xml._Check.CheckResult.CExtraAttrib(xatt,x);
				$s.pop();
				return $tmp;
			}
		}
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				if(defvalue == null) {
					var $tmp = haxe.xml._Check.CheckResult.CMissingAttrib(name1,x);
					$s.pop();
					return $tmp;
				}
				break;
			}
		}
		if(childs == null) childs = haxe.xml.Rule.RList([]);
		var m = haxe.xml.Check.checkList(x.iterator(),childs);
		if(m != haxe.xml._Check.CheckResult.CMatch) {
			var $tmp = haxe.xml._Check.CheckResult.CInElement(x,m);
			$s.pop();
			return $tmp;
		}
		var _g = 0;
		while(_g < attribs1.length) {
			var att = attribs1[_g];
			++_g;
			var $e = (att);
			switch( $e[1] ) {
			case 0:
				var defvalue = $e[4], name1 = $e[2];
				x.set(name1,defvalue);
				break;
			}
		}
		var $tmp = haxe.xml._Check.CheckResult.CMatch;
		$s.pop();
		return $tmp;
	case 1:
		var filter = $e[2];
		if(x.nodeType != Xml.PCData && x.nodeType != Xml.CData) {
			var $tmp = haxe.xml._Check.CheckResult.CDataExpected(x);
			$s.pop();
			return $tmp;
		}
		if(filter != null && !haxe.xml.Check.filterMatch(x.getNodeValue(),filter)) {
			var $tmp = haxe.xml._Check.CheckResult.CInvalidData(x,filter);
			$s.pop();
			return $tmp;
		}
		var $tmp = haxe.xml._Check.CheckResult.CMatch;
		$s.pop();
		return $tmp;
	case 4:
		var choices = $e[2];
		if(choices.length == 0) throw "No choice possible";
		var _g = 0;
		while(_g < choices.length) {
			var c = choices[_g];
			++_g;
			if(haxe.xml.Check.check(x,c) == haxe.xml._Check.CheckResult.CMatch) {
				var $tmp = haxe.xml._Check.CheckResult.CMatch;
				$s.pop();
				return $tmp;
			}
		}
		var $tmp = haxe.xml.Check.check(x,choices[0]);
		$s.pop();
		return $tmp;
	case 5:
		var r1 = $e[2];
		var $tmp = haxe.xml.Check.check(x,r1);
		$s.pop();
		return $tmp;
	default:
		throw "Unexpected " + Std.string(r);
	}
	$s.pop();
}
haxe.xml.Check.checkList = function(it,r) {
	$s.push("haxe.xml.Check::checkList");
	var $spos = $s.length;
	var $e = (r);
	switch( $e[1] ) {
	case 3:
		var ordered = $e[3], rules = $e[2];
		var rules1 = rules.copy();
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var found = false;
			var _g = 0;
			while(_g < rules1.length) {
				var r1 = rules1[_g];
				++_g;
				var m = haxe.xml.Check.checkList([x].iterator(),r1);
				if(m == haxe.xml._Check.CheckResult.CMatch) {
					found = true;
					var $e = (r1);
					switch( $e[1] ) {
					case 2:
						var one = $e[3], rsub = $e[2];
						if(one) {
							var i;
							var _g2 = 0, _g1 = rules1.length;
							while(_g2 < _g1) {
								var i1 = _g2++;
								if(rules1[i1] == r1) rules1[i1] = haxe.xml.Rule.RMulti(rsub);
							}
						}
						break;
					default:
						rules1.remove(r1);
					}
					break;
				} else if(ordered && !haxe.xml.Check.isNullable(r1)) {
					$s.pop();
					return m;
				}
			}
			if(!found) {
				var $tmp = haxe.xml._Check.CheckResult.CExtra(x);
				$s.pop();
				return $tmp;
			}
		}
		var _g = 0;
		while(_g < rules1.length) {
			var r1 = rules1[_g];
			++_g;
			if(!haxe.xml.Check.isNullable(r1)) {
				var $tmp = haxe.xml._Check.CheckResult.CMissing(r1);
				$s.pop();
				return $tmp;
			}
		}
		var $tmp = haxe.xml._Check.CheckResult.CMatch;
		$s.pop();
		return $tmp;
	case 2:
		var one = $e[3], r1 = $e[2];
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.checkList([x].iterator(),r1);
			if(m != haxe.xml._Check.CheckResult.CMatch) {
				$s.pop();
				return m;
			}
			found = true;
		}
		if(one && !found) {
			var $tmp = haxe.xml._Check.CheckResult.CMissing(r1);
			$s.pop();
			return $tmp;
		}
		var $tmp = haxe.xml._Check.CheckResult.CMatch;
		$s.pop();
		return $tmp;
	default:
		var found = false;
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var m = haxe.xml.Check.check(x,r);
			if(m != haxe.xml._Check.CheckResult.CMatch) {
				$s.pop();
				return m;
			}
			found = true;
			break;
		}
		if(!found) {
			switch( (r)[1] ) {
			case 5:
				break;
			default:
				var $tmp = haxe.xml._Check.CheckResult.CMissing(r);
				$s.pop();
				return $tmp;
			}
		}
		while( it.hasNext() ) {
			var x = it.next();
			if(haxe.xml.Check.isBlank(x)) continue;
			var $tmp = haxe.xml._Check.CheckResult.CExtra(x);
			$s.pop();
			return $tmp;
		}
		var $tmp = haxe.xml._Check.CheckResult.CMatch;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml.Check.makeWhere = function(path) {
	$s.push("haxe.xml.Check::makeWhere");
	var $spos = $s.length;
	if(path.length == 0) {
		$s.pop();
		return "";
	}
	var s = "In ";
	var first = true;
	var _g = 0;
	while(_g < path.length) {
		var x = path[_g];
		++_g;
		if(first) first = false; else s += ".";
		s += x.getNodeName();
	}
	var $tmp = s + ": ";
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.xml.Check.makeString = function(x) {
	$s.push("haxe.xml.Check::makeString");
	var $spos = $s.length;
	if(x.nodeType == Xml.Element) {
		var $tmp = "element " + x.getNodeName();
		$s.pop();
		return $tmp;
	}
	var s = x.getNodeValue().split("\r").join("\\r").split("\n").join("\\n").split("\t").join("\\t");
	if(s.length > 20) {
		var $tmp = s.substr(0,17) + "...";
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return s;
	$s.pop();
}
haxe.xml.Check.makeRule = function(r) {
	$s.push("haxe.xml.Check::makeRule");
	var $spos = $s.length;
	var $e = (r);
	switch( $e[1] ) {
	case 0:
		var name = $e[2];
		var $tmp = "element " + name;
		$s.pop();
		return $tmp;
	case 1:
		$s.pop();
		return "data";
	case 2:
		var r1 = $e[2];
		var $tmp = haxe.xml.Check.makeRule(r1);
		$s.pop();
		return $tmp;
	case 3:
		var rules = $e[2];
		var $tmp = haxe.xml.Check.makeRule(rules[0]);
		$s.pop();
		return $tmp;
	case 4:
		var choices = $e[2];
		var $tmp = haxe.xml.Check.makeRule(choices[0]);
		$s.pop();
		return $tmp;
	case 5:
		var r1 = $e[2];
		var $tmp = haxe.xml.Check.makeRule(r1);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml.Check.makeError = function(m,path) {
	$s.push("haxe.xml.Check::makeError");
	var $spos = $s.length;
	if(path == null) path = new Array();
	var $e = (m);
	switch( $e[1] ) {
	case 0:
		throw "assert";
		break;
	case 1:
		var r = $e[2];
		var $tmp = haxe.xml.Check.makeWhere(path) + "Missing " + haxe.xml.Check.makeRule(r);
		$s.pop();
		return $tmp;
	case 2:
		var x = $e[2];
		var $tmp = haxe.xml.Check.makeWhere(path) + "Unexpected " + haxe.xml.Check.makeString(x);
		$s.pop();
		return $tmp;
	case 3:
		var x = $e[3], name = $e[2];
		var $tmp = haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while expected element " + name;
		$s.pop();
		return $tmp;
	case 4:
		var x = $e[2];
		var $tmp = haxe.xml.Check.makeWhere(path) + haxe.xml.Check.makeString(x) + " while data expected";
		$s.pop();
		return $tmp;
	case 5:
		var x = $e[3], att = $e[2];
		path.push(x);
		var $tmp = haxe.xml.Check.makeWhere(path) + "unexpected attribute " + att;
		$s.pop();
		return $tmp;
	case 6:
		var x = $e[3], att = $e[2];
		path.push(x);
		var $tmp = haxe.xml.Check.makeWhere(path) + "missing required attribute " + att;
		$s.pop();
		return $tmp;
	case 7:
		var f = $e[4], x = $e[3], att = $e[2];
		path.push(x);
		var $tmp = haxe.xml.Check.makeWhere(path) + "invalid attribute value for " + att;
		$s.pop();
		return $tmp;
	case 8:
		var f = $e[3], x = $e[2];
		var $tmp = haxe.xml.Check.makeWhere(path) + "invalid data format for " + haxe.xml.Check.makeString(x);
		$s.pop();
		return $tmp;
	case 9:
		var m1 = $e[3], x = $e[2];
		path.push(x);
		var $tmp = haxe.xml.Check.makeError(m1,path);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml.Check.checkNode = function(x,r) {
	$s.push("haxe.xml.Check::checkNode");
	var $spos = $s.length;
	var m = haxe.xml.Check.checkList([x].iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) {
		$s.pop();
		return;
	}
	throw haxe.xml.Check.makeError(m);
	$s.pop();
}
haxe.xml.Check.checkDocument = function(x,r) {
	$s.push("haxe.xml.Check::checkDocument");
	var $spos = $s.length;
	if(x.nodeType != Xml.Document) throw "Document expected";
	var m = haxe.xml.Check.checkList(x.iterator(),r);
	if(m == haxe.xml._Check.CheckResult.CMatch) {
		$s.pop();
		return;
	}
	throw haxe.xml.Check.makeError(m);
	$s.pop();
}
haxe.xml.Check.prototype.__class__ = haxe.xml.Check;
jeash.display.CapsStyle = { __ename__ : ["jeash","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
jeash.display.CapsStyle.NONE = ["NONE",0];
jeash.display.CapsStyle.NONE.toString = $estr;
jeash.display.CapsStyle.NONE.__enum__ = jeash.display.CapsStyle;
jeash.display.CapsStyle.ROUND = ["ROUND",1];
jeash.display.CapsStyle.ROUND.toString = $estr;
jeash.display.CapsStyle.ROUND.__enum__ = jeash.display.CapsStyle;
jeash.display.CapsStyle.SQUARE = ["SQUARE",2];
jeash.display.CapsStyle.SQUARE.toString = $estr;
jeash.display.CapsStyle.SQUARE.__enum__ = jeash.display.CapsStyle;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	var $tmp = js.Boot.__instanceof(v,t);
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	var $tmp = js.Boot.__string_rec(s,"");
	$s.pop();
	return $tmp;
	$s.pop();
}
Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	var $tmp = Math.floor(x);
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) {
		$s.pop();
		return null;
	}
	var $tmp = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	var $tmp = parseFloat(x);
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	var $tmp = Math.floor(Math.random() * x);
	$s.pop();
	return $tmp;
	$s.pop();
}
Std.prototype.__class__ = Std;
jeash.display.GraphicsDataType = { __ename__ : ["jeash","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
jeash.display.GraphicsDataType.STROKE = ["STROKE",0];
jeash.display.GraphicsDataType.STROKE.toString = $estr;
jeash.display.GraphicsDataType.STROKE.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.SOLID = ["SOLID",1];
jeash.display.GraphicsDataType.SOLID.toString = $estr;
jeash.display.GraphicsDataType.SOLID.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
jeash.display.GraphicsDataType.GRADIENT.toString = $estr;
jeash.display.GraphicsDataType.GRADIENT.__enum__ = jeash.display.GraphicsDataType;
jeash.display.GraphicsDataType.PATH = ["PATH",3];
jeash.display.GraphicsDataType.PATH.toString = $estr;
jeash.display.GraphicsDataType.PATH.__enum__ = jeash.display.GraphicsDataType;
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	$s.push("haxe.Timer::new");
	var $spos = $s.length;
	var arr = haxe_timers;
	this.id = arr.length;
	arr[this.id] = this;
	this.timerId = window.setInterval("haxe_timers[" + this.id + "].run();",time_ms);
	$s.pop();
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	$s.push("haxe.Timer::delay");
	var $spos = $s.length;
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		$s.push("haxe.Timer::delay@79");
		var $spos = $s.length;
		t.stop();
		f();
		$s.pop();
	};
	$s.pop();
	return t;
	$s.pop();
}
haxe.Timer.measure = function(f,pos) {
	$s.push("haxe.Timer::measure");
	var $spos = $s.length;
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	$s.pop();
	return r;
	$s.pop();
}
haxe.Timer.stamp = function() {
	$s.push("haxe.Timer::stamp");
	var $spos = $s.length;
	var $tmp = Date.now().getTime() / 1000;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	$s.push("haxe.Timer::stop");
	var $spos = $s.length;
	if(this.id == null) {
		$s.pop();
		return;
	}
	window.clearInterval(this.timerId);
	var arr = haxe_timers;
	arr[this.id] = null;
	if(this.id > 100 && this.id == arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && arr[p] == null) p--;
		arr = arr.slice(0,p + 1);
	}
	this.id = null;
	$s.pop();
}
haxe.Timer.prototype.run = function() {
	$s.push("haxe.Timer::run");
	var $spos = $s.length;
	$s.pop();
}
haxe.Timer.prototype.__class__ = haxe.Timer;
jeash.geom.Transform = function(inParent) {
	if( inParent === $_ ) return;
	$s.push("jeash.geom.Transform::new");
	var $spos = $s.length;
	this.mObj = inParent;
	$s.pop();
}
jeash.geom.Transform.__name__ = ["jeash","geom","Transform"];
jeash.geom.Transform.prototype.colorTransform = null;
jeash.geom.Transform.prototype.matrix = null;
jeash.geom.Transform.prototype.pixelBounds = null;
jeash.geom.Transform.prototype.mObj = null;
jeash.geom.Transform.prototype.GetMatrix = function() {
	$s.push("jeash.geom.Transform::GetMatrix");
	var $spos = $s.length;
	var $tmp = this.mObj.GetMatrix();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Transform.prototype.SetMatrix = function(inMatrix) {
	$s.push("jeash.geom.Transform::SetMatrix");
	var $spos = $s.length;
	var $tmp = this.mObj.SetMatrix(inMatrix);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Transform.prototype.GetPixelBounds = function() {
	$s.push("jeash.geom.Transform::GetPixelBounds");
	var $spos = $s.length;
	var $tmp = this.mObj.getBounds(jeash.Lib.jeashGetStage());
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Transform.prototype.GetColorTransform = function() {
	$s.push("jeash.geom.Transform::GetColorTransform");
	var $spos = $s.length;
	var $tmp = new jeash.geom.ColorTransform();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.geom.Transform.prototype.SetColorTransform = function(inColorTransform) {
	$s.push("jeash.geom.Transform::SetColorTransform");
	var $spos = $s.length;
	$s.pop();
	return inColorTransform;
	$s.pop();
}
jeash.geom.Transform.prototype.__class__ = jeash.geom.Transform;
jeash.text.TextFieldAutoSize = function(p) {
	$s.push("jeash.text.TextFieldAutoSize::new");
	var $spos = $s.length;
	$s.pop();
}
jeash.text.TextFieldAutoSize.__name__ = ["jeash","text","TextFieldAutoSize"];
jeash.text.TextFieldAutoSize.prototype.__class__ = jeash.text.TextFieldAutoSize;
jeash.display.GradientType = { __ename__ : ["jeash","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
jeash.display.GradientType.RADIAL = ["RADIAL",0];
jeash.display.GradientType.RADIAL.toString = $estr;
jeash.display.GradientType.RADIAL.__enum__ = jeash.display.GradientType;
jeash.display.GradientType.LINEAR = ["LINEAR",1];
jeash.display.GradientType.LINEAR.toString = $estr;
jeash.display.GradientType.LINEAR.__enum__ = jeash.display.GradientType;
jeash.Lib = function(title,width,height) {
	if( title === $_ ) return;
	$s.push("jeash.Lib::new");
	var $spos = $s.length;
	this.mKilled = false;
	this.mRequestedWidth = width;
	this.mRequestedHeight = height;
	this.mResizePending = false;
	this.__scr = js.Lib.document.getElementById(title);
	if(this.__scr == null) throw "Element with id '" + title + "' not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	this.__scr.appendChild(jeash.Lib.jeashGetCanvas());
	$s.pop();
}
jeash.Lib.__name__ = ["jeash","Lib"];
jeash.Lib.mMe = null;
jeash.Lib.context = null;
jeash.Lib.current = null;
jeash.Lib.glContext = null;
jeash.Lib.canvas = null;
jeash.Lib.mStage = null;
jeash.Lib.mMainClassRoot = null;
jeash.Lib.mCurrent = null;
jeash.Lib.mRolling = null;
jeash.Lib.mDownObj = null;
jeash.Lib.mMouseX = null;
jeash.Lib.mMouseY = null;
jeash.Lib.trace = function(arg) {
	$s.push("jeash.Lib::trace");
	var $spos = $s.length;
	if(window.console != null) window.console.log(arg); else if(jeash.Lib.mMe.jeashTraceTextField != null) {
		var _g = jeash.Lib.mMe.jeashTraceTextField;
		_g.SetText(_g.GetText() + (arg + "\n"));
	}
	$s.pop();
}
jeash.Lib.getURL = function(request,target) {
	$s.push("jeash.Lib::getURL");
	var $spos = $s.length;
	var document = js.Lib.document;
	var window = js.Lib.window;
	if(target == null || target == "_self") document.open(request.url); else switch(target) {
	case "_blank":
		window.open(request.url);
		break;
	case "_parent":
		window.parent.open(request.url);
		break;
	case "_top":
		window.top.open(request.url);
		break;
	}
	$s.pop();
}
jeash.Lib.jeashGetCanvas = function() {
	$s.push("jeash.Lib::jeashGetCanvas");
	var $spos = $s.length;
	if(jeash.Lib.canvas == null) {
		if(document == null) throw "Document not loaded yet, cannot create root canvas!";
		jeash.Lib.canvas = document.createElement("canvas");
		jeash.Lib.canvas.id = "Root Surface";
		jeash.Lib.context = "2d";
		jeash.Lib.jeashBootstrap();
		jeash.Lib.starttime = haxe.Timer.stamp();
	}
	var $tmp = jeash.Lib.canvas;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.jeashGetCurrent = function() {
	$s.push("jeash.Lib::jeashGetCurrent");
	var $spos = $s.length;
	jeash.Lib.jeashGetCanvas();
	if(jeash.Lib.mMainClassRoot == null) {
		jeash.Lib.mMainClassRoot = new jeash.display.MovieClip();
		jeash.Lib.mCurrent = jeash.Lib.mMainClassRoot;
		jeash.Lib.mCurrent.name = "Root MovieClip";
	}
	var $tmp = jeash.Lib.mMainClassRoot;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib["as"] = function(v,c) {
	$s.push("jeash.Lib::as");
	var $spos = $s.length;
	var $tmp = Std["is"](v,c)?v:null;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.starttime = null;
jeash.Lib.getTimer = function() {
	$s.push("jeash.Lib::getTimer");
	var $spos = $s.length;
	var $tmp = Std["int"]((haxe.Timer.stamp() - jeash.Lib.starttime) * 1000);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.jeashGetStage = function() {
	$s.push("jeash.Lib::jeashGetStage");
	var $spos = $s.length;
	jeash.Lib.jeashGetCanvas();
	if(jeash.Lib.mStage == null) {
		var width = jeash.Lib.jeashGetWidth();
		var height = jeash.Lib.jeashGetHeight();
		jeash.Lib.mStage = new jeash.display.Stage(width,height);
		jeash.Lib.mStage.addChild(jeash.Lib.jeashGetCurrent());
	}
	var $tmp = jeash.Lib.mStage;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.jeashAppendSurface = function(surface,before) {
	$s.push("jeash.Lib::jeashAppendSurface");
	var $spos = $s.length;
	if(jeash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		try {
			surface.onmouseover = surface.onselectstart = function() {
				$s.push("jeash.Lib::jeashAppendSurface@208");
				var $spos = $s.length;
				$s.pop();
				return false;
				$s.pop();
			};
		} catch( e ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
		}
		if(before != null) jeash.Lib.mMe.__scr.insertBefore(surface,before); else jeash.Lib.mMe.__scr.appendChild(surface);
	}
	$s.pop();
}
jeash.Lib.jeashSwapSurface = function(surface1,surface2) {
	$s.push("jeash.Lib::jeashSwapSurface");
	var $spos = $s.length;
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(jeash.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i; else if(jeash.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = jeash.Lib.mMe.__scr.removeChild(jeash.Lib.mMe.__scr.childNodes[c1]);
		if(c2 > c1) c2--;
		if(c2 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c2++]); else jeash.Lib.mMe.__scr.appendChild(swap);
		swap = jeash.Lib.mMe.__scr.removeChild(jeash.Lib.mMe.__scr.childNodes[c2]);
		if(c1 > c2) c1--;
		if(c1 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c1++]); else jeash.Lib.mMe.__scr.appendChild(swap);
	}
	$s.pop();
}
jeash.Lib.jeashIsOnStage = function(surface) {
	$s.push("jeash.Lib::jeashIsOnStage");
	var $spos = $s.length;
	var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(jeash.Lib.mMe.__scr.childNodes[i] == surface) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
jeash.Lib.jeashRemoveSurface = function(surface) {
	$s.push("jeash.Lib::jeashRemoveSurface");
	var $spos = $s.length;
	if(jeash.Lib.mMe.__scr != null) jeash.Lib.mMe.__scr.removeChild(surface);
	$s.pop();
}
jeash.Lib.jeashSetSurfaceTransform = function(surface,matrix) {
	$s.push("jeash.Lib::jeashSetSurfaceTransform");
	var $spos = $s.length;
	surface.style.setProperty("-moz-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + "px, " + matrix.ty.toFixed(4) + "px)","");
	surface.style.setProperty("-moz-transform-origin","0 0","");
	surface.style.setProperty("-webkit-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
	surface.style.setProperty("-webkit-transform-origin","0 0","");
	surface.style.setProperty("-o-transform","matrix(" + matrix.a.toFixed(4) + ", " + matrix.b.toFixed(4) + ", " + matrix.c.toFixed(4) + ", " + matrix.d.toFixed(4) + ", " + matrix.tx.toFixed(4) + ", " + matrix.ty.toFixed(4) + ")","");
	surface.style.setProperty("-o-transform-origin","0 0","");
	$s.pop();
}
jeash.Lib.jeashSetSurfaceOpacity = function(surface,alpha) {
	$s.push("jeash.Lib::jeashSetSurfaceOpacity");
	var $spos = $s.length;
	surface.style.setProperty("opacity",Std.string(alpha),"");
	$s.pop();
}
jeash.Lib.jeashSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	$s.push("jeash.Lib::jeashSetSurfaceFont");
	var $spos = $s.length;
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
	$s.pop();
}
jeash.Lib.jeashSetSurfaceBorder = function(surface,color,size) {
	$s.push("jeash.Lib::jeashSetSurfaceBorder");
	var $spos = $s.length;
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
	$s.pop();
}
jeash.Lib.jeashSetSurfacePadding = function(surface,padding,margin,display) {
	$s.push("jeash.Lib::jeashSetSurfacePadding");
	var $spos = $s.length;
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
	$s.pop();
}
jeash.Lib.jeashAppendText = function(surface,container,text,wrap,isHtml) {
	$s.push("jeash.Lib::jeashAppendText");
	var $spos = $s.length;
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Lib.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
	$s.pop();
}
jeash.Lib.jeashSetTextDimensions = function(surface,width,height,align) {
	$s.push("jeash.Lib::jeashSetTextDimensions");
	var $spos = $s.length;
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
	$s.pop();
}
jeash.Lib.jeashSetSurfaceAlign = function(surface,align) {
	$s.push("jeash.Lib::jeashSetSurfaceAlign");
	var $spos = $s.length;
	surface.style.setProperty("text-align",align,"");
	$s.pop();
}
jeash.Lib.jeashSurfaceHitTest = function(surface,x,y) {
	$s.push("jeash.Lib::jeashSurfaceHitTest");
	var $spos = $s.length;
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) {
			$s.pop();
			return true;
		}
	}
	$s.pop();
	return false;
	$s.pop();
}
jeash.Lib.jeashCopyStyle = function(src,tgt) {
	$s.push("jeash.Lib::jeashCopyStyle");
	var $spos = $s.length;
	tgt.id = src.id;
	var _g = 0, _g1 = ["-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
	$s.pop();
}
jeash.Lib.jeashDrawToSurface = function(surface,mask,matrix,alpha) {
	$s.push("jeash.Lib::jeashDrawToSurface");
	var $spos = $s.length;
	if(alpha == null) alpha = 1.0;
	var ctx = surface.getContext("2d");
	var maskCtx = mask.getContext("2d");
	maskCtx.globalCompositeOperation = "source-over";
	maskCtx.globalAlpha = alpha;
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) maskCtx.drawImage(surface,matrix.tx,matrix.ty); else maskCtx.drawImage(surface,0,0);
	}
	$s.pop();
}
jeash.Lib.jeashDisableRightClick = function() {
	$s.push("jeash.Lib::jeashDisableRightClick");
	var $spos = $s.length;
	if(jeash.Lib.mMe != null) try {
		jeash.Lib.mMe.__scr.oncontextmenu = function() {
			$s.push("jeash.Lib::jeashDisableRightClick@377");
			var $spos = $s.length;
			$s.pop();
			return false;
			$s.pop();
		};
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		jeash.Lib.trace("Disable right click not supported in this browser.");
	}
	$s.pop();
}
jeash.Lib.jeashEnableRightClick = function() {
	$s.push("jeash.Lib::jeashEnableRightClick");
	var $spos = $s.length;
	if(jeash.Lib.mMe != null) try {
		jeash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
	}
	$s.pop();
}
jeash.Lib.jeashEnableFullScreen = function() {
	$s.push("jeash.Lib::jeashEnableFullScreen");
	var $spos = $s.length;
	if(jeash.Lib.mMe != null) {
		var origWidth = jeash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = jeash.Lib.mMe.__scr.style.getPropertyValue("height");
		jeash.Lib.mMe.__scr.style.setProperty("width","100%","");
		jeash.Lib.mMe.__scr.style.setProperty("height","100%","");
		jeash.Lib.jeashDisableFullScreen = function() {
			$s.push("jeash.Lib::jeashEnableFullScreen@402");
			var $spos = $s.length;
			jeash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			jeash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
			$s.pop();
		};
	}
	$s.pop();
}
jeash.Lib.jeashDisableFullScreen = function() {
	$s.push("jeash.Lib::jeashDisableFullScreen");
	var $spos = $s.length;
	$s.pop();
}
jeash.Lib.jeashFullScreenWidth = function() {
	$s.push("jeash.Lib::jeashFullScreenWidth");
	var $spos = $s.length;
	var window = js.Lib.window;
	var $tmp = window.innerWidth;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.jeashFullScreenHeight = function() {
	$s.push("jeash.Lib::jeashFullScreenHeight");
	var $spos = $s.length;
	var window = js.Lib.window;
	var $tmp = window.innerHeight;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.jeashSetCursor = function(hand) {
	$s.push("jeash.Lib::jeashSetCursor");
	var $spos = $s.length;
	if(jeash.Lib.mMe != null) {
		if(hand) jeash.Lib.mMe.__scr.style.setProperty("cursor","pointer",""); else jeash.Lib.mMe.__scr.style.setProperty("cursor","default","");
	}
	$s.pop();
}
jeash.Lib.jeashSetSurfaceVisible = function(surface,visible) {
	$s.push("jeash.Lib::jeashSetSurfaceVisible");
	var $spos = $s.length;
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
	$s.pop();
}
jeash.Lib.jeashSetSurfaceId = function(surface,name) {
	$s.push("jeash.Lib::jeashSetSurfaceId");
	var $spos = $s.length;
	surface.id = name;
	$s.pop();
}
jeash.Lib.Run = function(tgt,width,height) {
	$s.push("jeash.Lib::Run");
	var $spos = $s.length;
	jeash.Lib.mMe = new jeash.Lib(tgt.id,width,height);
	jeash.Lib.jeashGetCanvas().width = width;
	jeash.Lib.jeashGetCanvas().height = height;
	if(!StringTools.startsWith(jeash.Lib.context,"swf")) {
		var _g1 = 0, _g = tgt.attributes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var attr = tgt.attributes.item(i);
			if(StringTools.startsWith(attr.name,"data-")) switch(attr.name) {
			case "data-" + "framerate":
				jeash.Lib.jeashGetStage().jeashSetFrameRate(Std.parseFloat(attr.value));
				break;
			default:
			}
		}
		var _g = 0, _g1 = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","focus","dblclick","click","blur"];
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,$closure(jeash.Lib.jeashGetStage(),"jeashProcessStageEvent"),true);
		}
		var _g = 0, _g1 = ["keyup","keypress","keydown"];
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			var window = js.Lib.window;
			window.addEventListener(type,$closure(jeash.Lib.jeashGetStage(),"jeashProcessStageEvent"),true);
		}
		jeash.Lib.jeashGetStage().jeashSetBackgroundColour(tgt.style.backgroundColor != null && tgt.style.backgroundColor != ""?jeash.Lib.ParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
			$s.push("jeash.Lib::Run@471");
			var $spos = $s.length;
			var $tmp = (function($this) {
				var $r;
				switch(pos) {
				case 0:
					$r = res | cur << 16;
					break;
				case 1:
					$r = res | cur << 8;
					break;
				case 2:
					$r = res | cur;
					break;
				}
				return $r;
			}(this));
			$s.pop();
			return $tmp;
			$s.pop();
		}):16777215);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().beginFill(jeash.Lib.jeashGetStage().jeashGetBackgroundColour());
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().drawRect(0,0,width,height);
		jeash.Lib.jeashGetCurrent().jeashGetGraphics().jeashSurface.id = "Root MovieClip";
		jeash.Lib.mMe.jeashTraceTextField = new jeash.text.TextField();
		jeash.Lib.mMe.jeashTraceTextField.jeashSetWidth(jeash.Lib.jeashGetStage().jeashGetStageWidth());
		jeash.Lib.mMe.jeashTraceTextField.SetWordWrap(true);
		jeash.Lib.jeashGetCurrent().addChild(jeash.Lib.mMe.jeashTraceTextField);
		jeash.Lib.jeashGetStage().jeashUpdateNextWake();
	}
	var $tmp = jeash.Lib.mMe;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.ParseColor = function(str,cb) {
	$s.push("jeash.Lib::ParseColor");
	var $spos = $s.length;
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		$s.pop();
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		$s.pop();
		return col;
	} else throw "Cannot parse color '" + str + "'.";
	$s.pop();
}
jeash.Lib.jeashGetWidth = function() {
	$s.push("jeash.Lib::jeashGetWidth");
	var $spos = $s.length;
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	var $tmp = tgt.clientWidth > 0?tgt.clientWidth:500;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.jeashGetHeight = function() {
	$s.push("jeash.Lib::jeashGetHeight");
	var $spos = $s.length;
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	var $tmp = tgt.clientHeight > 0?tgt.clientHeight:500;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.Lib.jeashBootstrap = function() {
	$s.push("jeash.Lib::jeashBootstrap");
	var $spos = $s.length;
	var tgt = js.Lib.document.getElementById("haxe:jeash");
	var lib = jeash.Lib.Run(tgt,jeash.Lib.jeashGetWidth(),jeash.Lib.jeashGetHeight());
	$s.pop();
	return lib;
	$s.pop();
}
jeash.Lib.prototype.mKilled = null;
jeash.Lib.prototype.mRequestedWidth = null;
jeash.Lib.prototype.mRequestedHeight = null;
jeash.Lib.prototype.mResizePending = null;
jeash.Lib.prototype.__scr = null;
jeash.Lib.prototype.mArgs = null;
jeash.Lib.prototype.jeashTraceTextField = null;
jeash.Lib.prototype.__class__ = jeash.Lib;
if(!jeash.accessibility) jeash.accessibility = {}
jeash.accessibility.AccessibilityProperties = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.accessibility.AccessibilityProperties::new");
	var $spos = $s.length;
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
	$s.pop();
}
jeash.accessibility.AccessibilityProperties.__name__ = ["jeash","accessibility","AccessibilityProperties"];
jeash.accessibility.AccessibilityProperties.prototype.description = null;
jeash.accessibility.AccessibilityProperties.prototype.forceSimple = null;
jeash.accessibility.AccessibilityProperties.prototype.name = null;
jeash.accessibility.AccessibilityProperties.prototype.noAutoLabeling = null;
jeash.accessibility.AccessibilityProperties.prototype.shortcut = null;
jeash.accessibility.AccessibilityProperties.prototype.silent = null;
jeash.accessibility.AccessibilityProperties.prototype.__class__ = jeash.accessibility.AccessibilityProperties;
jeash.display.PixelSnapping = { __ename__ : ["jeash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
jeash.display.PixelSnapping.NEVER = ["NEVER",0];
jeash.display.PixelSnapping.NEVER.toString = $estr;
jeash.display.PixelSnapping.NEVER.__enum__ = jeash.display.PixelSnapping;
jeash.display.PixelSnapping.AUTO = ["AUTO",1];
jeash.display.PixelSnapping.AUTO.toString = $estr;
jeash.display.PixelSnapping.AUTO.__enum__ = jeash.display.PixelSnapping;
jeash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
jeash.display.PixelSnapping.ALWAYS.toString = $estr;
jeash.display.PixelSnapping.ALWAYS.__enum__ = jeash.display.PixelSnapping;
haxe.io.Error = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
haxe.Unserializer = function(buf) {
	if( buf === $_ ) return;
	$s.push("haxe.Unserializer::new");
	var $spos = $s.length;
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
	$s.pop();
}
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	$s.push("haxe.Unserializer::initCodes");
	var $spos = $s.length;
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.cca(i)] = i;
	}
	$s.pop();
	return codes;
	$s.pop();
}
haxe.Unserializer.run = function(v) {
	$s.push("haxe.Unserializer::run");
	var $spos = $s.length;
	var $tmp = new haxe.Unserializer(v).unserialize();
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Unserializer.prototype.buf = null;
haxe.Unserializer.prototype.pos = null;
haxe.Unserializer.prototype.length = null;
haxe.Unserializer.prototype.cache = null;
haxe.Unserializer.prototype.scache = null;
haxe.Unserializer.prototype.resolver = null;
haxe.Unserializer.prototype.setResolver = function(r) {
	$s.push("haxe.Unserializer::setResolver");
	var $spos = $s.length;
	if(r == null) this.resolver = { resolveClass : function(_) {
		$s.push("haxe.Unserializer::setResolver@84");
		var $spos = $s.length;
		$s.pop();
		return null;
		$s.pop();
	}, resolveEnum : function(_) {
		$s.push("haxe.Unserializer::setResolver@85");
		var $spos = $s.length;
		$s.pop();
		return null;
		$s.pop();
	}}; else this.resolver = r;
	$s.pop();
}
haxe.Unserializer.prototype.getResolver = function() {
	$s.push("haxe.Unserializer::getResolver");
	var $spos = $s.length;
	var $tmp = this.resolver;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Unserializer.prototype.get = function(p) {
	$s.push("haxe.Unserializer::get");
	var $spos = $s.length;
	var $tmp = this.buf.cca(p);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.Unserializer.prototype.readDigits = function() {
	$s.push("haxe.Unserializer::readDigits");
	var $spos = $s.length;
	var k = 0;
	var s = false;
	var fpos = this.pos;
	while(true) {
		var c = this.buf.cca(this.pos);
		if(c != c) break;
		if(c == 45) {
			if(this.pos != fpos) break;
			s = true;
			this.pos++;
			continue;
		}
		if(c < 48 || c > 57) break;
		k = k * 10 + (c - 48);
		this.pos++;
	}
	if(s) k *= -1;
	$s.pop();
	return k;
	$s.pop();
}
haxe.Unserializer.prototype.unserializeObject = function(o) {
	$s.push("haxe.Unserializer::unserializeObject");
	var $spos = $s.length;
	while(true) {
		if(this.pos >= this.length) throw "Invalid object";
		if(this.buf.cca(this.pos) == 103) break;
		var k = this.unserialize();
		if(!Std["is"](k,String)) throw "Invalid object key";
		var v = this.unserialize();
		o[k] = v;
	}
	this.pos++;
	$s.pop();
}
haxe.Unserializer.prototype.unserializeEnum = function(edecl,tag) {
	$s.push("haxe.Unserializer::unserializeEnum");
	var $spos = $s.length;
	var constr = Reflect.field(edecl,tag);
	if(constr == null) throw "Unknown enum tag " + Type.getEnumName(edecl) + "." + tag;
	if(this.buf.cca(this.pos++) != 58) throw "Invalid enum format";
	var nargs = this.readDigits();
	if(nargs == 0) {
		this.cache.push(constr);
		$s.pop();
		return constr;
	}
	var args = new Array();
	while(nargs > 0) {
		args.push(this.unserialize());
		nargs -= 1;
	}
	var e = constr.apply(edecl,args);
	this.cache.push(e);
	$s.pop();
	return e;
	$s.pop();
}
haxe.Unserializer.prototype.unserialize = function() {
	$s.push("haxe.Unserializer::unserialize");
	var $spos = $s.length;
	switch(this.buf.cca(this.pos++)) {
	case 110:
		$s.pop();
		return null;
	case 116:
		$s.pop();
		return true;
	case 102:
		$s.pop();
		return false;
	case 122:
		$s.pop();
		return 0;
	case 105:
		var $tmp = this.readDigits();
		$s.pop();
		return $tmp;
	case 100:
		var p1 = this.pos;
		while(true) {
			var c = this.buf.cca(this.pos);
			if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
		}
		var $tmp = Std.parseFloat(this.buf.substr(p1,this.pos - p1));
		$s.pop();
		return $tmp;
	case 121:
		var len = this.readDigits();
		if(this.buf.cca(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
		var s = this.buf.substr(this.pos,len);
		this.pos += len;
		s = StringTools.urlDecode(s);
		this.scache.push(s);
		$s.pop();
		return s;
	case 107:
		var $tmp = Math.NaN;
		$s.pop();
		return $tmp;
	case 109:
		var $tmp = Math.NEGATIVE_INFINITY;
		$s.pop();
		return $tmp;
	case 112:
		var $tmp = Math.POSITIVE_INFINITY;
		$s.pop();
		return $tmp;
	case 97:
		var buf = this.buf;
		var a = new Array();
		this.cache.push(a);
		while(true) {
			var c = this.buf.cca(this.pos);
			if(c == 104) {
				this.pos++;
				break;
			}
			if(c == 117) {
				this.pos++;
				var n = this.readDigits();
				a[a.length + n - 1] = null;
			} else a.push(this.unserialize());
		}
		$s.pop();
		return a;
	case 111:
		var o = { };
		this.cache.push(o);
		this.unserializeObject(o);
		$s.pop();
		return o;
	case 114:
		var n = this.readDigits();
		if(n < 0 || n >= this.cache.length) throw "Invalid reference";
		var $tmp = this.cache[n];
		$s.pop();
		return $tmp;
	case 82:
		var n = this.readDigits();
		if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
		var $tmp = this.scache[n];
		$s.pop();
		return $tmp;
	case 120:
		throw this.unserialize();
		break;
	case 99:
		var name = this.unserialize();
		var cl = this.resolver.resolveClass(name);
		if(cl == null) throw "Class not found " + name;
		var o = Type.createEmptyInstance(cl);
		this.cache.push(o);
		this.unserializeObject(o);
		$s.pop();
		return o;
	case 119:
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		var $tmp = this.unserializeEnum(edecl,this.unserialize());
		$s.pop();
		return $tmp;
	case 106:
		var name = this.unserialize();
		var edecl = this.resolver.resolveEnum(name);
		if(edecl == null) throw "Enum not found " + name;
		this.pos++;
		var index = this.readDigits();
		var tag = Type.getEnumConstructs(edecl)[index];
		if(tag == null) throw "Unknown enum index " + name + "@" + index;
		var $tmp = this.unserializeEnum(edecl,tag);
		$s.pop();
		return $tmp;
	case 108:
		var l = new List();
		this.cache.push(l);
		var buf = this.buf;
		while(this.buf.cca(this.pos) != 104) l.add(this.unserialize());
		this.pos++;
		$s.pop();
		return l;
	case 98:
		var h = new Hash();
		this.cache.push(h);
		var buf = this.buf;
		while(this.buf.cca(this.pos) != 104) {
			var s = this.unserialize();
			h.set(s,this.unserialize());
		}
		this.pos++;
		$s.pop();
		return h;
	case 113:
		var h = new IntHash();
		this.cache.push(h);
		var buf = this.buf;
		var c = this.buf.cca(this.pos++);
		while(c == 58) {
			var i = this.readDigits();
			h.set(i,this.unserialize());
			c = this.buf.cca(this.pos++);
		}
		if(c != 104) throw "Invalid IntHash format";
		$s.pop();
		return h;
	case 118:
		var d = Date.fromString(this.buf.substr(this.pos,19));
		this.cache.push(d);
		this.pos += 19;
		$s.pop();
		return d;
	case 115:
		var len = this.readDigits();
		var buf = this.buf;
		if(this.buf.cca(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
		var codes = haxe.Unserializer.CODES;
		if(codes == null) {
			codes = haxe.Unserializer.initCodes();
			haxe.Unserializer.CODES = codes;
		}
		var i = this.pos;
		var rest = len & 3;
		var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
		var max = i + (len - rest);
		var bytes = haxe.io.Bytes.alloc(size);
		var bpos = 0;
		while(i < max) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
			var c3 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
			var c4 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c3 << 6 | c4) & 255;
		}
		if(rest >= 2) {
			var c1 = codes[buf.cca(i++)];
			var c2 = codes[buf.cca(i++)];
			bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
			if(rest == 3) {
				var c3 = codes[buf.cca(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
			}
		}
		this.pos += len;
		this.cache.push(bytes);
		$s.pop();
		return bytes;
	case 67:
		var name = this.unserialize();
		var cl = this.resolver.resolveClass(name);
		if(cl == null) throw "Class not found " + name;
		var o = Type.createEmptyInstance(cl);
		this.cache.push(o);
		o.hxUnserialize(this);
		if(this.buf.cca(this.pos++) != 103) throw "Invalid custom data";
		$s.pop();
		return o;
	default:
	}
	this.pos--;
	throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	$s.pop();
}
haxe.Unserializer.prototype.__class__ = haxe.Unserializer;
jeash.display.GraphicsPathCommand = function() { }
jeash.display.GraphicsPathCommand.__name__ = ["jeash","display","GraphicsPathCommand"];
jeash.display.GraphicsPathCommand.prototype.__class__ = jeash.display.GraphicsPathCommand;
jeash.display.IGraphicsFill = function() { }
jeash.display.IGraphicsFill.__name__ = ["jeash","display","IGraphicsFill"];
jeash.display.IGraphicsFill.prototype.jeashGraphicsFillType = null;
jeash.display.IGraphicsFill.prototype.__class__ = jeash.display.IGraphicsFill;
jeash.display.GraphicsSolidFill = function(color,alpha) {
	if( color === $_ ) return;
	$s.push("jeash.display.GraphicsSolidFill::new");
	var $spos = $s.length;
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.SOLID;
	this.jeashGraphicsFillType = jeash.display.GraphicsFillType.SOLID_FILL;
	$s.pop();
}
jeash.display.GraphicsSolidFill.__name__ = ["jeash","display","GraphicsSolidFill"];
jeash.display.GraphicsSolidFill.prototype.alpha = null;
jeash.display.GraphicsSolidFill.prototype.color = null;
jeash.display.GraphicsSolidFill.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsSolidFill.prototype.jeashGraphicsFillType = null;
jeash.display.GraphicsSolidFill.prototype.__class__ = jeash.display.GraphicsSolidFill;
jeash.display.GraphicsSolidFill.__interfaces__ = [jeash.display.IGraphicsFill,jeash.display.IGraphicsData];
jeash.display.Shape = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.display.Shape::new");
	var $spos = $s.length;
	jeash.Lib.jeashGetCanvas();
	this.jeashGraphics = new jeash.display.Graphics();
	if(this.jeashGraphics != null) this.jeashGraphics.owner = this;
	jeash.display.DisplayObject.call(this);
	this.name = "Shape " + jeash.display.DisplayObject.mNameID++;
	$s.pop();
}
jeash.display.Shape.__name__ = ["jeash","display","Shape"];
jeash.display.Shape.__super__ = jeash.display.DisplayObject;
for(var k in jeash.display.DisplayObject.prototype ) jeash.display.Shape.prototype[k] = jeash.display.DisplayObject.prototype[k];
jeash.display.Shape.prototype.jeashGraphics = null;
jeash.display.Shape.prototype.graphics = null;
jeash.display.Shape.prototype.jeashGetGraphics = function() {
	$s.push("jeash.display.Shape::jeashGetGraphics");
	var $spos = $s.length;
	var $tmp = this.jeashGraphics;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Shape.prototype.jeashGetObjectUnderPoint = function(point) {
	$s.push("jeash.display.Shape::jeashGetObjectUnderPoint");
	var $spos = $s.length;
	$s.pop();
	return null;
	$s.pop();
}
jeash.display.Shape.prototype.__class__ = jeash.display.Shape;
jeash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if( type === $_ ) return;
	$s.push("jeash.events.IOErrorEvent::new");
	var $spos = $s.length;
	if(inText == null) inText = "";
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
	$s.pop();
}
jeash.events.IOErrorEvent.__name__ = ["jeash","events","IOErrorEvent"];
jeash.events.IOErrorEvent.__super__ = jeash.events.Event;
for(var k in jeash.events.Event.prototype ) jeash.events.IOErrorEvent.prototype[k] = jeash.events.Event.prototype[k];
jeash.events.IOErrorEvent.prototype.text = null;
jeash.events.IOErrorEvent.prototype.__class__ = jeash.events.IOErrorEvent;
jeash.display.Stage = function(width,height) {
	if( width === $_ ) return;
	$s.push("jeash.display.Stage::new");
	var $spos = $s.length;
	jeash.display.DisplayObjectContainer.call(this);
	this.mFocusObject = null;
	this.jeashWindowWidth = width;
	this.jeashWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = jeash.display.StageScaleMode.SHOW_ALL;
	this.jeashStageMatrix = new jeash.geom.Matrix();
	this.tabEnabled = true;
	this.jeashSetFrameRate(60.0);
	this.jeashSetBackgroundColour(16777215);
	this.name = "Stage";
	this.loaderInfo = jeash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.jeashWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.jeashWindowHeight);
	this.mProjMatrix = [1.,0,0,0,0,1,0,0,0,0,-1,-1,0,0,0,0];
	this.jeashPointInPathMode = jeash.display.Graphics.jeashDetectIsPointInPathMode();
	this.jeashMouseOverObjects = [];
	this.jeashMouseDown = false;
	this.jeashSetShowDefaultContextMenu(true);
	$s.pop();
}
jeash.display.Stage.__name__ = ["jeash","display","Stage"];
jeash.display.Stage.__super__ = jeash.display.DisplayObjectContainer;
for(var k in jeash.display.DisplayObjectContainer.prototype ) jeash.display.Stage.prototype[k] = jeash.display.DisplayObjectContainer.prototype[k];
jeash.display.Stage.prototype.jeashWindowWidth = null;
jeash.display.Stage.prototype.jeashWindowHeight = null;
jeash.display.Stage.prototype.jeashTimer = null;
jeash.display.Stage.prototype.jeashInterval = null;
jeash.display.Stage.prototype.jeashFastMode = null;
jeash.display.Stage.prototype.jeashDragObject = null;
jeash.display.Stage.prototype.jeashDragBounds = null;
jeash.display.Stage.prototype.jeashDragOffsetX = null;
jeash.display.Stage.prototype.jeashDragOffsetY = null;
jeash.display.Stage.prototype.jeashMouseOverObjects = null;
jeash.display.Stage.prototype.jeashStageMatrix = null;
jeash.display.Stage.prototype.jeashMouseDown = null;
jeash.display.Stage.prototype.jeashStageActive = null;
jeash.display.Stage.prototype.jeashFrameRate = null;
jeash.display.Stage.prototype.jeashBackgroundColour = null;
jeash.display.Stage.prototype.jeashShowDefaultContextMenu = null;
jeash.display.Stage.prototype.jeashPointInPathMode = null;
jeash.display.Stage.prototype.stageWidth = null;
jeash.display.Stage.prototype.stageHeight = null;
jeash.display.Stage.prototype.frameRate = null;
jeash.display.Stage.prototype.quality = null;
jeash.display.Stage.prototype.scaleMode = null;
jeash.display.Stage.prototype.align = null;
jeash.display.Stage.prototype.stageFocusRect = null;
jeash.display.Stage.prototype.focus = null;
jeash.display.Stage.prototype.backgroundColor = null;
jeash.display.Stage.prototype.showDefaultContextMenu = null;
jeash.display.Stage.prototype.displayState = null;
jeash.display.Stage.prototype.fullScreenWidth = null;
jeash.display.Stage.prototype.fullScreenHeight = null;
jeash.display.Stage.prototype.jeashGetStageWidth = function() {
	$s.push("jeash.display.Stage::jeashGetStageWidth");
	var $spos = $s.length;
	var $tmp = this.jeashWindowWidth;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetStageHeight = function() {
	$s.push("jeash.display.Stage::jeashGetStageHeight");
	var $spos = $s.length;
	var $tmp = this.jeashWindowHeight;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.mFocusObject = null;
jeash.display.Stage.prototype.mProjMatrix = null;
jeash.display.Stage.prototype.jeashStartDrag = function(sprite,lockCenter,bounds) {
	$s.push("jeash.display.Stage::jeashStartDrag");
	var $spos = $s.length;
	if(lockCenter == null) lockCenter = false;
	this.jeashDragBounds = bounds == null?null:bounds.clone();
	this.jeashDragObject = sprite;
	if(this.jeashDragObject != null) {
		if(lockCenter) {
			var bounds1 = sprite.getBounds(this);
			this.jeashDragOffsetX = -bounds1.width / 2 - bounds1.x;
			this.jeashDragOffsetY = -bounds1.height / 2 - bounds1.y;
		} else {
			var mouse = new jeash.geom.Point(this.jeashGetMouseX(),this.jeashGetMouseY());
			var p = this.jeashDragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			this.jeashDragOffsetX = this.jeashDragObject.jeashGetX() - mouse.x;
			this.jeashDragOffsetY = this.jeashDragObject.jeashGetY() - mouse.y;
		}
	}
	$s.pop();
}
jeash.display.Stage.prototype.jeashDrag = function(point) {
	$s.push("jeash.display.Stage::jeashDrag");
	var $spos = $s.length;
	var p = this.jeashDragObject.parent;
	if(p != null) point = p.globalToLocal(point);
	var x = point.x + this.jeashDragOffsetX;
	var y = point.y + this.jeashDragOffsetY;
	if(this.jeashDragBounds != null) {
		if(x < this.jeashDragBounds.x) x = this.jeashDragBounds.x; else if(x > this.jeashDragBounds.get_right()) x = this.jeashDragBounds.get_right();
		if(y < this.jeashDragBounds.y) y = this.jeashDragBounds.y; else if(y > this.jeashDragBounds.get_bottom()) y = this.jeashDragBounds.get_bottom();
	}
	this.jeashDragObject.jeashSetX(x);
	this.jeashDragObject.jeashSetY(y);
	$s.pop();
}
jeash.display.Stage.prototype.jeashStopDrag = function(sprite) {
	$s.push("jeash.display.Stage::jeashStopDrag");
	var $spos = $s.length;
	this.jeashDragBounds = null;
	this.jeashDragObject = null;
	$s.pop();
}
jeash.display.Stage.prototype.jeashCheckInOuts = function(event,stack) {
	$s.push("jeash.display.Stage::jeashCheckInOuts");
	var $spos = $s.length;
	var prev = this.jeashMouseOverObjects;
	var events = jeash.display.Stage.jeashMouseChanges;
	var new_n = stack.length;
	var new_obj = new_n > 0?stack[new_n - 1]:null;
	var old_n = prev.length;
	var old_obj = old_n > 0?prev[old_n - 1]:null;
	if(new_obj != old_obj) {
		if(old_obj != null) old_obj.jeashFireEvent(event.jeashCreateSimilar(events[0],new_obj,old_obj));
		if(new_obj != null) new_obj.jeashFireEvent(event.jeashCreateSimilar(events[1],old_obj,new_obj));
		var common = 0;
		while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
		var rollOut = event.jeashCreateSimilar(events[2],new_obj,old_obj);
		var i = old_n - 1;
		while(i >= common) {
			prev[i].dispatchEvent(rollOut);
			i--;
		}
		var rollOver = event.jeashCreateSimilar(events[3],old_obj);
		var i1 = new_n - 1;
		while(i1 >= common) {
			stack[i1].dispatchEvent(rollOver);
			i1--;
		}
		this.jeashMouseOverObjects = stack;
	}
	$s.pop();
}
jeash.display.Stage.prototype.jeashProcessStageEvent = function(evt) {
	$s.push("jeash.display.Stage::jeashProcessStageEvent");
	var $spos = $s.length;
	evt.stopPropagation();
	switch(evt.type) {
	case "mousemove":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_MOVE);
		break;
	case "mousedown":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_DOWN);
		break;
	case "mouseup":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_UP);
		break;
	case "click":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.CLICK);
		break;
	case "mousewheel":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_WHEEL);
		break;
	case "dblclick":
		this.jeashOnMouse(evt,jeash.events.MouseEvent.DOUBLE_CLICK);
		break;
	case "keydown":
		var evt1 = evt;
		var keyCode = evt1.keyIdentifier != null?(function($this) {
			var $r;
			try {
				$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
			} catch( e ) {
				$r = (function($this) {
					var $r;
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					jeash.Lib.trace("keydown error: " + e);
					$r = evt1.keyCode;
					return $r;
				}($this));
			}
			return $r;
		}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
		this.jeashOnKey(keyCode,true,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
		break;
	case "keyup":
		var evt1 = evt;
		var keyCode = evt1.keyIdentifier != null?(function($this) {
			var $r;
			try {
				$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
			} catch( e ) {
				$r = (function($this) {
					var $r;
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					jeash.Lib.trace("keyup error: " + e);
					$r = evt1.keyCode;
					return $r;
				}($this));
			}
			return $r;
		}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
		this.jeashOnKey(keyCode,false,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
		break;
	default:
	}
	$s.pop();
}
jeash.display.Stage.prototype.jeashOnMouse = function(event,type) {
	$s.push("jeash.display.Stage::jeashOnMouse");
	var $spos = $s.length;
	var point = new jeash.geom.Point(event.clientX - jeash.Lib.mMe.__scr.offsetLeft + window.scrollX,event.clientY - jeash.Lib.mMe.__scr.offsetTop + window.scrollY);
	if(this.jeashDragObject != null) this.jeashDrag(point);
	var obj = this.jeashGetObjectUnderPoint(point);
	this.jeashSetMouseX(point.x);
	this.jeashSetMouseY(point.y);
	var stack = new Array();
	if(obj != null) obj.jeashGetInteractiveObjectStack(stack);
	if(stack.length > 0) {
		stack.reverse();
		var local = obj.globalToLocal(point);
		var evt = this.jeashCreateMouseEvent(type,event,local,obj);
		this.jeashCheckInOuts(evt,stack);
		obj.jeashFireEvent(evt);
	} else {
		var evt = this.jeashCreateMouseEvent(type,event,point,null);
		this.jeashCheckInOuts(evt,stack);
	}
	$s.pop();
}
jeash.display.Stage.prototype.jeashCreateMouseEvent = function(type,event,local,target) {
	$s.push("jeash.display.Stage::jeashCreateMouseEvent");
	var $spos = $s.length;
	var delta = type == jeash.events.MouseEvent.MOUSE_WHEEL?(function($this) {
		var $r;
		var mouseEvent = event;
		$r = mouseEvent.wheelDelta?js.Lib.isOpera?Std["int"](mouseEvent.wheelDelta / 40):Std["int"](mouseEvent.wheelDelta / 120):mouseEvent.detail?Std["int"](-mouseEvent.detail):null;
		return $r;
	}(this)):2;
	if(type == jeash.events.MouseEvent.MOUSE_DOWN) this.jeashMouseDown = event.which != null?event.which == 1:event.button != null?js.Lib.isIE && event.button == 1 || event.button == 0:false; else if(type == jeash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) this.jeashMouseDown = false; else if(event.button != null) {
				if(js.Lib.isIE && event.button == 1 || event.button == 0) this.jeashMouseDown = false; else this.jeashMouseDown = false;
			}
		}
	}
	var pseudoEvent = new jeash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,this.jeashMouseDown,delta);
	pseudoEvent.stageX = this.jeashGetMouseX();
	pseudoEvent.stageY = this.jeashGetMouseY();
	pseudoEvent.target = target;
	$s.pop();
	return pseudoEvent;
	$s.pop();
}
jeash.display.Stage.prototype.jeashOnKey = function(code,pressed,inChar,ctrl,alt,shift) {
	$s.push("jeash.display.Stage::jeashOnKey");
	var $spos = $s.length;
	var event = new jeash.events.KeyboardEvent(pressed?jeash.events.KeyboardEvent.KEY_DOWN:jeash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,shift || ctrl?1:0,ctrl,alt,shift);
	this.dispatchEvent(event);
	$s.pop();
}
jeash.display.Stage.prototype.jeashOnResize = function(inW,inH) {
	$s.push("jeash.display.Stage::jeashOnResize");
	var $spos = $s.length;
	this.jeashWindowWidth = inW;
	this.jeashWindowHeight = inH;
	var event = new jeash.events.Event(jeash.events.Event.RESIZE);
	event.target = this;
	this.jeashBroadcast(event);
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetBackgroundColour = function() {
	$s.push("jeash.display.Stage::jeashGetBackgroundColour");
	var $spos = $s.length;
	var $tmp = this.jeashBackgroundColour;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashSetBackgroundColour = function(col) {
	$s.push("jeash.display.Stage::jeashSetBackgroundColour");
	var $spos = $s.length;
	this.jeashBackgroundColour = col;
	$s.pop();
	return col;
	$s.pop();
}
jeash.display.Stage.prototype.DoSetFocus = function(inObj,inKeyCode) {
	$s.push("jeash.display.Stage::DoSetFocus");
	var $spos = $s.length;
	$s.pop();
	return inObj;
	$s.pop();
}
jeash.display.Stage.prototype.SetFocus = function(inObj) {
	$s.push("jeash.display.Stage::SetFocus");
	var $spos = $s.length;
	var $tmp = this.DoSetFocus(inObj,-1);
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.GetFocus = function() {
	$s.push("jeash.display.Stage::GetFocus");
	var $spos = $s.length;
	var $tmp = this.mFocusObject;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashRenderAll = function() {
	$s.push("jeash.display.Stage::jeashRenderAll");
	var $spos = $s.length;
	this.jeashRender(this.jeashStageMatrix);
	$s.pop();
}
jeash.display.Stage.prototype.jeashRenderToCanvas = function(canvas) {
	$s.push("jeash.display.Stage::jeashRenderToCanvas");
	var $spos = $s.length;
	canvas.width = canvas.width;
	this.jeashRenderContentsToCache(this.jeashStageMatrix,canvas);
	$s.pop();
}
jeash.display.Stage.prototype.jeashSetQuality = function(inQuality) {
	$s.push("jeash.display.Stage::jeashSetQuality");
	var $spos = $s.length;
	this.quality = inQuality;
	$s.pop();
	return inQuality;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetQuality = function() {
	$s.push("jeash.display.Stage::jeashGetQuality");
	var $spos = $s.length;
	var $tmp = this.quality != null?this.quality:jeash.display.StageQuality.BEST;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetFrameRate = function() {
	$s.push("jeash.display.Stage::jeashGetFrameRate");
	var $spos = $s.length;
	var $tmp = this.jeashFrameRate;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashSetFrameRate = function(speed) {
	$s.push("jeash.display.Stage::jeashSetFrameRate");
	var $spos = $s.length;
	if(StringTools.startsWith(jeash.Lib.context,"swf")) {
		$s.pop();
		return speed;
	}
	var window = js.Lib.window;
	if(speed == 0 && window.postMessage != null) this.jeashFastMode = true; else {
		this.jeashFastMode = false;
		this.jeashInterval = Std["int"](1000.0 / speed);
	}
	this.jeashUpdateNextWake();
	this.jeashFrameRate = speed;
	$s.pop();
	return speed;
	$s.pop();
}
jeash.display.Stage.prototype.jeashUpdateNextWake = function() {
	$s.push("jeash.display.Stage::jeashUpdateNextWake");
	var $spos = $s.length;
	var window = js.Lib.window;
	window.clearInterval(this.jeashTimer);
	if(this.jeashFastMode) {
		window.addEventListener("message",$closure(this,"jeashStageRender"),false);
		window.postMessage("a",window.location);
	} else this.jeashTimer = window.setInterval($closure(this,"jeashStageRender"),this.jeashInterval,[]);
	$s.pop();
}
jeash.display.Stage.prototype.jeashStageRender = function(_) {
	$s.push("jeash.display.Stage::jeashStageRender");
	var $spos = $s.length;
	if(!this.jeashStageActive) {
		this.jeashOnResize(this.jeashWindowWidth,this.jeashWindowHeight);
		var event = new jeash.events.Event(jeash.events.Event.ACTIVATE);
		event.target = this;
		this.jeashBroadcast(event);
		this.jeashStageActive = true;
	}
	var event = new jeash.events.Event(jeash.events.Event.ENTER_FRAME);
	this.jeashBroadcast(event);
	this.jeashRenderAll();
	var event1 = new jeash.events.Event(jeash.events.Event.RENDER);
	this.jeashBroadcast(event1);
	if(this.jeashFastMode) window.postMessage("a",window.location);
	$s.pop();
}
jeash.display.Stage.prototype.jeashIsOnStage = function() {
	$s.push("jeash.display.Stage::jeashIsOnStage");
	var $spos = $s.length;
	$s.pop();
	return true;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetMouseX = function() {
	$s.push("jeash.display.Stage::jeashGetMouseX");
	var $spos = $s.length;
	var $tmp = this.mouseX;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashSetMouseX = function(x) {
	$s.push("jeash.display.Stage::jeashSetMouseX");
	var $spos = $s.length;
	this.mouseX = x;
	$s.pop();
	return x;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetMouseY = function() {
	$s.push("jeash.display.Stage::jeashGetMouseY");
	var $spos = $s.length;
	var $tmp = this.mouseY;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashSetMouseY = function(y) {
	$s.push("jeash.display.Stage::jeashSetMouseY");
	var $spos = $s.length;
	this.mouseY = y;
	$s.pop();
	return y;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetShowDefaultContextMenu = function() {
	$s.push("jeash.display.Stage::jeashGetShowDefaultContextMenu");
	var $spos = $s.length;
	var $tmp = this.jeashShowDefaultContextMenu;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashSetShowDefaultContextMenu = function(showDefaultContextMenu) {
	$s.push("jeash.display.Stage::jeashSetShowDefaultContextMenu");
	var $spos = $s.length;
	if(showDefaultContextMenu != this.jeashShowDefaultContextMenu && this.jeashShowDefaultContextMenu != null) {
		if(!showDefaultContextMenu) jeash.Lib.jeashDisableRightClick(); else jeash.Lib.jeashEnableRightClick();
	}
	this.jeashShowDefaultContextMenu = showDefaultContextMenu;
	$s.pop();
	return showDefaultContextMenu;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetDisplayState = function() {
	$s.push("jeash.display.Stage::jeashGetDisplayState");
	var $spos = $s.length;
	var $tmp = this.displayState;
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashSetDisplayState = function(displayState) {
	$s.push("jeash.display.Stage::jeashSetDisplayState");
	var $spos = $s.length;
	if(displayState != this.displayState && this.displayState != null) {
		switch( (displayState)[1] ) {
		case 1:
			jeash.Lib.jeashDisableFullScreen();
			break;
		case 0:
			jeash.Lib.jeashEnableFullScreen();
			break;
		}
	}
	this.displayState = displayState;
	$s.pop();
	return displayState;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetFullScreenWidth = function() {
	$s.push("jeash.display.Stage::jeashGetFullScreenWidth");
	var $spos = $s.length;
	var $tmp = jeash.Lib.jeashFullScreenWidth();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.jeashGetFullScreenHeight = function() {
	$s.push("jeash.display.Stage::jeashGetFullScreenHeight");
	var $spos = $s.length;
	var $tmp = jeash.Lib.jeashFullScreenHeight();
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.display.Stage.prototype.__class__ = jeash.display.Stage;
jeash.display.GraphicsPath = function(commands,data,winding) {
	if( commands === $_ ) return;
	$s.push("jeash.display.GraphicsPath::new");
	var $spos = $s.length;
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.PATH;
	$s.pop();
}
jeash.display.GraphicsPath.__name__ = ["jeash","display","GraphicsPath"];
jeash.display.GraphicsPath.prototype.commands = null;
jeash.display.GraphicsPath.prototype.data = null;
jeash.display.GraphicsPath.prototype.winding = null;
jeash.display.GraphicsPath.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsPath.prototype.curveTo = function(controlX,controlY,anchorX,anchorY) {
	$s.push("jeash.display.GraphicsPath::curveTo");
	var $spos = $s.length;
	if(this.commands != null && this.data != null) {
		this.commands.push(3);
		this.data.push(anchorX);
		this.data.push(anchorY);
		this.data.push(controlX);
		this.data.push(controlY);
	}
	$s.pop();
}
jeash.display.GraphicsPath.prototype.lineTo = function(x,y) {
	$s.push("jeash.display.GraphicsPath::lineTo");
	var $spos = $s.length;
	if(this.commands != null && this.data != null) {
		this.commands.push(2);
		this.data.push(x);
		this.data.push(y);
	}
	$s.pop();
}
jeash.display.GraphicsPath.prototype.moveTo = function(x,y) {
	$s.push("jeash.display.GraphicsPath::moveTo");
	var $spos = $s.length;
	if(this.commands != null && this.data != null) {
		this.commands.push(1);
		this.data.push(x);
		this.data.push(y);
	}
	$s.pop();
}
jeash.display.GraphicsPath.prototype.__class__ = jeash.display.GraphicsPath;
jeash.display.GraphicsPath.__interfaces__ = [jeash.display.IGraphicsPath,jeash.display.IGraphicsData];
jeash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if( type === $_ ) return;
	$s.push("jeash.display.GraphicsGradientFill::new");
	var $spos = $s.length;
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.jeashGraphicsDataType = jeash.display.GraphicsDataType.GRADIENT;
	this.jeashGraphicsFillType = jeash.display.GraphicsFillType.GRADIENT_FILL;
	$s.pop();
}
jeash.display.GraphicsGradientFill.__name__ = ["jeash","display","GraphicsGradientFill"];
jeash.display.GraphicsGradientFill.prototype.alphas = null;
jeash.display.GraphicsGradientFill.prototype.colors = null;
jeash.display.GraphicsGradientFill.prototype.focalPointRatio = null;
jeash.display.GraphicsGradientFill.prototype.interpolationMethod = null;
jeash.display.GraphicsGradientFill.prototype.matrix = null;
jeash.display.GraphicsGradientFill.prototype.ratios = null;
jeash.display.GraphicsGradientFill.prototype.spreadMethod = null;
jeash.display.GraphicsGradientFill.prototype.type = null;
jeash.display.GraphicsGradientFill.prototype.jeashGraphicsDataType = null;
jeash.display.GraphicsGradientFill.prototype.jeashGraphicsFillType = null;
jeash.display.GraphicsGradientFill.prototype.__class__ = jeash.display.GraphicsGradientFill;
jeash.display.GraphicsGradientFill.__interfaces__ = [jeash.display.IGraphicsFill,jeash.display.IGraphicsData];
jeash.text.Font = function(p) {
	if( p === $_ ) return;
	$s.push("jeash.text.Font::new");
	var $spos = $s.length;
	this.jeashMetrics = [];
	this.jeashFontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	this.jeashSetFontName(className == "jeash.text.Font"?"Bitstream_Vera_Sans":className.split(".").pop());
	$s.pop();
}
jeash.text.Font.__name__ = ["jeash","text","Font"];
jeash.text.Font.jeashFontData = null;
jeash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	$s.push("jeash.text.Font::enumerateFonts");
	var $spos = $s.length;
	var sans = new jeash.text.Font();
	sans.jeashSetFontName("Bitstream_Vera_Sans");
	sans.fontStyle = jeash.text.FontStyle.REGULAR;
	sans.fontType = jeash.text.FontType.DEVICE;
	var $tmp = [sans];
	$s.pop();
	return $tmp;
	$s.pop();
}
jeash.text.Font.registerFont = function(font) {
	$s.push("jeash.text.Font::registerFont");
	var $spos = $s.length;
	$s.pop();
}
jeash.text.Font.jeashOfResource = function(name) {
	$s.push("jeash.text.Font::jeashOfResource");
	var $spos = $s.length;
	var data = haxe.Resource.getString(name);
	if(data == null) throw "Resource data for string '" + name + "' not found.";
	jeash.text.Font.jeashFontData.set(name,haxe.Resource.getString(name));
	$s.pop();
}
jeash.text.Font.prototype.fontName = null;
jeash.text.Font.prototype.fontStyle = null;
jeash.text.Font.prototype.fontType = null;
jeash.text.Font.prototype.jeashMetrics = null;
jeash.text.Font.prototype.jeashGlyphData = null;
jeash.text.Font.prototype.jeashFontScale = null;
jeash.text.Font.prototype.hasGlyph = function() {
	$s.push("jeash.text.Font::hasGlyph");
	var $spos = $s.length;
	$s.pop();
	return false;
	$s.pop();
}
jeash.text.Font.prototype.jeashSetScale = function(scale) {
	$s.push("jeash.text.Font::jeashSetScale");
	var $spos = $s.length;
	this.jeashFontScale = scale / 1024;
	$s.pop();
}
jeash.text.Font.prototype.jeashGetAdvance = function(inGlyph,height) {
	$s.push("jeash.text.Font::jeashGetAdvance");
	var $spos = $s.length;
	var m = this.jeashMetrics[inGlyph];
	if(m == null) this.jeashMetrics[inGlyph] = m = Std["int"](this.jeashGlyphData.get(inGlyph)._width * this.jeashFontScale);
	if(m == null) {
		$s.pop();
		return 0;
	}
	$s.pop();
	return m;
	$s.pop();
}
jeash.text.Font.prototype.jeashRender = function(graphics,inChar,inX,inY,inOutline) {
	$s.push("jeash.text.Font::jeashRender");
	var $spos = $s.length;
	graphics.jeashClearLine();
	var index = 0;
	var glyph = this.jeashGlyphData.get(inChar);
	var commands = glyph.commands;
	var data = glyph.data;
	var _g = 0;
	while(_g < commands.length) {
		var c = commands[_g];
		++_g;
		switch(c) {
		case 1:
			graphics.moveTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		case 2:
			graphics.lineTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		case 3:
			graphics.curveTo(inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale,inX + data[index++] * this.jeashFontScale,inY + data[index++] * this.jeashFontScale);
			break;
		}
	}
	$s.pop();
}
jeash.text.Font.prototype.jeashSetFontName = function(name) {
	$s.push("jeash.text.Font::jeashSetFontName");
	var $spos = $s.length;
	this.fontName = name;
	if(!jeash.text.Font.jeashFontData.exists(this.fontName)) try {
		jeash.text.Font.jeashOfResource(name);
	} catch( e ) {
		$e = [];
		while($s.length >= $spos) $e.unshift($s.pop());
		$s.push($e[0]);
		jeash.Lib.trace("Glyph data for font '" + name + "' does not exist, defaulting to '" + "Bitstream_Vera_Sans" + "'.");
		this.fontName = "Bitstream_Vera_Sans";
	}
	this.jeashGlyphData = haxe.Unserializer.run(jeash.text.Font.jeashFontData.get(this.fontName));
	$s.pop();
	return name;
	$s.pop();
}
jeash.text.Font.prototype.__class__ = jeash.text.Font;
jeash.text.FontType = { __ename__ : ["jeash","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
jeash.text.FontType.EMBEDDED = ["EMBEDDED",0];
jeash.text.FontType.EMBEDDED.toString = $estr;
jeash.text.FontType.EMBEDDED.__enum__ = jeash.text.FontType;
jeash.text.FontType.DEVICE = ["DEVICE",1];
jeash.text.FontType.DEVICE.toString = $estr;
jeash.text.FontType.DEVICE.__enum__ = jeash.text.FontType;
haxe.io.Input = function() { }
haxe.io.Input.__name__ = ["haxe","io","Input"];
haxe.io.Input.prototype.bigEndian = null;
haxe.io.Input.prototype.readByte = function() {
	$s.push("haxe.io.Input::readByte");
	var $spos = $s.length;
	var $tmp = (function($this) {
		var $r;
		throw "Not implemented";
		return $r;
	}(this));
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.readBytes = function(s,pos,len) {
	$s.push("haxe.io.Input::readBytes");
	var $spos = $s.length;
	var k = len;
	var b = s.b;
	if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
	while(k > 0) {
		b[pos] = this.readByte();
		pos++;
		k--;
	}
	$s.pop();
	return len;
	$s.pop();
}
haxe.io.Input.prototype.close = function() {
	$s.push("haxe.io.Input::close");
	var $spos = $s.length;
	$s.pop();
}
haxe.io.Input.prototype.setEndian = function(b) {
	$s.push("haxe.io.Input::setEndian");
	var $spos = $s.length;
	this.bigEndian = b;
	$s.pop();
	return b;
	$s.pop();
}
haxe.io.Input.prototype.readAll = function(bufsize) {
	$s.push("haxe.io.Input::readAll");
	var $spos = $s.length;
	if(bufsize == null) bufsize = 16384;
	var buf = haxe.io.Bytes.alloc(bufsize);
	var total = new haxe.io.BytesBuffer();
	try {
		while(true) {
			var len = this.readBytes(buf,0,bufsize);
			if(len == 0) throw haxe.io.Error.Blocked;
			total.addBytes(buf,0,len);
		}
	} catch( e ) {
		if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
		} else throw(e);
	}
	var $tmp = total.getBytes();
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.readFullBytes = function(s,pos,len) {
	$s.push("haxe.io.Input::readFullBytes");
	var $spos = $s.length;
	while(len > 0) {
		var k = this.readBytes(s,pos,len);
		pos += k;
		len -= k;
	}
	$s.pop();
}
haxe.io.Input.prototype.read = function(nbytes) {
	$s.push("haxe.io.Input::read");
	var $spos = $s.length;
	var s = haxe.io.Bytes.alloc(nbytes);
	var p = 0;
	while(nbytes > 0) {
		var k = this.readBytes(s,p,nbytes);
		if(k == 0) throw haxe.io.Error.Blocked;
		p += k;
		nbytes -= k;
	}
	$s.pop();
	return s;
	$s.pop();
}
haxe.io.Input.prototype.readUntil = function(end) {
	$s.push("haxe.io.Input::readUntil");
	var $spos = $s.length;
	var buf = new StringBuf();
	var last;
	while((last = this.readByte()) != end) buf.b[buf.b.length] = String.fromCharCode(last);
	var $tmp = buf.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.readLine = function() {
	$s.push("haxe.io.Input::readLine");
	var $spos = $s.length;
	var buf = new StringBuf();
	var last;
	var s;
	try {
		while((last = this.readByte()) != 10) buf.b[buf.b.length] = String.fromCharCode(last);
		s = buf.b.join("");
		if(s.charCodeAt(s.length - 1) == 13) s = s.substr(0,-1);
	} catch( e ) {
		if( js.Boot.__instanceof(e,haxe.io.Eof) ) {
			$e = [];
			while($s.length >= $spos) $e.unshift($s.pop());
			$s.push($e[0]);
			s = buf.b.join("");
			if(s.length == 0) throw e;
		} else throw(e);
	}
	$s.pop();
	return s;
	$s.pop();
}
haxe.io.Input.prototype.readFloat = function() {
	$s.push("haxe.io.Input::readFloat");
	var $spos = $s.length;
	throw "Not implemented";
	$s.pop();
	return 0;
	$s.pop();
}
haxe.io.Input.prototype.readDouble = function() {
	$s.push("haxe.io.Input::readDouble");
	var $spos = $s.length;
	throw "Not implemented";
	$s.pop();
	return 0;
	$s.pop();
}
haxe.io.Input.prototype.readInt8 = function() {
	$s.push("haxe.io.Input::readInt8");
	var $spos = $s.length;
	var n = this.readByte();
	if(n >= 128) {
		var $tmp = n - 256;
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return n;
	$s.pop();
}
haxe.io.Input.prototype.readInt16 = function() {
	$s.push("haxe.io.Input::readInt16");
	var $spos = $s.length;
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	if((n & 32768) != 0) {
		var $tmp = n - 65536;
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return n;
	$s.pop();
}
haxe.io.Input.prototype.readUInt16 = function() {
	$s.push("haxe.io.Input::readUInt16");
	var $spos = $s.length;
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var $tmp = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.readInt24 = function() {
	$s.push("haxe.io.Input::readInt24");
	var $spos = $s.length;
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var n = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	if((n & 8388608) != 0) {
		var $tmp = n - 16777216;
		$s.pop();
		return $tmp;
	}
	$s.pop();
	return n;
	$s.pop();
}
haxe.io.Input.prototype.readUInt24 = function() {
	$s.push("haxe.io.Input::readUInt24");
	var $spos = $s.length;
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var $tmp = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.readInt31 = function() {
	$s.push("haxe.io.Input::readInt31");
	var $spos = $s.length;
	var ch1, ch2, ch3, ch4;
	if(this.bigEndian) {
		ch4 = this.readByte();
		ch3 = this.readByte();
		ch2 = this.readByte();
		ch1 = this.readByte();
	} else {
		ch1 = this.readByte();
		ch2 = this.readByte();
		ch3 = this.readByte();
		ch4 = this.readByte();
	}
	if((ch4 & 128) == 0 != ((ch4 & 64) == 0)) throw haxe.io.Error.Overflow;
	var $tmp = ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.readUInt30 = function() {
	$s.push("haxe.io.Input::readUInt30");
	var $spos = $s.length;
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	if((this.bigEndian?ch1:ch4) >= 64) throw haxe.io.Error.Overflow;
	var $tmp = this.bigEndian?ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24:ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.readInt32 = function() {
	$s.push("haxe.io.Input::readInt32");
	var $spos = $s.length;
	var ch1 = this.readByte();
	var ch2 = this.readByte();
	var ch3 = this.readByte();
	var ch4 = this.readByte();
	var $tmp = this.bigEndian?(ch1 << 8 | ch2) << 16 | (ch3 << 8 | ch4):(ch4 << 8 | ch3) << 16 | (ch2 << 8 | ch1);
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.readString = function(len) {
	$s.push("haxe.io.Input::readString");
	var $spos = $s.length;
	var b = haxe.io.Bytes.alloc(len);
	this.readFullBytes(b,0,len);
	var $tmp = b.toString();
	$s.pop();
	return $tmp;
	$s.pop();
}
haxe.io.Input.prototype.__class__ = haxe.io.Input;
jeash.display.GraphicsPathWinding = { __ename__ : ["jeash","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
jeash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
jeash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
jeash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = jeash.display.GraphicsPathWinding;
jeash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
jeash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
jeash.display.GraphicsPathWinding.NON_ZERO.__enum__ = jeash.display.GraphicsPathWinding;
Xml = function(p) {
	$s.push("Xml::new");
	var $spos = $s.length;
	$s.pop();
}
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	$s.push("Xml::parse");
	var $spos = $s.length;
	var rules = [Xml.enode,Xml.epcdata,Xml.eend,Xml.ecdata,Xml.edoctype,Xml.ecomment,Xml.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(Xml.eattribute.match(str)) {
							x.set(Xml.eattribute.matched(1),Xml.eattribute.matched(3));
							str = Xml.eattribute.matchedRight();
						}
						if(!Xml.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(Xml.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = Xml.eclose.matchedRight();
						break;
					case 1:
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
						break;
					case 2:
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						current = stack.pop();
						str = r.matchedRight();
						break;
					case 3:
						str = r.matchedRight();
						if(!Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = Xml.ecdata_end.matchedRight();
						break;
					case 4:
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!Xml.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = Xml.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = Xml.edoctype_elt.matchedRight();
								switch(Xml.edoctype_elt.matched(0)) {
								case "[":
									count++;
									break;
								case "]":
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
									break;
								default:
									if(count == 0) throw "__break__";
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
						break;
					case 5:
						if(!Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = Xml.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(4,p.pos + p.len - 7));
						current.addChild(x);
						str = Xml.ecomment_end.matchedRight();
						break;
					case 6:
						var prolog = r.matched(0);
						var x = Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
						break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw "Xml parse error : Unexpected " + str.substr(0,10) + "..."; else throw "Xml parse error : Unexpected " + str;
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	$s.pop();
	return current;
	$s.pop();
}
Xml.createElement = function(name) {
	$s.push("Xml::createElement");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	$s.pop();
	return r;
	$s.pop();
}
Xml.createPCData = function(data) {
	$s.push("Xml::createPCData");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	$s.pop();
	return r;
	$s.pop();
}
Xml.createCData = function(data) {
	$s.push("Xml::createCData");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	$s.pop();
	return r;
	$s.pop();
}
Xml.createComment = function(data) {
	$s.push("Xml::createComment");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	$s.pop();
	return r;
	$s.pop();
}
Xml.createDocType = function(data) {
	$s.push("Xml::createDocType");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	$s.pop();
	return r;
	$s.pop();
}
Xml.createProlog = function(data) {
	$s.push("Xml::createProlog");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	$s.pop();
	return r;
	$s.pop();
}
Xml.createDocument = function() {
	$s.push("Xml::createDocument");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	$s.pop();
	return r;
	$s.pop();
}
Xml.prototype.nodeType = null;
Xml.prototype.nodeName = null;
Xml.prototype.nodeValue = null;
Xml.prototype.parent = null;
Xml.prototype._nodeName = null;
Xml.prototype._nodeValue = null;
Xml.prototype._attributes = null;
Xml.prototype._children = null;
Xml.prototype._parent = null;
Xml.prototype.getNodeName = function() {
	$s.push("Xml::getNodeName");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	var $tmp = this._nodeName;
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.setNodeName = function(n) {
	$s.push("Xml::setNodeName");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	var $tmp = this._nodeName = n;
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.getNodeValue = function() {
	$s.push("Xml::getNodeValue");
	var $spos = $s.length;
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	var $tmp = this._nodeValue;
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.setNodeValue = function(v) {
	$s.push("Xml::setNodeValue");
	var $spos = $s.length;
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	var $tmp = this._nodeValue = v;
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.getParent = function() {
	$s.push("Xml::getParent");
	var $spos = $s.length;
	var $tmp = this._parent;
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.get = function(att) {
	$s.push("Xml::get");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	var $tmp = this._attributes.get(att);
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.set = function(att,value) {
	$s.push("Xml::set");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
	$s.pop();
}
Xml.prototype.remove = function(att) {
	$s.push("Xml::remove");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
	$s.pop();
}
Xml.prototype.exists = function(att) {
	$s.push("Xml::exists");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	var $tmp = this._attributes.exists(att);
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.attributes = function() {
	$s.push("Xml::attributes");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	var $tmp = this._attributes.keys();
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.iterator = function() {
	$s.push("Xml::iterator");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var $tmp = { cur : 0, x : this._children, hasNext : function() {
		$s.push("Xml::iterator@281");
		var $spos = $s.length;
		var $tmp = this.cur < this.x.length;
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("Xml::iterator@284");
		var $spos = $s.length;
		var $tmp = this.x[this.cur++];
		$s.pop();
		return $tmp;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.elements = function() {
	$s.push("Xml::elements");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var $tmp = { cur : 0, x : this._children, hasNext : function() {
		$s.push("Xml::elements@295");
		var $spos = $s.length;
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			if(this.x[k].nodeType == Xml.Element) break;
			k += 1;
		}
		this.cur = k;
		var $tmp = k < l;
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("Xml::elements@306");
		var $spos = $s.length;
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k += 1;
			if(n.nodeType == Xml.Element) {
				this.cur = k;
				$s.pop();
				return n;
			}
		}
		$s.pop();
		return null;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.elementsNamed = function(name) {
	$s.push("Xml::elementsNamed");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var $tmp = { cur : 0, x : this._children, hasNext : function() {
		$s.push("Xml::elementsNamed@327");
		var $spos = $s.length;
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			if(n.nodeType == Xml.Element && n._nodeName == name) break;
			k++;
		}
		this.cur = k;
		var $tmp = k < l;
		$s.pop();
		return $tmp;
		$s.pop();
	}, next : function() {
		$s.push("Xml::elementsNamed@339");
		var $spos = $s.length;
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k++;
			if(n.nodeType == Xml.Element && n._nodeName == name) {
				this.cur = k;
				$s.pop();
				return n;
			}
		}
		$s.pop();
		return null;
		$s.pop();
	}};
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.firstChild = function() {
	$s.push("Xml::firstChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var $tmp = this._children[0];
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.firstElement = function() {
	$s.push("Xml::firstElement");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) {
			$s.pop();
			return n;
		}
		cur++;
	}
	$s.pop();
	return null;
	$s.pop();
}
Xml.prototype.addChild = function(x) {
	$s.push("Xml::addChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
	$s.pop();
}
Xml.prototype.removeChild = function(x) {
	$s.push("Xml::removeChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	$s.pop();
	return b;
	$s.pop();
}
Xml.prototype.insertChild = function(x,pos) {
	$s.push("Xml::insertChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
	$s.pop();
}
Xml.prototype.toString = function() {
	$s.push("Xml::toString");
	var $spos = $s.length;
	if(this.nodeType == Xml.PCData) {
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.CData) {
		var $tmp = "<![CDATA[" + this._nodeValue + "]]>";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.Comment) {
		var $tmp = "<!--" + this._nodeValue + "-->";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.DocType) {
		var $tmp = "<!DOCTYPE " + this._nodeValue + ">";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.Prolog) {
		var $tmp = "<?" + this._nodeValue + "?>";
		$s.pop();
		return $tmp;
	}
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "<" == null?"null":"<";
		s.add(this._nodeName);
		var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			s.b[s.b.length] = " " == null?"null":" ";
			s.b[s.b.length] = k == null?"null":k;
			s.b[s.b.length] = "=\"" == null?"null":"=\"";
			s.add(this._attributes.get(k));
			s.b[s.b.length] = "\"" == null?"null":"\"";
		}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>" == null?"null":"/>";
			var $tmp = s.b.join("");
			$s.pop();
			return $tmp;
		}
		s.b[s.b.length] = ">" == null?"null":">";
	}
	var $it1 = this.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		s.add(x.toString());
	}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</" == null?"null":"</";
		s.add(this._nodeName);
		s.b[s.b.length] = ">" == null?"null":">";
	}
	var $tmp = s.b.join("");
	$s.pop();
	return $tmp;
	$s.pop();
}
Xml.prototype.__class__ = Xml;
jeash.display.StageDisplayState = { __ename__ : ["jeash","display","StageDisplayState"], __constructs__ : ["FULL_SCREEN","NORMAL"] }
jeash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
jeash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
jeash.display.StageDisplayState.FULL_SCREEN.__enum__ = jeash.display.StageDisplayState;
jeash.display.StageDisplayState.NORMAL = ["NORMAL",1];
jeash.display.StageDisplayState.NORMAL.toString = $estr;
jeash.display.StageDisplayState.NORMAL.__enum__ = jeash.display.StageDisplayState;
jeash.display.GraphicsFillType = { __ename__ : ["jeash","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
jeash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
jeash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
jeash.display.GraphicsFillType.SOLID_FILL.__enum__ = jeash.display.GraphicsFillType;
jeash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
jeash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
jeash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = jeash.display.GraphicsFillType;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
haxe.Resource.content = [];
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var stack = $s.copy();
		var f = js.Lib.onerror;
		$s.splice(0,$s.length);
		if( f == null ) {
			var i = stack.length;
			var s = "";
			while( --i >= 0 )
				s += "Called from "+stack[i]+"\n";
			alert(msg+"\n\n"+s);
			return false;
		}
		return f(msg,stack);
	}
}
{
	var d = Date;
	d.now = function() {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var $tmp = new Date();
		$s.pop();
		return $tmp;
		$s.pop();
	};
	d.fromTime = function(t) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var d1 = new Date();
		d1["setTime"](t);
		$s.pop();
		return d1;
		$s.pop();
	};
	d.fromString = function(s) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			$s.pop();
			return d1;
		case 10:
			var k = s.split("-");
			var $tmp = new Date(k[0],k[1] - 1,k[2],0,0,0);
			$s.pop();
			return $tmp;
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			var $tmp = new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
			$s.pop();
			return $tmp;
		default:
			throw "Invalid date format : " + s;
		}
		$s.pop();
	};
	d.prototype["toString"] = function() {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		var $tmp = date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var $tmp = isFinite(i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
	Math.isNaN = function(i) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var $tmp = isNaN(i);
		$s.pop();
		return $tmp;
		$s.pop();
	};
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
if(typeof(haxe_timers) == "undefined") haxe_timers = [];
{
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
jeash.display.Graphics.defaultFontName = "ARIAL.TTF";
jeash.display.Graphics.defaultFontSize = 12;
jeash.display.Graphics.immediateMatrix = null;
jeash.display.Graphics.immediateMask = null;
jeash.display.Graphics.TOP = 0;
jeash.display.Graphics.CENTER = 1;
jeash.display.Graphics.BOTTOM = 2;
jeash.display.Graphics.LEFT = 0;
jeash.display.Graphics.RIGHT = 2;
jeash.display.Graphics.RADIAL = 1;
jeash.display.Graphics.SPREAD_REPEAT = 2;
jeash.display.Graphics.SPREAD_REFLECT = 4;
jeash.display.Graphics.EDGE_MASK = 240;
jeash.display.Graphics.EDGE_CLAMP = 0;
jeash.display.Graphics.EDGE_REPEAT = 16;
jeash.display.Graphics.EDGE_UNCHECKED = 32;
jeash.display.Graphics.EDGE_REPEAT_POW2 = 48;
jeash.display.Graphics.END_NONE = 0;
jeash.display.Graphics.END_ROUND = 256;
jeash.display.Graphics.END_SQUARE = 512;
jeash.display.Graphics.END_MASK = 768;
jeash.display.Graphics.END_SHIFT = 8;
jeash.display.Graphics.CORNER_ROUND = 0;
jeash.display.Graphics.CORNER_MITER = 4096;
jeash.display.Graphics.CORNER_BEVEL = 8192;
jeash.display.Graphics.CORNER_MASK = 12288;
jeash.display.Graphics.CORNER_SHIFT = 12;
jeash.display.Graphics.PIXEL_HINTING = 16384;
jeash.display.Graphics.BMP_REPEAT = 16;
jeash.display.Graphics.BMP_SMOOTH = 65536;
jeash.display.Graphics.SCALE_NONE = 0;
jeash.display.Graphics.SCALE_VERTICAL = 1;
jeash.display.Graphics.SCALE_HORIZONTAL = 2;
jeash.display.Graphics.SCALE_NORMAL = 3;
jeash.display.Graphics.MOVE = 0;
jeash.display.Graphics.LINE = 1;
jeash.display.Graphics.CURVE = 2;
jeash.display.Graphics.BLEND_ADD = 0;
jeash.display.Graphics.BLEND_ALPHA = 1;
jeash.display.Graphics.BLEND_DARKEN = 2;
jeash.display.Graphics.BLEND_DIFFERENCE = 3;
jeash.display.Graphics.BLEND_ERASE = 4;
jeash.display.Graphics.BLEND_HARDLIGHT = 5;
jeash.display.Graphics.BLEND_INVERT = 6;
jeash.display.Graphics.BLEND_LAYER = 7;
jeash.display.Graphics.BLEND_LIGHTEN = 8;
jeash.display.Graphics.BLEND_MULTIPLY = 9;
jeash.display.Graphics.BLEND_NORMAL = 10;
jeash.display.Graphics.BLEND_OVERLAY = 11;
jeash.display.Graphics.BLEND_SCREEN = 12;
jeash.display.Graphics.BLEND_SUBTRACT = 13;
jeash.display.Graphics.BLEND_SHADER = 14;
jeash.display.Graphics.JEASH_SIZING_WARM_UP = 10;
jeash.display.Graphics.JEASH_MAX_DIMENSION = 5000;
jeash.errors.Error.DEFAULT_TO_STRING = "Error";
jeash.display.DisplayObject.mNameID = 0;
jeash.events.Event.ACTIVATE = "activate";
jeash.events.Event.ADDED = "added";
jeash.events.Event.ADDED_TO_STAGE = "addedToStage";
jeash.events.Event.CANCEL = "cancel";
jeash.events.Event.CHANGE = "change";
jeash.events.Event.CLOSE = "close";
jeash.events.Event.COMPLETE = "complete";
jeash.events.Event.CONNECT = "connect";
jeash.events.Event.DEACTIVATE = "deactivate";
jeash.events.Event.ENTER_FRAME = "enterFrame";
jeash.events.Event.ID3 = "id3";
jeash.events.Event.INIT = "init";
jeash.events.Event.MOUSE_LEAVE = "mouseLeave";
jeash.events.Event.OPEN = "open";
jeash.events.Event.REMOVED = "removed";
jeash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
jeash.events.Event.RENDER = "render";
jeash.events.Event.RESIZE = "resize";
jeash.events.Event.SCROLL = "scroll";
jeash.events.Event.SELECT = "select";
jeash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
jeash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
jeash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
jeash.events.Event.UNLOAD = "unload";
jeash.events.Event.SOUND_COMPLETE = "soundComplete";
jeash.events.MouseEvent.CLICK = "click";
jeash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
jeash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
jeash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
jeash.events.MouseEvent.MOUSE_OUT = "mouseOut";
jeash.events.MouseEvent.MOUSE_OVER = "mouseOver";
jeash.events.MouseEvent.MOUSE_UP = "mouseUp";
jeash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
jeash.events.MouseEvent.ROLL_OUT = "rollOut";
jeash.events.MouseEvent.ROLL_OVER = "rollOver";
jeash.display.BitmapDataChannel.ALPHA = 8;
jeash.display.BitmapDataChannel.BLUE = 4;
jeash.display.BitmapDataChannel.GREEN = 2;
jeash.display.BitmapDataChannel.RED = 1;
js.Lib.onerror = null;
jeash.events.EventPhase.CAPTURING_PHASE = 0;
jeash.events.EventPhase.AT_TARGET = 1;
jeash.events.EventPhase.BUBBLING_PHASE = 2;
jeash.text.TextFieldType.DYNAMIC = "DYNAMIC";
jeash.text.TextFieldType.INPUT = "INPUT";
jeash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
jeash.text.TextField.sSelectionOwner = null;
jeash.text.FontInstance.mSolidFonts = new Hash();
jeash.events.Listener.sIDs = 1;
jeash.display.StageQuality.BEST = "best";
jeash.display.StageQuality.HIGH = "high";
jeash.display.StageQuality.MEDIUM = "medium";
jeash.display.StageQuality.LOW = "low";
jeash.events.KeyboardEvent.KEY_DOWN = "KEY_DOWN";
jeash.events.KeyboardEvent.KEY_UP = "KEY_UP";
jeash.events.FocusEvent.FOCUS_IN = "FOCUS_IN";
jeash.events.FocusEvent.FOCUS_OUT = "FOCUS_OUT";
jeash.events.FocusEvent.KEY_FOCUS_CHANGE = "KEY_FOCUS_CHANGE";
jeash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "MOUSE_FOCUS_CHANGE";
jeash.ui.Keyboard.KEY_0 = 48;
jeash.ui.Keyboard.KEY_1 = 49;
jeash.ui.Keyboard.KEY_2 = 50;
jeash.ui.Keyboard.KEY_3 = 51;
jeash.ui.Keyboard.KEY_4 = 52;
jeash.ui.Keyboard.KEY_5 = 53;
jeash.ui.Keyboard.KEY_6 = 54;
jeash.ui.Keyboard.KEY_7 = 55;
jeash.ui.Keyboard.KEY_8 = 56;
jeash.ui.Keyboard.KEY_9 = 57;
jeash.ui.Keyboard.A = 65;
jeash.ui.Keyboard.B = 66;
jeash.ui.Keyboard.C = 67;
jeash.ui.Keyboard.D = 68;
jeash.ui.Keyboard.E = 69;
jeash.ui.Keyboard.F = 70;
jeash.ui.Keyboard.G = 71;
jeash.ui.Keyboard.H = 72;
jeash.ui.Keyboard.I = 73;
jeash.ui.Keyboard.J = 74;
jeash.ui.Keyboard.K = 75;
jeash.ui.Keyboard.L = 76;
jeash.ui.Keyboard.M = 77;
jeash.ui.Keyboard.N = 78;
jeash.ui.Keyboard.O = 79;
jeash.ui.Keyboard.P = 80;
jeash.ui.Keyboard.Q = 81;
jeash.ui.Keyboard.R = 82;
jeash.ui.Keyboard.S = 83;
jeash.ui.Keyboard.T = 84;
jeash.ui.Keyboard.U = 85;
jeash.ui.Keyboard.V = 86;
jeash.ui.Keyboard.W = 87;
jeash.ui.Keyboard.X = 88;
jeash.ui.Keyboard.Y = 89;
jeash.ui.Keyboard.Z = 90;
jeash.ui.Keyboard.NUMPAD_0 = 96;
jeash.ui.Keyboard.NUMPAD_1 = 97;
jeash.ui.Keyboard.NUMPAD_2 = 98;
jeash.ui.Keyboard.NUMPAD_3 = 99;
jeash.ui.Keyboard.NUMPAD_4 = 100;
jeash.ui.Keyboard.NUMPAD_5 = 101;
jeash.ui.Keyboard.NUMPAD_6 = 102;
jeash.ui.Keyboard.NUMPAD_7 = 103;
jeash.ui.Keyboard.NUMPAD_8 = 104;
jeash.ui.Keyboard.NUMPAD_9 = 105;
jeash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
jeash.ui.Keyboard.NUMPAD_ADD = 107;
jeash.ui.Keyboard.NUMPAD_ENTER = 108;
jeash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
jeash.ui.Keyboard.NUMPAD_DECIMAL = 110;
jeash.ui.Keyboard.NUMPAD_DIVIDE = 111;
jeash.ui.Keyboard.F1 = 112;
jeash.ui.Keyboard.F2 = 113;
jeash.ui.Keyboard.F3 = 114;
jeash.ui.Keyboard.F4 = 115;
jeash.ui.Keyboard.F5 = 116;
jeash.ui.Keyboard.F6 = 117;
jeash.ui.Keyboard.F7 = 118;
jeash.ui.Keyboard.F8 = 119;
jeash.ui.Keyboard.F9 = 120;
jeash.ui.Keyboard.F10 = 121;
jeash.ui.Keyboard.F11 = 122;
jeash.ui.Keyboard.F12 = 123;
jeash.ui.Keyboard.F13 = 124;
jeash.ui.Keyboard.F14 = 125;
jeash.ui.Keyboard.F15 = 126;
jeash.ui.Keyboard.BACKSPACE = 8;
jeash.ui.Keyboard.TAB = 9;
jeash.ui.Keyboard.ENTER = 13;
jeash.ui.Keyboard.SHIFT = 16;
jeash.ui.Keyboard.CONTROL = 17;
jeash.ui.Keyboard.CAPS_LOCK = 18;
jeash.ui.Keyboard.ESCAPE = 27;
jeash.ui.Keyboard.SPACE = 32;
jeash.ui.Keyboard.PAGE_UP = 33;
jeash.ui.Keyboard.PAGE_DOWN = 34;
jeash.ui.Keyboard.END = 35;
jeash.ui.Keyboard.HOME = 36;
jeash.ui.Keyboard.LEFT = 37;
jeash.ui.Keyboard.RIGHT = 38;
jeash.ui.Keyboard.UP = 39;
jeash.ui.Keyboard.DOWN = 40;
jeash.ui.Keyboard.INSERT = 45;
jeash.ui.Keyboard.DELETE = 46;
jeash.ui.Keyboard.NUMLOCK = 144;
jeash.ui.Keyboard.BREAK = 19;
jeash.ui.Keyboard.DOM_VK_CANCEL = 3;
jeash.ui.Keyboard.DOM_VK_HELP = 6;
jeash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
jeash.ui.Keyboard.DOM_VK_TAB = 9;
jeash.ui.Keyboard.DOM_VK_CLEAR = 12;
jeash.ui.Keyboard.DOM_VK_RETURN = 13;
jeash.ui.Keyboard.DOM_VK_ENTER = 14;
jeash.ui.Keyboard.DOM_VK_SHIFT = 16;
jeash.ui.Keyboard.DOM_VK_CONTROL = 17;
jeash.ui.Keyboard.DOM_VK_ALT = 18;
jeash.ui.Keyboard.DOM_VK_PAUSE = 19;
jeash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
jeash.ui.Keyboard.DOM_VK_ESCAPE = 27;
jeash.ui.Keyboard.DOM_VK_SPACE = 32;
jeash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
jeash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
jeash.ui.Keyboard.DOM_VK_END = 35;
jeash.ui.Keyboard.DOM_VK_HOME = 36;
jeash.ui.Keyboard.DOM_VK_LEFT = 37;
jeash.ui.Keyboard.DOM_VK_UP = 38;
jeash.ui.Keyboard.DOM_VK_RIGHT = 39;
jeash.ui.Keyboard.DOM_VK_DOWN = 40;
jeash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
jeash.ui.Keyboard.DOM_VK_INSERT = 45;
jeash.ui.Keyboard.DOM_VK_DELETE = 46;
jeash.ui.Keyboard.DOM_VK_0 = 48;
jeash.ui.Keyboard.DOM_VK_1 = 49;
jeash.ui.Keyboard.DOM_VK_2 = 50;
jeash.ui.Keyboard.DOM_VK_3 = 51;
jeash.ui.Keyboard.DOM_VK_4 = 52;
jeash.ui.Keyboard.DOM_VK_5 = 53;
jeash.ui.Keyboard.DOM_VK_6 = 54;
jeash.ui.Keyboard.DOM_VK_7 = 55;
jeash.ui.Keyboard.DOM_VK_8 = 56;
jeash.ui.Keyboard.DOM_VK_9 = 57;
jeash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
jeash.ui.Keyboard.DOM_VK_EQUALS = 61;
jeash.ui.Keyboard.DOM_VK_A = 65;
jeash.ui.Keyboard.DOM_VK_B = 66;
jeash.ui.Keyboard.DOM_VK_C = 67;
jeash.ui.Keyboard.DOM_VK_D = 68;
jeash.ui.Keyboard.DOM_VK_E = 69;
jeash.ui.Keyboard.DOM_VK_F = 70;
jeash.ui.Keyboard.DOM_VK_G = 71;
jeash.ui.Keyboard.DOM_VK_H = 72;
jeash.ui.Keyboard.DOM_VK_I = 73;
jeash.ui.Keyboard.DOM_VK_J = 74;
jeash.ui.Keyboard.DOM_VK_K = 75;
jeash.ui.Keyboard.DOM_VK_L = 76;
jeash.ui.Keyboard.DOM_VK_M = 77;
jeash.ui.Keyboard.DOM_VK_N = 78;
jeash.ui.Keyboard.DOM_VK_O = 79;
jeash.ui.Keyboard.DOM_VK_P = 80;
jeash.ui.Keyboard.DOM_VK_Q = 81;
jeash.ui.Keyboard.DOM_VK_R = 82;
jeash.ui.Keyboard.DOM_VK_S = 83;
jeash.ui.Keyboard.DOM_VK_T = 84;
jeash.ui.Keyboard.DOM_VK_U = 85;
jeash.ui.Keyboard.DOM_VK_V = 86;
jeash.ui.Keyboard.DOM_VK_W = 87;
jeash.ui.Keyboard.DOM_VK_X = 88;
jeash.ui.Keyboard.DOM_VK_Y = 89;
jeash.ui.Keyboard.DOM_VK_Z = 90;
jeash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
jeash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
jeash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
jeash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
jeash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
jeash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
jeash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
jeash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
jeash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
jeash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
jeash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
jeash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
jeash.ui.Keyboard.DOM_VK_ADD = 107;
jeash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
jeash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
jeash.ui.Keyboard.DOM_VK_DECIMAL = 110;
jeash.ui.Keyboard.DOM_VK_DIVIDE = 111;
jeash.ui.Keyboard.DOM_VK_F1 = 112;
jeash.ui.Keyboard.DOM_VK_F2 = 113;
jeash.ui.Keyboard.DOM_VK_F3 = 114;
jeash.ui.Keyboard.DOM_VK_F4 = 115;
jeash.ui.Keyboard.DOM_VK_F5 = 116;
jeash.ui.Keyboard.DOM_VK_F6 = 117;
jeash.ui.Keyboard.DOM_VK_F7 = 118;
jeash.ui.Keyboard.DOM_VK_F8 = 119;
jeash.ui.Keyboard.DOM_VK_F9 = 120;
jeash.ui.Keyboard.DOM_VK_F10 = 121;
jeash.ui.Keyboard.DOM_VK_F11 = 122;
jeash.ui.Keyboard.DOM_VK_F12 = 123;
jeash.ui.Keyboard.DOM_VK_F13 = 124;
jeash.ui.Keyboard.DOM_VK_F14 = 125;
jeash.ui.Keyboard.DOM_VK_F15 = 126;
jeash.ui.Keyboard.DOM_VK_F16 = 127;
jeash.ui.Keyboard.DOM_VK_F17 = 128;
jeash.ui.Keyboard.DOM_VK_F18 = 129;
jeash.ui.Keyboard.DOM_VK_F19 = 130;
jeash.ui.Keyboard.DOM_VK_F20 = 131;
jeash.ui.Keyboard.DOM_VK_F21 = 132;
jeash.ui.Keyboard.DOM_VK_F22 = 133;
jeash.ui.Keyboard.DOM_VK_F23 = 134;
jeash.ui.Keyboard.DOM_VK_F24 = 135;
jeash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
jeash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
jeash.ui.Keyboard.DOM_VK_COMMA = 188;
jeash.ui.Keyboard.DOM_VK_PERIOD = 190;
jeash.ui.Keyboard.DOM_VK_SLASH = 191;
jeash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
jeash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
jeash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
jeash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
jeash.ui.Keyboard.DOM_VK_QUOTE = 222;
jeash.ui.Keyboard.DOM_VK_META = 224;
jeash.ui.Keyboard.DOM_VK_KANA = 21;
jeash.ui.Keyboard.DOM_VK_HANGUL = 21;
jeash.ui.Keyboard.DOM_VK_JUNJA = 23;
jeash.ui.Keyboard.DOM_VK_FINAL = 24;
jeash.ui.Keyboard.DOM_VK_HANJA = 25;
jeash.ui.Keyboard.DOM_VK_KANJI = 25;
jeash.ui.Keyboard.DOM_VK_CONVERT = 28;
jeash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
jeash.ui.Keyboard.DOM_VK_ACEPT = 30;
jeash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
jeash.ui.Keyboard.DOM_VK_SELECT = 41;
jeash.ui.Keyboard.DOM_VK_PRINT = 42;
jeash.ui.Keyboard.DOM_VK_EXECUTE = 43;
jeash.ui.Keyboard.DOM_VK_SLEEP = 95;
haxe.xml.Check.blanks = new EReg("^[ \r\n\t]*$","");
jeash.text.TextFieldAutoSize.CENTER = "CENTER";
jeash.text.TextFieldAutoSize.LEFT = "LEFT";
jeash.text.TextFieldAutoSize.NONE = "NONE";
jeash.text.TextFieldAutoSize.RIGHT = "RIGHT";
jeash.Lib.DEFAULT_PRIORITY = ["2d","swf"];
jeash.Lib.mShowCursor = true;
jeash.Lib.mShowFPS = false;
jeash.Lib.mFullscreen = false;
jeash.Lib.mCollectEveryFrame = false;
jeash.Lib.mQuitOnEscape = true;
jeash.Lib.mLastMouse = new jeash.geom.Point();
jeash.Lib.VENDOR_HTML_TAG = "data-";
jeash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","focus","dblclick","click","blur"];
jeash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown"];
jeash.Lib.JEASH_IDENTIFIER = "haxe:jeash";
jeash.Lib.DEFAULT_WIDTH = 500;
jeash.Lib.DEFAULT_HEIGHT = 500;
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
jeash.display.GraphicsPathCommand.LINE_TO = 2;
jeash.display.GraphicsPathCommand.MOVE_TO = 1;
jeash.display.GraphicsPathCommand.CURVE_TO = 3;
jeash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
jeash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
jeash.display.GraphicsPathCommand.NO_OP = 0;
jeash.events.IOErrorEvent.IO_ERROR = "IO_ERROR";
jeash.display.Stage.jeashMouseChanges = [jeash.events.MouseEvent.MOUSE_OUT,jeash.events.MouseEvent.MOUSE_OVER,jeash.events.MouseEvent.ROLL_OUT,jeash.events.MouseEvent.ROLL_OVER];
jeash.display.Stage.DEFAULT_FRAMERATE = 60.0;
jeash.display.Stage.DEFAULT_PROJ_MATRIX = [1.,0,0,0,0,1,0,0,0,0,-1,-1,0,0,0,0];
jeash.text.Font.jeashInit = false;
jeash.text.Font.DEFAULT_FONT_SCALE = 9.0;
jeash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
jeash.text.Font.DEFAULT_CLASS_NAME = "jeash.text.Font";
jeash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
jeash.text.Font.__init = (function($this) {
	var $r;
	jeash.text.Font.jeashFontData = new Hash();
	jeash.text.Font.jeashFontData.set("Bitstream_Vera_Sans",jeash.text.Font.DEFAULT_FONT_DATA);
	$r = jeash.text.Font.jeashInit = true;
	return $r;
}(this));
Xml.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
Xml.ecdata = new EReg("^<!\\[CDATA\\[","i");
Xml.edoctype = new EReg("^<!DOCTYPE ","i");
Xml.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
Xml.epcdata = new EReg("^[^<]+","");
Xml.ecomment = new EReg("^<!--","");
Xml.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
Xml.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
Xml.eclose = new EReg("^[ \r\n\t]*(>|(/>))","");
Xml.ecdata_end = new EReg("\\]\\]>","");
Xml.edoctype_elt = new EReg("[\\[|\\]>]","");
Xml.ecomment_end = new EReg("-->","");
Main.main()