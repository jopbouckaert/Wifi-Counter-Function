//canvas
const fs = require('fs')
const { createCanvas } = require('canvas')
const canvas = createCanvas(96, 64)
const ctx = canvas.getContext('2d')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body && req.body.total && req.body.current) {
        let totalpeople = req.body.total;
        let currentpeople = req.body.current;
        
        //image
        let height = canvas.height
        let width = canvas.width
        ctx.clearRect(0,0,width,height)    
        ctx.font = '20px Impact'
        ctx.fillStyle = "#ff0000"
        ctx.fillText(totalpeople + " Total", 5, 30)
        ctx.fillText(currentpeople + " Current", 5, 60)

        context.res.setHeader("Content-Type","image/png")
        context.res.raw(canvas.toDataURL(canvas))

        // context.res = {
        //     // status: 200, /* Defaults to 200 */
        //     //body: canvas.toDataURL(canvas) 
        //     body: "Hello World!"

        // };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};