import logo from './logo.svg';
import './App.css';
import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';

const schema = {
  type: 'object',
  properties: {
    datalocker: {
      title: 'Data Locker Re-run',
      type: 'object',
      properties: {
        clientId: {
          type: 'string',
        },
        subscriptionId: {
          type: 'string',
        },
        comment: {
          type: 'string',
        },
        zenDeskTicket: {
          type: 'string',
        },
        topics: {
          type: "array",
          uniqueItems: true,
          items: {
            type: "string",
            enum: ['', 'impressions', 'inapps', 'sessions', 'organicUninstalls', 'uninstalls', 'installs', 'clicks', 'inappsRetargeting', 
            'conversionsRetargeting', 'sessionsRetargeting', 'clicksRetargeting', 'impressionsRetargeting', 'websiteEvents', 'websiteVisits', 'websiteAssistedInstalls',
            'reinstalls', 'organicReinstalls', 'blockedClicks', 'blockedInapps', 'blockedInstalls', 'postAttributionInstalls', 'skadPostbacks', 'skadAdvertiserPostbacks',
            'skadConversionValueChangelog', 'skadInstalls', 'skadInapps', 'skadSrnAdvertisingDimensions', 'skadRedownloads', 'incrementalityInapps', 'incrementalityFirstSeenUsers',
            'incrementalitySessions', 'incrementalityInappsReattr', 'incrementalitySessionsReattr', 'incrementalityImpressions', 'incrementalityImpressionsRetarget',
            'incrementalityOrganicSessions', 'incrementalityOrganicInapps', 'attributedAdRevenue', 'organicAdRevenue', 'retargetingAdRevenue', 'attributedAdRevenueV2',
            'organicAdRevenueV2', 'retargetingAdRevenueV2', 'attributedAdrevenueSdkImpressionLevel', 'storesRawdata', 'storesDevicedata', 'adnetCohort', 'adnetAdRevenue',
            'failedClickSignatures', 'blockedClicksImpressions', 'rawPostbacks', 'aggregatedPostbacks', 'cohortUserAcquisition',  'cohortRetargeting', 'cohortUnified',
            'cohortUserAcquisitionVersioned', 'cohortRetargetingVersioned', 'cohortUnifiedVersioned', 'cohortUserAcquisitionTimezoneVersioned', 'cohortRetargetingTimezoneVersioned',
            'cohortUnifiedTimezoneVersioned', 'cohortUnifiedAgency', 'cohortRetargetingAgency', 'cohortUserAcquisitionAgency']
        }
      }
    },
      required: ['clientId', 'subscriptionId'],
    }
  }
};
const uischema = person.uischema;
const initialData = person.data;

function App() {
  const [data, setData] = useState(initialData);
  return (
    <div className='App'>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
}

export default App;