<template>
  <q-page padding>
    <q-table :rows="items" :columns="columns">
      <template v-slot:body-cell-isreleased="props">
        <q-td :props="props">
          <q-btn
            v-if="!props.row.isreleased"
            color="primary"
            label="Release"
            @click="releaseItem(props.row)"
          />
          <q-chip v-else color="green" text-color="white"> RELEASED </q-chip>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: "DataTable",
  data() {
    return {
      columns: [
        {
          name: "type",
          required: true,
          label: "Type",
          align: "left",
          field: (row) => row.type,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "id",
          required: true,
          label: "ID",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "isreleased",
          required: true,
          label: "Is Released",
          align: "left",
          field: (row) => row.isreleased,
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
      items: [
        {
          type: "CARD",
          id: 1,
          isreleased: 1,
        },
        {
          type: "AICS",
          id: 71,
          isreleased: 0,
        },
      ],
    };
  },
  methods: {
    releaseItem(item) {
      item.isreleased = 1;
    },
  },
};
</script>

<style scoped></style>
