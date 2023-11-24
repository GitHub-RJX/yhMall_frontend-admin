export const tableOption = {
  searchMenuSpan: 6,
  columnBtn: false,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 350,
  align: 'center',
  refreshBtn: true,
  searchSize: 'mini',
  addBtn: false,
  editBtn: false,
  viewBtn: false,
  delBtn: false,
  props: {
    label: 'label',
    value: 'value'
  },
  column: [{
    label: '规格名称',
    prop: 'propName',
    search: true
  }, {
    label: '规格值',
    prop: 'prodPropValues',
    slot: true
  }]
}
