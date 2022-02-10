const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength : 50
    },
    email : {
        type : String,
        trim: true, //trim : 스페이스를 입력할 수 있게 해주는 것
        unique : 1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role: {
        type: Number,
        default: 0//기본값
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})


const User = mongoose.model('User', userSchema) 
//위에서 만든 스키마를 모델로 만드는 과정

module.exports= {User}