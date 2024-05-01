import styles from "@/app/ui/login/login.module.css"

function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage