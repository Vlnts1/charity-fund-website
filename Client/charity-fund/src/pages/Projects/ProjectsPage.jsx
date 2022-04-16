import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Projectcards from './Components/Projectscards';
import Textcontainer from './Components/Textcontainer';

function ProjectsPage() {
  return (
    <div>

     <Textcontainer/>
     <Projectcards/>
  

    </div>
  );
}

export default ProjectsPage;