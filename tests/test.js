let tests = []

function test(name, fn) {
    
    tests.push({name, fn})
}

// function that runs all the declared test

function run() {
    tests.forEach(t => {
        try {
            t.fn()
            console.log('✅ ', t.name)
        } catch (e) {
            console.log('❌', t.name)
            console.log(e.stack)
        }
    })
}


//Get all the list of files from the command line

const files = process.argv.slice(2)

global.test = test
files.forEach(file => {
    import(file)
})

run()
export default test;