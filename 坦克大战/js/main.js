
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
//数组克隆
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

/**
 * 游戏数据配置
 */

var GameData = {
	gameMaps : [map1,map2,map3,map4,map5,map6,map7,map8,map9,map10,map11,map11,map12,map13,map14,map15,map16,map17,map18,map19,map20,map21],
	level : 0,//当前关卡
	point:[0,12,24],//
	tankSpeed : [2,2,1,2,1,1,1],//每种类型的坦克速度
	tankHP : [1,1,1,1,2,3,1],//tank可受子弹数
	maxTank : 5,//地图可显示最大坦克数
	bullet : [3,5,6,7,8,9],//子弹对应等级速度
	tool : false //地图上显示奖励道具
}
//重新加载游戏数据
 function reload(){
	GameData.gameOver = false;
	GameData.enemys = [];
	GameData.live = 3;
	GameData.enemyCount = 20;
	GameData.score = 0;
}
//下一关
function next(){
	GameData.level++;
	if(GameData.level>=GameData.gameMaps.length){
		GameData.level = 0;
	}
	GameData.enemys = [];
	GameData.enemyCount = 20;
}


/**
 * 游戏显示的对象舞台
 */

var Stage = new PIXI.Application({
	width: 480,
	height: 416,
	backgroundColor: 0x0,
});

Stage._width = Stage.view.width;
Stage._height = Stage.view.height;
Stage._map = map2.clone();


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
//游戏中的物体碰撞检测机制
Stage.hit = function(obj1,obj2){
	if(obj1.name === 'bullet'&&obj2.name === 'bullet'){
		if(Math.abs(obj1._x- obj2._x )<=0&& Math.abs(obj1._y-obj2._y)<=0){
			return true;
		}
		else{
			return false;
		}
	}
	else if(obj1.name === 'bullet'&&obj2.name === 'tank'){
		if(obj1.x>=obj2.x&&obj1.x<=obj2.x+32
			&&obj1.y>=obj2.y&&obj1.y<=obj2.y+32){
				return true;
			}
		else{
			return false;
		}
	}
	else if(obj1.name === 'tank'&&obj2.name === 'bullet'){
		if(obj2.x>=obj1.x&&obj2.x<=obj1.x+32
			&&obj2.y>=obj1.y&&obj2.y<=obj1.y+32){
				return true;
			}
		else{
			return false;
		}
	}
	else if((obj1.name === 'tool'&&obj2.name === 'bullet')||(obj1.name === 'bullet'&&obj2.name === 'tool')){
		return false;
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

//音频播放器
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

//在指定区域加载游戏舞台
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


/**
 * 键盘事件注册
 */

var KeyWord = {
}

window.addEventListener('keydown',function(e){
	//console.log(e)
	e.preventDefault();
	if(KeyWord[e.code] && KeyWord[e.code] instanceof Function){
		KeyWord[e.code]();
	}
});




function isPC(){
	var sUserAgent = navigator.userAgent;
	if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 ||
	   sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {
		return false;
	}
	else{
		return true;
	}
}