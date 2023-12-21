export const tableOption = {
  searchMenuSpan: 6,
  columnBtn: false,
  border: true,
  selection: true,
  index: false,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 200,
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
    label: '产品名称',
    prop: 'prodName',
    width: 280,
    search: true
  }, {
    label: '产品原价',
    prop: 'oriPrice',
  }, {
    label: '产品现价',
    prop: 'price'
  }, {
    label: '产品库存',
    prop: 'totalStocks'
  }, {
    label: '产品图片',
    prop: 'pic',
    type: 'upload',
    width: 180,
    listType: 'picture-img'
  }, {
    label: '产品状态',
    prop: 'status',
    search: true,
    slot: true,
    type: 'select',
    width: 120,
    dicData: [
      {
        label: '未上架',
        value: 0
      }, {
        label: '已上架',
        value: 1
      }
    ]
  }]
}
