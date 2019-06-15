export const COLUMN_PARAMETERS = [
  { checkboxSelection: true, width: 40 },
  { headerName: '', field: 'thumbnail', cellRenderer: 'imageRenderer', },
  { headerName: 'Published on', field: 'publishedAt', sortable: true },
  { headerName: 'Video Title', field: 'title', sortable: true, cellStyle: {'white-space': 'normal'} },
  { headerName: 'Description', field: 'description', sortable: true, cellStyle: {'white-space': 'normal'} },
];

export const STATUS_BAR_PARAMETERS = {
  statusPanels: [
    {
      statusPanel: "agTotalRowCountComponent",
      align: "left",
      key: "totalRowComponent"
    },
    {
      statusPanel: "agSelectedRowCountComponent",
      align: "left"
    },
  ]
};

export const API_VIEOS = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';

