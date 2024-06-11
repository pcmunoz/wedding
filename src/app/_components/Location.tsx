import React from "react";

const Location: React.FC = () => {
  return (
    <>
      <br />
      <section>
        <p className="text-3xl font-bold tracking-tighter leading-tight md:pr-8">Church:</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3185156710965!2d124.67254627669175!3d8.468375297509105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2ad667e88e3%3A0xdb14e6cbf21c4fb9!2sSaint%20Lorenzo%20Ruiz%20Filipino%20-%20Chinese%20Catholic%20Church!5e0!3m2!1sen!2sph!4v1718111537373!5m2!1sen!2sph"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <br />
      <section>
        <p className="text-3xl font-bold tracking-tighter leading-tight md:pr-8">Reception:</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.4519092594!2d124.69921433263734!3d8.471558171757469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffed4f1a37b2c3%3A0x551e2c08e7d7a150!2sCove%20Garden%20Resort!5e0!3m2!1sen!2sph!4v1718111894944!5m2!1sen!2sph"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Location;
