

import { CafeCard, Hero } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import { listaDeProductos } from "@/utils/Products";

export default async function Home() {

  const isDataEmpty = !Array.isArray(listaDeProductos) || listaDeProductos.length < 1 || !listaDeProductos

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Cafe Catalogue</h1>
          <p> Explorar nuestra amplia variedad de Cafes</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {listaDeProductos?.map((cafe) => (
                <CafeCard cafe={cafe} key={cafe} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Opps no se ha encontrado nada
            </h2>
            <p> {listaDeProductos?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}
