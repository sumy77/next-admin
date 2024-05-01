import { User } from "@/app/models/user";
import { connectDB } from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (formData) => {
    "use server"
    const {username, email, password, isActive, isAdmin, phone, address} = Object.fromEntries(formData);
    try {
        connectDB();
        const newUser = new User({
            username,
            email,
            password,
            isActive,
            isAdmin,
            phone,
            address
        });
        await newUser.save();
    }catch(e) {
        console.log(e);
        throw new Error("Failed to create user")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const updateUser = async (formData) => {
    "use server"
    const {id, username, email, password, isActive, isAdmin, phone, address} = Object.fromEntries(formData);
    try {
        connectDB();
        const updateFields = {username, email, password, isActive, isAdmin, phone, address}
        Object.keys(updateFields).forEach(key => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key])
        await User.findByIdAndUpdate(id, updateFields);
    }catch(e) {
        console.log(e);
        throw new Error("Failed to create user")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const deleteUser = async (formData) => {
    "use server"
    const {id} = Object.fromEntries(formData);
    try{
        await User.findByIdAndDelete(id);
    }catch(e) {
        console.log(e);
        throw new Error("Failed to delete user")
    }
    revalidatePath("/dashboard/users")
}