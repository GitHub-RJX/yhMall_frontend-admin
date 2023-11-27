export const tableOption = {
  searchMenuSpan: 6,
  columnBtn: false,
  border: true,
  selection: true,
  index: false,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 350,
  align: 'center',
  refreshBtn: true,
  searchSize: 'mini',
  addBtn: false,
  editBtn: false,
  delBtn: false,
  viewBtn: false,
  props: {
    label: 'label',
    value: 'value'
  },
  column: [{
    label: '轮播图片',
    prop: 'imgUrl',
    type: 'upload',
    slot: true,
    listType: 'picture-img'
  }, {
    label: '展示顺序',
    prop: 'seq'
  }, {
    label: '启用状态',
    prop: 'status',
    search: true,
    type: 'select',
    width: 200,
    dicData: [
      {
        label: '禁用',
        value: 0
      }, {
        label: '启用',
        value: 1
      }
    ]
  }]
}
