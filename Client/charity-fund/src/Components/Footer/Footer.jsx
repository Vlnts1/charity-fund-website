import React from 'react';

function Footer({ year }) {
  return (
    <div className="bg-light py-4 mt-4 text-center fixed-bottom">
      Благодійний Фонд "Духовність та здоров'я Нації" - {year}
    </div>
  );
}
export default Footer;
