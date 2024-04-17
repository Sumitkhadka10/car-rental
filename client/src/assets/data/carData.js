// Import all images from assets/images directory
import img01 from "../all-images/cars-img/aaa.jpeg";
import img02 from "../all-images/cars-img/audi.jpeg";
import img03 from "../all-images/cars-img/nn.png";
import img04 from "../all-images/cars-img/vi.png";
import img05 from "../all-images/cars-img/ho.png";
import img06 from "../all-images/cars-img/mer.jpeg";
import img07 from "../all-images/cars-img/new.png";
import img08 from "../all-images/cars-img/gwagon.jpeg";

const carData = [
  {
    id: 1,
    brand: "BMW",
    rating: 112,
    carName: "BMW Sports Edition",
    imgUrl: img01,
    model: "Model 2018",
    price: 8000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The BMW Sports Edition offers a thrilling driving experience with its powerful engine and dynamic design. Equipped with GPS navigation and heated seats, it ensures comfort and convenience on every journey. Model 2018.",
  },
  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2015",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the excellence of Toyota Aventador with its sleek design and advanced features. Whether it's city driving or long trips, this car delivers exceptional performance and comfort. Model-2015.",
  },
  {
    id: 3,
    brand: "Mercedes",
    rating: 132,
    carName: "G WAGON",
    imgUrl: img03,
    model: "Model-2022",
    price: 12000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes G WAGON combines luxury with rugged performance, making it the perfect choice for adventurers and urbanites alike. With its advanced features and stylish design, it's a symbol of status and sophistication. Model-2022.",
  },
  {
    id: 4,
    brand: "TATA",
    rating: 102,
    carName: "Mercielago",
    imgUrl: img04,
    model: "Model-2019",
    price: 7000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The TATA Mercielago is a blend of elegance and performance, designed to elevate your driving experience. Its stylish exterior and comfortable interior make every journey memorable. Model-2019.",
  },
  {
    id: 5,
    brand: "Nissan",
    rating: 94,
    carName: "Nissan",
    imgUrl: img05,
    model: "Model-2020",
    price: 4500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Nissan offers a perfect balance of style, performance, and affordability. With its reliable engine and comfortable cabin, it's an ideal choice for daily commuting and weekend getaways. Model-2020.",
  },
  {
    id: 6,
    brand: "Volkswagen",
    rating: 119,
    carName: "Volkswagen",
    imgUrl: img06,
    model: "Model-2017",
    price: 6000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Volkswagen is known for its superior build quality and exceptional driving dynamics. Whether you're navigating city streets or cruising on the highway, it delivers a smooth and comfortable ride. Model-2017.",
  },
  {
    id: 7,
    brand: "Toyota",
    rating: 82,
    carName: "Fiesta",
    imgUrl: img07,
    model: "Model 2017",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Toyota Fiesta is a versatile and reliable car that excels in both performance and comfort. With its spacious interior and advanced features, it's perfect for daily commuting and family outings. Model 2017.",
  },
  {
    id: 8,
    brand: "Mercedes",
    rating: 52,
    carName: "Mercedes Benz XC90",
    imgUrl: img08,
    model: "Model 2020",
    price: 7200,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes Benz XC90 redefines luxury with its elegant design and premium features. From its spacious cabin to its powerful engine, every aspect of this car exudes sophistication and comfort. Model 2020.",
  },
];

export default carData;
