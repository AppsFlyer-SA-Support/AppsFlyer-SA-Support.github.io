import logo from './logo.svg';
import './App.css';
import { person } from '@jsonforms/examples';
import schema from './schema.json';
import uischema from './uischema.json';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { Unwrapped } from '@jsonforms/material-renderers';
// const { MaterialBooleanControl } = Unwrapped;

/* const schema = person.schema;
const uischema = person.uischema; */
const initialData = {
  clientId: '',
  subscriptionId: '',
  comment: '',
  zenDeskTicket: '',
  priority: '',
  overwrite: '',
  submittedBy: '',
  from: '', // In real case, you should use a date string compatible with date input type
  to: '', // Same as above comment for the date
  includeHours: [],
  topics: []
};

function App() {
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Serialize the state to JSON
    const json = JSON.stringify(data);
    console.log(json); // Output the JSON data
    // Here you can also send the json to a server or process it further as needed
  };

  return (
    <div className='App'>
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
    </div>
  );
}

export default App;