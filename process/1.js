//console.log(process.argv)

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});


console.log(process.env.path)
