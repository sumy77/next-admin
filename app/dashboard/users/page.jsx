import Image from "next/image"
import styles from "../../ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import { fetchUsers } from "@/app/server/user"
import { deleteUser } from "@/app/lib/actions/user"
const UsersPage = async ({searchParams}) => {
  const q = searchParams.q || "";
  const users = await fetchUsers(q);
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Search placeholder="Search a user"/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user._id}>
                <td>
                  <div className={styles.userName}>
                    <Image src={user.img || "/noavatar.png"} alt="" height={40} width={40} />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4,16)}</td>
                <td>{user.isAdmin ? "Admin": "Client"}</td>
                <td>{user.isActive ? "Active": "Passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.viewBtn}`}>View</button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={JSON.parse(JSON.stringify(user._id))} />
                      <button className={`${styles.button} ${styles.deleteBtn}`}>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage