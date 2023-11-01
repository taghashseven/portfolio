
import React from 'react';

const About = () => {
  return (
    <div className="dark:text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4" id="about" >About Me</h1>
        <p className="text-lg mb-4">
          Hi, I'm Jonah Mudzingwa, and I hold a degree in Electronics and Telecommunication.
        </p>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p className="mb-4">
          I graduated with a degree in Electronics and Telecommunication, which has provided me with a strong foundation in technology and problem-solving skills.
        </p>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Web Development: I have a passion for web development and enjoy creating responsive, user-friendly websites.</li>
          <li className="mb-2">Networking: My expertise in networking allows me to design and maintain efficient communication systems.</li>
          <li className="mb-2">Circuit Design: I have experience in designing electronic circuits for various applications.</li>
          <li className="mb-2">Linux: I am proficient in working with Linux-based systems and enjoy its flexibility and power.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
