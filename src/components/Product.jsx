import ClientCard from "../components/ClientCard";


const clients = [
    {
      name: "ABC company",
      title: "CEO",
      date: "2024-04",
    },
    {
      name: "ABC company",
      title: "CEO",
      date: "2024-04",
    },
    {
      name: "ABC company",
      title: "CEO",
      date: "2024-04",
    },
    {
      name: "ABC company",
      title: "CEO",
      date: "2024-04",
    },
  ];

function Product() {
    return (
        <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Current Clients</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {clients &&
            clients.map((client, index) => (
              <ClientCard client={client} key={index} />
            ))}
        </div>
      </div>
    )
}

export default Product
