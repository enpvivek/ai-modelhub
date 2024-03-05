import apidata from "../utils/apidata";
import { Link } from "react-router-dom";

const data = apidata;
export default function Models() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our AI Models
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((model) => (
            <div key={model.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={model.imageSrc}
                  alt={model.shortDesc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-gray-700">
                    <Link to={`/model/${model.id}`}>
                      {/* Pass the id as a parameter */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {model.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{model.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {model.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
