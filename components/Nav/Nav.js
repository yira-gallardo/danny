import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export const Nav = () => {
  const [portafolioActivo, ponerPortfolioActivo] = useState(false);
  return (
    <>
      <div>
        <nav className={styles.nav}>
          <div className={styles.left}>
            <Link href="/">
              <div
                className={styles.logo}
                onClick={() => ponerPortfolioActivo(false)}
              >
                <Image
                  src="/img/logo.png"
                  alt="casas"
                  className={styles.logoImg}
                  width={1773}
                  height={1772}
                  priority
                />
              </div>
            </Link>
          </div>
          <div
            className={styles.center}
            onClick={() => ponerPortfolioActivo(true)}
          >
            portafolio
          </div>
          <div className={styles.right}>
            <div className={styles.mail}>
              <a href="mailto:dannycasas1993@gmil.com">contacto</a>
            </div>
          </div>
        </nav>
        {portafolioActivo && (
          <div className={styles.portafolio}>
            <div className={styles.clientes}>
              <div className={styles.left}>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Adidas
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Amazon
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Crunch
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Decathlon
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Dos Equis
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Uber Eats
                </Link>
              </div>
              <div className={styles.center}>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Fiat
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  HUNTS
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Indio
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  José Cuervo
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  MG
                </Link>
              </div>
              <div className={styles.right}>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Nestlé
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Noche Buena
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Palacio de Hierro
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Santander
                </Link>
                <Link
                  href="/proyecto"
                  className={styles.link}
                  onClick={() => ponerPortfolioActivo(false)}
                >
                  Snickers
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
