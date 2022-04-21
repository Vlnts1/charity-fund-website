import React, { useState } from 'react';

function UploadFilesForm () {
    const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="UploadFilesForm">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </form>
    </div>
  );
};

export default UploadFilesForm;