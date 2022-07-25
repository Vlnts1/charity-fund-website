import React from 'react';

function Footer({ year }) {
          /* eslint-disable import/prefer-default-export */
  return (
    <div className="bg-light py-4 mt-4 text-center fixed-bottom">
      {`Благодійний Фонд "Духовність та здоров'я Нації" - `}{year}
    </div>
  );
}
export  {Footer};
