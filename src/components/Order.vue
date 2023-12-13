<template>
    <div class="product">
        <div class="producttitle">
            <h5 style="font-style: italic;font-weight: bold;margin-top: 15px;width: 200px;">Order ({{ rows }})
            </h5>
            <div class="fourbuttons">
                <button style="background-color: rgb(52,119,107);"><img src="../assets/icons8-search-50.png" alt="" ></button>
                <button @click="reloadpage" style="background-color: rgb(126,111,121);" ><img src="../assets/icons8-reload-50.png" alt=""></button>
                <button @click="printbutton" style="background-color: rgb(52,119,107);"><img src="../assets/icons8-print-50.png" alt=""></button>
                <button style="background-color: rgb(200,78,41);"><img src="../assets/icons8-plus-24.png" alt=""></button>
            </div>
        </div>
        <div class="search">
            <b-form-input v-model="text" @input="search" placeholder="Search" style="border-radius: 8px;"></b-form-input>
        </div>
        <div>
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
    <template v-slot:cell(EditDeleteButtons)="data">
          <div class="EditDeleteButtons">
            <button style="background-color: rgb(66, 148, 129); margin-right: 10px;">
              <img src="../assets/icons8-pencil-50.png" alt="">
            </button>
            <button style="background-color: rgb(84, 185, 209);">
              <img src="../assets/icons8-dustbin-64.png" alt="">
            </button>
          </div>
        </template>
</b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
        
    </div>
</template>

<script>

import { orderItems } from '../content.js'

export default {
    name: 'Product',
    data() {
        return {
            perPage: 10,
            currentPage: 1,
            items: orderItems,
            filteredItems: [...orderItems],
            text: ''
        }
    },
    computed: {
        rows() {
            return this.items.length
        },
    },
    methods: {
        printbutton() {
            window.print();
        },
        reloadpage() {
            window.location.reload(true);
        },
        search() {
            this.filteredItems = this.items.filter(item => {
                return (
                    item.name.toLowerCase().includes(this.text.toLowerCase()) ||
                    item.price.toString().includes(this.text) ||
                    item.quantity.toString().includes(this.text)
                );
            });
            this.currentPage = 1;
        },
    }
}
</script>

<style>
.product {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.producttitle {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 20px;
}

.fourbuttons {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 2px;
  justify-content: flex-end;
  align-items: end;
}

.fourbuttons img {
  width: 25px;
  height: 25px;
}

.fourbuttons button {
  border: none;
  width: auto;
  height: auto;
  padding: 6px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.fourbuttons button:focus {
  outline: none;
}

.fourbuttons button:active {
  transform: scale(0.9);
  background-color: rgb(95, 56, 233);
  color: white;
}

.fourbuttons button:hover {
  background-color: lightgray;
}

.search {
  margin-top: 50px;
}

#my-table {
  margin-top: 20px; /* Adjust margin as needed */
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

#my-table tr {
  transition: background-color 0.3s;
}

#my-table tr:hover {
  background-color: #f0f0f0; /* Change background color on hover */
}

#my-table td {
  padding: 15px; /* Adjust padding as needed */
}

#my-table th {
  padding: 15px; /* Adjust padding as needed */
}

.EditDeleteButtons {
  display: flex;
  justify-content: flex-end;
}

.EditDeleteButtons button {
  margin-left: 10px;
}

.EditDeleteButtons button img {
  width: 25px;
  height: 25px;
}

.EditDeleteButtons button {
  border: none;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.EditDeleteButtons button:hover {
  background-color: lightgray;
}

.EditDeleteButtons button:focus {
  outline: none;
}

.EditDeleteButtons button:active {
  transform: scale(0.9);
  background-color: rgb(95, 56, 233);
  color: white;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background-color: white;
  margin: 0 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination button.active {
  background-color: lightgray;
}

.pagination img {
  width: 15px;
  height: 15px;
}

.pagination button:hover {
  background-color: lightgray;
}

.pagination button:focus {
  outline: none;
}

.pagination button:active {
  transform: scale(0.9);
  background-color: rgb(95, 56, 233);
  color: white;
}
</style>
