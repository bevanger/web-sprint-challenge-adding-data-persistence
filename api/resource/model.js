const db = require('../../data/dbConfig');

async function get() {
    return await db('resources')
      
}

async function add(resource) {
    const [id] = await db('resources').insert(resource);
    const newResource = { 
        resource_id: id,
        resource_name: resource.resource_name,
        resource_description: resource.resource_description,
    }
    return newResource
}

module.exports = { 
    get,
    add,
}
