export default function SomeMeal({ params }) {
  return (
    <main>
      <div>Some meal</div>
      <p>{params.mealSlug}</p>
    </main>
  );
}
