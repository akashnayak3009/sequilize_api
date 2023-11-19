import jwt from 'jsonwebtoken';

export const generateTokent =(id) =>{
    try{
        return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'10d'})
    }catch(error){
        console.error('Error generating JWT token', error);
        throw new Error('Error generating JWT token')
    }
}