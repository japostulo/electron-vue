import { Main } from './main'

const main = new Main()

main.onReady((process: Main) => {
    process.checkDevelopmentServer()
})