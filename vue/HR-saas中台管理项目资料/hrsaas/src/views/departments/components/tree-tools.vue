<template>
  <el-row
    type="flex"
    justify="space-between"
    align="middle"
    style="height: 40px;width: 100%"
  >
    <el-col>
      <!-- 名称应该变成 对应的节点中的name -->
      <span>{{ treeNode.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row
        type="flex"
        justify="end"
      >
        <!-- 两个内容 -->
        <el-col>{{ treeNode.manager }}</el-col>
        <el-col>
          <!-- 下拉菜单 element -->
          <el-dropdown @command="operateDepts">
            <span>
              操作<i class="el-icon-arrow-down" />
            </span>
            <!-- 下拉菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add">添加子部门</el-dropdown-item>
              <el-dropdown-item
                v-if="!isRoot"
                command="edit"
              >编辑部门</el-dropdown-item>
              <el-dropdown-item
                v-if="!isRoot"
                command="delete"
              >删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { delDepartments } from '@/api/department'
export default {
  // props可以用数组来接收数据 也可以用对象来接收
  // props: {   props属性: {  配置选项 }  }
  props: {
    treeNode: {
      required: true,
      type: Object
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    operateDepts (type) {
      if (type === 'add') {
        // 添加子部门的操作
        // 告诉父组件 显示弹层
        this.$emit('addDepts', this.treeNode) // 为何传出treeNode 因为是添加子部门 需要当前部门的数据
      } else if (type === 'edit') {
        this.$emit('editDept', this.treeNode)
      } else {
        this.$confirm('确定删除吗').then(() => {
          return delDepartments(this.treeNode.id)
        }).then(() => {
          // 自定义时间
          this.$emit('delDepts')
          this.$message.success('删除成功')
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
