import Product from "@/types/product";
const mockProducts: Product[] = [
  {
    id: 1,
    title: "Session 1 Pass",
    price: 150.00,
    description: "Access to the morning expedition talks and the main archive hall.",
    imageUrl: "/Session1Pass.png",
  },
  {
    id: 2,
    title: "Complete Manifest Pass",
    price: 350.00,
    description: "Full access to all sessions, workshops, and the evening symposium.",
    imageUrl: "/CompleteManifestPass.png",
  },
  {
    id: 3,
    title: "Terra Incognita T-Shirt",
    price: 45.00,
    description: "Heavyweight cotton standard issue apparel with minimal coordinate prints.",
    imageUrl: "/T-Shirt.png",
    variant:"White",
    size: "M",
  },
  {
    id: 4,
    title: "Expedition Tote Bag",
    price: 25.00,
    description: "Durable canvas carry-all for field notes and collected artifacts.",
    imageUrl: "/ToteBag.png",
    variant:"White"
  },
  {
    id: 5,
    title: "Coordinate Pin Set",
    price: 15.00,
    description: "Three enamel pins detailing the events geographical markers.",
    imageUrl: "/CoordinatePinSet.png",
  }];

export default mockProducts;
