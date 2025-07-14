import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const sidebarItemVariants = {
    hidden: {
      opacity: 0,
      x: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className='md:mx-16 mx-2'>
      <h1>
        Featured Articles
      </h1>
      <motion.section
        className=" mx-auto px-4 py-8 grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Left: Featured articles */}
        <div className="md:col-span-2 space-y-6">
          {/* Article 1 */}
          <motion.div
            className="flex flex-col md:flex-row bg-white overflow-hidden"
            variants={itemVariants}
          >
            <img src='../assets/images/image.png' alt="Article 1" className=" rounded-xl md:w-1/2 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <span className="font-semibold text-lg hover:underline hover:!cursor-pointer ">Article 1</span>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam minima ducimus provident earum culpa nobis officiis iste aperiam incidunt similique maxime neque laboriosam distinctio quia pariatur, obcaecati eius. Laudantium, quibusdam?
                  Hic placeat reiciendis inventore eveniet optio quas eius officiis error distinctio sint, iure autem odit pariatur corporis et illo dolor ullam excepturi? Ipsam voluptates minus reiciendis mollitia, delectus saepe. Tenetur?
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
                <span>July 14, 2025</span>
                <span>Lorem Ipsum</span>
              </div>
            </div>
          </motion.div>

          {/* Article 2 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse bg-white  overflow-hidden"
            variants={itemVariants}
          >
            <img src='../assets/images/image.png' alt="Article 2" className="rounded-xl md:w-1/2 object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-lg">Article 2</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam minima ducimus provident earum culpa nobis officiis iste aperiam incidunt similique maxime neque laboriosam distinctio quia pariatur, obcaecati eius. Laudantium, quibusdam?
                  Hic placeat reiciendis inventore eveniet optio quas eius officiis error distinctio sint, iure autem odit pariatur corporis et illo dolor ullam excepturi? Ipsam voluptates minus reiciendis mollitia, delectus saepe. Tenetur?
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
                <span>July 14, 2025</span>
                <span>Lorem Ipsum</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Sidebar smaller articles */}
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="flex flex-col  bg-white overflow-hidden"
              variants={sidebarItemVariants}
            >
              <img src='../assets/images/image.png' alt="Small article" className="w-full rounded-xl h-44 object-cover" />
              <div className="p-2 ">
                <p className="text-xs text-gray-700">Lorem ipsum</p>
                <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet...</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button: span all columns on mobile */}
        <motion.div
          className="md:col-span-3  flex justify-center  mt-6"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <button
            className="flex items-center text-gray-700 hover:text-black text-sm"
            type="button"
          >
            View More
            <motion.img
              variants={{
                rest: { x: 0 },
                hover: { x: 5 },
              }}
              transition={{ type: "spring", stiffness: 300 }}
              src="../assets/icons/arrow.svg"
              alt=""
              className='ml-1 h-4 w-4'
            />
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
