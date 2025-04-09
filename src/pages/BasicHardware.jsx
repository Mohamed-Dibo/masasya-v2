import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function BasicHardware() {
  const basicHardwareProducts = [
    {
      id: "BP7201A0007",
      name: "PUSH OPEN SYSTEM",
      image: "/images/BASIC HARDWARE/BP.7201.A0007.jpg"
    },
    {
      id: "CH3339A0056",
      name: "SOFT CLOSING WOOD HINGE",
      image: "/images/BASIC HARDWARE/CH.3339.A0056.jpg"
    },
    {
      id: "CH3339D0008",
      name: "ALUMINUM SOFT CLOSE HING",
      image: "/images/BASIC HARDWARE/CH.3339.D0008.jpg"
    },
    {
      id: "CH3759A0002",
      name: "SOFT CLOSE HING 175",
      image: "/images/BASIC HARDWARE/CH.3759.A0002.jpg"
    },
    {
      id: "CH9179A0027",
      name: "3D SOFT CLOSE HING",
      image: "/images/BASIC HARDWARE/CH.9179.A0027.jpg"
    },
    {
      id: "FE0210A0001",
      name: "PLINTH PANEL",
      variants: [
        "PLINTH PANEL 4M * 15 CM SILVER",
        "PLINTH PANEL 4M * 10 CM SILVER",
        "PLINTH PANEL 4M * 15 CM BLACK",
        "PLINTH PANEL 4M * 10 CM BLACK"
      ],
      image: "/images/BASIC HARDWARE/FE.0210.A0001.jpg"
    },
    {
      id: "FE9020A0007",
      name: "PLINTH ADJUSTING FEET",
      variants: [
        "PLINTH ADJUSTING FEET 10 CM",
        "PLINTH ADJUSTING FEET 15 CM"
      ],
      image: "/images/BASIC HARDWARE/FE.9020.A0007.jpg"
    },
    {
      id: "SL4325A0004",
      name: "FULL EXTENSION UNDERMOUNT SLIDE WITH SOFT CLOSING 40 CM",
      image: "/images/BASIC HARDWARE/SL.4325.A0004.jpg"
    },
    {
      id: "SL4325A0004_50",
      name: "FULL EXTENSION UNDERMOUNT SLIDE WITH SOFT CLOSING 50 CM",
      image: "/images/BASIC HARDWARE/SL.4325.A0004.jpg"
    },
    {
      id: "SL7775E0002",
      name: "SLIM TANDEM BOX 12 CM",
      image: "/images/BASIC HARDWARE/SL.7775.E0002.jpg"
    },
    {
      id: "SL7885F0005",
      name: "SLIM TANDEM BOX 17 CM",
      image: "/images/BASIC HARDWARE/SL.7885.F0005.jpg"
    },
    {
      id: "SL9455A0005",
      name: "FULL EXTENSION SOFT CLOSING SLIDE (DOUBLE SPRING) 50 CM",
      image: "/images/BASIC HARDWARE/SL.9455.A0005 - Copy (2).jpg"
    },
    {
      id: "SL9455A0005_55",
      name: "FULL EXTENSION SOFT CLOSING SLIDE (DOUBLE SPRING) 55 CM",
      image: "/images/BASIC HARDWARE/SL.9455.A0005 - Copy (2).jpg"
    },
    {
      id: "SL9455A0005_PO",
      name: "FULL EXTENSION PUSH OPEN SLIDE (DOUBLE SPRING) 50 CM",
      image: "/images/BASIC HARDWARE/SL.9455.A0005 - Copy (2).jpg"
    },
    {
      id: "ST5120A0002",
      name: "FLAP STAY ASYA 1",
      image: "/images/BASIC HARDWARE/ST.5120.A0002.jpg"
    },
    {
      id: "ST6210B0015",
      name: "FLAP STAY ASYA",
      variants: [
        "FLAP STAY ASYA RIGHT",
        "FLAP STAY ASYA LEFT"
      ],
      image: "/images/BASIC HARDWARE/ST.6210.B0015.jpg"
    },
    {
      id: "ST6640B0001",
      name: "FLAP STAY ASYA SET 2",
      image: "/images/BASIC HARDWARE/ST.6640.B0001.jpg"
    },
    {
      id: "WB0240A0018",
      name: "TRASH BINS 29 LITRE",
      image: "/images/BASIC HARDWARE/WB.0240.A0018.jpg"
    },
    {
      id: "WB0240A0019",
      name: "TRASH BINS 60 LITER",
      image: "/images/BASIC HARDWARE/WB.0240.A0019.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary-600 to-primary-400">
            Basic Hardware Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive collection of high-quality basic hardware solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {basicHardwareProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg 
                       hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {product.name}
                </h2>
                {product.variants && (
                  <ul className="mt-2 space-y-1">
                    {product.variants.map((variant, index) => (
                      <li 
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        • {variant}
                      </li>
                    ))}
                  </ul>
                )}
                {/* <div className="mt-4">
                  <Link
                    to={`/products/basic-hardware/${product.id}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary-500 
                             text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BasicHardware;