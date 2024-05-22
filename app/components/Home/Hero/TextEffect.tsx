import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Cybersecurity Specialist',
        1000,
        'AI Professional',
        1000,
        'Data Scientist',
        1000
      ]}
      speed={50}
      className="text-[15px] md:text-[30px] text-cyan-600 font-bold "
      repeat={Infinity}
    />
  );
};

export default TextEffect;