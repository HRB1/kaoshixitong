<template>
    <el-select v-model="stemType" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
</template>
<script>
export default {
  props: {
    options: Array,
  },
  components: {},
  data() {
    return {
        stemType:"",

    };
  },
  computed: {},
  methods: {},
  created() {
      console.log(this.stemType)
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.select_item {
  max-height: 250px;
  padding-left: 0;
  overflow: auto;
  margin-bottom: 20px;
  p {
    height: 30px;
  }
}
</style>