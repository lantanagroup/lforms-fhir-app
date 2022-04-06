/*
 * Define lforms constants here and use this a dependency in the angular application
 */
export const fhirServerConfig = {
  listFhirServers: [
    // Only open servers are supported. It should have one of the'url' and 'smartServiceUrl', or both.
    // configuration format:
    // { name: '',     // name for the FHIR server. optional
    //   url: '',  // base URL of the FHIR server (non-SMART), must be https, because the public server is https.
    //                 // optional.
    //   smartServiceUrl: '', // service URL of a SMART endpoint, if featured questionnaires are known available
    //                   // at this SMART endpoint. optional.
    //   featuredQuestionnaires: [ // available questionnaires at the FHIR server, to be shown
    //                             // in "Featured Questionnaires" section
    //      { name: '', // name of the featured questionnaire to be displayed.
    //        id: '',   // id of the featured questionnaire resource
    //        code: ''} // code of the featured questionnaire to be displayed with the name, if it is LOINC code.
    //   ],
    //
    // }
    { url: 'https://hapi4-dev.lantanagroup.com/fhir',
      featuredQuestionnaires: [
        {
          name: 'Some Other Questionnaire',
          id: 'SYtL8Sw8',
          code: 'SYtL8Sw8'
        },
        {
          name: 'CareQuality Questionnaire',
          id: '54127-6-x',
          code: '54127-6'
        }]
    }
  ]
};
