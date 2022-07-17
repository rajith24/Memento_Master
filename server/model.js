const mongoose = require('mongoose')

const ImageSchema = mongoose.Schema({
    image:{
        data:Buffer,
        contentType:String
    }
})

// eslint-disable-next-line no-undef
module.exports= ImageModel= mongoose.model('imageModel',ImageSchema)