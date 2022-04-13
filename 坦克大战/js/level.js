
/**
 * 地图数组一个数组代表16*16的格子
 * 1：水泥墙 2：铁墙 3：草 4：水 5：冰 9：家
 */
var map1 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1],
	[2,2,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,2,2],
	[0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,0,0,0,0,0],
];

var map2 = 
[
	[0,0,0,0,0,0,2,2,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,2,2,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,1,0,0,2,2,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,2,2,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,2,2,1,1,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,2,2,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0],
	[3,3,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,1,1,3,3,1,1,2,2],
	[3,3,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,1,1,3,3,1,1,2,2],
	[3,3,3,3,0,0,0,0,0,0,1,1,0,0,0,0,2,2,0,0,3,3,0,0,0,0],
	[3,3,3,3,0,0,0,0,0,0,1,1,0,0,0,0,2,2,0,0,3,3,0,0,0,0],
	[0,0,1,1,1,1,1,1,3,3,3,3,3,3,2,2,0,0,0,0,3,3,1,1,0,0],
	[0,0,1,1,1,1,1,1,3,3,3,3,3,3,2,2,0,0,0,0,3,3,1,1,0,0],
	[0,0,0,0,0,0,2,2,3,3,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,0,0,0,0,2,2,3,3,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[2,2,1,1,0,0,2,2,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
	[2,2,1,1,0,0,2,2,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,2,2,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,2,2,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,1,9,8,1,0,0,0,1,1,1,1,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,1,8,8,1,0,0,0,1,1,1,1,1,1,0,0],
];
var map3 = 
[
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2],
	[0,0,3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0],
	[3,3,3,3,3,3,3,3,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0],
	[3,3,3,3,3,3,3,3,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0],
	[3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0],
	[3,3,3,3,3,3,3,3,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0],
	[3,3,3,3,3,3,3,3,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0],
	[3,3,3,3,3,3,3,3,0,0,0,0,2,2,2,2,2,2,0,0,0,0,3,3,0,0],
	[0,0,3,3,0,0,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,3,3,0,0],
	[0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3],
	[1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3],
	[1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,3,3,3,3,3,3,3,3],
	[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,3,3,3,3,3,3,3,3],
	[0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,3,3,3,3,3,3,3,3],
	[1,1,0,0,0,0,2,0,0,0,0,0,0,0,1,1,1,1,3,3,3,3,3,3,0,0],
	[1,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0],
	[1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0],
	[1,1,1,1,0,0,2,0,0,0,0,1,1,1,1,0,0,0,3,3,3,3,3,3,0,0],
	[2,2,1,1,1,1,0,0,0,0,0,1,9,8,1,0,0,0,1,1,0,0,0,0,0,0],
	[2,2,1,1,1,1,0,0,0,0,0,1,8,8,1,0,0,0,1,1,0,0,0,0,0,0],
];

var map4 = 
[
	[0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0],
	[0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0],
	[3,3,3,3,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,3,3],
	[3,3,3,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,3,3],
	[3,3,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,2,2],
	[3,3,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
	[2,2,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
	[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
	[0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0],
	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0],
	[4,4,0,0,0,1,0,0,2,0,0,0,2,0,0,0,1,1,1,0,0,0,0,0,0,0],
	[4,4,0,0,0,1,0,0,2,0,0,0,2,0,0,0,1,1,1,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,4,4,4,4],
	[0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,4,4,4,4],
	[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
	[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
	[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
	[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
	[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
	[0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,3,3],
	[0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,3,3],
	[3,3,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,3,3,3,3],
	[3,3,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,3,3,3,3],
	[2,2,3,3,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,3,3,3,3,2,2],
	[2,2,3,3,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,3,3,3,3,2,0],
];

var map5 = 
[
	[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0],
	[2,2,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0],
	[2,2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[2,2,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,4,4,4,4,0,0,4,4],
	[1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,4,4,4,4,0,0,4,4],
	[1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,4,4,4,4,4,0,0,1,1,1,1],
	[0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,4,4,4,4,4,0,0,1,1,1,1],
	[0,0,0,0,1,1,0,0,4,4,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,0,0,0,0,4,4,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0],
	[0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0],
	[4,4,4,4,4,4,0,0,4,4,0,0,2,2,0,0,1,1,0,0,0,2,0,0,0,0],
	[4,4,4,4,4,4,0,0,4,4,0,0,2,2,0,0,1,1,0,0,0,2,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1],
	[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1],
	[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
	[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0],
	[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0],
	[1,1,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,0,0,0,0,0],
];



var map6 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,3,3,3,3,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,3,3,3,3,0,0,0,0,0,0],
	[0,0,1,0,0,2,0,0,1,0,0,0,0,0,0,0,0,1,3,3,1,0,0,1,3,3],
	[0,0,1,0,0,2,0,0,1,0,0,0,0,0,0,0,0,1,3,3,1,0,0,1,3,3],
	[0,0,1,0,0,2,0,0,1,0,0,0,1,1,0,0,0,1,3,3,1,0,0,1,3,3],
	[0,0,1,0,0,2,0,0,1,0,0,0,1,1,0,0,0,1,3,3,1,0,0,1,3,3],
	[0,0,1,1,0,0,0,0,1,1,0,0,2,2,0,0,1,1,3,3,0,0,1,1,3,3],
	[0,0,1,1,0,0,0,0,1,1,0,0,2,2,0,0,1,1,3,3,0,0,1,1,3,3],
	[0,0,0,0,0,0,0,1,2,2,0,0,1,1,0,0,1,1,2,0,0,0,3,3,3,3],
	[0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,2,0,0,0,3,3,3,3],
	[1,1,1,1,1,0,0,0,0,0,3,3,1,1,3,3,0,0,0,0,0,1,1,1,1,1],
	[1,1,1,1,1,0,0,0,0,0,3,3,1,1,3,3,0,0,0,0,0,1,1,1,1,1],
	[0,0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,0],
	[2,2,1,1,1,1,0,0,1,1,3,3,3,3,3,3,1,1,0,1,1,1,1,1,2,2],
	[2,2,1,1,1,1,0,0,0,0,3,3,3,3,3,3,0,0,0,1,1,1,1,1,2,2],
	[2,2,2,2,2,2,0,0,0,0,0,0,3,3,0,0,0,0,0,0,2,2,2,2,2,2],
	[0,0,0,0,0,0,0,0,1,1,0,0,3,3,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,3,3],
	[0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,3,3],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3],
	[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,3,3,3,3,3,3],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,3,3,3,3],
	[0,0,0,0,1,1,0,0,0,0,0,1,8,8,1,0,0,0,0,0,1,1,3,3,3,3],
];

var map7 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,2,0,0,0,0],
	[0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0],
	[0,0,0,0,2,2,0,0,0,0,0,0,3,3,0,0,2,2,2,2,2,2,0,0,0,0],
	[0,0,0,0,2,2,0,0,0,0,0,0,3,3,0,0,0,0,2,2,2,2,0,0,0,0],
	[0,0,2,2,0,0,0,0,0,0,3,3,2,2,0,0,0,0,0,0,2,2,0,0,0,0],
	[0,0,2,2,0,0,0,0,0,0,3,3,2,2,0,0,0,0,0,0,2,2,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,3,2,2,2,2,0,0,0,0,0,0,2,2,2,2,0,0],
	[0,0,0,0,0,0,0,0,3,3,2,2,2,2,0,0,0,0,0,0,0,0,2,2,0,0],
	[0,0,2,2,0,0,3,3,2,2,2,2,2,2,0,0,2,2,0,0,0,0,0,0,0,0],
	[0,0,2,2,0,0,3,3,2,2,2,2,2,2,0,0,2,2,0,0,0,0,0,0,0,0],
	[0,0,0,2,0,0,2,2,2,2,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0],
	[0,0,0,2,0,0,2,2,2,2,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0],
	[2,0,0,0,0,0,0,0,2,2,0,0,2,2,2,2,2,2,0,0,0,0,0,2,0,0],
	[2,0,0,0,0,0,0,0,2,2,0,0,2,2,2,2,2,2,0,0,0,0,0,2,0,0],
	[0,0,0,2,2,2,0,0,0,0,0,0,2,2,2,2,3,3,0,0,0,0,2,2,0,0],
	[0,0,0,2,2,2,0,0,0,0,0,0,2,2,2,2,3,3,0,0,0,0,2,2,0,0],
	[0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,3,0,0,0,0,2,2,2,2,0,0],
	[0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,3,0,0,0,0,2,2,2,2,0,0],
	[0,0,2,2,2,2,2,2,0,0,0,0,3,3,0,0,0,0,2,2,0,0,0,0,0,0],
	[0,0,0,0,0,0,2,2,0,0,0,0,3,3,0,0,0,0,2,2,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,2],
	[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,2,2,2,2],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,0,0,0,0],
	[2,2,2,2,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,0,0,0,0,0],
];


var map8 = 
[
	[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0],
	[3,3,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
	[3,3,1,1,1,1,1,1,0,0,1,1,0,0,2,2,0,0,1,1,1,0,0,0,0,0],
	[3,3,3,3,3,3,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0],
	[3,3,3,3,3,3,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0],
	[3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4],
	[3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4],
	[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
	[0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0],
	[1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,3,3,1,1,0,0,0,0,1,1],
	[1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,3,3,1,1,2,2,2,2,1,1],
	[0,0,0,0,0,0,2,2,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
	[0,0,0,0,0,0,2,2,0,0,2,2,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
	[4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4],
	[4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4],
	[3,3,3,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[3,3,3,3,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
	[3,3,3,3,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0],
	[3,3,3,3,1,1,0,0,1,0,0,0,0,0,0,1,0,0,2,2,1,1,1,1,0,0],
	[3,3,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[3,3,2,2,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,1,1,0,0,0,0,0,0],
];

var map9 = 
[
	[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0],
	[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,2,2,3,3,0,0,0,0],
	[1,1,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,2,2,2,2,0,0,0,1,1],
	[1,1,0,0,0,0,0,0,0,0,0,0,2,2,3,3,0,2,2,2,2,0,0,0,1,1],
	[0,0,0,0,0,0,0,0,3,3,0,2,2,2,2,0,0,0,2,2,3,3,0,0,0,0],
	[0,0,0,0,0,0,2,2,3,3,0,2,2,2,2,0,0,0,0,0,3,3,0,0,0,0],
	[0,0,0,0,0,2,2,2,2,0,0,0,2,2,3,3,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,2,2,2,2,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,2,2,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0],
	[0,0,0,0,0,0,3,3,2,2,3,3,0,0,3,3,2,2,3,3,0,0,0,0,0,0],
	[2,2,1,1,0,0,0,2,2,2,2,0,0,0,0,2,2,2,2,0,0,0,3,3,2,2],
	[2,2,1,1,0,0,0,2,2,2,2,0,0,0,0,2,2,2,2,0,0,0,3,3,2,2],
	[0,0,0,0,0,0,3,3,2,2,3,3,0,0,3,3,2,2,3,3,0,0,0,0,0,0],
	[0,0,0,0,0,0,3,3,0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0],
	[1,1,0,0,0,0,0,2,2,2,2,0,0,0,0,2,2,2,2,0,0,0,0,0,1,1],
	[1,1,0,0,0,0,0,2,2,2,2,0,0,0,0,2,2,2,2,0,0,0,0,0,1,1],
	[1,1,0,0,0,0,3,3,2,2,3,3,0,0,3,3,2,2,3,3,0,0,0,0,1,1],
	[1,1,0,0,0,0,3,3,2,2,3,3,0,0,3,3,0,0,3,3,0,0,0,0,1,1],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0],
	[0,0,0,0,1,1,1,1,0,0,0,1,9,8,1,0,0,0,1,1,1,1,0,0,0,0],
	[0,0,0,0,1,1,1,1,0,0,0,1,8,8,1,0,0,0,1,1,1,1,0,0,0,0],
];


var map10 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
	[0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0],
	[0,1,1,1,0,0,0,0,1,1,0,0,3,3,3,3,0,0,1,1,0,0,0,0,0,1],
	[0,1,0,0,0,0,0,0,1,1,0,0,3,3,3,3,0,0,1,1,0,0,0,0,0,1],
	[1,1,0,0,0,0,0,0,1,1,3,3,3,3,3,3,3,3,1,1,0,0,0,0,0,1],
	[1,1,0,0,0,0,0,0,1,1,3,3,3,3,3,3,3,3,1,1,0,0,0,0,0,1],
	[1,1,0,0,0,0,0,1,1,1,3,3,2,2,2,2,3,3,1,1,1,0,0,0,1,1],
	[1,1,0,0,0,0,0,1,1,1,3,3,2,2,2,2,3,3,1,1,1,0,0,0,1,1],
	[0,1,0,0,0,0,1,1,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1],
	[0,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1],
	[0,0,1,1,1,1,1,1,2,2,2,2,1,1,2,2,2,2,1,1,1,1,1,1,1,0],
	[0,0,1,1,1,1,1,1,2,2,2,2,1,1,2,2,2,2,1,1,1,1,1,1,1,0],
	[0,0,0,0,1,1,1,1,2,2,0,0,1,1,0,0,2,2,1,1,1,1,1,0,0,0],
	[0,0,0,0,1,1,1,1,2,2,0,0,1,1,0,0,2,2,1,1,1,1,1,0,0,0],
	[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
	[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
	[1,1,3,3,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,3,3,1,1],
	[1,1,3,3,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,3,3,1,1],
	[1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1],
	[1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1],
	[0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0],
	[0,0,0,0,3,3,3,3,3,3,0,1,1,1,1,0,3,3,3,3,3,3,3,3,0,0],
	[0,0,0,0,0,0,1,0,0,0,0,1,9,8,1,0,0,0,0,0,1,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,0,0,0,1,8,8,1,0,0,0,0,0,1,0,0,0,0,0],
];

var map11 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,1,1,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,1,1,1,1,0,0,0,0],
	[0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,3,3,3,3,3,3],
	[0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,3,3,3,3,3,3],
	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,3,3,3,3,3,3,3],
	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,3,3,3,3,3,3,3],
	[0,0,0,1,0,0,1,1,1,1,1,1,2,2,1,1,1,1,3,3,3,3,1,1,2,2],
	[0,0,0,1,0,0,1,1,1,1,1,1,2,2,1,1,1,1,3,3,3,3,0,0,2,2],
	[0,0,1,1,1,1,1,1,2,2,0,0,0,0,1,1,0,0,3,3,3,3,0,0,0,1],
	[0,0,0,0,0,0,0,0,2,2,0,0,0,0,1,1,0,0,3,3,3,3,0,0,0,1],
	[0,0,1,1,1,1,1,1,0,0,2,2,3,3,3,3,3,3,3,3,3,3,0,0,0,0],
	[0,0,1,1,1,1,1,1,0,0,2,2,3,3,3,3,3,3,3,3,3,3,0,0,0,0],
	[0,0,0,0,0,0,2,2,0,0,0,0,3,3,3,3,3,3,3,3,3,3,1,1,0,0],
	[0,0,0,0,0,0,2,2,0,0,0,0,3,3,3,3,3,3,3,3,3,3,1,1,0,0],
	[2,2,1,1,0,0,3,3,3,3,3,3,3,3,2,2,3,3,3,3,3,3,1,1,0,0],
	[2,2,1,1,0,0,3,3,3,3,3,3,3,3,2,2,3,3,3,3,3,3,1,1,0,0],
	[0,1,4,4,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,1,1,0,0],
	[0,1,4,4,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,1,1,0,0],
	[0,0,4,4,3,3,3,3,0,0,0,0,0,0,0,0,2,2,1,1,1,1,1,1,0,0],
	[0,0,4,4,3,3,3,3,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
	[0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0],
	[0,0,0,0,3,3,3,3,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0],
	[0,0,0,0,3,3,3,3,0,0,0,1,9,8,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,1,1,3,3,3,3,0,0,0,1,8,8,1,0,0,0,0,0,0,0,0,0,0,0],
];

var map12 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
	[0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
	[0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
	[0,0,4,4,4,4,4,4,4,4,4,4,0,0,1,1,1,0,0,0,0,0,1,1,0,0],
	[0,0,4,4,4,4,4,4,4,4,4,4,0,0,1,1,1,0,0,0,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,4,4,0,0,1,1,0,0,2,2,2,0,1,1,0,0],
	[0,0,0,0,2,2,2,2,2,2,4,4,0,0,1,1,0,0,2,2,2,0,1,1,0,0],
	[1,0,0,0,1,1,1,1,1,1,4,4,4,4,4,4,0,0,4,4,1,1,1,1,0,0],
	[1,1,0,0,1,1,1,1,1,1,4,4,4,4,4,4,0,0,4,4,1,1,1,1,0,0],
	[0,0,0,0,0,0,0,0,2,2,4,4,0,0,0,0,0,0,4,4,2,2,0,0,0,0],
	[0,0,0,0,0,0,0,0,2,2,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0],
	[4,4,4,4,4,4,0,0,4,4,4,4,1,1,1,1,0,0,4,4,0,0,0,0,0,0],
	[4,4,4,4,4,4,0,0,4,4,4,4,1,1,1,1,0,0,4,4,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,0,0,4,4,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,4,4,4,4,4,4,0,0],
	[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0],
	[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,2,2,2,2,0,0,0,0,0,0,1,1,1,1,0,0,0,1],
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1],
	[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1],
	[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,0,0,0,0,0]
];

var map13 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,2,2,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0],
	[0,0,2,2,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1],
	[0,0,2,2,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1],
	[0,0,1,1,0,0,1,0,3,3,0,0,2,2,0,0,3,3,0,1,0,0,2,2,1,1],
	[0,0,1,1,0,0,0,0,3,3,2,2,2,2,2,2,3,3,0,1,0,0,2,2,1,1],
	[0,0,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,2,2,1,1],
	[0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,1,1],
	[1,1,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,1,1],
	[1,1,2,2,0,0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0,0,1,1,1,1],
	[1,1,2,2,0,0,1,0,3,3,2,2,2,2,2,2,3,3,0,1,0,0,1,1,0,0],
	[1,1,2,2,0,0,1,0,3,3,0,0,2,2,0,0,3,3,0,1,0,0,1,1,0,0],
	[1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2,2,0,0],
	[1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,2,2,0,0],
	[1,1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
	[1,1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
	[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2],
	[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2],
	[1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0],
	[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0],
	[1,1,1,1,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,0,0,0,0,0]
];
var map14 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[3,3,3,3,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,3,3,3,3],
	[3,3,3,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,3,3,3,3],
	[3,3,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,3,3],
	[3,3,0,0,0,0,0,1,1,1,3,3,1,1,3,3,1,1,1,0,0,0,0,0,3,3],
	[0,0,0,0,0,0,1,1,1,1,3,3,1,1,3,3,1,1,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,1,3,3,3,3,1,1,3,3,3,3,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,1,3,3,3,3,1,1,3,3,3,3,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
	[3,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,3,3],
	[3,3,0,0,0,0,1,1,1,1,3,3,1,1,3,3,1,1,1,1,0,0,0,0,3,3],
	[3,3,3,3,0,0,0,0,1,1,3,3,1,1,3,3,1,1,0,0,0,0,3,3,3,3],
	[3,3,3,3,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,3,3,3,3],
	[4,4,4,4,4,4,0,0,1,1,1,1,1,1,1,1,1,1,0,0,4,4,4,4,4,4],
	[4,4,4,4,4,4,0,0,1,1,1,1,1,1,1,1,1,1,0,0,4,4,4,4,4,4],
	[0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0],
	[0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0],
	[0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0],
	[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1],
	[2,0,2,0,2,0,0,2,0,0,0,1,9,8,1,0,0,0,2,0,0,2,0,2,0,2],
	[2,0,2,0,2,0,0,2,0,0,0,1,8,8,1,0,0,0,2,0,0,2,0,2,0,2]
];
var map15 = 
[
	[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,3,3,3,3,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,3,3,3,3,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0,0,0],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0,0,0],
	[3,3,2,2,1,1,3,3,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,2,2],
	[3,3,0,0,1,1,3,3,1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,2,2],
	[3,3,3,3,1,1,3,3,3,3,3,3,2,2,3,3,3,3,1,1,2,0,1,1,0,0],
	[3,3,3,3,1,1,3,3,3,3,3,3,0,0,3,3,3,3,1,1,0,0,1,1,0,0],
	[0,0,3,3,3,3,1,1,0,0,3,3,3,3,3,3,3,3,1,1,0,0,1,1,0,0],
	[0,0,3,3,3,3,1,1,2,2,3,3,3,3,3,3,3,3,1,1,0,0,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,0,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,3,3,3,3,1,1,1,1,1,0,3,3,3,3],
	[0,2,2,2,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,3,3,3,3],
	[0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,3,3],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,3,3,3,3,1,1,1,0,3,3],
	[0,0,1,1,0,0,1,1,0,0,2,2,1,1,0,0,3,3,3,3,1,1,1,0,3,3],
	[0,0,1,1,0,0,0,0,0,1,1,1,1,1,3,3,3,3,1,1,0,0,0,0,3,3],
	[0,0,1,1,0,0,0,0,0,1,1,1,0,0,3,3,3,3,1,1,0,0,0,0,3,3],
	[0,0,1,1,1,1,1,0,0,1,1,1,3,3,3,3,1,1,3,3,1,1,3,3,3,3],
	[0,0,1,1,1,1,1,0,0,1,0,0,3,3,3,3,1,1,3,3,1,1,3,3,3,3],
	[0,0,0,0,1,1,0,0,3,3,0,0,0,0,0,0,1,1,3,3,1,1,3,3,0,0],
	[0,0,0,0,1,1,0,0,3,3,0,1,1,1,1,0,1,1,3,3,0,0,3,3,0,0],
	[0,0,0,0,1,1,0,0,0,0,0,1,9,8,1,0,0,0,3,3,3,3,3,3,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,3,3,3,3,3,3,0,0]
];

var map16 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,2,2,3,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,2,2,3,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,3,3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,3,3,0,0,3,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,3,3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,3,3,0,0,0,0,0,0,0,0,3,3,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,3,3,3,3,0,0,0,0,3,3,0,0,3,3,0,0,0,0,0,0,0,0,0,0],
	[0,0,3,3,3,3,0,0,0,0,3,3,0,0,3,3,2,2,0,0,0,0,0,0,0,0],
	[0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,0,0],
	[0,0,3,3,0,0,3,3,0,0,3,3,0,0,0,0,3,3,1,1,0,0,0,0,0,0],
	[0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0],
	[0,0,3,3,0,0,0,0,3,3,0,0,0,0,0,0,3,3,3,3,2,2,0,0,0,0],
	[0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
	[0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,1,1,0,0],
	[0,0,0,0,0,0,3,3,0,0,0,0,3,3,0,0,3,3,3,3,3,3,3,3,0,0],
	[0,0,0,0,0,0,3,3,0,0,0,0,3,3,0,0,3,3,3,3,3,3,3,3,0,0],
	[1,1,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3,3,3,3,3,3,2,2],
	[1,1,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,3,3,3,3,3,3,2,2],
	[1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,3,3,3,3,3,3,3],
	[1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,3,3,3,3,3,3,3],
	[2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,3,3,0,0,3,3,3,3,3,3],
	[2,2,1,1,1,1,0,0,0,0,0,1,1,1,1,0,3,3,0,0,3,3,3,3,3,3],
	[2,2,2,2,1,1,1,1,0,0,0,1,9,8,1,0,3,3,0,0,0,0,3,3,3,3],
	[2,2,2,2,1,1,1,1,0,0,0,1,8,8,1,0,3,3,0,0,0,0,3,3,3,3]
];
var map17 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
	[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0],
	[0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0],
	[3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,1,1,1,1,0,0],
	[3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,1,1,1,1,0,0],
	[3,3,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,3,3,3,3,3,3,0,0],
	[3,3,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,3,3,3,3,3,3,0,0],
	[3,3,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,3,3,3,3,3,3,0,0],
	[3,3,0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,3,3,3,3,3,3,0,0],
	[3,3,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,3,3,3,1,1,1,1,1,0],
	[3,3,0,0,0,0,3,3,0,0,0,0,0,0,0,0,3,3,3,3,1,1,1,1,1,0],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,0],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,0],
	[1,1,3,3,3,3,1,1,1,1,3,3,3,3,3,3,1,1,1,1,1,1,1,1,0,0],
	[1,1,3,3,3,3,1,1,1,1,3,3,3,3,3,3,1,1,1,1,1,1,1,1,0,0],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,2],
	[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,2],
	[2,2,0,0,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,2,2],
	[2,2,0,0,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],
	[0,0,2,2,1,1,1,1,2,2,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,0],
	[0,0,2,2,1,1,0,0,2,2,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,0,0,0,0,0]
];

var map18 = 
[
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,3,3,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,3,3,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0],
	[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,2,0,0],
	[1,1,3,3,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,2,2,0,0],
	[1,1,3,3,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,2,2,0,0],
	[0,0,1,1,3,3,1,1,0,0,0,0,1,1,0,0,3,3,1,1,2,2,2,2,0,0],
	[0,0,1,1,3,3,1,1,0,0,0,0,1,1,0,0,3,3,1,1,2,2,2,2,0,0],
	[0,0,0,0,1,1,0,0,3,3,2,2,1,1,3,3,0,0,1,1,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,3,3,2,2,1,1,3,3,0,0,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,2,2,0,0,1,1,2,2,1,1,1,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,2,2,0,0,1,1,2,2,1,1,1,1,0,0,0,0,0,0],
	[0,0,0,0,1,1,1,1,2,2,1,1,0,0,2,2,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,1,1,2,2,1,1,0,0,2,2,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,3,3,1,1,2,2,3,3,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,0,0,3,3,1,1,2,2,3,3,0,0,0,0,0,0,0,0,0,0],
	[2,2,2,2,2,2,3,3,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
	[2,2,2,2,2,2,3,3,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
	[2,2,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,2,2,2,2,0,0,0,0],
	[2,2,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,2,2,2,2,0,0,0,0],
	[2,2,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1,1,1,1,0,0],
	[2,2,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1,1,1,1,0,0],
	[3,3,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2],
	[3,3,2,2,2,2,2,2,0,0,0,1,1,1,1,0,0,0,0,0,1,1,2,2,2,2],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,0,0,0,0,2,2,2,2],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,0,2,2,2,2]
];

var map19 = 
[
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
	[0,0,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
	[1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1],
	[1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1],
	[1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1],
	[2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,2,2],
	[0,0,0,0,0,0,0,0,2,2,0,0,3,3,0,0,2,2,0,0,0,0,0,0,0,0],
	[3,3,3,3,0,0,0,0,1,1,0,0,3,3,0,0,1,1,0,0,0,0,3,3,3,3],
	[3,3,3,3,0,0,0,0,1,1,0,0,3,3,0,0,1,1,0,0,0,0,3,3,3,3],
	[3,3,3,3,3,3,3,3,1,1,1,1,3,3,1,1,1,1,3,3,3,3,3,3,3,3],
	[3,3,3,3,3,3,3,3,1,1,0,0,3,3,0,0,1,1,3,3,3,3,3,3,3,3],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
	[0,0,0,0,0,0,0,0,1,1,0,0,3,3,0,0,1,1,0,0,0,0,0,0,0,0],
	[1,1,0,0,1,1,0,0,1,1,0,0,3,3,0,0,1,1,0,0,1,1,0,0,1,1],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,1,1,0,0,1,1,0,0,0,1,9,8,1,0,0,0,1,1,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,0,0,0,0,0,0,0,0]
];

var map20 = 
[
	[0,0,0,0,0,0,4,4,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0],
	[0,0,0,0,0,0,4,4,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2,2,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2,2,0,0,0,0],
	[0,0,0,0,0,0,4,4,0,0,0,0,2,2,0,0,1,1,0,0,1,1,0,0,0,0],
	[0,0,0,0,0,0,4,4,0,0,1,1,2,2,0,0,1,1,0,0,1,1,0,0,0,0],
	[2,2,0,0,1,1,4,4,0,0,2,2,0,0,0,0,1,1,0,0,1,1,0,0,0,0],
	[0,0,0,0,1,1,4,4,0,0,2,2,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
	[0,0,0,0,1,1,4,4,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,1,1,4,4,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
	[1,1,0,0,1,1,4,4,4,4,0,0,4,4,4,4,4,4,4,4,0,0,0,0,1,1],
	[1,1,0,0,1,1,4,4,4,4,0,0,4,4,4,4,4,4,4,4,0,0,0,0,1,1],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,4,4,0,0,2,2,2,2],
	[0,0,0,0,0,0,1,1,0,0,0,0,0,0,3,3,0,0,4,4,0,0,0,0,0,0],
	[1,1,1,1,0,1,1,1,0,0,2,2,3,3,3,3,3,3,4,4,0,0,0,0,0,0],
	[1,1,1,1,0,1,1,1,0,0,2,2,3,3,3,3,3,3,4,4,0,0,1,1,1,1],
	[1,1,0,0,0,1,0,0,0,0,1,1,3,3,3,3,3,3,4,4,0,0,1,1,0,0],
	[0,0,0,0,0,1,0,0,0,0,1,1,3,3,3,3,3,3,4,4,0,0,1,1,0,0],
	[0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,3,0,0,4,4,0,0,3,3,0,0],
	[0,0,2,2,0,0,0,0,0,0,1,1,0,0,3,3,0,0,4,4,0,0,3,3,0,0],
	[0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,3,3,3,3,3,3],
	[0,0,1,1,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3],
	[0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,4,4,3,3,3,3,3,3],
	[0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,4,4,3,3,3,3,3,3],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,4,4,0,0,3,3,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,4,4,0,0,3,3,0,0]
];
var map21 = 
[
	[0,0,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
	[4,4,4,4,0,0,4,4,4,4,4,4,0,0,2,4,4,4,4,0,0,0,0,0,0,3],
	[4,0,2,4,1,1,4,1,3,3,3,4,3,0,2,4,2,2,4,0,0,0,3,3,3,3],
	[4,0,2,4,4,4,4,0,3,0,0,4,4,4,4,4,0,0,4,4,4,4,3,2,0,0],
	[4,0,2,0,3,3,3,3,3,2,2,2,3,2,2,5,5,5,5,5,0,4,3,2,0,0],
	[4,4,4,0,3,0,0,0,2,0,0,0,3,0,0,5,0,1,0,0,0,4,3,2,0,4],
	[0,0,4,0,3,0,0,0,2,4,4,4,4,4,3,5,3,3,3,0,0,4,3,2,0,4],
	[0,0,4,1,3,0,0,0,2,4,0,5,5,5,5,5,1,1,3,0,0,4,4,4,4,4],
	[0,3,4,3,3,1,0,0,3,4,3,5,3,4,0,0,1,1,3,3,3,3,3,2,0,4],
	[0,3,4,0,1,0,1,0,3,4,0,5,3,4,4,4,4,3,3,3,1,1,0,2,0,4],
	[4,4,4,0,1,4,4,4,4,4,0,5,1,1,0,0,4,1,0,3,1,1,0,2,4,4],
	[4,3,2,0,1,0,1,0,5,5,5,5,1,0,1,2,4,3,3,3,3,3,2,2,4,0],
	[4,3,2,1,1,1,0,0,5,1,1,3,1,1,0,2,4,1,0,3,1,3,0,0,4,0],
	[4,3,2,1,1,0,0,0,5,0,1,3,1,0,4,4,4,3,4,4,4,3,0,0,4,0],
	[4,3,3,3,3,3,0,0,5,3,3,3,1,0,4,3,0,1,4,0,4,4,4,3,4,0],
	[4,0,2,0,1,5,5,5,5,4,4,0,1,0,4,3,2,2,4,2,0,1,4,3,4,4],
	[4,0,2,1,1,5,4,1,3,1,4,1,1,1,4,3,0,1,4,2,0,1,4,3,0,4],
	[4,4,4,4,1,5,4,0,3,3,4,3,3,3,4,3,0,1,4,2,0,1,4,3,0,4],
	[0,0,2,4,1,5,4,0,3,0,4,4,4,4,4,0,0,1,4,2,0,1,4,4,3,4],
	[0,1,5,5,5,5,4,3,3,1,1,1,1,1,1,1,0,1,4,3,3,3,3,4,0,4],
	[0,0,5,4,4,4,4,3,3,0,0,0,3,3,3,3,3,1,4,4,4,0,3,4,0,4],
	[0,0,5,0,1,3,5,0,3,0,0,0,3,1,1,1,3,1,0,3,4,0,3,4,3,4],
	[5,5,5,0,1,3,5,0,3,0,2,2,3,2,2,0,3,0,0,3,4,0,0,4,4,4],
	[0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,4,4,3,3,3,3,3,3],
	[0,0,0,0,0,0,0,0,0,0,0,1,9,8,1,0,0,0,4,4,0,0,3,3,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,8,8,1,0,0,0,4,4,0,0,3,3,0,0]
];