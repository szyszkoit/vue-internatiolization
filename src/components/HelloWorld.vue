<template>
  <div class="hello">
    <h1>{{ $t('welcomeMsg') }}</h1>
    <p>
      {{ $t('guide') }},<br>
     {{ $t('checkout') }}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>{{ $t('plugins') }}</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>{{ $t('links') }}</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
    </ul>
    <h3>{{ $t('ecosystem') }}</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
    </ul>
    <localization-provider :language="'es-ES'">
          <intl-provider :locale="'es'" >
              <kendo-grid
              :data-source="localDataSource"
              :groupable="true"
              >
                  <kendo-grid-column :field="'ProductID'"
                                    :title="'ID'"
                                    :width="40"></kendo-grid-column>
                  <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
                  <kendo-grid-column :field="'UnitPrice'"
                                    :title="'Unit Price'"
                                    :width="120"
                                    :format="'{0:c}'"></kendo-grid-column>
                  <kendo-grid-column :field="'UnitsInStock'"
                                    :title="'Units In Stock'"
                                    :width="120"></kendo-grid-column>
                  <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
              </kendo-grid>
          </intl-provider>
      </localization-provider>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    locale: String,
    kendo_locale: String,
  },
  data: function () {
    return {
        skip: 0,
        take: 7,
        // columns: [
        //     { field: 'ProductID', title: 'ID', width: '70px', filterable: false},
        //     { field: 'ProductName', title: 'Nombre del producto' },
        //     { field: 'FirstOrderedOn', title: 'Primero ordenado en', filter: 'date', format: '{0:D}' },
        //     { field: 'UnitPrice', title: 'Precio unitario', filter: 'numeric', format: '{0:c}' }
        // ],
        localDataSource: [{
                "ProductID": 1,
                "ProductName": "Chai",
                "UnitPrice": 18,
                "UnitsInStock": 39,
                "Discontinued": false,
            },
            {
                "ProductID": 2,
                "ProductName": "Chang",
                "UnitPrice": 17,
                "UnitsInStock": 40,
                "Discontinued": false,
            },
            {
                "ProductID": 3,
                "ProductName": "Aniseed Syrup",
                "UnitPrice": 10,
                "UnitsInStock": 13,
                "Discontinued": false,
            },
            {
                "ProductID": 4,
                "ProductName": "Chef Anton's Cajun Seasoning",
                "UnitPrice": 22,
                "UnitsInStock": 53,
                "Discontinued": false,
            },
            {
                "ProductID": 5,
                "ProductName": "Chef Anton's Gumbo Mix",
                "UnitPrice": 21.35,
                "UnitsInStock": 0,
                "Discontinued": true,
            },
            {
                "ProductID": 6,
                "ProductName": "Grandma's Boysenberry Spread",
                "UnitPrice": 25,
                "UnitsInStock": 120,
                "Discontinued": false,
            },
        ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
