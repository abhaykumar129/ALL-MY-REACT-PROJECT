import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      I am pursuing a BSc in Mathematics Honors and have developed a strong foundation
                       in full-stack development and software engineering. My expertise includes Java,
                        Data Structures and Algorithms (DSA), and JavaScript, enabling me to build efficient
                         and scalable applications. As a full-stack developer, I have a well-rounded understanding
                          of front-end and back-end technologies, which complements my passion for problem-solving and
                           mathematical analysis
                      </p>
                      <p className="mt-4 text-gray-600">
                          
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}