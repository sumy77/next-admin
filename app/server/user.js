import { connectDB } from "../lib/db";
import { User } from "../models/user";

export const fetchUsers = async (q) => {
    const regex = new RegExp(q,"i");
    try {
        connectDB();
        const users = await User.find({username: {$regex: regex}});
        return users;
    }catch(e) {
        console.log(e);
        throw new Error('Failed to fetch users');
    }
}

export const fetchUser = async (id) => {
    try {
        connectDB();
        const user = await User.findById(id);
        return user;
    }catch(e) {
        console.log(e);
        throw new Error('Failed to fetch user');
    }
}