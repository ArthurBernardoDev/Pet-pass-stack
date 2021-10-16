import { Button, Link, Typography } from "@material-ui/core";
import styles from "./HeaderHome.module.scss";

export function HeaderHome() {
  return (
    <header className={styles.header}>
      <Typography>
        <Link href="/">PetPass</Link>
      </Typography>

      <div className={styles.divButtons}>
        <Button className={styles.transitionButton}>
          <Link href="/">Login</Link>
        </Button>
        <Button className={styles.transitionButton}>
          <Link href="/">Registrar</Link>
        </Button>
      </div>
    </header>
  );
}
