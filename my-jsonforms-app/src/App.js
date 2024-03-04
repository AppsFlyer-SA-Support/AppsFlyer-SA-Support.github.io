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
const { MaterialBooleanControl } = Unwrapped;

/* const schema = person.schema;
const uischema = person.uischema; */
const initialData = person.data;

function App() {
  const [data, setData] = useState(initialData);
  return (
    <div className='App'>
      <JsonForms
        schema={schema}
        // uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
}

export default App;