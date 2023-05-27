// build your `Resource` model here
function getResourceById(resource_id){
    return Promise.resolve(`Some Resourcer whit id: ${resource_id}`)
}

module.exports = {
    getResourceById
}