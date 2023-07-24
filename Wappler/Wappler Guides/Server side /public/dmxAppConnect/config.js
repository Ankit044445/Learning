dmx.config({
  "Insertingdatatodatabase": {
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "number",
          "name": "age"
        },
        {
          "type": "text",
          "name": "email"
        }
      ],
      "outputType": "array"
    }
  },
  "Filteringdata": {
    "repeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "number",
          "name": "age"
        },
        {
          "type": "text",
          "name": "email"
        }
      ],
      "outputType": "array"
    }
  },
  "DynamicPaging": {
    "query": [
      {
        "type": "text",
        "name": "offset"
      },
      {
        "type": "text",
        "name": "off"
      }
    ],
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "number",
          "name": "age"
        },
        {
          "type": "text",
          "name": "email"
        }
      ],
      "outputType": "array"
    }
  },
  "hdbiZPd": {
    "repeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "offset",
          "type": "number"
        },
        {
          "name": "limit",
          "type": "number"
        },
        {
          "name": "total",
          "type": "number"
        },
        {
          "name": "page",
          "type": "object",
          "sub": [
            {
              "name": "offset",
              "type": "object",
              "sub": [
                {
                  "name": "first",
                  "type": "number"
                },
                {
                  "name": "prev",
                  "type": "number"
                },
                {
                  "name": "next",
                  "type": "number"
                },
                {
                  "name": "last",
                  "type": "number"
                }
              ]
            },
            {
              "name": "current",
              "type": "number"
            },
            {
              "name": "total",
              "type": "number"
            }
          ]
        },
        {
          "name": "data",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "text",
              "name": "name"
            },
            {
              "type": "number",
              "name": "age"
            },
            {
              "type": "text",
              "name": "email"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "query": [
      {
        "type": "text",
        "name": "offset"
      }
    ]
  },
  "Dynamic_Sortable_Table": {
    "query": [
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      },
      {
        "type": "text",
        "name": "id"
      }
    ]
  }
});
