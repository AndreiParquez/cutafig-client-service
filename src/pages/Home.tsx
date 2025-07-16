import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';

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
      <div>
        <div className="flex items-center justify-center my-8">
          <hr className="flex-grow border-t border-gray-300 mx-4" />
          <span className="text-center font-semibold font-caveat text-4xl">Featured Articles</span>
          <hr className="flex-grow border-t border-gray-300 mx-4" />
        </div>
        <motion.section
          className=" mx-auto px-4 py-8 grid md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Left: Featured articles */}
          <div className="md:col-span-3 space-y-6">
            {/* Article 1 */}
            <motion.div
              className="flex flex-col md:flex-row bg-white overflow-hidden"
              variants={itemVariants}
            >
              <img src='https://picsum.photos/seed/uy4r/480/300' loading='lazy' alt="Article 1" className=" rounded-xl md:w-1/2 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="font-semibold hover:underline hover:!cursor-pointer font-caveat text-3xl">Article 1</span>
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
              <img src='https://picsum.photos/seed/picsum/480/300' loading='lazy' alt="Article 2" className="rounded-xl md:w-1/2 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-3xl font-caveat">Article 2</h2>
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
                <img src={`https://picsum.photos/seed/${i}/480/854`} loading='lazy' alt="Small article" className="w-full rounded-xl h-44 object-cover" />
                <div className="p-2 ">
                  <p className="text-xs text-gray-700">Lorem ipsum</p>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet...</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View more button: span all columns on mobile */}
          <motion.div
            className="md:col-span-4  flex justify-center  mt-6"
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

      <div>
        <div className="flex items-center justify-center my-8">
          <hr className="flex-grow border-t border-gray-300 mx-4" />
          <span className="text-center font-semibold font-caveat text-5xl">Blogs</span>
          <hr className="flex-grow border-t border-gray-300 mx-4" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className='flex md:space-x-10 space-x-0 space-y-10 md:space-y-0 md:flex-row flex-col justify-center items-center px-4 py-3 md:py-4  '>
          {/* Blog articles will be rendered here */}
          <motion.div variants={itemVariants} className='flex flex-col  items-center'>
            <img src='https://picsum.photos/seed/454/480/350' loading='lazy' alt="Article 1" className=" rounded-xl w-full object-cover" />
            <div className='w-full'>
              <div className='flex items-center space-x-2 mt-2'>
                <img src='../assets/images/image.png' alt="Article 1" className=" rounded-full size-10 object-cover" />
                <p className='text-xs'>Lorem Ipsum</p>

              </div>

              <span className="font-semibold  hover:underline hover:!cursor-pointer font-caveat text-3xl">Blog 1</span>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>

          </motion.div>
          <motion.div variants={itemVariants} className='flex flex-col  items-center '>
            <img src='https://picsum.photos/seed/df/480/350' loading='lazy' alt="Article 1" className=" rounded-xl w-full object-cover" />
            <div className='w-full'>
              <div className='flex items-center space-x-2 mt-2'>
                <img src='../assets/images/image.png' alt="Article 1" className=" rounded-full size-10 object-cover" />
                <p className='text-xs'>Lorem Ipsum</p>

              </div>

              <span className="font-semibold text-3xl font-caveat hover:underline hover:!cursor-pointer ">Blog 1</span>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>

          </motion.div>
          <motion.div variants={itemVariants} className='flex flex-col  items-center '>
            <img src='https://picsum.photos/seed/dfd/480/350' loading='lazy' alt="Article 1" className=" rounded-xl w-full object-cover" />
            <div className='w-full'>
              <div className='flex items-center space-x-2 mt-2'>
                <img src='../assets/images/image.png' alt="Article 1" className=" rounded-full size-10 object-cover" />
                <p className='text-xs'>Lorem Ipsum</p>

              </div>

              <span className="font-semibold text-3xl font-caveat hover:underline hover:!cursor-pointer ">Blog 1</span>
              <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            </div>

          </motion.div>


        </motion.div>
        {/* View more button: span all columns on mobile */}
        <motion.div
          className="md:col-span-4  flex justify-center mt-6 "
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


      </div>

      <div>
        <div className="flex items-center justify-center my-8">
          <hr className="flex-grow border-t border-gray-300 mx-4" />
          <span className="text-center font-semibold font-caveat text-5xl">Merchs</span>
          <hr className="flex-grow border-t border-gray-300 mx-4" />
        </div>
        <div className="px-4 py-3 md:py-4">
          <Swiper
            spaceBetween={36} // gap between slides in px
            slidesPerView={1} // default for mobile
            modules={[Navigation, Pagination, Autoplay]}

           
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 }, // md
              1024: { slidesPerView: 6 }, // lg
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <SwiperSlide key={i}>
                <div className="rounded-xl">
                  <img
                    src="../assets/icons/logo.png"
                    alt={`Merch ${i}`}
                    className="rounded-xl w-full object-cover"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <h2 className="font-semibold text-lg">Merch {i}</h2>
                    <p className="font-bold">₱ 120</p>
                  </div>
                  <p className="text-sm text-gray-600">Category</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black w-full flex justify-center items-center space-x-2 text-white px-4 py-2 rounded-lg mt-2">
                    <img src='../assets/icons/cart.svg' alt="" className='size-5' />
                    <p>Buy Now</p>
                  </motion.button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* View more button: span all columns on mobile */}
        <motion.div
          className="md:col-span-4  flex justify-center mt-6 "
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
      </div>

      <div>
        <div className="flex items-center justify-center my-8">
          <hr className="flex-grow border-t border-gray-300 mx-4" />
          <span className="text-center font-semibold font-caveat text-5xl">Class</span>
          <hr className="flex-grow border-t border-gray-300 mx-4" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 px-4 py-3 md:py-4'>
          <div className='flex space-x-2'>
            <img src="../assets/icons/rocket.svg" alt="" />
            <div className='w-full'>
              <h2>Search Engine Optimization (Seo)</h2>
              <div className='flex justify-between items-center'>
                <div className='text-sm text-zinc-700 w-1/2'>
                  <p>July 15 - 17</p>
                  <p>via Google Meet</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black w-1/2 flex justify-center items-center space-x-2 text-white px-4 py-2 rounded-lg mt-2">
                  <p>Enroll</p>
                </motion.button>

              </div>


            </div>

          </div>
          <div className='flex space-x-2 '>
            <img src="../assets/icons/fb.svg" alt="" />
            <div className='w-full'>
              <h2>Digital Marketing</h2>
              <div className='flex justify-between items-center'>
                <div className='text-sm text-zinc-700 w-1/2'>
                  <p>July 15 - 17</p>
                  <p>via Google Meet</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black w-1/2 flex justify-center items-center space-x-2 text-white px-4 py-2 rounded-lg mt-2">
                  <p>Enroll</p>
                </motion.button>

              </div>


            </div>

          </div>
          <div className='flex space-x-2'>
            <img src="../assets/icons/bulb.svg" alt="" />
            <div className='w-full'>
              <h2>Content Writing</h2>
              <div className='flex justify-between items-center'>
                <div className='text-sm text-zinc-700 w-1/2'>
                  <p>July 15 - 17</p>
                  <p>via Google Meet</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black w-1/2 flex justify-center items-center space-x-2 text-white px-4 py-2 rounded-lg mt-2">
                  <p>Enroll</p>
                </motion.button>

              </div>


            </div>

          </div>


        </div>
        {/* View more button: span all columns on mobile */}
        <motion.div
          className="md:col-span-4  flex justify-center mt-6 "
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

      </div>

      <footer className=" mt-12">
        <hr className="flex-grow border-t border-gray-300 mx-4" />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-3 md:py-4'>
          <div className='flex justify-center items-center space-x-2'>
            <img src="../assets/icons/logo.png" alt="Cutafig Logo" className="size-32" />
            <div>
              <h1 className="font-bold text-5xl font-caveat">Cutafig</h1>
              <p className="text-xs">words, art, and ideas in bloom</p>
            </div>

          </div>

          <div>
            <ul>
              <li>
                <h2 className='font-semibold text-lg'>About Us</h2>
              </li>
              <li className='text-sm text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</li>
              <li className='text-sm text-zinc-700'>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <h2 className='font-semibold text-lg'>Contact Us</h2>
              </li>
              <li className='text-sm text-zinc-700'>Email: <a href="mailto:info@cutafig.com">info@cutafig.com</a></li>
            </ul>
          </div>


        </div>

      </footer>

    </div >
  );
};

export default Home;
