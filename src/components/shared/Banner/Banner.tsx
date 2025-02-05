import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className="container h-full flex justify-center items-center mx-auto px-4">
        <div className="w-full sm:w-[80%] md:w-[60%] h-auto rounded-xl text-center bg-white px-6 sm:px-12 py-12 sm:py-16 md:py-20">
          <p className="w-40 mx-auto rounded-full p-2 my-5 bg-teal-100 text-teal-600 text-sm sm:text-base">
            1st January 2025
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            The Rise of Quantum Computing
          </h1>
          <p className="text-gray-400 mt-3 mx-auto w-[90%] sm:w-3/4 text-sm sm:text-base">
            <i>
              Dive into the fascinating world of quantum computing, unlocking
              unprecedented computational power.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
