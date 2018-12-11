const request = require('request')

request.post('https://jsonplaceholder.typicode.com/posts', {
    json: {
            title: 'foo',
            body: 'bar',
            userId: 1
          }
}, (error, res, body) => {
    if (error) {
        console.error(error)
        return
    }
    console.log(res.statusCode===201);
   console.log(validateId(res));
    console.log(body)
})

function validateId(res){
    return (JSON.stringify(res).id===101);

}