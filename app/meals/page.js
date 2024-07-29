import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function Meals() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={style.highlight}>by you</span>
        </h1>
        <p>Choose your fav recepie. Its fun!</p>
        <p className={style.cta}>
          <Link href="/meals/share">Share your fav recepie</Link>
        </p>
      </header>
      <main className={style.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
