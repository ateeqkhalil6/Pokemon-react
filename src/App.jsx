import { Pokemon } from "./components/Pokemon"

export const App = () => {
  return (
    <section className="bg-gray-200 w-full h-full">
      <section className="max-w-[1320px] mx-auto">
        <div className="flex gap-[30px]">
          <Pokemon  />
        </div>
      </section>
    </section>
  );
}
