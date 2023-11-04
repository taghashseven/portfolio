import React from 'react';

const FreelancingPage = () => {
  return (
    <div className="dark:text-white p-4" id='#service'>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Freelancing Services</h1>
        <p className="text-lg mb-4">
          As a web developer with skills in JavaScript, React, Python, and AI, I offer a wide range of freelancing services to meet your technical needs.
        </p>
        <h2 className="text-xl font-semibold mb-2">Services Offered:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Database Development: I specialize in creating and optimizing databases, ensuring efficient data storage and retrieval.</li>
          <li className="mb-2">Web Design: I can design visually appealing and user-friendly websites tailored to your business or personal brand.</li>
          <li className="mb-2">Software Development: I develop custom software solutions to streamline your business processes and enhance productivity.</li>
          <li className="mb-2">React Development: I have extensive experience in building responsive and interactive web applications using React.</li>
          <li className="mb-2">React Native Development: I create cross-platform mobile apps using React Native for a seamless user experience.</li>
          <li className="mb-2">AI Integration: I can integrate AI and machine learning solutions into your projects to unlock their full potential.</li>
          <li className="mb-2">JavaScript Expertise: With strong JavaScript skills, I can solve complex problems and create dynamic web applications.</li>
        </ul>
        <p className="text-lg">
          Whether you need a database optimized, a new website designed, software developed, or AI integrated into your projects, I am here to help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default FreelancingPage;
