import chalk from "chalk"

export function info(msg) {
    console.log(chalk.green("[INFO] ") + msg)
}
export function warn(msg) {
    console.log(chalk.yellow("[WARN] "), msg)
}
export function error(msg) {
    console.log(chalk.red("[ERROR] "), msg)
}
export function debug(msg) {
    console.log(chalk.blue("[DEBUG] "), msg)
}