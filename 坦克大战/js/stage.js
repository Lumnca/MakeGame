
PIXI.Texture.prototype.setFrame = function (x, y, w, h) {
	let newFrame = this.clone();
	newFrame.frame = new PIXI.Rectangle(x, y, w, h);
	return newFrame;
}
//生成随机数a~b-1
Math.rand = function(a,b){
	return Math.floor(Math.random()*(b-a)+a);
}

//数组是否包含
Array.prototype.contain = function(e){
	return this.indexOf(e)!==-1;
}
//数组移除元素
Array.prototype.remove = function(e){
	let i = this.indexOf(e);
	if(i>=0){
		this.splice(i,1);
	}
}

Array.prototype.clone = function(){
	let newArr = [];
	this.forEach((arr,i)=>{
		newArr.push([]);
		arr.forEach(e=>{
			newArr[i].push(e);
		})
	})
	return newArr;
}



const GameData = {
	gameOver : false,
	gameMaps : [map1,map2,map3,map4,map5,map6],
	level : 0
}




var Stage = new PIXI.Application({
	width: 512,
	height: 416,
	backgroundColor: 0x0,
});

Stage._width = Stage.view.width;
Stage._height = Stage.view.height;
Stage._map = map1.clone();

Stage.addChild = function(e){
	Stage.stage.addChild(e);
}

Stage.scene = function(scene){
	Stage.clear();
	Stage._scene = new scene();
	Stage.addChild(Stage._scene);
}
Stage.clear = function(){
	Stage.stage.removeChildren(0);
}
Stage.canPassTiles = [0,3,5];
Stage.canHitTiles = [1];
Stage.canPass = function(i,j){
	if(i<0||j<0) return false;
	if(i>=Stage._map.length-1||j>=Stage._map[0].length-1) return false;
	if( Stage.canPassTiles.contain(Stage._map[i][j])&& Stage.canPassTiles.contain(Stage._map[i+1][j])&&
	Stage.canPassTiles.contain(Stage._map[i][j+1])&& Stage.canPassTiles.contain(Stage._map[i+1][j+1])){
			return true;
		}
	else{
		return false;
	}
}
Stage.hit = function(obj1,obj2){
	if(obj1.name === 'bullet'&&obj2.name === 'bullet'){
		if(Math.abs(obj1._x- obj2._x )<=0&& Math.abs(obj1._y-obj2._y)<=0){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		if(Math.abs(obj1._x- obj2._x )<=1&& Math.abs(obj1._y-obj2._y)<=1){
			return true;
		}
		else{
			return false;
		}
	}
}

Stage.video = document.getElementsByTagName('video')[0];

Stage.playVideo = function(url){
	Stage.video.src = url;
	Stage.video.play();
}



function update(sprite){
	if(sprite.update && !sprite.default)sprite.update();
	if(sprite.children){
		sprite.children.forEach(e => {
			update(e);
		});
	}

}

Stage.ticker.add(function(){
	update(Stage.stage);
});

document.getElementById('main').appendChild(Stage.view);


const Sprite = PIXI.Sprite;
const Texture = PIXI.Texture;
const Graphics = PIXI.Graphics;
const DIR_TOP = 0;
const DIR_DOWN = 1;
const DIR_LEFT = 2;
const DIR_RIGHT = 3;

Stage.reDir = function(dir){
	let rdir = -1;
	switch(dir){
		case DIR_DOWN:rdir=DIR_TOP;break;
		case DIR_LEFT:rdir=DIR_RIGHT;break;
		case DIR_RIGHT:rdir=DIR_LEFT;break;
		case DIR_TOP:rdir=DIR_DOWN;break;
	}
	return rdir;
}



var KeyWord = {
}

window.addEventListener('keydown',function(e){
	//console.log(e)
	e.preventDefault();
	if(KeyWord[e.code] && KeyWord[e.code] instanceof Function){
		KeyWord[e.code]();
	}
});






/*
var Stage = function(context,l){
	this.ctx = context;
	this.ctx.fillStyle = "#7f7f7f";
	this.drawHeigth = 15;
	this.level = l;
	this.temp = 0;
	this.dir = 1; //中间切换的方向，1：合上，2：展开
	this.isReady = false;//标识地图是否已经画好
	this.levelNum = new Num(context);
	
	this.init = function(level){
		this.dir = 1;
		this.isReady = false;
		this.level = level;
		this.temp = 0;
	};
	
	this.draw = function(){
		if(this.dir == 1){
			
			//temp = 15*15 灰色屏幕已经画完
			if(this.temp == 225){
				//78,14为STAGE字样在图片资源中的宽和高，194,208为canvas中的位置
				this.ctx.drawImage(RESOURCE_IMAGE, POS["stageLevel"][0], POS["stageLevel"][1], 78, 14, 194, 208, 78, 14);
				//14为数字的宽和高，308, 208为canvas中的位置
				this.levelNum.draw(this.level,308, 208);
				//this.ctx.drawImage(RESOURCE_IMAGE,POS["num"][0]+this.level*14,POS["num"][1],14, 14,308, 208,14, 14);
				//绘制地图,调用main里面的方法
				initMap();
				
			}else if(this.temp == 225 + 600){
				//600即调用了600/15次，主要用来停顿
				this.temp = 225;
				this.dir = -1;
				START_AUDIO.play(); 
			}else{
				this.ctx.fillRect(0, this.temp, 512, this.drawHeigth);
				this.ctx.fillRect(0, 448 - this.temp - this.drawHeigth , 512, this.drawHeigth);
			}
		}else{
			if(this.temp >= 0){
				this.ctx.clearRect(0, this.temp , 512, this.drawHeigth);
				this.ctx.clearRect(0, 448 - this.temp - this.drawHeigth, 512, this.drawHeigth);
			}else{
				this.isReady = true;
			}
		}
		this.temp += this.drawHeigth * this.dir;
	};
};
*/