<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <tree-tools
          :tree-node="company"
          :is-root="true"
          @addDepts="addDepts"
        />
        <el-tree
          :data="departs"
          :props="defaultProps"
          :default-expand-all="true"
        >
          <!-- 传入内容 插槽内容 会循环多次 有多少节点 就循环多少次 -->
          <!-- 作用域插槽 slot-scope="obj" 接收传递给插槽的数据   data 每个节点的数据对象-->
          <!-- 不加冒号,就传承了字符串 -->
          <tree-tools
            slot-scope="{data}"
            :tree-node="data"
            @delDepts="getDepartments"
            @addDepts="addDepts"
            @editDept="editDept"
          />
        </el-tree>

      </el-card>
    </div>
    <add-dpt
      ref="addDept"
      :show-dialog.sync="showDialog"
      :tree-node="node"
      @addDepts="getDepartments"
    />
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
import { getDepartments } from '@/api/department'
import { tranListToTreeData } from '@/utils'
import AddDpt from './components/add-dpt.vue'
export default {
  components: {
    TreeTools,
    AddDpt
  },
  data () {
    return {
      node: null, // 记录当前子节点
      showDialog: false,
      company: {
        name: '江苏传智播客教育科技股份有限公司',
        manager: '负责人',
        id: ''
      },
      departs: [
        {
          name: '总裁办', manager: '曹操',
          children: [{
            name: '董事会',
            manager: '曹丕'
          }]
        },
        {
          name: '行政部',
          manager: '刘备'
        },
        {
          name: '人事部',
          manager: '孙权'
        }],
      defaultProps: {
        label: 'name' // 表示 从这个属性显示内容
      }
    }
  },

  created () {
    this.getDepartments()
  },

  methods: {
    editDept (node) {
      this.showDialog = true
      this.node = node
      this.$refs.addDept.getDepartDetail(node.id)
    },
    async getDepartments () {
      const res = await getDepartments()
      this.company = { name: res.companyName, manager: '负责人' }
      // 父组件 调用子组件的方法
      this.departs = tranListToTreeData(res.depts, '')
    },
    addDepts (node) {
      this.showDialog = true // 显示弹层
      // 因为node是当前的点击的部门， 此时这个部门应该记录下来,
      this.node = node
    }
  }

}
</script>

<style scoped >
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>

