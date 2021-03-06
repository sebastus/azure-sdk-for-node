// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile2665\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '400',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a14e1187-d1e7-43ee-a3af-db9fb87d5643',
  'x-ms-client-request-id': '79ef62e2-7cab-40f2-a39a-3c6ae7e7886e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/operationresults/563fed7a-4900-42fc-a740-a21b0f794d55?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f056da59-5070-4f60-a9ea-a19272b5c067',
  'x-ms-routing-request-id': 'WESTUS:20160301T222503Z:f056da59-5070-4f60-a9ea-a19272b5c067',
  date: 'Tue, 01 Mar 2016 22:25:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile2665\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '400',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a14e1187-d1e7-43ee-a3af-db9fb87d5643',
  'x-ms-client-request-id': '79ef62e2-7cab-40f2-a39a-3c6ae7e7886e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/operationresults/563fed7a-4900-42fc-a740-a21b0f794d55?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f056da59-5070-4f60-a9ea-a19272b5c067',
  'x-ms-routing-request-id': 'WESTUS:20160301T222503Z:f056da59-5070-4f60-a9ea-a19272b5c067',
  date: 'Tue, 01 Mar 2016 22:25:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/operationresults/563fed7a-4900-42fc-a740-a21b0f794d55?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9d34478b-d81a-4492-ac60-f31595610b13',
  'x-ms-client-request-id': 'd9316e60-71ad-4f54-91ab-f90a4f768b54',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '5816449d-7536-4380-9ef7-c63cc90487aa',
  'x-ms-routing-request-id': 'WESTUS:20160301T222541Z:5816449d-7536-4380-9ef7-c63cc90487aa',
  date: 'Tue, 01 Mar 2016 22:25:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/operationresults/563fed7a-4900-42fc-a740-a21b0f794d55?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9d34478b-d81a-4492-ac60-f31595610b13',
  'x-ms-client-request-id': 'd9316e60-71ad-4f54-91ab-f90a4f768b54',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '5816449d-7536-4380-9ef7-c63cc90487aa',
  'x-ms-routing-request-id': 'WESTUS:20160301T222541Z:5816449d-7536-4380-9ef7-c63cc90487aa',
  date: 'Tue, 01 Mar 2016 22:25:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile2665\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '399',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '159f951b-1ecd-4cdc-a645-9a53a60bef73',
  'x-ms-client-request-id': '37c64778-0201-4be8-a068-5142eddef798',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b8e0af86-42e1-42b9-93ef-6169f1c775fc',
  'x-ms-routing-request-id': 'WESTUS:20160301T222549Z:b8e0af86-42e1-42b9-93ef-6169f1c775fc',
  date: 'Tue, 01 Mar 2016 22:25:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile2665\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '399',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '159f951b-1ecd-4cdc-a645-9a53a60bef73',
  'x-ms-client-request-id': '37c64778-0201-4be8-a068-5142eddef798',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b8e0af86-42e1-42b9-93ef-6169f1c775fc',
  'x-ms-routing-request-id': 'WESTUS:20160301T222549Z:b8e0af86-42e1-42b9-93ef-6169f1c775fc',
  date: 'Tue, 01 Mar 2016 22:25:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestEndpoint6514\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint6514.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '807',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '09b2f622-bbeb-42ac-8396-f2d63920fda4',
  'x-ms-client-request-id': 'e2709cd6-668f-4d4b-9d7b-ae86461ad730',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/operationresults/632017ae-00f6-4a9d-82dd-810972a9ebda?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'de252ea5-f1f7-4d55-a4fa-7760073e729b',
  'x-ms-routing-request-id': 'WESTUS:20160301T222603Z:de252ea5-f1f7-4d55-a4fa-7760073e729b',
  date: 'Tue, 01 Mar 2016 22:26:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestEndpoint6514\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint6514.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '807',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '09b2f622-bbeb-42ac-8396-f2d63920fda4',
  'x-ms-client-request-id': 'e2709cd6-668f-4d4b-9d7b-ae86461ad730',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/operationresults/632017ae-00f6-4a9d-82dd-810972a9ebda?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'de252ea5-f1f7-4d55-a4fa-7760073e729b',
  'x-ms-routing-request-id': 'WESTUS:20160301T222603Z:de252ea5-f1f7-4d55-a4fa-7760073e729b',
  date: 'Tue, 01 Mar 2016 22:26:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/operationresults/632017ae-00f6-4a9d-82dd-810972a9ebda?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f2ec3d90-7eb1-44d6-a648-4c6d3171aa7f',
  'x-ms-client-request-id': '72fa7096-df3d-4b30-9a68-ae759b0d8858',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '76d67459-0a77-482b-95b0-c4dbc936ce77',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222644Z:76d67459-0a77-482b-95b0-c4dbc936ce77',
  date: 'Tue, 01 Mar 2016 22:26:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/operationresults/632017ae-00f6-4a9d-82dd-810972a9ebda?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f2ec3d90-7eb1-44d6-a648-4c6d3171aa7f',
  'x-ms-client-request-id': '72fa7096-df3d-4b30-9a68-ae759b0d8858',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '76d67459-0a77-482b-95b0-c4dbc936ce77',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222644Z:76d67459-0a77-482b-95b0-c4dbc936ce77',
  date: 'Tue, 01 Mar 2016 22:26:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint6514\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint6514.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '807',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '4b095ad9-58fb-4e7f-9b8e-949964163a24',
  'x-ms-client-request-id': 'd2d6eea3-eae1-4451-bf42-ccb5ac04ff54',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '58eb5714-cd6d-4a3d-82c3-1108df46011a',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222652Z:58eb5714-cd6d-4a3d-82c3-1108df46011a',
  date: 'Tue, 01 Mar 2016 22:26:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint6514\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint6514.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '807',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '4b095ad9-58fb-4e7f-9b8e-949964163a24',
  'x-ms-client-request-id': 'd2d6eea3-eae1-4451-bf42-ccb5ac04ff54',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '58eb5714-cd6d-4a3d-82c3-1108df46011a',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222652Z:58eb5714-cd6d-4a3d-82c3-1108df46011a',
  date: 'Tue, 01 Mar 2016 22:26:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514/origins?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"newname\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '457',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '39a21818-2075-4426-8195-2bf5ac270193',
  'x-ms-client-request-id': '8d72e6cd-baf7-46d1-997c-8256f8e0ec73',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bad02d34-fcd2-4a15-9265-f8853bc6b682',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222700Z:bad02d34-fcd2-4a15-9265-f8853bc6b682',
  date: 'Tue, 01 Mar 2016 22:27:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514/origins?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"newname\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '457',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '39a21818-2075-4426-8195-2bf5ac270193',
  'x-ms-client-request-id': '8d72e6cd-baf7-46d1-997c-8256f8e0ec73',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bad02d34-fcd2-4a15-9265-f8853bc6b682',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222700Z:bad02d34-fcd2-4a15-9265-f8853bc6b682',
  date: 'Tue, 01 Mar 2016 22:27:00 GMT',
  connection: 'close' });
 return result; }]];