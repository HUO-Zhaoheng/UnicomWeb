var d3=require('d3')

d3.csv("resources/empty.csv",function (error, csvdata) {
    if (error) {
        console.log(error)
    }
    console.log(csvdata);
})