<template lang="html">
  <div class="tbale">
    <table>
      <thead class="hd">
        <th>ID</th>
        <th>name</th>
        <th>age</th>
      </thead>
      <tbody class="tb">
        <tr v-for="dis in da">
          <td>{{dis.ID}}</td>
          <td>{{dis.name}}</td>
          <td>{{dis.age}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>test</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      da:[
        {ID: 1, name:'z', age:13},
        {ID: 2, name:'y', age:14},
        {ID: 3, name:'x', age:15},
        {ID: 4, name:'w', age:16},
        {ID: 5, name:'q', age:17},
        {ID: 6, name:'e', age:18},
        {ID: 7, name:'r', age:19},
        {ID: 8, name:'t', age:20}
      ]

    }
  }
}
</script>

<style lang="css">
.hd th{
  display: inline-block;
  width: 120px;
}
.tb{
  display: block;
  height: 70px;
  overflow: scroll;
}
.tb>tr>td{
  width: 120px;
}
</style>
