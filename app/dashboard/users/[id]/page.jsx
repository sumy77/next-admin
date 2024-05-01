import { updateUser } from "@/app/lib/actions/user";
import { fetchUser } from "@/app/server/user";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = async ({params}) => {
    const {id} = params;
    const user = await fetchUser(id);
  return (
    <div className={styles.container}>
        <div className={styles.userInfo}>
            <div className={styles.imgContainer}>
                <Image src={user.img || "/noavatar.png"} alt="" fill />
            </div>
            {user.username}
        </div>
        <div className={styles.formWrapper}>
            <form action={updateUser} className={styles.form}>
                <input type="hidden" name="id" defaultValue={user.id} />
                <label>Username</label>
                <input type="text" name="username" defaultValue={user.username} placeholder="John Doe" />
                <label>Email</label>
                <input type="email" name="email" defaultValue={user.email} placeholder="JohnDoe@gmail.com" />
                <label>Password</label>
                <input type="password" name="password" />
                <label>Phone</label>
                <input type="text" name="phone" defaultValue={user.phone} placeholder="+1234567" />
                <label>Address</label>
                <textarea name="address" placeholder="New York" defaultValue={user.address}></textarea>
                <label>Is Admin?</label>
                <select name="isAdmin" defaultValue={user.isAdmin}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label>Is Active?</label>
                <select name="isActive" defaultValue={user.isActive}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage