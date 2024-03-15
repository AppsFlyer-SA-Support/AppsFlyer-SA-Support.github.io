import logo from './logo.svg';
import './App.css';
import { person } from '@jsonforms/examples';
import schema from './schema.json';
import uischema from './uischema.json';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { Unwrapped } from '@jsonforms/material-renderers';
// const { MaterialBooleanControl } = Unwrapped;

/* const schema = person.schema;
const uischema = person.uischema; */
const initialData = {
  // Initialize your form fields here
};

function App() {
  const [data, setData] = useState(initialData);
  const [submittedData, setSubmittedData] = useState(null); // State for storing submitted data

  const handleSubmit = (event) => {
    event.preventDefault();
    const json = JSON.stringify(data, null, 2);
    console.log(json); // Output the JSON data to the console

    // Here you can also send the json to a server or process it further as needed
    setSubmittedData(json); // Set the submitted data to be displayed
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data, errors }) => setData(data)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display JSON output after submission */}
      {submittedData && (
        <div>
          <h3>Form Output:</h3>
          <pre>{submittedData}</pre>
        </div>
      )}
    </div>
  );
}

export default App;