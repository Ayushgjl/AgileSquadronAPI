const register=require('../../model/user');

const mongoose=require('mongoose');

const testDB='mongodb://127.0.0.1/Furniture_test'
beforeAll(async()=>{
    mongoose.connect(testDB,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useCreateIndex:true,
        useFindAndModify:false
    })
})

afterAll(async()=>{
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
})

test('have to be register',()=>{
    return register.create({
        firstName:'Suman',
        lastName:'Shahi',
        phoneNumber:'985421685',
        username:'suman123',
        password:'suman321',
        image:'suman'
    }).then((Response)=>{
        expect(Response.firstName).toBe('Suman')
        expect(Response.lastName).toBe('Shahi')
        expect(Response.phoneNumber).toBe('985421685')
        expect(Response.username).toBe('suman123')
        expect(Response.password).toBe('suman321')
        expect(Response.image).toBe('suman')
    })
})

test('have to login',()=>{
    return register.findOne({
        username:'suman123',
        password:'suman321'
    }).then ((Response)=>{
        expect(Response.username).toBe('suman123')
        expect(Response.password).toBe('suman321')
    })
})

test('updated user',()=>{
    return register.findOne({'firstName':'Suman'})
    .then((user)=>{
        user.firstName='Suman'
        user.lastName='Shahi'
        user.phone='985421685'
        user.username='suman123'
        user.password='suman321'
        user.image='suman'
        user.save().then((updateuser)=>{
            expect(Response.firstName).toBe('Suman')
            expect(Response.lastName).toBe('Shahi')
            expect(Response.phone).toBe('98324196')
            expect(Response.username).toBe('suman123')
            expect(Response.password).toBe('suman321')
            expect(Response.image).toBe('suman') 
        })


    })
})