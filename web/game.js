//snake의 이동하는 위치를 매 시간마다 계속 업데이트 해야하므로 현재 시간 함수, 
//업데이트될 내용의 함수를 나눠서 작성  -> gameroot
//snake에 관련된 js는 snake.js로 나누어 저장, and import 함수로 불러오기

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

let lastRenderTime = 0

function main(currentTime){
	window.requestAnimationFrame(main)
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
	//1초에 한번씩 렌더링출력
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return



	lastRenderTime = currentTime

	update()
	draw()
}

window.requestAnimationFrame(main)

function update() {
	updateSnake()
}

function draw() {
	drawSnake()
}