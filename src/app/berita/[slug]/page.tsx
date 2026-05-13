import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { beritaData } from "@/lib/config";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default function DetailBeritaPage({
  params,
}: {
  params: { slug: string };
}) {
  const berita = beritaData.find((b) => b.slug === params.slug);
  if (!berita) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* HERO FOTO */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <img src={berita.image} alt={berita.title} className={styles.heroBgImg} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">Beranda</Link>
              <span>›</span>
              <Link href="/berita">Berita</Link>
              <span>›</span>
              <span className={styles.breadcrumbActive}>{berita.category}</span>
            </div>
            <span className={styles.catBadge}>{berita.category}</span>
            <h1 className={styles.heroTitle}>{berita.title}</h1>
            <div className={styles.heroMeta}>
              <span>📅 {berita.date}</span>
              <span>✍️ Tim FPPI</span>
            </div>
          </div>
        </section>

        {/* ISI ARTIKEL */}
        <section className={styles.article}>
          <div className={styles.articleInner}>
            <p className={styles.lead}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </section>

        {/* BACK BUTTON */}
        <div className={styles.backWrap}>
          <Link href="/berita" className={styles.backBtn}>
            ← Kembali ke Berita
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}