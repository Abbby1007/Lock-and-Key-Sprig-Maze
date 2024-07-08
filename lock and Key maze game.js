
/* 
@title: maze_game_starter
@author: Cheru Berhanu
@tags: []
@addedOn: 2023-08-08
*/

    const player = "p" // key
    const goal = "g" // lock
    const wall = "w" // concrete wall



setLegend(
	[ player, bitmap`
................
................
................
................
.66666..........
6666666.........
6622266666666666
662226666.6.6.66
66222666.6.6.6..
6666666.........
.66666..........
................
................
................
................
................` ], // key
    [goal , bitmap`
................
................
................
......6666......
.....666666.....
....66....66....
....6......6....
....6......6....
....6......6....
....66666666....
....66666666....
....66111166....
....66111166....
....66611666....
....66611666....
....66666666....`], // lock
    [wall, bitmap`
0000000000000000
LLLLLL00111110LL
LLLLLL00111110LL
0000000000000000
11110LLLLL011110
11110LLLLL011110
0000000000000000
LLLLLL0111110LL0
LLLLLL0111110LL0
0000000000000000
111110LLLL011110
111110LLLL011110
0000000000000000
LLLL01111110LLL0
LLLL01111110LLL0
0000000000000000`],// concrete wall

)

setSolids([player, wall])

let level = 0
const levels = [
	map`
p..g`, 
    map `
...w...
.w.w.w.
.w.w.wg
pw...ww`,
    map `
....pw...
..w..www.
www......
...www...
.w.....ww
ww...w...
...www.ww
.ww.w....
...gw.ww.`,
    map `
....p....
.wwwwwww.
...w...w.
wwww.w...
.....w...
..wwwwww.
.w.....w.
.w.ww..w.
...w.g.w.`,
    map `
.w.....ww..
.ww.www..w.
.......w.w.
www......ww
..www.www.w
p.....w....
.wwwwww...g
..w....ww..
.......w..w
w.wwww.w..w
w...w..w.w.
w...w..w.w.
www..ww..ww
...w.......`,
    map `
......p.....w
..w...w.ww...
..ww..w.w..ww
...wwwwwww...
ww..w.w......
..w...w..wwww
wwwww.w......
....w.ww.w.w.
.w.....www...
wwwwww.w.w..w
.w.....w.w.w.
....wwww...w.
w.....w..w.w.
.w.w..wwww...
..www.gw.....`,
  
]

setMap(levels[level])
level = level + 1;

setPushables({
	[ player ]: []
})

onInput("s", () => {
	getFirst(player).y += 1 // move down
});

onInput ("w", () => {
  getFirst(player).y -= 1 // move up
});

onInput ("d", () => {
  getFirst(player).x += 1 // move right
});

onInput ("a", () => {
  getFirst(player). x -= 1 // move left
});

onInput ("j", () =>{
  setMap (levels[level])
});

afterInput(() => {

})