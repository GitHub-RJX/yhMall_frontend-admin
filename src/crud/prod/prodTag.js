export const tableOption = {
  searchMenuSpan: 6,
  columnBtn: false,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  addBtn: false,
  editBtn: false,
  delBtn: false,
  column: [
    {
      label: '标签名称',
      prop: 'title',
      search: true,
      slot: true
    },
    {
      label: '标签状态',
      prop: 'status',
      type: 'select',
      slot: true,
      search: true,
      dicData: [
        {
          label: '禁用',
          value: 0
        }, {
          label: '启用',
          value: 1
        }
      ]
    },
    {
      label: '默认类型',
      prop: 'isDfault',
      slot: true
    },
    {
      label: '标签排序',
      prop: 'seq'
    }
  ]
}
