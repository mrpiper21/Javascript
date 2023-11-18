// promise is an eobject which return an eventual completion of an asynchronous operation
// {data: undefined}
// After execution or after async time => {data: order deltails}

const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilPromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt', `My files ${first} ${second}`)
    } catch (error) {
        throw new Error(error)
    }
}

start()