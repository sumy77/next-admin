import { createUser } from "@/app/lib/actions/user"
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"

const AddUserPage = () => {
  return (
    <div className={styles.container}>
        <form action={createUser} className={styles.form}>
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" required />
            <input type="phone" name="phone" placeholder="Phone" required />
            <select name="isAdmin" id="isAdmin">
                <option value={false} selected>Is Admin?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select name="isActive" id="isActive">
                <option value={false} selected>Is Active?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <textarea name="address" id="address" rows="16" placeholder="Address"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddUserPage