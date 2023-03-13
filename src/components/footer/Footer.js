import React from "react";
import data from '../../data/work.json';

export const Footer = (changeTheme) => {

  const foo = data.contact[0];

  return(
    <footer id="contact" className="text-light-color relative container-fluid flex flex-col itmes-center">
      <h5 className="uppercase text-center text-xl">{foo.mailtoTitle}</h5>
      <h1 className="text-center lg:text-7xl font-monumentRegular my-5">
        <a
          className="link-outlined"
          href={`mailto:${foo.mailtoMail}`}
          rel="noreferrer"
          target="_blank">{foo.mailtoMail}</a>
      </h1>
      <div className="subfooter container-fluid flex max-md:flex-col items-center justify-between mt-10 p-5">
        <p className="uppercase max-md:order-4">
          ©{new Date().getFullYear()} {foo.copyright}
        </p>
        <ul className="flex items-center max-md:order-1 max-md:mb-3">
          {foo.social.map((s) => (
            <li key={s.id}>
              <a className="p-2 uppercase mr-2 last:mr-0 hover:text-pink-600" href={s.url}>{s.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}