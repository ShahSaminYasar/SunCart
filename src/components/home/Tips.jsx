import { DropletIcon, Shirt, Sun } from "lucide-react";

const tips = [
  {
    icon: (
      <span className="rounded-full p-3 bg-sky-200 text-sky-600 block mb-2">
        <DropletIcon size={35} />
      </span>
    ),
    title: "Stay Hydrated 💧",
    description:
      "Drink plenty of water throughout the day, especially when lounging in the sun.",
  },
  {
    icon: (
      <span className="rounded-full p-3 bg-yellow-200 text-yellow-600 block mb-2">
        <Sun size={35} />
      </span>
    ),
    title: "Use sunscreen ☀",
    description:
      "Reapply SPF 30+ every two hours to protect your skin from harmful UV rays.",
  },
  {
    icon: (
      <span className="rounded-full p-3 bg-red-200 text-red-600 block mb-2">
        <Shirt size={35} />
      </span>
    ),
    title: "Wear breathable clothes 👕",
    description:
      "Opt for lightweight, natural fabrics like linen and cotton to stay cool.",
  },
];

const Tips = () => {
  return (
    <section className="py-20 px-3 bg-linear-to-br from-yellow-100 via-white to-blue-100">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3 text-center">
          🌿 Summer Care Tips
        </h2>

        <p className="text-sm font-normal text-card-foreground/70 block text-center mb-10">
          Essential advice to keep you glowing, hydrated, and protected all
          season long.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tips?.map((tip, index) => (
            <div
              key={`tip_${index}`}
              className="bg-background rounded-md shadow-xl shadow-black/5 border border-black/5 flex flex-col gap-2 px-5 py-7 text-foreground items-center justify-center"
            >
              {tip?.icon}

              <h4 className="text-2xl font-semibold block text-center">
                {tip?.title}
              </h4>

              <p className="text-sm font-normal text-card-foreground/70 block text-center">
                {tip?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Tips;
